package bu;

import java.net.InetSocketAddress;
import java.net.Proxy;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class k {

    /* renamed from: a  reason: collision with root package name */
    private final okhttp3.a f7129a;

    /* renamed from: b  reason: collision with root package name */
    private final Proxy f7130b;

    /* renamed from: c  reason: collision with root package name */
    private final InetSocketAddress f7131c;

    public k(okhttp3.a address, Proxy proxy, InetSocketAddress socketAddress) {
        Intrinsics.checkNotNullParameter(address, "address");
        Intrinsics.checkNotNullParameter(proxy, "proxy");
        Intrinsics.checkNotNullParameter(socketAddress, "socketAddress");
        this.f7129a = address;
        this.f7130b = proxy;
        this.f7131c = socketAddress;
    }

    public final okhttp3.a a() {
        return this.f7129a;
    }

    public final Proxy b() {
        return this.f7130b;
    }

    public final boolean c() {
        if (this.f7129a.k() != null && this.f7130b.type() == Proxy.Type.HTTP) {
            return true;
        }
        return false;
    }

    public final InetSocketAddress d() {
        return this.f7131c;
    }

    public boolean equals(Object obj) {
        if (obj instanceof k) {
            k kVar = (k) obj;
            if (Intrinsics.areEqual(kVar.f7129a, this.f7129a) && Intrinsics.areEqual(kVar.f7130b, this.f7130b) && Intrinsics.areEqual(kVar.f7131c, this.f7131c)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        return ((((527 + this.f7129a.hashCode()) * 31) + this.f7130b.hashCode()) * 31) + this.f7131c.hashCode();
    }

    public String toString() {
        return "Route{" + this.f7131c + '}';
    }
}
