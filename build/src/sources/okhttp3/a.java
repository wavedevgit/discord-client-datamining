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
    private final tt.h f44190a;

    /* renamed from: b  reason: collision with root package name */
    private final SocketFactory f44191b;

    /* renamed from: c  reason: collision with root package name */
    private final SSLSocketFactory f44192c;

    /* renamed from: d  reason: collision with root package name */
    private final HostnameVerifier f44193d;

    /* renamed from: e  reason: collision with root package name */
    private final tt.c f44194e;

    /* renamed from: f  reason: collision with root package name */
    private final tt.a f44195f;

    /* renamed from: g  reason: collision with root package name */
    private final Proxy f44196g;

    /* renamed from: h  reason: collision with root package name */
    private final ProxySelector f44197h;

    /* renamed from: i  reason: collision with root package name */
    private final HttpUrl f44198i;

    /* renamed from: j  reason: collision with root package name */
    private final List f44199j;

    /* renamed from: k  reason: collision with root package name */
    private final List f44200k;

    public a(String uriHost, int i10, tt.h dns, SocketFactory socketFactory, SSLSocketFactory sSLSocketFactory, HostnameVerifier hostnameVerifier, tt.c cVar, tt.a proxyAuthenticator, Proxy proxy, List protocols, List connectionSpecs, ProxySelector proxySelector) {
        String str;
        Intrinsics.checkNotNullParameter(uriHost, "uriHost");
        Intrinsics.checkNotNullParameter(dns, "dns");
        Intrinsics.checkNotNullParameter(socketFactory, "socketFactory");
        Intrinsics.checkNotNullParameter(proxyAuthenticator, "proxyAuthenticator");
        Intrinsics.checkNotNullParameter(protocols, "protocols");
        Intrinsics.checkNotNullParameter(connectionSpecs, "connectionSpecs");
        Intrinsics.checkNotNullParameter(proxySelector, "proxySelector");
        this.f44190a = dns;
        this.f44191b = socketFactory;
        this.f44192c = sSLSocketFactory;
        this.f44193d = hostnameVerifier;
        this.f44194e = cVar;
        this.f44195f = proxyAuthenticator;
        this.f44196g = proxy;
        this.f44197h = proxySelector;
        HttpUrl.a aVar = new HttpUrl.a();
        if (sSLSocketFactory != null) {
            str = "https";
        } else {
            str = "http";
        }
        this.f44198i = aVar.q(str).g(uriHost).m(i10).c();
        this.f44199j = ut.e.V(protocols);
        this.f44200k = ut.e.V(connectionSpecs);
    }

    public final tt.c a() {
        return this.f44194e;
    }

    public final List b() {
        return this.f44200k;
    }

    public final tt.h c() {
        return this.f44190a;
    }

    public final boolean d(a that) {
        Intrinsics.checkNotNullParameter(that, "that");
        if (Intrinsics.areEqual(this.f44190a, that.f44190a) && Intrinsics.areEqual(this.f44195f, that.f44195f) && Intrinsics.areEqual(this.f44199j, that.f44199j) && Intrinsics.areEqual(this.f44200k, that.f44200k) && Intrinsics.areEqual(this.f44197h, that.f44197h) && Intrinsics.areEqual(this.f44196g, that.f44196g) && Intrinsics.areEqual(this.f44192c, that.f44192c) && Intrinsics.areEqual(this.f44193d, that.f44193d) && Intrinsics.areEqual(this.f44194e, that.f44194e) && this.f44198i.o() == that.f44198i.o()) {
            return true;
        }
        return false;
    }

    public final HostnameVerifier e() {
        return this.f44193d;
    }

    public boolean equals(Object obj) {
        if (obj instanceof a) {
            a aVar = (a) obj;
            if (Intrinsics.areEqual(this.f44198i, aVar.f44198i) && d(aVar)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public final List f() {
        return this.f44199j;
    }

    public final Proxy g() {
        return this.f44196g;
    }

    public final tt.a h() {
        return this.f44195f;
    }

    public int hashCode() {
        return ((((((((((((((((((527 + this.f44198i.hashCode()) * 31) + this.f44190a.hashCode()) * 31) + this.f44195f.hashCode()) * 31) + this.f44199j.hashCode()) * 31) + this.f44200k.hashCode()) * 31) + this.f44197h.hashCode()) * 31) + Objects.hashCode(this.f44196g)) * 31) + Objects.hashCode(this.f44192c)) * 31) + Objects.hashCode(this.f44193d)) * 31) + Objects.hashCode(this.f44194e);
    }

    public final ProxySelector i() {
        return this.f44197h;
    }

    public final SocketFactory j() {
        return this.f44191b;
    }

    public final SSLSocketFactory k() {
        return this.f44192c;
    }

    public final HttpUrl l() {
        return this.f44198i;
    }

    public String toString() {
        StringBuilder sb2;
        Object obj;
        StringBuilder sb3 = new StringBuilder();
        sb3.append("Address{");
        sb3.append(this.f44198i.i());
        sb3.append(':');
        sb3.append(this.f44198i.o());
        sb3.append(", ");
        if (this.f44196g != null) {
            sb2 = new StringBuilder();
            sb2.append("proxy=");
            obj = this.f44196g;
        } else {
            sb2 = new StringBuilder();
            sb2.append("proxySelector=");
            obj = this.f44197h;
        }
        sb2.append(obj);
        sb3.append(sb2.toString());
        sb3.append('}');
        return sb3.toString();
    }
}
