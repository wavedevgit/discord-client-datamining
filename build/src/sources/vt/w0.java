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
    private final Json f51962a;

    /* renamed from: b  reason: collision with root package name */
    private final e1 f51963b;

    /* renamed from: c  reason: collision with root package name */
    public final vt.a f51964c;

    /* renamed from: d  reason: collision with root package name */
    private final wt.b f51965d;

    /* renamed from: e  reason: collision with root package name */
    private int f51966e;

    /* renamed from: f  reason: collision with root package name */
    private a f51967f;

    /* renamed from: g  reason: collision with root package name */
    private final ut.d f51968g;

    /* renamed from: h  reason: collision with root package name */
    private final d0 f51969h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public String f51970a;

        public a(String str) {
            this.f51970a = str;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f51971a;

        static {
            int[] iArr = new int[e1.values().length];
            try {
                iArr[e1.f51890o.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[e1.f51891p.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[e1.f51892q.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[e1.f51889i.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            f51971a = iArr;
        }
    }

    public w0(Json json, e1 mode, vt.a lexer, SerialDescriptor descriptor, a aVar) {
        d0 d0Var;
        Intrinsics.checkNotNullParameter(json, "json");
        Intrinsics.checkNotNullParameter(mode, "mode");
        Intrinsics.checkNotNullParameter(lexer, "lexer");
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        this.f51962a = json;
        this.f51963b = mode;
        this.f51964c = lexer;
        this.f51965d = json.a();
        this.f51966e = -1;
        this.f51967f = aVar;
        ut.d e10 = json.e();
        this.f51968g = e10;
        if (e10.j()) {
            d0Var = null;
        } else {
            d0Var = new d0(descriptor);
        }
        this.f51969h = d0Var;
    }

    private final void K() {
        if (this.f51964c.G() != 4) {
            return;
        }
        vt.a.x(this.f51964c, "Unexpected leading comma", 0, null, 6, null);
        throw new as.h();
    }

    private final boolean L(SerialDescriptor serialDescriptor, int i10) {
        String H;
        boolean z10;
        Json json = this.f51962a;
        boolean i11 = serialDescriptor.i(i10);
        SerialDescriptor g10 = serialDescriptor.g(i10);
        if (i11 && !g10.b() && this.f51964c.O(true)) {
            return true;
        }
        if (!Intrinsics.areEqual(g10.getKind(), k.b.f48379a) || ((g10.b() && this.f51964c.O(false)) || (H = this.f51964c.H(this.f51968g.q())) == null)) {
            return false;
        }
        int i12 = i0.i(g10, json, H);
        if (!json.e().j() && g10.b()) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (i12 == -3 && (i11 || z10)) {
            this.f51964c.o();
            return true;
        }
        return false;
    }

    private final int M() {
        boolean N = this.f51964c.N();
        if (this.f51964c.e()) {
            int i10 = this.f51966e;
            if (i10 != -1 && !N) {
                vt.a.x(this.f51964c, "Expected end of the array or comma", 0, null, 6, null);
                throw new as.h();
            }
            int i11 = i10 + 1;
            this.f51966e = i11;
            return i11;
        } else if (!N || this.f51962a.e().d()) {
            return -1;
        } else {
            g0.g(this.f51964c, "array");
            throw new as.h();
        }
    }

    private final int N() {
        boolean z10;
        int i10 = this.f51966e;
        boolean z11 = false;
        if (i10 % 2 != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            if (i10 != -1) {
                z11 = this.f51964c.N();
            }
        } else {
            this.f51964c.l(':');
        }
        if (this.f51964c.e()) {
            if (z10) {
                if (this.f51966e == -1) {
                    vt.a aVar = this.f51964c;
                    int i11 = aVar.f51871a;
                    if (z11) {
                        vt.a.x(aVar, "Unexpected leading comma", i11, null, 4, null);
                        throw new as.h();
                    }
                } else {
                    vt.a aVar2 = this.f51964c;
                    boolean z12 = z11;
                    int i12 = aVar2.f51871a;
                    if (!z12) {
                        vt.a.x(aVar2, "Expected comma after the key-value pair", i12, null, 4, null);
                        throw new as.h();
                    }
                }
            }
            int i13 = this.f51966e + 1;
            this.f51966e = i13;
            return i13;
        } else if (!z11 || this.f51962a.e().d()) {
            return -1;
        } else {
            g0.h(this.f51964c, null, 1, null);
            throw new as.h();
        }
    }

    private final int O(SerialDescriptor serialDescriptor) {
        int i10;
        boolean z10;
        boolean N = this.f51964c.N();
        while (true) {
            boolean z11 = true;
            if (this.f51964c.e()) {
                String P = P();
                this.f51964c.l(':');
                i10 = i0.i(serialDescriptor, this.f51962a, P);
                if (i10 != -3) {
                    if (!this.f51968g.g() || !L(serialDescriptor, i10)) {
                        break;
                    }
                    z10 = this.f51964c.N();
                    z11 = false;
                } else {
                    z10 = false;
                }
                if (z11) {
                    N = Q(P);
                } else {
                    N = z10;
                }
            } else if (N && !this.f51962a.e().d()) {
                g0.h(this.f51964c, null, 1, null);
                throw new as.h();
            } else {
                d0 d0Var = this.f51969h;
                if (d0Var != null) {
                    return d0Var.d();
                }
                return -1;
            }
        }
        d0 d0Var2 = this.f51969h;
        if (d0Var2 != null) {
            d0Var2.c(i10);
        }
        return i10;
    }

    private final String P() {
        if (this.f51968g.q()) {
            return this.f51964c.r();
        }
        return this.f51964c.i();
    }

    private final boolean Q(String str) {
        if (!this.f51968g.k() && !S(this.f51967f, str)) {
            this.f51964c.A(str);
        } else {
            this.f51964c.J(this.f51968g.q());
        }
        return this.f51964c.N();
    }

    private final void R(SerialDescriptor serialDescriptor) {
        do {
        } while (o(serialDescriptor) != -1);
    }

    private final boolean S(a aVar, String str) {
        if (aVar == null || !Intrinsics.areEqual(aVar.f51970a, str)) {
            return false;
        }
        aVar.f51970a = null;
        return true;
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public boolean D() {
        boolean z10;
        d0 d0Var = this.f51969h;
        if (d0Var != null) {
            z10 = d0Var.b();
        } else {
            z10 = false;
        }
        if (z10 || vt.a.P(this.f51964c, false, 1, null)) {
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
        long m10 = this.f51964c.m();
        byte b10 = (byte) m10;
        if (m10 == b10) {
            return b10;
        }
        vt.a aVar = this.f51964c;
        vt.a.x(aVar, "Failed to parse byte for input '" + m10 + '\'', 0, null, 6, null);
        throw new as.h();
    }

    @Override // kotlinx.serialization.encoding.Decoder, kotlinx.serialization.encoding.c
    public wt.b a() {
        return this.f51965d;
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public kotlinx.serialization.encoding.c b(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        e1 b10 = f1.b(this.f51962a, descriptor);
        this.f51964c.f51872b.c(descriptor);
        this.f51964c.l(b10.f51895d);
        K();
        int i10 = b.f51971a[b10.ordinal()];
        if (i10 != 1 && i10 != 2 && i10 != 3) {
            if (this.f51963b == b10 && this.f51962a.e().j()) {
                return this;
            }
            return new w0(this.f51962a, b10, this.f51964c, descriptor, this.f51967f);
        }
        return new w0(this.f51962a, b10, this.f51964c, descriptor, this.f51967f);
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.c
    public void c(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        if (this.f51962a.e().k() && descriptor.d() == 0) {
            R(descriptor);
        }
        if (this.f51964c.N() && !this.f51962a.e().d()) {
            g0.g(this.f51964c, "");
            throw new as.h();
        }
        this.f51964c.l(this.f51963b.f51896e);
        this.f51964c.f51872b.b();
    }

    @Override // ut.f
    public final Json d() {
        return this.f51962a;
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public int e(SerialDescriptor enumDescriptor) {
        Intrinsics.checkNotNullParameter(enumDescriptor, "enumDescriptor");
        Json json = this.f51962a;
        String z10 = z();
        return i0.j(enumDescriptor, json, z10, " at path " + this.f51964c.f51872b.a());
    }

    @Override // ut.f
    public JsonElement g() {
        return new q0(this.f51962a.e(), this.f51964c).e();
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public int h() {
        long m10 = this.f51964c.m();
        int i10 = (int) m10;
        if (m10 == i10) {
            return i10;
        }
        vt.a aVar = this.f51964c;
        vt.a.x(aVar, "Failed to parse int for input '" + m10 + '\'', 0, null, 6, null);
        throw new as.h();
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public Void j() {
        return null;
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public long l() {
        return this.f51964c.m();
    }

    @Override // kotlinx.serialization.encoding.c
    public int o(SerialDescriptor descriptor) {
        int N;
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        int i10 = b.f51971a[this.f51963b.ordinal()];
        if (i10 != 2) {
            if (i10 != 4) {
                N = M();
            } else {
                N = O(descriptor);
            }
        } else {
            N = N();
        }
        if (this.f51963b != e1.f51891p) {
            this.f51964c.f51872b.g(N);
        }
        return N;
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public Decoder q(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        if (y0.b(descriptor)) {
            return new b0(this.f51964c, this.f51962a);
        }
        return super.q(descriptor);
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public short s() {
        long m10 = this.f51964c.m();
        short s10 = (short) m10;
        if (m10 == s10) {
            return s10;
        }
        vt.a aVar = this.f51964c;
        vt.a.x(aVar, "Failed to parse short for input '" + m10 + '\'', 0, null, 6, null);
        throw new as.h();
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public float t() {
        vt.a aVar = this.f51964c;
        String q10 = aVar.q();
        try {
            float parseFloat = Float.parseFloat(q10);
            if (!this.f51962a.e().b()) {
                if (!Float.isInfinite(parseFloat) && !Float.isNaN(parseFloat)) {
                    return parseFloat;
                }
                g0.k(this.f51964c, Float.valueOf(parseFloat));
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
        vt.a aVar = this.f51964c;
        String q10 = aVar.q();
        try {
            double parseDouble = Double.parseDouble(q10);
            if (!this.f51962a.e().b()) {
                if (!Double.isInfinite(parseDouble) && !Double.isNaN(parseDouble)) {
                    return parseDouble;
                }
                g0.k(this.f51964c, Double.valueOf(parseDouble));
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
        return this.f51964c.g();
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public char x() {
        String q10 = this.f51964c.q();
        if (q10.length() == 1) {
            return q10.charAt(0);
        }
        vt.a aVar = this.f51964c;
        vt.a.x(aVar, "Expected single char, but got '" + q10 + '\'', 0, null, 6, null);
        throw new as.h();
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.c
    public Object y(SerialDescriptor descriptor, int i10, DeserializationStrategy deserializer, Object obj) {
        boolean z10;
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        Intrinsics.checkNotNullParameter(deserializer, "deserializer");
        if (this.f51963b == e1.f51891p && (i10 & 1) == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            this.f51964c.f51872b.d();
        }
        Object y10 = super.y(descriptor, i10, deserializer, obj);
        if (z10) {
            this.f51964c.f51872b.f(y10);
        }
        return y10;
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public String z() {
        if (this.f51968g.q()) {
            return this.f51964c.r();
        }
        return this.f51964c.o();
    }
}
