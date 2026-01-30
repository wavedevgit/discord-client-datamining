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
    private static final List R = ut.e.w(d.f44324i, d.f44326k);
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
    private final Dispatcher f44112d;

    /* renamed from: e  reason: collision with root package name */
    private final tt.f f44113e;

    /* renamed from: i  reason: collision with root package name */
    private final List f44114i;

    /* renamed from: o  reason: collision with root package name */
    private final List f44115o;

    /* renamed from: p  reason: collision with root package name */
    private final e.c f44116p;

    /* renamed from: q  reason: collision with root package name */
    private final boolean f44117q;

    /* renamed from: r  reason: collision with root package name */
    private final tt.a f44118r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f44119s;

    /* renamed from: t  reason: collision with root package name */
    private final boolean f44120t;

    /* renamed from: u  reason: collision with root package name */
    private final CookieJar f44121u;

    /* renamed from: v  reason: collision with root package name */
    private final b f44122v;

    /* renamed from: w  reason: collision with root package name */
    private final tt.h f44123w;

    /* renamed from: x  reason: collision with root package name */
    private final Proxy f44124x;

    /* renamed from: y  reason: collision with root package name */
    private final ProxySelector f44125y;

    /* renamed from: z  reason: collision with root package name */
    private final tt.a f44126z;

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
        this.f44112d = builder.u();
        this.f44113e = builder.r();
        this.f44114i = ut.e.V(builder.A());
        this.f44115o = ut.e.V(builder.C());
        this.f44116p = builder.w();
        this.f44117q = builder.J();
        this.f44118r = builder.l();
        this.f44119s = builder.x();
        this.f44120t = builder.y();
        this.f44121u = builder.t();
        this.f44122v = builder.m();
        this.f44123w = builder.v();
        this.f44124x = builder.F();
        if (builder.F() != null) {
            H = fu.a.f25533a;
        } else {
            H = builder.H();
            H = H == null ? ProxySelector.getDefault() : H;
            if (H == null) {
                H = fu.a.f25533a;
            }
        }
        this.f44125y = H;
        this.f44126z = builder.G();
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
                        c.a aVar2 = gu.c.f27222a;
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
        this.G = tt.c.f49930d;
        P();
    }

    private final void P() {
        List list = this.f44114i;
        Intrinsics.checkNotNull(list, "null cannot be cast to non-null type kotlin.collections.List<okhttp3.Interceptor?>");
        if (!list.contains(null)) {
            List list2 = this.f44115o;
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
                            if (Intrinsics.areEqual(this.G, tt.c.f49930d)) {
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
            throw new IllegalStateException(("Null network interceptor: " + this.f44115o).toString());
        }
        throw new IllegalStateException(("Null interceptor: " + this.f44114i).toString());
    }

    public final List A() {
        return this.f44114i;
    }

    public final long B() {
        return this.N;
    }

    public final List C() {
        return this.f44115o;
    }

    public Builder D() {
        return new Builder(this);
    }

    public WebSocket E(Request request, l listener) {
        Intrinsics.checkNotNullParameter(request, "request");
        Intrinsics.checkNotNullParameter(listener, "listener");
        hu.d dVar = new hu.d(xt.e.f53841i, request, listener, new Random(), this.M, null, this.N);
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
        return this.f44124x;
    }

    public final tt.a I() {
        return this.f44126z;
    }

    public final ProxySelector J() {
        return this.f44125y;
    }

    public final int K() {
        return this.K;
    }

    public final boolean M() {
        return this.f44117q;
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
        return this.f44121u;
    }

    public Object clone() {
        return super.clone();
    }

    public final Dispatcher d() {
        return this.f44112d;
    }

    public final tt.a i() {
        return this.f44118r;
    }

    public final b j() {
        return this.f44122v;
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
        return this.f44113e;
    }

    public final List q() {
        return this.D;
    }

    public final CookieJar r() {
        return this.f44121u;
    }

    public final Dispatcher s() {
        return this.f44112d;
    }

    public final tt.h t() {
        return this.f44123w;
    }

    public final e.c u() {
        return this.f44116p;
    }

    public final boolean v() {
        return this.f44119s;
    }

    public final boolean w() {
        return this.f44120t;
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
        private Dispatcher f44127a;

        /* renamed from: b  reason: collision with root package name */
        private tt.f f44128b;

        /* renamed from: c  reason: collision with root package name */
        private final List f44129c;

        /* renamed from: d  reason: collision with root package name */
        private final List f44130d;

        /* renamed from: e  reason: collision with root package name */
        private e.c f44131e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f44132f;

        /* renamed from: g  reason: collision with root package name */
        private tt.a f44133g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f44134h;

        /* renamed from: i  reason: collision with root package name */
        private boolean f44135i;

        /* renamed from: j  reason: collision with root package name */
        private CookieJar f44136j;

        /* renamed from: k  reason: collision with root package name */
        private b f44137k;

        /* renamed from: l  reason: collision with root package name */
        private tt.h f44138l;

        /* renamed from: m  reason: collision with root package name */
        private Proxy f44139m;

        /* renamed from: n  reason: collision with root package name */
        private ProxySelector f44140n;

        /* renamed from: o  reason: collision with root package name */
        private tt.a f44141o;

        /* renamed from: p  reason: collision with root package name */
        private SocketFactory f44142p;

        /* renamed from: q  reason: collision with root package name */
        private SSLSocketFactory f44143q;

        /* renamed from: r  reason: collision with root package name */
        private X509TrustManager f44144r;

        /* renamed from: s  reason: collision with root package name */
        private List f44145s;

        /* renamed from: t  reason: collision with root package name */
        private List f44146t;

        /* renamed from: u  reason: collision with root package name */
        private HostnameVerifier f44147u;

        /* renamed from: v  reason: collision with root package name */
        private tt.c f44148v;

        /* renamed from: w  reason: collision with root package name */
        private gu.c f44149w;

        /* renamed from: x  reason: collision with root package name */
        private int f44150x;

        /* renamed from: y  reason: collision with root package name */
        private int f44151y;

        /* renamed from: z  reason: collision with root package name */
        private int f44152z;

        public Builder() {
            this.f44127a = new Dispatcher();
            this.f44128b = new tt.f();
            this.f44129c = new ArrayList();
            this.f44130d = new ArrayList();
            this.f44131e = ut.e.g(e.f44336b);
            this.f44132f = true;
            tt.a aVar = tt.a.f49926b;
            this.f44133g = aVar;
            this.f44134h = true;
            this.f44135i = true;
            this.f44136j = CookieJar.f44052b;
            this.f44138l = tt.h.f49942b;
            this.f44141o = aVar;
            SocketFactory socketFactory = SocketFactory.getDefault();
            Intrinsics.checkNotNullExpressionValue(socketFactory, "getDefault()");
            this.f44142p = socketFactory;
            a aVar2 = OkHttpClient.P;
            this.f44145s = aVar2.a();
            this.f44146t = aVar2.b();
            this.f44147u = gu.d.f27223a;
            this.f44148v = tt.c.f49930d;
            this.f44151y = 10000;
            this.f44152z = 10000;
            this.A = 10000;
            this.C = 1024L;
        }

        public final List A() {
            return this.f44129c;
        }

        public final long B() {
            return this.C;
        }

        public final List C() {
            return this.f44130d;
        }

        public final int D() {
            return this.B;
        }

        public final List E() {
            return this.f44146t;
        }

        public final Proxy F() {
            return this.f44139m;
        }

        public final tt.a G() {
            return this.f44141o;
        }

        public final ProxySelector H() {
            return this.f44140n;
        }

        public final int I() {
            return this.f44152z;
        }

        public final boolean J() {
            return this.f44132f;
        }

        public final yt.h K() {
            return this.D;
        }

        public final SocketFactory L() {
            return this.f44142p;
        }

        public final SSLSocketFactory M() {
            return this.f44143q;
        }

        public final int N() {
            return this.A;
        }

        public final X509TrustManager O() {
            return this.f44144r;
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
                    if (!Intrinsics.areEqual(j12, this.f44146t)) {
                        this.D = null;
                    }
                    List unmodifiableList = Collections.unmodifiableList(j12);
                    Intrinsics.checkNotNullExpressionValue(unmodifiableList, "unmodifiableList(protocolsCopy)");
                    this.f44146t = unmodifiableList;
                    return this;
                }
                throw new IllegalArgumentException("protocols must not contain null");
            } else {
                throw new IllegalArgumentException(("protocols must not contain http/1.0: " + j12).toString());
            }
        }

        public final Builder Q(long j10, TimeUnit unit) {
            Intrinsics.checkNotNullParameter(unit, "unit");
            this.f44152z = ut.e.k("timeout", j10, unit);
            return this;
        }

        public final Builder R(long j10, TimeUnit unit) {
            Intrinsics.checkNotNullParameter(unit, "unit");
            this.A = ut.e.k("timeout", j10, unit);
            return this;
        }

        public final Builder a(Interceptor interceptor) {
            Intrinsics.checkNotNullParameter(interceptor, "interceptor");
            this.f44129c.add(interceptor);
            return this;
        }

        public final Builder b(Interceptor interceptor) {
            Intrinsics.checkNotNullParameter(interceptor, "interceptor");
            this.f44130d.add(interceptor);
            return this;
        }

        public final OkHttpClient c() {
            return new OkHttpClient(this);
        }

        public final Builder d(b bVar) {
            this.f44137k = bVar;
            return this;
        }

        public final Builder e(long j10, TimeUnit unit) {
            Intrinsics.checkNotNullParameter(unit, "unit");
            this.f44150x = ut.e.k("timeout", j10, unit);
            return this;
        }

        public final Builder f(long j10, TimeUnit unit) {
            Intrinsics.checkNotNullParameter(unit, "unit");
            this.f44151y = ut.e.k("timeout", j10, unit);
            return this;
        }

        public final Builder g(CookieJar cookieJar) {
            Intrinsics.checkNotNullParameter(cookieJar, "cookieJar");
            this.f44136j = cookieJar;
            return this;
        }

        public final Builder h(Dispatcher dispatcher) {
            Intrinsics.checkNotNullParameter(dispatcher, "dispatcher");
            this.f44127a = dispatcher;
            return this;
        }

        public final Builder i(tt.h dns) {
            Intrinsics.checkNotNullParameter(dns, "dns");
            if (!Intrinsics.areEqual(dns, this.f44138l)) {
                this.D = null;
            }
            this.f44138l = dns;
            return this;
        }

        public final Builder j(e eventListener) {
            Intrinsics.checkNotNullParameter(eventListener, "eventListener");
            this.f44131e = ut.e.g(eventListener);
            return this;
        }

        public final Builder k(boolean z10) {
            this.f44134h = z10;
            return this;
        }

        public final tt.a l() {
            return this.f44133g;
        }

        public final b m() {
            return this.f44137k;
        }

        public final int n() {
            return this.f44150x;
        }

        public final gu.c o() {
            return this.f44149w;
        }

        public final tt.c p() {
            return this.f44148v;
        }

        public final int q() {
            return this.f44151y;
        }

        public final tt.f r() {
            return this.f44128b;
        }

        public final List s() {
            return this.f44145s;
        }

        public final CookieJar t() {
            return this.f44136j;
        }

        public final Dispatcher u() {
            return this.f44127a;
        }

        public final tt.h v() {
            return this.f44138l;
        }

        public final e.c w() {
            return this.f44131e;
        }

        public final boolean x() {
            return this.f44134h;
        }

        public final boolean y() {
            return this.f44135i;
        }

        public final HostnameVerifier z() {
            return this.f44147u;
        }

        /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
        public Builder(OkHttpClient okHttpClient) {
            this();
            Intrinsics.checkNotNullParameter(okHttpClient, "okHttpClient");
            this.f44127a = okHttpClient.s();
            this.f44128b = okHttpClient.p();
            CollectionsKt.B(this.f44129c, okHttpClient.A());
            CollectionsKt.B(this.f44130d, okHttpClient.C());
            this.f44131e = okHttpClient.u();
            this.f44132f = okHttpClient.M();
            this.f44133g = okHttpClient.i();
            this.f44134h = okHttpClient.v();
            this.f44135i = okHttpClient.w();
            this.f44136j = okHttpClient.r();
            this.f44137k = okHttpClient.j();
            this.f44138l = okHttpClient.t();
            this.f44139m = okHttpClient.H();
            this.f44140n = okHttpClient.J();
            this.f44141o = okHttpClient.I();
            this.f44142p = okHttpClient.N();
            this.f44143q = okHttpClient.B;
            this.f44144r = okHttpClient.R();
            this.f44145s = okHttpClient.q();
            this.f44146t = okHttpClient.G();
            this.f44147u = okHttpClient.z();
            this.f44148v = okHttpClient.m();
            this.f44149w = okHttpClient.l();
            this.f44150x = okHttpClient.k();
            this.f44151y = okHttpClient.o();
            this.f44152z = okHttpClient.K();
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
