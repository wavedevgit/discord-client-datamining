package okhttp3;

import cu.j;
import cu.l;
import java.net.Proxy;
import java.net.ProxySelector;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Random;
import java.util.concurrent.TimeUnit;
import javax.net.SocketFactory;
import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.SSLSocketFactory;
import javax.net.ssl.X509TrustManager;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import mu.h;
import okhttp3.Call;
import okhttp3.e;
import pu.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class OkHttpClient implements Cloneable, Call.Factory {
    public static final a P = new a(null);
    private static final List Q = du.e.w(j.HTTP_2, j.HTTP_1_1);
    private static final List R = du.e.w(d.f42286i, d.f42288k);
    private final SocketFactory A;
    private final SSLSocketFactory B;
    private final X509TrustManager C;
    private final List D;
    private final List E;
    private final HostnameVerifier F;
    private final cu.c G;
    private final pu.c H;
    private final int I;
    private final int J;
    private final int K;
    private final int L;
    private final int M;
    private final long N;
    private final hu.h O;

    /* renamed from: d  reason: collision with root package name */
    private final Dispatcher f42074d;

    /* renamed from: e  reason: collision with root package name */
    private final cu.f f42075e;

    /* renamed from: i  reason: collision with root package name */
    private final List f42076i;

    /* renamed from: o  reason: collision with root package name */
    private final List f42077o;

    /* renamed from: p  reason: collision with root package name */
    private final e.c f42078p;

    /* renamed from: q  reason: collision with root package name */
    private final boolean f42079q;

    /* renamed from: r  reason: collision with root package name */
    private final cu.a f42080r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f42081s;

    /* renamed from: t  reason: collision with root package name */
    private final boolean f42082t;

    /* renamed from: u  reason: collision with root package name */
    private final CookieJar f42083u;

    /* renamed from: v  reason: collision with root package name */
    private final b f42084v;

    /* renamed from: w  reason: collision with root package name */
    private final cu.h f42085w;

    /* renamed from: x  reason: collision with root package name */
    private final Proxy f42086x;

    /* renamed from: y  reason: collision with root package name */
    private final ProxySelector f42087y;

    /* renamed from: z  reason: collision with root package name */
    private final cu.a f42088z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final List a() {
            return OkHttpClient.R;
        }

        public final List b() {
            return OkHttpClient.Q;
        }

        private a() {
        }
    }

    public OkHttpClient(Builder builder) {
        ProxySelector H;
        Intrinsics.checkNotNullParameter(builder, "builder");
        this.f42074d = builder.u();
        this.f42075e = builder.r();
        this.f42076i = du.e.V(builder.A());
        this.f42077o = du.e.V(builder.C());
        this.f42078p = builder.w();
        this.f42079q = builder.J();
        this.f42080r = builder.l();
        this.f42081s = builder.x();
        this.f42082t = builder.y();
        this.f42083u = builder.t();
        this.f42084v = builder.m();
        this.f42085w = builder.v();
        this.f42086x = builder.F();
        if (builder.F() != null) {
            H = ou.a.f42743a;
        } else {
            H = builder.H();
            H = H == null ? ProxySelector.getDefault() : H;
            if (H == null) {
                H = ou.a.f42743a;
            }
        }
        this.f42087y = H;
        this.f42088z = builder.G();
        this.A = builder.L();
        List s10 = builder.s();
        this.D = s10;
        this.E = builder.E();
        this.F = builder.z();
        this.I = builder.n();
        this.J = builder.q();
        this.K = builder.I();
        this.L = builder.N();
        this.M = builder.D();
        this.N = builder.B();
        hu.h K = builder.K();
        this.O = K == null ? new hu.h() : K;
        List<d> list = s10;
        if (!(list instanceof Collection) || !list.isEmpty()) {
            for (d dVar : list) {
                if (dVar.f()) {
                    if (builder.M() != null) {
                        this.B = builder.M();
                        pu.c o10 = builder.o();
                        Intrinsics.checkNotNull(o10);
                        this.H = o10;
                        X509TrustManager O = builder.O();
                        Intrinsics.checkNotNull(O);
                        this.C = O;
                        cu.c p10 = builder.p();
                        Intrinsics.checkNotNull(o10);
                        this.G = p10.e(o10);
                    } else {
                        h.a aVar = mu.h.f37655a;
                        X509TrustManager p11 = aVar.g().p();
                        this.C = p11;
                        mu.h g10 = aVar.g();
                        Intrinsics.checkNotNull(p11);
                        this.B = g10.o(p11);
                        c.a aVar2 = pu.c.f44557a;
                        Intrinsics.checkNotNull(p11);
                        pu.c a10 = aVar2.a(p11);
                        this.H = a10;
                        cu.c p12 = builder.p();
                        Intrinsics.checkNotNull(a10);
                        this.G = p12.e(a10);
                    }
                    P();
                }
            }
        }
        this.B = null;
        this.H = null;
        this.C = null;
        this.G = cu.c.f20260d;
        P();
    }

    private final void P() {
        List list = this.f42076i;
        Intrinsics.checkNotNull(list, "null cannot be cast to non-null type kotlin.collections.List<okhttp3.Interceptor?>");
        if (!list.contains(null)) {
            List list2 = this.f42077o;
            Intrinsics.checkNotNull(list2, "null cannot be cast to non-null type kotlin.collections.List<okhttp3.Interceptor?>");
            if (!list2.contains(null)) {
                List<d> list3 = this.D;
                if (!(list3 instanceof Collection) || !list3.isEmpty()) {
                    for (d dVar : list3) {
                        if (dVar.f()) {
                            if (this.B != null) {
                                if (this.H != null) {
                                    if (this.C == null) {
                                        throw new IllegalStateException("x509TrustManager == null");
                                    }
                                    return;
                                }
                                throw new IllegalStateException("certificateChainCleaner == null");
                            }
                            throw new IllegalStateException("sslSocketFactory == null");
                        }
                    }
                }
                if (this.B == null) {
                    if (this.H == null) {
                        if (this.C == null) {
                            if (Intrinsics.areEqual(this.G, cu.c.f20260d)) {
                                return;
                            }
                            throw new IllegalStateException("Check failed.");
                        }
                        throw new IllegalStateException("Check failed.");
                    }
                    throw new IllegalStateException("Check failed.");
                }
                throw new IllegalStateException("Check failed.");
            }
            throw new IllegalStateException(("Null network interceptor: " + this.f42077o).toString());
        }
        throw new IllegalStateException(("Null interceptor: " + this.f42076i).toString());
    }

    public final List A() {
        return this.f42076i;
    }

    public final long B() {
        return this.N;
    }

    public final List D() {
        return this.f42077o;
    }

    public Builder E() {
        return new Builder(this);
    }

    public WebSocket F(Request request, l listener) {
        Intrinsics.checkNotNullParameter(request, "request");
        Intrinsics.checkNotNullParameter(listener, "listener");
        qu.d dVar = new qu.d(gu.e.f24820i, request, listener, new Random(), this.M, null, this.N);
        dVar.o(this);
        return dVar;
    }

    public final int G() {
        return this.M;
    }

    public final List H() {
        return this.E;
    }

    public final Proxy I() {
        return this.f42086x;
    }

    public final cu.a J() {
        return this.f42088z;
    }

    public final ProxySelector K() {
        return this.f42087y;
    }

    public final int L() {
        return this.K;
    }

    public final boolean M() {
        return this.f42079q;
    }

    public final SocketFactory N() {
        return this.A;
    }

    public final SSLSocketFactory O() {
        SSLSocketFactory sSLSocketFactory = this.B;
        if (sSLSocketFactory != null) {
            return sSLSocketFactory;
        }
        throw new IllegalStateException("CLEARTEXT-only client");
    }

    public final int R() {
        return this.L;
    }

    public final X509TrustManager S() {
        return this.C;
    }

    @Override // okhttp3.Call.Factory
    public Call a(Request request) {
        Intrinsics.checkNotNullParameter(request, "request");
        return new hu.e(this, request, false);
    }

    public final int b() {
        return this.I;
    }

    public final CookieJar c() {
        return this.f42083u;
    }

    public Object clone() {
        return super.clone();
    }

    public final Dispatcher d() {
        return this.f42074d;
    }

    public final cu.a i() {
        return this.f42080r;
    }

    public final b j() {
        return this.f42084v;
    }

    public final int k() {
        return this.I;
    }

    public final pu.c l() {
        return this.H;
    }

    public final cu.c m() {
        return this.G;
    }

    public final int n() {
        return this.J;
    }

    public final cu.f o() {
        return this.f42075e;
    }

    public final List q() {
        return this.D;
    }

    public final CookieJar r() {
        return this.f42083u;
    }

    public final Dispatcher t() {
        return this.f42074d;
    }

    public final cu.h u() {
        return this.f42085w;
    }

    public final e.c v() {
        return this.f42078p;
    }

    public final boolean w() {
        return this.f42081s;
    }

    public final boolean x() {
        return this.f42082t;
    }

    public final hu.h y() {
        return this.O;
    }

    public final HostnameVerifier z() {
        return this.F;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Builder {
        private int A;
        private int B;
        private long C;
        private hu.h D;

        /* renamed from: a  reason: collision with root package name */
        private Dispatcher f42089a;

        /* renamed from: b  reason: collision with root package name */
        private cu.f f42090b;

        /* renamed from: c  reason: collision with root package name */
        private final List f42091c;

        /* renamed from: d  reason: collision with root package name */
        private final List f42092d;

        /* renamed from: e  reason: collision with root package name */
        private e.c f42093e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f42094f;

        /* renamed from: g  reason: collision with root package name */
        private cu.a f42095g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f42096h;

        /* renamed from: i  reason: collision with root package name */
        private boolean f42097i;

        /* renamed from: j  reason: collision with root package name */
        private CookieJar f42098j;

        /* renamed from: k  reason: collision with root package name */
        private b f42099k;

        /* renamed from: l  reason: collision with root package name */
        private cu.h f42100l;

        /* renamed from: m  reason: collision with root package name */
        private Proxy f42101m;

        /* renamed from: n  reason: collision with root package name */
        private ProxySelector f42102n;

        /* renamed from: o  reason: collision with root package name */
        private cu.a f42103o;

        /* renamed from: p  reason: collision with root package name */
        private SocketFactory f42104p;

        /* renamed from: q  reason: collision with root package name */
        private SSLSocketFactory f42105q;

        /* renamed from: r  reason: collision with root package name */
        private X509TrustManager f42106r;

        /* renamed from: s  reason: collision with root package name */
        private List f42107s;

        /* renamed from: t  reason: collision with root package name */
        private List f42108t;

        /* renamed from: u  reason: collision with root package name */
        private HostnameVerifier f42109u;

        /* renamed from: v  reason: collision with root package name */
        private cu.c f42110v;

        /* renamed from: w  reason: collision with root package name */
        private pu.c f42111w;

        /* renamed from: x  reason: collision with root package name */
        private int f42112x;

        /* renamed from: y  reason: collision with root package name */
        private int f42113y;

        /* renamed from: z  reason: collision with root package name */
        private int f42114z;

        public Builder() {
            this.f42089a = new Dispatcher();
            this.f42090b = new cu.f();
            this.f42091c = new ArrayList();
            this.f42092d = new ArrayList();
            this.f42093e = du.e.g(e.f42298b);
            this.f42094f = true;
            cu.a aVar = cu.a.f20256b;
            this.f42095g = aVar;
            this.f42096h = true;
            this.f42097i = true;
            this.f42098j = CookieJar.f42014b;
            this.f42100l = cu.h.f20272b;
            this.f42103o = aVar;
            SocketFactory socketFactory = SocketFactory.getDefault();
            Intrinsics.checkNotNullExpressionValue(socketFactory, "getDefault()");
            this.f42104p = socketFactory;
            a aVar2 = OkHttpClient.P;
            this.f42107s = aVar2.a();
            this.f42108t = aVar2.b();
            this.f42109u = pu.d.f44558a;
            this.f42110v = cu.c.f20260d;
            this.f42113y = 10000;
            this.f42114z = 10000;
            this.A = 10000;
            this.C = 1024L;
        }

        public final List A() {
            return this.f42091c;
        }

        public final long B() {
            return this.C;
        }

        public final List C() {
            return this.f42092d;
        }

        public final int D() {
            return this.B;
        }

        public final List E() {
            return this.f42108t;
        }

        public final Proxy F() {
            return this.f42101m;
        }

        public final cu.a G() {
            return this.f42103o;
        }

        public final ProxySelector H() {
            return this.f42102n;
        }

        public final int I() {
            return this.f42114z;
        }

        public final boolean J() {
            return this.f42094f;
        }

        public final hu.h K() {
            return this.D;
        }

        public final SocketFactory L() {
            return this.f42104p;
        }

        public final SSLSocketFactory M() {
            return this.f42105q;
        }

        public final int N() {
            return this.A;
        }

        public final X509TrustManager O() {
            return this.f42106r;
        }

        public final Builder P(List protocols) {
            Intrinsics.checkNotNullParameter(protocols, "protocols");
            List j12 = CollectionsKt.j1(protocols);
            j jVar = j.H2_PRIOR_KNOWLEDGE;
            if (!j12.contains(jVar) && !j12.contains(j.HTTP_1_1)) {
                throw new IllegalArgumentException(("protocols must contain h2_prior_knowledge or http/1.1: " + j12).toString());
            } else if (j12.contains(jVar) && j12.size() > 1) {
                throw new IllegalArgumentException(("protocols containing h2_prior_knowledge cannot use other protocols: " + j12).toString());
            } else if (!j12.contains(j.HTTP_1_0)) {
                Intrinsics.checkNotNull(j12, "null cannot be cast to non-null type kotlin.collections.List<okhttp3.Protocol?>");
                if (!j12.contains(null)) {
                    j12.remove(j.SPDY_3);
                    if (!Intrinsics.areEqual(j12, this.f42108t)) {
                        this.D = null;
                    }
                    List unmodifiableList = Collections.unmodifiableList(j12);
                    Intrinsics.checkNotNullExpressionValue(unmodifiableList, "unmodifiableList(protocolsCopy)");
                    this.f42108t = unmodifiableList;
                    return this;
                }
                throw new IllegalArgumentException("protocols must not contain null");
            } else {
                throw new IllegalArgumentException(("protocols must not contain http/1.0: " + j12).toString());
            }
        }

        public final Builder Q(long j10, TimeUnit unit) {
            Intrinsics.checkNotNullParameter(unit, "unit");
            this.f42114z = du.e.k("timeout", j10, unit);
            return this;
        }

        public final Builder R(long j10, TimeUnit unit) {
            Intrinsics.checkNotNullParameter(unit, "unit");
            this.A = du.e.k("timeout", j10, unit);
            return this;
        }

        public final Builder a(Interceptor interceptor) {
            Intrinsics.checkNotNullParameter(interceptor, "interceptor");
            this.f42091c.add(interceptor);
            return this;
        }

        public final Builder b(Interceptor interceptor) {
            Intrinsics.checkNotNullParameter(interceptor, "interceptor");
            this.f42092d.add(interceptor);
            return this;
        }

        public final OkHttpClient c() {
            return new OkHttpClient(this);
        }

        public final Builder d(b bVar) {
            this.f42099k = bVar;
            return this;
        }

        public final Builder e(long j10, TimeUnit unit) {
            Intrinsics.checkNotNullParameter(unit, "unit");
            this.f42112x = du.e.k("timeout", j10, unit);
            return this;
        }

        public final Builder f(long j10, TimeUnit unit) {
            Intrinsics.checkNotNullParameter(unit, "unit");
            this.f42113y = du.e.k("timeout", j10, unit);
            return this;
        }

        public final Builder g(CookieJar cookieJar) {
            Intrinsics.checkNotNullParameter(cookieJar, "cookieJar");
            this.f42098j = cookieJar;
            return this;
        }

        public final Builder h(Dispatcher dispatcher) {
            Intrinsics.checkNotNullParameter(dispatcher, "dispatcher");
            this.f42089a = dispatcher;
            return this;
        }

        public final Builder i(cu.h dns) {
            Intrinsics.checkNotNullParameter(dns, "dns");
            if (!Intrinsics.areEqual(dns, this.f42100l)) {
                this.D = null;
            }
            this.f42100l = dns;
            return this;
        }

        public final Builder j(e eventListener) {
            Intrinsics.checkNotNullParameter(eventListener, "eventListener");
            this.f42093e = du.e.g(eventListener);
            return this;
        }

        public final Builder k(boolean z10) {
            this.f42096h = z10;
            return this;
        }

        public final cu.a l() {
            return this.f42095g;
        }

        public final b m() {
            return this.f42099k;
        }

        public final int n() {
            return this.f42112x;
        }

        public final pu.c o() {
            return this.f42111w;
        }

        public final cu.c p() {
            return this.f42110v;
        }

        public final int q() {
            return this.f42113y;
        }

        public final cu.f r() {
            return this.f42090b;
        }

        public final List s() {
            return this.f42107s;
        }

        public final CookieJar t() {
            return this.f42098j;
        }

        public final Dispatcher u() {
            return this.f42089a;
        }

        public final cu.h v() {
            return this.f42100l;
        }

        public final e.c w() {
            return this.f42093e;
        }

        public final boolean x() {
            return this.f42096h;
        }

        public final boolean y() {
            return this.f42097i;
        }

        public final HostnameVerifier z() {
            return this.f42109u;
        }

        /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
        public Builder(OkHttpClient okHttpClient) {
            this();
            Intrinsics.checkNotNullParameter(okHttpClient, "okHttpClient");
            this.f42089a = okHttpClient.t();
            this.f42090b = okHttpClient.o();
            CollectionsKt.B(this.f42091c, okHttpClient.A());
            CollectionsKt.B(this.f42092d, okHttpClient.D());
            this.f42093e = okHttpClient.v();
            this.f42094f = okHttpClient.M();
            this.f42095g = okHttpClient.i();
            this.f42096h = okHttpClient.w();
            this.f42097i = okHttpClient.x();
            this.f42098j = okHttpClient.r();
            this.f42099k = okHttpClient.j();
            this.f42100l = okHttpClient.u();
            this.f42101m = okHttpClient.I();
            this.f42102n = okHttpClient.K();
            this.f42103o = okHttpClient.J();
            this.f42104p = okHttpClient.N();
            this.f42105q = okHttpClient.B;
            this.f42106r = okHttpClient.S();
            this.f42107s = okHttpClient.q();
            this.f42108t = okHttpClient.H();
            this.f42109u = okHttpClient.z();
            this.f42110v = okHttpClient.m();
            this.f42111w = okHttpClient.l();
            this.f42112x = okHttpClient.k();
            this.f42113y = okHttpClient.n();
            this.f42114z = okHttpClient.L();
            this.A = okHttpClient.R();
            this.B = okHttpClient.G();
            this.C = okHttpClient.B();
            this.D = okHttpClient.y();
        }
    }

    public OkHttpClient() {
        this(new Builder());
    }
}
