<template>
  <CModal
    :visible="visibleMsgBox"
    @close="
      () => {
        visibleMsgBox = false
      }
    "
  >
    <CModalHeader>
      <CModalTitle>Modal title</CModalTitle>
    </CModalHeader>
    <CModalBody>Woohoo, you're reading this text in a modal!</CModalBody>
    <CModalFooter>
      <CButton
        color="secondary"
        @click="
          () => {
            visibleMsgBox = false
          }
        "
      >
        Close
      </CButton>
      <CButton color="primary">Save changes</CButton>
    </CModalFooter>
  </CModal>
</template>

<script>
export default {
  name: 'MsgBox',
  data() {
    return {
      visibleMsgBox: false,
    }
  },
}
</script>
