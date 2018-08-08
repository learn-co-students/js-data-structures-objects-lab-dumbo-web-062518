// Write your solution in this file!

  const driver = {}

  function updateDriverWithKeyAndValue(){
    const driver2 = Object.assign({}, driver, {name: 'Sam'}, {address: '11 Broadway'})
    return driver2
  }

  function destructivelyUpdateDriverWithKeyAndValue(){
    driver.name = 'Sam';
    driver.address = '12 Broadway';
    return driver
  }

  function deleteFromDriverByKey(driverObj, desKey){
    const newObj = Object.assign({}, driverObj)
    return delete newObj[desKey]
  }

  function destructivelyDeleteFromDriverByKey (driver, key) {
    return delete driver[key]
  }
