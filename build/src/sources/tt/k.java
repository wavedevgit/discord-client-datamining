package tt;

import java.net.InetSocketAddress;
import java.net.Proxy;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class k {

    /* renamed from: a  reason: collision with root package name */
    private final okhttp3.a f49938a;

    /* renamed from: b  reason: collision with root package name */
    private final Proxy f49939b;

    /* renamed from: c  reason: collision with root package name */
    private final InetSocketAddress f49940c;

    public k(okhttp3.a address, Proxy proxy, InetSocketAddress socketAddress) {
        Intrinsics.checkNotNullParameter(address, "address");
        Intrinsics.checkNotNullParameter(proxy, "proxy");
        Intrinsics.checkNotNullParameter(socketAddress, "socketAddress");
        this.f49938a = address;
        this.f49939b = proxy;
        this.f49940c = socketAddress;
    }

    public final okhttp3.a a() {
        return this.f49938a;
    }

    public final Proxy b() {
        return this.f49939b;
    }

    public final boolean c() {
        if (this.f49938a.k() != null && this.f49939b.type() == Proxy.Type.HTTP) {
            return true;
        }
        return false;
    }

    public final InetSocketAddress d() {
        return this.f49940c;
    }

    public boolean equals(Object obj) {
        if (obj instanceof k) {
            k kVar = (k) obj;
            if (Intrinsics.areEqual(kVar.f49938a, this.f49938a) && Intrinsics.areEqual(kVar.f49939b, this.f49939b) && Intrinsics.areEqual(kVar.f49940c, this.f49940c)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        return ((((527 + this.f49938a.hashCode()) * 31) + this.f49939b.hashCode()) * 31) + this.f49940c.hashCode();
    }

    public String toString() {
        return "Route{" + this.f49940c + '}';
    }
}
