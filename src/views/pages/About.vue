<template>
  <div class="bg-light align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="8">
          <div class="clearfix text-center">
            <h5 class="pt-2 text-primary">OUR PURPOSE</h5>
            <h1 class="">
              ErgoPOS is a payment platform for organizations to pay and get
              paid with
              <br />
              ERGO Crypto Currency.
            </h1>
          </div>
          <!-- <CInputGroup class="input-prepend">
            <CInputGroupText>
              <CIcon icon="cil-magnifying-glass" />
            </CInputGroupText>
            <CFormInput type="text" placeholder="What are you looking for?" />
            <CButton color="info">Search</CButton>
          </CInputGroup> -->
        </CCol>
      </CRow>
      <CRow class="container text-center align-items-center">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col">
            <div class="card">
              <div>
                <br /><font-awesome-icon
                  icon="fa-solid fa-cash-register"
                  size="4x"
                />
              </div>
              <div class="card-body">
                <h5 class="card-title">Point of Sales</h5>
                <p class="card-text">
                  Manage sales, customer, product and able to print
                  receipt/invoice.
                </p>
                <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <div>
                <br /><font-awesome-icon
                  icon="fa-solid fa-credit-card"
                  size="4x"
                />
              </div>
              <div class="card-body">
                <h5 class="card-title">Payment Solution</h5>
                <p class="card-text">
                  Accept different cryptocurrencies as payment currencies.
                </p>
                <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <div>
                <br /><font-awesome-icon
                  icon="fa-solid fa-right-left"
                  size="4x"
                />
              </div>
              <div class="card-body">
                <h5 class="card-title">Exchange Service</h5>
                <p class="card-text">
                  Provide services to convert different cryptocurrencies into
                  stable coins.
                </p>
                <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
              </div>
            </div>
          </div>
        </div>
      </CRow>
      <CRow class="container text-center align-items-center">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col">
            <div class="card">
              <div>
                <br /><font-awesome-icon
                  icon="fa-solid fa-file-invoice-dollar"
                  size="4x"
                />
              </div>
              <div class="card-body">
                <h5 class="card-title">Sales Reports</h5>
                <p class="card-text">
                  View various daily sales reports and product reports.
                </p>
                <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <div>
                <br /><font-awesome-icon
                  icon="fa-solid fa-diagram-project"
                  size="4x"
                />
              </div>
              <div class="card-body">
                <h5 class="card-title">Ecosystem</h5>
                <p class="card-text">
                  Link with ERGO ecosystem such as microfinance, staking
                  investments.
                </p>
                <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <div>
                <br /><font-awesome-icon icon="fa-solid fa-users" size="4x" />
              </div>
              <div class="card-body">
                <h5 class="card-title">Community Drive</h5>
                <p class="card-text">
                  Community-Driven project operate on the principles of
                  transparency.
                </p>
                <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
              </div>
            </div>
          </div>
        </div>
      </CRow>
    </CContainer>
    <CContainer>
      <CRow class="justify-content-center">
        <table style="height: 120px">
          <tbody>
            <tr>
              <td class="align-middle h1 text-center">
                Online Payment Ecosystem
              </td>
            </tr>
          </tbody>
        </table>
      </CRow>
      <CRow class="container text-center align-items-center">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
          <div class="col">
            <div class="card">
              <div class="card-header">Layer 1</div>
              <div class="card-body">
                <h5 class="card-title">Local Payment Network</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-header">Layer 2</div>
              <div class="card-body">
                <h5 class="card-title">Global Payment Network</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-header cheader">Layer 3</div>
              <div class="card-body">
                <h5 class="card-title">Payment Gateway</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-header">Layer 4</div>
              <div class="card-body shadow">
                <h5 class="card-title">Payment Platform</h5>
                <img src="@/assets/images/Plogo.png" style="height: 50px" />
                <img src="@/assets/images/ergologo.png" style="height: 50px" />
                <!-- <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p> -->
              </div>
            </div>
          </div>
        </div>
      </CRow>
    </CContainer>
    <CContainer style="height: 120px"></CContainer>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>
<style>
.cheader {
  background: rgba(0, 109, 128, 0.534);
}
</style>
