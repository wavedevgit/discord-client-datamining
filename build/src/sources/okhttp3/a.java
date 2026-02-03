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
    private final wt.h f44134a;

    /* renamed from: b  reason: collision with root package name */
    private final SocketFactory f44135b;

    /* renamed from: c  reason: collision with root package name */
    private final SSLSocketFactory f44136c;

    /* renamed from: d  reason: collision with root package name */
    private final HostnameVerifier f44137d;

    /* renamed from: e  reason: collision with root package name */
    private final wt.c f44138e;

    /* renamed from: f  reason: collision with root package name */
    private final wt.a f44139f;

    /* renamed from: g  reason: collision with root package name */
    private final Proxy f44140g;

    /* renamed from: h  reason: collision with root package name */
    private final ProxySelector f44141h;

    /* renamed from: i  reason: collision with root package name */
    private final HttpUrl f44142i;

    /* renamed from: j  reason: collision with root package name */
    private final List f44143j;

    /* renamed from: k  reason: collision with root package name */
    private final List f44144k;

    public a(String uriHost, int i10, wt.h dns, SocketFactory socketFactory, SSLSocketFactory sSLSocketFactory, HostnameVerifier hostnameVerifier, wt.c cVar, wt.a proxyAuthenticator, Proxy proxy, List protocols, List connectionSpecs, ProxySelector proxySelector) {
        String str;
        Intrinsics.checkNotNullParameter(uriHost, "uriHost");
        Intrinsics.checkNotNullParameter(dns, "dns");
        Intrinsics.checkNotNullParameter(socketFactory, "socketFactory");
        Intrinsics.checkNotNullParameter(proxyAuthenticator, "proxyAuthenticator");
        Intrinsics.checkNotNullParameter(protocols, "protocols");
        Intrinsics.checkNotNullParameter(connectionSpecs, "connectionSpecs");
        Intrinsics.checkNotNullParameter(proxySelector, "proxySelector");
        this.f44134a = dns;
        this.f44135b = socketFactory;
        this.f44136c = sSLSocketFactory;
        this.f44137d = hostnameVerifier;
        this.f44138e = cVar;
        this.f44139f = proxyAuthenticator;
        this.f44140g = proxy;
        this.f44141h = proxySelector;
        HttpUrl.a aVar = new HttpUrl.a();
        if (sSLSocketFactory != null) {
            str = "https";
        } else {
            str = "http";
        }
        this.f44142i = aVar.q(str).g(uriHost).m(i10).c();
        this.f44143j = xt.e.V(protocols);
        this.f44144k = xt.e.V(connectionSpecs);
    }

    public final wt.c a() {
        return this.f44138e;
    }

    public final List b() {
        return this.f44144k;
    }

    public final wt.h c() {
        return this.f44134a;
    }

    public final boolean d(a that) {
        Intrinsics.checkNotNullParameter(that, "that");
        if (Intrinsics.areEqual(this.f44134a, that.f44134a) && Intrinsics.areEqual(this.f44139f, that.f44139f) && Intrinsics.areEqual(this.f44143j, that.f44143j) && Intrinsics.areEqual(this.f44144k, that.f44144k) && Intrinsics.areEqual(this.f44141h, that.f44141h) && Intrinsics.areEqual(this.f44140g, that.f44140g) && Intrinsics.areEqual(this.f44136c, that.f44136c) && Intrinsics.areEqual(this.f44137d, that.f44137d) && Intrinsics.areEqual(this.f44138e, that.f44138e) && this.f44142i.o() == that.f44142i.o()) {
            return true;
        }
        return false;
    }

    public final HostnameVerifier e() {
        return this.f44137d;
    }

    public boolean equals(Object obj) {
        if (obj instanceof a) {
            a aVar = (a) obj;
            if (Intrinsics.areEqual(this.f44142i, aVar.f44142i) && d(aVar)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public final List f() {
        return this.f44143j;
    }

    public final Proxy g() {
        return this.f44140g;
    }

    public final wt.a h() {
        return this.f44139f;
    }

    public int hashCode() {
        return ((((((((((((((((((527 + this.f44142i.hashCode()) * 31) + this.f44134a.hashCode()) * 31) + this.f44139f.hashCode()) * 31) + this.f44143j.hashCode()) * 31) + this.f44144k.hashCode()) * 31) + this.f44141h.hashCode()) * 31) + Objects.hashCode(this.f44140g)) * 31) + Objects.hashCode(this.f44136c)) * 31) + Objects.hashCode(this.f44137d)) * 31) + Objects.hashCode(this.f44138e);
    }

    public final ProxySelector i() {
        return this.f44141h;
    }

    public final SocketFactory j() {
        return this.f44135b;
    }

    public final SSLSocketFactory k() {
        return this.f44136c;
    }

    public final HttpUrl l() {
        return this.f44142i;
    }

    public String toString() {
        StringBuilder sb2;
        Object obj;
        StringBuilder sb3 = new StringBuilder();
        sb3.append("Address{");
        sb3.append(this.f44142i.i());
        sb3.append(':');
        sb3.append(this.f44142i.o());
        sb3.append(", ");
        if (this.f44140g != null) {
            sb2 = new StringBuilder();
            sb2.append("proxy=");
            obj = this.f44140g;
        } else {
            sb2 = new StringBuilder();
            sb2.append("proxySelector=");
            obj = this.f44141h;
        }
        sb2.append(obj);
        sb3.append(sb2.toString());
        sb3.append('}');
        return sb3.toString();
    }
}
