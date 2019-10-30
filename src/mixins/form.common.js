import { storeWXFormID } from '@/api'

export default {
  methods: {
    formSubmit(e) {
      if (e && e.mp && e.mp.detail) {
        var formID = e.mp.detail.formId
        if (formID.indexOf(' ') === -1) {
          // don't await, no necessary
          // because this page will navigate away soon
          storeWXFormID(formID)
        }
      }
    }
  }
}
