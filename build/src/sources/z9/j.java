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
    private String f56036s;

    /* renamed from: t  reason: collision with root package name */
    private String f56037t;

    /* renamed from: u  reason: collision with root package name */
    private Object f56038u;

    /* renamed from: v  reason: collision with root package name */
    private Object f56039v;

    /* renamed from: w  reason: collision with root package name */
    private Object f56040w;

    /* renamed from: x  reason: collision with root package name */
    private long f56041x;

    /* renamed from: y  reason: collision with root package name */
    private long f56042y;

    /* renamed from: z  reason: collision with root package name */
    private long f56043z;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public j(k infra) {
        super(infra);
        Intrinsics.checkNotNullParameter(infra, "infra");
        this.f56041x = -1L;
        this.f56042y = -1L;
        this.f56043z = -1L;
        this.A = -1L;
        this.B = -1L;
        this.C = -1L;
        this.E = -1;
        this.F = -1;
        this.H = e.f55981o;
        this.I = n.f56053o;
        this.J = -1L;
        this.K = -1L;
    }

    public final void A(long j10) {
        this.f56043z = j10;
    }

    public final void B(String str) {
        this.f56036s = str;
    }

    public final void C(long j10) {
        this.f56042y = j10;
    }

    public final void D(long j10) {
        this.f56041x = j10;
    }

    public final void E(Throwable th2) {
        this.G = th2;
    }

    public final void F(b.a aVar) {
        this.L = aVar;
    }

    public final void G(Object obj) {
        this.f56040w = obj;
    }

    public final void H(e eVar) {
        Intrinsics.checkNotNullParameter(eVar, "<set-?>");
        this.H = eVar;
    }

    public final void I(Object obj) {
        this.f56038u = obj;
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
        this.f56037t = str;
    }

    public final void Q(long j10) {
        this.J = j10;
    }

    public final void R(boolean z10) {
        n nVar;
        if (z10) {
            nVar = n.f56054p;
        } else {
            nVar = n.f56055q;
        }
        this.I = nVar;
    }

    public final f S() {
        return new f(j(), this.f56036s, this.f56037t, this.f56038u, this.f56039v, this.f56040w, this.f56041x, this.f56042y, this.f56043z, this.A, this.B, this.C, f(), n(), this.D, this.E, this.F, this.G, this.I, this.J, this.K, null, this.L, a(), o(), c(), d(), b(), r(), q(), l(), p(), CollectionsKt.h1(k()), m(), h(), i(), g(), e());
    }

    public final void w() {
        this.f56037t = null;
        this.f56038u = null;
        this.f56039v = null;
        this.f56040w = null;
        this.D = false;
        this.E = -1;
        this.F = -1;
        this.G = null;
        this.H = e.f55981o;
        this.I = n.f56053o;
        this.L = null;
        x();
        s();
    }

    public final void x() {
        this.B = -1L;
        this.C = -1L;
        this.f56041x = -1L;
        this.f56043z = -1L;
        this.A = -1L;
        this.J = -1L;
        this.K = -1L;
        k().clear();
        u(false);
        t(null);
        v(null);
    }

    public final void y(Object obj) {
        this.f56039v = obj;
    }

    public final void z(long j10) {
        this.A = j10;
    }
}
