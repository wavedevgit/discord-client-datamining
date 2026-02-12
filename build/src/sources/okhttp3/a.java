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
    private final lu.h f40419a;

    /* renamed from: b  reason: collision with root package name */
    private final SocketFactory f40420b;

    /* renamed from: c  reason: collision with root package name */
    private final SSLSocketFactory f40421c;

    /* renamed from: d  reason: collision with root package name */
    private final HostnameVerifier f40422d;

    /* renamed from: e  reason: collision with root package name */
    private final lu.c f40423e;

    /* renamed from: f  reason: collision with root package name */
    private final lu.a f40424f;

    /* renamed from: g  reason: collision with root package name */
    private final Proxy f40425g;

    /* renamed from: h  reason: collision with root package name */
    private final ProxySelector f40426h;

    /* renamed from: i  reason: collision with root package name */
    private final HttpUrl f40427i;

    /* renamed from: j  reason: collision with root package name */
    private final List f40428j;

    /* renamed from: k  reason: collision with root package name */
    private final List f40429k;

    public a(String uriHost, int i10, lu.h dns, SocketFactory socketFactory, SSLSocketFactory sSLSocketFactory, HostnameVerifier hostnameVerifier, lu.c cVar, lu.a proxyAuthenticator, Proxy proxy, List protocols, List connectionSpecs, ProxySelector proxySelector) {
        String str;
        Intrinsics.checkNotNullParameter(uriHost, "uriHost");
        Intrinsics.checkNotNullParameter(dns, "dns");
        Intrinsics.checkNotNullParameter(socketFactory, "socketFactory");
        Intrinsics.checkNotNullParameter(proxyAuthenticator, "proxyAuthenticator");
        Intrinsics.checkNotNullParameter(protocols, "protocols");
        Intrinsics.checkNotNullParameter(connectionSpecs, "connectionSpecs");
        Intrinsics.checkNotNullParameter(proxySelector, "proxySelector");
        this.f40419a = dns;
        this.f40420b = socketFactory;
        this.f40421c = sSLSocketFactory;
        this.f40422d = hostnameVerifier;
        this.f40423e = cVar;
        this.f40424f = proxyAuthenticator;
        this.f40425g = proxy;
        this.f40426h = proxySelector;
        HttpUrl.a aVar = new HttpUrl.a();
        if (sSLSocketFactory != null) {
            str = "https";
        } else {
            str = "http";
        }
        this.f40427i = aVar.q(str).g(uriHost).m(i10).c();
        this.f40428j = mu.e.V(protocols);
        this.f40429k = mu.e.V(connectionSpecs);
    }

    public final lu.c a() {
        return this.f40423e;
    }

    public final List b() {
        return this.f40429k;
    }

    public final lu.h c() {
        return this.f40419a;
    }

    public final boolean d(a that) {
        Intrinsics.checkNotNullParameter(that, "that");
        if (Intrinsics.areEqual(this.f40419a, that.f40419a) && Intrinsics.areEqual(this.f40424f, that.f40424f) && Intrinsics.areEqual(this.f40428j, that.f40428j) && Intrinsics.areEqual(this.f40429k, that.f40429k) && Intrinsics.areEqual(this.f40426h, that.f40426h) && Intrinsics.areEqual(this.f40425g, that.f40425g) && Intrinsics.areEqual(this.f40421c, that.f40421c) && Intrinsics.areEqual(this.f40422d, that.f40422d) && Intrinsics.areEqual(this.f40423e, that.f40423e) && this.f40427i.o() == that.f40427i.o()) {
            return true;
        }
        return false;
    }

    public final HostnameVerifier e() {
        return this.f40422d;
    }

    public boolean equals(Object obj) {
        if (obj instanceof a) {
            a aVar = (a) obj;
            if (Intrinsics.areEqual(this.f40427i, aVar.f40427i) && d(aVar)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public final List f() {
        return this.f40428j;
    }

    public final Proxy g() {
        return this.f40425g;
    }

    public final lu.a h() {
        return this.f40424f;
    }

    public int hashCode() {
        return ((((((((((((((((((527 + this.f40427i.hashCode()) * 31) + this.f40419a.hashCode()) * 31) + this.f40424f.hashCode()) * 31) + this.f40428j.hashCode()) * 31) + this.f40429k.hashCode()) * 31) + this.f40426h.hashCode()) * 31) + Objects.hashCode(this.f40425g)) * 31) + Objects.hashCode(this.f40421c)) * 31) + Objects.hashCode(this.f40422d)) * 31) + Objects.hashCode(this.f40423e);
    }

    public final ProxySelector i() {
        return this.f40426h;
    }

    public final SocketFactory j() {
        return this.f40420b;
    }

    public final SSLSocketFactory k() {
        return this.f40421c;
    }

    public final HttpUrl l() {
        return this.f40427i;
    }

    public String toString() {
        StringBuilder sb2;
        Object obj;
        StringBuilder sb3 = new StringBuilder();
        sb3.append("Address{");
        sb3.append(this.f40427i.i());
        sb3.append(':');
        sb3.append(this.f40427i.o());
        sb3.append(", ");
        if (this.f40425g != null) {
            sb2 = new StringBuilder();
            sb2.append("proxy=");
            obj = this.f40425g;
        } else {
            sb2 = new StringBuilder();
            sb2.append("proxySelector=");
            obj = this.f40426h;
        }
        sb2.append(obj);
        sb3.append(sb2.toString());
        sb3.append('}');
        return sb3.toString();
    }
}
