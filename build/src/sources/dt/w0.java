package dt;

import at.k;
import com.withpersona.sdk2.inquiry.network.dto.InquiryField;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.DeserializationStrategy;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.json.Json;
import kotlinx.serialization.json.JsonElement;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class w0 extends kotlinx.serialization.encoding.a implements ct.f {

    /* renamed from: a  reason: collision with root package name */
    private final Json f22471a;

    /* renamed from: b  reason: collision with root package name */
    private final e1 f22472b;

    /* renamed from: c  reason: collision with root package name */
    public final dt.a f22473c;

    /* renamed from: d  reason: collision with root package name */
    private final et.b f22474d;

    /* renamed from: e  reason: collision with root package name */
    private int f22475e;

    /* renamed from: f  reason: collision with root package name */
    private a f22476f;

    /* renamed from: g  reason: collision with root package name */
    private final ct.d f22477g;

    /* renamed from: h  reason: collision with root package name */
    private final d0 f22478h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public String f22479a;

        public a(String str) {
            this.f22479a = str;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f22480a;

        static {
            int[] iArr = new int[e1.values().length];
            try {
                iArr[e1.f22399o.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[e1.f22400p.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[e1.f22401q.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[e1.f22398i.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            f22480a = iArr;
        }
    }

    public w0(Json json, e1 mode, dt.a lexer, SerialDescriptor descriptor, a aVar) {
        d0 d0Var;
        Intrinsics.checkNotNullParameter(json, "json");
        Intrinsics.checkNotNullParameter(mode, "mode");
        Intrinsics.checkNotNullParameter(lexer, "lexer");
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        this.f22471a = json;
        this.f22472b = mode;
        this.f22473c = lexer;
        this.f22474d = json.a();
        this.f22475e = -1;
        this.f22476f = aVar;
        ct.d e10 = json.e();
        this.f22477g = e10;
        if (e10.j()) {
            d0Var = null;
        } else {
            d0Var = new d0(descriptor);
        }
        this.f22478h = d0Var;
    }

    private final void K() {
        if (this.f22473c.G() != 4) {
            return;
        }
        dt.a.x(this.f22473c, "Unexpected leading comma", 0, null, 6, null);
        throw new jr.h();
    }

    private final boolean L(SerialDescriptor serialDescriptor, int i10) {
        String H;
        boolean z10;
        Json json = this.f22471a;
        boolean i11 = serialDescriptor.i(i10);
        SerialDescriptor g10 = serialDescriptor.g(i10);
        if (i11 && !g10.b() && this.f22473c.O(true)) {
            return true;
        }
        if (!Intrinsics.areEqual(g10.getKind(), k.b.f6088a) || ((g10.b() && this.f22473c.O(false)) || (H = this.f22473c.H(this.f22477g.q())) == null)) {
            return false;
        }
        int i12 = i0.i(g10, json, H);
        if (!json.e().j() && g10.b()) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (i12 == -3 && (i11 || z10)) {
            this.f22473c.o();
            return true;
        }
        return false;
    }

    private final int M() {
        boolean N = this.f22473c.N();
        if (this.f22473c.e()) {
            int i10 = this.f22475e;
            if (i10 != -1 && !N) {
                dt.a.x(this.f22473c, "Expected end of the array or comma", 0, null, 6, null);
                throw new jr.h();
            }
            int i11 = i10 + 1;
            this.f22475e = i11;
            return i11;
        } else if (!N || this.f22471a.e().d()) {
            return -1;
        } else {
            g0.g(this.f22473c, "array");
            throw new jr.h();
        }
    }

    private final int N() {
        boolean z10;
        int i10 = this.f22475e;
        boolean z11 = false;
        if (i10 % 2 != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            if (i10 != -1) {
                z11 = this.f22473c.N();
            }
        } else {
            this.f22473c.l(':');
        }
        if (this.f22473c.e()) {
            if (z10) {
                if (this.f22475e == -1) {
                    dt.a aVar = this.f22473c;
                    int i11 = aVar.f22380a;
                    if (z11) {
                        dt.a.x(aVar, "Unexpected leading comma", i11, null, 4, null);
                        throw new jr.h();
                    }
                } else {
                    dt.a aVar2 = this.f22473c;
                    boolean z12 = z11;
                    int i12 = aVar2.f22380a;
                    if (!z12) {
                        dt.a.x(aVar2, "Expected comma after the key-value pair", i12, null, 4, null);
                        throw new jr.h();
                    }
                }
            }
            int i13 = this.f22475e + 1;
            this.f22475e = i13;
            return i13;
        } else if (!z11 || this.f22471a.e().d()) {
            return -1;
        } else {
            g0.h(this.f22473c, null, 1, null);
            throw new jr.h();
        }
    }

    private final int O(SerialDescriptor serialDescriptor) {
        int i10;
        boolean z10;
        boolean N = this.f22473c.N();
        while (true) {
            boolean z11 = true;
            if (this.f22473c.e()) {
                String P = P();
                this.f22473c.l(':');
                i10 = i0.i(serialDescriptor, this.f22471a, P);
                if (i10 != -3) {
                    if (!this.f22477g.g() || !L(serialDescriptor, i10)) {
                        break;
                    }
                    z10 = this.f22473c.N();
                    z11 = false;
                } else {
                    z10 = false;
                }
                if (z11) {
                    N = Q(P);
                } else {
                    N = z10;
                }
            } else if (N && !this.f22471a.e().d()) {
                g0.h(this.f22473c, null, 1, null);
                throw new jr.h();
            } else {
                d0 d0Var = this.f22478h;
                if (d0Var != null) {
                    return d0Var.d();
                }
                return -1;
            }
        }
        d0 d0Var2 = this.f22478h;
        if (d0Var2 != null) {
            d0Var2.c(i10);
        }
        return i10;
    }

    private final String P() {
        if (this.f22477g.q()) {
            return this.f22473c.r();
        }
        return this.f22473c.i();
    }

    private final boolean Q(String str) {
        if (!this.f22477g.k() && !S(this.f22476f, str)) {
            this.f22473c.A(str);
        } else {
            this.f22473c.J(this.f22477g.q());
        }
        return this.f22473c.N();
    }

    private final void R(SerialDescriptor serialDescriptor) {
        do {
        } while (o(serialDescriptor) != -1);
    }

    private final boolean S(a aVar, String str) {
        if (aVar == null || !Intrinsics.areEqual(aVar.f22479a, str)) {
            return false;
        }
        aVar.f22479a = null;
        return true;
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public boolean D() {
        boolean z10;
        d0 d0Var = this.f22478h;
        if (d0Var != null) {
            z10 = d0Var.b();
        } else {
            z10 = false;
        }
        if (z10 || dt.a.P(this.f22473c, false, 1, null)) {
            return false;
        }
        return true;
    }

    /* JADX WARN: Removed duplicated region for block: B:43:0x0156  */
    /* JADX WARN: Removed duplicated region for block: B:44:0x0157  */
    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object G(kotlinx.serialization.DeserializationStrategy r12) {
        /*
            Method dump skipped, instructions count: 385
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: dt.w0.G(kotlinx.serialization.DeserializationStrategy):java.lang.Object");
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public byte H() {
        long m10 = this.f22473c.m();
        byte b10 = (byte) m10;
        if (m10 == b10) {
            return b10;
        }
        dt.a aVar = this.f22473c;
        dt.a.x(aVar, "Failed to parse byte for input '" + m10 + '\'', 0, null, 6, null);
        throw new jr.h();
    }

    @Override // kotlinx.serialization.encoding.Decoder, kotlinx.serialization.encoding.c
    public et.b a() {
        return this.f22474d;
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public kotlinx.serialization.encoding.c b(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        e1 b10 = f1.b(this.f22471a, descriptor);
        this.f22473c.f22381b.c(descriptor);
        this.f22473c.l(b10.f22404d);
        K();
        int i10 = b.f22480a[b10.ordinal()];
        if (i10 != 1 && i10 != 2 && i10 != 3) {
            if (this.f22472b == b10 && this.f22471a.e().j()) {
                return this;
            }
            return new w0(this.f22471a, b10, this.f22473c, descriptor, this.f22476f);
        }
        return new w0(this.f22471a, b10, this.f22473c, descriptor, this.f22476f);
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.c
    public void c(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        if (this.f22471a.e().k() && descriptor.d() == 0) {
            R(descriptor);
        }
        if (this.f22473c.N() && !this.f22471a.e().d()) {
            g0.g(this.f22473c, "");
            throw new jr.h();
        }
        this.f22473c.l(this.f22472b.f22405e);
        this.f22473c.f22381b.b();
    }

    @Override // ct.f
    public final Json d() {
        return this.f22471a;
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public int e(SerialDescriptor enumDescriptor) {
        Intrinsics.checkNotNullParameter(enumDescriptor, "enumDescriptor");
        Json json = this.f22471a;
        String z10 = z();
        return i0.j(enumDescriptor, json, z10, " at path " + this.f22473c.f22381b.a());
    }

    @Override // ct.f
    public JsonElement g() {
        return new q0(this.f22471a.e(), this.f22473c).e();
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public int h() {
        long m10 = this.f22473c.m();
        int i10 = (int) m10;
        if (m10 == i10) {
            return i10;
        }
        dt.a aVar = this.f22473c;
        dt.a.x(aVar, "Failed to parse int for input '" + m10 + '\'', 0, null, 6, null);
        throw new jr.h();
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public Void j() {
        return null;
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public long l() {
        return this.f22473c.m();
    }

    @Override // kotlinx.serialization.encoding.c
    public int o(SerialDescriptor descriptor) {
        int N;
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        int i10 = b.f22480a[this.f22472b.ordinal()];
        if (i10 != 2) {
            if (i10 != 4) {
                N = M();
            } else {
                N = O(descriptor);
            }
        } else {
            N = N();
        }
        if (this.f22472b != e1.f22400p) {
            this.f22473c.f22381b.g(N);
        }
        return N;
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public Decoder q(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        if (y0.b(descriptor)) {
            return new b0(this.f22473c, this.f22471a);
        }
        return super.q(descriptor);
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public short s() {
        long m10 = this.f22473c.m();
        short s10 = (short) m10;
        if (m10 == s10) {
            return s10;
        }
        dt.a aVar = this.f22473c;
        dt.a.x(aVar, "Failed to parse short for input '" + m10 + '\'', 0, null, 6, null);
        throw new jr.h();
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public float t() {
        dt.a aVar = this.f22473c;
        String q10 = aVar.q();
        try {
            float parseFloat = Float.parseFloat(q10);
            if (!this.f22471a.e().b()) {
                if (!Float.isInfinite(parseFloat) && !Float.isNaN(parseFloat)) {
                    return parseFloat;
                }
                g0.k(this.f22473c, Float.valueOf(parseFloat));
                throw new jr.h();
            }
            return parseFloat;
        } catch (IllegalArgumentException unused) {
            dt.a.x(aVar, "Failed to parse type '" + InquiryField.FloatField.TYPE + "' for input '" + q10 + '\'', 0, null, 6, null);
            throw new jr.h();
        }
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public double v() {
        dt.a aVar = this.f22473c;
        String q10 = aVar.q();
        try {
            double parseDouble = Double.parseDouble(q10);
            if (!this.f22471a.e().b()) {
                if (!Double.isInfinite(parseDouble) && !Double.isNaN(parseDouble)) {
                    return parseDouble;
                }
                g0.k(this.f22473c, Double.valueOf(parseDouble));
                throw new jr.h();
            }
            return parseDouble;
        } catch (IllegalArgumentException unused) {
            dt.a.x(aVar, "Failed to parse type 'double' for input '" + q10 + '\'', 0, null, 6, null);
            throw new jr.h();
        }
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public boolean w() {
        return this.f22473c.g();
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public char x() {
        String q10 = this.f22473c.q();
        if (q10.length() == 1) {
            return q10.charAt(0);
        }
        dt.a aVar = this.f22473c;
        dt.a.x(aVar, "Expected single char, but got '" + q10 + '\'', 0, null, 6, null);
        throw new jr.h();
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.c
    public Object y(SerialDescriptor descriptor, int i10, DeserializationStrategy deserializer, Object obj) {
        boolean z10;
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        Intrinsics.checkNotNullParameter(deserializer, "deserializer");
        if (this.f22472b == e1.f22400p && (i10 & 1) == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            this.f22473c.f22381b.d();
        }
        Object y10 = super.y(descriptor, i10, deserializer, obj);
        if (z10) {
            this.f22473c.f22381b.f(y10);
        }
        return y10;
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public String z() {
        if (this.f22477g.q()) {
            return this.f22473c.r();
        }
        return this.f22473c.o();
    }
}
