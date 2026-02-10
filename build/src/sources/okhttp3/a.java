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
    private final lu.h f40418a;

    /* renamed from: b  reason: collision with root package name */
    private final SocketFactory f40419b;

    /* renamed from: c  reason: collision with root package name */
    private final SSLSocketFactory f40420c;

    /* renamed from: d  reason: collision with root package name */
    private final HostnameVerifier f40421d;

    /* renamed from: e  reason: collision with root package name */
    private final lu.c f40422e;

    /* renamed from: f  reason: collision with root package name */
    private final lu.a f40423f;

    /* renamed from: g  reason: collision with root package name */
    private final Proxy f40424g;

    /* renamed from: h  reason: collision with root package name */
    private final ProxySelector f40425h;

    /* renamed from: i  reason: collision with root package name */
    private final HttpUrl f40426i;

    /* renamed from: j  reason: collision with root package name */
    private final List f40427j;

    /* renamed from: k  reason: collision with root package name */
    private final List f40428k;

    public a(String uriHost, int i10, lu.h dns, SocketFactory socketFactory, SSLSocketFactory sSLSocketFactory, HostnameVerifier hostnameVerifier, lu.c cVar, lu.a proxyAuthenticator, Proxy proxy, List protocols, List connectionSpecs, ProxySelector proxySelector) {
        String str;
        Intrinsics.checkNotNullParameter(uriHost, "uriHost");
        Intrinsics.checkNotNullParameter(dns, "dns");
        Intrinsics.checkNotNullParameter(socketFactory, "socketFactory");
        Intrinsics.checkNotNullParameter(proxyAuthenticator, "proxyAuthenticator");
        Intrinsics.checkNotNullParameter(protocols, "protocols");
        Intrinsics.checkNotNullParameter(connectionSpecs, "connectionSpecs");
        Intrinsics.checkNotNullParameter(proxySelector, "proxySelector");
        this.f40418a = dns;
        this.f40419b = socketFactory;
        this.f40420c = sSLSocketFactory;
        this.f40421d = hostnameVerifier;
        this.f40422e = cVar;
        this.f40423f = proxyAuthenticator;
        this.f40424g = proxy;
        this.f40425h = proxySelector;
        HttpUrl.a aVar = new HttpUrl.a();
        if (sSLSocketFactory != null) {
            str = "https";
        } else {
            str = "http";
        }
        this.f40426i = aVar.q(str).g(uriHost).m(i10).c();
        this.f40427j = mu.e.V(protocols);
        this.f40428k = mu.e.V(connectionSpecs);
    }

    public final lu.c a() {
        return this.f40422e;
    }

    public final List b() {
        return this.f40428k;
    }

    public final lu.h c() {
        return this.f40418a;
    }

    public final boolean d(a that) {
        Intrinsics.checkNotNullParameter(that, "that");
        if (Intrinsics.areEqual(this.f40418a, that.f40418a) && Intrinsics.areEqual(this.f40423f, that.f40423f) && Intrinsics.areEqual(this.f40427j, that.f40427j) && Intrinsics.areEqual(this.f40428k, that.f40428k) && Intrinsics.areEqual(this.f40425h, that.f40425h) && Intrinsics.areEqual(this.f40424g, that.f40424g) && Intrinsics.areEqual(this.f40420c, that.f40420c) && Intrinsics.areEqual(this.f40421d, that.f40421d) && Intrinsics.areEqual(this.f40422e, that.f40422e) && this.f40426i.o() == that.f40426i.o()) {
            return true;
        }
        return false;
    }

    public final HostnameVerifier e() {
        return this.f40421d;
    }

    public boolean equals(Object obj) {
        if (obj instanceof a) {
            a aVar = (a) obj;
            if (Intrinsics.areEqual(this.f40426i, aVar.f40426i) && d(aVar)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public final List f() {
        return this.f40427j;
    }

    public final Proxy g() {
        return this.f40424g;
    }

    public final lu.a h() {
        return this.f40423f;
    }

    public int hashCode() {
        return ((((((((((((((((((527 + this.f40426i.hashCode()) * 31) + this.f40418a.hashCode()) * 31) + this.f40423f.hashCode()) * 31) + this.f40427j.hashCode()) * 31) + this.f40428k.hashCode()) * 31) + this.f40425h.hashCode()) * 31) + Objects.hashCode(this.f40424g)) * 31) + Objects.hashCode(this.f40420c)) * 31) + Objects.hashCode(this.f40421d)) * 31) + Objects.hashCode(this.f40422e);
    }

    public final ProxySelector i() {
        return this.f40425h;
    }

    public final SocketFactory j() {
        return this.f40419b;
    }

    public final SSLSocketFactory k() {
        return this.f40420c;
    }

    public final HttpUrl l() {
        return this.f40426i;
    }

    public String toString() {
        StringBuilder sb2;
        Object obj;
        StringBuilder sb3 = new StringBuilder();
        sb3.append("Address{");
        sb3.append(this.f40426i.i());
        sb3.append(':');
        sb3.append(this.f40426i.o());
        sb3.append(", ");
        if (this.f40424g != null) {
            sb2 = new StringBuilder();
            sb2.append("proxy=");
            obj = this.f40424g;
        } else {
            sb2 = new StringBuilder();
            sb2.append("proxySelector=");
            obj = this.f40425h;
        }
        sb2.append(obj);
        sb3.append(sb2.toString());
        sb3.append('}');
        return sb3.toString();
    }
}
