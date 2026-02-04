package wt;

import java.net.InetSocketAddress;
import java.net.Proxy;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class k {

    /* renamed from: a  reason: collision with root package name */
    private final okhttp3.a f52771a;

    /* renamed from: b  reason: collision with root package name */
    private final Proxy f52772b;

    /* renamed from: c  reason: collision with root package name */
    private final InetSocketAddress f52773c;

    public k(okhttp3.a address, Proxy proxy, InetSocketAddress socketAddress) {
        Intrinsics.checkNotNullParameter(address, "address");
        Intrinsics.checkNotNullParameter(proxy, "proxy");
        Intrinsics.checkNotNullParameter(socketAddress, "socketAddress");
        this.f52771a = address;
        this.f52772b = proxy;
        this.f52773c = socketAddress;
    }

    public final okhttp3.a a() {
        return this.f52771a;
    }

    public final Proxy b() {
        return this.f52772b;
    }

    public final boolean c() {
        if (this.f52771a.k() != null && this.f52772b.type() == Proxy.Type.HTTP) {
            return true;
        }
        return false;
    }

    public final InetSocketAddress d() {
        return this.f52773c;
    }

    public boolean equals(Object obj) {
        if (obj instanceof k) {
            k kVar = (k) obj;
            if (Intrinsics.areEqual(kVar.f52771a, this.f52771a) && Intrinsics.areEqual(kVar.f52772b, this.f52772b) && Intrinsics.areEqual(kVar.f52773c, this.f52773c)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        return ((((527 + this.f52771a.hashCode()) * 31) + this.f52772b.hashCode()) * 31) + this.f52773c.hashCode();
    }

    public String toString() {
        return "Route{" + this.f52773c + '}';
    }
}
