// console.log('Write your code here!')
// console.log('customers and moment are available to you.')

function titleCase (word) {
    return word[0].toUpperCase() + word.slice(1)
  }
function toTitleCase (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
};
  
  class Customer {
    constructor (customerInfo) {
        this.info = customerInfo
    }
  
    getName () {
      return titleCase(this.info.name.first) +
        ' ' +
        titleCase(this.info.name.last)
    }
    getthumbnail() {
        return this.info.picture.large
    }
    getLocation() {
        return this.info.location.street
    }
    getDOB(){
        return moment(this.info.dob).format('MMM Do, YYYY')
    }
    getStartDate(){
        return moment(this.info.registered).format('MMM Do, YYYY')
    }
    getLocation (){
        return toTitleCase(this.info.location.street) + ',' + ' ' + toTitleCase(this.info.location.city) + '\n' + toTitleCase(this.info.location.state) + ',' + ' ' + this.info.location.postcode
    }
    getemail(){
        return this.info.email
    }
    
  
    generateDOM () {
      let customerDiv = document.createElement('div')
      customerDiv.classList.add('customer')
  
      let nameH2 = document.createElement('h2')
      nameH2.innerText = this.getName()

      let email = document.createElement('div')
      email.classList.add('email')
      email.innerHTML = this.getemail()

      let thumbnail = document.createElement('img')
      thumbnail.classList.add('thumbnail')
      thumbnail.src = this.getthumbnail()

      let dob = document.createElement('div')
      dob.classList.add('dob')
      dob.innerHTML = 'Bithday ' + this.getDOB()

      let startDate = document.createElement('div')
      startDate.classList.add('start_date')
      startDate.innerHTML = 'Start Date ' + this.getStartDate()

      let location = document.createElement('div')
      location.classList.add('address')
      location.innerHTML = this.getLocation()

      let header = document.createElement('div')
      header.classList.add('h1')
      header.innerHTML = 'Staff information'



      
      customerDiv.appendChild(nameH2)
      customerDiv.appendChild(thumbnail)
      customerDiv.appendChild(email)
      customerDiv.appendChild(location)
      customerDiv.appendChild(dob) 
      customerDiv.appendChild(startDate)
      
  
      return customerDiv
    }
}

  
    let outputDiv = document.getElementById('customers')
    for (let customerInfo of customers) {
        let customer = new Customer(customerInfo)
        outputDiv.appendChild(customer.generateDOM())
    }


