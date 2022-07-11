import { useState, useEffect, useRef } from 'react'
import { Center, Slider } from '@mantine/core'

const formWaveSurferOptions = (ref) => ({
  container: ref,
  waveColor: '#eee',
  progressColor: 'OrangeRed',
  cursorColor: 'OrangeRed',
  barWidth: 2,
  barGap: 6,
  barRadius: 1,
  responsive: true,
  height: 50,
  normalize: true,
  partialRender: true,
  audioRate: 1,
  hideScrollbar: true,
  backend: "MediaElement"
})

export default function IndexPage({ url, wavesurfer }) {
  const waveformRef = useRef(null)
  const [value, setValue] = useState(50)
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    create()

    return () => {
      if (wavesurfer.current) {
        wavesurfer.current.destroy()
      }
    }
  }, [])

  useEffect(() => {
    const val = (value + 50) / 100
    console.log(val)
    wavesurfer?.current?.setPlaybackRate(val);
  }, [value])

  const create = async () => {
    const WaveSurfer = (await import('wavesurfer.js')).default
    const options = formWaveSurferOptions(waveformRef.current)
    wavesurfer.current = WaveSurfer.create(options)
    wavesurfer.current.on('ready', () => {
      // peaks = wavesurfer.current.backend.getPeaks(300, 0, 300)
      wavesurfer.current.backend.media.mozPreservesPitch = false
      setLoaded(true);
    })
    wavesurfer.current.song = url;
    wavesurfer.current.load(wavesurfer.current.song, peaks)
    wavesurfer.current.drawBuffer();
    // wavesurfer.current.playPause();
  }

  return (
    <div className={`${ loaded ? '' : 'opacity-50' } w-full`}>
      <div id="waveform" ref={waveformRef} />
        <Slider
          value={value}
          onChange={setValue}
          size={2}
          labelTransition="fade"
          marks={[
            { value: 25, label: '75%' },
            { value: 50, label: '100%' },
            { value: 85, label: '125%' },
          ]}
          className="mt-4 w-full outline-none"
          styles={(theme) => ({
            bar: {
              backgroundColor: '#EA580C',
            },
            mark: {
              borderRadius: 6,
              borderColor: theme.colors.blue[6]
            },
            markFilled: {
              borderColor: theme.colors.blue[6],
            },
            markLabel: {
              fontSize: theme.fontSizes.xs,
              marginBottom: 5,
              marginTop: 2,
            },
            thumb: {
              height: 12,
              width: 12,
              borderColor: 'white',
              backgroundColor: theme.white,
              borderWidth: 1,
              boxShadow: theme.shadows.sm,
            },
          })}
        ></Slider>
    </div>
  )
}

