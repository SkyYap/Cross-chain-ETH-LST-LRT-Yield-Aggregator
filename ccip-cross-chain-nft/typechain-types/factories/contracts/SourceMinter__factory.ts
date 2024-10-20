/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  SourceMinter,
  SourceMinterInterface,
} from "../../contracts/SourceMinter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        internalType: "address",
        name: "link",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "FailedToWithdrawEth",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "messageId",
        type: "bytes32",
      },
    ],
    name: "MessageSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Staked",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getStakedBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "destinationChainSelector",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "enum SourceMinter.PayFeesIn",
        name: "payFeesIn",
        type: "uint8",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stake",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "stakedBalances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "withdrawToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60c060405234801562000010575f80fd5b5060405162001caf38038062001caf8339818101604052810190620000369190620003d9565b33805f8073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620000aa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000a1906200047c565b60405180910390fd5b815f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146200012f576200012e816200024760201b60201c565b5b5050508173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff168152505060a05173ffffffffffffffffffffffffffffffffffffffff1663095ea7b36080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6040518363ffffffff1660e01b8152600401620001fb929190620004c7565b6020604051808303815f875af115801562000218573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906200023e91906200052c565b505050620005ca565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620002b8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002af90620005aa565b60405180910390fd5b8060015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff165f8054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127860405160405180910390a350565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f620003a38262000378565b9050919050565b620003b58162000397565b8114620003c0575f80fd5b50565b5f81519050620003d381620003aa565b92915050565b5f8060408385031215620003f257620003f162000374565b5b5f6200040185828601620003c3565b92505060206200041485828601620003c3565b9150509250929050565b5f82825260208201905092915050565b7f43616e6e6f7420736574206f776e657220746f207a65726f00000000000000005f82015250565b5f620004646018836200041e565b915062000471826200042e565b602082019050919050565b5f6020820190508181035f830152620004958162000456565b9050919050565b620004a78162000397565b82525050565b5f819050919050565b620004c181620004ad565b82525050565b5f604082019050620004dc5f8301856200049c565b620004eb6020830184620004b6565b9392505050565b5f8115159050919050565b6200050881620004f2565b811462000513575f80fd5b50565b5f815190506200052681620004fd565b92915050565b5f6020828403121562000544576200054362000374565b5b5f620005538482850162000516565b91505092915050565b7f43616e6e6f74207472616e7366657220746f2073656c660000000000000000005f82015250565b5f620005926017836200041e565b91506200059f826200055c565b602082019050919050565b5f6020820190508181035f830152620005c38162000584565b9050919050565b60805160a0516116b5620005fa5f395f61041a01525f818161046c0152818161053401526105d601526116b55ff3fe608060405260043610610088575f3560e01c80633aeac4e1116100585780633aeac4e11461013d57806351cff8d91461016557806379ba50971461018d5780638da5cb5b146101a3578063f2fde38b146101cd5761008f565b8062fa0b41146100935780631460fa87146100bb5780633a02a42d146100f75780633a4b66f1146101335761008f565b3661008f57005b5f80fd5b34801561009e575f80fd5b506100b960048036038101906100b49190610e59565b6101f5565b005b3480156100c6575f80fd5b506100e160048036038101906100dc9190610ebd565b6106b4565b6040516100ee9190610ef7565b60405180910390f35b348015610102575f80fd5b5061011d60048036038101906101189190610ebd565b6106c9565b60405161012a9190610ef7565b60405180910390f35b61013b61070f565b005b348015610148575f80fd5b50610163600480360381019061015e9190610f10565b6107f4565b005b348015610170575f80fd5b5061018b60048036038101906101869190610ebd565b6108f8565b005b348015610198575f80fd5b506101a16109b7565b005b3480156101ae575f80fd5b506101b7610b46565b6040516101c49190610f5d565b60405180910390f35b3480156101d8575f80fd5b506101f360048036038101906101ee9190610ebd565b610b6d565b005b8160025f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20541015610275576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161026c90610fd0565b60405180910390fd5b8160025f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8282546102c1919061101b565b925050819055505f6040518060a00160405280856040516020016102e59190610f5d565b6040516020818303038152906040528152602001338560405160240161030c92919061104e565b6040516020818303038152906040527f40c10f19000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505081526020015f67ffffffffffffffff8111156103a8576103a7611075565b5b6040519080825280602002602001820160405280156103e157816020015b6103ce610d3a565b8152602001906001900390816103c65790505b5081526020016001808111156103fa576103f96110a2565b5b84600181111561040d5761040c6110a2565b5b14610418575f61043a565b7f00000000000000000000000000000000000000000000000000000000000000005b73ffffffffffffffffffffffffffffffffffffffff16815260200160405180602001604052805f81525081525090505f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166320487ded87846040518363ffffffff1660e01b81526004016104c59291906112e3565b602060405180830381865afa1580156104e0573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105049190611325565b90505f60018081111561051a576105196110a2565b5b84600181111561052d5761052c6110a2565b5b036105d4577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166396f4e9f988856040518363ffffffff1660e01b815260040161058d9291906112e3565b6020604051808303815f875af11580156105a9573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105cd9190611383565b9050610674565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166396f4e9f98389866040518463ffffffff1660e01b81526004016106309291906112e3565b60206040518083038185885af115801561064c573d5f803e3d5ffd5b50505050506040513d601f19601f820116820180604052508101906106719190611383565b90505b7f54791b38f3859327992a1ca0590ad3c0f08feba98d1a4f56ab0dca74d203392a816040516106a391906113bd565b60405180910390a150505050505050565b6002602052805f5260405f205f915090505481565b5f60025f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b5f3411610751576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074890611420565b60405180910390fd5b3460025f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825461079d919061143e565b925050819055503373ffffffffffffffffffffffffffffffffffffffff167f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d346040516107ea9190610ef7565b60405180910390a2565b6107fc610b81565b5f8173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016108369190610f5d565b602060405180830381865afa158015610851573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108759190611325565b90508173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb84836040518363ffffffff1660e01b81526004016108b292919061104e565b6020604051808303815f875af11580156108ce573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108f291906114a6565b50505050565b610900610b81565b5f4790505f8273ffffffffffffffffffffffffffffffffffffffff1682604051610929906114fe565b5f6040518083038185875af1925050503d805f8114610963576040519150601f19603f3d011682016040523d82523d5f602084013e610968565b606091505b50509050806109b2573383836040517f9d11f5630000000000000000000000000000000000000000000000000000000081526004016109a993929190611512565b60405180910390fd5b505050565b60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a46576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a3d90611591565b60405180910390fd5b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050335f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505f60015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a350565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610b75610b81565b610b7e81610c10565b50565b5f8054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610c0e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c05906115f9565b60405180910390fd5b565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610c7e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c7590611661565b60405180910390fd5b8060015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff165f8054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127860405160405180910390a350565b60405180604001604052805f73ffffffffffffffffffffffffffffffffffffffff1681526020015f81525090565b5f80fd5b5f67ffffffffffffffff82169050919050565b610d8881610d6c565b8114610d92575f80fd5b50565b5f81359050610da381610d7f565b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610dd282610da9565b9050919050565b610de281610dc8565b8114610dec575f80fd5b50565b5f81359050610dfd81610dd9565b92915050565b5f819050919050565b610e1581610e03565b8114610e1f575f80fd5b50565b5f81359050610e3081610e0c565b92915050565b60028110610e42575f80fd5b50565b5f81359050610e5381610e36565b92915050565b5f805f8060808587031215610e7157610e70610d68565b5b5f610e7e87828801610d95565b9450506020610e8f87828801610def565b9350506040610ea087828801610e22565b9250506060610eb187828801610e45565b91505092959194509250565b5f60208284031215610ed257610ed1610d68565b5b5f610edf84828501610def565b91505092915050565b610ef181610e03565b82525050565b5f602082019050610f0a5f830184610ee8565b92915050565b5f8060408385031215610f2657610f25610d68565b5b5f610f3385828601610def565b9250506020610f4485828601610def565b9150509250929050565b610f5781610dc8565b82525050565b5f602082019050610f705f830184610f4e565b92915050565b5f82825260208201905092915050565b7f496e73756666696369656e74207374616b65642062616c616e636500000000005f82015250565b5f610fba601b83610f76565b9150610fc582610f86565b602082019050919050565b5f6020820190508181035f830152610fe781610fae565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f61102582610e03565b915061103083610e03565b925082820390508181111561104857611047610fee565b5b92915050565b5f6040820190506110615f830185610f4e565b61106e6020830184610ee8565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b6110d881610d6c565b82525050565b5f81519050919050565b5f82825260208201905092915050565b5f5b838110156111155780820151818401526020810190506110fa565b5f8484015250505050565b5f601f19601f8301169050919050565b5f61113a826110de565b61114481856110e8565b93506111548185602086016110f8565b61115d81611120565b840191505092915050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b61119a81610dc8565b82525050565b6111a981610e03565b82525050565b604082015f8201516111c35f850182611191565b5060208201516111d660208501826111a0565b50505050565b5f6111e783836111af565b60408301905092915050565b5f602082019050919050565b5f61120982611168565b6112138185611172565b935061121e83611182565b805f5b8381101561124e57815161123588826111dc565b9750611240836111f3565b925050600181019050611221565b5085935050505092915050565b5f60a083015f8301518482035f8601526112758282611130565b9150506020830151848203602086015261128f8282611130565b915050604083015184820360408601526112a982826111ff565b91505060608301516112be6060860182611191565b50608083015184820360808601526112d68282611130565b9150508091505092915050565b5f6040820190506112f65f8301856110cf565b8181036020830152611308818461125b565b90509392505050565b5f8151905061131f81610e0c565b92915050565b5f6020828403121561133a57611339610d68565b5b5f61134784828501611311565b91505092915050565b5f819050919050565b61136281611350565b811461136c575f80fd5b50565b5f8151905061137d81611359565b92915050565b5f6020828403121561139857611397610d68565b5b5f6113a58482850161136f565b91505092915050565b6113b781611350565b82525050565b5f6020820190506113d05f8301846113ae565b92915050565b7f43616e6e6f74207374616b6520302045544800000000000000000000000000005f82015250565b5f61140a601283610f76565b9150611415826113d6565b602082019050919050565b5f6020820190508181035f830152611437816113fe565b9050919050565b5f61144882610e03565b915061145383610e03565b925082820190508082111561146b5761146a610fee565b5b92915050565b5f8115159050919050565b61148581611471565b811461148f575f80fd5b50565b5f815190506114a08161147c565b92915050565b5f602082840312156114bb576114ba610d68565b5b5f6114c884828501611492565b91505092915050565b5f81905092915050565b50565b5f6114e95f836114d1565b91506114f4826114db565b5f82019050919050565b5f611508826114de565b9150819050919050565b5f6060820190506115255f830186610f4e565b6115326020830185610f4e565b61153f6040830184610ee8565b949350505050565b7f4d7573742062652070726f706f736564206f776e6572000000000000000000005f82015250565b5f61157b601683610f76565b915061158682611547565b602082019050919050565b5f6020820190508181035f8301526115a88161156f565b9050919050565b7f4f6e6c792063616c6c61626c65206279206f776e6572000000000000000000005f82015250565b5f6115e3601683610f76565b91506115ee826115af565b602082019050919050565b5f6020820190508181035f830152611610816115d7565b9050919050565b7f43616e6e6f74207472616e7366657220746f2073656c660000000000000000005f82015250565b5f61164b601783610f76565b915061165682611617565b602082019050919050565b5f6020820190508181035f8301526116788161163f565b905091905056fea2646970667358221220bb27d3b1c6736ea3ac158bced7b5fa7365efcf1a53f75daf7ba4b24b70a409e064736f6c63430008140033";

type SourceMinterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SourceMinterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SourceMinter__factory extends ContractFactory {
  constructor(...args: SourceMinterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    router: AddressLike,
    link: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(router, link, overrides || {});
  }
  override deploy(
    router: AddressLike,
    link: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(router, link, overrides || {}) as Promise<
      SourceMinter & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): SourceMinter__factory {
    return super.connect(runner) as SourceMinter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SourceMinterInterface {
    return new Interface(_abi) as SourceMinterInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): SourceMinter {
    return new Contract(address, _abi, runner) as unknown as SourceMinter;
  }
}