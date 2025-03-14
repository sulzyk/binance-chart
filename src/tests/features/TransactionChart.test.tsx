import { describe, it, expect } from "vitest"
import {render} from '@testing-library/react'
import { TransactionChart } from "../../features/TransactionChart/TransactionChart"
describe('TransactionChart', () => {
  it('should render', () => {
    // vi.spyOn(globalThis, 'fetch').mockResolvedValue({
    //   json: vi.fn().mockResolvedValue({mins:5, price: "83277.90587626", closeTime: 1741952241912})
    // })
    render(<TransactionChart />)
    expect(1).toEqual(1)
  })
})