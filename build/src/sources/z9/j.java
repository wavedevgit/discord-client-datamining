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
    private String f55257s;

    /* renamed from: t  reason: collision with root package name */
    private String f55258t;

    /* renamed from: u  reason: collision with root package name */
    private Object f55259u;

    /* renamed from: v  reason: collision with root package name */
    private Object f55260v;

    /* renamed from: w  reason: collision with root package name */
    private Object f55261w;

    /* renamed from: x  reason: collision with root package name */
    private long f55262x;

    /* renamed from: y  reason: collision with root package name */
    private long f55263y;

    /* renamed from: z  reason: collision with root package name */
    private long f55264z;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public j(k infra) {
        super(infra);
        Intrinsics.checkNotNullParameter(infra, "infra");
        this.f55262x = -1L;
        this.f55263y = -1L;
        this.f55264z = -1L;
        this.A = -1L;
        this.B = -1L;
        this.C = -1L;
        this.E = -1;
        this.F = -1;
        this.H = e.f55202o;
        this.I = n.f55274o;
        this.J = -1L;
        this.K = -1L;
    }

    public final void A(long j10) {
        this.f55264z = j10;
    }

    public final void B(String str) {
        this.f55257s = str;
    }

    public final void C(long j10) {
        this.f55263y = j10;
    }

    public final void D(long j10) {
        this.f55262x = j10;
    }

    public final void E(Throwable th2) {
        this.G = th2;
    }

    public final void F(b.a aVar) {
        this.L = aVar;
    }

    public final void G(Object obj) {
        this.f55261w = obj;
    }

    public final void H(e eVar) {
        Intrinsics.checkNotNullParameter(eVar, "<set-?>");
        this.H = eVar;
    }

    public final void I(Object obj) {
        this.f55259u = obj;
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
        this.f55258t = str;
    }

    public final void Q(long j10) {
        this.J = j10;
    }

    public final void R(boolean z10) {
        n nVar;
        if (z10) {
            nVar = n.f55275p;
        } else {
            nVar = n.f55276q;
        }
        this.I = nVar;
    }

    public final f S() {
        return new f(j(), this.f55257s, this.f55258t, this.f55259u, this.f55260v, this.f55261w, this.f55262x, this.f55263y, this.f55264z, this.A, this.B, this.C, f(), n(), this.D, this.E, this.F, this.G, this.I, this.J, this.K, null, this.L, a(), o(), c(), d(), b(), r(), q(), l(), p(), CollectionsKt.h1(k()), m(), h(), i(), g(), e());
    }

    public final void w() {
        this.f55258t = null;
        this.f55259u = null;
        this.f55260v = null;
        this.f55261w = null;
        this.D = false;
        this.E = -1;
        this.F = -1;
        this.G = null;
        this.H = e.f55202o;
        this.I = n.f55274o;
        this.L = null;
        x();
        s();
    }

    public final void x() {
        this.B = -1L;
        this.C = -1L;
        this.f55262x = -1L;
        this.f55264z = -1L;
        this.A = -1L;
        this.J = -1L;
        this.K = -1L;
        k().clear();
        u(false);
        t(null);
        v(null);
    }

    public final void y(Object obj) {
        this.f55260v = obj;
    }

    public final void z(long j10) {
        this.A = j10;
    }
}
