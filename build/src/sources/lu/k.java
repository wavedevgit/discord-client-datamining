package lu;

import java.net.InetSocketAddress;
import java.net.Proxy;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class k {

    /* renamed from: a  reason: collision with root package name */
    private final okhttp3.a f36641a;

    /* renamed from: b  reason: collision with root package name */
    private final Proxy f36642b;

    /* renamed from: c  reason: collision with root package name */
    private final InetSocketAddress f36643c;

    public k(okhttp3.a address, Proxy proxy, InetSocketAddress socketAddress) {
        Intrinsics.checkNotNullParameter(address, "address");
        Intrinsics.checkNotNullParameter(proxy, "proxy");
        Intrinsics.checkNotNullParameter(socketAddress, "socketAddress");
        this.f36641a = address;
        this.f36642b = proxy;
        this.f36643c = socketAddress;
    }

    public final okhttp3.a a() {
        return this.f36641a;
    }

    public final Proxy b() {
        return this.f36642b;
    }

    public final boolean c() {
        if (this.f36641a.k() != null && this.f36642b.type() == Proxy.Type.HTTP) {
            return true;
        }
        return false;
    }

    public final InetSocketAddress d() {
        return this.f36643c;
    }

    public boolean equals(Object obj) {
        if (obj instanceof k) {
            k kVar = (k) obj;
            if (Intrinsics.areEqual(kVar.f36641a, this.f36641a) && Intrinsics.areEqual(kVar.f36642b, this.f36642b) && Intrinsics.areEqual(kVar.f36643c, this.f36643c)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        return ((((527 + this.f36641a.hashCode()) * 31) + this.f36642b.hashCode()) * 31) + this.f36643c.hashCode();
    }

    public String toString() {
        return "Route{" + this.f36643c + '}';
    }
}
