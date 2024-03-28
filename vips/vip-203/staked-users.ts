const PRIME = "0xBbCD063efE506c3D42a0Fa2dB5C08430288C71FC";
const users = {
  "0x07cf6eb791b038ecc157a81738b865154579c911": 1674970497,
  "0x7135d157c8c95e8c0a349e5307bc5f02da3a7e5f": 1694100941,
  "0x72b48246e46e3807d561bf3c491d4f357b8535f0": 1643984039,
  "0x7300418255775a4a55868848676c2b3a67a997ba": 1682664433,
  "0x73da76e9283a259c687713b6670c5ba5866bb338": 1638230384,
  "0x73f7e1ec76ba25687f99d711194e51e9182b92b9": 1659073562,
  "0x753db96bc1a5fdb2142927496ec15e5299fa6bda": 1638142257,
  "0x7651e59f8dfc5ea5753d521c376184d7098b5f93": 1652385384,
  "0x766aca685baf2edc50b586185edbebe38ba9bfc7": 1697635863,
  "0x7675fb2309ef774c4775ee8acb3da82444ad68fd": 1691048880,
  "0x772d986974b41a79601000e27a89cc29168fd69d": 1683990742,
  "0x7822c3902f56987bb920c97ce0a214074567c067": 1698124469,
  "0x79515c211e1fc889ac50384c52700becab54f177": 1696017513,
  "0x7a8e7b7197e94d2cb194dbed7a80575c047a7575": 1644665514,
  "0x7ba1fa41f4e1df001a46a84dc9573f6e951dd6e3": 1691495602,
  "0x7ca6ac4a7433565ab28fc490db8779147fe9db0b": 1638130215,
  "0x7cb6ca8f2597ede1438cd679ada77cc9949a00b0": 1662088905,
  "0x7e8d6c4f09b2ed66193d0eb58df30d7d1ab28618": 1671203291,
  "0x7ebec1ac6cec60d18cae21a952c11c4ddcdab8c2": 1694671181,
  "0x7ec809f9eac0e0ad3aae5b833c4828b7432eddc1": 1656706389,
  "0x7ed4f74e6897038105f148f6e4d56181710ba917": 1656491391,
  "0x7febd1a4c44ec5ae7b9822a6f1be97365435b835": 1670121473,
  "0x8141665f038e82610b66e217a05dd200d601a642": 1677999516,
  "0x822b586e36232092e8b0f645c42e571311002b8d": 1660467779,
  "0x82cf0333ab76581b1dccb375cd1cbc958d214636": 1680604944,
  "0x83837fa3ca28d0c885e661558f4a151bb5113405": 1686924699,
  "0x872f07701dcf593ab1f79da6d609e9376d18cdfb": 1678700068,
  "0x878156a9ce6b1f769535cd18d43b40e9cf19368b": 1699516528,
  "0x8797aba59426c45fa113984622b99f0b26d302df": 1645878404,
  "0x87a2b29d2a9c710958832c83d004fc4214fabd33": 1638655043,
  "0x87f0a0771580b6606b2c20d7a73efb243e4c3248": 1638977500,
  "0x885fba45dfb1415b3e43f229d08f3edfafc179d3": 1639915778,
  "0x8bc3491e7d5ae64ebb59f6a1d2d19d89b166021d": 1653929353,
  "0x8cc25fe7975e4c8c66a4fff5a0f5d1df2f74dc60": 1693837931,
  "0x8cc69ea707f134fbebff759d037e6f57b56dd5cb": 1694142100,
  "0x8d5cc3c88582da1e6d0705b1a4bcec8881194bf2": 1638503874,
  "0x8dcb8c40f0337399efc9ac543d8c18f6c9e8bde1": 1697128906,
  "0x8dd7b41c2a54f4ae983b5240eff60977494e65ed": 1697048448,
  "0x8e20fb3abe2dd90beea86740202c192c9f6f5b91": 1664207659,
  "0x8ed1376ac0c525fd7187759438f8fde93a0b1bf0": 1641418609,
  "0x8fa5d0cb4e7421a9933d0397fd32127f5a7f4e0a": 1698730453,
  "0x90767e2518a87f7350fc0a52c8407543d1b25ac6": 1699691970,
  "0x909423830ba1280dea8b9e2df1774b236a7fe167": 1699143886,
  "0x90cf5124d8dcecf9d4d5314cd986cde622a5fae3": 1682142400,
  "0x924b3ba6ebe9aba654035c437a4a425811d983cf": 1638360739,
  "0x92ae9d3e1d66c47208f17a733e6ab847c3cae134": 1681427976,
  "0x93fca0c5cfdd3085e4c15c8a78a0266a0cdbfdf4": 1694098230,
  "0x9463f0cba13e452ab4b7dd8be8bccda11e277e8e": 1664459348,
  "0x94af55d5c4ccd3ee8df80f469c6fe2659b248467": 1660165309,
  "0x94fad23bb810b4fddb1838d068a113cb6a053ae7": 1681764701,
  "0x9510d5bfd74fcd73fc9033f847a5b1372c499f02": 1693251271,
  "0x9576ad98ab0eba2cc8f2a9c85acd6a47ab2d36ff": 1660653559,
  "0x95e2713b70134218ca9ab5f5697c202512c57894": 1664121114,
  "0x966ce0255f3a0e4da6766ee8a94dfffb45970424": 1696255180,
  "0x96a50af187e04f7d6be3de0ac1a7f527c15efa63": 1669569184,
  "0x97827f551f427c55e9dd72052982cc2233fe458e": 1698738404,
  "0x97e3cde8380ac58595c8db8f3f95f012a7af0013": 1699272785,
  "0x999fc1ca0a394c729ada03a03da77b9810e73a60": 1694155184,
  "0x9ae233d334d712539b429adc275df5f4d499cf90": 1680898446,
  "0x9afedc48c7743050e0922b615c85e2de088c1aed": 1698562181,
  "0x9d550d4dca8ecf37773c67dd87d4e355e9b35d31": 1696068199,
  "0x9e03399ce17787bdc5fb04fbed200ee98f3b4e68": 1698737985,
  "0x9eafda88fbbec4266bfbc31eed5d7234ffbe75da": 1694273021,
  "0x9f47800b40f2663e25e820e491b0106e904b06aa": 1694147800,
  "0xa0f5c2bbc2f1e3f61f223b92e7cc0ffb4ee69b3a": 1699547557,
  "0xa205358b29bb5466c8d0ad25f84d2aa118e967e5": 1638120478,
  "0xa246f63417bdd62f1c6937329361dc26b0c28966": 1640565996,
  "0xa6c3bfa31d1026ceb66efd3447a8da3d0bfa4807": 1691494543,
  "0xa7680c5b8d3439613e26673503d724c5f50c7816": 1680298316,
  "0xa7df5a0dd755baf70f8229cfbc7f032dd6476391": 1698597726,
  "0xa96cc6e271f0c77c695e0013673831f9dc182fdc": 1695094749,
  "0xabfc883b37e0d7344e59cda43a2aeb67b4ccfbd6": 1659808907,
  "0xacc91d60343e694b0480d62f75a6b2add0b7e288": 1663330615,
  "0xad7bf7fd27570b71ce80e9e79e7376aca7698b15": 1683113485,
  "0xae5f7b8962d2a186eab07085c74bbe6142467f27": 1639723276,
  "0xaed399a5625ae5b3b5e1a7ce725f62e0f369f4f8": 1680622665,
  "0xaf5ea98f3c9e2a09195020c5d0b3c5b86743eba6": 1663280876,
  "0xb0eb6f452ecea6a76fda435b4629cf6a11b24a2a": 1697093907,
  "0xb0f082fdfdd63a0c5227fbcff85598a1d611e67b": 1696441120,
  "0xb10709922daad390af44986c512fd87ac44fe82d": 1688397615,
  "0xb284929c0c79c24adfc607de921f49187bc2b0be": 1699030192,
  "0xb2c16a332c8cc482b6d87a03b2773e9d90449f4c": 1698429188,
  "0xb30d4761127ee88924de07f6f737a2b5cd0a6181": 1686800897,
  "0xb32e06e811e4aa19abd38420fd2dd8d3b67874f5": 1672991830,
  "0xb426f9d689eeb970eb2a57dfd2b6304eec5bb7e1": 1639349330,
  "0xb47a1f2fef94467b2b4b437ef872e872fd99f0ce": 1694813191,
  "0xb47be7126009a70f4f304d4fb8e342bbc2fa10ce": 1697695899,
  "0xb48df2de5833abf4dd5bd1f7fcad1b1f023cb8db": 1696047560,
  "0xb49cc6494b75f84aca36160e859fce5c5da16cc6": 1662098829,
  "0xb4e302c241dbfdcfd1e2d567580ac67fe9fe1c90": 1695206845,
  "0xb4ebb88144d3d896e280143fccec9785c42ec14a": 1690291586,
  "0xb5a334403a6a41120b99bfd78a6049f1b1c01639": 1642944767,
  "0xb6e0928537289164cb0d11969cf7b9fcd2c9982a": 1671677260,
  "0xb7db55e85e9ab2b800a52c936ce4ab33adb5fe6b": 1660334566,
  "0xb7dd00d4649335267ad14be28d4f140c289a16b7": 1643683300,
  "0xb826eb8ea15fd25783cfd18e04096575f03612d1": 1638519414,
  "0xb90415f432ee83949d2ee07a754eae1b71469ad4": 1682153410,
  "0xb952b6b2e1c0b24d38bc43b11dd8f260820a88d6": 1696969118,
  "0xb964ec15751fad0b9777f5a2e793f622692c8149": 1638164012,
  "0xb9e8d740b033bfc5bde7ab243e2a1dbdcb32c643": 1638129828,
  "0xbb01f59c6d485b68359150a84e4c6958435a2fe2": 1640896750,
  "0xbbbd503a6a15176ffff6db1761af23c90ff1feed": 1687279860,
  "0xbc6ad28847eb0737608a7767e8460ba5c29d4ec6": 1698935801,
  "0xbcefbf1612cdd52d54d6e9836c3de4d8bf579fca": 1686414790,
  "0xbd3603df246658369c707c30e041a89feb6ee153": 1664560696,
  "0xbd8988199622ea016c8fb6ff87a43e1f17f80c63": 1696705420,
  "0xbdc1faea0cb9121df6afd0e47accd3048ba01337": 1651666680,
  "0xbe31a036fc8dc18df38ecf05c997196e36a31fb8": 1698940467,
  "0xc0442a99c8b0e656986f20c9519cdbcbd52e8c5f": 1648837585,
  "0xc12db51633d82ac02f69437a44b7cecabe6b1f52": 1698323350,
  "0xc18bbf17d263fe7803a1435e12f8c3a6877e65aa": 1689326702,
  "0xc219a18777f84befd63ff8077756d17b50d2bb8a": 1656748176,
  "0xc25d35024dd497d3825115828994bb08d12a3aa7": 1666131557,
  "0xc296a52f5a0257f0412db631ee251372a3b5d719": 1668051293,
  "0xc2e57537986306f2997b89fbf5b0cfff027994e2": 1653556912,
  "0xc365f50b0a47d5bc62a49db5e01c1947486e37c2": 1666016166,
  "0xc444949e0054a23c44fc45789738bdf64aed2391": 1681066705,
  "0xc464bf2e6dab294c1ade84d0b2839565aee8b948": 1647860621,
  "0xc469ecb73159b88957965758002bbe1807532814": 1685992044,
  "0xc6939c34b52c10f4d1e6d1f527269290a651b0b5": 1651647565,
  "0xc72f3295b7fe847ec99e3a3c6dd6e90db5e1061b": 1664713877,
  "0xc8e1e15f2b7b3f4bc67d6fdfca27161e3107fbc4": 1679237536,
  "0xc99483b20a36ebbbdbacc716a1f3c96444baf54c": 1698738799,
  "0xca2f085037c7951ffc6f53341f8074bf2734a255": 1680124732,
  "0xcc5cc987c950db5b0ae98fd29933d646c6082b04": 1683078930,
  "0xcc622c9b2a74374eaf4f5ba46a442455c5c5f88c": 1697798331,
  "0xcda3216d4025bdd6b5bb46804db2c9661bf43c99": 1661791932,
  "0xceb13b835f1dbde70d70867f2ce56b74c6b90e1b": 1690198621,
  "0xcf2e0f1f6b952322ff9cb70e3537c4ac13cbd614": 1662009186,
  "0xd037f33c71f16791fa454d87e7c3d8c79274fcae": 1650314718,
  "0xd1224cca68861b020041e452a2c30d3670043a74": 1686765227,
  "0xd183f2bbf8b28d9fec8367cb06fe72b88778c86b": 1641206518,
  "0xd211b03bb4ace4c42c98d33e1b10ba145b723233": 1642051143,
  "0xd24cb89ae93f9c74d5dabb4a3b8ceb7565928708": 1699188212,
  "0xd269a394e3c45918215816b7b1573c7db839a192": 1698814530,
  "0xd330c61f5d47cce1e9956aff468dd992cf9b951b": 1672580356,
  "0xd472281d922c36bc139f5578a962661f923d5131": 1685812139,
  "0xd6755e4556b2b11481e75462d71d4a243d2ce6cc": 1696049484,
  "0xd69c46a327eaa4c7f2a6b332a42395ef220c01b4": 1694684606,
  "0xd6aeb2bf00db7025ff7f0aabe299d4005162d6a3": 1699549509,
  "0xd92ada3a85bd0ec00ffc03e71d69cd1c3f01bbd9": 1648422178,
  "0xd93c807d9dd8d53fa4829179b8650477cc0bf12e": 1644678150,
  "0xd9d85469d50e00c3f06b900fb6b989d9c280bfda": 1696232028,
  "0xda93f8e08c439d7ffe77e0bce1ca6a8ab153d35b": 1638119955,
  "0xdb1fd382e109c0e3666509f11c44e6e65b123954": 1638593545,
  "0xdccf7b6e287449ccea35b31a26039a633e011164": 1638878111,
  "0xddd5b6f5b2bbd60295b17c850f2b369380ed85ec": 1692823277,
  "0xdec2b9ba91c2daf554482d42143906f382b0283b": 1649460096,
  "0xdeef60646067698a8f80b1cf445683055d51bdd4": 1693269529,
  "0xe07798b2351829ad8cc3f67bbcf7fa1678a6f50d": 1659435068,
  "0xe09d5de48a0e5300681737a2a8c1c14a5b2019d8": 1659190598,
  "0xe1c77bd0f4a1e670ac079868329bf23d971c6967": 1671966261,
  "0xe1d5dcd9af141769b8bd53c069598d8efa2cfe0c": 1696490583,
  "0xe264ec2b1984edf357d6670b003cd58fee68b961": 1698813149,
  "0xe4ef1fe6b8dac72a005daceb7c6e8b21b8c3ff3c": 1675378126,
  "0xe4f683b80e8e141313dd5f2d0066f66e454a57bf": 1664410204,
  "0xe5c8d5a64d57a322e2da46cb719f234151662a8a": 1642024070,
  "0xe60416e93a952f82397dbfae7dbfb4620be8c430": 1695229448,
  "0xe66ca5ba64da211535079d6e3c8ff696f889a285": 1691948587,
  "0xe680dd48210996209a882f699ccd01a14b60ad0c": 1645070183,
  "0xe6eeb5d275fa784a32afc945b9d6844ac20b7aaa": 1638135816,
  "0xe729010dcea8551518cd038219fcbbd67205f31e": 1684829939,
  "0xe7828b0ec3c51c9088ede214140866a9fb76a23e": 1653507176,
  "0xe79a65f00a1a377d3cb96c7bdbf8e1a8e45a521e": 1689444100,
  "0xe7a07defd5cdf54ab3896d26a2273999bf2c7a19": 1670419090,
  "0xe7ff6f70171f271af014751d679c39c3aa70238f": 1681126483,
  "0xe8833153ae9171452855d391a1653766b70bdccf": 1640844270,
  "0xe98023076ae339ff94b363c248c5a52bf6325e99": 1694710461,
  "0xe9b123de73bd06f4ce98578cc241761d36cb40d9": 1666317895,
  "0xe9f3ef24a4ca02ee261daf50d06c12c34da8dae6": 1675296750,
  "0xe9f807caaaf5b3884dba3f239375fbf8439e6f51": 1697959537,
  "0xea48870994ff0356593a851c400254a7cf0feab8": 1690277871,
  "0xeba4b3c462b9c16f7ccaf4be6f4d3c17c377411e": 1670216449,
  "0xebe6c44a9f46f20c2572ab0a4a6fc8c4d0cd3d11": 1695511480,
  "0xecc394022a00b281a5053b745339f1c62d1c289e": 1695543055,
  "0xedaf30a3bbf3a8b20d053aad3b34450e6d5953b2": 1699772224,
  "0xedb0190e7a46e2e94feccfd2534e33314e14ce4e": 1638129805,
  "0xeee1e314eec2c3161cb2193e3d7d64b45d6c284e": 1660291605,
  "0xef65f6cc8acd21cf16812dcbbfcbcbb3566b1b9e": 1648482691,
  "0xf065000b65236284799f620bb92459ee9d53d413": 1662848449,
  "0xf0fa84a663b16780fa4dcf747062daf8d7271abd": 1692377396,
  "0xf1572dc77c170606c5ec12f3c44476b612cfc6d9": 1698812359,
  "0xf2637d4fbb7cca3ab4719afbc84b096660faed2f": 1697190405,
  "0xf3dbb5ff8dfbe0e75b9491c139b6575a3635a79d": 1664444805,
  "0xf405f702fa57ac6206927721876dbec47ebe1228": 1679053504,
  "0xf427b49d907bf0111fc70602b03496cda52bbd62": 1638153711,
  "0xf5c594e33e74eea19e98d29841c2179a469a8f10": 1663265909,
  "0xf62c2d6ad02bb8b248e3b9be730b036f04d5453e": 1687346076,
  "0xf841c6bb4f1a38df783adf9e6a30322587d249cb": 1698093367,
  "0xf8587bfb4d3e0b31029efa09d595ee6179ddfeaa": 1662196807,
  "0xf977814e90da44bfa03b6295a0616a897441acec": 1665744930,
  "0xfacccc36814841b9fa886aed4386b6294a5c0c14": 1638899247,
  "0xfb07f3ca81b9aebdddc928f99b3df4e04cb679a8": 1681840473,
  "0xfb8b8cead1a14040c6f0b2c2c0db539098ceb15b": 1651579784,
  "0xfc1f0fd1bbef21aefa8da9e0b59445b519268047": 1698650003,
  "0xfc428c8887bd0f49d636fc7cc599ffe21a1fb2b6": 1687802968,
  "0xfc5ad91f9226ae735d001421d24bd3afd6fbd69c": 1663850354,
  "0xfd29aa186726cf1c9ee7d0ab0c894fef45ffe723": 1669963772,
  "0xfd93a5159626e3eefa82a797aaa53d2130c716e5": 1690793453,
  "0xfde2e514f35c23e9950bb15163c75baed6912da3": 1638116190,
};

const addresses: any = [];
const stakedAt: any = [];

const buildList = () => {
  for (const address in users) {
    addresses.push(address);
    stakedAt.push(users[address as keyof typeof users]);
  }
};

buildList();

export default {
  target: PRIME,
  signature: "setStakedAt(address[],uint256[])",
  params: [addresses, stakedAt],
};
