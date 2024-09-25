'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react'
import { Skeleton } from "@/components/ui/skeleton"

type CryptoData = {
  id: string
  name: string
  symbol: string
  current_price: number
  price_change_percentage_24h: number
}

export default function CryptoPrices() {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        // In a real application, you would fetch this data from an API
        // For this example, we'll use mock data
        await new Promise(resolve => setTimeout(resolve, 1500)) // Simulate API delay
        const mockData: CryptoData[] = [
          { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', current_price: 29876.54, price_change_percentage_24h: 2.5 },
          { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', current_price: 1876.32, price_change_percentage_24h: -1.2 },
          { id: 'cardano', name: 'Cardano', symbol: 'ADA', current_price: 0.45, price_change_percentage_24h: 5.7 },
          { id: 'dogecoin', name: 'Dogecoin', symbol: 'DOGE', current_price: 0.078, price_change_percentage_24h: -0.8 },
          { id: 'polkadot', name: 'Polkadot', symbol: 'DOT', current_price: 6.23, price_change_percentage_24h: 3.1 },
        ]
        setCryptoData(mockData)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching crypto data:', error)
        setLoading(false)
      }
    }

    fetchCryptoData()
  }, [])

  return (
    <Card className="w-full max-w-md" style={{borderRadius: '8px'}}>
      <CardHeader>
        <CardTitle>Cryptocurrency Prices</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <CryptoPricesSkeleton />
        ) : (
          <ul className="space-y-4">
            {cryptoData.map((crypto) => (
              <li key={crypto.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{crypto.name}</span>
                  <span className="text-sm text-muted-foreground">{crypto.symbol}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">${crypto.current_price.toLocaleString()}</span>
                  <Badge className={`flex items-center block   ${crypto.price_change_percentage_24h >= 0 ? 
                  "bg-green-500 text-white" : "bg-red-500 text-white" } `}>
                    {crypto.price_change_percentage_24h >= 0 ? (
                      <ArrowUpIcon className="w-3 h-3 mr-1" />
                    ) : (
                      <ArrowDownIcon className="w-3 h-3 mr-1" />
                    )}
                    {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
                  </Badge>
                </div>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}

function CryptoPricesSkeleton() {
  return (
    <ul className="space-y-4">
      {[...Array(5)].map((_, index) => (
        <li key={index} className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-8" />
          </div>
          <div className="flex items-center space-x-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-6 w-14" />
          </div>
        </li>
      ))}
    </ul>
  )
}