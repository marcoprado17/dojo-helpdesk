import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

export async function GET(_, { params }) {
  const response = await fetch(`http://localhost:4000/tickets/${params.id}`)
  const ticket = await response.json()
  
  if (!response.ok) {
    return NextResponse.json({
      error: 'Cannot find ticket'
    }, {
      status: 404
    })
  }
  
  return NextResponse.json(ticket, {
    status: 200
  })
}
