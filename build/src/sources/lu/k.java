package lu;

import java.net.InetSocketAddress;
import java.net.Proxy;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class k {

    /* renamed from: a  reason: collision with root package name */
    private final okhttp3.a f36072a;

    /* renamed from: b  reason: collision with root package name */
    private final Proxy f36073b;

    /* renamed from: c  reason: collision with root package name */
    private final InetSocketAddress f36074c;

    public k(okhttp3.a address, Proxy proxy, InetSocketAddress socketAddress) {
        Intrinsics.checkNotNullParameter(address, "address");
        Intrinsics.checkNotNullParameter(proxy, "proxy");
        Intrinsics.checkNotNullParameter(socketAddress, "socketAddress");
        this.f36072a = address;
        this.f36073b = proxy;
        this.f36074c = socketAddress;
    }

    public final okhttp3.a a() {
        return this.f36072a;
    }

    public final Proxy b() {
        return this.f36073b;
    }

    public final boolean c() {
        if (this.f36072a.k() != null && this.f36073b.type() == Proxy.Type.HTTP) {
            return true;
        }
        return false;
    }

    public final InetSocketAddress d() {
        return this.f36074c;
    }

    public boolean equals(Object obj) {
        if (obj instanceof k) {
            k kVar = (k) obj;
            if (Intrinsics.areEqual(kVar.f36072a, this.f36072a) && Intrinsics.areEqual(kVar.f36073b, this.f36073b) && Intrinsics.areEqual(kVar.f36074c, this.f36074c)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        return ((((527 + this.f36072a.hashCode()) * 31) + this.f36073b.hashCode()) * 31) + this.f36074c.hashCode();
    }

    public String toString() {
        return "Route{" + this.f36074c + '}';
    }
}
