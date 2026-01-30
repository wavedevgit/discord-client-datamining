package tt;

import java.net.InetSocketAddress;
import java.net.Proxy;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class k {

    /* renamed from: a  reason: collision with root package name */
    private final okhttp3.a f49954a;

    /* renamed from: b  reason: collision with root package name */
    private final Proxy f49955b;

    /* renamed from: c  reason: collision with root package name */
    private final InetSocketAddress f49956c;

    public k(okhttp3.a address, Proxy proxy, InetSocketAddress socketAddress) {
        Intrinsics.checkNotNullParameter(address, "address");
        Intrinsics.checkNotNullParameter(proxy, "proxy");
        Intrinsics.checkNotNullParameter(socketAddress, "socketAddress");
        this.f49954a = address;
        this.f49955b = proxy;
        this.f49956c = socketAddress;
    }

    public final okhttp3.a a() {
        return this.f49954a;
    }

    public final Proxy b() {
        return this.f49955b;
    }

    public final boolean c() {
        if (this.f49954a.k() != null && this.f49955b.type() == Proxy.Type.HTTP) {
            return true;
        }
        return false;
    }

    public final InetSocketAddress d() {
        return this.f49956c;
    }

    public boolean equals(Object obj) {
        if (obj instanceof k) {
            k kVar = (k) obj;
            if (Intrinsics.areEqual(kVar.f49954a, this.f49954a) && Intrinsics.areEqual(kVar.f49955b, this.f49955b) && Intrinsics.areEqual(kVar.f49956c, this.f49956c)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        return ((((527 + this.f49954a.hashCode()) * 31) + this.f49955b.hashCode()) * 31) + this.f49956c.hashCode();
    }

    public String toString() {
        return "Route{" + this.f49956c + '}';
    }
}
