package ct;

import com.withpersona.sdk2.inquiry.network.dto.InquiryField;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.DeserializationStrategy;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.json.Json;
import kotlinx.serialization.json.JsonElement;
import zs.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class w0 extends kotlinx.serialization.encoding.a implements bt.f {

    /* renamed from: a  reason: collision with root package name */
    private final Json f21412a;

    /* renamed from: b  reason: collision with root package name */
    private final e1 f21413b;

    /* renamed from: c  reason: collision with root package name */
    public final ct.a f21414c;

    /* renamed from: d  reason: collision with root package name */
    private final dt.b f21415d;

    /* renamed from: e  reason: collision with root package name */
    private int f21416e;

    /* renamed from: f  reason: collision with root package name */
    private a f21417f;

    /* renamed from: g  reason: collision with root package name */
    private final bt.d f21418g;

    /* renamed from: h  reason: collision with root package name */
    private final d0 f21419h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public String f21420a;

        public a(String str) {
            this.f21420a = str;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f21421a;

        static {
            int[] iArr = new int[e1.values().length];
            try {
                iArr[e1.f21340o.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[e1.f21341p.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[e1.f21342q.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[e1.f21339i.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            f21421a = iArr;
        }
    }

    public w0(Json json, e1 mode, ct.a lexer, SerialDescriptor descriptor, a aVar) {
        d0 d0Var;
        Intrinsics.checkNotNullParameter(json, "json");
        Intrinsics.checkNotNullParameter(mode, "mode");
        Intrinsics.checkNotNullParameter(lexer, "lexer");
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        this.f21412a = json;
        this.f21413b = mode;
        this.f21414c = lexer;
        this.f21415d = json.a();
        this.f21416e = -1;
        this.f21417f = aVar;
        bt.d e10 = json.e();
        this.f21418g = e10;
        if (e10.j()) {
            d0Var = null;
        } else {
            d0Var = new d0(descriptor);
        }
        this.f21419h = d0Var;
    }

    private final void K() {
        if (this.f21414c.G() != 4) {
            return;
        }
        ct.a.x(this.f21414c, "Unexpected leading comma", 0, null, 6, null);
        throw new ir.h();
    }

    private final boolean L(SerialDescriptor serialDescriptor, int i10) {
        String H;
        boolean z10;
        Json json = this.f21412a;
        boolean i11 = serialDescriptor.i(i10);
        SerialDescriptor g10 = serialDescriptor.g(i10);
        if (i11 && !g10.b() && this.f21414c.O(true)) {
            return true;
        }
        if (!Intrinsics.areEqual(g10.getKind(), k.b.f56101a) || ((g10.b() && this.f21414c.O(false)) || (H = this.f21414c.H(this.f21418g.q())) == null)) {
            return false;
        }
        int i12 = i0.i(g10, json, H);
        if (!json.e().j() && g10.b()) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (i12 == -3 && (i11 || z10)) {
            this.f21414c.o();
            return true;
        }
        return false;
    }

    private final int M() {
        boolean N = this.f21414c.N();
        if (this.f21414c.e()) {
            int i10 = this.f21416e;
            if (i10 != -1 && !N) {
                ct.a.x(this.f21414c, "Expected end of the array or comma", 0, null, 6, null);
                throw new ir.h();
            }
            int i11 = i10 + 1;
            this.f21416e = i11;
            return i11;
        } else if (!N || this.f21412a.e().d()) {
            return -1;
        } else {
            g0.g(this.f21414c, "array");
            throw new ir.h();
        }
    }

    private final int N() {
        boolean z10;
        int i10 = this.f21416e;
        boolean z11 = false;
        if (i10 % 2 != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            if (i10 != -1) {
                z11 = this.f21414c.N();
            }
        } else {
            this.f21414c.l(':');
        }
        if (this.f21414c.e()) {
            if (z10) {
                if (this.f21416e == -1) {
                    ct.a aVar = this.f21414c;
                    int i11 = aVar.f21321a;
                    if (z11) {
                        ct.a.x(aVar, "Unexpected leading comma", i11, null, 4, null);
                        throw new ir.h();
                    }
                } else {
                    ct.a aVar2 = this.f21414c;
                    boolean z12 = z11;
                    int i12 = aVar2.f21321a;
                    if (!z12) {
                        ct.a.x(aVar2, "Expected comma after the key-value pair", i12, null, 4, null);
                        throw new ir.h();
                    }
                }
            }
            int i13 = this.f21416e + 1;
            this.f21416e = i13;
            return i13;
        } else if (!z11 || this.f21412a.e().d()) {
            return -1;
        } else {
            g0.h(this.f21414c, null, 1, null);
            throw new ir.h();
        }
    }

    private final int O(SerialDescriptor serialDescriptor) {
        int i10;
        boolean z10;
        boolean N = this.f21414c.N();
        while (true) {
            boolean z11 = true;
            if (this.f21414c.e()) {
                String P = P();
                this.f21414c.l(':');
                i10 = i0.i(serialDescriptor, this.f21412a, P);
                if (i10 != -3) {
                    if (!this.f21418g.g() || !L(serialDescriptor, i10)) {
                        break;
                    }
                    z10 = this.f21414c.N();
                    z11 = false;
                } else {
                    z10 = false;
                }
                if (z11) {
                    N = Q(P);
                } else {
                    N = z10;
                }
            } else if (N && !this.f21412a.e().d()) {
                g0.h(this.f21414c, null, 1, null);
                throw new ir.h();
            } else {
                d0 d0Var = this.f21419h;
                if (d0Var != null) {
                    return d0Var.d();
                }
                return -1;
            }
        }
        d0 d0Var2 = this.f21419h;
        if (d0Var2 != null) {
            d0Var2.c(i10);
        }
        return i10;
    }

    private final String P() {
        if (this.f21418g.q()) {
            return this.f21414c.r();
        }
        return this.f21414c.i();
    }

    private final boolean Q(String str) {
        if (!this.f21418g.k() && !S(this.f21417f, str)) {
            this.f21414c.A(str);
        } else {
            this.f21414c.J(this.f21418g.q());
        }
        return this.f21414c.N();
    }

    private final void R(SerialDescriptor serialDescriptor) {
        do {
        } while (o(serialDescriptor) != -1);
    }

    private final boolean S(a aVar, String str) {
        if (aVar == null || !Intrinsics.areEqual(aVar.f21420a, str)) {
            return false;
        }
        aVar.f21420a = null;
        return true;
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public boolean D() {
        boolean z10;
        d0 d0Var = this.f21419h;
        if (d0Var != null) {
            z10 = d0Var.b();
        } else {
            z10 = false;
        }
        if (z10 || ct.a.P(this.f21414c, false, 1, null)) {
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
        throw new UnsupportedOperationException("Method not decompiled: ct.w0.G(kotlinx.serialization.DeserializationStrategy):java.lang.Object");
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public byte H() {
        long m10 = this.f21414c.m();
        byte b10 = (byte) m10;
        if (m10 == b10) {
            return b10;
        }
        ct.a aVar = this.f21414c;
        ct.a.x(aVar, "Failed to parse byte for input '" + m10 + '\'', 0, null, 6, null);
        throw new ir.h();
    }

    @Override // kotlinx.serialization.encoding.Decoder, kotlinx.serialization.encoding.c
    public dt.b a() {
        return this.f21415d;
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public kotlinx.serialization.encoding.c b(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        e1 b10 = f1.b(this.f21412a, descriptor);
        this.f21414c.f21322b.c(descriptor);
        this.f21414c.l(b10.f21345d);
        K();
        int i10 = b.f21421a[b10.ordinal()];
        if (i10 != 1 && i10 != 2 && i10 != 3) {
            if (this.f21413b == b10 && this.f21412a.e().j()) {
                return this;
            }
            return new w0(this.f21412a, b10, this.f21414c, descriptor, this.f21417f);
        }
        return new w0(this.f21412a, b10, this.f21414c, descriptor, this.f21417f);
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.c
    public void c(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        if (this.f21412a.e().k() && descriptor.d() == 0) {
            R(descriptor);
        }
        if (this.f21414c.N() && !this.f21412a.e().d()) {
            g0.g(this.f21414c, "");
            throw new ir.h();
        }
        this.f21414c.l(this.f21413b.f21346e);
        this.f21414c.f21322b.b();
    }

    @Override // bt.f
    public final Json d() {
        return this.f21412a;
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public int e(SerialDescriptor enumDescriptor) {
        Intrinsics.checkNotNullParameter(enumDescriptor, "enumDescriptor");
        Json json = this.f21412a;
        String z10 = z();
        return i0.j(enumDescriptor, json, z10, " at path " + this.f21414c.f21322b.a());
    }

    @Override // bt.f
    public JsonElement g() {
        return new q0(this.f21412a.e(), this.f21414c).e();
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public int h() {
        long m10 = this.f21414c.m();
        int i10 = (int) m10;
        if (m10 == i10) {
            return i10;
        }
        ct.a aVar = this.f21414c;
        ct.a.x(aVar, "Failed to parse int for input '" + m10 + '\'', 0, null, 6, null);
        throw new ir.h();
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public Void j() {
        return null;
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public long l() {
        return this.f21414c.m();
    }

    @Override // kotlinx.serialization.encoding.c
    public int o(SerialDescriptor descriptor) {
        int N;
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        int i10 = b.f21421a[this.f21413b.ordinal()];
        if (i10 != 2) {
            if (i10 != 4) {
                N = M();
            } else {
                N = O(descriptor);
            }
        } else {
            N = N();
        }
        if (this.f21413b != e1.f21341p) {
            this.f21414c.f21322b.g(N);
        }
        return N;
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public Decoder q(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        if (y0.b(descriptor)) {
            return new b0(this.f21414c, this.f21412a);
        }
        return super.q(descriptor);
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public short s() {
        long m10 = this.f21414c.m();
        short s10 = (short) m10;
        if (m10 == s10) {
            return s10;
        }
        ct.a aVar = this.f21414c;
        ct.a.x(aVar, "Failed to parse short for input '" + m10 + '\'', 0, null, 6, null);
        throw new ir.h();
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public float t() {
        ct.a aVar = this.f21414c;
        String q10 = aVar.q();
        try {
            float parseFloat = Float.parseFloat(q10);
            if (!this.f21412a.e().b()) {
                if (!Float.isInfinite(parseFloat) && !Float.isNaN(parseFloat)) {
                    return parseFloat;
                }
                g0.k(this.f21414c, Float.valueOf(parseFloat));
                throw new ir.h();
            }
            return parseFloat;
        } catch (IllegalArgumentException unused) {
            ct.a.x(aVar, "Failed to parse type '" + InquiryField.FloatField.TYPE + "' for input '" + q10 + '\'', 0, null, 6, null);
            throw new ir.h();
        }
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public double v() {
        ct.a aVar = this.f21414c;
        String q10 = aVar.q();
        try {
            double parseDouble = Double.parseDouble(q10);
            if (!this.f21412a.e().b()) {
                if (!Double.isInfinite(parseDouble) && !Double.isNaN(parseDouble)) {
                    return parseDouble;
                }
                g0.k(this.f21414c, Double.valueOf(parseDouble));
                throw new ir.h();
            }
            return parseDouble;
        } catch (IllegalArgumentException unused) {
            ct.a.x(aVar, "Failed to parse type 'double' for input '" + q10 + '\'', 0, null, 6, null);
            throw new ir.h();
        }
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public boolean w() {
        return this.f21414c.g();
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public char x() {
        String q10 = this.f21414c.q();
        if (q10.length() == 1) {
            return q10.charAt(0);
        }
        ct.a aVar = this.f21414c;
        ct.a.x(aVar, "Expected single char, but got '" + q10 + '\'', 0, null, 6, null);
        throw new ir.h();
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.c
    public Object y(SerialDescriptor descriptor, int i10, DeserializationStrategy deserializer, Object obj) {
        boolean z10;
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        Intrinsics.checkNotNullParameter(deserializer, "deserializer");
        if (this.f21413b == e1.f21341p && (i10 & 1) == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            this.f21414c.f21322b.d();
        }
        Object y10 = super.y(descriptor, i10, deserializer, obj);
        if (z10) {
            this.f21414c.f21322b.f(y10);
        }
        return y10;
    }

    @Override // kotlinx.serialization.encoding.a, kotlinx.serialization.encoding.Decoder
    public String z() {
        if (this.f21418g.q()) {
            return this.f21414c.r();
        }
        return this.f21414c.o();
    }
}
