"use client";

import React, { useState, useRef } from "react";
import { FieldValues, useForm, useWatch } from "react-hook-form";
import { motion, useInView } from "motion/react";

import { toast } from "sonner";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RSVP_OPTIONS } from "@/constants/options";
import {
  RSVP_WILL_ATTEND,
  RSVP_WITH_WHO,
  RSVP_FORM_FIELDS,
  VALIDATION_MESSAGES,
  VALIDATION_RULES,
} from "@/enums";
import GiftDialog from "./GiftDialog";

export default function WeddingRsvpForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isGiftDialogOpen, setIsGiftDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm();
  const willAttendValue = useWatch({
    control: form.control,
    name: RSVP_FORM_FIELDS.WILL_ATTEND,
  });
  const withWhoValue = useWatch({
    control: form.control,
    name: RSVP_FORM_FIELDS.WITH_WHO,
  });

  const onSubmit = async (data: FieldValues) => {
    console.log("Submit data:", data);
    setIsSubmitting(true);
    try {
      const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

      if (!GOOGLE_SCRIPT_URL) {
        throw new Error("Missing NEXT_PUBLIC_GOOGLE_SCRIPT_URL env variable");
      }

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify(data),
      });

      toast.success("Cảm ơn bạn đã xác nhận!");
      form.reset();
    } catch (error) {
      console.error("Submit error:", error);
      toast.error("Có lỗi xảy ra khi gửi. Bạn vui lòng thử lại sau nhé!");
    } finally {
      setIsSubmitting(false);
    }
  };

  const onInvalid = (errors: object) => {
    console.log("Validation errors:", errors);
    toast.error("Vui lòng điền đầy đủ các thông tin bắt buộc!");
  };

  return (
    <div className="text-center px-6" ref={ref}>
      <motion.div
        className="text-4xl font-pinyon-script mb-5"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        Words of Love
      </motion.div>
      <motion.p
        className="text-base mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Hãy xác nhận sự có mặt của bạn để chúng mình chuẩn bị đón tiếp một cách
        chu đáo nhất. Trân trọng!
      </motion.p>
      <Form {...form}>
        <motion.form
          onSubmit={form.handleSubmit(onSubmit, onInvalid)}
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <FormField
            control={form.control}
            name={RSVP_FORM_FIELDS.MESSAGE}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Gửi lời chúc đến cô dâu chú rể"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={RSVP_FORM_FIELDS.WILL_ATTEND}
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue>
                      {field.value
                        ? RSVP_OPTIONS.willAttend.find(
                            (item) => item.value === field.value
                          )?.label
                        : "Bạn sẽ sẽ đến chứ?"}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {RSVP_OPTIONS.willAttend.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          {willAttendValue === RSVP_WILL_ATTEND.YES && (
            <FormField
              control={form.control}
              name={RSVP_FORM_FIELDS.WITH_WHO}
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue>
                        {field.value
                          ? RSVP_OPTIONS.withWho.find(
                              (item) => item.value === field.value
                            )?.label
                          : "Bạn sẽ tham gia cùng ai?"}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {RSVP_OPTIONS.withWho.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          )}
          {willAttendValue === RSVP_WILL_ATTEND.YES &&
            withWhoValue === RSVP_WITH_WHO.WITH_FAMILY && (
              <FormField
                control={form.control}
                name={RSVP_FORM_FIELDS.NUMBER_OF_PEOPLE}
                rules={{
                  required: VALIDATION_MESSAGES.NUMBER_OF_PEOPLE_REQUIRED,
                  min: {
                    value: VALIDATION_RULES.NUMBER_OF_PEOPLE.MIN,
                    message: VALIDATION_MESSAGES.NUMBER_OF_PEOPLE_MIN,
                  },
                  max: {
                    value: VALIDATION_RULES.NUMBER_OF_PEOPLE.MAX,
                    message: VALIDATION_MESSAGES.NUMBER_OF_PEOPLE_MAX,
                  },
                }}
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Số lượng người tham dự"
                        type="number"
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    {fieldState.error && (
                      <p className="text-sm text-destructive mt-1">
                        {fieldState.error.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />
            )}
          <Button
            size="lg"
            type="submit"
            className="w-full mt-3 font-cormorant-unicase"
            disabled={isSubmitting}
          >
            {isSubmitting ? "ĐANG GỬI..." : "GỬI LỜI NHẮN VÀ XÁC NHẬN"}
          </Button>
          <Button
            variant="outline"
            size="lg"
            type="button"
            className="w-full font-cormorant-unicase"
            onClick={() => setIsGiftDialogOpen(true)}
          >
            GỬI QUÀ MỪNG CƯỚI
          </Button>
        </motion.form>
      </Form>

      <GiftDialog open={isGiftDialogOpen} onOpenChange={setIsGiftDialogOpen} />
    </div>
  );
}
