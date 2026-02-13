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
    public static final a f46329i = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final okhttp3.a f46330a;

    /* renamed from: b  reason: collision with root package name */
    private final h f46331b;

    /* renamed from: c  reason: collision with root package name */
    private final Call f46332c;

    /* renamed from: d  reason: collision with root package name */
    private final okhttp3.e f46333d;

    /* renamed from: e  reason: collision with root package name */
    private List f46334e;

    /* renamed from: f  reason: collision with root package name */
    private int f46335f;

    /* renamed from: g  reason: collision with root package name */
    private List f46336g;

    /* renamed from: h  reason: collision with root package name */
    private final List f46337h;

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
        private final List f46338a;

        /* renamed from: b  reason: collision with root package name */
        private int f46339b;

        public b(List routes) {
            Intrinsics.checkNotNullParameter(routes, "routes");
            this.f46338a = routes;
        }

        public final List a() {
            return this.f46338a;
        }

        public final boolean b() {
            if (this.f46339b < this.f46338a.size()) {
                return true;
            }
            return false;
        }

        public final k c() {
            if (b()) {
                List list = this.f46338a;
                int i10 = this.f46339b;
                this.f46339b = i10 + 1;
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
        this.f46330a = address;
        this.f46331b = routeDatabase;
        this.f46332c = call;
        this.f46333d = eventListener;
        this.f46334e = CollectionsKt.l();
        this.f46336g = CollectionsKt.l();
        this.f46337h = new ArrayList();
        f(address.l(), address.g());
    }

    private final boolean b() {
        if (this.f46335f < this.f46334e.size()) {
            return true;
        }
        return false;
    }

    private final Proxy d() {
        if (b()) {
            List list = this.f46334e;
            int i10 = this.f46335f;
            this.f46335f = i10 + 1;
            Proxy proxy = (Proxy) list.get(i10);
            e(proxy);
            return proxy;
        }
        throw new SocketException("No route to " + this.f46330a.l().i() + "; exhausted proxy configurations: " + this.f46334e);
    }

    private final void e(Proxy proxy) {
        String i10;
        int o10;
        List<InetAddress> lookup;
        ArrayList arrayList = new ArrayList();
        this.f46336g = arrayList;
        if (proxy.type() != Proxy.Type.DIRECT && proxy.type() != Proxy.Type.SOCKS) {
            SocketAddress proxyAddress = proxy.address();
            if (proxyAddress instanceof InetSocketAddress) {
                a aVar = f46329i;
                Intrinsics.checkNotNullExpressionValue(proxyAddress, "proxyAddress");
                InetSocketAddress inetSocketAddress = (InetSocketAddress) proxyAddress;
                i10 = aVar.a(inetSocketAddress);
                o10 = inetSocketAddress.getPort();
            } else {
                throw new IllegalArgumentException(("Proxy.address() is not an InetSocketAddress: " + proxyAddress.getClass()).toString());
            }
        } else {
            i10 = this.f46330a.l().i();
            o10 = this.f46330a.l().o();
        }
        if (1 <= o10 && o10 < 65536) {
            if (proxy.type() == Proxy.Type.SOCKS) {
                arrayList.add(InetSocketAddress.createUnresolved(i10, o10));
                return;
            }
            if (mu.e.i(i10)) {
                lookup = CollectionsKt.e(InetAddress.getByName(i10));
            } else {
                this.f46333d.n(this.f46332c, i10);
                lookup = this.f46330a.c().lookup(i10);
                if (!lookup.isEmpty()) {
                    this.f46333d.m(this.f46332c, i10, lookup);
                } else {
                    throw new UnknownHostException(this.f46330a.c() + " returned no addresses for " + i10);
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
        this.f46333d.p(this.f46332c, httpUrl);
        List g10 = g(proxy, httpUrl, this);
        this.f46334e = g10;
        this.f46335f = 0;
        this.f46333d.o(this.f46332c, httpUrl, g10);
    }

    private static final List g(Proxy proxy, HttpUrl httpUrl, j jVar) {
        if (proxy != null) {
            return CollectionsKt.e(proxy);
        }
        URI t10 = httpUrl.t();
        if (t10.getHost() == null) {
            return mu.e.w(Proxy.NO_PROXY);
        }
        List<Proxy> proxiesOrNull = jVar.f46330a.i().select(t10);
        List<Proxy> list = proxiesOrNull;
        if (list != null && !list.isEmpty()) {
            Intrinsics.checkNotNullExpressionValue(proxiesOrNull, "proxiesOrNull");
            return mu.e.V(proxiesOrNull);
        }
        return mu.e.w(Proxy.NO_PROXY);
    }

    public final boolean a() {
        if (!b() && this.f46337h.isEmpty()) {
            return false;
        }
        return true;
    }

    public final b c() {
        if (a()) {
            ArrayList arrayList = new ArrayList();
            while (b()) {
                Proxy d10 = d();
                for (InetSocketAddress inetSocketAddress : this.f46336g) {
                    k kVar = new k(this.f46330a, d10, inetSocketAddress);
                    if (this.f46331b.c(kVar)) {
                        this.f46337h.add(kVar);
                    } else {
                        arrayList.add(kVar);
                    }
                }
                if (!arrayList.isEmpty()) {
                    break;
                }
            }
            if (arrayList.isEmpty()) {
                CollectionsKt.B(arrayList, this.f46337h);
                this.f46337h.clear();
            }
            return new b(arrayList);
        }
        throw new NoSuchElementException();
    }
}
