package wt;

import java.net.InetSocketAddress;
import java.net.Proxy;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class k {

    /* renamed from: a  reason: collision with root package name */
    private final okhttp3.a f52774a;

    /* renamed from: b  reason: collision with root package name */
    private final Proxy f52775b;

    /* renamed from: c  reason: collision with root package name */
    private final InetSocketAddress f52776c;

    public k(okhttp3.a address, Proxy proxy, InetSocketAddress socketAddress) {
        Intrinsics.checkNotNullParameter(address, "address");
        Intrinsics.checkNotNullParameter(proxy, "proxy");
        Intrinsics.checkNotNullParameter(socketAddress, "socketAddress");
        this.f52774a = address;
        this.f52775b = proxy;
        this.f52776c = socketAddress;
    }

    public final okhttp3.a a() {
        return this.f52774a;
    }

    public final Proxy b() {
        return this.f52775b;
    }

    public final boolean c() {
        if (this.f52774a.k() != null && this.f52775b.type() == Proxy.Type.HTTP) {
            return true;
        }
        return false;
    }

    public final InetSocketAddress d() {
        return this.f52776c;
    }

    public boolean equals(Object obj) {
        if (obj instanceof k) {
            k kVar = (k) obj;
            if (Intrinsics.areEqual(kVar.f52774a, this.f52774a) && Intrinsics.areEqual(kVar.f52775b, this.f52775b) && Intrinsics.areEqual(kVar.f52776c, this.f52776c)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        return ((((527 + this.f52774a.hashCode()) * 31) + this.f52775b.hashCode()) * 31) + this.f52776c.hashCode();
    }

    public String toString() {
        return "Route{" + this.f52776c + '}';
    }
}
