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
    private final lu.h f40987a;

    /* renamed from: b  reason: collision with root package name */
    private final SocketFactory f40988b;

    /* renamed from: c  reason: collision with root package name */
    private final SSLSocketFactory f40989c;

    /* renamed from: d  reason: collision with root package name */
    private final HostnameVerifier f40990d;

    /* renamed from: e  reason: collision with root package name */
    private final lu.c f40991e;

    /* renamed from: f  reason: collision with root package name */
    private final lu.a f40992f;

    /* renamed from: g  reason: collision with root package name */
    private final Proxy f40993g;

    /* renamed from: h  reason: collision with root package name */
    private final ProxySelector f40994h;

    /* renamed from: i  reason: collision with root package name */
    private final HttpUrl f40995i;

    /* renamed from: j  reason: collision with root package name */
    private final List f40996j;

    /* renamed from: k  reason: collision with root package name */
    private final List f40997k;

    public a(String uriHost, int i10, lu.h dns, SocketFactory socketFactory, SSLSocketFactory sSLSocketFactory, HostnameVerifier hostnameVerifier, lu.c cVar, lu.a proxyAuthenticator, Proxy proxy, List protocols, List connectionSpecs, ProxySelector proxySelector) {
        String str;
        Intrinsics.checkNotNullParameter(uriHost, "uriHost");
        Intrinsics.checkNotNullParameter(dns, "dns");
        Intrinsics.checkNotNullParameter(socketFactory, "socketFactory");
        Intrinsics.checkNotNullParameter(proxyAuthenticator, "proxyAuthenticator");
        Intrinsics.checkNotNullParameter(protocols, "protocols");
        Intrinsics.checkNotNullParameter(connectionSpecs, "connectionSpecs");
        Intrinsics.checkNotNullParameter(proxySelector, "proxySelector");
        this.f40987a = dns;
        this.f40988b = socketFactory;
        this.f40989c = sSLSocketFactory;
        this.f40990d = hostnameVerifier;
        this.f40991e = cVar;
        this.f40992f = proxyAuthenticator;
        this.f40993g = proxy;
        this.f40994h = proxySelector;
        HttpUrl.a aVar = new HttpUrl.a();
        if (sSLSocketFactory != null) {
            str = "https";
        } else {
            str = "http";
        }
        this.f40995i = aVar.q(str).g(uriHost).m(i10).c();
        this.f40996j = mu.e.V(protocols);
        this.f40997k = mu.e.V(connectionSpecs);
    }

    public final lu.c a() {
        return this.f40991e;
    }

    public final List b() {
        return this.f40997k;
    }

    public final lu.h c() {
        return this.f40987a;
    }

    public final boolean d(a that) {
        Intrinsics.checkNotNullParameter(that, "that");
        if (Intrinsics.areEqual(this.f40987a, that.f40987a) && Intrinsics.areEqual(this.f40992f, that.f40992f) && Intrinsics.areEqual(this.f40996j, that.f40996j) && Intrinsics.areEqual(this.f40997k, that.f40997k) && Intrinsics.areEqual(this.f40994h, that.f40994h) && Intrinsics.areEqual(this.f40993g, that.f40993g) && Intrinsics.areEqual(this.f40989c, that.f40989c) && Intrinsics.areEqual(this.f40990d, that.f40990d) && Intrinsics.areEqual(this.f40991e, that.f40991e) && this.f40995i.o() == that.f40995i.o()) {
            return true;
        }
        return false;
    }

    public final HostnameVerifier e() {
        return this.f40990d;
    }

    public boolean equals(Object obj) {
        if (obj instanceof a) {
            a aVar = (a) obj;
            if (Intrinsics.areEqual(this.f40995i, aVar.f40995i) && d(aVar)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public final List f() {
        return this.f40996j;
    }

    public final Proxy g() {
        return this.f40993g;
    }

    public final lu.a h() {
        return this.f40992f;
    }

    public int hashCode() {
        return ((((((((((((((((((527 + this.f40995i.hashCode()) * 31) + this.f40987a.hashCode()) * 31) + this.f40992f.hashCode()) * 31) + this.f40996j.hashCode()) * 31) + this.f40997k.hashCode()) * 31) + this.f40994h.hashCode()) * 31) + Objects.hashCode(this.f40993g)) * 31) + Objects.hashCode(this.f40989c)) * 31) + Objects.hashCode(this.f40990d)) * 31) + Objects.hashCode(this.f40991e);
    }

    public final ProxySelector i() {
        return this.f40994h;
    }

    public final SocketFactory j() {
        return this.f40988b;
    }

    public final SSLSocketFactory k() {
        return this.f40989c;
    }

    public final HttpUrl l() {
        return this.f40995i;
    }

    public String toString() {
        StringBuilder sb2;
        Object obj;
        StringBuilder sb3 = new StringBuilder();
        sb3.append("Address{");
        sb3.append(this.f40995i.i());
        sb3.append(':');
        sb3.append(this.f40995i.o());
        sb3.append(", ");
        if (this.f40993g != null) {
            sb2 = new StringBuilder();
            sb2.append("proxy=");
            obj = this.f40993g;
        } else {
            sb2 = new StringBuilder();
            sb2.append("proxySelector=");
            obj = this.f40994h;
        }
        sb2.append(obj);
        sb3.append(sb2.toString());
        sb3.append('}');
        return sb3.toString();
    }
}
