package qu;

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
import lu.k;
import okhttp3.Call;
import okhttp3.HttpUrl;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j {

    /* renamed from: i  reason: collision with root package name */
    public static final a f45761i = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final okhttp3.a f45762a;

    /* renamed from: b  reason: collision with root package name */
    private final h f45763b;

    /* renamed from: c  reason: collision with root package name */
    private final Call f45764c;

    /* renamed from: d  reason: collision with root package name */
    private final okhttp3.e f45765d;

    /* renamed from: e  reason: collision with root package name */
    private List f45766e;

    /* renamed from: f  reason: collision with root package name */
    private int f45767f;

    /* renamed from: g  reason: collision with root package name */
    private List f45768g;

    /* renamed from: h  reason: collision with root package name */
    private final List f45769h;

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
        private final List f45770a;

        /* renamed from: b  reason: collision with root package name */
        private int f45771b;

        public b(List routes) {
            Intrinsics.checkNotNullParameter(routes, "routes");
            this.f45770a = routes;
        }

        public final List a() {
            return this.f45770a;
        }

        public final boolean b() {
            if (this.f45771b < this.f45770a.size()) {
                return true;
            }
            return false;
        }

        public final k c() {
            if (b()) {
                List list = this.f45770a;
                int i10 = this.f45771b;
                this.f45771b = i10 + 1;
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
        this.f45762a = address;
        this.f45763b = routeDatabase;
        this.f45764c = call;
        this.f45765d = eventListener;
        this.f45766e = CollectionsKt.l();
        this.f45768g = CollectionsKt.l();
        this.f45769h = new ArrayList();
        f(address.l(), address.g());
    }

    private final boolean b() {
        if (this.f45767f < this.f45766e.size()) {
            return true;
        }
        return false;
    }

    private final Proxy d() {
        if (b()) {
            List list = this.f45766e;
            int i10 = this.f45767f;
            this.f45767f = i10 + 1;
            Proxy proxy = (Proxy) list.get(i10);
            e(proxy);
            return proxy;
        }
        throw new SocketException("No route to " + this.f45762a.l().i() + "; exhausted proxy configurations: " + this.f45766e);
    }

    private final void e(Proxy proxy) {
        String i10;
        int o10;
        List<InetAddress> lookup;
        ArrayList arrayList = new ArrayList();
        this.f45768g = arrayList;
        if (proxy.type() != Proxy.Type.DIRECT && proxy.type() != Proxy.Type.SOCKS) {
            SocketAddress proxyAddress = proxy.address();
            if (proxyAddress instanceof InetSocketAddress) {
                a aVar = f45761i;
                Intrinsics.checkNotNullExpressionValue(proxyAddress, "proxyAddress");
                InetSocketAddress inetSocketAddress = (InetSocketAddress) proxyAddress;
                i10 = aVar.a(inetSocketAddress);
                o10 = inetSocketAddress.getPort();
            } else {
                throw new IllegalArgumentException(("Proxy.address() is not an InetSocketAddress: " + proxyAddress.getClass()).toString());
            }
        } else {
            i10 = this.f45762a.l().i();
            o10 = this.f45762a.l().o();
        }
        if (1 <= o10 && o10 < 65536) {
            if (proxy.type() == Proxy.Type.SOCKS) {
                arrayList.add(InetSocketAddress.createUnresolved(i10, o10));
                return;
            }
            if (mu.e.i(i10)) {
                lookup = CollectionsKt.e(InetAddress.getByName(i10));
            } else {
                this.f45765d.n(this.f45764c, i10);
                lookup = this.f45762a.c().lookup(i10);
                if (!lookup.isEmpty()) {
                    this.f45765d.m(this.f45764c, i10, lookup);
                } else {
                    throw new UnknownHostException(this.f45762a.c() + " returned no addresses for " + i10);
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
        this.f45765d.p(this.f45764c, httpUrl);
        List g10 = g(proxy, httpUrl, this);
        this.f45766e = g10;
        this.f45767f = 0;
        this.f45765d.o(this.f45764c, httpUrl, g10);
    }

    private static final List g(Proxy proxy, HttpUrl httpUrl, j jVar) {
        if (proxy != null) {
            return CollectionsKt.e(proxy);
        }
        URI t10 = httpUrl.t();
        if (t10.getHost() == null) {
            return mu.e.w(Proxy.NO_PROXY);
        }
        List<Proxy> proxiesOrNull = jVar.f45762a.i().select(t10);
        List<Proxy> list = proxiesOrNull;
        if (list != null && !list.isEmpty()) {
            Intrinsics.checkNotNullExpressionValue(proxiesOrNull, "proxiesOrNull");
            return mu.e.V(proxiesOrNull);
        }
        return mu.e.w(Proxy.NO_PROXY);
    }

    public final boolean a() {
        if (!b() && this.f45769h.isEmpty()) {
            return false;
        }
        return true;
    }

    public final b c() {
        if (a()) {
            ArrayList arrayList = new ArrayList();
            while (b()) {
                Proxy d10 = d();
                for (InetSocketAddress inetSocketAddress : this.f45768g) {
                    k kVar = new k(this.f45762a, d10, inetSocketAddress);
                    if (this.f45763b.c(kVar)) {
                        this.f45769h.add(kVar);
                    } else {
                        arrayList.add(kVar);
                    }
                }
                if (!arrayList.isEmpty()) {
                    break;
                }
            }
            if (arrayList.isEmpty()) {
                CollectionsKt.B(arrayList, this.f45769h);
                this.f45769h.clear();
            }
            return new b(arrayList);
        }
        throw new NoSuchElementException();
    }
}
