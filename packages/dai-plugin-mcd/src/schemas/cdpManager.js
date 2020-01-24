import { bytesToString } from '../utils';
import BigNumber from 'bignumber.js';

import {
  VAULT_ADDRESS,
  VAULT_TYPE,
  VAULTS_CREATED,
  VAULT_OWNER
} from './constants';

export const cdpManagerUrns = {
  generate: id => ({
    id: `CDP_MANAGER.urns(${id})`,
    contractName: 'CDP_MANAGER',
    call: ['urns(uint256)(address)', parseInt(id)]
  }),
  returns: [VAULT_ADDRESS]
};

export const cdpManagerIlks = {
  generate: id => ({
    id: `CDP_MANAGER.ilks(${id})`,
    contractName: 'CDP_MANAGER',
    call: ['ilks(uint256)(bytes32)', parseInt(id)]
  }),
  returns: [[VAULT_TYPE, bytesToString]]
};

export const cdpManagerCdpi = {
  generate: () => ({
    id: 'CDP_MANAGER.cdpi',
    contractName: 'CDP_MANAGER',
    call: ['cdpi()(uint256)']
  }),
  returns: [[VAULTS_CREATED, v => BigNumber(v)]]
};

export const cdpManagerOwner = {
  generate: id => ({
    id: `CDP_MANAGER.owner(${id})`,
    contractName: 'CDP_MANAGER',
    call: ['owns(uint256)(address)', id]
  }),
  returns: [[VAULT_OWNER]]
};

export default {
  cdpManagerUrns,
  cdpManagerIlks,
  cdpManagerCdpi,
  cdpManagerOwner
};
