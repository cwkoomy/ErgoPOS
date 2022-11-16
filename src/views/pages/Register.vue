<template>
  <div class="bg min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm>
                  <h1>Register</h1>
                  <p class="text-medium-emphasis">Create Merchant Account</p>
                  <CInputGroup class="mb-3">
                    <CInputGroupText>
                      <CIcon icon="cil-home" />
                    </CInputGroupText>
                    <CFormInput
                      id="lbMerchantName"
                      placeholder="Merchant Name"
                    />
                  </CInputGroup>
                  <CInputGroup class="mb-3">
                    <CInputGroupText>
                      <CIcon icon="cil-user" />
                    </CInputGroupText>
                    <CFormInput
                      id="lbLoginID"
                      placeholder="User ID"
                      autocomplete="username"
                    />
                  </CInputGroup>
                  <CInputGroup class="mb-3">
                    <CInputGroupText>
                      <CIcon icon="cil-phone" />
                    </CInputGroupText>
                    <CFormInput id="lbMobileNo" placeholder="Mobile No" />
                  </CInputGroup>
                  <CInputGroup class="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      id="lbEmail"
                      placeholder="Email"
                      autocomplete="email"
                    />
                  </CInputGroup>
                  <CInputGroup class="mb-3">
                    <CInputGroupText>
                      <CIcon icon="cil-lock-locked" />
                    </CInputGroupText>
                    <CFormInput
                      id="lbPassword"
                      type="password"
                      placeholder="Password"
                      autocomplete="new-password"
                    />
                  </CInputGroup>
                  <CInputGroup class="mb-4">
                    <CInputGroupText>
                      <CIcon icon="cil-lock-locked" />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Repeat password"
                      autocomplete="new-password"
                    />
                  </CInputGroup>
                  <div class="d-grid">
                    <CButton
                      class="btn-primary btn-primary:hover"
                      @click="SubmitRegister()"
                      >Create Account</CButton
                    >
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
            <CCard class="text-white bg-color py-4">
              <CCardBody class="text-center">
                <div>
                  <div class="container">
                    <img
                      class="image-center"
                      height="120"
                      src="@/assets/images/Plogo.png"
                    />
                  </div>
                  <br />
                  <h5>Get started with ErgoPOS.</h5>
                  <p>
                    Payment solution, a hardware POS terminal with software
                    where combine the blockchain and real business world.
                  </p>
                  <CButton
                    color="light"
                    variant="outline"
                    class="mt-3"
                    @click="GotoLogin()"
                  >
                    Already Got Account?
                  </CButton>
                </div>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Register',

  methods: {
    SubmitRegister() {
      var vMerchantName = document.getElementById('lbMerchantName').value
      var vLoginID = document.getElementById('lbLoginID').value
      var vLoginPassword = document.getElementById('lbPassword').value
      var vEmail = document.getElementById('lbEmail').value
      var vMobileNo = document.getElementById('lbMobileNo').value
      axios
        .get(
          'http://118.107.242.54:8018/wsMerchant/Service1.asmx/MerchantRegister',
          {
            headers: {
              'Content-Type': 'application/json',
            },
            params: {
              MerchantName: vMerchantName,
              LoginID: vLoginID,
              LoginPassword: vLoginPassword,
              Email: vEmail,
              MobileNo: vMobileNo,
            },
          },
        )
        .then((res) => {
          if (res.data.RECORDS[0].ReturnCode === '1') {
            // sessionStorage.setItem(
            //   'userInfo',
            //   JSON.stringify(res.data.Merchant),
            // )
            // sessionStorage.setItem(
            //   'ssBalance',
            //   JSON.stringify(res.data.Merchant[0].EPOSBalance),
            // )
            console.log(res)
            console.log('Success')
            this.$router.push('/')
          } else {
            console.log('Error')
            this.$router.push('/views/pages/Login')
          }
        })
    },
    GotoLogin() {
      this.$router.push('/')
    },
  },
}
</script>

<style>
.bg {
  /* The image used */
  background-image: url('@/assets/images/eposbg.jpg');

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.bg-color {
  background-color: #2980b9;
}
.btn-primary,
.btn-primary:active,
.btn-primary:visited {
  background-color: #2980b9 !important;
  border-color: #2980b9 !important;
}
.btn-primary:hover {
  background-color: #144566 !important;
  border-color: #144566 !important;
}
</style>
