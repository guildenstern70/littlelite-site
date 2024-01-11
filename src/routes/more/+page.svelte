<!--
  -
  -  LittleLite Software
  -  Web Site
  -  Copyright (c) 2023 Alessio Saltarin
  -
  -->
  
<script>
  import other from '$lib/assets/littlelite_other.jpeg';
  import sub from '$lib/assets/littlelite_sub.jpeg';
  import offices from '$lib/assets/littlelite_offices.jpeg';
</script>

<div class="row pt-5 mt-5 text-center">
    <div class="col">
        <div class="card llcard">
          <img src="{other}" class="card-img-top" alt="LittleLite Offices #1">
          <div class="card-body">
            <h5 class="card-title">Mission</h5>
            <p class="card-text">
              <a href="/">LittleLite Software</a> is a software factory
              specialized in niche online services and cryptography.
            </p>
          </div>
        </div>
    </div>
    <div class="col">
        <div class="card llcard">
          <img src="{sub}" class="card-img-top" alt="LittleLite Offices #2">
          <div class="card-body">
            <h5 class="card-title">Products</h5>
            <p class="card-text">
              LLCryptoLib - Alexandria - Travax
            </p>
          </div>
        </div>
    </div>
    <div class="col">
        <div class="card llcard">
          <img src="{offices}" class="card-img-top" alt="LittleLite Offices #3">
          <div class="card-body">
            <h5 class="card-title">Contacts</h5>
            <p class="card-text">
            Write to: <a>info21@littlelite.eu</a>
            </p>
          </div>
        </div>
    </div>
</div>
<div class="row pt-5 mt-5">
  <div class="col"></div>
  <div class="col"><a href="/" class="backhome btn btn-outline-secondary">Home</a></div>
  <div class="col"></div>
</div>
  
<style>

.backhome {
  width: 200px;
  margin-bottom: 50px;
}

.llcard {
  width: 20rem;
  height: 480px;
  margin-left: 20px;
  margin-bottom: 30px;
}

@media only screen and (min-width: 768px) {

  .backhome {
    margin-left: 100px;
    width: 200px;
    margin-bottom: 50px;
  }

  .llcard {
    width: 22rem;
    height: 500px
  }
}
</style>
  
