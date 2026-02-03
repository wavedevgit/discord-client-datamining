package z9;

import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import z9.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class j extends h {
    private long A;
    private long B;
    private long C;
    private boolean D;
    private int E;
    private int F;
    private Throwable G;
    private e H;
    private n I;
    private long J;
    private long K;
    private b.a L;

    /* renamed from: s  reason: collision with root package name */
    private String f55533s;

    /* renamed from: t  reason: collision with root package name */
    private String f55534t;

    /* renamed from: u  reason: collision with root package name */
    private Object f55535u;

    /* renamed from: v  reason: collision with root package name */
    private Object f55536v;

    /* renamed from: w  reason: collision with root package name */
    private Object f55537w;

    /* renamed from: x  reason: collision with root package name */
    private long f55538x;

    /* renamed from: y  reason: collision with root package name */
    private long f55539y;

    /* renamed from: z  reason: collision with root package name */
    private long f55540z;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public j(k infra) {
        super(infra);
        Intrinsics.checkNotNullParameter(infra, "infra");
        this.f55538x = -1L;
        this.f55539y = -1L;
        this.f55540z = -1L;
        this.A = -1L;
        this.B = -1L;
        this.C = -1L;
        this.E = -1;
        this.F = -1;
        this.H = e.f55478o;
        this.I = n.f55550o;
        this.J = -1L;
        this.K = -1L;
    }

    public final void A(long j10) {
        this.f55540z = j10;
    }

    public final void B(String str) {
        this.f55533s = str;
    }

    public final void C(long j10) {
        this.f55539y = j10;
    }

    public final void D(long j10) {
        this.f55538x = j10;
    }

    public final void E(Throwable th2) {
        this.G = th2;
    }

    public final void F(b.a aVar) {
        this.L = aVar;
    }

    public final void G(Object obj) {
        this.f55537w = obj;
    }

    public final void H(e eVar) {
        Intrinsics.checkNotNullParameter(eVar, "<set-?>");
        this.H = eVar;
    }

    public final void I(Object obj) {
        this.f55535u = obj;
    }

    public final void J(long j10) {
        this.C = j10;
    }

    public final void K(long j10) {
        this.B = j10;
    }

    public final void L(long j10) {
        this.K = j10;
    }

    public final void M(int i10) {
        this.F = i10;
    }

    public final void N(int i10) {
        this.E = i10;
    }

    public final void O(boolean z10) {
        this.D = z10;
    }

    public final void P(String str) {
        this.f55534t = str;
    }

    public final void Q(long j10) {
        this.J = j10;
    }

    public final void R(boolean z10) {
        n nVar;
        if (z10) {
            nVar = n.f55551p;
        } else {
            nVar = n.f55552q;
        }
        this.I = nVar;
    }

    public final f S() {
        return new f(j(), this.f55533s, this.f55534t, this.f55535u, this.f55536v, this.f55537w, this.f55538x, this.f55539y, this.f55540z, this.A, this.B, this.C, f(), n(), this.D, this.E, this.F, this.G, this.I, this.J, this.K, null, this.L, a(), o(), c(), d(), b(), r(), q(), l(), p(), CollectionsKt.h1(k()), m(), h(), i(), g(), e());
    }

    public final void w() {
        this.f55534t = null;
        this.f55535u = null;
        this.f55536v = null;
        this.f55537w = null;
        this.D = false;
        this.E = -1;
        this.F = -1;
        this.G = null;
        this.H = e.f55478o;
        this.I = n.f55550o;
        this.L = null;
        x();
        s();
    }

    public final void x() {
        this.B = -1L;
        this.C = -1L;
        this.f55538x = -1L;
        this.f55540z = -1L;
        this.A = -1L;
        this.J = -1L;
        this.K = -1L;
        k().clear();
        u(false);
        t(null);
        v(null);
    }

    public final void y(Object obj) {
        this.f55536v = obj;
    }

    public final void z(long j10) {
        this.A = j10;
    }
}
