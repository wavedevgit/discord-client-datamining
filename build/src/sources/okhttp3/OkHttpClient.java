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
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import lu.j;
import lu.l;
import okhttp3.Call;
import okhttp3.e;
import vu.h;
import yu.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class OkHttpClient implements Cloneable, Call.Factory {
    public static final a P = new a(null);
    private static final List Q = mu.e.w(j.HTTP_2, j.HTTP_1_1);
    private static final List R = mu.e.w(d.f40536i, d.f40538k);
    private final SocketFactory A;
    private final SSLSocketFactory B;
    private final X509TrustManager C;
    private final List D;
    private final List E;
    private final HostnameVerifier F;
    private final lu.c G;
    private final yu.c H;
    private final int I;
    private final int J;
    private final int K;
    private final int L;
    private final int M;
    private final long N;
    private final qu.h O;

    /* renamed from: d  reason: collision with root package name */
    private final Dispatcher f40324d;

    /* renamed from: e  reason: collision with root package name */
    private final lu.f f40325e;

    /* renamed from: i  reason: collision with root package name */
    private final List f40326i;

    /* renamed from: o  reason: collision with root package name */
    private final List f40327o;

    /* renamed from: p  reason: collision with root package name */
    private final e.c f40328p;

    /* renamed from: q  reason: collision with root package name */
    private final boolean f40329q;

    /* renamed from: r  reason: collision with root package name */
    private final lu.a f40330r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f40331s;

    /* renamed from: t  reason: collision with root package name */
    private final boolean f40332t;

    /* renamed from: u  reason: collision with root package name */
    private final CookieJar f40333u;

    /* renamed from: v  reason: collision with root package name */
    private final b f40334v;

    /* renamed from: w  reason: collision with root package name */
    private final lu.h f40335w;

    /* renamed from: x  reason: collision with root package name */
    private final Proxy f40336x;

    /* renamed from: y  reason: collision with root package name */
    private final ProxySelector f40337y;

    /* renamed from: z  reason: collision with root package name */
    private final lu.a f40338z;

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
        this.f40324d = builder.u();
        this.f40325e = builder.r();
        this.f40326i = mu.e.V(builder.A());
        this.f40327o = mu.e.V(builder.C());
        this.f40328p = builder.w();
        this.f40329q = builder.J();
        this.f40330r = builder.l();
        this.f40331s = builder.x();
        this.f40332t = builder.y();
        this.f40333u = builder.t();
        this.f40334v = builder.m();
        this.f40335w = builder.v();
        this.f40336x = builder.F();
        if (builder.F() != null) {
            H = xu.a.f55165a;
        } else {
            H = builder.H();
            H = H == null ? ProxySelector.getDefault() : H;
            if (H == null) {
                H = xu.a.f55165a;
            }
        }
        this.f40337y = H;
        this.f40338z = builder.G();
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
        qu.h K = builder.K();
        this.O = K == null ? new qu.h() : K;
        List<d> list = s10;
        if (!(list instanceof Collection) || !list.isEmpty()) {
            for (d dVar : list) {
                if (dVar.f()) {
                    if (builder.M() != null) {
                        this.B = builder.M();
                        yu.c o10 = builder.o();
                        Intrinsics.checkNotNull(o10);
                        this.H = o10;
                        X509TrustManager O = builder.O();
                        Intrinsics.checkNotNull(O);
                        this.C = O;
                        lu.c p10 = builder.p();
                        Intrinsics.checkNotNull(o10);
                        this.G = p10.e(o10);
                    } else {
                        h.a aVar = vu.h.f52015a;
                        X509TrustManager p11 = aVar.g().p();
                        this.C = p11;
                        vu.h g10 = aVar.g();
                        Intrinsics.checkNotNull(p11);
                        this.B = g10.o(p11);
                        c.a aVar2 = yu.c.f55843a;
                        Intrinsics.checkNotNull(p11);
                        yu.c a10 = aVar2.a(p11);
                        this.H = a10;
                        lu.c p12 = builder.p();
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
        this.G = lu.c.f36048d;
        P();
    }

    private final void P() {
        List list = this.f40326i;
        Intrinsics.checkNotNull(list, "null cannot be cast to non-null type kotlin.collections.List<okhttp3.Interceptor?>");
        if (!list.contains(null)) {
            List list2 = this.f40327o;
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
                            if (Intrinsics.areEqual(this.G, lu.c.f36048d)) {
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
            throw new IllegalStateException(("Null network interceptor: " + this.f40327o).toString());
        }
        throw new IllegalStateException(("Null interceptor: " + this.f40326i).toString());
    }

    public final List A() {
        return this.f40326i;
    }

    public final long B() {
        return this.N;
    }

    public final List D() {
        return this.f40327o;
    }

    public Builder E() {
        return new Builder(this);
    }

    public WebSocket F(Request request, l listener) {
        Intrinsics.checkNotNullParameter(request, "request");
        Intrinsics.checkNotNullParameter(listener, "listener");
        zu.d dVar = new zu.d(pu.e.f43215i, request, listener, new Random(), this.M, null, this.N);
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
        return this.f40336x;
    }

    public final lu.a J() {
        return this.f40338z;
    }

    public final ProxySelector K() {
        return this.f40337y;
    }

    public final int L() {
        return this.K;
    }

    public final boolean M() {
        return this.f40329q;
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
        return new qu.e(this, request, false);
    }

    public final int b() {
        return this.I;
    }

    public final CookieJar c() {
        return this.f40333u;
    }

    public Object clone() {
        return super.clone();
    }

    public final Dispatcher d() {
        return this.f40324d;
    }

    public final lu.a h() {
        return this.f40330r;
    }

    public final b j() {
        return this.f40334v;
    }

    public final int k() {
        return this.I;
    }

    public final yu.c l() {
        return this.H;
    }

    public final lu.c m() {
        return this.G;
    }

    public final int n() {
        return this.J;
    }

    public final lu.f o() {
        return this.f40325e;
    }

    public final List q() {
        return this.D;
    }

    public final CookieJar r() {
        return this.f40333u;
    }

    public final Dispatcher t() {
        return this.f40324d;
    }

    public final lu.h u() {
        return this.f40335w;
    }

    public final e.c v() {
        return this.f40328p;
    }

    public final boolean w() {
        return this.f40331s;
    }

    public final boolean x() {
        return this.f40332t;
    }

    public final qu.h y() {
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
        private qu.h D;

        /* renamed from: a  reason: collision with root package name */
        private Dispatcher f40339a;

        /* renamed from: b  reason: collision with root package name */
        private lu.f f40340b;

        /* renamed from: c  reason: collision with root package name */
        private final List f40341c;

        /* renamed from: d  reason: collision with root package name */
        private final List f40342d;

        /* renamed from: e  reason: collision with root package name */
        private e.c f40343e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f40344f;

        /* renamed from: g  reason: collision with root package name */
        private lu.a f40345g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f40346h;

        /* renamed from: i  reason: collision with root package name */
        private boolean f40347i;

        /* renamed from: j  reason: collision with root package name */
        private CookieJar f40348j;

        /* renamed from: k  reason: collision with root package name */
        private b f40349k;

        /* renamed from: l  reason: collision with root package name */
        private lu.h f40350l;

        /* renamed from: m  reason: collision with root package name */
        private Proxy f40351m;

        /* renamed from: n  reason: collision with root package name */
        private ProxySelector f40352n;

        /* renamed from: o  reason: collision with root package name */
        private lu.a f40353o;

        /* renamed from: p  reason: collision with root package name */
        private SocketFactory f40354p;

        /* renamed from: q  reason: collision with root package name */
        private SSLSocketFactory f40355q;

        /* renamed from: r  reason: collision with root package name */
        private X509TrustManager f40356r;

        /* renamed from: s  reason: collision with root package name */
        private List f40357s;

        /* renamed from: t  reason: collision with root package name */
        private List f40358t;

        /* renamed from: u  reason: collision with root package name */
        private HostnameVerifier f40359u;

        /* renamed from: v  reason: collision with root package name */
        private lu.c f40360v;

        /* renamed from: w  reason: collision with root package name */
        private yu.c f40361w;

        /* renamed from: x  reason: collision with root package name */
        private int f40362x;

        /* renamed from: y  reason: collision with root package name */
        private int f40363y;

        /* renamed from: z  reason: collision with root package name */
        private int f40364z;

        public Builder() {
            this.f40339a = new Dispatcher();
            this.f40340b = new lu.f();
            this.f40341c = new ArrayList();
            this.f40342d = new ArrayList();
            this.f40343e = mu.e.g(e.f40548b);
            this.f40344f = true;
            lu.a aVar = lu.a.f36044b;
            this.f40345g = aVar;
            this.f40346h = true;
            this.f40347i = true;
            this.f40348j = CookieJar.f40264b;
            this.f40350l = lu.h.f36060b;
            this.f40353o = aVar;
            SocketFactory socketFactory = SocketFactory.getDefault();
            Intrinsics.checkNotNullExpressionValue(socketFactory, "getDefault()");
            this.f40354p = socketFactory;
            a aVar2 = OkHttpClient.P;
            this.f40357s = aVar2.a();
            this.f40358t = aVar2.b();
            this.f40359u = yu.d.f55844a;
            this.f40360v = lu.c.f36048d;
            this.f40363y = 10000;
            this.f40364z = 10000;
            this.A = 10000;
            this.C = 1024L;
        }

        public final List A() {
            return this.f40341c;
        }

        public final long B() {
            return this.C;
        }

        public final List C() {
            return this.f40342d;
        }

        public final int D() {
            return this.B;
        }

        public final List E() {
            return this.f40358t;
        }

        public final Proxy F() {
            return this.f40351m;
        }

        public final lu.a G() {
            return this.f40353o;
        }

        public final ProxySelector H() {
            return this.f40352n;
        }

        public final int I() {
            return this.f40364z;
        }

        public final boolean J() {
            return this.f40344f;
        }

        public final qu.h K() {
            return this.D;
        }

        public final SocketFactory L() {
            return this.f40354p;
        }

        public final SSLSocketFactory M() {
            return this.f40355q;
        }

        public final int N() {
            return this.A;
        }

        public final X509TrustManager O() {
            return this.f40356r;
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
                    if (!Intrinsics.areEqual(j12, this.f40358t)) {
                        this.D = null;
                    }
                    List unmodifiableList = Collections.unmodifiableList(j12);
                    Intrinsics.checkNotNullExpressionValue(unmodifiableList, "unmodifiableList(protocolsCopy)");
                    this.f40358t = unmodifiableList;
                    return this;
                }
                throw new IllegalArgumentException("protocols must not contain null");
            } else {
                throw new IllegalArgumentException(("protocols must not contain http/1.0: " + j12).toString());
            }
        }

        public final Builder Q(long j10, TimeUnit unit) {
            Intrinsics.checkNotNullParameter(unit, "unit");
            this.f40364z = mu.e.k("timeout", j10, unit);
            return this;
        }

        public final Builder R(long j10, TimeUnit unit) {
            Intrinsics.checkNotNullParameter(unit, "unit");
            this.A = mu.e.k("timeout", j10, unit);
            return this;
        }

        public final Builder a(Interceptor interceptor) {
            Intrinsics.checkNotNullParameter(interceptor, "interceptor");
            this.f40341c.add(interceptor);
            return this;
        }

        public final Builder b(Interceptor interceptor) {
            Intrinsics.checkNotNullParameter(interceptor, "interceptor");
            this.f40342d.add(interceptor);
            return this;
        }

        public final OkHttpClient c() {
            return new OkHttpClient(this);
        }

        public final Builder d(b bVar) {
            this.f40349k = bVar;
            return this;
        }

        public final Builder e(long j10, TimeUnit unit) {
            Intrinsics.checkNotNullParameter(unit, "unit");
            this.f40362x = mu.e.k("timeout", j10, unit);
            return this;
        }

        public final Builder f(long j10, TimeUnit unit) {
            Intrinsics.checkNotNullParameter(unit, "unit");
            this.f40363y = mu.e.k("timeout", j10, unit);
            return this;
        }

        public final Builder g(CookieJar cookieJar) {
            Intrinsics.checkNotNullParameter(cookieJar, "cookieJar");
            this.f40348j = cookieJar;
            return this;
        }

        public final Builder h(Dispatcher dispatcher) {
            Intrinsics.checkNotNullParameter(dispatcher, "dispatcher");
            this.f40339a = dispatcher;
            return this;
        }

        public final Builder i(lu.h dns) {
            Intrinsics.checkNotNullParameter(dns, "dns");
            if (!Intrinsics.areEqual(dns, this.f40350l)) {
                this.D = null;
            }
            this.f40350l = dns;
            return this;
        }

        public final Builder j(e eventListener) {
            Intrinsics.checkNotNullParameter(eventListener, "eventListener");
            this.f40343e = mu.e.g(eventListener);
            return this;
        }

        public final Builder k(boolean z10) {
            this.f40346h = z10;
            return this;
        }

        public final lu.a l() {
            return this.f40345g;
        }

        public final b m() {
            return this.f40349k;
        }

        public final int n() {
            return this.f40362x;
        }

        public final yu.c o() {
            return this.f40361w;
        }

        public final lu.c p() {
            return this.f40360v;
        }

        public final int q() {
            return this.f40363y;
        }

        public final lu.f r() {
            return this.f40340b;
        }

        public final List s() {
            return this.f40357s;
        }

        public final CookieJar t() {
            return this.f40348j;
        }

        public final Dispatcher u() {
            return this.f40339a;
        }

        public final lu.h v() {
            return this.f40350l;
        }

        public final e.c w() {
            return this.f40343e;
        }

        public final boolean x() {
            return this.f40346h;
        }

        public final boolean y() {
            return this.f40347i;
        }

        public final HostnameVerifier z() {
            return this.f40359u;
        }

        /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
        public Builder(OkHttpClient okHttpClient) {
            this();
            Intrinsics.checkNotNullParameter(okHttpClient, "okHttpClient");
            this.f40339a = okHttpClient.t();
            this.f40340b = okHttpClient.o();
            CollectionsKt.B(this.f40341c, okHttpClient.A());
            CollectionsKt.B(this.f40342d, okHttpClient.D());
            this.f40343e = okHttpClient.v();
            this.f40344f = okHttpClient.M();
            this.f40345g = okHttpClient.h();
            this.f40346h = okHttpClient.w();
            this.f40347i = okHttpClient.x();
            this.f40348j = okHttpClient.r();
            this.f40349k = okHttpClient.j();
            this.f40350l = okHttpClient.u();
            this.f40351m = okHttpClient.I();
            this.f40352n = okHttpClient.K();
            this.f40353o = okHttpClient.J();
            this.f40354p = okHttpClient.N();
            this.f40355q = okHttpClient.B;
            this.f40356r = okHttpClient.S();
            this.f40357s = okHttpClient.q();
            this.f40358t = okHttpClient.H();
            this.f40359u = okHttpClient.z();
            this.f40360v = okHttpClient.m();
            this.f40361w = okHttpClient.l();
            this.f40362x = okHttpClient.k();
            this.f40363y = okHttpClient.n();
            this.f40364z = okHttpClient.L();
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
