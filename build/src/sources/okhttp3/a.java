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
    private final bu.h f43041a;

    /* renamed from: b  reason: collision with root package name */
    private final SocketFactory f43042b;

    /* renamed from: c  reason: collision with root package name */
    private final SSLSocketFactory f43043c;

    /* renamed from: d  reason: collision with root package name */
    private final HostnameVerifier f43044d;

    /* renamed from: e  reason: collision with root package name */
    private final bu.c f43045e;

    /* renamed from: f  reason: collision with root package name */
    private final bu.a f43046f;

    /* renamed from: g  reason: collision with root package name */
    private final Proxy f43047g;

    /* renamed from: h  reason: collision with root package name */
    private final ProxySelector f43048h;

    /* renamed from: i  reason: collision with root package name */
    private final HttpUrl f43049i;

    /* renamed from: j  reason: collision with root package name */
    private final List f43050j;

    /* renamed from: k  reason: collision with root package name */
    private final List f43051k;

    public a(String uriHost, int i10, bu.h dns, SocketFactory socketFactory, SSLSocketFactory sSLSocketFactory, HostnameVerifier hostnameVerifier, bu.c cVar, bu.a proxyAuthenticator, Proxy proxy, List protocols, List connectionSpecs, ProxySelector proxySelector) {
        String str;
        Intrinsics.checkNotNullParameter(uriHost, "uriHost");
        Intrinsics.checkNotNullParameter(dns, "dns");
        Intrinsics.checkNotNullParameter(socketFactory, "socketFactory");
        Intrinsics.checkNotNullParameter(proxyAuthenticator, "proxyAuthenticator");
        Intrinsics.checkNotNullParameter(protocols, "protocols");
        Intrinsics.checkNotNullParameter(connectionSpecs, "connectionSpecs");
        Intrinsics.checkNotNullParameter(proxySelector, "proxySelector");
        this.f43041a = dns;
        this.f43042b = socketFactory;
        this.f43043c = sSLSocketFactory;
        this.f43044d = hostnameVerifier;
        this.f43045e = cVar;
        this.f43046f = proxyAuthenticator;
        this.f43047g = proxy;
        this.f43048h = proxySelector;
        HttpUrl.a aVar = new HttpUrl.a();
        if (sSLSocketFactory != null) {
            str = "https";
        } else {
            str = "http";
        }
        this.f43049i = aVar.q(str).g(uriHost).m(i10).c();
        this.f43050j = cu.e.V(protocols);
        this.f43051k = cu.e.V(connectionSpecs);
    }

    public final bu.c a() {
        return this.f43045e;
    }

    public final List b() {
        return this.f43051k;
    }

    public final bu.h c() {
        return this.f43041a;
    }

    public final boolean d(a that) {
        Intrinsics.checkNotNullParameter(that, "that");
        if (Intrinsics.areEqual(this.f43041a, that.f43041a) && Intrinsics.areEqual(this.f43046f, that.f43046f) && Intrinsics.areEqual(this.f43050j, that.f43050j) && Intrinsics.areEqual(this.f43051k, that.f43051k) && Intrinsics.areEqual(this.f43048h, that.f43048h) && Intrinsics.areEqual(this.f43047g, that.f43047g) && Intrinsics.areEqual(this.f43043c, that.f43043c) && Intrinsics.areEqual(this.f43044d, that.f43044d) && Intrinsics.areEqual(this.f43045e, that.f43045e) && this.f43049i.o() == that.f43049i.o()) {
            return true;
        }
        return false;
    }

    public final HostnameVerifier e() {
        return this.f43044d;
    }

    public boolean equals(Object obj) {
        if (obj instanceof a) {
            a aVar = (a) obj;
            if (Intrinsics.areEqual(this.f43049i, aVar.f43049i) && d(aVar)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public final List f() {
        return this.f43050j;
    }

    public final Proxy g() {
        return this.f43047g;
    }

    public final bu.a h() {
        return this.f43046f;
    }

    public int hashCode() {
        return ((((((((((((((((((527 + this.f43049i.hashCode()) * 31) + this.f43041a.hashCode()) * 31) + this.f43046f.hashCode()) * 31) + this.f43050j.hashCode()) * 31) + this.f43051k.hashCode()) * 31) + this.f43048h.hashCode()) * 31) + Objects.hashCode(this.f43047g)) * 31) + Objects.hashCode(this.f43043c)) * 31) + Objects.hashCode(this.f43044d)) * 31) + Objects.hashCode(this.f43045e);
    }

    public final ProxySelector i() {
        return this.f43048h;
    }

    public final SocketFactory j() {
        return this.f43042b;
    }

    public final SSLSocketFactory k() {
        return this.f43043c;
    }

    public final HttpUrl l() {
        return this.f43049i;
    }

    public String toString() {
        StringBuilder sb2;
        Object obj;
        StringBuilder sb3 = new StringBuilder();
        sb3.append("Address{");
        sb3.append(this.f43049i.i());
        sb3.append(':');
        sb3.append(this.f43049i.o());
        sb3.append(", ");
        if (this.f43047g != null) {
            sb2 = new StringBuilder();
            sb2.append("proxy=");
            obj = this.f43047g;
        } else {
            sb2 = new StringBuilder();
            sb2.append("proxySelector=");
            obj = this.f43048h;
        }
        sb2.append(obj);
        sb3.append(sb2.toString());
        sb3.append('}');
        return sb3.toString();
    }
}
