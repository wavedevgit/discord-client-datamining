package yt;

import java.net.InetAddress;
import java.net.InetSocketAddress;
import java.net.Proxy;
import java.net.SocketAddress;
import java.net.SocketException;
import java.net.URI;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.Call;
import okhttp3.HttpUrl;
import tt.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j {

    /* renamed from: i  reason: collision with root package name */
    public static final a f55063i = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final okhttp3.a f55064a;

    /* renamed from: b  reason: collision with root package name */
    private final h f55065b;

    /* renamed from: c  reason: collision with root package name */
    private final Call f55066c;

    /* renamed from: d  reason: collision with root package name */
    private final okhttp3.e f55067d;

    /* renamed from: e  reason: collision with root package name */
    private List f55068e;

    /* renamed from: f  reason: collision with root package name */
    private int f55069f;

    /* renamed from: g  reason: collision with root package name */
    private List f55070g;

    /* renamed from: h  reason: collision with root package name */
    private final List f55071h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final String a(InetSocketAddress inetSocketAddress) {
            Intrinsics.checkNotNullParameter(inetSocketAddress, "<this>");
            InetAddress address = inetSocketAddress.getAddress();
            if (address == null) {
                String hostName = inetSocketAddress.getHostName();
                Intrinsics.checkNotNullExpressionValue(hostName, "hostName");
                return hostName;
            }
            String hostAddress = address.getHostAddress();
            Intrinsics.checkNotNullExpressionValue(hostAddress, "address.hostAddress");
            return hostAddress;
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final List f55072a;

        /* renamed from: b  reason: collision with root package name */
        private int f55073b;

        public b(List routes) {
            Intrinsics.checkNotNullParameter(routes, "routes");
            this.f55072a = routes;
        }

        public final List a() {
            return this.f55072a;
        }

        public final boolean b() {
            if (this.f55073b < this.f55072a.size()) {
                return true;
            }
            return false;
        }

        public final k c() {
            if (b()) {
                List list = this.f55072a;
                int i10 = this.f55073b;
                this.f55073b = i10 + 1;
                return (k) list.get(i10);
            }
            throw new NoSuchElementException();
        }
    }

    public j(okhttp3.a address, h routeDatabase, Call call, okhttp3.e eventListener) {
        Intrinsics.checkNotNullParameter(address, "address");
        Intrinsics.checkNotNullParameter(routeDatabase, "routeDatabase");
        Intrinsics.checkNotNullParameter(call, "call");
        Intrinsics.checkNotNullParameter(eventListener, "eventListener");
        this.f55064a = address;
        this.f55065b = routeDatabase;
        this.f55066c = call;
        this.f55067d = eventListener;
        this.f55068e = CollectionsKt.l();
        this.f55070g = CollectionsKt.l();
        this.f55071h = new ArrayList();
        f(address.l(), address.g());
    }

    private final boolean b() {
        if (this.f55069f < this.f55068e.size()) {
            return true;
        }
        return false;
    }

    private final Proxy d() {
        if (b()) {
            List list = this.f55068e;
            int i10 = this.f55069f;
            this.f55069f = i10 + 1;
            Proxy proxy = (Proxy) list.get(i10);
            e(proxy);
            return proxy;
        }
        throw new SocketException("No route to " + this.f55064a.l().i() + "; exhausted proxy configurations: " + this.f55068e);
    }

    private final void e(Proxy proxy) {
        String i10;
        int o10;
        List<InetAddress> lookup;
        ArrayList arrayList = new ArrayList();
        this.f55070g = arrayList;
        if (proxy.type() != Proxy.Type.DIRECT && proxy.type() != Proxy.Type.SOCKS) {
            SocketAddress proxyAddress = proxy.address();
            if (proxyAddress instanceof InetSocketAddress) {
                a aVar = f55063i;
                Intrinsics.checkNotNullExpressionValue(proxyAddress, "proxyAddress");
                InetSocketAddress inetSocketAddress = (InetSocketAddress) proxyAddress;
                i10 = aVar.a(inetSocketAddress);
                o10 = inetSocketAddress.getPort();
            } else {
                throw new IllegalArgumentException(("Proxy.address() is not an InetSocketAddress: " + proxyAddress.getClass()).toString());
            }
        } else {
            i10 = this.f55064a.l().i();
            o10 = this.f55064a.l().o();
        }
        if (1 <= o10 && o10 < 65536) {
            if (proxy.type() == Proxy.Type.SOCKS) {
                arrayList.add(InetSocketAddress.createUnresolved(i10, o10));
                return;
            }
            if (ut.e.i(i10)) {
                lookup = CollectionsKt.e(InetAddress.getByName(i10));
            } else {
                this.f55067d.n(this.f55066c, i10);
                lookup = this.f55064a.c().lookup(i10);
                if (!lookup.isEmpty()) {
                    this.f55067d.m(this.f55066c, i10, lookup);
                } else {
                    throw new UnknownHostException(this.f55064a.c() + " returned no addresses for " + i10);
                }
            }
            for (InetAddress inetAddress : lookup) {
                arrayList.add(new InetSocketAddress(inetAddress, o10));
            }
            return;
        }
        throw new SocketException("No route to " + i10 + ':' + o10 + "; port is out of range");
    }

    private final void f(HttpUrl httpUrl, Proxy proxy) {
        this.f55067d.p(this.f55066c, httpUrl);
        List g10 = g(proxy, httpUrl, this);
        this.f55068e = g10;
        this.f55069f = 0;
        this.f55067d.o(this.f55066c, httpUrl, g10);
    }

    private static final List g(Proxy proxy, HttpUrl httpUrl, j jVar) {
        if (proxy != null) {
            return CollectionsKt.e(proxy);
        }
        URI t10 = httpUrl.t();
        if (t10.getHost() == null) {
            return ut.e.w(Proxy.NO_PROXY);
        }
        List<Proxy> proxiesOrNull = jVar.f55064a.i().select(t10);
        List<Proxy> list = proxiesOrNull;
        if (list != null && !list.isEmpty()) {
            Intrinsics.checkNotNullExpressionValue(proxiesOrNull, "proxiesOrNull");
            return ut.e.V(proxiesOrNull);
        }
        return ut.e.w(Proxy.NO_PROXY);
    }

    public final boolean a() {
        if (!b() && this.f55071h.isEmpty()) {
            return false;
        }
        return true;
    }

    public final b c() {
        if (a()) {
            ArrayList arrayList = new ArrayList();
            while (b()) {
                Proxy d10 = d();
                for (InetSocketAddress inetSocketAddress : this.f55070g) {
                    k kVar = new k(this.f55064a, d10, inetSocketAddress);
                    if (this.f55065b.c(kVar)) {
                        this.f55071h.add(kVar);
                    } else {
                        arrayList.add(kVar);
                    }
                }
                if (!arrayList.isEmpty()) {
                    break;
                }
            }
            if (arrayList.isEmpty()) {
                CollectionsKt.B(arrayList, this.f55071h);
                this.f55071h.clear();
            }
            return new b(arrayList);
        }
        throw new NoSuchElementException();
    }
}
