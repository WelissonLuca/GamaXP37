function convertToCurrency(value){
  return Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(value);
}

const produto = {
	id: 1,
	name: "Celular",
	price: 8000,
	discount: 5,
	description: {
		features: "touchscreen",
	},
	getDiscount: function() {
		return (this.price * this.discount) / 100;
	},
  getFinalPrice: function() {
    return convertToCurrency(this.price - this.getDiscount()) ;
  }
};

module.exports =  produto ;
