function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

//To check the current website url DEV | PROD
const __DEV__ = document.domain === 'localhost';

const displayRazorpay = async (props) => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

    if (!res) {
        alert('Razorpay SDK failed to load. Are you online?')
        return
    }

    const data = await fetch('http://localhost:5001/v1/auth/payment', { method: 'POST' }).then((t) =>
        t.json()
    )

    console.log(data);

    const options = {
        key: __DEV__ ? 'rzp_test_YGSE6v6mHSBcox' : 'PRODUCTION_KEY',
        currency: data.currency,
        amount: data.amount.toString(),
        order_id: data.id,
        name: 'Donation',
        description: 'Thank you for nothing.',
        image: 'http://localhost:1337/logo.svg',
        handler: function (response) {
            alert(response.razorpay_payment_id)
            alert(response.razorpay_order_id)
            alert(response.razorpay_signature)
            //navigate to success page.
            
        },
        prefill: {
            name : 'Shubham Mourya',
            email: 'test@localhost.com',
            phone_number: '9899999999'
        }
    }
    const paymentObject = new window.Razorpay(options)
    paymentObject.open()
}

export default displayRazorpay;