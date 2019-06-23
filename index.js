const express = require('express')
const GSW = express()
const path = require('path')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000

express()
  GSW.use(express.static(path.join(__dirname, 'public')))
  GSW.use(bodyParser.json())
  GSW.use(bodyParser.urlencoded({extended: false}))
  GSW.set('views', path.join(__dirname, 'views'))
  GSW.set('view engine', 'ejs')
  GSW.get('/', (req, res) => res.render('pages/index'))
  GSW.post("/getRate", (req, res) => 
  {
    let weight = req.body.weight
    let type = req.body.mailType
    res.render('pages/calculationResults.ejs', 
    {
      weight: weight + " ounces",
      type: getType(type),
      rate: "$" + calculateRate(weight, type).toFixed(2)
    })  
  })
  GSW.listen(PORT, () => console.log(`Listening on ${ PORT }`))

  
function calculateRate(weight, type)
{
  /*
  switch(type)
  {
    case "stamp":
      if (weight <= 1)
      {
        return 0.55
      }
      else if (weight <= 2)
      {
        return 0.70
      }
      else if (weight <= 3)
      {
        return 0.85
      }
      else if (weight <= 3.5)
      {
        return 1.00
      }
      else
      {
        window.alert("The letter you want to send is too heavy.")
      }
  }
  */
  if ((weight <= 1) && ((type == "stamp") || (type == "meter") || (type == "envelopes")))
  {
    switch (type)
    {
      case "stamp":
        return 0.55
      
      case "meter":
        return 0.5

      case "envelopes":
        return 1.0
    }
  }
  else if ((weight <= 2) && ((type == "stamp") || (type == "meter") || (type == "envelopes")))
  {
    switch (type)
    {
      case "stamp":
        return 0.70
      
      case "meter":
        return 0.65

      case "envelopes":
        return 1.15
    }
  }
  else if ((weight <= 3) && ((type == "stamp") || (type == "meter") || (type == "envelopes")))
  {
    switch (type)
    {
      case "stamp":
        return 0.80
      
      case "meter":
        return 0.85

      case "envelopes":
        return 1.30
    }
  }
  else if ((weight <= 3.5) && ((type == "stamp") || (type == "meter")))
  {
    switch (type)
    {
      case "stamp":
        return 1.0

      case "meter":
        return 0.95
    }    
  }
  else if ((weight <= 4) && ((type == "envelopes") || (type == "retail")))
  {
    switch (type)
    {
      case "envelopes":
        return 1.45
    
      case "retail":
        return 3.66
    }
  }
  else if ((weight <= 5) && ((type == "envelopes")))
  {
    return 1.60
  }
  else if ((weight <= 6) && ((type == "envelopes")))
  {
    return 1.75
  }
  else if ((weight <= 7) && ((type == "envelopes")))
  {
    return 1.90
  }
  else if ((weight <= 8) && ((type == "envelopes") || (type == "retail")))
  {
    switch (type)
    {
      case "envelopes":
        return 2.05
    
      case "retail":
        return 4.39
    }
  }
  else if ((weight <= 9) && ((type == "envelopes")))
  {
    return 2.20
  }
  else if ((weight <= 10) && ((type == "envelopes")))
  {
    return 2.35
  }
  else if ((weight <= 11) && ((type == "envelopes")))
  {
    return 2.50
  }
  else if ((weight <= 12) && ((type == "envelopes") || (type == "retail")))
  {
    switch (type)
    {
      case "envelopes":
        return 2.65
    
      case "retail":
        return 5.19
    }
  }
  else if ((weight <= 13) && ((type == "envelopes") || (type == "retail")))
  {
    switch (type)
    {
      case "envelopes":
        return 2.80
    
      case "retail":
        return 5.71
    }
  }
  else if ((weight > 3.5) && ((type == "stamp") || (type == "meter")))
  {
    return "The letter you want to send is too heavy."
  }
  else if ((weight > 13) && ((type == "envelopes") || (type == "retail")))
  {
    switch (type)
    {
      case "envelopes":
        return "The envelope you want to send is too heavy."
      
      case "retail":
        return "The retail package you want to send is too heavy."
    }
  }
  else
  {
    /* code */    
  }  
}

function getType(type)
{
  switch (type)
  {
    case "stamp":
      return "Stamped Letters"
    
    case "meter":
      return "Metered Letters"
  
    case "envelopes":
      return "Large Flat Envelopes"

    case "retail":
      return "First-Class Package Service &mdash; Retail"
  }
}













