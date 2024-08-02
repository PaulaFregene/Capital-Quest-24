"use client";

import Typography from '@mui/material/Typography';
import Header from '@/components/Header'; // Adjust path if needed

export default function Investing() {
  return (
    <div style={{ backgroundImage: 'linear-gradient(#D08C27, #F6F6F6)', minHeight: '100vh' }}>
      <Header />
      <div style={{ minHeight: '100vh', padding: '20px', position: 'relative' }}>
        {/* Centering the title */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <Typography variant="h1" style={{ color: 'white' }}>
            Investing
          </Typography>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
          {/* Left Side */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '50px', width: '30%' }}>
            <div style={{ padding: '10px', backgroundColor: 'white', borderRadius: '8px', minHeight: '80px', width: '200px', marginLeft: '25%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="h5" style={{ color: 'black', textAlign: 'center' }}>Stocks</Typography>
            </div>
            <div style={{ padding: '10px', backgroundColor: 'white', borderRadius: '8px', minHeight: '80px', width: '200px', marginLeft: '25%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="h5" style={{ color: 'black', textAlign: 'center' }}>Bonds</Typography>
            </div>
            <div style={{ padding: '10px', backgroundColor: 'white', borderRadius: '8px', minHeight: '80px', width: '200px', marginLeft: '25%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="h5" style={{ color: 'black', textAlign: 'center' }}>Real Estate</Typography>
            </div>

            {/* Risk Section */}
            <div style={{ padding: '20px', backgroundColor: 'lightcoral', borderRadius: '8px', minHeight: '100px', width: '300px', marginLeft: '15%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '80px' }}>
              <Typography variant="h5" style={{ color: 'white', textAlign: 'center' }}>Risk</Typography>
            </div>

            {/* Long Rectangle Below Risk */}
            <div style={{ padding: '20px', backgroundColor: 'lightcoral', borderRadius: '8px', minHeight: '600px', width: '400px', marginLeft: '7.5%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* Content or placeholder */}
            </div>
          </div>

          {/* Right Side */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '50px', width: '30%' }}>
            <div style={{ padding: '10px', backgroundColor: 'white', borderRadius: '8px', minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="body1" style={{ color: 'black', textAlign: 'center' }}>
                Debt security issued by government/corporation intended to be paid back with interest
              </Typography>
            </div>
            <div style={{ padding: '10px', backgroundColor: 'white', borderRadius: '8px', minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="body1" style={{ color: 'black', textAlign: 'center' }}>
                Property which can be used for residential, commercial, or investment purposes
              </Typography>
            </div>
            <div style={{ padding: '10px', backgroundColor: 'white', borderRadius: '8px', minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="body1" style={{ color: 'black', textAlign: 'center' }}>
                Ownership shares in a company
              </Typography>
            </div>

            {/* Reward Section */}
            <div style={{ padding: '20px', backgroundColor: 'lightgreen', borderRadius: '8px', minHeight: '100px', width: '300px', marginLeft: '25%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '80px' }}>
              <Typography variant="h5" style={{ color: 'white', textAlign: 'center' }}>Reward</Typography>
            </div>

            {/* Long Rectangle Below Reward */}
            <div style={{ padding: '20px', backgroundColor: 'lightgreen', borderRadius: '8px', minHeight: '600px', width: '400px', marginLeft: '16.5%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* Content or placeholder */}
            </div>
          </div>
        </div>

        {/* Vertical Stack of Circles */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          position: 'absolute',
          left: 'calc(20% + 30%)', // Align with the right side of the Risk and Reward sections
          transform: 'translateX(-50%)',
          top: 'calc(-10% + 55%)', // Align with the top of the Risk section
          gap: '20px',
        }}>
          {['Potential Loss', 'Ownership', 'Regular Income', 'Inflation', 'Rental Income', 'Maintenance'].map((text, index) => (
            <div
              key={index}
              style={{
                width: '150px', // Oval width
                height: '100px', // Oval height
                borderRadius: '50%',
                backgroundColor: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'black',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}