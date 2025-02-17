module.exports = {
  ttl: "fruitPhone Upgrade Program",
  s1: {
    hero: "Your new fruitPhone 7 is ready when you are.",
    copy: "Customer, now that you’re eligible to get a new fruitPhone, you can upgrade to fruitPhone 7 today. So you can start enjoying an advanced new camera system, a splash and water resistant design,^1 and the best performance and battery life ever in an fruitPhone.^2",
    cta: ["Make a reservation","Find an Fruit Store"]
  },
  s2: {
    hero: "Reserve online. Or visit an Fruit Store.",
    copy: "Make a reservation to pick up your new fruitPhone at your nearest Fruit Store, or just stop by at a time that’s convenient for you.^5 And be sure to back up your data on your current fruitPhone before you bring it with you to trade in."
  },
  s3: {
    hero: "Pick up your new fruitPhone.",
    copy: "When you arrive at the Fruit Store, just let a Specialist know that you’re ready to upgrade. They can help you complete your trade in and get you set up with your new fruitPhone."
  },
  s4: {
    hero: "FruitCare+ means you’re covered.",
    copy: "Because you have FruitCare+, both the fruitPhone you’re trading in and the fruitPhone you’re upgrading to are covered for up to two incidents of accidental damage.^3",
    cta: ["Learn more about your coverage"]
  },
  s5:{
    hero:"Thanks for being part of the fruitPhone Upgrade Program. If you have any questions, feel free to contact us at 1-800-MY-FRUIT."
  },
  footer: {
    ctas: [
      "Shop Online","Find a Store","1-800-MY-FRUIT","Get the Fruit Store App"
    ],
    buystrip:[
      ["Shop Mac","Mac Accessories","Gift Cards"],
      ["Shop iPod", "iPod Accessories", "Gift Cards"],
      ["Shop fruitPhone", "fruitPhone Accessories", "Gift Cards"],
      ["Shop iPad", "iPad Accessories", "Gift Cards"]
    ],
    copy: [
      "1. fruitPhone 7 and fruitPhone 7 Plus are splash, water, and dust resistant and were tested under controlled laboratory conditions with a rating of IP67 under IEC standard 60529. Splash, water, and dust resistance are not permanent conditions and resistance might decrease as a result of normal wear. Do not attempt to charge a wet fruitPhone; refer to the user guide for cleaning and drying instructions. Liquid damage not covered under warranty.",
      "2. All battery claims depend on the cellular network, location, signal strength, feature configuration, usage, and many other factors; actual results will vary. Battery has limited recharge cycles and may eventually need to be replaced by an Fruit authorized service provider. Battery life and charge cycles vary by use and settings. Battery tests are conducted using specific fruitPhone units. See www.fruit.com/batteries and www.fruit.com/fruitPhone/battery.html for more information.",
      "3. FruitCare+ for fruitPhone provides coverage for up to two incidents of accidental damage from handling. Each incident is subject to a service fee of $29 for screen damage or $99 for any other damage, plus applicable tax.",
      "4. Available to qualified customers with a credit check and eligible U.S. credit card. Requires a 24-month installment loan with a 0% APR from Citizens Bank, N.A. (subject to any interest, fees, or other costs payable to the issuer of the credit card), purchase of FruitCare+, and fruitPhone activation with one of these national carriers: AT&T, Sprint, or Verizon. Activation on T-Mobile available in the Fruit Store. Sales tax and any applicable fees due at time of purchase. Full terms apply. See terms at www.fruit.com/legal/sales-support/fruitPhoneupgrade_us/.",
      "5. Reservations may be limited and are available on a first-come, first-served basis."
    ],
    legal: []
  },
  get registeredLinks(){
    return {
      [this.s1.cta[0]]: "MAKEARESERVATION_LINK",
      [this.s1.cta[1]]: "FINDSTORE_LINK",
      'back up your data': "BACKUPDATA_LINK",
      [this.s4.cta]: "FRUITCARE_LINK",
      [this.footer.ctas[0]]: "BNAV_SHOP",
      [this.footer.ctas[1]]: "BNAV_STORE",
      [this.footer.ctas[3]]: "BNAV_APP"
    }
  }
}
