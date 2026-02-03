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
    private final ut.h f44334a;

    /* renamed from: b  reason: collision with root package name */
    private final SocketFactory f44335b;

    /* renamed from: c  reason: collision with root package name */
    private final SSLSocketFactory f44336c;

    /* renamed from: d  reason: collision with root package name */
    private final HostnameVerifier f44337d;

    /* renamed from: e  reason: collision with root package name */
    private final ut.c f44338e;

    /* renamed from: f  reason: collision with root package name */
    private final ut.a f44339f;

    /* renamed from: g  reason: collision with root package name */
    private final Proxy f44340g;

    /* renamed from: h  reason: collision with root package name */
    private final ProxySelector f44341h;

    /* renamed from: i  reason: collision with root package name */
    private final HttpUrl f44342i;

    /* renamed from: j  reason: collision with root package name */
    private final List f44343j;

    /* renamed from: k  reason: collision with root package name */
    private final List f44344k;

    public a(String uriHost, int i10, ut.h dns, SocketFactory socketFactory, SSLSocketFactory sSLSocketFactory, HostnameVerifier hostnameVerifier, ut.c cVar, ut.a proxyAuthenticator, Proxy proxy, List protocols, List connectionSpecs, ProxySelector proxySelector) {
        String str;
        Intrinsics.checkNotNullParameter(uriHost, "uriHost");
        Intrinsics.checkNotNullParameter(dns, "dns");
        Intrinsics.checkNotNullParameter(socketFactory, "socketFactory");
        Intrinsics.checkNotNullParameter(proxyAuthenticator, "proxyAuthenticator");
        Intrinsics.checkNotNullParameter(protocols, "protocols");
        Intrinsics.checkNotNullParameter(connectionSpecs, "connectionSpecs");
        Intrinsics.checkNotNullParameter(proxySelector, "proxySelector");
        this.f44334a = dns;
        this.f44335b = socketFactory;
        this.f44336c = sSLSocketFactory;
        this.f44337d = hostnameVerifier;
        this.f44338e = cVar;
        this.f44339f = proxyAuthenticator;
        this.f44340g = proxy;
        this.f44341h = proxySelector;
        HttpUrl.a aVar = new HttpUrl.a();
        if (sSLSocketFactory != null) {
            str = "https";
        } else {
            str = "http";
        }
        this.f44342i = aVar.q(str).g(uriHost).m(i10).c();
        this.f44343j = vt.e.V(protocols);
        this.f44344k = vt.e.V(connectionSpecs);
    }

    public final ut.c a() {
        return this.f44338e;
    }

    public final List b() {
        return this.f44344k;
    }

    public final ut.h c() {
        return this.f44334a;
    }

    public final boolean d(a that) {
        Intrinsics.checkNotNullParameter(that, "that");
        if (Intrinsics.areEqual(this.f44334a, that.f44334a) && Intrinsics.areEqual(this.f44339f, that.f44339f) && Intrinsics.areEqual(this.f44343j, that.f44343j) && Intrinsics.areEqual(this.f44344k, that.f44344k) && Intrinsics.areEqual(this.f44341h, that.f44341h) && Intrinsics.areEqual(this.f44340g, that.f44340g) && Intrinsics.areEqual(this.f44336c, that.f44336c) && Intrinsics.areEqual(this.f44337d, that.f44337d) && Intrinsics.areEqual(this.f44338e, that.f44338e) && this.f44342i.o() == that.f44342i.o()) {
            return true;
        }
        return false;
    }

    public final HostnameVerifier e() {
        return this.f44337d;
    }

    public boolean equals(Object obj) {
        if (obj instanceof a) {
            a aVar = (a) obj;
            if (Intrinsics.areEqual(this.f44342i, aVar.f44342i) && d(aVar)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public final List f() {
        return this.f44343j;
    }

    public final Proxy g() {
        return this.f44340g;
    }

    public final ut.a h() {
        return this.f44339f;
    }

    public int hashCode() {
        return ((((((((((((((((((527 + this.f44342i.hashCode()) * 31) + this.f44334a.hashCode()) * 31) + this.f44339f.hashCode()) * 31) + this.f44343j.hashCode()) * 31) + this.f44344k.hashCode()) * 31) + this.f44341h.hashCode()) * 31) + Objects.hashCode(this.f44340g)) * 31) + Objects.hashCode(this.f44336c)) * 31) + Objects.hashCode(this.f44337d)) * 31) + Objects.hashCode(this.f44338e);
    }

    public final ProxySelector i() {
        return this.f44341h;
    }

    public final SocketFactory j() {
        return this.f44335b;
    }

    public final SSLSocketFactory k() {
        return this.f44336c;
    }

    public final HttpUrl l() {
        return this.f44342i;
    }

    public String toString() {
        StringBuilder sb2;
        Object obj;
        StringBuilder sb3 = new StringBuilder();
        sb3.append("Address{");
        sb3.append(this.f44342i.i());
        sb3.append(':');
        sb3.append(this.f44342i.o());
        sb3.append(", ");
        if (this.f44340g != null) {
            sb2 = new StringBuilder();
            sb2.append("proxy=");
            obj = this.f44340g;
        } else {
            sb2 = new StringBuilder();
            sb2.append("proxySelector=");
            obj = this.f44341h;
        }
        sb2.append(obj);
        sb3.append(sb2.toString());
        sb3.append('}');
        return sb3.toString();
    }
}
