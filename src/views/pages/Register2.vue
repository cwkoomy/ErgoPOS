<template>
  <div class="bg min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="9" :lg="7" :xl="6">
          <CCard class="mx-4">
            <CCardBody class="p-4">
              <CForm>
                <h1>Register</h1>
                <p class="text-medium-emphasis">Create your account</p>
                <CInputGroup class="mb-3">
                  <CInputGroupText>
                    <CIcon icon="cil-user" />
                  </CInputGroupText>
                  <CFormInput
                    id="lbLoginID"
                    placeholder="Login ID"
                    autocomplete="username"
                  />
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
                    <CIcon icon="cil-phone" />
                  </CInputGroupText>
                  <CFormInput id="lbMobileNo" placeholder="Mobile No" />
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
                  <CButton color="success">Create Account</CButton>
                </div>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
export default {
  name: 'Register',
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
