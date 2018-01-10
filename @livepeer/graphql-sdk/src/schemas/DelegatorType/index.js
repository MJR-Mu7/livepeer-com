import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql'
import Delegator from '../Delegator'
import Account from '../Account'
import DelegatorStatus from '../DelegatorStatus'
import Job from '../Job'
import * as resolvers from '../Delegator/resolvers'

/**
 * This implements the following type system shorthand:
 *   type DelegatorType implements Delegator {
 *     id: String!
 *     status: String!
 *     stake: String!
 *     bondedAmount: String!
 *     unbondedAmount: String!
 *     delegateAddress: String!
 *     delegatedAmount: String!
 *     lastClaimRound: String!
 *     startRound: String!
 *     withdrawRound: String!
 *   }
 */
export default new GraphQLObjectType({
  interfaces: [Delegator],
  name: 'DelegatorType',
  description:
    'An account who gains stake in the network by bonding LPT to another account',
  isTypeOf: (/* value, info */) => true,
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The ETH address of the delgator',
      resolve: resolvers.id,
    },
    status: {
      type: new GraphQLNonNull(DelegatorStatus),
      description: 'The status of the delegator',
      resolve: resolvers.status,
    },
    bondedAmount: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The amount of LPT the delegator has bonded',
      resolve: resolvers.bondedAmount,
    },
    fees: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The total amount of LPT that the delegator has claimed',
      resolve: resolvers.fees,
    },
    delegateAddress: {
      type: new GraphQLNonNull(GraphQLString),
      description:
        'The ETH address of the transcoder the delegator has bonded to',
      resolve: resolvers.delegateAddress,
    },
    delegatedAmount: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The total amount of tokens delegated to the delegator',
      resolve: resolvers.delegatedAmount,
    },
    lastClaimRound: {
      type: new GraphQLNonNull(GraphQLString),
      description:
        'The last round that the delegator claimed reward and fee pool shares',
      resolve: resolvers.lastClaimRound,
    },
    startRound: {
      type: new GraphQLNonNull(GraphQLString),
      description:
        'The round the delegator becomes bonded and delegated to its delegate',
      resolve: resolvers.startRound,
    },
    withdrawRound: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The round the delegator can withdraw their stake',
      resolve: resolvers.withdrawRound,
    },
  }),
})
