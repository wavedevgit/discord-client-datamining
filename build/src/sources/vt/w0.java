package vt;

import com.withpersona.sdk2.inquiry.network.dto.InquiryField;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.DeserializationStrategy;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.json.Json;
import kotlinx.serialization.json.JsonElement;
import st.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class w0 extends kotlinx.serialization.encoding.a implements ut.f {

    /* renamed from: a  reason: collision with root package name */
    private final Json f52530a;

    /* renamed from: b  reason: collision with root package name */
    private final e1 f52531b;

    /* renamed from: c  reason: collision with root package name */
    public final vt.a f52532c;

    /* renamed from: d  reason: collision with root package name */
    private final wt.b f52533d;

    /* renamed from: e  reason: collision with root package name */
    private int f52534e;

    /* renamed from: f  reason: collision with root package name */
    private a f52535f;

    /* renamed from: g  reason: collision with root package name */
    private final ut.d f52536g;

    /* renamed from: h  reason: collision with root package name */
    private final d0 f52537h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public String f52538a;

        public a(String str) {
            this.f52538a = str;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f52539a;

        static {
            int[] iArr = new int[e1.values().length];
            try {
                iArr[e1.f52458o.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[e1.f52459p.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[e1.f52460q.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[e1.f52457i.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            f52539a = iArr;
        }
    }

    public w0(Json json, e1 mode, vt.a lexer, SerialDescriptor descriptor, a aVar) {
        d0 d0Var;
        Intrinsics.checkNotNullParameter(json, "json");
        Intrinsics.checkNotNullParameter(mode, "mode");
        Intrinsics.checkNotNullParameter(lexer, "lexer");
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        this.f52530a = json;
        this.f52531b = mode;
        this.f52532c = lexer;
        this.f52533d = json.a();
        this.f52534e = -1;
        this.f52535f = aVar;
        ut.d e10 = json.e();
        this.f52536g = e10;
        if (e10.j()) {
            d0Var = null;
        } else {
            d0Var = new d0(descriptor);
        }
        this.f52537h = d0Var;
    }

    private final void K() {
        if (this.f52532c.G() != 4) {
            return;
        }
        vt.a.x(this.f52532c, "Unexpected leading comma", 0, null, 6, null);
        throw new as.h();
    }

    private final boolean L(SerialDescriptor serialDescriptor, int i10) {
        String H;
        boolean z10;
        Json json = this.f52530a;
        boolean i11 = serialDescriptor.i(i10);
        SerialDescriptor g10 = serialDescriptor.g(i10);
        if (i11 && !g10.b() && this.f52532c.O(true)) {
            return true;
        }
        if (!Intrinsics.areEqual(g10.getKind(), k.b.f48947a) || ((g10.b() && this.f52532c.O(false)) || (H = this.f52532c.H(this.f52536g.q())) == null)) {
            return false;
        }
        int i12 = i0.i(g10, json, H);
        if (!json.e().j() && g10.b()) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (i12 == -3 && (i11 || z10)) {
            this.f52532c.o();
            return true;
        }
        return false;
    }

    private final int M() {
        boolean N = this.f52532c.N();
        if (this.f52532c.e()) {
            int i10 = this.f52534e;
            if (i10 != -1 && !N) {
                vt.a.x(this.f52532c, "Expected end of the array or comma", 0, null, 6, null);
                throw new as.h();
            }
            int i11 = i10 + 1;
            this.f52534e = i11;
            return i11;
        } else if (!N || this.f52530a.e().d()) {
            return -1;
        } else {
            g0.g(this.f52532c, "array");
            throw new as.h();
        }
    }

    private final int N() {
        boolean z10;
        int i10 = this.f52534e;
        boolean z11 = false;
        if (i10 % 2 != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            if (i10 != -1) {
                z11 = this.f52532c.N();
            }
        } else {
            this.f52532c.l(':');
        }
        if (this.f52532c.e()) {
            if (z10) {
                if (this.f52534e == -1) {
                    vt.a aVar = this.f52532c;
                    int i11 = aVar.f52439a;
                    if (z11) {
                        vt.a.x(aVar, "Unexpected leading comma", i11, null, 4, null);
                        throw new as.h();
                    }
                } else {
                    vt.a aVar2 = this.f52532c;
                    boolean z12 = z11;
                    int i12 = aVar2.f52439a;
                    if (!z12) {
                        vt.a.x(aVar2, "Expected comma after the key-value pair", i12, null, 4, null);
                        throw new as.h();
                    }
                }
            }
            int i13 = this.f52534e + 1;
            this.f52534e = i13;
            return i13;
        } else if (!z11 || this.f52530a.e().d()) {
            return -1;
        } else {
            g0.h(this.f52532c, null, 1, null);
            throw new as.h();
        }
    }

    private final int O(SerialDescriptor serialDescriptor) {
        int i10;
        boolean z10;
        boolean N = this.f52532c.N();
        while (true) {
            boolean z11 = true;
            if (this.f52532c.e()) {
                String P = P();
                this.f52532c.l(':');
                i10 = i0.i(serialDescriptor, this.f52530a, P);
                if (i10 != -3) {
                    if (!this.f52536g.g() || !L(serialDescriptor, i10)) {
                        break;
                    }
                    z10 = this.f52532c.N();
                    z11 = false;
                } else {
                    z10 = false;
                }
                if (z11) {
                    N = Q(P);
                } else {
                    N = z10;
                }
            } else if (N && !this.f52530a.e().d()) {
                g0.h(this.f52532c, null, 1, null);
                throw new as.h();
            } else {
                d0 d0Var = this.f52537h;
                if (d0Var != null) {
                    return d0Var.d();
                }
                return -1;
            }
        }
        d0 d0Var2 = this.f52537h;
        if (d0Var2 != null) {
            d0Var2.c(i10);
        }
        return i10;
    }

    private final String P() {
        if (this.f52536g.q()) {
            return this.f52532c.r();
        }
        return this.f52532c.i();
    }

    private final boolean Q(String str) {
        if (!this.f52536g.k() && !S(this.f52535f, str)) {
            this.f52532c.A(str);
        } else {
            this.f52532c.J(this.f52536g.q());
        }
        return this.f52532c.N();
    }

    private final void R(SerialDescriptor serialDescriptor) {
        do {
        } while (o(serialDescriptor) != -1);
    }

    private final boolean S(a aVar, String str) {
        if (aVar == null || !Intrinsics.areEqual(aVar.f52538a, str)) {
            return false;
        }
        aVar.f52538a = null;
        return true;
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public boolean D() {
        boolean z10;
        d0 d0Var = this.f52537h;
        if (d0Var != null) {
            z10 = d0Var.b();
        } else {
            z10 = false;
        }
        if (z10 || vt.a.P(this.f52532c, false, 1, null)) {
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
        throw new UnsupportedOperationException("Method not decompiled: vt.w0.G(kotlinx.serialization.DeserializationStrategy):java.lang.Object");
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public byte H() {
        long m10 = this.f52532c.m();
        byte b10 = (byte) m10;
        if (m10 == b10) {
            return b10;
        }
        vt.a aVar = this.f52532c;
        vt.a.x(aVar, "Failed to parse byte for input '" + m10 + '\'', 0, null, 6, null);
        throw new as.h();
    }

    @Override // kotlinx.serialization.encoding.Decoder, kotlinx.serialization.encoding.c
    public wt.b a() {
        return this.f52533d;
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public kotlinx.serialization.encoding.c b(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        e1 b10 = f1.b(this.f52530a, descriptor);
        this.f52532c.f52440b.c(descriptor);
        this.f52532c.l(b10.f52463d);
        K();
        int i10 = b.f52539a[b10.ordinal()];
        if (i10 != 1 && i10 != 2 && i10 != 3) {
            if (this.f52531b == b10 && this.f52530a.e().j()) {
                return this;
            }
            return new w0(this.f52530a, b10, this.f52532c, descriptor, this.f52535f);
        }
        return new w0(this.f52530a, b10, this.f52532c, descriptor, this.f52535f);
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.c
    public void c(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        if (this.f52530a.e().k() && descriptor.d() == 0) {
            R(descriptor);
        }
        if (this.f52532c.N() && !this.f52530a.e().d()) {
            g0.g(this.f52532c, "");
            throw new as.h();
        }
        this.f52532c.l(this.f52531b.f52464e);
        this.f52532c.f52440b.b();
    }

    @Override // ut.f
    public final Json d() {
        return this.f52530a;
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public int e(SerialDescriptor enumDescriptor) {
        Intrinsics.checkNotNullParameter(enumDescriptor, "enumDescriptor");
        Json json = this.f52530a;
        String z10 = z();
        return i0.j(enumDescriptor, json, z10, " at path " + this.f52532c.f52440b.a());
    }

    @Override // ut.f
    public JsonElement g() {
        return new q0(this.f52530a.e(), this.f52532c).e();
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public int h() {
        long m10 = this.f52532c.m();
        int i10 = (int) m10;
        if (m10 == i10) {
            return i10;
        }
        vt.a aVar = this.f52532c;
        vt.a.x(aVar, "Failed to parse int for input '" + m10 + '\'', 0, null, 6, null);
        throw new as.h();
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public Void j() {
        return null;
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public long l() {
        return this.f52532c.m();
    }

    @Override // kotlinx.serialization.encoding.c
    public int o(SerialDescriptor descriptor) {
        int N;
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        int i10 = b.f52539a[this.f52531b.ordinal()];
        if (i10 != 2) {
            if (i10 != 4) {
                N = M();
            } else {
                N = O(descriptor);
            }
        } else {
            N = N();
        }
        if (this.f52531b != e1.f52459p) {
            this.f52532c.f52440b.g(N);
        }
        return N;
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public Decoder q(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        if (y0.b(descriptor)) {
            return new b0(this.f52532c, this.f52530a);
        }
        return super.q(descriptor);
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public short s() {
        long m10 = this.f52532c.m();
        short s10 = (short) m10;
        if (m10 == s10) {
            return s10;
        }
        vt.a aVar = this.f52532c;
        vt.a.x(aVar, "Failed to parse short for input '" + m10 + '\'', 0, null, 6, null);
        throw new as.h();
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public float t() {
        vt.a aVar = this.f52532c;
        String q10 = aVar.q();
        try {
            float parseFloat = Float.parseFloat(q10);
            if (!this.f52530a.e().b()) {
                if (!Float.isInfinite(parseFloat) && !Float.isNaN(parseFloat)) {
                    return parseFloat;
                }
                g0.k(this.f52532c, Float.valueOf(parseFloat));
                throw new as.h();
            }
            return parseFloat;
        } catch (IllegalArgumentException unused) {
            vt.a.x(aVar, "Failed to parse type '" + InquiryField.FloatField.TYPE + "' for input '" + q10 + '\'', 0, null, 6, null);
            throw new as.h();
        }
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public double v() {
        vt.a aVar = this.f52532c;
        String q10 = aVar.q();
        try {
            double parseDouble = Double.parseDouble(q10);
            if (!this.f52530a.e().b()) {
                if (!Double.isInfinite(parseDouble) && !Double.isNaN(parseDouble)) {
                    return parseDouble;
                }
                g0.k(this.f52532c, Double.valueOf(parseDouble));
                throw new as.h();
            }
            return parseDouble;
        } catch (IllegalArgumentException unused) {
            vt.a.x(aVar, "Failed to parse type 'double' for input '" + q10 + '\'', 0, null, 6, null);
            throw new as.h();
        }
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public boolean w() {
        return this.f52532c.g();
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public char x() {
        String q10 = this.f52532c.q();
        if (q10.length() == 1) {
            return q10.charAt(0);
        }
        vt.a aVar = this.f52532c;
        vt.a.x(aVar, "Expected single char, but got '" + q10 + '\'', 0, null, 6, null);
        throw new as.h();
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.c
    public Object y(SerialDescriptor descriptor, int i10, DeserializationStrategy deserializer, Object obj) {
        boolean z10;
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        Intrinsics.checkNotNullParameter(deserializer, "deserializer");
        if (this.f52531b == e1.f52459p && (i10 & 1) == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            this.f52532c.f52440b.d();
        }
        Object y10 = super.y(descriptor, i10, deserializer, obj);
        if (z10) {
            this.f52532c.f52440b.f(y10);
        }
        return y10;
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public String z() {
        if (this.f52536g.q()) {
            return this.f52532c.r();
        }
        return this.f52532c.o();
    }
}
