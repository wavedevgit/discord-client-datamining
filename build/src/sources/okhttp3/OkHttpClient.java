package okhttp3;

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
import ju.h;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import mu.c;
import okhttp3.Call;
import okhttp3.e;
import zt.j;
import zt.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class OkHttpClient implements Cloneable, Call.Factory {
    public static final a P = new a(null);
    private static final List Q = au.e.w(j.HTTP_2, j.HTTP_1_1);
    private static final List R = au.e.w(d.f44005i, d.f44007k);
    private final SocketFactory A;
    private final SSLSocketFactory B;
    private final X509TrustManager C;
    private final List D;
    private final List E;
    private final HostnameVerifier F;
    private final zt.c G;
    private final mu.c H;
    private final int I;
    private final int J;
    private final int K;
    private final int L;
    private final int M;
    private final long N;
    private final eu.h O;

    /* renamed from: d  reason: collision with root package name */
    private final Dispatcher f43793d;

    /* renamed from: e  reason: collision with root package name */
    private final zt.f f43794e;

    /* renamed from: i  reason: collision with root package name */
    private final List f43795i;

    /* renamed from: o  reason: collision with root package name */
    private final List f43796o;

    /* renamed from: p  reason: collision with root package name */
    private final e.c f43797p;

    /* renamed from: q  reason: collision with root package name */
    private final boolean f43798q;

    /* renamed from: r  reason: collision with root package name */
    private final zt.a f43799r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f43800s;

    /* renamed from: t  reason: collision with root package name */
    private final boolean f43801t;

    /* renamed from: u  reason: collision with root package name */
    private final CookieJar f43802u;

    /* renamed from: v  reason: collision with root package name */
    private final b f43803v;

    /* renamed from: w  reason: collision with root package name */
    private final zt.h f43804w;

    /* renamed from: x  reason: collision with root package name */
    private final Proxy f43805x;

    /* renamed from: y  reason: collision with root package name */
    private final ProxySelector f43806y;

    /* renamed from: z  reason: collision with root package name */
    private final zt.a f43807z;

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
        this.f43793d = builder.u();
        this.f43794e = builder.r();
        this.f43795i = au.e.V(builder.A());
        this.f43796o = au.e.V(builder.C());
        this.f43797p = builder.w();
        this.f43798q = builder.J();
        this.f43799r = builder.l();
        this.f43800s = builder.x();
        this.f43801t = builder.y();
        this.f43802u = builder.t();
        this.f43803v = builder.m();
        this.f43804w = builder.v();
        this.f43805x = builder.F();
        if (builder.F() != null) {
            H = lu.a.f37211a;
        } else {
            H = builder.H();
            H = H == null ? ProxySelector.getDefault() : H;
            if (H == null) {
                H = lu.a.f37211a;
            }
        }
        this.f43806y = H;
        this.f43807z = builder.G();
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
        eu.h K = builder.K();
        this.O = K == null ? new eu.h() : K;
        List<d> list = s10;
        if (!(list instanceof Collection) || !list.isEmpty()) {
            for (d dVar : list) {
                if (dVar.f()) {
                    if (builder.M() != null) {
                        this.B = builder.M();
                        mu.c o10 = builder.o();
                        Intrinsics.checkNotNull(o10);
                        this.H = o10;
                        X509TrustManager O = builder.O();
                        Intrinsics.checkNotNull(O);
                        this.C = O;
                        zt.c p10 = builder.p();
                        Intrinsics.checkNotNull(o10);
                        this.G = p10.e(o10);
                    } else {
                        h.a aVar = ju.h.f31441a;
                        X509TrustManager p11 = aVar.g().p();
                        this.C = p11;
                        ju.h g10 = aVar.g();
                        Intrinsics.checkNotNull(p11);
                        this.B = g10.o(p11);
                        c.a aVar2 = mu.c.f38970a;
                        Intrinsics.checkNotNull(p11);
                        mu.c a10 = aVar2.a(p11);
                        this.H = a10;
                        zt.c p12 = builder.p();
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
        this.G = zt.c.f56276d;
        P();
    }

    private final void P() {
        List list = this.f43795i;
        Intrinsics.checkNotNull(list, "null cannot be cast to non-null type kotlin.collections.List<okhttp3.Interceptor?>");
        if (!list.contains(null)) {
            List list2 = this.f43796o;
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
                            if (Intrinsics.areEqual(this.G, zt.c.f56276d)) {
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
            throw new IllegalStateException(("Null network interceptor: " + this.f43796o).toString());
        }
        throw new IllegalStateException(("Null interceptor: " + this.f43795i).toString());
    }

    public final List A() {
        return this.f43795i;
    }

    public final long B() {
        return this.N;
    }

    public final List C() {
        return this.f43796o;
    }

    public Builder D() {
        return new Builder(this);
    }

    public WebSocket E(Request request, l listener) {
        Intrinsics.checkNotNullParameter(request, "request");
        Intrinsics.checkNotNullParameter(listener, "listener");
        nu.d dVar = new nu.d(du.e.f21258i, request, listener, new Random(), this.M, null, this.N);
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
        return this.f43805x;
    }

    public final zt.a I() {
        return this.f43807z;
    }

    public final ProxySelector J() {
        return this.f43806y;
    }

    public final int K() {
        return this.K;
    }

    public final boolean M() {
        return this.f43798q;
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
        return new eu.e(this, request, false);
    }

    public final int b() {
        return this.I;
    }

    public final CookieJar c() {
        return this.f43802u;
    }

    public Object clone() {
        return super.clone();
    }

    public final Dispatcher d() {
        return this.f43793d;
    }

    public final zt.a i() {
        return this.f43799r;
    }

    public final b j() {
        return this.f43803v;
    }

    public final int k() {
        return this.I;
    }

    public final mu.c l() {
        return this.H;
    }

    public final zt.c m() {
        return this.G;
    }

    public final int n() {
        return this.J;
    }

    public final zt.f p() {
        return this.f43794e;
    }

    public final List q() {
        return this.D;
    }

    public final CookieJar r() {
        return this.f43802u;
    }

    public final Dispatcher s() {
        return this.f43793d;
    }

    public final zt.h t() {
        return this.f43804w;
    }

    public final e.c u() {
        return this.f43797p;
    }

    public final boolean v() {
        return this.f43800s;
    }

    public final boolean w() {
        return this.f43801t;
    }

    public final eu.h x() {
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
        private eu.h D;

        /* renamed from: a  reason: collision with root package name */
        private Dispatcher f43808a;

        /* renamed from: b  reason: collision with root package name */
        private zt.f f43809b;

        /* renamed from: c  reason: collision with root package name */
        private final List f43810c;

        /* renamed from: d  reason: collision with root package name */
        private final List f43811d;

        /* renamed from: e  reason: collision with root package name */
        private e.c f43812e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f43813f;

        /* renamed from: g  reason: collision with root package name */
        private zt.a f43814g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f43815h;

        /* renamed from: i  reason: collision with root package name */
        private boolean f43816i;

        /* renamed from: j  reason: collision with root package name */
        private CookieJar f43817j;

        /* renamed from: k  reason: collision with root package name */
        private b f43818k;

        /* renamed from: l  reason: collision with root package name */
        private zt.h f43819l;

        /* renamed from: m  reason: collision with root package name */
        private Proxy f43820m;

        /* renamed from: n  reason: collision with root package name */
        private ProxySelector f43821n;

        /* renamed from: o  reason: collision with root package name */
        private zt.a f43822o;

        /* renamed from: p  reason: collision with root package name */
        private SocketFactory f43823p;

        /* renamed from: q  reason: collision with root package name */
        private SSLSocketFactory f43824q;

        /* renamed from: r  reason: collision with root package name */
        private X509TrustManager f43825r;

        /* renamed from: s  reason: collision with root package name */
        private List f43826s;

        /* renamed from: t  reason: collision with root package name */
        private List f43827t;

        /* renamed from: u  reason: collision with root package name */
        private HostnameVerifier f43828u;

        /* renamed from: v  reason: collision with root package name */
        private zt.c f43829v;

        /* renamed from: w  reason: collision with root package name */
        private mu.c f43830w;

        /* renamed from: x  reason: collision with root package name */
        private int f43831x;

        /* renamed from: y  reason: collision with root package name */
        private int f43832y;

        /* renamed from: z  reason: collision with root package name */
        private int f43833z;

        public Builder() {
            this.f43808a = new Dispatcher();
            this.f43809b = new zt.f();
            this.f43810c = new ArrayList();
            this.f43811d = new ArrayList();
            this.f43812e = au.e.g(e.f44017b);
            this.f43813f = true;
            zt.a aVar = zt.a.f56272b;
            this.f43814g = aVar;
            this.f43815h = true;
            this.f43816i = true;
            this.f43817j = CookieJar.f43733b;
            this.f43819l = zt.h.f56288b;
            this.f43822o = aVar;
            SocketFactory socketFactory = SocketFactory.getDefault();
            Intrinsics.checkNotNullExpressionValue(socketFactory, "getDefault()");
            this.f43823p = socketFactory;
            a aVar2 = OkHttpClient.P;
            this.f43826s = aVar2.a();
            this.f43827t = aVar2.b();
            this.f43828u = mu.d.f38971a;
            this.f43829v = zt.c.f56276d;
            this.f43832y = 10000;
            this.f43833z = 10000;
            this.A = 10000;
            this.C = 1024L;
        }

        public final List A() {
            return this.f43810c;
        }

        public final long B() {
            return this.C;
        }

        public final List C() {
            return this.f43811d;
        }

        public final int D() {
            return this.B;
        }

        public final List E() {
            return this.f43827t;
        }

        public final Proxy F() {
            return this.f43820m;
        }

        public final zt.a G() {
            return this.f43822o;
        }

        public final ProxySelector H() {
            return this.f43821n;
        }

        public final int I() {
            return this.f43833z;
        }

        public final boolean J() {
            return this.f43813f;
        }

        public final eu.h K() {
            return this.D;
        }

        public final SocketFactory L() {
            return this.f43823p;
        }

        public final SSLSocketFactory M() {
            return this.f43824q;
        }

        public final int N() {
            return this.A;
        }

        public final X509TrustManager O() {
            return this.f43825r;
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
                    if (!Intrinsics.areEqual(j12, this.f43827t)) {
                        this.D = null;
                    }
                    List unmodifiableList = Collections.unmodifiableList(j12);
                    Intrinsics.checkNotNullExpressionValue(unmodifiableList, "unmodifiableList(protocolsCopy)");
                    this.f43827t = unmodifiableList;
                    return this;
                }
                throw new IllegalArgumentException("protocols must not contain null");
            } else {
                throw new IllegalArgumentException(("protocols must not contain http/1.0: " + j12).toString());
            }
        }

        public final Builder Q(long j10, TimeUnit unit) {
            Intrinsics.checkNotNullParameter(unit, "unit");
            this.f43833z = au.e.k("timeout", j10, unit);
            return this;
        }

        public final Builder R(long j10, TimeUnit unit) {
            Intrinsics.checkNotNullParameter(unit, "unit");
            this.A = au.e.k("timeout", j10, unit);
            return this;
        }

        public final Builder a(Interceptor interceptor) {
            Intrinsics.checkNotNullParameter(interceptor, "interceptor");
            this.f43810c.add(interceptor);
            return this;
        }

        public final Builder b(Interceptor interceptor) {
            Intrinsics.checkNotNullParameter(interceptor, "interceptor");
            this.f43811d.add(interceptor);
            return this;
        }

        public final OkHttpClient c() {
            return new OkHttpClient(this);
        }

        public final Builder d(b bVar) {
            this.f43818k = bVar;
            return this;
        }

        public final Builder e(long j10, TimeUnit unit) {
            Intrinsics.checkNotNullParameter(unit, "unit");
            this.f43831x = au.e.k("timeout", j10, unit);
            return this;
        }

        public final Builder f(long j10, TimeUnit unit) {
            Intrinsics.checkNotNullParameter(unit, "unit");
            this.f43832y = au.e.k("timeout", j10, unit);
            return this;
        }

        public final Builder g(CookieJar cookieJar) {
            Intrinsics.checkNotNullParameter(cookieJar, "cookieJar");
            this.f43817j = cookieJar;
            return this;
        }

        public final Builder h(Dispatcher dispatcher) {
            Intrinsics.checkNotNullParameter(dispatcher, "dispatcher");
            this.f43808a = dispatcher;
            return this;
        }

        public final Builder i(zt.h dns) {
            Intrinsics.checkNotNullParameter(dns, "dns");
            if (!Intrinsics.areEqual(dns, this.f43819l)) {
                this.D = null;
            }
            this.f43819l = dns;
            return this;
        }

        public final Builder j(e eventListener) {
            Intrinsics.checkNotNullParameter(eventListener, "eventListener");
            this.f43812e = au.e.g(eventListener);
            return this;
        }

        public final Builder k(boolean z10) {
            this.f43815h = z10;
            return this;
        }

        public final zt.a l() {
            return this.f43814g;
        }

        public final b m() {
            return this.f43818k;
        }

        public final int n() {
            return this.f43831x;
        }

        public final mu.c o() {
            return this.f43830w;
        }

        public final zt.c p() {
            return this.f43829v;
        }

        public final int q() {
            return this.f43832y;
        }

        public final zt.f r() {
            return this.f43809b;
        }

        public final List s() {
            return this.f43826s;
        }

        public final CookieJar t() {
            return this.f43817j;
        }

        public final Dispatcher u() {
            return this.f43808a;
        }

        public final zt.h v() {
            return this.f43819l;
        }

        public final e.c w() {
            return this.f43812e;
        }

        public final boolean x() {
            return this.f43815h;
        }

        public final boolean y() {
            return this.f43816i;
        }

        public final HostnameVerifier z() {
            return this.f43828u;
        }

        /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
        public Builder(OkHttpClient okHttpClient) {
            this();
            Intrinsics.checkNotNullParameter(okHttpClient, "okHttpClient");
            this.f43808a = okHttpClient.s();
            this.f43809b = okHttpClient.p();
            CollectionsKt.B(this.f43810c, okHttpClient.A());
            CollectionsKt.B(this.f43811d, okHttpClient.C());
            this.f43812e = okHttpClient.u();
            this.f43813f = okHttpClient.M();
            this.f43814g = okHttpClient.i();
            this.f43815h = okHttpClient.v();
            this.f43816i = okHttpClient.w();
            this.f43817j = okHttpClient.r();
            this.f43818k = okHttpClient.j();
            this.f43819l = okHttpClient.t();
            this.f43820m = okHttpClient.H();
            this.f43821n = okHttpClient.J();
            this.f43822o = okHttpClient.I();
            this.f43823p = okHttpClient.N();
            this.f43824q = okHttpClient.B;
            this.f43825r = okHttpClient.R();
            this.f43826s = okHttpClient.q();
            this.f43827t = okHttpClient.G();
            this.f43828u = okHttpClient.z();
            this.f43829v = okHttpClient.m();
            this.f43830w = okHttpClient.l();
            this.f43831x = okHttpClient.k();
            this.f43832y = okHttpClient.n();
            this.f43833z = okHttpClient.K();
            this.A = okHttpClient.Q();
            this.B = okHttpClient.F();
            this.C = okHttpClient.B();
            this.D = okHttpClient.x();
        }
    }

    public OkHttpClient() {
        this(new Builder());
    }
}
