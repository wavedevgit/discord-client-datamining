package okhttp3;

import java.net.Proxy;
import java.net.ProxySelector;
import java.util.List;
import java.util.Objects;
import javax.net.SocketFactory;
import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.SSLSocketFactory;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.HttpUrl;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final cu.h f42168a;

    /* renamed from: b  reason: collision with root package name */
    private final SocketFactory f42169b;

    /* renamed from: c  reason: collision with root package name */
    private final SSLSocketFactory f42170c;

    /* renamed from: d  reason: collision with root package name */
    private final HostnameVerifier f42171d;

    /* renamed from: e  reason: collision with root package name */
    private final cu.c f42172e;

    /* renamed from: f  reason: collision with root package name */
    private final cu.a f42173f;

    /* renamed from: g  reason: collision with root package name */
    private final Proxy f42174g;

    /* renamed from: h  reason: collision with root package name */
    private final ProxySelector f42175h;

    /* renamed from: i  reason: collision with root package name */
    private final HttpUrl f42176i;

    /* renamed from: j  reason: collision with root package name */
    private final List f42177j;

    /* renamed from: k  reason: collision with root package name */
    private final List f42178k;

    public a(String uriHost, int i10, cu.h dns, SocketFactory socketFactory, SSLSocketFactory sSLSocketFactory, HostnameVerifier hostnameVerifier, cu.c cVar, cu.a proxyAuthenticator, Proxy proxy, List protocols, List connectionSpecs, ProxySelector proxySelector) {
        String str;
        Intrinsics.checkNotNullParameter(uriHost, "uriHost");
        Intrinsics.checkNotNullParameter(dns, "dns");
        Intrinsics.checkNotNullParameter(socketFactory, "socketFactory");
        Intrinsics.checkNotNullParameter(proxyAuthenticator, "proxyAuthenticator");
        Intrinsics.checkNotNullParameter(protocols, "protocols");
        Intrinsics.checkNotNullParameter(connectionSpecs, "connectionSpecs");
        Intrinsics.checkNotNullParameter(proxySelector, "proxySelector");
        this.f42168a = dns;
        this.f42169b = socketFactory;
        this.f42170c = sSLSocketFactory;
        this.f42171d = hostnameVerifier;
        this.f42172e = cVar;
        this.f42173f = proxyAuthenticator;
        this.f42174g = proxy;
        this.f42175h = proxySelector;
        HttpUrl.a aVar = new HttpUrl.a();
        if (sSLSocketFactory != null) {
            str = "https";
        } else {
            str = "http";
        }
        this.f42176i = aVar.q(str).g(uriHost).m(i10).c();
        this.f42177j = du.e.V(protocols);
        this.f42178k = du.e.V(connectionSpecs);
    }

    public final cu.c a() {
        return this.f42172e;
    }

    public final List b() {
        return this.f42178k;
    }

    public final cu.h c() {
        return this.f42168a;
    }

    public final boolean d(a that) {
        Intrinsics.checkNotNullParameter(that, "that");
        if (Intrinsics.areEqual(this.f42168a, that.f42168a) && Intrinsics.areEqual(this.f42173f, that.f42173f) && Intrinsics.areEqual(this.f42177j, that.f42177j) && Intrinsics.areEqual(this.f42178k, that.f42178k) && Intrinsics.areEqual(this.f42175h, that.f42175h) && Intrinsics.areEqual(this.f42174g, that.f42174g) && Intrinsics.areEqual(this.f42170c, that.f42170c) && Intrinsics.areEqual(this.f42171d, that.f42171d) && Intrinsics.areEqual(this.f42172e, that.f42172e) && this.f42176i.o() == that.f42176i.o()) {
            return true;
        }
        return false;
    }

    public final HostnameVerifier e() {
        return this.f42171d;
    }

    public boolean equals(Object obj) {
        if (obj instanceof a) {
            a aVar = (a) obj;
            if (Intrinsics.areEqual(this.f42176i, aVar.f42176i) && d(aVar)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public final List f() {
        return this.f42177j;
    }

    public final Proxy g() {
        return this.f42174g;
    }

    public final cu.a h() {
        return this.f42173f;
    }

    public int hashCode() {
        return ((((((((((((((((((527 + this.f42176i.hashCode()) * 31) + this.f42168a.hashCode()) * 31) + this.f42173f.hashCode()) * 31) + this.f42177j.hashCode()) * 31) + this.f42178k.hashCode()) * 31) + this.f42175h.hashCode()) * 31) + Objects.hashCode(this.f42174g)) * 31) + Objects.hashCode(this.f42170c)) * 31) + Objects.hashCode(this.f42171d)) * 31) + Objects.hashCode(this.f42172e);
    }

    public final ProxySelector i() {
        return this.f42175h;
    }

    public final SocketFactory j() {
        return this.f42169b;
    }

    public final SSLSocketFactory k() {
        return this.f42170c;
    }

    public final HttpUrl l() {
        return this.f42176i;
    }

    public String toString() {
        StringBuilder sb2;
        Object obj;
        StringBuilder sb3 = new StringBuilder();
        sb3.append("Address{");
        sb3.append(this.f42176i.i());
        sb3.append(':');
        sb3.append(this.f42176i.o());
        sb3.append(", ");
        if (this.f42174g != null) {
            sb2 = new StringBuilder();
            sb2.append("proxy=");
            obj = this.f42174g;
        } else {
            sb2 = new StringBuilder();
            sb2.append("proxySelector=");
            obj = this.f42175h;
        }
        sb2.append(obj);
        sb3.append(sb2.toString());
        sb3.append('}');
        return sb3.toString();
    }
}
