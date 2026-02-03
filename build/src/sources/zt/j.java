package zt;

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
import ut.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j {

    /* renamed from: i  reason: collision with root package name */
    public static final a f56143i = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final okhttp3.a f56144a;

    /* renamed from: b  reason: collision with root package name */
    private final h f56145b;

    /* renamed from: c  reason: collision with root package name */
    private final Call f56146c;

    /* renamed from: d  reason: collision with root package name */
    private final okhttp3.e f56147d;

    /* renamed from: e  reason: collision with root package name */
    private List f56148e;

    /* renamed from: f  reason: collision with root package name */
    private int f56149f;

    /* renamed from: g  reason: collision with root package name */
    private List f56150g;

    /* renamed from: h  reason: collision with root package name */
    private final List f56151h;

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
        private final List f56152a;

        /* renamed from: b  reason: collision with root package name */
        private int f56153b;

        public b(List routes) {
            Intrinsics.checkNotNullParameter(routes, "routes");
            this.f56152a = routes;
        }

        public final List a() {
            return this.f56152a;
        }

        public final boolean b() {
            if (this.f56153b < this.f56152a.size()) {
                return true;
            }
            return false;
        }

        public final k c() {
            if (b()) {
                List list = this.f56152a;
                int i10 = this.f56153b;
                this.f56153b = i10 + 1;
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
        this.f56144a = address;
        this.f56145b = routeDatabase;
        this.f56146c = call;
        this.f56147d = eventListener;
        this.f56148e = CollectionsKt.l();
        this.f56150g = CollectionsKt.l();
        this.f56151h = new ArrayList();
        f(address.l(), address.g());
    }

    private final boolean b() {
        if (this.f56149f < this.f56148e.size()) {
            return true;
        }
        return false;
    }

    private final Proxy d() {
        if (b()) {
            List list = this.f56148e;
            int i10 = this.f56149f;
            this.f56149f = i10 + 1;
            Proxy proxy = (Proxy) list.get(i10);
            e(proxy);
            return proxy;
        }
        throw new SocketException("No route to " + this.f56144a.l().i() + "; exhausted proxy configurations: " + this.f56148e);
    }

    private final void e(Proxy proxy) {
        String i10;
        int o10;
        List<InetAddress> lookup;
        ArrayList arrayList = new ArrayList();
        this.f56150g = arrayList;
        if (proxy.type() != Proxy.Type.DIRECT && proxy.type() != Proxy.Type.SOCKS) {
            SocketAddress proxyAddress = proxy.address();
            if (proxyAddress instanceof InetSocketAddress) {
                a aVar = f56143i;
                Intrinsics.checkNotNullExpressionValue(proxyAddress, "proxyAddress");
                InetSocketAddress inetSocketAddress = (InetSocketAddress) proxyAddress;
                i10 = aVar.a(inetSocketAddress);
                o10 = inetSocketAddress.getPort();
            } else {
                throw new IllegalArgumentException(("Proxy.address() is not an InetSocketAddress: " + proxyAddress.getClass()).toString());
            }
        } else {
            i10 = this.f56144a.l().i();
            o10 = this.f56144a.l().o();
        }
        if (1 <= o10 && o10 < 65536) {
            if (proxy.type() == Proxy.Type.SOCKS) {
                arrayList.add(InetSocketAddress.createUnresolved(i10, o10));
                return;
            }
            if (vt.e.i(i10)) {
                lookup = CollectionsKt.e(InetAddress.getByName(i10));
            } else {
                this.f56147d.n(this.f56146c, i10);
                lookup = this.f56144a.c().lookup(i10);
                if (!lookup.isEmpty()) {
                    this.f56147d.m(this.f56146c, i10, lookup);
                } else {
                    throw new UnknownHostException(this.f56144a.c() + " returned no addresses for " + i10);
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
        this.f56147d.p(this.f56146c, httpUrl);
        List g10 = g(proxy, httpUrl, this);
        this.f56148e = g10;
        this.f56149f = 0;
        this.f56147d.o(this.f56146c, httpUrl, g10);
    }

    private static final List g(Proxy proxy, HttpUrl httpUrl, j jVar) {
        if (proxy != null) {
            return CollectionsKt.e(proxy);
        }
        URI t10 = httpUrl.t();
        if (t10.getHost() == null) {
            return vt.e.w(Proxy.NO_PROXY);
        }
        List<Proxy> proxiesOrNull = jVar.f56144a.i().select(t10);
        List<Proxy> list = proxiesOrNull;
        if (list != null && !list.isEmpty()) {
            Intrinsics.checkNotNullExpressionValue(proxiesOrNull, "proxiesOrNull");
            return vt.e.V(proxiesOrNull);
        }
        return vt.e.w(Proxy.NO_PROXY);
    }

    public final boolean a() {
        if (!b() && this.f56151h.isEmpty()) {
            return false;
        }
        return true;
    }

    public final b c() {
        if (a()) {
            ArrayList arrayList = new ArrayList();
            while (b()) {
                Proxy d10 = d();
                for (InetSocketAddress inetSocketAddress : this.f56150g) {
                    k kVar = new k(this.f56144a, d10, inetSocketAddress);
                    if (this.f56145b.c(kVar)) {
                        this.f56151h.add(kVar);
                    } else {
                        arrayList.add(kVar);
                    }
                }
                if (!arrayList.isEmpty()) {
                    break;
                }
            }
            if (arrayList.isEmpty()) {
                CollectionsKt.B(arrayList, this.f56151h);
                this.f56151h.clear();
            }
            return new b(arrayList);
        }
        throw new NoSuchElementException();
    }
}
