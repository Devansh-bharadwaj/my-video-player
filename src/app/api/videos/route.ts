import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';

export interface Videos {
    id: number;
    order: number;
    category: string;
    title: string;
    description: string;
    subtitle: string;
    thumb: string;
    sources: string[];
}


export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const existingData: Videos[] = JSON.parse(fs.readFileSync('data/data.json', 'utf-8'));
        existingData.sort((a, b) => a.order - b.order)
        return NextResponse.json(existingData);
    } catch (error) {
        console.error('Error saving Video data:', error);
        NextResponse.json({ success: false, message: 'Failed to get Video data' });
    }
};


export async function PUT(req: NextRequest, res: NextResponse) {
    try {
        const newData: Videos[] = await req.json();
        const existingData: Videos[] = JSON.parse(fs.readFileSync('data/data.json', 'utf-8'));
       for(let val of newData){
        const index = existingData.findIndex(item => item.id == val.id);
        if (index === -1) {
            return NextResponse.json({ success: false, message: 'video data not found' });
        }
        existingData[index] = { ...existingData[index], ...val };
        fs.writeFileSync('data/data.json', JSON.stringify(existingData, null, 2));
      }
        return NextResponse.json({ data: existingData, message: 'video data updated successfully' });
    } catch (error) {
        console.error('Error saving video data:', error);
        NextResponse.json({ success: false, message: 'Failed to get video data' });
    }
};