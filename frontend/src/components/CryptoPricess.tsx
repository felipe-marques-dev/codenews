import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CryptoPrices() {
  const cryptoPrices = [
    { name: 'Bitcoin', price: 34567, change: 2.5 },
    { name: 'Ethereum', price: 2345, change: -1.2 },
    { name: 'Dogecoin', price: 0.12, change: 5.7 },
  ]

  return (
    <div className="space-y-4 w-full">
      {cryptoPrices.map((crypto) => (
        <Card key={crypto.name} className="bg-neutral-950 " style={{borderRadius: '8px' }}>
          <CardHeader>
            <CardTitle>{crypto.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">${crypto.price.toFixed(2)}</p>
            <p className={`text-sm ${crypto.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {crypto.change >= 0 ? '+' : ''}{crypto.change}%
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}