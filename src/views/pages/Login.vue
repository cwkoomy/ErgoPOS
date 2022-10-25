<template>
  <div class="bg min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm>
                  <h2>Merchant Login</h2>
                  <p class="text-medium-emphasis">Sign In to your account</p>
                  <CInputGroup class="mb-3">
                    <CInputGroupText>
                      <CIcon icon="cil-user" />
                    </CInputGroupText>
                    <CFormInput
                      id="lbLoginID"
                      placeholder="Username"
                      autocomplete="username"
                    />
                  </CInputGroup>
                  <CInputGroup class="mb-4">
                    <CInputGroupText>
                      <CIcon icon="cil-lock-locked" />
                    </CInputGroupText>
                    <CFormInput
                      id="lbLoginPassword"
                      type="password"
                      placeholder="Password"
                      autocomplete="current-password"
                    />
                  </CInputGroup>
                  <CRow>
                    <CCol :xs="6">
                      <CButton
                        class="px-4 btn-primary btn-primary:hover"
                        @click="SubmitLogin()"
                      >
                        Login
                      </CButton>
                    </CCol>
                    <CCol :xs="10" class="text-right">
                      <CButton color="link" class="px-0">
                        Forgot password?
                      </CButton>
                    </CCol>
                  </CRow>
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
                  <!-- <CButton color="light" variant="outline" class="mt-3">
                    Register Now!
                  </CButton> -->
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
  name: 'Login',

  methods: {
    SubmitLogin() {
      var vLoginID = document.getElementById('lbLoginID').value
      var vLoginPassword = document.getElementById('lbLoginPassword').value
      axios
        .get('http://118.107.242.54:8018/wsMerchant/Service1.asmx/Login', {
          headers: {
            'Content-Type': 'application/json',
          },
          params: {
            LoginID: vLoginID,
            LoginPassword: vLoginPassword,
          },
        })
        .then((res) => {
          if (res.data.RECORDS[0].ReturnCode === '1') {
            sessionStorage.setItem(
              'userInfo',
              JSON.stringify(res.data.Merchant),
            )
            sessionStorage.setItem(
              'ssBalance',
              JSON.stringify(res.data.Merchant[0].EPOSBalance),
            )
            console.log(res)
            console.log('Success')
            this.$router.push('/')
          } else {
            console.log('Error')
            this.$router.push('/views/pages/Login')
          }
        })
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
