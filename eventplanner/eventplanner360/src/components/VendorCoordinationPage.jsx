import React from 'react';
import './VendorCoordinationPage.css'; // Import your CSS file for VendorCoordinationPage

const VendorCoordinationPage = () => {
  const vendors = [
    { name: "Catering Co.", service: "Catering", contact: "contact@cateringco.com", phone: "(123) 456-7890" },
    { name: "Decorators Inc.", service: "Decoration", contact: "contact@decoratorsinc.com", phone: "(234) 567-8901" },
    { name: "Sound & Light", service: "AV Equipment", contact: "contact@soundandlight.com", phone: "(345) 678-9012" },
    // Add more vendors as needed
  ];

  return (
    <div className="vendor-coordination-page">
      <h1>Vendor Coordination</h1>
      <div className="vendor-list">
        {vendors.map((vendor, index) => (
          <div className="vendor-item" key={index}>
            <h3>{vendor.name}</h3>
            <p><strong>Service:</strong> {vendor.service}</p>
            <p><strong>Contact:</strong> {vendor.contact}</p>
            <p><strong>Phone:</strong> {vendor.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorCoordinationPage;
