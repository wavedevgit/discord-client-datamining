package bu;

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
import wt.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j {

    /* renamed from: i  reason: collision with root package name */
    public static final a f6857i = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final okhttp3.a f6858a;

    /* renamed from: b  reason: collision with root package name */
    private final h f6859b;

    /* renamed from: c  reason: collision with root package name */
    private final Call f6860c;

    /* renamed from: d  reason: collision with root package name */
    private final okhttp3.e f6861d;

    /* renamed from: e  reason: collision with root package name */
    private List f6862e;

    /* renamed from: f  reason: collision with root package name */
    private int f6863f;

    /* renamed from: g  reason: collision with root package name */
    private List f6864g;

    /* renamed from: h  reason: collision with root package name */
    private final List f6865h;

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
        private final List f6866a;

        /* renamed from: b  reason: collision with root package name */
        private int f6867b;

        public b(List routes) {
            Intrinsics.checkNotNullParameter(routes, "routes");
            this.f6866a = routes;
        }

        public final List a() {
            return this.f6866a;
        }

        public final boolean b() {
            if (this.f6867b < this.f6866a.size()) {
                return true;
            }
            return false;
        }

        public final k c() {
            if (b()) {
                List list = this.f6866a;
                int i10 = this.f6867b;
                this.f6867b = i10 + 1;
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
        this.f6858a = address;
        this.f6859b = routeDatabase;
        this.f6860c = call;
        this.f6861d = eventListener;
        this.f6862e = CollectionsKt.l();
        this.f6864g = CollectionsKt.l();
        this.f6865h = new ArrayList();
        f(address.l(), address.g());
    }

    private final boolean b() {
        if (this.f6863f < this.f6862e.size()) {
            return true;
        }
        return false;
    }

    private final Proxy d() {
        if (b()) {
            List list = this.f6862e;
            int i10 = this.f6863f;
            this.f6863f = i10 + 1;
            Proxy proxy = (Proxy) list.get(i10);
            e(proxy);
            return proxy;
        }
        throw new SocketException("No route to " + this.f6858a.l().i() + "; exhausted proxy configurations: " + this.f6862e);
    }

    private final void e(Proxy proxy) {
        String i10;
        int o10;
        List<InetAddress> lookup;
        ArrayList arrayList = new ArrayList();
        this.f6864g = arrayList;
        if (proxy.type() != Proxy.Type.DIRECT && proxy.type() != Proxy.Type.SOCKS) {
            SocketAddress proxyAddress = proxy.address();
            if (proxyAddress instanceof InetSocketAddress) {
                a aVar = f6857i;
                Intrinsics.checkNotNullExpressionValue(proxyAddress, "proxyAddress");
                InetSocketAddress inetSocketAddress = (InetSocketAddress) proxyAddress;
                i10 = aVar.a(inetSocketAddress);
                o10 = inetSocketAddress.getPort();
            } else {
                throw new IllegalArgumentException(("Proxy.address() is not an InetSocketAddress: " + proxyAddress.getClass()).toString());
            }
        } else {
            i10 = this.f6858a.l().i();
            o10 = this.f6858a.l().o();
        }
        if (1 <= o10 && o10 < 65536) {
            if (proxy.type() == Proxy.Type.SOCKS) {
                arrayList.add(InetSocketAddress.createUnresolved(i10, o10));
                return;
            }
            if (xt.e.i(i10)) {
                lookup = CollectionsKt.e(InetAddress.getByName(i10));
            } else {
                this.f6861d.n(this.f6860c, i10);
                lookup = this.f6858a.c().lookup(i10);
                if (!lookup.isEmpty()) {
                    this.f6861d.m(this.f6860c, i10, lookup);
                } else {
                    throw new UnknownHostException(this.f6858a.c() + " returned no addresses for " + i10);
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
        this.f6861d.p(this.f6860c, httpUrl);
        List g10 = g(proxy, httpUrl, this);
        this.f6862e = g10;
        this.f6863f = 0;
        this.f6861d.o(this.f6860c, httpUrl, g10);
    }

    private static final List g(Proxy proxy, HttpUrl httpUrl, j jVar) {
        if (proxy != null) {
            return CollectionsKt.e(proxy);
        }
        URI t10 = httpUrl.t();
        if (t10.getHost() == null) {
            return xt.e.w(Proxy.NO_PROXY);
        }
        List<Proxy> proxiesOrNull = jVar.f6858a.i().select(t10);
        List<Proxy> list = proxiesOrNull;
        if (list != null && !list.isEmpty()) {
            Intrinsics.checkNotNullExpressionValue(proxiesOrNull, "proxiesOrNull");
            return xt.e.V(proxiesOrNull);
        }
        return xt.e.w(Proxy.NO_PROXY);
    }

    public final boolean a() {
        if (!b() && this.f6865h.isEmpty()) {
            return false;
        }
        return true;
    }

    public final b c() {
        if (a()) {
            ArrayList arrayList = new ArrayList();
            while (b()) {
                Proxy d10 = d();
                for (InetSocketAddress inetSocketAddress : this.f6864g) {
                    k kVar = new k(this.f6858a, d10, inetSocketAddress);
                    if (this.f6859b.c(kVar)) {
                        this.f6865h.add(kVar);
                    } else {
                        arrayList.add(kVar);
                    }
                }
                if (!arrayList.isEmpty()) {
                    break;
                }
            }
            if (arrayList.isEmpty()) {
                CollectionsKt.B(arrayList, this.f6865h);
                this.f6865h.clear();
            }
            return new b(arrayList);
        }
        throw new NoSuchElementException();
    }
}
