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
    private final bu.h f42993a;

    /* renamed from: b  reason: collision with root package name */
    private final SocketFactory f42994b;

    /* renamed from: c  reason: collision with root package name */
    private final SSLSocketFactory f42995c;

    /* renamed from: d  reason: collision with root package name */
    private final HostnameVerifier f42996d;

    /* renamed from: e  reason: collision with root package name */
    private final bu.c f42997e;

    /* renamed from: f  reason: collision with root package name */
    private final bu.a f42998f;

    /* renamed from: g  reason: collision with root package name */
    private final Proxy f42999g;

    /* renamed from: h  reason: collision with root package name */
    private final ProxySelector f43000h;

    /* renamed from: i  reason: collision with root package name */
    private final HttpUrl f43001i;

    /* renamed from: j  reason: collision with root package name */
    private final List f43002j;

    /* renamed from: k  reason: collision with root package name */
    private final List f43003k;

    public a(String uriHost, int i10, bu.h dns, SocketFactory socketFactory, SSLSocketFactory sSLSocketFactory, HostnameVerifier hostnameVerifier, bu.c cVar, bu.a proxyAuthenticator, Proxy proxy, List protocols, List connectionSpecs, ProxySelector proxySelector) {
        String str;
        Intrinsics.checkNotNullParameter(uriHost, "uriHost");
        Intrinsics.checkNotNullParameter(dns, "dns");
        Intrinsics.checkNotNullParameter(socketFactory, "socketFactory");
        Intrinsics.checkNotNullParameter(proxyAuthenticator, "proxyAuthenticator");
        Intrinsics.checkNotNullParameter(protocols, "protocols");
        Intrinsics.checkNotNullParameter(connectionSpecs, "connectionSpecs");
        Intrinsics.checkNotNullParameter(proxySelector, "proxySelector");
        this.f42993a = dns;
        this.f42994b = socketFactory;
        this.f42995c = sSLSocketFactory;
        this.f42996d = hostnameVerifier;
        this.f42997e = cVar;
        this.f42998f = proxyAuthenticator;
        this.f42999g = proxy;
        this.f43000h = proxySelector;
        HttpUrl.a aVar = new HttpUrl.a();
        if (sSLSocketFactory != null) {
            str = "https";
        } else {
            str = "http";
        }
        this.f43001i = aVar.q(str).g(uriHost).m(i10).c();
        this.f43002j = cu.e.V(protocols);
        this.f43003k = cu.e.V(connectionSpecs);
    }

    public final bu.c a() {
        return this.f42997e;
    }

    public final List b() {
        return this.f43003k;
    }

    public final bu.h c() {
        return this.f42993a;
    }

    public final boolean d(a that) {
        Intrinsics.checkNotNullParameter(that, "that");
        if (Intrinsics.areEqual(this.f42993a, that.f42993a) && Intrinsics.areEqual(this.f42998f, that.f42998f) && Intrinsics.areEqual(this.f43002j, that.f43002j) && Intrinsics.areEqual(this.f43003k, that.f43003k) && Intrinsics.areEqual(this.f43000h, that.f43000h) && Intrinsics.areEqual(this.f42999g, that.f42999g) && Intrinsics.areEqual(this.f42995c, that.f42995c) && Intrinsics.areEqual(this.f42996d, that.f42996d) && Intrinsics.areEqual(this.f42997e, that.f42997e) && this.f43001i.o() == that.f43001i.o()) {
            return true;
        }
        return false;
    }

    public final HostnameVerifier e() {
        return this.f42996d;
    }

    public boolean equals(Object obj) {
        if (obj instanceof a) {
            a aVar = (a) obj;
            if (Intrinsics.areEqual(this.f43001i, aVar.f43001i) && d(aVar)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public final List f() {
        return this.f43002j;
    }

    public final Proxy g() {
        return this.f42999g;
    }

    public final bu.a h() {
        return this.f42998f;
    }

    public int hashCode() {
        return ((((((((((((((((((527 + this.f43001i.hashCode()) * 31) + this.f42993a.hashCode()) * 31) + this.f42998f.hashCode()) * 31) + this.f43002j.hashCode()) * 31) + this.f43003k.hashCode()) * 31) + this.f43000h.hashCode()) * 31) + Objects.hashCode(this.f42999g)) * 31) + Objects.hashCode(this.f42995c)) * 31) + Objects.hashCode(this.f42996d)) * 31) + Objects.hashCode(this.f42997e);
    }

    public final ProxySelector i() {
        return this.f43000h;
    }

    public final SocketFactory j() {
        return this.f42994b;
    }

    public final SSLSocketFactory k() {
        return this.f42995c;
    }

    public final HttpUrl l() {
        return this.f43001i;
    }

    public String toString() {
        StringBuilder sb2;
        Object obj;
        StringBuilder sb3 = new StringBuilder();
        sb3.append("Address{");
        sb3.append(this.f43001i.i());
        sb3.append(':');
        sb3.append(this.f43001i.o());
        sb3.append(", ");
        if (this.f42999g != null) {
            sb2 = new StringBuilder();
            sb2.append("proxy=");
            obj = this.f42999g;
        } else {
            sb2 = new StringBuilder();
            sb2.append("proxySelector=");
            obj = this.f43000h;
        }
        sb2.append(obj);
        sb3.append(sb2.toString());
        sb3.append('}');
        return sb3.toString();
    }
}
