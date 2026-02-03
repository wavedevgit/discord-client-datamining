package okhttp3;

import eu.h;
import hu.c;
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
import ut.j;
import ut.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class OkHttpClient implements Cloneable, Call.Factory {
    public static final a P = new a(null);
    private static final List Q = vt.e.w(j.HTTP_2, j.HTTP_1_1);
    private static final List R = vt.e.w(d.f44452i, d.f44454k);
    private final SocketFactory A;
    private final SSLSocketFactory B;
    private final X509TrustManager C;
    private final List D;
    private final List E;
    private final HostnameVerifier F;
    private final ut.c G;
    private final hu.c H;
    private final int I;
    private final int J;
    private final int K;
    private final int L;
    private final int M;
    private final long N;
    private final zt.h O;

    /* renamed from: d  reason: collision with root package name */
    private final Dispatcher f44240d;

    /* renamed from: e  reason: collision with root package name */
    private final ut.f f44241e;

    /* renamed from: i  reason: collision with root package name */
    private final List f44242i;

    /* renamed from: o  reason: collision with root package name */
    private final List f44243o;

    /* renamed from: p  reason: collision with root package name */
    private final e.c f44244p;

    /* renamed from: q  reason: collision with root package name */
    private final boolean f44245q;

    /* renamed from: r  reason: collision with root package name */
    private final ut.a f44246r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f44247s;

    /* renamed from: t  reason: collision with root package name */
    private final boolean f44248t;

    /* renamed from: u  reason: collision with root package name */
    private final CookieJar f44249u;

    /* renamed from: v  reason: collision with root package name */
    private final b f44250v;

    /* renamed from: w  reason: collision with root package name */
    private final ut.h f44251w;

    /* renamed from: x  reason: collision with root package name */
    private final Proxy f44252x;

    /* renamed from: y  reason: collision with root package name */
    private final ProxySelector f44253y;

    /* renamed from: z  reason: collision with root package name */
    private final ut.a f44254z;

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
        this.f44240d = builder.u();
        this.f44241e = builder.r();
        this.f44242i = vt.e.V(builder.A());
        this.f44243o = vt.e.V(builder.C());
        this.f44244p = builder.w();
        this.f44245q = builder.J();
        this.f44246r = builder.l();
        this.f44247s = builder.x();
        this.f44248t = builder.y();
        this.f44249u = builder.t();
        this.f44250v = builder.m();
        this.f44251w = builder.v();
        this.f44252x = builder.F();
        if (builder.F() != null) {
            H = gu.a.f27396a;
        } else {
            H = builder.H();
            H = H == null ? ProxySelector.getDefault() : H;
            if (H == null) {
                H = gu.a.f27396a;
            }
        }
        this.f44253y = H;
        this.f44254z = builder.G();
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
        zt.h K = builder.K();
        this.O = K == null ? new zt.h() : K;
        List<d> list = s10;
        if (!(list instanceof Collection) || !list.isEmpty()) {
            for (d dVar : list) {
                if (dVar.f()) {
                    if (builder.M() != null) {
                        this.B = builder.M();
                        hu.c o10 = builder.o();
                        Intrinsics.checkNotNull(o10);
                        this.H = o10;
                        X509TrustManager O = builder.O();
                        Intrinsics.checkNotNull(O);
                        this.C = O;
                        ut.c p10 = builder.p();
                        Intrinsics.checkNotNull(o10);
                        this.G = p10.e(o10);
                    } else {
                        h.a aVar = eu.h.f23247a;
                        X509TrustManager p11 = aVar.g().p();
                        this.C = p11;
                        eu.h g10 = aVar.g();
                        Intrinsics.checkNotNull(p11);
                        this.B = g10.o(p11);
                        c.a aVar2 = hu.c.f27969a;
                        Intrinsics.checkNotNull(p11);
                        hu.c a10 = aVar2.a(p11);
                        this.H = a10;
                        ut.c p12 = builder.p();
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
        this.G = ut.c.f50688d;
        P();
    }

    private final void P() {
        List list = this.f44242i;
        Intrinsics.checkNotNull(list, "null cannot be cast to non-null type kotlin.collections.List<okhttp3.Interceptor?>");
        if (!list.contains(null)) {
            List list2 = this.f44243o;
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
                            if (Intrinsics.areEqual(this.G, ut.c.f50688d)) {
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
            throw new IllegalStateException(("Null network interceptor: " + this.f44243o).toString());
        }
        throw new IllegalStateException(("Null interceptor: " + this.f44242i).toString());
    }

    public final List A() {
        return this.f44242i;
    }

    public final long B() {
        return this.N;
    }

    public final List C() {
        return this.f44243o;
    }

    public Builder D() {
        return new Builder(this);
    }

    public WebSocket E(Request request, l listener) {
        Intrinsics.checkNotNullParameter(request, "request");
        Intrinsics.checkNotNullParameter(listener, "listener");
        iu.d dVar = new iu.d(yt.e.f55195i, request, listener, new Random(), this.M, null, this.N);
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
        return this.f44252x;
    }

    public final ut.a I() {
        return this.f44254z;
    }

    public final ProxySelector J() {
        return this.f44253y;
    }

    public final int K() {
        return this.K;
    }

    public final boolean M() {
        return this.f44245q;
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
        return new zt.e(this, request, false);
    }

    public final int b() {
        return this.I;
    }

    public final CookieJar c() {
        return this.f44249u;
    }

    public Object clone() {
        return super.clone();
    }

    public final Dispatcher d() {
        return this.f44240d;
    }

    public final ut.a i() {
        return this.f44246r;
    }

    public final b j() {
        return this.f44250v;
    }

    public final int k() {
        return this.I;
    }

    public final hu.c l() {
        return this.H;
    }

    public final ut.c m() {
        return this.G;
    }

    public final int o() {
        return this.J;
    }

    public final ut.f p() {
        return this.f44241e;
    }

    public final List q() {
        return this.D;
    }

    public final CookieJar r() {
        return this.f44249u;
    }

    public final Dispatcher s() {
        return this.f44240d;
    }

    public final ut.h t() {
        return this.f44251w;
    }

    public final e.c u() {
        return this.f44244p;
    }

    public final boolean v() {
        return this.f44247s;
    }

    public final boolean w() {
        return this.f44248t;
    }

    public final zt.h y() {
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
        private zt.h D;

        /* renamed from: a  reason: collision with root package name */
        private Dispatcher f44255a;

        /* renamed from: b  reason: collision with root package name */
        private ut.f f44256b;

        /* renamed from: c  reason: collision with root package name */
        private final List f44257c;

        /* renamed from: d  reason: collision with root package name */
        private final List f44258d;

        /* renamed from: e  reason: collision with root package name */
        private e.c f44259e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f44260f;

        /* renamed from: g  reason: collision with root package name */
        private ut.a f44261g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f44262h;

        /* renamed from: i  reason: collision with root package name */
        private boolean f44263i;

        /* renamed from: j  reason: collision with root package name */
        private CookieJar f44264j;

        /* renamed from: k  reason: collision with root package name */
        private b f44265k;

        /* renamed from: l  reason: collision with root package name */
        private ut.h f44266l;

        /* renamed from: m  reason: collision with root package name */
        private Proxy f44267m;

        /* renamed from: n  reason: collision with root package name */
        private ProxySelector f44268n;

        /* renamed from: o  reason: collision with root package name */
        private ut.a f44269o;

        /* renamed from: p  reason: collision with root package name */
        private SocketFactory f44270p;

        /* renamed from: q  reason: collision with root package name */
        private SSLSocketFactory f44271q;

        /* renamed from: r  reason: collision with root package name */
        private X509TrustManager f44272r;

        /* renamed from: s  reason: collision with root package name */
        private List f44273s;

        /* renamed from: t  reason: collision with root package name */
        private List f44274t;

        /* renamed from: u  reason: collision with root package name */
        private HostnameVerifier f44275u;

        /* renamed from: v  reason: collision with root package name */
        private ut.c f44276v;

        /* renamed from: w  reason: collision with root package name */
        private hu.c f44277w;

        /* renamed from: x  reason: collision with root package name */
        private int f44278x;

        /* renamed from: y  reason: collision with root package name */
        private int f44279y;

        /* renamed from: z  reason: collision with root package name */
        private int f44280z;

        public Builder() {
            this.f44255a = new Dispatcher();
            this.f44256b = new ut.f();
            this.f44257c = new ArrayList();
            this.f44258d = new ArrayList();
            this.f44259e = vt.e.g(e.f44464b);
            this.f44260f = true;
            ut.a aVar = ut.a.f50684b;
            this.f44261g = aVar;
            this.f44262h = true;
            this.f44263i = true;
            this.f44264j = CookieJar.f44180b;
            this.f44266l = ut.h.f50700b;
            this.f44269o = aVar;
            SocketFactory socketFactory = SocketFactory.getDefault();
            Intrinsics.checkNotNullExpressionValue(socketFactory, "getDefault()");
            this.f44270p = socketFactory;
            a aVar2 = OkHttpClient.P;
            this.f44273s = aVar2.a();
            this.f44274t = aVar2.b();
            this.f44275u = hu.d.f27970a;
            this.f44276v = ut.c.f50688d;
            this.f44279y = 10000;
            this.f44280z = 10000;
            this.A = 10000;
            this.C = 1024L;
        }

        public final List A() {
            return this.f44257c;
        }

        public final long B() {
            return this.C;
        }

        public final List C() {
            return this.f44258d;
        }

        public final int D() {
            return this.B;
        }

        public final List E() {
            return this.f44274t;
        }

        public final Proxy F() {
            return this.f44267m;
        }

        public final ut.a G() {
            return this.f44269o;
        }

        public final ProxySelector H() {
            return this.f44268n;
        }

        public final int I() {
            return this.f44280z;
        }

        public final boolean J() {
            return this.f44260f;
        }

        public final zt.h K() {
            return this.D;
        }

        public final SocketFactory L() {
            return this.f44270p;
        }

        public final SSLSocketFactory M() {
            return this.f44271q;
        }

        public final int N() {
            return this.A;
        }

        public final X509TrustManager O() {
            return this.f44272r;
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
                    if (!Intrinsics.areEqual(j12, this.f44274t)) {
                        this.D = null;
                    }
                    List unmodifiableList = Collections.unmodifiableList(j12);
                    Intrinsics.checkNotNullExpressionValue(unmodifiableList, "unmodifiableList(protocolsCopy)");
                    this.f44274t = unmodifiableList;
                    return this;
                }
                throw new IllegalArgumentException("protocols must not contain null");
            } else {
                throw new IllegalArgumentException(("protocols must not contain http/1.0: " + j12).toString());
            }
        }

        public final Builder Q(long j10, TimeUnit unit) {
            Intrinsics.checkNotNullParameter(unit, "unit");
            this.f44280z = vt.e.k("timeout", j10, unit);
            return this;
        }

        public final Builder R(long j10, TimeUnit unit) {
            Intrinsics.checkNotNullParameter(unit, "unit");
            this.A = vt.e.k("timeout", j10, unit);
            return this;
        }

        public final Builder a(Interceptor interceptor) {
            Intrinsics.checkNotNullParameter(interceptor, "interceptor");
            this.f44257c.add(interceptor);
            return this;
        }

        public final Builder b(Interceptor interceptor) {
            Intrinsics.checkNotNullParameter(interceptor, "interceptor");
            this.f44258d.add(interceptor);
            return this;
        }

        public final OkHttpClient c() {
            return new OkHttpClient(this);
        }

        public final Builder d(b bVar) {
            this.f44265k = bVar;
            return this;
        }

        public final Builder e(long j10, TimeUnit unit) {
            Intrinsics.checkNotNullParameter(unit, "unit");
            this.f44278x = vt.e.k("timeout", j10, unit);
            return this;
        }

        public final Builder f(long j10, TimeUnit unit) {
            Intrinsics.checkNotNullParameter(unit, "unit");
            this.f44279y = vt.e.k("timeout", j10, unit);
            return this;
        }

        public final Builder g(CookieJar cookieJar) {
            Intrinsics.checkNotNullParameter(cookieJar, "cookieJar");
            this.f44264j = cookieJar;
            return this;
        }

        public final Builder h(Dispatcher dispatcher) {
            Intrinsics.checkNotNullParameter(dispatcher, "dispatcher");
            this.f44255a = dispatcher;
            return this;
        }

        public final Builder i(ut.h dns) {
            Intrinsics.checkNotNullParameter(dns, "dns");
            if (!Intrinsics.areEqual(dns, this.f44266l)) {
                this.D = null;
            }
            this.f44266l = dns;
            return this;
        }

        public final Builder j(e eventListener) {
            Intrinsics.checkNotNullParameter(eventListener, "eventListener");
            this.f44259e = vt.e.g(eventListener);
            return this;
        }

        public final Builder k(boolean z10) {
            this.f44262h = z10;
            return this;
        }

        public final ut.a l() {
            return this.f44261g;
        }

        public final b m() {
            return this.f44265k;
        }

        public final int n() {
            return this.f44278x;
        }

        public final hu.c o() {
            return this.f44277w;
        }

        public final ut.c p() {
            return this.f44276v;
        }

        public final int q() {
            return this.f44279y;
        }

        public final ut.f r() {
            return this.f44256b;
        }

        public final List s() {
            return this.f44273s;
        }

        public final CookieJar t() {
            return this.f44264j;
        }

        public final Dispatcher u() {
            return this.f44255a;
        }

        public final ut.h v() {
            return this.f44266l;
        }

        public final e.c w() {
            return this.f44259e;
        }

        public final boolean x() {
            return this.f44262h;
        }

        public final boolean y() {
            return this.f44263i;
        }

        public final HostnameVerifier z() {
            return this.f44275u;
        }

        /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
        public Builder(OkHttpClient okHttpClient) {
            this();
            Intrinsics.checkNotNullParameter(okHttpClient, "okHttpClient");
            this.f44255a = okHttpClient.s();
            this.f44256b = okHttpClient.p();
            CollectionsKt.B(this.f44257c, okHttpClient.A());
            CollectionsKt.B(this.f44258d, okHttpClient.C());
            this.f44259e = okHttpClient.u();
            this.f44260f = okHttpClient.M();
            this.f44261g = okHttpClient.i();
            this.f44262h = okHttpClient.v();
            this.f44263i = okHttpClient.w();
            this.f44264j = okHttpClient.r();
            this.f44265k = okHttpClient.j();
            this.f44266l = okHttpClient.t();
            this.f44267m = okHttpClient.H();
            this.f44268n = okHttpClient.J();
            this.f44269o = okHttpClient.I();
            this.f44270p = okHttpClient.N();
            this.f44271q = okHttpClient.B;
            this.f44272r = okHttpClient.R();
            this.f44273s = okHttpClient.q();
            this.f44274t = okHttpClient.G();
            this.f44275u = okHttpClient.z();
            this.f44276v = okHttpClient.m();
            this.f44277w = okHttpClient.l();
            this.f44278x = okHttpClient.k();
            this.f44279y = okHttpClient.o();
            this.f44280z = okHttpClient.K();
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
