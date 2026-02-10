package cu;

import java.net.InetSocketAddress;
import java.net.Proxy;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class k {

    /* renamed from: a  reason: collision with root package name */
    private final okhttp3.a f20284a;

    /* renamed from: b  reason: collision with root package name */
    private final Proxy f20285b;

    /* renamed from: c  reason: collision with root package name */
    private final InetSocketAddress f20286c;

    public k(okhttp3.a address, Proxy proxy, InetSocketAddress socketAddress) {
        Intrinsics.checkNotNullParameter(address, "address");
        Intrinsics.checkNotNullParameter(proxy, "proxy");
        Intrinsics.checkNotNullParameter(socketAddress, "socketAddress");
        this.f20284a = address;
        this.f20285b = proxy;
        this.f20286c = socketAddress;
    }

    public final okhttp3.a a() {
        return this.f20284a;
    }

    public final Proxy b() {
        return this.f20285b;
    }

    public final boolean c() {
        if (this.f20284a.k() != null && this.f20285b.type() == Proxy.Type.HTTP) {
            return true;
        }
        return false;
    }

    public final InetSocketAddress d() {
        return this.f20286c;
    }

    public boolean equals(Object obj) {
        if (obj instanceof k) {
            k kVar = (k) obj;
            if (Intrinsics.areEqual(kVar.f20284a, this.f20284a) && Intrinsics.areEqual(kVar.f20285b, this.f20285b) && Intrinsics.areEqual(kVar.f20286c, this.f20286c)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        return ((((527 + this.f20284a.hashCode()) * 31) + this.f20285b.hashCode()) * 31) + this.f20286c.hashCode();
    }

    public String toString() {
        return "Route{" + this.f20286c + '}';
    }
}
