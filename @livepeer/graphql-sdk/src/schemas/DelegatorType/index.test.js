import test from 'ava'
import { EMPTY_ADDRESS, DELEGATOR_STATUS } from '@livepeer/sdk'
import DelegatorType from './index'

test('DelegatorType resolves fields', async t => {
  const obj = {
    id: EMPTY_ADDRESS.replace(/00/g, '11'),
    status: DELEGATOR_STATUS.Unbonded,
    bondedAmount: '0',
    fees: '0',
    delegateAddress: EMPTY_ADDRESS.replace(/00/g, '22'),
    delegatedAmount: '0',
    lastClaimRound: '0',
    startRound: '0',
    withdrawRound: '0',
  }
  const args = null
  const ctx = {}
  const fields = DelegatorType._typeConfig.fields()
  const entries = Object.entries(obj)
  for (const [key, val] of entries) {
    const result = await fields[key].resolve(obj, args, ctx)
    t.deepEqual(val, result)
  }
})
