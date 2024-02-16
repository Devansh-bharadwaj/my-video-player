import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';

export interface Videos {
    id: number;
    category: string;
    title: string;
    description: string;
    subtitle: string;
    thumb: string;
    sources: string[];
}

function generateId(): string {
    return Date.now().toString();
}

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const existingData: Videos[] = JSON.parse(fs.readFileSync('data/data.json', 'utf-8'));
        return NextResponse.json(existingData);
    } catch (error) {
        console.error('Error saving Video data:', error);
        NextResponse.json({ success: false, message: 'Failed to get Video data' });
    }
};


// export async function PUT(req: NextRequest, res: NextResponse) {
//     try {
//         const newData: SEOData = await req.json();

//         const existingData: SEOData[] = JSON.parse(fs.readFileSync('data/seo.json', 'utf-8'));
//         const index = existingData.findIndex(item => item.id === newData.id);
//         if (index === -1) {
//             return NextResponse.json({ success: false, message: 'SEO data not found' });
//         }
//         console.log(index)
//         console.log(newData)
//         existingData[index] = { ...existingData[index], ...newData };
//         fs.writeFileSync('data/seo.json', JSON.stringify(existingData, null, 2));
//         return NextResponse.json({ data: existingData, message: 'SEO data updated successfully' });
//     } catch (error) {
//         console.error('Error saving SEO data:', error);
//         NextResponse.json({ success: false, message: 'Failed to get SEO data' });
//     }
// };