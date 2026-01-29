package okhttp3;

import du.h;
import gu.c;
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
import okhttp3.Call;
import okhttp3.e;
import tt.j;
import tt.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class OkHttpClient implements Cloneable, Call.Factory {
    public static final a P = new a(null);
    private static final List Q = ut.e.w(j.HTTP_2, j.HTTP_1_1);
    private static final List R = ut.e.w(d.f44308i, d.f44310k);
    private final SocketFactory A;
    private final SSLSocketFactory B;
    private final X509TrustManager C;
    private final List D;
    private final List E;
    private final HostnameVerifier F;
    private final tt.c G;
    private final gu.c H;
    private final int I;
    private final int J;
    private final int K;
    private final int L;
    private final int M;
    private final long N;
    private final yt.h O;

    /* renamed from: d  reason: collision with root package name */
    private final Dispatcher f44096d;

    /* renamed from: e  reason: collision with root package name */
    private final tt.f f44097e;

    /* renamed from: i  reason: collision with root package name */
    private final List f44098i;

    /* renamed from: o  reason: collision with root package name */
    private final List f44099o;

    /* renamed from: p  reason: collision with root package name */
    private final e.c f44100p;

    /* renamed from: q  reason: collision with root package name */
    private final boolean f44101q;

    /* renamed from: r  reason: collision with root package name */
    private final tt.a f44102r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f44103s;

    /* renamed from: t  reason: collision with root package name */
    private final boolean f44104t;

    /* renamed from: u  reason: collision with root package name */
    private final CookieJar f44105u;

    /* renamed from: v  reason: collision with root package name */
    private final b f44106v;

    /* renamed from: w  reason: collision with root package name */
    private final tt.h f44107w;

    /* renamed from: x  reason: collision with root package name */
    private final Proxy f44108x;

    /* renamed from: y  reason: collision with root package name */
    private final ProxySelector f44109y;

    /* renamed from: z  reason: collision with root package name */
    private final tt.a f44110z;

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
        this.f44096d = builder.u();
        this.f44097e = builder.r();
        this.f44098i = ut.e.V(builder.A());
        this.f44099o = ut.e.V(builder.C());
        this.f44100p = builder.w();
        this.f44101q = builder.J();
        this.f44102r = builder.l();
        this.f44103s = builder.x();
        this.f44104t = builder.y();
        this.f44105u = builder.t();
        this.f44106v = builder.m();
        this.f44107w = builder.v();
        this.f44108x = builder.F();
        if (builder.F() != null) {
            H = fu.a.f25533a;
        } else {
            H = builder.H();
            H = H == null ? ProxySelector.getDefault() : H;
            if (H == null) {
                H = fu.a.f25533a;
            }
        }
        this.f44109y = H;
        this.f44110z = builder.G();
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
        yt.h K = builder.K();
        this.O = K == null ? new yt.h() : K;
        List<d> list = s10;
        if (!(list instanceof Collection) || !list.isEmpty()) {
            for (d dVar : list) {
                if (dVar.f()) {
                    if (builder.M() != null) {
                        this.B = builder.M();
                        gu.c o10 = builder.o();
                        Intrinsics.checkNotNull(o10);
                        this.H = o10;
                        X509TrustManager O = builder.O();
                        Intrinsics.checkNotNull(O);
                        this.C = O;
                        tt.c p10 = builder.p();
                        Intrinsics.checkNotNull(o10);
                        this.G = p10.e(o10);
                    } else {
                        h.a aVar = du.h.f22444a;
                        X509TrustManager p11 = aVar.g().p();
                        this.C = p11;
                        du.h g10 = aVar.g();
                        Intrinsics.checkNotNull(p11);
                        this.B = g10.o(p11);
                        c.a aVar2 = gu.c.f27206a;
                        Intrinsics.checkNotNull(p11);
                        gu.c a10 = aVar2.a(p11);
                        this.H = a10;
                        tt.c p12 = builder.p();
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
        this.G = tt.c.f49914d;
        P();
    }

    private final void P() {
        List list = this.f44098i;
        Intrinsics.checkNotNull(list, "null cannot be cast to non-null type kotlin.collections.List<okhttp3.Interceptor?>");
        if (!list.contains(null)) {
            List list2 = this.f44099o;
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
                            if (Intrinsics.areEqual(this.G, tt.c.f49914d)) {
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
            throw new IllegalStateException(("Null network interceptor: " + this.f44099o).toString());
        }
        throw new IllegalStateException(("Null interceptor: " + this.f44098i).toString());
    }

    public final List A() {
        return this.f44098i;
    }

    public final long B() {
        return this.N;
    }

    public final List C() {
        return this.f44099o;
    }

    public Builder D() {
        return new Builder(this);
    }

    public WebSocket E(Request request, l listener) {
        Intrinsics.checkNotNullParameter(request, "request");
        Intrinsics.checkNotNullParameter(listener, "listener");
        hu.d dVar = new hu.d(xt.e.f53825i, request, listener, new Random(), this.M, null, this.N);
        dVar.o(this);
        return dVar;
    }

    public final int F() {
        return this.M;
    }

    public final List G() {
        return this.E;
    }

    public final Proxy H() {
        return this.f44108x;
    }

    public final tt.a I() {
        return this.f44110z;
    }

    public final ProxySelector J() {
        return this.f44109y;
    }

    public final int K() {
        return this.K;
    }

    public final boolean M() {
        return this.f44101q;
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

    public final int Q() {
        return this.L;
    }

    public final X509TrustManager R() {
        return this.C;
    }

    @Override // okhttp3.Call.Factory
    public Call a(Request request) {
        Intrinsics.checkNotNullParameter(request, "request");
        return new yt.e(this, request, false);
    }

    public final int b() {
        return this.I;
    }

    public final CookieJar c() {
        return this.f44105u;
    }

    public Object clone() {
        return super.clone();
    }

    public final Dispatcher d() {
        return this.f44096d;
    }

    public final tt.a i() {
        return this.f44102r;
    }

    public final b j() {
        return this.f44106v;
    }

    public final int k() {
        return this.I;
    }

    public final gu.c l() {
        return this.H;
    }

    public final tt.c m() {
        return this.G;
    }

    public final int o() {
        return this.J;
    }

    public final tt.f p() {
        return this.f44097e;
    }

    public final List q() {
        return this.D;
    }

    public final CookieJar r() {
        return this.f44105u;
    }

    public final Dispatcher s() {
        return this.f44096d;
    }

    public final tt.h t() {
        return this.f44107w;
    }

    public final e.c u() {
        return this.f44100p;
    }

    public final boolean v() {
        return this.f44103s;
    }

    public final boolean w() {
        return this.f44104t;
    }

    public final yt.h y() {
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
        private yt.h D;

        /* renamed from: a  reason: collision with root package name */
        private Dispatcher f44111a;

        /* renamed from: b  reason: collision with root package name */
        private tt.f f44112b;

        /* renamed from: c  reason: collision with root package name */
        private final List f44113c;

        /* renamed from: d  reason: collision with root package name */
        private final List f44114d;

        /* renamed from: e  reason: collision with root package name */
        private e.c f44115e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f44116f;

        /* renamed from: g  reason: collision with root package name */
        private tt.a f44117g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f44118h;

        /* renamed from: i  reason: collision with root package name */
        private boolean f44119i;

        /* renamed from: j  reason: collision with root package name */
        private CookieJar f44120j;

        /* renamed from: k  reason: collision with root package name */
        private b f44121k;

        /* renamed from: l  reason: collision with root package name */
        private tt.h f44122l;

        /* renamed from: m  reason: collision with root package name */
        private Proxy f44123m;

        /* renamed from: n  reason: collision with root package name */
        private ProxySelector f44124n;

        /* renamed from: o  reason: collision with root package name */
        private tt.a f44125o;

        /* renamed from: p  reason: collision with root package name */
        private SocketFactory f44126p;

        /* renamed from: q  reason: collision with root package name */
        private SSLSocketFactory f44127q;

        /* renamed from: r  reason: collision with root package name */
        private X509TrustManager f44128r;

        /* renamed from: s  reason: collision with root package name */
        private List f44129s;

        /* renamed from: t  reason: collision with root package name */
        private List f44130t;

        /* renamed from: u  reason: collision with root package name */
        private HostnameVerifier f44131u;

        /* renamed from: v  reason: collision with root package name */
        private tt.c f44132v;

        /* renamed from: w  reason: collision with root package name */
        private gu.c f44133w;

        /* renamed from: x  reason: collision with root package name */
        private int f44134x;

        /* renamed from: y  reason: collision with root package name */
        private int f44135y;

        /* renamed from: z  reason: collision with root package name */
        private int f44136z;

        public Builder() {
            this.f44111a = new Dispatcher();
            this.f44112b = new tt.f();
            this.f44113c = new ArrayList();
            this.f44114d = new ArrayList();
            this.f44115e = ut.e.g(e.f44320b);
            this.f44116f = true;
            tt.a aVar = tt.a.f49910b;
            this.f44117g = aVar;
            this.f44118h = true;
            this.f44119i = true;
            this.f44120j = CookieJar.f44036b;
            this.f44122l = tt.h.f49926b;
            this.f44125o = aVar;
            SocketFactory socketFactory = SocketFactory.getDefault();
            Intrinsics.checkNotNullExpressionValue(socketFactory, "getDefault()");
            this.f44126p = socketFactory;
            a aVar2 = OkHttpClient.P;
            this.f44129s = aVar2.a();
            this.f44130t = aVar2.b();
            this.f44131u = gu.d.f27207a;
            this.f44132v = tt.c.f49914d;
            this.f44135y = 10000;
            this.f44136z = 10000;
            this.A = 10000;
            this.C = 1024L;
        }

        public final List A() {
            return this.f44113c;
        }

        public final long B() {
            return this.C;
        }

        public final List C() {
            return this.f44114d;
        }

        public final int D() {
            return this.B;
        }

        public final List E() {
            return this.f44130t;
        }

        public final Proxy F() {
            return this.f44123m;
        }

        public final tt.a G() {
            return this.f44125o;
        }

        public final ProxySelector H() {
            return this.f44124n;
        }

        public final int I() {
            return this.f44136z;
        }

        public final boolean J() {
            return this.f44116f;
        }

        public final yt.h K() {
            return this.D;
        }

        public final SocketFactory L() {
            return this.f44126p;
        }

        public final SSLSocketFactory M() {
            return this.f44127q;
        }

        public final int N() {
            return this.A;
        }

        public final X509TrustManager O() {
            return this.f44128r;
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
                    if (!Intrinsics.areEqual(j12, this.f44130t)) {
                        this.D = null;
                    }
                    List unmodifiableList = Collections.unmodifiableList(j12);
                    Intrinsics.checkNotNullExpressionValue(unmodifiableList, "unmodifiableList(protocolsCopy)");
                    this.f44130t = unmodifiableList;
                    return this;
                }
                throw new IllegalArgumentException("protocols must not contain null");
            } else {
                throw new IllegalArgumentException(("protocols must not contain http/1.0: " + j12).toString());
            }
        }

        public final Builder Q(long j10, TimeUnit unit) {
            Intrinsics.checkNotNullParameter(unit, "unit");
            this.f44136z = ut.e.k("timeout", j10, unit);
            return this;
        }

        public final Builder R(long j10, TimeUnit unit) {
            Intrinsics.checkNotNullParameter(unit, "unit");
            this.A = ut.e.k("timeout", j10, unit);
            return this;
        }

        public final Builder a(Interceptor interceptor) {
            Intrinsics.checkNotNullParameter(interceptor, "interceptor");
            this.f44113c.add(interceptor);
            return this;
        }

        public final Builder b(Interceptor interceptor) {
            Intrinsics.checkNotNullParameter(interceptor, "interceptor");
            this.f44114d.add(interceptor);
            return this;
        }

        public final OkHttpClient c() {
            return new OkHttpClient(this);
        }

        public final Builder d(b bVar) {
            this.f44121k = bVar;
            return this;
        }

        public final Builder e(long j10, TimeUnit unit) {
            Intrinsics.checkNotNullParameter(unit, "unit");
            this.f44134x = ut.e.k("timeout", j10, unit);
            return this;
        }

        public final Builder f(long j10, TimeUnit unit) {
            Intrinsics.checkNotNullParameter(unit, "unit");
            this.f44135y = ut.e.k("timeout", j10, unit);
            return this;
        }

        public final Builder g(CookieJar cookieJar) {
            Intrinsics.checkNotNullParameter(cookieJar, "cookieJar");
            this.f44120j = cookieJar;
            return this;
        }

        public final Builder h(Dispatcher dispatcher) {
            Intrinsics.checkNotNullParameter(dispatcher, "dispatcher");
            this.f44111a = dispatcher;
            return this;
        }

        public final Builder i(tt.h dns) {
            Intrinsics.checkNotNullParameter(dns, "dns");
            if (!Intrinsics.areEqual(dns, this.f44122l)) {
                this.D = null;
            }
            this.f44122l = dns;
            return this;
        }

        public final Builder j(e eventListener) {
            Intrinsics.checkNotNullParameter(eventListener, "eventListener");
            this.f44115e = ut.e.g(eventListener);
            return this;
        }

        public final Builder k(boolean z10) {
            this.f44118h = z10;
            return this;
        }

        public final tt.a l() {
            return this.f44117g;
        }

        public final b m() {
            return this.f44121k;
        }

        public final int n() {
            return this.f44134x;
        }

        public final gu.c o() {
            return this.f44133w;
        }

        public final tt.c p() {
            return this.f44132v;
        }

        public final int q() {
            return this.f44135y;
        }

        public final tt.f r() {
            return this.f44112b;
        }

        public final List s() {
            return this.f44129s;
        }

        public final CookieJar t() {
            return this.f44120j;
        }

        public final Dispatcher u() {
            return this.f44111a;
        }

        public final tt.h v() {
            return this.f44122l;
        }

        public final e.c w() {
            return this.f44115e;
        }

        public final boolean x() {
            return this.f44118h;
        }

        public final boolean y() {
            return this.f44119i;
        }

        public final HostnameVerifier z() {
            return this.f44131u;
        }

        /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
        public Builder(OkHttpClient okHttpClient) {
            this();
            Intrinsics.checkNotNullParameter(okHttpClient, "okHttpClient");
            this.f44111a = okHttpClient.s();
            this.f44112b = okHttpClient.p();
            CollectionsKt.B(this.f44113c, okHttpClient.A());
            CollectionsKt.B(this.f44114d, okHttpClient.C());
            this.f44115e = okHttpClient.u();
            this.f44116f = okHttpClient.M();
            this.f44117g = okHttpClient.i();
            this.f44118h = okHttpClient.v();
            this.f44119i = okHttpClient.w();
            this.f44120j = okHttpClient.r();
            this.f44121k = okHttpClient.j();
            this.f44122l = okHttpClient.t();
            this.f44123m = okHttpClient.H();
            this.f44124n = okHttpClient.J();
            this.f44125o = okHttpClient.I();
            this.f44126p = okHttpClient.N();
            this.f44127q = okHttpClient.B;
            this.f44128r = okHttpClient.R();
            this.f44129s = okHttpClient.q();
            this.f44130t = okHttpClient.G();
            this.f44131u = okHttpClient.z();
            this.f44132v = okHttpClient.m();
            this.f44133w = okHttpClient.l();
            this.f44134x = okHttpClient.k();
            this.f44135y = okHttpClient.o();
            this.f44136z = okHttpClient.K();
            this.A = okHttpClient.Q();
            this.B = okHttpClient.F();
            this.C = okHttpClient.B();
            this.D = okHttpClient.y();
        }
    }

    public OkHttpClient() {
        this(new Builder());
    }
}
