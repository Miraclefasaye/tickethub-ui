import { useState } from 'react';

function App() {
  const [form, setForm] = useState({
    concertId: 456,
    email: '',
    name: '',
    phone: '',
    quantity: 1,
    creditCard: '',
    expiration: '',
    securityCode: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
    country: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://tickethub-api9021.azurewebsites.net/api/tickets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert('Ticket purchase submitted!');
        setForm({ ...form, email: '', name: '', phone: '', creditCard: '', expiration: '', securityCode: '', address: '', city: '', province: '', postalCode: '', country: '', quantity: 1 });
      } else {
        alert('Submission failed.');
      }
    } catch (err) {
      console.error(err);
      alert('Error submitting form.');
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>🎫 Purchase Concert Tickets</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '600px' }}>
        <input name="email" placeholder="Email" onChange={handleChange} value={form.email} required /><br />
        <input name="name" placeholder="Name" onChange={handleChange} value={form.name} required /><br />
        <input name="phone" placeholder="Phone" onChange={handleChange} value={form.phone} required /><br />
        <input name="quantity" type="number" min="1" max="10" onChange={handleChange} value={form.quantity} required /><br />
        <input name="creditCard" placeholder="Credit Card" onChange={handleChange} value={form.creditCard} required /><br />
        <input name="expiration" placeholder="MM/YY" onChange={handleChange} value={form.expiration} required /><br />
        <input name="securityCode" placeholder="CVV" onChange={handleChange} value={form.securityCode} required /><br />
        <input name="address" placeholder="Address" onChange={handleChange} value={form.address} required /><br />
        <input name="city" placeholder="City" onChange={handleChange} value={form.city} required /><br />
        <input name="province" placeholder="Province" onChange={handleChange} value={form.province} required /><br />
        <input name="postalCode" placeholder="Postal Code" onChange={handleChange} value={form.postalCode} required /><br />
        <input name="country" placeholder="Country" onChange={handleChange} value={form.country} required /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
