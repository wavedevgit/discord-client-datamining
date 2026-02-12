package lu;

import java.net.InetSocketAddress;
import java.net.Proxy;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class k {

    /* renamed from: a  reason: collision with root package name */
    private final okhttp3.a f36073a;

    /* renamed from: b  reason: collision with root package name */
    private final Proxy f36074b;

    /* renamed from: c  reason: collision with root package name */
    private final InetSocketAddress f36075c;

    public k(okhttp3.a address, Proxy proxy, InetSocketAddress socketAddress) {
        Intrinsics.checkNotNullParameter(address, "address");
        Intrinsics.checkNotNullParameter(proxy, "proxy");
        Intrinsics.checkNotNullParameter(socketAddress, "socketAddress");
        this.f36073a = address;
        this.f36074b = proxy;
        this.f36075c = socketAddress;
    }

    public final okhttp3.a a() {
        return this.f36073a;
    }

    public final Proxy b() {
        return this.f36074b;
    }

    public final boolean c() {
        if (this.f36073a.k() != null && this.f36074b.type() == Proxy.Type.HTTP) {
            return true;
        }
        return false;
    }

    public final InetSocketAddress d() {
        return this.f36075c;
    }

    public boolean equals(Object obj) {
        if (obj instanceof k) {
            k kVar = (k) obj;
            if (Intrinsics.areEqual(kVar.f36073a, this.f36073a) && Intrinsics.areEqual(kVar.f36074b, this.f36074b) && Intrinsics.areEqual(kVar.f36075c, this.f36075c)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        return ((((527 + this.f36073a.hashCode()) * 31) + this.f36074b.hashCode()) * 31) + this.f36075c.hashCode();
    }

    public String toString() {
        return "Route{" + this.f36075c + '}';
    }
}
