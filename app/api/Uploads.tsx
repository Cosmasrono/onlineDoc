// pages/api/upload.js
import cloudinary from '@cloudinary/react';
import { Cloudinary } from 'cloudinary-core';
import supabase from '../../components/CouncellorList';


 



const cloudinaryCore = new Cloudinary({ cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME });

export default async function handler(req: { method: string; body: { title: any; description: any; category: any; price: any; contact: any; image: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error?: any; success?: boolean; }): void; new(): any; }; }; }) {
  if (req.method === 'POST') {
    const { title, description, category, price, contact, image } = req.body;

    try {
      // Upload image to Cloudinary
      const cloudinaryResponse = await cloudinary.v2.uploader.upload(image, {
        upload_preset: 'your_upload_preset',
      });

      const imageUrl = cloudinaryResponse.secure_url;      
      // Save ad data to Supabase database
      const {} = await supabase
        .from('ads')
        .insert([
          {
            title,
            description,
            category,
            price,
            contact,
            image_url: imageUrl,
          },
        ]);

        if (insertError) {
            return res.status(500).json({ error: insertError.message });
          }
    
          res.status(200).json({ success: true });
        } catch (error) {
          console.error('Error uploading ad:', error);
          res.status(500).json({ error: error });
        }
      } else {
        res.status(405).json({ error: 'Method Not Allowed' });
      }
    }