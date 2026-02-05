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
    private final zt.h f43887a;

    /* renamed from: b  reason: collision with root package name */
    private final SocketFactory f43888b;

    /* renamed from: c  reason: collision with root package name */
    private final SSLSocketFactory f43889c;

    /* renamed from: d  reason: collision with root package name */
    private final HostnameVerifier f43890d;

    /* renamed from: e  reason: collision with root package name */
    private final zt.c f43891e;

    /* renamed from: f  reason: collision with root package name */
    private final zt.a f43892f;

    /* renamed from: g  reason: collision with root package name */
    private final Proxy f43893g;

    /* renamed from: h  reason: collision with root package name */
    private final ProxySelector f43894h;

    /* renamed from: i  reason: collision with root package name */
    private final HttpUrl f43895i;

    /* renamed from: j  reason: collision with root package name */
    private final List f43896j;

    /* renamed from: k  reason: collision with root package name */
    private final List f43897k;

    public a(String uriHost, int i10, zt.h dns, SocketFactory socketFactory, SSLSocketFactory sSLSocketFactory, HostnameVerifier hostnameVerifier, zt.c cVar, zt.a proxyAuthenticator, Proxy proxy, List protocols, List connectionSpecs, ProxySelector proxySelector) {
        String str;
        Intrinsics.checkNotNullParameter(uriHost, "uriHost");
        Intrinsics.checkNotNullParameter(dns, "dns");
        Intrinsics.checkNotNullParameter(socketFactory, "socketFactory");
        Intrinsics.checkNotNullParameter(proxyAuthenticator, "proxyAuthenticator");
        Intrinsics.checkNotNullParameter(protocols, "protocols");
        Intrinsics.checkNotNullParameter(connectionSpecs, "connectionSpecs");
        Intrinsics.checkNotNullParameter(proxySelector, "proxySelector");
        this.f43887a = dns;
        this.f43888b = socketFactory;
        this.f43889c = sSLSocketFactory;
        this.f43890d = hostnameVerifier;
        this.f43891e = cVar;
        this.f43892f = proxyAuthenticator;
        this.f43893g = proxy;
        this.f43894h = proxySelector;
        HttpUrl.a aVar = new HttpUrl.a();
        if (sSLSocketFactory != null) {
            str = "https";
        } else {
            str = "http";
        }
        this.f43895i = aVar.q(str).g(uriHost).m(i10).c();
        this.f43896j = au.e.V(protocols);
        this.f43897k = au.e.V(connectionSpecs);
    }

    public final zt.c a() {
        return this.f43891e;
    }

    public final List b() {
        return this.f43897k;
    }

    public final zt.h c() {
        return this.f43887a;
    }

    public final boolean d(a that) {
        Intrinsics.checkNotNullParameter(that, "that");
        if (Intrinsics.areEqual(this.f43887a, that.f43887a) && Intrinsics.areEqual(this.f43892f, that.f43892f) && Intrinsics.areEqual(this.f43896j, that.f43896j) && Intrinsics.areEqual(this.f43897k, that.f43897k) && Intrinsics.areEqual(this.f43894h, that.f43894h) && Intrinsics.areEqual(this.f43893g, that.f43893g) && Intrinsics.areEqual(this.f43889c, that.f43889c) && Intrinsics.areEqual(this.f43890d, that.f43890d) && Intrinsics.areEqual(this.f43891e, that.f43891e) && this.f43895i.o() == that.f43895i.o()) {
            return true;
        }
        return false;
    }

    public final HostnameVerifier e() {
        return this.f43890d;
    }

    public boolean equals(Object obj) {
        if (obj instanceof a) {
            a aVar = (a) obj;
            if (Intrinsics.areEqual(this.f43895i, aVar.f43895i) && d(aVar)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public final List f() {
        return this.f43896j;
    }

    public final Proxy g() {
        return this.f43893g;
    }

    public final zt.a h() {
        return this.f43892f;
    }

    public int hashCode() {
        return ((((((((((((((((((527 + this.f43895i.hashCode()) * 31) + this.f43887a.hashCode()) * 31) + this.f43892f.hashCode()) * 31) + this.f43896j.hashCode()) * 31) + this.f43897k.hashCode()) * 31) + this.f43894h.hashCode()) * 31) + Objects.hashCode(this.f43893g)) * 31) + Objects.hashCode(this.f43889c)) * 31) + Objects.hashCode(this.f43890d)) * 31) + Objects.hashCode(this.f43891e);
    }

    public final ProxySelector i() {
        return this.f43894h;
    }

    public final SocketFactory j() {
        return this.f43888b;
    }

    public final SSLSocketFactory k() {
        return this.f43889c;
    }

    public final HttpUrl l() {
        return this.f43895i;
    }

    public String toString() {
        StringBuilder sb2;
        Object obj;
        StringBuilder sb3 = new StringBuilder();
        sb3.append("Address{");
        sb3.append(this.f43895i.i());
        sb3.append(':');
        sb3.append(this.f43895i.o());
        sb3.append(", ");
        if (this.f43893g != null) {
            sb2 = new StringBuilder();
            sb2.append("proxy=");
            obj = this.f43893g;
        } else {
            sb2 = new StringBuilder();
            sb2.append("proxySelector=");
            obj = this.f43894h;
        }
        sb2.append(obj);
        sb3.append(sb2.toString());
        sb3.append('}');
        return sb3.toString();
    }
}
