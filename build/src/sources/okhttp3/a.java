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
    private final tt.h f44206a;

    /* renamed from: b  reason: collision with root package name */
    private final SocketFactory f44207b;

    /* renamed from: c  reason: collision with root package name */
    private final SSLSocketFactory f44208c;

    /* renamed from: d  reason: collision with root package name */
    private final HostnameVerifier f44209d;

    /* renamed from: e  reason: collision with root package name */
    private final tt.c f44210e;

    /* renamed from: f  reason: collision with root package name */
    private final tt.a f44211f;

    /* renamed from: g  reason: collision with root package name */
    private final Proxy f44212g;

    /* renamed from: h  reason: collision with root package name */
    private final ProxySelector f44213h;

    /* renamed from: i  reason: collision with root package name */
    private final HttpUrl f44214i;

    /* renamed from: j  reason: collision with root package name */
    private final List f44215j;

    /* renamed from: k  reason: collision with root package name */
    private final List f44216k;

    public a(String uriHost, int i10, tt.h dns, SocketFactory socketFactory, SSLSocketFactory sSLSocketFactory, HostnameVerifier hostnameVerifier, tt.c cVar, tt.a proxyAuthenticator, Proxy proxy, List protocols, List connectionSpecs, ProxySelector proxySelector) {
        String str;
        Intrinsics.checkNotNullParameter(uriHost, "uriHost");
        Intrinsics.checkNotNullParameter(dns, "dns");
        Intrinsics.checkNotNullParameter(socketFactory, "socketFactory");
        Intrinsics.checkNotNullParameter(proxyAuthenticator, "proxyAuthenticator");
        Intrinsics.checkNotNullParameter(protocols, "protocols");
        Intrinsics.checkNotNullParameter(connectionSpecs, "connectionSpecs");
        Intrinsics.checkNotNullParameter(proxySelector, "proxySelector");
        this.f44206a = dns;
        this.f44207b = socketFactory;
        this.f44208c = sSLSocketFactory;
        this.f44209d = hostnameVerifier;
        this.f44210e = cVar;
        this.f44211f = proxyAuthenticator;
        this.f44212g = proxy;
        this.f44213h = proxySelector;
        HttpUrl.a aVar = new HttpUrl.a();
        if (sSLSocketFactory != null) {
            str = "https";
        } else {
            str = "http";
        }
        this.f44214i = aVar.q(str).g(uriHost).m(i10).c();
        this.f44215j = ut.e.V(protocols);
        this.f44216k = ut.e.V(connectionSpecs);
    }

    public final tt.c a() {
        return this.f44210e;
    }

    public final List b() {
        return this.f44216k;
    }

    public final tt.h c() {
        return this.f44206a;
    }

    public final boolean d(a that) {
        Intrinsics.checkNotNullParameter(that, "that");
        if (Intrinsics.areEqual(this.f44206a, that.f44206a) && Intrinsics.areEqual(this.f44211f, that.f44211f) && Intrinsics.areEqual(this.f44215j, that.f44215j) && Intrinsics.areEqual(this.f44216k, that.f44216k) && Intrinsics.areEqual(this.f44213h, that.f44213h) && Intrinsics.areEqual(this.f44212g, that.f44212g) && Intrinsics.areEqual(this.f44208c, that.f44208c) && Intrinsics.areEqual(this.f44209d, that.f44209d) && Intrinsics.areEqual(this.f44210e, that.f44210e) && this.f44214i.o() == that.f44214i.o()) {
            return true;
        }
        return false;
    }

    public final HostnameVerifier e() {
        return this.f44209d;
    }

    public boolean equals(Object obj) {
        if (obj instanceof a) {
            a aVar = (a) obj;
            if (Intrinsics.areEqual(this.f44214i, aVar.f44214i) && d(aVar)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public final List f() {
        return this.f44215j;
    }

    public final Proxy g() {
        return this.f44212g;
    }

    public final tt.a h() {
        return this.f44211f;
    }

    public int hashCode() {
        return ((((((((((((((((((527 + this.f44214i.hashCode()) * 31) + this.f44206a.hashCode()) * 31) + this.f44211f.hashCode()) * 31) + this.f44215j.hashCode()) * 31) + this.f44216k.hashCode()) * 31) + this.f44213h.hashCode()) * 31) + Objects.hashCode(this.f44212g)) * 31) + Objects.hashCode(this.f44208c)) * 31) + Objects.hashCode(this.f44209d)) * 31) + Objects.hashCode(this.f44210e);
    }

    public final ProxySelector i() {
        return this.f44213h;
    }

    public final SocketFactory j() {
        return this.f44207b;
    }

    public final SSLSocketFactory k() {
        return this.f44208c;
    }

    public final HttpUrl l() {
        return this.f44214i;
    }

    public String toString() {
        StringBuilder sb2;
        Object obj;
        StringBuilder sb3 = new StringBuilder();
        sb3.append("Address{");
        sb3.append(this.f44214i.i());
        sb3.append(':');
        sb3.append(this.f44214i.o());
        sb3.append(", ");
        if (this.f44212g != null) {
            sb2 = new StringBuilder();
            sb2.append("proxy=");
            obj = this.f44212g;
        } else {
            sb2 = new StringBuilder();
            sb2.append("proxySelector=");
            obj = this.f44213h;
        }
        sb2.append(obj);
        sb3.append(sb2.toString());
        sb3.append('}');
        return sb3.toString();
    }
}
