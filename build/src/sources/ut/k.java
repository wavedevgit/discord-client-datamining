package ut;

import java.net.InetSocketAddress;
import java.net.Proxy;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class k {

    /* renamed from: a  reason: collision with root package name */
    private final okhttp3.a f50712a;

    /* renamed from: b  reason: collision with root package name */
    private final Proxy f50713b;

    /* renamed from: c  reason: collision with root package name */
    private final InetSocketAddress f50714c;

    public k(okhttp3.a address, Proxy proxy, InetSocketAddress socketAddress) {
        Intrinsics.checkNotNullParameter(address, "address");
        Intrinsics.checkNotNullParameter(proxy, "proxy");
        Intrinsics.checkNotNullParameter(socketAddress, "socketAddress");
        this.f50712a = address;
        this.f50713b = proxy;
        this.f50714c = socketAddress;
    }

    public final okhttp3.a a() {
        return this.f50712a;
    }

    public final Proxy b() {
        return this.f50713b;
    }

    public final boolean c() {
        if (this.f50712a.k() != null && this.f50713b.type() == Proxy.Type.HTTP) {
            return true;
        }
        return false;
    }

    public final InetSocketAddress d() {
        return this.f50714c;
    }

    public boolean equals(Object obj) {
        if (obj instanceof k) {
            k kVar = (k) obj;
            if (Intrinsics.areEqual(kVar.f50712a, this.f50712a) && Intrinsics.areEqual(kVar.f50713b, this.f50713b) && Intrinsics.areEqual(kVar.f50714c, this.f50714c)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        return ((((527 + this.f50712a.hashCode()) * 31) + this.f50713b.hashCode()) * 31) + this.f50714c.hashCode();
    }

    public String toString() {
        return "Route{" + this.f50714c + '}';
    }
}