const peaks = [
  0.027985189110040665,
  -0.012209057807922363,
  0.09694494307041168,
  -0.05727546662092209,
  0.13201703131198883,
  -0.11256779730319977,
  0.2490893006324768,
  -0.24995627999305725,
  0.2100001573562622,
  -0.22745466232299805,
  0.3269348740577698,
  -0.23985655605793,
  0.2073846459388733,
  -0.4092828631401062,
  0.25742268562316895,
  -0.11605551093816757,
  0.17695999145507812,
  -0.11462665349245071,
  0.16948175430297852,
  -0.1133299469947815,
  0.06769421696662903,
  -0.21057799458503723,
  0.1646825671195984,
  -0.4053536057472229,
  0.712174654006958,
  -0.5213243961334229,
  0.7584537267684937,
  -0.7177202701568604,
  0.7586096525192261,
  -0.5760740637779236,
  0.8784480094909668,
  -0.8399636745452881,
  0.5985936522483826,
  -0.5871033668518066,
  0.6599434018135071,
  -0.5569996237754822,
  0.6807197332382202,
  -0.7818190455436707,
  0.5694289207458496,
  -0.8027375936508179,
  0.9060168862342834,
  -0.8215744495391846,
  0.4943156838417053,
  -0.6700637340545654,
  0.8126104474067688,
  -0.6459450721740723,
  0.8698961734771729,
  -0.73140549659729,
  0.6708006858825684,
  -0.5816947221755981,
  0.7122434377670288,
  -0.7364240884780884,
  0.672777533531189,
  -0.6909188032150269,
  0.6405038833618164,
  -0.8838568925857544,
  0.6958166360855103,
  -0.6671805381774902,
  0.595127522945404,
  -0.702307403087616,
  0.6776173710823059,
  -0.6724133491516113,
  0.5324746370315552,
  -0.6989699602127075,
  0.9304788112640381,
  -0.6924789547920227,
  0.8342493772506714,
  -0.645431399345398,
  0.4592628479003906,
  -0.612134575843811,
  0.23216292262077332,
  -0.4741121232509613,
  0.15537793934345245,
  -0.18486431241035461,
  0.7452674508094788,
  -0.6484830975532532,
  0.7916123270988464,
  -0.7520109415054321,
  0.7659364342689514,
  -0.706623911857605,
  0.8183246850967407,
  -0.7596384286880493,
  0.6361137628555298,
  -0.7358814477920532,
  0.718102753162384,
  -0.7040020227432251,
  0.9590514898300171,
  -0.6685628294944763,
  0.6753741502761841,
  -0.8804408311843872,
  0.8952158093452454,
  -0.628853976726532,
  0.4969369173049927,
  -0.7649915814399719,
  0.7889697551727295,
  -0.7480204105377197,
  0.8648488521575928,
  -0.7990374565124512,
  0.7071986198425293,
  -0.7309311628341675,
  0.7497192621231079,
  -0.6823164224624634,
  0.5715945363044739,
  -0.8992762565612793,
  0.866876482963562,
  -0.606848418712616,
  0.7245328426361084,
  -0.546100378036499,
  0.7424975633621216,
  -0.6048377752304077,
  0.754797101020813,
  -0.6275559663772583,
  0.49652981758117676,
  -0.6849023699760437,
  0.9325460195541382,
  -0.8854979276657104,
  0.8382869958877563,
  -0.8323083519935608,
  0.43361395597457886,
  -0.5727596282958984,
  0.21574389934539795,
  -0.19543778896331787,
  0.4515903890132904,
  -0.30175837874412537,
  0.8595818281173706,
  -0.9369910955429077,
  0.8776428699493408,
  -0.5248274803161621,
  0.9459301233291626,
  -0.9547845125198364,
  0.8967722058296204,
  -0.6644558906555176,
  0.7504944205284119,
  -0.7706400752067566,
  0.6445256471633911,
  -0.6667917370796204,
  0.8733625411987305,
  -0.8230034112930298,
  0.6649410128593445,
  -0.8810182213783264,
  0.9444879293441772,
  -0.9073799848556519,
  0.5761599540710449,
  -0.7000880241394043,
  0.699919581413269,
  -0.7056920528411865,
  0.7797654271125793,
  -0.8025792241096497,
  0.6621134877204895,
  -0.8379138708114624,
  0.5498685836791992,
  -0.7047170400619507,
  0.8122721910476685,
  -0.8484797477722168,
  0.6877188682556152,
  -0.7864901423454285,
  0.9034856557846069,
  -0.7063769698143005,
  0.7684329748153687,
  -0.6445720195770264,
  0.7515108585357666,
  -0.7287911176681519,
  0.6533380746841431,
  -0.8651440143585205,
  0.9013001322746277,
  -0.9405810832977295,
  0.7909480333328247,
  -0.8490046262741089,
  0.6295217871665955,
  -0.4349363148212433,
  0.20029059052467346,
  -0.5343134999275208,
  0.4168798327445984,
  -0.7432959079742432,
  0.8155690431594849,
  -0.6094277501106262,
  0.7759023904800415,
  -0.9070353507995605,
  0.8384799957275391,
  -0.9466630816459656,
  0.7225334048271179,
  -0.56629478931427,
  0.7944657206535339,
  -0.614006519317627,
  0.6058754920959473,
  -0.913353681564331,
  0.7715907096862793,
  -0.8760135173797607,
  0.7161795496940613,
  -0.8734866976737976,
  0.7916280031204224,
  -0.8965262174606323,
  0.5240604877471924,
  -0.8890047073364258,
  0.599443256855011,
  -0.8551686406135559,
  0.6904555559158325,
  -0.8439429998397827,
  0.6632238626480103,
  -0.8074508309364319,
  0.9336223006248474,
  -0.5681657791137695,
  0.8376674652099609,
  -0.9204803109169006,
  0.9240976572036743,
  -0.769855260848999,
  0.8361560106277466,
  -0.6308313608169556,
  0.8405768275260925,
  -0.8200652003288269,
  0.7900015115737915,
  -0.9080540537834167,
  0.6695057153701782,
  -0.766724705696106,
  0.7320804595947266,
  -0.8763033151626587,
  0.6013527512550354,
  -0.8868944644927979,
  0.40271198749542236,
  -0.4256700575351715,
  0.3090602159500122,
  -0.8017791509628296,
  0.5169854164123535,
  -0.4867597222328186,
  0.7474547624588013,
  -0.5069242715835571,
  0.8581048250198364,
  -0.9459748268127441,
  0.7560864090919495,
  -0.9099315404891968,
  0.9212572574615479,
  -0.6806079149246216,
  0.7378706932067871,
  -0.7071524262428284,
  0.728390097618103,
  -0.6048582792282104,
  0.8890852928161621,
  -0.562754213809967,
  0.5194519758224487,
  -0.8727381229400635,
  0.7925442457199097,
  -0.8266176581382751,
  0.9330544471740723,
  -0.9189088344573975,
  0.9081085324287415,
  -0.9591346383094788,
  0.8938085436820984,
  -0.7596708536148071,
  0.912655770778656,
  -0.858287513256073,
  0.9574645757675171,
  -0.764004111289978,
  0.9432224035263062,
  -0.7357282638549805,
  0.923180878162384,
  -0.6839869022369385,
  0.7356897592544556,
  -0.5849215984344482,
  0.8341385126113892,
  -0.6089365482330322,
  0.7126809358596802,
  -0.8030760288238525,
  0.605906069278717,
  -0.4748463034629822,
  0.6617692112922668,
  -0.8272686004638672,
  0.8010008335113525,
  -0.9503417015075684,
  0.5178898572921753,
  -0.40536606311798096,
  0.13302746415138245,
  -0.4247063994407654,
  0.48404884338378906,
  -0.43811628222465515,
  0.22878089547157288,
  -0.4175657629966736,
  0.21749117970466614,
  -0.09382881969213486,
  0.20230555534362793,
  -0.1388246715068817,
  0.16154390573501587,
  -0.25881755352020264,
  0.1280321180820465,
  -0.08582251518964767,
  0.11922093480825424,
  -0.37307316064834595,
  0.3107028901576996,
  -0.18444226682186127,
  0.3218032717704773,
  -0.24690872430801392,
  0.22551581263542175,
  -0.1706404983997345,
  0.09955208748579025,
  -0.1044464260339737,
  0.09574075043201447,
  -0.07274274528026581,
  0.10598236322402954,
  -0.1743527352809906,
  0.2177504003047943,
  -0.3268572688102722,
  0.183072030544281,
  -0.1349760890007019,
  0.12910006940364838,
  -0.20194530487060547,
  0.3355046212673187,
  -0.23465532064437866,
  0.1685592532157898,
  -0.13499251008033752,
  0.15028809010982513,
  -0.22117960453033447,
  0.17372886836528778,
  -0.28940898180007935,
  0.14594629406929016,
  -0.15910989046096802,
  0.17210742831230164,
  -0.20321159064769745,
  0.14982390403747559,
  -0.11529357731342316,
  0.1083599403500557,
  -0.14398780465126038,
  0.17085285484790802,
  -0.10514719784259796,
  0.1377541571855545,
  -0.3243846893310547,
  0.7056124806404114,
  -0.6827449798583984,
  0.6462777853012085,
  -0.7255316972732544,
  0.9103659391403198,
  -0.863540768623352,
  0.7764925956726074,
  -0.8950638771057129,
  0.7503366470336914,
  -0.8814001083374023,
  0.6334882974624634,
  -0.8633375763893127,
  0.9320889115333557,
  -0.8774144649505615,
  0.7768312096595764,
  -0.8675163984298706,
  0.787480354309082,
  -0.634699821472168,
  0.35721102356910706,
  -0.8783314824104309,
  0.720481276512146,
  -0.7570617198944092,
  0.902616024017334,
  -0.6946439146995544,
  0.45324358344078064,
  -0.6459139585494995,
  0.7885480523109436,
  -0.7481615543365479,
  0.6015722155570984,
  -0.5293419361114502,
  0.7385872602462769,
  -0.7150118947029114,
  0.7721401453018188,
  -0.6224007606506348,
  0.8086433410644531,
  -0.9439144134521484,
  0.7916809320449829,
  -0.7903740406036377,
  0.7919600605964661,
  -0.5458275675773621,
  0.6913158893585205,
  -0.8541672229766846,
  0.7936428785324097,
  -0.8359631896018982,
  0.44646573066711426,
  -0.48037299513816833,
  0.8536689877510071,
  -0.34141698479652405,
  0.24166551232337952,
  -0.1972557008266449,
  0.5948455333709717,
  -0.5720676779747009,
  0.7623714208602905,
  -0.4358631372451782,
  0.884567379951477,
  -0.5833643078804016,
  0.7657516002655029,
  -0.6655865907669067,
  0.6365087032318115,
  -0.9412383437156677,
  0.6122419238090515,
  -0.6581096649169922,
  0.8809778690338135,
  -0.612549901008606,
  0.6902364492416382,
  -0.8477783203125,
  0.9462851881980896,
  -0.5222021341323853,
  0.8376706838607788,
  -0.8959226608276367,
  0.7316200137138367,
  -0.6842198371887207,
  0.6412829160690308,
  -0.8239238858222961,
  0.5807403326034546,
  -0.9130331873893738,
  0.8384334444999695,
  -0.8602540493011475,
  0.6647129654884338,
  -0.7460704445838928,
  0.6808006167411804,
  -0.7355570793151855,
  0.7411940097808838,
  -0.5839270353317261,
  0.6120697259902954,
  -0.7294787168502808,
  0.6911250352859497,
  -0.74602872133255,
  0.6094229221343994,
  -0.7275782823562622,
  0.6856032013893127,
  -0.8008168339729309,
  1.0171130895614624,
  -0.7089452743530273,
  0.8988592624664307,
  -0.6678165793418884,
  0.7650453448295593,
  -0.6651811599731445,
  0.6634925603866577,
  -0.8516892790794373,
  0.6332926750183105,
  -0.648137629032135,
  0.4463428556919098,
  -0.5916286110877991,
  0.6213092803955078,
  -0.692213237285614,
  0.7056920528411865,
  -0.5661497712135315,
  0.6665527820587158,
  -0.39698249101638794,
  0.9384936094284058,
  -0.42099547386169434,
  0.6871508359909058,
  -0.4860181510448456,
  0.44332802295684814,
  -0.9000595808029175,
  0.6261890530586243,
  -0.8972876667976379,
  0.5850127935409546,
  -0.6827301979064941,
  0.593178927898407,
  -0.7953599095344543,
  0.31681448221206665,
  -0.6529086232185364,
  0.6860313415527344,
  -0.6785413026809692,
  0.9470192193984985,
  -0.2002134919166565,
  0.2097214013338089,
  -0.186026930809021,
  0.15276199579238892,
  -0.1227603554725647,
  0.21717123687267303,
  -0.0969804897904396,
  0.3466511070728302,
  -0.2676367163658142,
  0.25572043657302856,
  -0.26689428091049194,
  0.46439671516418457,
  -0.15972506999969482,
  0.12020950764417648,
  -0.19417479634284973,
  0.2508067488670349,
  -0.23200944066047668,
  0.17703895270824432,
  -0.19434288144111633,
  0.4184311032295227,
  -0.17971818149089813,
  0.09703007340431213,
  -0.36814531683921814,
  0.719694197177887,
  -0.6021006107330322,
  0.692053496837616,
  -0.7715629935264587,
  0.7455882430076599,
  -0.625234067440033,
  0.8932055234909058,
  -0.7399130463600159,
  0.6604963541030884,
  -0.6986017227172852,
  0.5911707878112793,
  -0.5957319736480713,
  0.9236676096916199,
  -0.7129848003387451,
  0.5516956448554993,
  -0.81773841381073,
  0.9197660088539124,
  -0.727232813835144,
  0.42414408922195435,
  -0.750275731086731,
  0.6191143989562988,
  -0.6914936304092407,
  0.7477564811706543,
  -0.7262721061706543,
  0.6255411505699158,
  -0.5157814025878906,
  0.7048219442367554,
  -0.6657193899154663,
  0.7119358777999878,
  -0.6249085068702698,
  0.790895938873291,
  -0.674280047416687,
  0.6943312287330627,
  -0.6204496622085571,
  0.8385962843894958,
  -0.6549371480941772,
  0.6167894601821899,
  -0.5865391492843628,
  0.5013763308525085,
  -0.641690731048584,
  0.91194748878479,
  -0.732629656791687,
  0.8066909909248352,
  -0.9275155067443848,
  0.4324217140674591,
  -0.5964864492416382,
  0.0539528988301754,
  -0.1248539388179779,
  0.24682527780532837,
  -0.15245187282562256,
  0.6583889722824097,
  -0.6485345959663391,
  0.6790584921836853,
  -0.7091838121414185,
  0.8018319010734558,
  -0.6722990274429321,
  0.778555154800415,
  -0.6788660287857056,
  0.5355181694030762,
  -0.6099975109100342,
  0.6653198599815369,
  -0.649261474609375,
  0.7425190210342407,
  -0.6772809028625488,
  0.5868338942527771,
  -0.7747388482093811,
  0.9222151041030884,
  -0.6826491355895996,
  0.557627260684967,
  -0.7927243709564209,
  0.7102570533752441,
  -0.6712749004364014,
  0.7558987140655518,
  -0.7401947975158691,
  0.6942473649978638,
  -0.44623100757598877,
  0.7963255643844604,
  -0.6877228617668152,
  0.6727337837219238,
  -0.6732789278030396,
  0.7402687072753906,
  -0.9094858169555664,
  0.7050348520278931,
  -0.5971671342849731,
  0.7488754987716675,
  -0.7492880821228027,
  0.7324671149253845,
  -0.6628332734107971,
  0.5557661056518555,
  -0.6817615628242493,
  0.9372401237487793,
  -0.7526153922080994,
  0.9456156492233276,
  -0.6854960918426514,
  0.40281805396080017,
  -0.5948846340179443,
  0.060696206986904144,
  -0.15104490518569946,
  0.45392462611198425,
  -0.2355746477842331,
  0.23661473393440247,
  -0.2905080318450928,
  0.0779268741607666,
  -0.15140381455421448,
  0.026476146653294563,
  -0.03131406009197235,
  0.016071513295173645,
  -0.0209137462079525,
  0.007900593802332878,
  -0.007618642412126064,
  0.00580316036939621,
  -0.006296540144830942,
  0.005525541491806507,
  -0.0041770548559725285,
  0.008103801868855953,
  -0.008508534170687199,
  0.008364684879779816,
  -0.0036289978306740522,
  0.004520887043327093,
  -0.008485134690999985,
  0.005245651118457317,
  -0.004915518686175346,
  0.005445352289825678,
  -0.0037995753809809685,
  0.003926488570868969,
  -0.004106233827769756,
  null,
  null
]


