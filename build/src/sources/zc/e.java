package zc;

import android.util.Pair;
import android.util.SparseArray;
import androidx.recyclerview.widget.RecyclerView;
import androidx.recyclerview.widget.h;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.google.android.exoplayer2.Format;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.UUID;
import ji.s;
import kotlin.jvm.internal.ByteCompanionObject;
import lc.l0;
import nc.a;
import ne.d0;
import ne.h0;
import ne.w0;
import ne.y;
import ne.z;
import rc.m;
import tc.b0;
import tc.c0;
import tc.k;
import tc.l;
import tc.m;
import tc.p;
import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e implements k {

    /* renamed from: c0  reason: collision with root package name */
    public static final p f55535c0 = new p() { // from class: zc.d
        @Override // tc.p
        public final k[] b() {
            return e.b();
        }
    };

    /* renamed from: d0  reason: collision with root package name */
    private static final byte[] f55536d0 = {49, 10, 48, 48, 58, 48, 48, 58, 48, 48, 44, 48, 48, 48, 32, 45, 45, 62, 32, 48, 48, 58, 48, 48, 58, 48, 48, 44, 48, 48, 48, 10};

    /* renamed from: e0  reason: collision with root package name */
    private static final byte[] f55537e0 = w0.s0("Format: Start, End, ReadOrder, Layer, Style, Name, MarginL, MarginR, MarginV, Effect, Text");

    /* renamed from: f0  reason: collision with root package name */
    private static final byte[] f55538f0 = {68, 105, 97, 108, 111, 103, 117, 101, 58, 32, 48, 58, 48, 48, 58, 48, 48, 58, 48, 48, 44, 48, 58, 48, 48, 58, 48, 48, 58, 48, 48, 44};

    /* renamed from: g0  reason: collision with root package name */
    private static final byte[] f55539g0 = {87, 69, 66, 86, 84, 84, 10, 10, 48, 48, 58, 48, 48, 58, 48, 48, 46, 48, 48, 48, 32, 45, 45, 62, 32, 48, 48, 58, 48, 48, 58, 48, 48, 46, 48, 48, 48, 10};

    /* renamed from: h0  reason: collision with root package name */
    private static final UUID f55540h0 = new UUID(72057594037932032L, -9223371306706625679L);

    /* renamed from: i0  reason: collision with root package name */
    private static final Map f55541i0;
    private long A;
    private long B;
    private z C;
    private z D;
    private boolean E;
    private boolean F;
    private int G;
    private long H;
    private long I;
    private int J;
    private int K;
    private int[] L;
    private int M;
    private int N;
    private int O;
    private int P;
    private boolean Q;
    private long R;
    private int S;
    private int T;
    private int U;
    private boolean V;
    private boolean W;
    private boolean X;
    private int Y;
    private byte Z;

    /* renamed from: a  reason: collision with root package name */
    private final zc.c f55542a;

    /* renamed from: a0  reason: collision with root package name */
    private boolean f55543a0;

    /* renamed from: b  reason: collision with root package name */
    private final g f55544b;

    /* renamed from: b0  reason: collision with root package name */
    private m f55545b0;

    /* renamed from: c  reason: collision with root package name */
    private final SparseArray f55546c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f55547d;

    /* renamed from: e  reason: collision with root package name */
    private final h0 f55548e;

    /* renamed from: f  reason: collision with root package name */
    private final h0 f55549f;

    /* renamed from: g  reason: collision with root package name */
    private final h0 f55550g;

    /* renamed from: h  reason: collision with root package name */
    private final h0 f55551h;

    /* renamed from: i  reason: collision with root package name */
    private final h0 f55552i;

    /* renamed from: j  reason: collision with root package name */
    private final h0 f55553j;

    /* renamed from: k  reason: collision with root package name */
    private final h0 f55554k;

    /* renamed from: l  reason: collision with root package name */
    private final h0 f55555l;

    /* renamed from: m  reason: collision with root package name */
    private final h0 f55556m;

    /* renamed from: n  reason: collision with root package name */
    private final h0 f55557n;

    /* renamed from: o  reason: collision with root package name */
    private ByteBuffer f55558o;

    /* renamed from: p  reason: collision with root package name */
    private long f55559p;

    /* renamed from: q  reason: collision with root package name */
    private long f55560q;

    /* renamed from: r  reason: collision with root package name */
    private long f55561r;

    /* renamed from: s  reason: collision with root package name */
    private long f55562s;

    /* renamed from: t  reason: collision with root package name */
    private long f55563t;

    /* renamed from: u  reason: collision with root package name */
    private c f55564u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f55565v;

    /* renamed from: w  reason: collision with root package name */
    private int f55566w;

    /* renamed from: x  reason: collision with root package name */
    private long f55567x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f55568y;

    /* renamed from: z  reason: collision with root package name */
    private long f55569z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class b implements zc.b {
        private b() {
        }

        @Override // zc.b
        public void a(int i10) {
            e.this.o(i10);
        }

        @Override // zc.b
        public void b(int i10, int i11, l lVar) {
            e.this.l(i10, i11, lVar);
        }

        @Override // zc.b
        public void c(int i10, double d10) {
            e.this.r(i10, d10);
        }

        @Override // zc.b
        public void d(int i10, long j10) {
            e.this.x(i10, j10);
        }

        @Override // zc.b
        public int e(int i10) {
            return e.this.u(i10);
        }

        @Override // zc.b
        public boolean f(int i10) {
            return e.this.z(i10);
        }

        @Override // zc.b
        public void g(int i10, String str) {
            e.this.G(i10, str);
        }

        @Override // zc.b
        public void h(int i10, long j10, long j11) {
            e.this.F(i10, j10, j11);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {
        public byte[] N;
        public c0 T;
        public boolean U;
        public b0 X;
        public int Y;

        /* renamed from: a  reason: collision with root package name */
        public String f55571a;

        /* renamed from: b  reason: collision with root package name */
        public String f55572b;

        /* renamed from: c  reason: collision with root package name */
        public int f55573c;

        /* renamed from: d  reason: collision with root package name */
        public int f55574d;

        /* renamed from: e  reason: collision with root package name */
        public int f55575e;

        /* renamed from: f  reason: collision with root package name */
        public int f55576f;

        /* renamed from: g  reason: collision with root package name */
        private int f55577g;

        /* renamed from: h  reason: collision with root package name */
        public boolean f55578h;

        /* renamed from: i  reason: collision with root package name */
        public byte[] f55579i;

        /* renamed from: j  reason: collision with root package name */
        public b0.a f55580j;

        /* renamed from: k  reason: collision with root package name */
        public byte[] f55581k;

        /* renamed from: l  reason: collision with root package name */
        public rc.m f55582l;

        /* renamed from: m  reason: collision with root package name */
        public int f55583m = -1;

        /* renamed from: n  reason: collision with root package name */
        public int f55584n = -1;

        /* renamed from: o  reason: collision with root package name */
        public int f55585o = -1;

        /* renamed from: p  reason: collision with root package name */
        public int f55586p = -1;

        /* renamed from: q  reason: collision with root package name */
        public int f55587q = 0;

        /* renamed from: r  reason: collision with root package name */
        public int f55588r = -1;

        /* renamed from: s  reason: collision with root package name */
        public float f55589s = 0.0f;

        /* renamed from: t  reason: collision with root package name */
        public float f55590t = 0.0f;

        /* renamed from: u  reason: collision with root package name */
        public float f55591u = 0.0f;

        /* renamed from: v  reason: collision with root package name */
        public byte[] f55592v = null;

        /* renamed from: w  reason: collision with root package name */
        public int f55593w = -1;

        /* renamed from: x  reason: collision with root package name */
        public boolean f55594x = false;

        /* renamed from: y  reason: collision with root package name */
        public int f55595y = -1;

        /* renamed from: z  reason: collision with root package name */
        public int f55596z = -1;
        public int A = -1;
        public int B = 1000;
        public int C = h.DEFAULT_DRAG_ANIMATION_DURATION;
        public float D = -1.0f;
        public float E = -1.0f;
        public float F = -1.0f;
        public float G = -1.0f;
        public float H = -1.0f;
        public float I = -1.0f;
        public float J = -1.0f;
        public float K = -1.0f;
        public float L = -1.0f;
        public float M = -1.0f;
        public int O = 1;
        public int P = -1;
        public int Q = 8000;
        public long R = 0;
        public long S = 0;
        public boolean V = true;
        private String W = "eng";

        protected c() {
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void f() {
            ne.a.e(this.X);
        }

        private byte[] g(String str) {
            byte[] bArr = this.f55581k;
            if (bArr != null) {
                return bArr;
            }
            throw l0.a("Missing CodecPrivate for codec " + str, null);
        }

        private byte[] h() {
            if (this.D != -1.0f && this.E != -1.0f && this.F != -1.0f && this.G != -1.0f && this.H != -1.0f && this.I != -1.0f && this.J != -1.0f && this.K != -1.0f && this.L != -1.0f && this.M != -1.0f) {
                byte[] bArr = new byte[25];
                ByteBuffer order = ByteBuffer.wrap(bArr).order(ByteOrder.LITTLE_ENDIAN);
                order.put((byte) 0);
                order.putShort((short) ((this.D * 50000.0f) + 0.5f));
                order.putShort((short) ((this.E * 50000.0f) + 0.5f));
                order.putShort((short) ((this.F * 50000.0f) + 0.5f));
                order.putShort((short) ((this.G * 50000.0f) + 0.5f));
                order.putShort((short) ((this.H * 50000.0f) + 0.5f));
                order.putShort((short) ((this.I * 50000.0f) + 0.5f));
                order.putShort((short) ((this.J * 50000.0f) + 0.5f));
                order.putShort((short) ((this.K * 50000.0f) + 0.5f));
                order.putShort((short) (this.L + 0.5f));
                order.putShort((short) (this.M + 0.5f));
                order.putShort((short) this.B);
                order.putShort((short) this.C);
                return bArr;
            }
            return null;
        }

        private static Pair k(h0 h0Var) {
            try {
                h0Var.V(16);
                long x10 = h0Var.x();
                if (x10 == 1482049860) {
                    return new Pair("video/divx", null);
                }
                if (x10 == 859189832) {
                    return new Pair("video/3gpp", null);
                }
                if (x10 == 826496599) {
                    byte[] e10 = h0Var.e();
                    for (int f10 = h0Var.f() + 20; f10 < e10.length - 4; f10++) {
                        if (e10[f10] == 0 && e10[f10 + 1] == 0 && e10[f10 + 2] == 1 && e10[f10 + 3] == 15) {
                            return new Pair("video/wvc1", Collections.singletonList(Arrays.copyOfRange(e10, f10, e10.length)));
                        }
                    }
                    throw l0.a("Failed to find FourCC VC1 initialization data", null);
                }
                y.i("MatroskaExtractor", "Unknown FourCC. Setting mimeType to video/x-unknown");
                return new Pair("video/x-unknown", null);
            } catch (ArrayIndexOutOfBoundsException unused) {
                throw l0.a("Error parsing FourCC private data", null);
            }
        }

        private static boolean l(h0 h0Var) {
            try {
                int z10 = h0Var.z();
                if (z10 == 1) {
                    return true;
                }
                if (z10 == 65534) {
                    h0Var.U(24);
                    if (h0Var.A() == e.f55540h0.getMostSignificantBits()) {
                        if (h0Var.A() == e.f55540h0.getLeastSignificantBits()) {
                            return true;
                        }
                    }
                }
                return false;
            } catch (ArrayIndexOutOfBoundsException unused) {
                throw l0.a("Error parsing MS/ACM codec private", null);
            }
        }

        private static List m(byte[] bArr) {
            int i10;
            int i11;
            try {
                if (bArr[0] == 2) {
                    int i12 = 0;
                    int i13 = 1;
                    while (true) {
                        i10 = bArr[i13];
                        if ((i10 & SetSpanOperation.SPAN_MAX_PRIORITY) != 255) {
                            break;
                        }
                        i12 += SetSpanOperation.SPAN_MAX_PRIORITY;
                        i13++;
                    }
                    int i14 = i13 + 1;
                    int i15 = i12 + (i10 & SetSpanOperation.SPAN_MAX_PRIORITY);
                    int i16 = 0;
                    while (true) {
                        i11 = bArr[i14];
                        if ((i11 & SetSpanOperation.SPAN_MAX_PRIORITY) != 255) {
                            break;
                        }
                        i16 += SetSpanOperation.SPAN_MAX_PRIORITY;
                        i14++;
                    }
                    int i17 = i14 + 1;
                    int i18 = i16 + (i11 & SetSpanOperation.SPAN_MAX_PRIORITY);
                    if (bArr[i17] == 1) {
                        byte[] bArr2 = new byte[i15];
                        System.arraycopy(bArr, i17, bArr2, 0, i15);
                        int i19 = i17 + i15;
                        if (bArr[i19] == 3) {
                            int i20 = i19 + i18;
                            if (bArr[i20] == 5) {
                                byte[] bArr3 = new byte[bArr.length - i20];
                                System.arraycopy(bArr, i20, bArr3, 0, bArr.length - i20);
                                ArrayList arrayList = new ArrayList(2);
                                arrayList.add(bArr2);
                                arrayList.add(bArr3);
                                return arrayList;
                            }
                            throw l0.a("Error parsing vorbis codec private", null);
                        }
                        throw l0.a("Error parsing vorbis codec private", null);
                    }
                    throw l0.a("Error parsing vorbis codec private", null);
                }
                throw l0.a("Error parsing vorbis codec private", null);
            } catch (ArrayIndexOutOfBoundsException unused) {
                throw l0.a("Error parsing vorbis codec private", null);
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public boolean o(boolean z10) {
            if ("A_OPUS".equals(this.f55572b)) {
                return z10;
            }
            if (this.f55576f > 0) {
                return true;
            }
            return false;
        }

        /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
        public void i(m mVar, int i10) {
            char c10;
            List singletonList;
            String str;
            int i11;
            int i12;
            List list;
            String str2;
            int i13;
            int i14;
            int i15;
            int i16;
            int i17;
            float f10;
            int i18;
            oe.d a10;
            String str3 = this.f55572b;
            str3.getClass();
            switch (str3.hashCode()) {
                case -2095576542:
                    if (str3.equals("V_MPEG4/ISO/AP")) {
                        c10 = 0;
                        break;
                    }
                    c10 = 65535;
                    break;
                case -2095575984:
                    if (str3.equals("V_MPEG4/ISO/SP")) {
                        c10 = 1;
                        break;
                    }
                    c10 = 65535;
                    break;
                case -1985379776:
                    if (str3.equals("A_MS/ACM")) {
                        c10 = 2;
                        break;
                    }
                    c10 = 65535;
                    break;
                case -1784763192:
                    if (str3.equals("A_TRUEHD")) {
                        c10 = 3;
                        break;
                    }
                    c10 = 65535;
                    break;
                case -1730367663:
                    if (str3.equals("A_VORBIS")) {
                        c10 = 4;
                        break;
                    }
                    c10 = 65535;
                    break;
                case -1482641358:
                    if (str3.equals("A_MPEG/L2")) {
                        c10 = 5;
                        break;
                    }
                    c10 = 65535;
                    break;
                case -1482641357:
                    if (str3.equals("A_MPEG/L3")) {
                        c10 = 6;
                        break;
                    }
                    c10 = 65535;
                    break;
                case -1373388978:
                    if (str3.equals("V_MS/VFW/FOURCC")) {
                        c10 = 7;
                        break;
                    }
                    c10 = 65535;
                    break;
                case -933872740:
                    if (str3.equals("S_DVBSUB")) {
                        c10 = '\b';
                        break;
                    }
                    c10 = 65535;
                    break;
                case -538363189:
                    if (str3.equals("V_MPEG4/ISO/ASP")) {
                        c10 = '\t';
                        break;
                    }
                    c10 = 65535;
                    break;
                case -538363109:
                    if (str3.equals("V_MPEG4/ISO/AVC")) {
                        c10 = '\n';
                        break;
                    }
                    c10 = 65535;
                    break;
                case -425012669:
                    if (str3.equals("S_VOBSUB")) {
                        c10 = 11;
                        break;
                    }
                    c10 = 65535;
                    break;
                case -356037306:
                    if (str3.equals("A_DTS/LOSSLESS")) {
                        c10 = '\f';
                        break;
                    }
                    c10 = 65535;
                    break;
                case 62923557:
                    if (str3.equals("A_AAC")) {
                        c10 = '\r';
                        break;
                    }
                    c10 = 65535;
                    break;
                case 62923603:
                    if (str3.equals("A_AC3")) {
                        c10 = 14;
                        break;
                    }
                    c10 = 65535;
                    break;
                case 62927045:
                    if (str3.equals("A_DTS")) {
                        c10 = 15;
                        break;
                    }
                    c10 = 65535;
                    break;
                case 82318131:
                    if (str3.equals("V_AV1")) {
                        c10 = 16;
                        break;
                    }
                    c10 = 65535;
                    break;
                case 82338133:
                    if (str3.equals("V_VP8")) {
                        c10 = 17;
                        break;
                    }
                    c10 = 65535;
                    break;
                case 82338134:
                    if (str3.equals("V_VP9")) {
                        c10 = 18;
                        break;
                    }
                    c10 = 65535;
                    break;
                case 99146302:
                    if (str3.equals("S_HDMV/PGS")) {
                        c10 = 19;
                        break;
                    }
                    c10 = 65535;
                    break;
                case 444813526:
                    if (str3.equals("V_THEORA")) {
                        c10 = 20;
                        break;
                    }
                    c10 = 65535;
                    break;
                case 542569478:
                    if (str3.equals("A_DTS/EXPRESS")) {
                        c10 = 21;
                        break;
                    }
                    c10 = 65535;
                    break;
                case 635596514:
                    if (str3.equals("A_PCM/FLOAT/IEEE")) {
                        c10 = 22;
                        break;
                    }
                    c10 = 65535;
                    break;
                case 725948237:
                    if (str3.equals("A_PCM/INT/BIG")) {
                        c10 = 23;
                        break;
                    }
                    c10 = 65535;
                    break;
                case 725957860:
                    if (str3.equals("A_PCM/INT/LIT")) {
                        c10 = 24;
                        break;
                    }
                    c10 = 65535;
                    break;
                case 738597099:
                    if (str3.equals("S_TEXT/ASS")) {
                        c10 = 25;
                        break;
                    }
                    c10 = 65535;
                    break;
                case 855502857:
                    if (str3.equals("V_MPEGH/ISO/HEVC")) {
                        c10 = 26;
                        break;
                    }
                    c10 = 65535;
                    break;
                case 1045209816:
                    if (str3.equals("S_TEXT/WEBVTT")) {
                        c10 = 27;
                        break;
                    }
                    c10 = 65535;
                    break;
                case 1422270023:
                    if (str3.equals("S_TEXT/UTF8")) {
                        c10 = 28;
                        break;
                    }
                    c10 = 65535;
                    break;
                case 1809237540:
                    if (str3.equals("V_MPEG2")) {
                        c10 = 29;
                        break;
                    }
                    c10 = 65535;
                    break;
                case 1950749482:
                    if (str3.equals("A_EAC3")) {
                        c10 = 30;
                        break;
                    }
                    c10 = 65535;
                    break;
                case 1950789798:
                    if (str3.equals("A_FLAC")) {
                        c10 = 31;
                        break;
                    }
                    c10 = 65535;
                    break;
                case 1951062397:
                    if (str3.equals("A_OPUS")) {
                        c10 = ' ';
                        break;
                    }
                    c10 = 65535;
                    break;
                default:
                    c10 = 65535;
                    break;
            }
            String str4 = "audio/raw";
            oe.c cVar = null;
            switch (c10) {
                case 0:
                case 1:
                case '\t':
                    byte[] bArr = this.f55581k;
                    if (bArr == null) {
                        singletonList = null;
                    } else {
                        singletonList = Collections.singletonList(bArr);
                    }
                    str4 = "video/mp4v-es";
                    str = null;
                    i12 = -1;
                    i11 = -1;
                    break;
                case 2:
                    if (l(new h0(g(this.f55572b)))) {
                        int g02 = w0.g0(this.P);
                        if (g02 == 0) {
                            y.i("MatroskaExtractor", "Unsupported PCM bit depth: " + this.P + ". Setting mimeType to audio/x-unknown");
                        } else {
                            i11 = g02;
                            singletonList = null;
                            str = null;
                            i12 = -1;
                            break;
                        }
                    } else {
                        y.i("MatroskaExtractor", "Non-PCM MS/ACM is unsupported. Setting mimeType to audio/x-unknown");
                    }
                    singletonList = null;
                    str = null;
                    str4 = "audio/x-unknown";
                    i12 = -1;
                    i11 = -1;
                    break;
                case 3:
                    this.T = new c0();
                    str4 = "audio/true-hd";
                    singletonList = null;
                    str = null;
                    i12 = -1;
                    i11 = -1;
                    break;
                case 4:
                    singletonList = m(g(this.f55572b));
                    str4 = "audio/vorbis";
                    i12 = 8192;
                    str = null;
                    i11 = -1;
                    break;
                case 5:
                    str4 = "audio/mpeg-L2";
                    singletonList = null;
                    str = null;
                    i12 = RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
                    i11 = -1;
                    break;
                case 6:
                    str4 = "audio/mpeg";
                    singletonList = null;
                    str = null;
                    i12 = RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
                    i11 = -1;
                    break;
                case 7:
                    Pair k10 = k(new h0(g(this.f55572b)));
                    str4 = (String) k10.first;
                    singletonList = (List) k10.second;
                    str = null;
                    i12 = -1;
                    i11 = -1;
                    break;
                case '\b':
                    byte[] bArr2 = new byte[4];
                    System.arraycopy(g(this.f55572b), 0, bArr2, 0, 4);
                    singletonList = s.s(bArr2);
                    str = null;
                    str4 = "application/dvbsubs";
                    i12 = -1;
                    i11 = -1;
                    break;
                case '\n':
                    oe.a b10 = oe.a.b(new h0(g(this.f55572b)));
                    list = b10.f42525a;
                    this.Y = b10.f42526b;
                    str2 = b10.f42533i;
                    str4 = "video/avc";
                    List list2 = list;
                    str = str2;
                    singletonList = list2;
                    i12 = -1;
                    i11 = -1;
                    break;
                case 11:
                    singletonList = s.s(g(this.f55572b));
                    str = null;
                    str4 = "application/vobsub";
                    i12 = -1;
                    i11 = -1;
                    break;
                case '\f':
                    str4 = "audio/vnd.dts.hd";
                    singletonList = null;
                    str = null;
                    i12 = -1;
                    i11 = -1;
                    break;
                case '\r':
                    singletonList = Collections.singletonList(g(this.f55572b));
                    a.b f11 = nc.a.f(this.f55581k);
                    this.Q = f11.f40026a;
                    this.O = f11.f40027b;
                    str = f11.f40028c;
                    str4 = "audio/mp4a-latm";
                    i12 = -1;
                    i11 = -1;
                    break;
                case 14:
                    str4 = "audio/ac3";
                    singletonList = null;
                    str = null;
                    i12 = -1;
                    i11 = -1;
                    break;
                case 15:
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                    str4 = "audio/vnd.dts";
                    singletonList = null;
                    str = null;
                    i12 = -1;
                    i11 = -1;
                    break;
                case 16:
                    str4 = "video/av01";
                    singletonList = null;
                    str = null;
                    i12 = -1;
                    i11 = -1;
                    break;
                case 17:
                    str4 = "video/x-vnd.on2.vp8";
                    singletonList = null;
                    str = null;
                    i12 = -1;
                    i11 = -1;
                    break;
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                    str4 = "video/x-vnd.on2.vp9";
                    singletonList = null;
                    str = null;
                    i12 = -1;
                    i11 = -1;
                    break;
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                    singletonList = null;
                    str = null;
                    str4 = "application/pgs";
                    i12 = -1;
                    i11 = -1;
                    break;
                case 20:
                    str4 = "video/x-unknown";
                    singletonList = null;
                    str = null;
                    i12 = -1;
                    i11 = -1;
                    break;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                    if (this.P == 32) {
                        singletonList = null;
                        str = null;
                        i12 = -1;
                        i11 = 4;
                        break;
                    } else {
                        y.i("MatroskaExtractor", "Unsupported floating point PCM bit depth: " + this.P + ". Setting mimeType to audio/x-unknown");
                        singletonList = null;
                        str = null;
                        str4 = "audio/x-unknown";
                        i12 = -1;
                        i11 = -1;
                    }
                case 23:
                    int i19 = this.P;
                    if (i19 == 8) {
                        singletonList = null;
                        str = null;
                        i11 = 3;
                        i12 = -1;
                        break;
                    } else if (i19 == 16) {
                        i13 = 268435456;
                        i11 = i13;
                        singletonList = null;
                        str = null;
                        i12 = -1;
                    } else {
                        y.i("MatroskaExtractor", "Unsupported big endian PCM bit depth: " + this.P + ". Setting mimeType to audio/x-unknown");
                        singletonList = null;
                        str = null;
                        str4 = "audio/x-unknown";
                        i12 = -1;
                        i11 = -1;
                    }
                case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                    i13 = w0.g0(this.P);
                    if (i13 == 0) {
                        y.i("MatroskaExtractor", "Unsupported little endian PCM bit depth: " + this.P + ". Setting mimeType to audio/x-unknown");
                        singletonList = null;
                        str = null;
                        str4 = "audio/x-unknown";
                        i12 = -1;
                        i11 = -1;
                        break;
                    }
                    i11 = i13;
                    singletonList = null;
                    str = null;
                    i12 = -1;
                case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                    singletonList = s.t(e.f55537e0, g(this.f55572b));
                    str = null;
                    str4 = "text/x-ssa";
                    i12 = -1;
                    i11 = -1;
                    break;
                case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                    oe.f a11 = oe.f.a(new h0(g(this.f55572b)));
                    list = a11.f42567a;
                    this.Y = a11.f42568b;
                    str2 = a11.f42575i;
                    str4 = "video/hevc";
                    List list22 = list;
                    str = str2;
                    singletonList = list22;
                    i12 = -1;
                    i11 = -1;
                    break;
                case 27:
                    str4 = "text/vtt";
                    singletonList = null;
                    str = null;
                    i12 = -1;
                    i11 = -1;
                    break;
                case 28:
                    str4 = "application/x-subrip";
                    singletonList = null;
                    str = null;
                    i12 = -1;
                    i11 = -1;
                    break;
                case 29:
                    str4 = "video/mpeg2";
                    singletonList = null;
                    str = null;
                    i12 = -1;
                    i11 = -1;
                    break;
                case 30:
                    str4 = "audio/eac3";
                    singletonList = null;
                    str = null;
                    i12 = -1;
                    i11 = -1;
                    break;
                case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                    singletonList = Collections.singletonList(g(this.f55572b));
                    str4 = "audio/flac";
                    str = null;
                    i12 = -1;
                    i11 = -1;
                    break;
                case ' ':
                    singletonList = new ArrayList(3);
                    singletonList.add(g(this.f55572b));
                    ByteBuffer allocate = ByteBuffer.allocate(8);
                    ByteOrder byteOrder = ByteOrder.LITTLE_ENDIAN;
                    singletonList.add(allocate.order(byteOrder).putLong(this.R).array());
                    singletonList.add(ByteBuffer.allocate(8).order(byteOrder).putLong(this.S).array());
                    str4 = "audio/opus";
                    i12 = 5760;
                    str = null;
                    i11 = -1;
                    break;
                default:
                    throw l0.a("Unrecognized codec identifier.", null);
            }
            if (this.N != null && (a10 = oe.d.a(new h0(this.N))) != null) {
                str = a10.f42552c;
                str4 = "video/dolby-vision";
            }
            String str5 = str4;
            boolean z10 = this.V;
            if (this.U) {
                i14 = 2;
            } else {
                i14 = 0;
            }
            int i20 = i14 | (z10 ? 1 : 0);
            Format.b bVar = new Format.b();
            if (ne.c0.o(str5)) {
                bVar.J(this.O).h0(this.Q).a0(i11);
                i15 = 1;
            } else if (ne.c0.s(str5)) {
                if (this.f55587q == 0) {
                    int i21 = this.f55585o;
                    i16 = -1;
                    if (i21 == -1) {
                        i21 = this.f55583m;
                    }
                    this.f55585o = i21;
                    int i22 = this.f55586p;
                    if (i22 == -1) {
                        i22 = this.f55584n;
                    }
                    this.f55586p = i22;
                } else {
                    i16 = -1;
                }
                if (this.f55585o != i16 && (i18 = this.f55586p) != i16) {
                    f10 = (this.f55584n * i17) / (this.f55583m * i18);
                } else {
                    f10 = -1.0f;
                }
                if (this.f55594x) {
                    cVar = new oe.c(this.f55595y, this.A, this.f55596z, h());
                }
                if (this.f55571a != null && e.f55541i0.containsKey(this.f55571a)) {
                    i16 = ((Integer) e.f55541i0.get(this.f55571a)).intValue();
                }
                if (this.f55588r == 0 && Float.compare(this.f55589s, 0.0f) == 0 && Float.compare(this.f55590t, 0.0f) == 0) {
                    if (Float.compare(this.f55591u, 0.0f) == 0) {
                        i16 = 0;
                    } else if (Float.compare(this.f55590t, 90.0f) == 0) {
                        i16 = 90;
                    } else if (Float.compare(this.f55590t, -180.0f) != 0 && Float.compare(this.f55590t, 180.0f) != 0) {
                        if (Float.compare(this.f55590t, -90.0f) == 0) {
                            i16 = 270;
                        }
                    } else {
                        i16 = 180;
                    }
                }
                bVar.n0(this.f55583m).S(this.f55584n).c0(f10).f0(i16).d0(this.f55592v).j0(this.f55593w).L(cVar);
                i15 = 2;
            } else if (!"application/x-subrip".equals(str5) && !"text/x-ssa".equals(str5) && !"text/vtt".equals(str5) && !"application/vobsub".equals(str5) && !"application/pgs".equals(str5) && !"application/dvbsubs".equals(str5)) {
                throw l0.a("Unexpected MIME type.", null);
            } else {
                i15 = 3;
            }
            if (this.f55571a != null && !e.f55541i0.containsKey(this.f55571a)) {
                bVar.W(this.f55571a);
            }
            Format G = bVar.T(i10).g0(str5).Y(i12).X(this.W).i0(i20).V(singletonList).K(str).O(this.f55582l).G();
            b0 c11 = mVar.c(this.f55573c, i15);
            this.X = c11;
            c11.b(G);
        }

        public void j() {
            c0 c0Var = this.T;
            if (c0Var != null) {
                c0Var.a(this.X, this.f55580j);
            }
        }

        public void n() {
            c0 c0Var = this.T;
            if (c0Var != null) {
                c0Var.b();
            }
        }
    }

    static {
        HashMap hashMap = new HashMap();
        hashMap.put("htc_video_rotA-000", 0);
        hashMap.put("htc_video_rotA-090", 90);
        hashMap.put("htc_video_rotA-180", 180);
        hashMap.put("htc_video_rotA-270", 270);
        f55541i0 = Collections.unmodifiableMap(hashMap);
    }

    public e() {
        this(0);
    }

    private boolean A(tc.y yVar, long j10) {
        if (this.f55568y) {
            this.A = j10;
            yVar.f49518a = this.f55569z;
            this.f55568y = false;
            return true;
        }
        if (this.f55565v) {
            long j11 = this.A;
            if (j11 != -1) {
                yVar.f49518a = j11;
                this.A = -1L;
                return true;
            }
        }
        return false;
    }

    private void B(l lVar, int i10) {
        if (this.f55550g.g() >= i10) {
            return;
        }
        if (this.f55550g.b() < i10) {
            h0 h0Var = this.f55550g;
            h0Var.c(Math.max(h0Var.b() * 2, i10));
        }
        lVar.readFully(this.f55550g.e(), this.f55550g.g(), i10 - this.f55550g.g());
        this.f55550g.T(i10);
    }

    private void C() {
        this.S = 0;
        this.T = 0;
        this.U = 0;
        this.V = false;
        this.W = false;
        this.X = false;
        this.Y = 0;
        this.Z = (byte) 0;
        this.f55543a0 = false;
        this.f55553j.Q(0);
    }

    private long D(long j10) {
        long j11 = this.f55561r;
        if (j11 != -9223372036854775807L) {
            return w0.X0(j10, j11, 1000L);
        }
        throw l0.a("Can't scale timecode prior to timecodeScale being set.", null);
    }

    private static void E(String str, long j10, byte[] bArr) {
        byte[] s10;
        int i10;
        str.getClass();
        char c10 = 65535;
        switch (str.hashCode()) {
            case 738597099:
                if (str.equals("S_TEXT/ASS")) {
                    c10 = 0;
                    break;
                }
                break;
            case 1045209816:
                if (str.equals("S_TEXT/WEBVTT")) {
                    c10 = 1;
                    break;
                }
                break;
            case 1422270023:
                if (str.equals("S_TEXT/UTF8")) {
                    c10 = 2;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                s10 = s(j10, "%01d:%02d:%02d:%02d", 10000L);
                i10 = 21;
                break;
            case 1:
                s10 = s(j10, "%02d:%02d:%02d.%03d", 1000L);
                i10 = 25;
                break;
            case 2:
                s10 = s(j10, "%02d:%02d:%02d,%03d", 1000L);
                i10 = 19;
                break;
            default:
                throw new IllegalArgumentException();
        }
        System.arraycopy(s10, 0, bArr, i10, s10.length);
    }

    private int H(l lVar, c cVar, int i10, boolean z10) {
        boolean z11;
        int i11;
        if ("S_TEXT/UTF8".equals(cVar.f55572b)) {
            I(lVar, f55536d0, i10);
            return q();
        } else if ("S_TEXT/ASS".equals(cVar.f55572b)) {
            I(lVar, f55538f0, i10);
            return q();
        } else if ("S_TEXT/WEBVTT".equals(cVar.f55572b)) {
            I(lVar, f55539g0, i10);
            return q();
        } else {
            b0 b0Var = cVar.X;
            boolean z12 = true;
            if (!this.V) {
                if (cVar.f55578h) {
                    this.O &= -1073741825;
                    boolean z13 = this.W;
                    int i12 = IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                    if (!z13) {
                        lVar.readFully(this.f55550g.e(), 0, 1);
                        this.S++;
                        if ((this.f55550g.e()[0] & ByteCompanionObject.MIN_VALUE) != 128) {
                            this.Z = this.f55550g.e()[0];
                            this.W = true;
                        } else {
                            throw l0.a("Extension bit is set in signal byte", null);
                        }
                    }
                    byte b10 = this.Z;
                    if ((b10 & 1) == 1) {
                        if ((b10 & 2) == 2) {
                            z11 = true;
                        } else {
                            z11 = false;
                        }
                        this.O |= 1073741824;
                        if (!this.f55543a0) {
                            lVar.readFully(this.f55555l.e(), 0, 8);
                            this.S += 8;
                            this.f55543a0 = true;
                            byte[] e10 = this.f55550g.e();
                            if (!z11) {
                                i12 = 0;
                            }
                            e10[0] = (byte) (i12 | 8);
                            this.f55550g.U(0);
                            b0Var.e(this.f55550g, 1, 1);
                            this.T++;
                            this.f55555l.U(0);
                            b0Var.e(this.f55555l, 8, 1);
                            this.T += 8;
                        }
                        if (z11) {
                            if (!this.X) {
                                lVar.readFully(this.f55550g.e(), 0, 1);
                                this.S++;
                                this.f55550g.U(0);
                                this.Y = this.f55550g.H();
                                this.X = true;
                            }
                            int i13 = this.Y * 4;
                            this.f55550g.Q(i13);
                            lVar.readFully(this.f55550g.e(), 0, i13);
                            this.S += i13;
                            short s10 = (short) ((this.Y / 2) + 1);
                            int i14 = (s10 * 6) + 2;
                            ByteBuffer byteBuffer = this.f55558o;
                            if (byteBuffer == null || byteBuffer.capacity() < i14) {
                                this.f55558o = ByteBuffer.allocate(i14);
                            }
                            this.f55558o.position(0);
                            this.f55558o.putShort(s10);
                            int i15 = 0;
                            int i16 = 0;
                            while (true) {
                                i11 = this.Y;
                                if (i15 >= i11) {
                                    break;
                                }
                                int L = this.f55550g.L();
                                if (i15 % 2 == 0) {
                                    this.f55558o.putShort((short) (L - i16));
                                } else {
                                    this.f55558o.putInt(L - i16);
                                }
                                i15++;
                                i16 = L;
                            }
                            int i17 = (i10 - this.S) - i16;
                            if (i11 % 2 == 1) {
                                this.f55558o.putInt(i17);
                            } else {
                                this.f55558o.putShort((short) i17);
                                this.f55558o.putInt(0);
                            }
                            this.f55556m.S(this.f55558o.array(), i14);
                            b0Var.e(this.f55556m, i14, 1);
                            this.T += i14;
                        }
                    }
                } else {
                    byte[] bArr = cVar.f55579i;
                    if (bArr != null) {
                        this.f55553j.S(bArr, bArr.length);
                    }
                }
                if (cVar.o(z10)) {
                    this.O |= 268435456;
                    this.f55557n.Q(0);
                    int g10 = (this.f55553j.g() + i10) - this.S;
                    this.f55550g.Q(4);
                    this.f55550g.e()[0] = (byte) ((g10 >> 24) & SetSpanOperation.SPAN_MAX_PRIORITY);
                    this.f55550g.e()[1] = (byte) ((g10 >> 16) & SetSpanOperation.SPAN_MAX_PRIORITY);
                    this.f55550g.e()[2] = (byte) ((g10 >> 8) & SetSpanOperation.SPAN_MAX_PRIORITY);
                    this.f55550g.e()[3] = (byte) (g10 & SetSpanOperation.SPAN_MAX_PRIORITY);
                    b0Var.e(this.f55550g, 4, 2);
                    this.T += 4;
                }
                this.V = true;
            }
            int g11 = i10 + this.f55553j.g();
            if (!"V_MPEG4/ISO/AVC".equals(cVar.f55572b) && !"V_MPEGH/ISO/HEVC".equals(cVar.f55572b)) {
                if (cVar.T != null) {
                    if (this.f55553j.g() != 0) {
                        z12 = false;
                    }
                    ne.a.g(z12);
                    cVar.T.d(lVar);
                }
                while (true) {
                    int i18 = this.S;
                    if (i18 >= g11) {
                        break;
                    }
                    int J = J(lVar, b0Var, g11 - i18);
                    this.S += J;
                    this.T += J;
                }
            } else {
                byte[] e11 = this.f55549f.e();
                e11[0] = 0;
                e11[1] = 0;
                e11[2] = 0;
                int i19 = cVar.Y;
                int i20 = 4 - i19;
                while (this.S < g11) {
                    int i21 = this.U;
                    if (i21 == 0) {
                        K(lVar, e11, i20, i19);
                        this.S += i19;
                        this.f55549f.U(0);
                        this.U = this.f55549f.L();
                        this.f55548e.U(0);
                        b0Var.f(this.f55548e, 4);
                        this.T += 4;
                    } else {
                        int J2 = J(lVar, b0Var, i21);
                        this.S += J2;
                        this.T += J2;
                        this.U -= J2;
                    }
                }
            }
            if ("A_VORBIS".equals(cVar.f55572b)) {
                this.f55551h.U(0);
                b0Var.f(this.f55551h, 4);
                this.T += 4;
            }
            return q();
        }
    }

    private void I(l lVar, byte[] bArr, int i10) {
        int length = bArr.length + i10;
        if (this.f55554k.b() < length) {
            this.f55554k.R(Arrays.copyOf(bArr, length + i10));
        } else {
            System.arraycopy(bArr, 0, this.f55554k.e(), 0, bArr.length);
        }
        lVar.readFully(this.f55554k.e(), bArr.length, i10);
        this.f55554k.U(0);
        this.f55554k.T(length);
    }

    private int J(l lVar, b0 b0Var, int i10) {
        int a10 = this.f55553j.a();
        if (a10 > 0) {
            int min = Math.min(i10, a10);
            b0Var.f(this.f55553j, min);
            return min;
        }
        return b0Var.a(lVar, i10, false);
    }

    private void K(l lVar, byte[] bArr, int i10, int i11) {
        int min = Math.min(i11, this.f55553j.a());
        lVar.readFully(bArr, i10 + min, i11 - min);
        if (min > 0) {
            this.f55553j.l(bArr, i10, min);
        }
    }

    public static /* synthetic */ k[] b() {
        return new k[]{new e()};
    }

    private void i(int i10) {
        if (this.C != null && this.D != null) {
            return;
        }
        throw l0.a("Element " + i10 + " must be in a Cues", null);
    }

    private void j(int i10) {
        if (this.f55564u != null) {
            return;
        }
        throw l0.a("Element " + i10 + " must be in a TrackEntry", null);
    }

    private void k() {
        ne.a.i(this.f55545b0);
    }

    private tc.z m(z zVar, z zVar2) {
        int i10;
        if (this.f55560q != -1 && this.f55563t != -9223372036854775807L && zVar != null && zVar.c() != 0 && zVar2 != null && zVar2.c() == zVar.c()) {
            int c10 = zVar.c();
            int[] iArr = new int[c10];
            long[] jArr = new long[c10];
            long[] jArr2 = new long[c10];
            long[] jArr3 = new long[c10];
            int i11 = 0;
            for (int i12 = 0; i12 < c10; i12++) {
                jArr3[i12] = zVar.b(i12);
                jArr[i12] = this.f55560q + zVar2.b(i12);
            }
            while (true) {
                i10 = c10 - 1;
                if (i11 >= i10) {
                    break;
                }
                int i13 = i11 + 1;
                iArr[i11] = (int) (jArr[i13] - jArr[i11]);
                jArr2[i11] = jArr3[i13] - jArr3[i11];
                i11 = i13;
            }
            iArr[i10] = (int) ((this.f55560q + this.f55559p) - jArr[i10]);
            long j10 = this.f55563t - jArr3[i10];
            jArr2[i10] = j10;
            if (j10 <= 0) {
                y.i("MatroskaExtractor", "Discarding last cue point with unexpected duration: " + j10);
                iArr = Arrays.copyOf(iArr, i10);
                jArr = Arrays.copyOf(jArr, i10);
                jArr2 = Arrays.copyOf(jArr2, i10);
                jArr3 = Arrays.copyOf(jArr3, i10);
            }
            return new tc.c(iArr, jArr, jArr2, jArr3);
        }
        return new z.b(this.f55563t);
    }

    /* JADX WARN: Removed duplicated region for block: B:28:0x009e  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void n(zc.e.c r18, long r19, int r21, int r22, int r23) {
        /*
            r17 = this;
            r0 = r17
            r1 = r18
            tc.c0 r2 = r1.T
            r9 = 1
            if (r2 == 0) goto L1c
            r3 = r2
            tc.b0 r2 = r1.X
            tc.b0$a r8 = r1.f55580j
            r5 = r21
            r6 = r22
            r7 = r23
            r1 = r3
            r3 = r19
            r1.c(r2, r3, r5, r6, r7, r8)
            goto Lc8
        L1c:
            java.lang.String r2 = "S_TEXT/UTF8"
            java.lang.String r3 = r1.f55572b
            boolean r2 = r2.equals(r3)
            if (r2 != 0) goto L3a
            java.lang.String r2 = "S_TEXT/ASS"
            java.lang.String r3 = r1.f55572b
            boolean r2 = r2.equals(r3)
            if (r2 != 0) goto L3a
            java.lang.String r2 = "S_TEXT/WEBVTT"
            java.lang.String r3 = r1.f55572b
            boolean r2 = r2.equals(r3)
            if (r2 == 0) goto L56
        L3a:
            int r2 = r0.K
            java.lang.String r3 = "MatroskaExtractor"
            if (r2 <= r9) goto L46
            java.lang.String r2 = "Skipping subtitle sample in laced block."
            ne.y.i(r3, r2)
            goto L56
        L46:
            long r4 = r0.I
            r6 = -9223372036854775807(0x8000000000000001, double:-4.9E-324)
            int r2 = (r4 > r6 ? 1 : (r4 == r6 ? 0 : -1))
            if (r2 != 0) goto L59
            java.lang.String r2 = "Skipping subtitle sample with no duration."
            ne.y.i(r3, r2)
        L56:
            r2 = r22
            goto L98
        L59:
            java.lang.String r2 = r1.f55572b
            ne.h0 r3 = r0.f55554k
            byte[] r3 = r3.e()
            E(r2, r4, r3)
            ne.h0 r2 = r0.f55554k
            int r2 = r2.f()
        L6a:
            ne.h0 r3 = r0.f55554k
            int r3 = r3.g()
            if (r2 >= r3) goto L85
            ne.h0 r3 = r0.f55554k
            byte[] r3 = r3.e()
            r3 = r3[r2]
            if (r3 != 0) goto L82
            ne.h0 r3 = r0.f55554k
            r3.T(r2)
            goto L85
        L82:
            int r2 = r2 + 1
            goto L6a
        L85:
            tc.b0 r2 = r1.X
            ne.h0 r3 = r0.f55554k
            int r4 = r3.g()
            r2.f(r3, r4)
            ne.h0 r2 = r0.f55554k
            int r2 = r2.g()
            int r2 = r22 + r2
        L98:
            r3 = 268435456(0x10000000, float:2.5243549E-29)
            r3 = r21 & r3
            if (r3 == 0) goto Lb8
            int r3 = r0.K
            if (r3 <= r9) goto La9
            ne.h0 r3 = r0.f55557n
            r4 = 0
            r3.Q(r4)
            goto Lb8
        La9:
            ne.h0 r3 = r0.f55557n
            int r3 = r3.g()
            tc.b0 r4 = r1.X
            ne.h0 r5 = r0.f55557n
            r6 = 2
            r4.e(r5, r3, r6)
            int r2 = r2 + r3
        Lb8:
            r14 = r2
            tc.b0 r10 = r1.X
            tc.b0$a r1 = r1.f55580j
            r11 = r19
            r13 = r21
            r15 = r23
            r16 = r1
            r10.d(r11, r13, r14, r15, r16)
        Lc8:
            r0.F = r9
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: zc.e.n(zc.e$c, long, int, int, int):void");
    }

    private static int[] p(int[] iArr, int i10) {
        if (iArr == null) {
            return new int[i10];
        }
        if (iArr.length >= i10) {
            return iArr;
        }
        return new int[Math.max(iArr.length * 2, i10)];
    }

    private int q() {
        int i10 = this.T;
        C();
        return i10;
    }

    private static byte[] s(long j10, String str, long j11) {
        boolean z10;
        if (j10 != -9223372036854775807L) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.a(z10);
        int i10 = (int) (j10 / 3600000000L);
        long j12 = j10 - (i10 * 3600000000L);
        int i11 = (int) (j12 / 60000000);
        long j13 = j12 - (i11 * 60000000);
        int i12 = (int) (j13 / 1000000);
        return w0.s0(String.format(Locale.US, str, Integer.valueOf(i10), Integer.valueOf(i11), Integer.valueOf(i12), Integer.valueOf((int) ((j13 - (i12 * 1000000)) / j11))));
    }

    private static boolean y(String str) {
        str.getClass();
        char c10 = 65535;
        switch (str.hashCode()) {
            case -2095576542:
                if (str.equals("V_MPEG4/ISO/AP")) {
                    c10 = 0;
                    break;
                }
                break;
            case -2095575984:
                if (str.equals("V_MPEG4/ISO/SP")) {
                    c10 = 1;
                    break;
                }
                break;
            case -1985379776:
                if (str.equals("A_MS/ACM")) {
                    c10 = 2;
                    break;
                }
                break;
            case -1784763192:
                if (str.equals("A_TRUEHD")) {
                    c10 = 3;
                    break;
                }
                break;
            case -1730367663:
                if (str.equals("A_VORBIS")) {
                    c10 = 4;
                    break;
                }
                break;
            case -1482641358:
                if (str.equals("A_MPEG/L2")) {
                    c10 = 5;
                    break;
                }
                break;
            case -1482641357:
                if (str.equals("A_MPEG/L3")) {
                    c10 = 6;
                    break;
                }
                break;
            case -1373388978:
                if (str.equals("V_MS/VFW/FOURCC")) {
                    c10 = 7;
                    break;
                }
                break;
            case -933872740:
                if (str.equals("S_DVBSUB")) {
                    c10 = '\b';
                    break;
                }
                break;
            case -538363189:
                if (str.equals("V_MPEG4/ISO/ASP")) {
                    c10 = '\t';
                    break;
                }
                break;
            case -538363109:
                if (str.equals("V_MPEG4/ISO/AVC")) {
                    c10 = '\n';
                    break;
                }
                break;
            case -425012669:
                if (str.equals("S_VOBSUB")) {
                    c10 = 11;
                    break;
                }
                break;
            case -356037306:
                if (str.equals("A_DTS/LOSSLESS")) {
                    c10 = '\f';
                    break;
                }
                break;
            case 62923557:
                if (str.equals("A_AAC")) {
                    c10 = '\r';
                    break;
                }
                break;
            case 62923603:
                if (str.equals("A_AC3")) {
                    c10 = 14;
                    break;
                }
                break;
            case 62927045:
                if (str.equals("A_DTS")) {
                    c10 = 15;
                    break;
                }
                break;
            case 82318131:
                if (str.equals("V_AV1")) {
                    c10 = 16;
                    break;
                }
                break;
            case 82338133:
                if (str.equals("V_VP8")) {
                    c10 = 17;
                    break;
                }
                break;
            case 82338134:
                if (str.equals("V_VP9")) {
                    c10 = 18;
                    break;
                }
                break;
            case 99146302:
                if (str.equals("S_HDMV/PGS")) {
                    c10 = 19;
                    break;
                }
                break;
            case 444813526:
                if (str.equals("V_THEORA")) {
                    c10 = 20;
                    break;
                }
                break;
            case 542569478:
                if (str.equals("A_DTS/EXPRESS")) {
                    c10 = 21;
                    break;
                }
                break;
            case 635596514:
                if (str.equals("A_PCM/FLOAT/IEEE")) {
                    c10 = 22;
                    break;
                }
                break;
            case 725948237:
                if (str.equals("A_PCM/INT/BIG")) {
                    c10 = 23;
                    break;
                }
                break;
            case 725957860:
                if (str.equals("A_PCM/INT/LIT")) {
                    c10 = 24;
                    break;
                }
                break;
            case 738597099:
                if (str.equals("S_TEXT/ASS")) {
                    c10 = 25;
                    break;
                }
                break;
            case 855502857:
                if (str.equals("V_MPEGH/ISO/HEVC")) {
                    c10 = 26;
                    break;
                }
                break;
            case 1045209816:
                if (str.equals("S_TEXT/WEBVTT")) {
                    c10 = 27;
                    break;
                }
                break;
            case 1422270023:
                if (str.equals("S_TEXT/UTF8")) {
                    c10 = 28;
                    break;
                }
                break;
            case 1809237540:
                if (str.equals("V_MPEG2")) {
                    c10 = 29;
                    break;
                }
                break;
            case 1950749482:
                if (str.equals("A_EAC3")) {
                    c10 = 30;
                    break;
                }
                break;
            case 1950789798:
                if (str.equals("A_FLAC")) {
                    c10 = 31;
                    break;
                }
                break;
            case 1951062397:
                if (str.equals("A_OPUS")) {
                    c10 = ' ';
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case '\b':
            case '\t':
            case '\n':
            case 11:
            case '\f':
            case '\r':
            case 14:
            case 15:
            case 16:
            case 17:
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
            case 20:
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
            case 23:
            case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
            case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
            case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
            case 27:
            case 28:
            case 29:
            case 30:
            case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
            case ' ':
                return true;
            default:
                return false;
        }
    }

    protected void F(int i10, long j10, long j11) {
        k();
        if (i10 != 160) {
            if (i10 != 174) {
                if (i10 != 187) {
                    if (i10 != 19899) {
                        if (i10 != 20533) {
                            if (i10 != 21968) {
                                if (i10 != 408125543) {
                                    if (i10 != 475249515) {
                                        if (i10 == 524531317 && !this.f55565v) {
                                            if (this.f55547d && this.f55569z != -1) {
                                                this.f55568y = true;
                                                return;
                                            }
                                            this.f55545b0.q(new z.b(this.f55563t));
                                            this.f55565v = true;
                                            return;
                                        }
                                        return;
                                    }
                                    this.C = new ne.z();
                                    this.D = new ne.z();
                                    return;
                                }
                                long j12 = this.f55560q;
                                if (j12 != -1 && j12 != j10) {
                                    throw l0.a("Multiple Segment elements not supported", null);
                                }
                                this.f55560q = j10;
                                this.f55559p = j11;
                                return;
                            }
                            t(i10).f55594x = true;
                            return;
                        }
                        t(i10).f55578h = true;
                        return;
                    }
                    this.f55566w = -1;
                    this.f55567x = -1L;
                    return;
                }
                this.E = false;
                return;
            }
            this.f55564u = new c();
            return;
        }
        this.Q = false;
        this.R = 0L;
    }

    protected void G(int i10, String str) {
        if (i10 != 134) {
            if (i10 != 17026) {
                if (i10 != 21358) {
                    if (i10 == 2274716) {
                        t(i10).W = str;
                        return;
                    }
                    return;
                }
                t(i10).f55571a = str;
                return;
            } else if (!"webm".equals(str) && !"matroska".equals(str)) {
                throw l0.a("DocType " + str + " not supported", null);
            } else {
                return;
            }
        }
        t(i10).f55572b = str;
    }

    @Override // tc.k
    public void a(long j10, long j11) {
        this.B = -9223372036854775807L;
        this.G = 0;
        this.f55542a.reset();
        this.f55544b.e();
        C();
        for (int i10 = 0; i10 < this.f55546c.size(); i10++) {
            ((c) this.f55546c.valueAt(i10)).n();
        }
    }

    @Override // tc.k
    public final void c(m mVar) {
        this.f55545b0 = mVar;
    }

    @Override // tc.k
    public final int d(l lVar, tc.y yVar) {
        this.F = false;
        boolean z10 = true;
        while (z10 && !this.F) {
            z10 = this.f55542a.a(lVar);
            if (z10 && A(yVar, lVar.getPosition())) {
                return 1;
            }
        }
        if (z10) {
            return 0;
        }
        for (int i10 = 0; i10 < this.f55546c.size(); i10++) {
            c cVar = (c) this.f55546c.valueAt(i10);
            cVar.f();
            cVar.j();
        }
        return -1;
    }

    @Override // tc.k
    public final boolean f(l lVar) {
        return new f().b(lVar);
    }

    /* JADX WARN: Code restructure failed: missing block: B:94:0x0244, code lost:
        throw lc.l0.a("EBML lacing sample size out of range.", null);
     */
    /* JADX WARN: Multi-variable type inference failed */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    protected void l(int r24, int r25, tc.l r26) {
        /*
            Method dump skipped, instructions count: 773
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: zc.e.l(int, int, tc.l):void");
    }

    protected void o(int i10) {
        k();
        if (i10 != 160) {
            if (i10 != 174) {
                if (i10 != 19899) {
                    if (i10 != 25152) {
                        if (i10 != 28032) {
                            if (i10 != 357149030) {
                                if (i10 != 374648427) {
                                    if (i10 == 475249515) {
                                        if (!this.f55565v) {
                                            this.f55545b0.q(m(this.C, this.D));
                                            this.f55565v = true;
                                        }
                                        this.C = null;
                                        this.D = null;
                                        return;
                                    }
                                    return;
                                } else if (this.f55546c.size() != 0) {
                                    this.f55545b0.s();
                                    return;
                                } else {
                                    throw l0.a("No valid tracks were found", null);
                                }
                            }
                            if (this.f55561r == -9223372036854775807L) {
                                this.f55561r = 1000000L;
                            }
                            long j10 = this.f55562s;
                            if (j10 != -9223372036854775807L) {
                                this.f55563t = D(j10);
                                return;
                            }
                            return;
                        }
                        j(i10);
                        c cVar = this.f55564u;
                        if (cVar.f55578h && cVar.f55579i != null) {
                            throw l0.a("Combining encryption and compression is not supported", null);
                        }
                        return;
                    }
                    j(i10);
                    c cVar2 = this.f55564u;
                    if (cVar2.f55578h) {
                        if (cVar2.f55580j != null) {
                            cVar2.f55582l = new rc.m(new m.b(lc.d.f37069a, "video/webm", this.f55564u.f55580j.f49418b));
                            return;
                        }
                        throw l0.a("Encrypted Track found but ContentEncKeyID was not found", null);
                    }
                    return;
                }
                int i11 = this.f55566w;
                if (i11 != -1) {
                    long j11 = this.f55567x;
                    if (j11 != -1) {
                        if (i11 == 475249515) {
                            this.f55569z = j11;
                            return;
                        }
                        return;
                    }
                }
                throw l0.a("Mandatory element SeekID or SeekPosition not found", null);
            }
            c cVar3 = (c) ne.a.i(this.f55564u);
            String str = cVar3.f55572b;
            if (str != null) {
                if (y(str)) {
                    cVar3.i(this.f55545b0, cVar3.f55573c);
                    this.f55546c.put(cVar3.f55573c, cVar3);
                }
                this.f55564u = null;
                return;
            }
            throw l0.a("CodecId is missing in TrackEntry element", null);
        } else if (this.G == 2) {
            c cVar4 = (c) this.f55546c.get(this.M);
            cVar4.f();
            if (this.R > 0 && "A_OPUS".equals(cVar4.f55572b)) {
                this.f55557n.R(ByteBuffer.allocate(8).order(ByteOrder.LITTLE_ENDIAN).putLong(this.R).array());
            }
            int i12 = 0;
            for (int i13 = 0; i13 < this.K; i13++) {
                i12 += this.L[i13];
            }
            int i14 = 0;
            while (i14 < this.K) {
                long j12 = this.H + ((cVar4.f55575e * i14) / 1000);
                int i15 = this.O;
                if (i14 == 0 && !this.Q) {
                    i15 |= 1;
                }
                int i16 = this.L[i14];
                int i17 = i12 - i16;
                n(cVar4, j12, i15, i16, i17);
                i14++;
                i12 = i17;
            }
            this.G = 0;
        }
    }

    protected void r(int i10, double d10) {
        if (i10 != 181) {
            if (i10 != 17545) {
                switch (i10) {
                    case 21969:
                        t(i10).D = (float) d10;
                        return;
                    case 21970:
                        t(i10).E = (float) d10;
                        return;
                    case 21971:
                        t(i10).F = (float) d10;
                        return;
                    case 21972:
                        t(i10).G = (float) d10;
                        return;
                    case 21973:
                        t(i10).H = (float) d10;
                        return;
                    case 21974:
                        t(i10).I = (float) d10;
                        return;
                    case 21975:
                        t(i10).J = (float) d10;
                        return;
                    case 21976:
                        t(i10).K = (float) d10;
                        return;
                    case 21977:
                        t(i10).L = (float) d10;
                        return;
                    case 21978:
                        t(i10).M = (float) d10;
                        return;
                    default:
                        switch (i10) {
                            case 30323:
                                t(i10).f55589s = (float) d10;
                                return;
                            case 30324:
                                t(i10).f55590t = (float) d10;
                                return;
                            case 30325:
                                t(i10).f55591u = (float) d10;
                                return;
                            default:
                                return;
                        }
                }
            }
            this.f55562s = (long) d10;
            return;
        }
        t(i10).Q = (int) d10;
    }

    protected c t(int i10) {
        j(i10);
        return this.f55564u;
    }

    protected int u(int i10) {
        switch (i10) {
            case 131:
            case 136:
            case 155:
            case 159:
            case 176:
            case 179:
            case 186:
            case 215:
            case 231:
            case 238:
            case 241:
            case 251:
            case 16871:
            case 16980:
            case 17029:
            case 17143:
            case 18401:
            case 18408:
            case 20529:
            case 20530:
            case 21420:
            case 21432:
            case 21680:
            case 21682:
            case 21690:
            case 21930:
            case 21945:
            case 21946:
            case 21947:
            case 21948:
            case 21949:
            case 21998:
            case 22186:
            case 22203:
            case 25188:
            case 30114:
            case 30321:
            case 2352003:
            case 2807729:
                return 2;
            case 134:
            case 17026:
            case 21358:
            case 2274716:
                return 3;
            case 160:
            case 166:
            case 174:
            case 183:
            case 187:
            case 224:
            case 225:
            case 16868:
            case 18407:
            case 19899:
            case 20532:
            case 20533:
            case 21936:
            case 21968:
            case 25152:
            case 28032:
            case 30113:
            case 30320:
            case 290298740:
            case 357149030:
            case 374648427:
            case 408125543:
            case 440786851:
            case 475249515:
            case 524531317:
                return 1;
            case 161:
            case 163:
            case 165:
            case 16877:
            case 16981:
            case 18402:
            case 21419:
            case 25506:
            case 30322:
                return 4;
            case 181:
            case 17545:
            case 21969:
            case 21970:
            case 21971:
            case 21972:
            case 21973:
            case 21974:
            case 21975:
            case 21976:
            case 21977:
            case 21978:
            case 30323:
            case 30324:
            case 30325:
                return 5;
            default:
                return 0;
        }
    }

    protected void v(c cVar, l lVar, int i10) {
        if (cVar.f55577g != 1685485123 && cVar.f55577g != 1685480259) {
            lVar.k(i10);
            return;
        }
        byte[] bArr = new byte[i10];
        cVar.N = bArr;
        lVar.readFully(bArr, 0, i10);
    }

    protected void w(c cVar, int i10, l lVar, int i11) {
        if (i10 == 4 && "V_VP9".equals(cVar.f55572b)) {
            this.f55557n.Q(i11);
            lVar.readFully(this.f55557n.e(), 0, i11);
            return;
        }
        lVar.k(i11);
    }

    protected void x(int i10, long j10) {
        if (i10 != 20529) {
            if (i10 != 20530) {
                boolean z10 = false;
                switch (i10) {
                    case 131:
                        t(i10).f55574d = (int) j10;
                        return;
                    case 136:
                        c t10 = t(i10);
                        if (j10 == 1) {
                            z10 = true;
                        }
                        t10.V = z10;
                        return;
                    case 155:
                        this.I = D(j10);
                        return;
                    case 159:
                        t(i10).O = (int) j10;
                        return;
                    case 176:
                        t(i10).f55583m = (int) j10;
                        return;
                    case 179:
                        i(i10);
                        this.C.a(D(j10));
                        return;
                    case 186:
                        t(i10).f55584n = (int) j10;
                        return;
                    case 215:
                        t(i10).f55573c = (int) j10;
                        return;
                    case 231:
                        this.B = D(j10);
                        return;
                    case 238:
                        this.P = (int) j10;
                        return;
                    case 241:
                        if (!this.E) {
                            i(i10);
                            this.D.a(j10);
                            this.E = true;
                            return;
                        }
                        return;
                    case 251:
                        this.Q = true;
                        return;
                    case 16871:
                        t(i10).f55577g = (int) j10;
                        return;
                    case 16980:
                        if (j10 != 3) {
                            throw l0.a("ContentCompAlgo " + j10 + " not supported", null);
                        }
                        return;
                    case 17029:
                        if (j10 < 1 || j10 > 2) {
                            throw l0.a("DocTypeReadVersion " + j10 + " not supported", null);
                        }
                        return;
                    case 17143:
                        if (j10 != 1) {
                            throw l0.a("EBMLReadVersion " + j10 + " not supported", null);
                        }
                        return;
                    case 18401:
                        if (j10 != 5) {
                            throw l0.a("ContentEncAlgo " + j10 + " not supported", null);
                        }
                        return;
                    case 18408:
                        if (j10 != 1) {
                            throw l0.a("AESSettingsCipherMode " + j10 + " not supported", null);
                        }
                        return;
                    case 21420:
                        this.f55567x = j10 + this.f55560q;
                        return;
                    case 21432:
                        int i11 = (int) j10;
                        j(i10);
                        if (i11 != 0) {
                            if (i11 != 1) {
                                if (i11 != 3) {
                                    if (i11 == 15) {
                                        this.f55564u.f55593w = 3;
                                        return;
                                    }
                                    return;
                                }
                                this.f55564u.f55593w = 1;
                                return;
                            }
                            this.f55564u.f55593w = 2;
                            return;
                        }
                        this.f55564u.f55593w = 0;
                        return;
                    case 21680:
                        t(i10).f55585o = (int) j10;
                        return;
                    case 21682:
                        t(i10).f55587q = (int) j10;
                        return;
                    case 21690:
                        t(i10).f55586p = (int) j10;
                        return;
                    case 21930:
                        c t11 = t(i10);
                        if (j10 == 1) {
                            z10 = true;
                        }
                        t11.U = z10;
                        return;
                    case 21998:
                        t(i10).f55576f = (int) j10;
                        return;
                    case 22186:
                        t(i10).R = j10;
                        return;
                    case 22203:
                        t(i10).S = j10;
                        return;
                    case 25188:
                        t(i10).P = (int) j10;
                        return;
                    case 30114:
                        this.R = j10;
                        return;
                    case 30321:
                        j(i10);
                        int i12 = (int) j10;
                        if (i12 != 0) {
                            if (i12 != 1) {
                                if (i12 != 2) {
                                    if (i12 == 3) {
                                        this.f55564u.f55588r = 3;
                                        return;
                                    }
                                    return;
                                }
                                this.f55564u.f55588r = 2;
                                return;
                            }
                            this.f55564u.f55588r = 1;
                            return;
                        }
                        this.f55564u.f55588r = 0;
                        return;
                    case 2352003:
                        t(i10).f55575e = (int) j10;
                        return;
                    case 2807729:
                        this.f55561r = j10;
                        return;
                    default:
                        switch (i10) {
                            case 21945:
                                j(i10);
                                int i13 = (int) j10;
                                if (i13 != 1) {
                                    if (i13 == 2) {
                                        this.f55564u.A = 1;
                                        return;
                                    }
                                    return;
                                }
                                this.f55564u.A = 2;
                                return;
                            case 21946:
                                j(i10);
                                int i14 = oe.c.i((int) j10);
                                if (i14 != -1) {
                                    this.f55564u.f55596z = i14;
                                    return;
                                }
                                return;
                            case 21947:
                                j(i10);
                                this.f55564u.f55594x = true;
                                int h10 = oe.c.h((int) j10);
                                if (h10 != -1) {
                                    this.f55564u.f55595y = h10;
                                    return;
                                }
                                return;
                            case 21948:
                                t(i10).B = (int) j10;
                                return;
                            case 21949:
                                t(i10).C = (int) j10;
                                return;
                            default:
                                return;
                        }
                }
            } else if (j10 != 1) {
                throw l0.a("ContentEncodingScope " + j10 + " not supported", null);
            }
        } else if (j10 == 0) {
        } else {
            throw l0.a("ContentEncodingOrder " + j10 + " not supported", null);
        }
    }

    protected boolean z(int i10) {
        if (i10 != 357149030 && i10 != 524531317 && i10 != 475249515 && i10 != 374648427) {
            return false;
        }
        return true;
    }

    public e(int i10) {
        this(new zc.a(), i10);
    }

    e(zc.c cVar, int i10) {
        this.f55560q = -1L;
        this.f55561r = -9223372036854775807L;
        this.f55562s = -9223372036854775807L;
        this.f55563t = -9223372036854775807L;
        this.f55569z = -1L;
        this.A = -1L;
        this.B = -9223372036854775807L;
        this.f55542a = cVar;
        cVar.b(new b());
        this.f55547d = (i10 & 1) == 0;
        this.f55544b = new g();
        this.f55546c = new SparseArray();
        this.f55550g = new h0(4);
        this.f55551h = new h0(ByteBuffer.allocate(4).putInt(-1).array());
        this.f55552i = new h0(4);
        this.f55548e = new h0(d0.f40148a);
        this.f55549f = new h0(4);
        this.f55553j = new h0();
        this.f55554k = new h0();
        this.f55555l = new h0(8);
        this.f55556m = new h0();
        this.f55557n = new h0();
        this.L = new int[1];
    }

    @Override // tc.k
    public final void release() {
    }
}
