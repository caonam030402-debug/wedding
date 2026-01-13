export const RSVP_WILL_ATTEND = {
  YES: "yes",
  NO_ATTEND: "no_attend",
} as const;

export const RSVP_WITH_WHO = {
  ONLY_MYSELF: "only_myself",
  WITH_LOVER: "with_lover",
  WITH_FAMILY: "with_family",
} as const;

export const RSVP_FORM_FIELDS = {
  NAME: "name",
  MESSAGE: "message",
  WILL_ATTEND: "willAttend",
  WITH_WHO: "withWho",
  NUMBER_OF_PEOPLE: "numberOfPeople",
} as const;

export const VALIDATION_MESSAGES = {
  NAME_REQUIRED: "Vui lòng nhập tên của bạn",
  NUMBER_OF_PEOPLE_REQUIRED: "Vui lòng nhập số lượng người tham dự",
  NUMBER_OF_PEOPLE_MIN: "Số lượng phải lớn hơn 0",
  NUMBER_OF_PEOPLE_MAX: "Số lượng không được vượt quá 20 người",
} as const;

export const VALIDATION_RULES = {
  NUMBER_OF_PEOPLE: {
    MIN: 1,
    MAX: 20,
  },
} as const;
