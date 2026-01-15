import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import { WEDDING_INFO, IS_GROOM_SIDE } from "@/constants";
import WeddingImage from "@/public/images/anhtrongQE_v2.jpg";
import { motion, AnimatePresence } from "motion/react";

interface GiftDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function GiftDialog({ open, onOpenChange }: GiftDialogProps) {
  const { gift } = WEDDING_INFO;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 overflow-hidden bg-white border-none shadow-2xl">
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full"
            >
              <div className="relative w-full h-[200px] overflow-hidden">
                <motion.div
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full"
                >
                  <Image
                    src={WeddingImage.src}
                    alt="Wedding"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>

              {/* QR Code Section */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="flex items-center gap-4 p-4"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="relative w-28 h-28 sm:w-32 sm:h-32 bg-white rounded-lg shadow-sm border border-gray-100 shrink-0"
                >
                  <Image
                    src={gift?.qrCode?.src || ""}
                    alt="QR Code"
                    fill
                    className="object-contain p-2"
                  />
                </motion.div>
                <div className="space-y-1 text-gray-800">
                  <p className="font-medium text-lg">
                    {gift?.bankName || "Ngân hàng"}
                  </p>
                  <div className="space-y-0.5 text-sm opacity-90">
                    <p className="font-mono">
                      STK: {gift?.accountNumber || ""}
                    </p>
                    <p>Chủ TK: {gift?.accountName || ""}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
