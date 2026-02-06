package lt;

import com.withpersona.sdk2.inquiry.network.dto.InquiryField;
import ht.k;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.DeserializationStrategy;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.json.Json;
import kotlinx.serialization.json.JsonElement;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class w0 extends kotlinx.serialization.encoding.a implements kt.f {

    /* renamed from: a  reason: collision with root package name */
    private final Json f36723a;

    /* renamed from: b  reason: collision with root package name */
    private final e1 f36724b;

    /* renamed from: c  reason: collision with root package name */
    public final lt.a f36725c;

    /* renamed from: d  reason: collision with root package name */
    private final mt.b f36726d;

    /* renamed from: e  reason: collision with root package name */
    private int f36727e;

    /* renamed from: f  reason: collision with root package name */
    private a f36728f;

    /* renamed from: g  reason: collision with root package name */
    private final kt.d f36729g;

    /* renamed from: h  reason: collision with root package name */
    private final d0 f36730h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public String f36731a;

        public a(String str) {
            this.f36731a = str;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f36732a;

        static {
            int[] iArr = new int[e1.values().length];
            try {
                iArr[e1.f36651o.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[e1.f36652p.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[e1.f36653q.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[e1.f36650i.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            f36732a = iArr;
        }
    }

    public w0(Json json, e1 mode, lt.a lexer, SerialDescriptor descriptor, a aVar) {
        d0 d0Var;
        Intrinsics.checkNotNullParameter(json, "json");
        Intrinsics.checkNotNullParameter(mode, "mode");
        Intrinsics.checkNotNullParameter(lexer, "lexer");
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        this.f36723a = json;
        this.f36724b = mode;
        this.f36725c = lexer;
        this.f36726d = json.a();
        this.f36727e = -1;
        this.f36728f = aVar;
        kt.d e10 = json.e();
        this.f36729g = e10;
        if (e10.j()) {
            d0Var = null;
        } else {
            d0Var = new d0(descriptor);
        }
        this.f36730h = d0Var;
    }

    private final void K() {
        if (this.f36725c.G() != 4) {
            return;
        }
        lt.a.x(this.f36725c, "Unexpected leading comma", 0, null, 6, null);
        throw new qr.h();
    }

    private final boolean L(SerialDescriptor serialDescriptor, int i10) {
        String H;
        boolean z10;
        Json json = this.f36723a;
        boolean i11 = serialDescriptor.i(i10);
        SerialDescriptor g10 = serialDescriptor.g(i10);
        if (i11 && !g10.b() && this.f36725c.O(true)) {
            return true;
        }
        if (!Intrinsics.areEqual(g10.getKind(), k.b.f26488a) || ((g10.b() && this.f36725c.O(false)) || (H = this.f36725c.H(this.f36729g.q())) == null)) {
            return false;
        }
        int i12 = i0.i(g10, json, H);
        if (!json.e().j() && g10.b()) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (i12 == -3 && (i11 || z10)) {
            this.f36725c.o();
            return true;
        }
        return false;
    }

    private final int M() {
        boolean N = this.f36725c.N();
        if (this.f36725c.e()) {
            int i10 = this.f36727e;
            if (i10 != -1 && !N) {
                lt.a.x(this.f36725c, "Expected end of the array or comma", 0, null, 6, null);
                throw new qr.h();
            }
            int i11 = i10 + 1;
            this.f36727e = i11;
            return i11;
        } else if (!N || this.f36723a.e().d()) {
            return -1;
        } else {
            g0.g(this.f36725c, "array");
            throw new qr.h();
        }
    }

    private final int N() {
        boolean z10;
        int i10 = this.f36727e;
        boolean z11 = false;
        if (i10 % 2 != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            if (i10 != -1) {
                z11 = this.f36725c.N();
            }
        } else {
            this.f36725c.l(':');
        }
        if (this.f36725c.e()) {
            if (z10) {
                if (this.f36727e == -1) {
                    lt.a aVar = this.f36725c;
                    int i11 = aVar.f36632a;
                    if (z11) {
                        lt.a.x(aVar, "Unexpected leading comma", i11, null, 4, null);
                        throw new qr.h();
                    }
                } else {
                    lt.a aVar2 = this.f36725c;
                    boolean z12 = z11;
                    int i12 = aVar2.f36632a;
                    if (!z12) {
                        lt.a.x(aVar2, "Expected comma after the key-value pair", i12, null, 4, null);
                        throw new qr.h();
                    }
                }
            }
            int i13 = this.f36727e + 1;
            this.f36727e = i13;
            return i13;
        } else if (!z11 || this.f36723a.e().d()) {
            return -1;
        } else {
            g0.h(this.f36725c, null, 1, null);
            throw new qr.h();
        }
    }

    private final int O(SerialDescriptor serialDescriptor) {
        int i10;
        boolean z10;
        boolean N = this.f36725c.N();
        while (true) {
            boolean z11 = true;
            if (this.f36725c.e()) {
                String P = P();
                this.f36725c.l(':');
                i10 = i0.i(serialDescriptor, this.f36723a, P);
                if (i10 != -3) {
                    if (!this.f36729g.g() || !L(serialDescriptor, i10)) {
                        break;
                    }
                    z10 = this.f36725c.N();
                    z11 = false;
                } else {
                    z10 = false;
                }
                if (z11) {
                    N = Q(P);
                } else {
                    N = z10;
                }
            } else if (N && !this.f36723a.e().d()) {
                g0.h(this.f36725c, null, 1, null);
                throw new qr.h();
            } else {
                d0 d0Var = this.f36730h;
                if (d0Var != null) {
                    return d0Var.d();
                }
                return -1;
            }
        }
        d0 d0Var2 = this.f36730h;
        if (d0Var2 != null) {
            d0Var2.c(i10);
        }
        return i10;
    }

    private final String P() {
        if (this.f36729g.q()) {
            return this.f36725c.r();
        }
        return this.f36725c.i();
    }

    private final boolean Q(String str) {
        if (!this.f36729g.k() && !S(this.f36728f, str)) {
            this.f36725c.A(str);
        } else {
            this.f36725c.J(this.f36729g.q());
        }
        return this.f36725c.N();
    }

    private final void R(SerialDescriptor serialDescriptor) {
        do {
        } while (o(serialDescriptor) != -1);
    }

    private final boolean S(a aVar, String str) {
        if (aVar == null || !Intrinsics.areEqual(aVar.f36731a, str)) {
            return false;
        }
        aVar.f36731a = null;
        return true;
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public boolean D() {
        boolean z10;
        d0 d0Var = this.f36730h;
        if (d0Var != null) {
            z10 = d0Var.b();
        } else {
            z10 = false;
        }
        if (z10 || lt.a.P(this.f36725c, false, 1, null)) {
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
        throw new UnsupportedOperationException("Method not decompiled: lt.w0.G(kotlinx.serialization.DeserializationStrategy):java.lang.Object");
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public byte H() {
        long m10 = this.f36725c.m();
        byte b10 = (byte) m10;
        if (m10 == b10) {
            return b10;
        }
        lt.a aVar = this.f36725c;
        lt.a.x(aVar, "Failed to parse byte for input '" + m10 + '\'', 0, null, 6, null);
        throw new qr.h();
    }

    @Override // kotlinx.serialization.encoding.Decoder, kotlinx.serialization.encoding.c
    public mt.b a() {
        return this.f36726d;
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public kotlinx.serialization.encoding.c b(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        e1 b10 = f1.b(this.f36723a, descriptor);
        this.f36725c.f36633b.c(descriptor);
        this.f36725c.l(b10.f36656d);
        K();
        int i10 = b.f36732a[b10.ordinal()];
        if (i10 != 1 && i10 != 2 && i10 != 3) {
            if (this.f36724b == b10 && this.f36723a.e().j()) {
                return this;
            }
            return new w0(this.f36723a, b10, this.f36725c, descriptor, this.f36728f);
        }
        return new w0(this.f36723a, b10, this.f36725c, descriptor, this.f36728f);
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.c
    public void c(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        if (this.f36723a.e().k() && descriptor.d() == 0) {
            R(descriptor);
        }
        if (this.f36725c.N() && !this.f36723a.e().d()) {
            g0.g(this.f36725c, "");
            throw new qr.h();
        }
        this.f36725c.l(this.f36724b.f36657e);
        this.f36725c.f36633b.b();
    }

    @Override // kt.f
    public final Json d() {
        return this.f36723a;
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public int e(SerialDescriptor enumDescriptor) {
        Intrinsics.checkNotNullParameter(enumDescriptor, "enumDescriptor");
        Json json = this.f36723a;
        String z10 = z();
        return i0.j(enumDescriptor, json, z10, " at path " + this.f36725c.f36633b.a());
    }

    @Override // kt.f
    public JsonElement g() {
        return new q0(this.f36723a.e(), this.f36725c).e();
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public int h() {
        long m10 = this.f36725c.m();
        int i10 = (int) m10;
        if (m10 == i10) {
            return i10;
        }
        lt.a aVar = this.f36725c;
        lt.a.x(aVar, "Failed to parse int for input '" + m10 + '\'', 0, null, 6, null);
        throw new qr.h();
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public Void j() {
        return null;
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public long l() {
        return this.f36725c.m();
    }

    @Override // kotlinx.serialization.encoding.c
    public int o(SerialDescriptor descriptor) {
        int N;
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        int i10 = b.f36732a[this.f36724b.ordinal()];
        if (i10 != 2) {
            if (i10 != 4) {
                N = M();
            } else {
                N = O(descriptor);
            }
        } else {
            N = N();
        }
        if (this.f36724b != e1.f36652p) {
            this.f36725c.f36633b.g(N);
        }
        return N;
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public Decoder q(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        if (y0.b(descriptor)) {
            return new b0(this.f36725c, this.f36723a);
        }
        return super.q(descriptor);
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public short s() {
        long m10 = this.f36725c.m();
        short s10 = (short) m10;
        if (m10 == s10) {
            return s10;
        }
        lt.a aVar = this.f36725c;
        lt.a.x(aVar, "Failed to parse short for input '" + m10 + '\'', 0, null, 6, null);
        throw new qr.h();
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public float t() {
        lt.a aVar = this.f36725c;
        String q10 = aVar.q();
        try {
            float parseFloat = Float.parseFloat(q10);
            if (!this.f36723a.e().b()) {
                if (!Float.isInfinite(parseFloat) && !Float.isNaN(parseFloat)) {
                    return parseFloat;
                }
                g0.k(this.f36725c, Float.valueOf(parseFloat));
                throw new qr.h();
            }
            return parseFloat;
        } catch (IllegalArgumentException unused) {
            lt.a.x(aVar, "Failed to parse type '" + InquiryField.FloatField.TYPE + "' for input '" + q10 + '\'', 0, null, 6, null);
            throw new qr.h();
        }
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public double v() {
        lt.a aVar = this.f36725c;
        String q10 = aVar.q();
        try {
            double parseDouble = Double.parseDouble(q10);
            if (!this.f36723a.e().b()) {
                if (!Double.isInfinite(parseDouble) && !Double.isNaN(parseDouble)) {
                    return parseDouble;
                }
                g0.k(this.f36725c, Double.valueOf(parseDouble));
                throw new qr.h();
            }
            return parseDouble;
        } catch (IllegalArgumentException unused) {
            lt.a.x(aVar, "Failed to parse type 'double' for input '" + q10 + '\'', 0, null, 6, null);
            throw new qr.h();
        }
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public boolean w() {
        return this.f36725c.g();
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public char x() {
        String q10 = this.f36725c.q();
        if (q10.length() == 1) {
            return q10.charAt(0);
        }
        lt.a aVar = this.f36725c;
        lt.a.x(aVar, "Expected single char, but got '" + q10 + '\'', 0, null, 6, null);
        throw new qr.h();
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.c
    public Object y(SerialDescriptor descriptor, int i10, DeserializationStrategy deserializer, Object obj) {
        boolean z10;
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        Intrinsics.checkNotNullParameter(deserializer, "deserializer");
        if (this.f36724b == e1.f36652p && (i10 & 1) == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            this.f36725c.f36633b.d();
        }
        Object y10 = super.y(descriptor, i10, deserializer, obj);
        if (z10) {
            this.f36725c.f36633b.f(y10);
        }
        return y10;
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public String z() {
        if (this.f36729g.q()) {
            return this.f36725c.r();
        }
        return this.f36725c.o();
    }
}
