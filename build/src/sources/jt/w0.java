package jt;

import com.withpersona.sdk2.inquiry.network.dto.InquiryField;
import ft.k;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.DeserializationStrategy;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.json.Json;
import kotlinx.serialization.json.JsonElement;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class w0 extends kotlinx.serialization.encoding.a implements ht.f {

    /* renamed from: a  reason: collision with root package name */
    private final Json f31387a;

    /* renamed from: b  reason: collision with root package name */
    private final e1 f31388b;

    /* renamed from: c  reason: collision with root package name */
    public final jt.a f31389c;

    /* renamed from: d  reason: collision with root package name */
    private final kt.b f31390d;

    /* renamed from: e  reason: collision with root package name */
    private int f31391e;

    /* renamed from: f  reason: collision with root package name */
    private a f31392f;

    /* renamed from: g  reason: collision with root package name */
    private final ht.d f31393g;

    /* renamed from: h  reason: collision with root package name */
    private final d0 f31394h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public String f31395a;

        public a(String str) {
            this.f31395a = str;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f31396a;

        static {
            int[] iArr = new int[e1.values().length];
            try {
                iArr[e1.f31315o.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[e1.f31316p.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[e1.f31317q.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[e1.f31314i.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            f31396a = iArr;
        }
    }

    public w0(Json json, e1 mode, jt.a lexer, SerialDescriptor descriptor, a aVar) {
        d0 d0Var;
        Intrinsics.checkNotNullParameter(json, "json");
        Intrinsics.checkNotNullParameter(mode, "mode");
        Intrinsics.checkNotNullParameter(lexer, "lexer");
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        this.f31387a = json;
        this.f31388b = mode;
        this.f31389c = lexer;
        this.f31390d = json.a();
        this.f31391e = -1;
        this.f31392f = aVar;
        ht.d e10 = json.e();
        this.f31393g = e10;
        if (e10.j()) {
            d0Var = null;
        } else {
            d0Var = new d0(descriptor);
        }
        this.f31394h = d0Var;
    }

    private final void K() {
        if (this.f31389c.G() != 4) {
            return;
        }
        jt.a.x(this.f31389c, "Unexpected leading comma", 0, null, 6, null);
        throw new or.h();
    }

    private final boolean L(SerialDescriptor serialDescriptor, int i10) {
        String H;
        boolean z10;
        Json json = this.f31387a;
        boolean i11 = serialDescriptor.i(i10);
        SerialDescriptor g10 = serialDescriptor.g(i10);
        if (i11 && !g10.b() && this.f31389c.O(true)) {
            return true;
        }
        if (!Intrinsics.areEqual(g10.getKind(), k.b.f23493a) || ((g10.b() && this.f31389c.O(false)) || (H = this.f31389c.H(this.f31393g.q())) == null)) {
            return false;
        }
        int i12 = i0.i(g10, json, H);
        if (!json.e().j() && g10.b()) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (i12 == -3 && (i11 || z10)) {
            this.f31389c.o();
            return true;
        }
        return false;
    }

    private final int M() {
        boolean N = this.f31389c.N();
        if (this.f31389c.e()) {
            int i10 = this.f31391e;
            if (i10 != -1 && !N) {
                jt.a.x(this.f31389c, "Expected end of the array or comma", 0, null, 6, null);
                throw new or.h();
            }
            int i11 = i10 + 1;
            this.f31391e = i11;
            return i11;
        } else if (!N || this.f31387a.e().d()) {
            return -1;
        } else {
            g0.g(this.f31389c, "array");
            throw new or.h();
        }
    }

    private final int N() {
        boolean z10;
        int i10 = this.f31391e;
        boolean z11 = false;
        if (i10 % 2 != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            if (i10 != -1) {
                z11 = this.f31389c.N();
            }
        } else {
            this.f31389c.l(':');
        }
        if (this.f31389c.e()) {
            if (z10) {
                if (this.f31391e == -1) {
                    jt.a aVar = this.f31389c;
                    int i11 = aVar.f31296a;
                    if (z11) {
                        jt.a.x(aVar, "Unexpected leading comma", i11, null, 4, null);
                        throw new or.h();
                    }
                } else {
                    jt.a aVar2 = this.f31389c;
                    boolean z12 = z11;
                    int i12 = aVar2.f31296a;
                    if (!z12) {
                        jt.a.x(aVar2, "Expected comma after the key-value pair", i12, null, 4, null);
                        throw new or.h();
                    }
                }
            }
            int i13 = this.f31391e + 1;
            this.f31391e = i13;
            return i13;
        } else if (!z11 || this.f31387a.e().d()) {
            return -1;
        } else {
            g0.h(this.f31389c, null, 1, null);
            throw new or.h();
        }
    }

    private final int O(SerialDescriptor serialDescriptor) {
        int i10;
        boolean z10;
        boolean N = this.f31389c.N();
        while (true) {
            boolean z11 = true;
            if (this.f31389c.e()) {
                String P = P();
                this.f31389c.l(':');
                i10 = i0.i(serialDescriptor, this.f31387a, P);
                if (i10 != -3) {
                    if (!this.f31393g.g() || !L(serialDescriptor, i10)) {
                        break;
                    }
                    z10 = this.f31389c.N();
                    z11 = false;
                } else {
                    z10 = false;
                }
                if (z11) {
                    N = Q(P);
                } else {
                    N = z10;
                }
            } else if (N && !this.f31387a.e().d()) {
                g0.h(this.f31389c, null, 1, null);
                throw new or.h();
            } else {
                d0 d0Var = this.f31394h;
                if (d0Var != null) {
                    return d0Var.d();
                }
                return -1;
            }
        }
        d0 d0Var2 = this.f31394h;
        if (d0Var2 != null) {
            d0Var2.c(i10);
        }
        return i10;
    }

    private final String P() {
        if (this.f31393g.q()) {
            return this.f31389c.r();
        }
        return this.f31389c.i();
    }

    private final boolean Q(String str) {
        if (!this.f31393g.k() && !S(this.f31392f, str)) {
            this.f31389c.A(str);
        } else {
            this.f31389c.J(this.f31393g.q());
        }
        return this.f31389c.N();
    }

    private final void R(SerialDescriptor serialDescriptor) {
        do {
        } while (o(serialDescriptor) != -1);
    }

    private final boolean S(a aVar, String str) {
        if (aVar == null || !Intrinsics.areEqual(aVar.f31395a, str)) {
            return false;
        }
        aVar.f31395a = null;
        return true;
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public boolean D() {
        boolean z10;
        d0 d0Var = this.f31394h;
        if (d0Var != null) {
            z10 = d0Var.b();
        } else {
            z10 = false;
        }
        if (z10 || jt.a.P(this.f31389c, false, 1, null)) {
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
        throw new UnsupportedOperationException("Method not decompiled: jt.w0.G(kotlinx.serialization.DeserializationStrategy):java.lang.Object");
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public byte H() {
        long m10 = this.f31389c.m();
        byte b10 = (byte) m10;
        if (m10 == b10) {
            return b10;
        }
        jt.a aVar = this.f31389c;
        jt.a.x(aVar, "Failed to parse byte for input '" + m10 + '\'', 0, null, 6, null);
        throw new or.h();
    }

    @Override // kotlinx.serialization.encoding.Decoder, kotlinx.serialization.encoding.c
    public kt.b a() {
        return this.f31390d;
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public kotlinx.serialization.encoding.c b(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        e1 b10 = f1.b(this.f31387a, descriptor);
        this.f31389c.f31297b.c(descriptor);
        this.f31389c.l(b10.f31320d);
        K();
        int i10 = b.f31396a[b10.ordinal()];
        if (i10 != 1 && i10 != 2 && i10 != 3) {
            if (this.f31388b == b10 && this.f31387a.e().j()) {
                return this;
            }
            return new w0(this.f31387a, b10, this.f31389c, descriptor, this.f31392f);
        }
        return new w0(this.f31387a, b10, this.f31389c, descriptor, this.f31392f);
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.c
    public void c(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        if (this.f31387a.e().k() && descriptor.d() == 0) {
            R(descriptor);
        }
        if (this.f31389c.N() && !this.f31387a.e().d()) {
            g0.g(this.f31389c, "");
            throw new or.h();
        }
        this.f31389c.l(this.f31388b.f31321e);
        this.f31389c.f31297b.b();
    }

    @Override // ht.f
    public final Json d() {
        return this.f31387a;
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public int e(SerialDescriptor enumDescriptor) {
        Intrinsics.checkNotNullParameter(enumDescriptor, "enumDescriptor");
        Json json = this.f31387a;
        String z10 = z();
        return i0.j(enumDescriptor, json, z10, " at path " + this.f31389c.f31297b.a());
    }

    @Override // ht.f
    public JsonElement g() {
        return new q0(this.f31387a.e(), this.f31389c).e();
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public int h() {
        long m10 = this.f31389c.m();
        int i10 = (int) m10;
        if (m10 == i10) {
            return i10;
        }
        jt.a aVar = this.f31389c;
        jt.a.x(aVar, "Failed to parse int for input '" + m10 + '\'', 0, null, 6, null);
        throw new or.h();
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public Void j() {
        return null;
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public long l() {
        return this.f31389c.m();
    }

    @Override // kotlinx.serialization.encoding.c
    public int o(SerialDescriptor descriptor) {
        int N;
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        int i10 = b.f31396a[this.f31388b.ordinal()];
        if (i10 != 2) {
            if (i10 != 4) {
                N = M();
            } else {
                N = O(descriptor);
            }
        } else {
            N = N();
        }
        if (this.f31388b != e1.f31316p) {
            this.f31389c.f31297b.g(N);
        }
        return N;
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public Decoder q(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        if (y0.b(descriptor)) {
            return new b0(this.f31389c, this.f31387a);
        }
        return super.q(descriptor);
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public short s() {
        long m10 = this.f31389c.m();
        short s10 = (short) m10;
        if (m10 == s10) {
            return s10;
        }
        jt.a aVar = this.f31389c;
        jt.a.x(aVar, "Failed to parse short for input '" + m10 + '\'', 0, null, 6, null);
        throw new or.h();
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public float t() {
        jt.a aVar = this.f31389c;
        String q10 = aVar.q();
        try {
            float parseFloat = Float.parseFloat(q10);
            if (!this.f31387a.e().b()) {
                if (!Float.isInfinite(parseFloat) && !Float.isNaN(parseFloat)) {
                    return parseFloat;
                }
                g0.k(this.f31389c, Float.valueOf(parseFloat));
                throw new or.h();
            }
            return parseFloat;
        } catch (IllegalArgumentException unused) {
            jt.a.x(aVar, "Failed to parse type '" + InquiryField.FloatField.TYPE + "' for input '" + q10 + '\'', 0, null, 6, null);
            throw new or.h();
        }
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public double v() {
        jt.a aVar = this.f31389c;
        String q10 = aVar.q();
        try {
            double parseDouble = Double.parseDouble(q10);
            if (!this.f31387a.e().b()) {
                if (!Double.isInfinite(parseDouble) && !Double.isNaN(parseDouble)) {
                    return parseDouble;
                }
                g0.k(this.f31389c, Double.valueOf(parseDouble));
                throw new or.h();
            }
            return parseDouble;
        } catch (IllegalArgumentException unused) {
            jt.a.x(aVar, "Failed to parse type 'double' for input '" + q10 + '\'', 0, null, 6, null);
            throw new or.h();
        }
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public boolean w() {
        return this.f31389c.g();
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public char x() {
        String q10 = this.f31389c.q();
        if (q10.length() == 1) {
            return q10.charAt(0);
        }
        jt.a aVar = this.f31389c;
        jt.a.x(aVar, "Expected single char, but got '" + q10 + '\'', 0, null, 6, null);
        throw new or.h();
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.c
    public Object y(SerialDescriptor descriptor, int i10, DeserializationStrategy deserializer, Object obj) {
        boolean z10;
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        Intrinsics.checkNotNullParameter(deserializer, "deserializer");
        if (this.f31388b == e1.f31316p && (i10 & 1) == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            this.f31389c.f31297b.d();
        }
        Object y10 = super.y(descriptor, i10, deserializer, obj);
        if (z10) {
            this.f31389c.f31297b.f(y10);
        }
        return y10;
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public String z() {
        if (this.f31393g.q()) {
            return this.f31389c.r();
        }
        return this.f31389c.o();
    }
}
