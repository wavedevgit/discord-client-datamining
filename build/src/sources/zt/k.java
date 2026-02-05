package zt;

import java.net.InetSocketAddress;
import java.net.Proxy;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class k {

    /* renamed from: a  reason: collision with root package name */
    private final okhttp3.a f56300a;

    /* renamed from: b  reason: collision with root package name */
    private final Proxy f56301b;

    /* renamed from: c  reason: collision with root package name */
    private final InetSocketAddress f56302c;

    public k(okhttp3.a address, Proxy proxy, InetSocketAddress socketAddress) {
        Intrinsics.checkNotNullParameter(address, "address");
        Intrinsics.checkNotNullParameter(proxy, "proxy");
        Intrinsics.checkNotNullParameter(socketAddress, "socketAddress");
        this.f56300a = address;
        this.f56301b = proxy;
        this.f56302c = socketAddress;
    }

    public final okhttp3.a a() {
        return this.f56300a;
    }

    public final Proxy b() {
        return this.f56301b;
    }

    public final boolean c() {
        if (this.f56300a.k() != null && this.f56301b.type() == Proxy.Type.HTTP) {
            return true;
        }
        return false;
    }

    public final InetSocketAddress d() {
        return this.f56302c;
    }

    public boolean equals(Object obj) {
        if (obj instanceof k) {
            k kVar = (k) obj;
            if (Intrinsics.areEqual(kVar.f56300a, this.f56300a) && Intrinsics.areEqual(kVar.f56301b, this.f56301b) && Intrinsics.areEqual(kVar.f56302c, this.f56302c)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        return ((((527 + this.f56300a.hashCode()) * 31) + this.f56301b.hashCode()) * 31) + this.f56302c.hashCode();
    }

    public String toString() {
        return "Route{" + this.f56302c + '}';
    }
}
