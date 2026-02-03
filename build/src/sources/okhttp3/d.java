package okhttp3;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import javax.net.ssl.SSLSocket;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d {

    /* renamed from: e  reason: collision with root package name */
    public static final b f44248e = new b(null);

    /* renamed from: f  reason: collision with root package name */
    private static final c[] f44249f;

    /* renamed from: g  reason: collision with root package name */
    private static final c[] f44250g;

    /* renamed from: h  reason: collision with root package name */
    public static final d f44251h;

    /* renamed from: i  reason: collision with root package name */
    public static final d f44252i;

    /* renamed from: j  reason: collision with root package name */
    public static final d f44253j;

    /* renamed from: k  reason: collision with root package name */
    public static final d f44254k;

    /* renamed from: a  reason: collision with root package name */
    private final boolean f44255a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f44256b;

    /* renamed from: c  reason: collision with root package name */
    private final String[] f44257c;

    /* renamed from: d  reason: collision with root package name */
    private final String[] f44258d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private b() {
        }
    }

    static {
        c cVar = c.f44220o1;
        c cVar2 = c.f44223p1;
        c cVar3 = c.f44226q1;
        c cVar4 = c.f44178a1;
        c cVar5 = c.f44190e1;
        c cVar6 = c.f44181b1;
        c cVar7 = c.f44193f1;
        c cVar8 = c.f44211l1;
        c cVar9 = c.f44208k1;
        c[] cVarArr = {cVar, cVar2, cVar3, cVar4, cVar5, cVar6, cVar7, cVar8, cVar9};
        f44249f = cVarArr;
        c[] cVarArr2 = {cVar, cVar2, cVar3, cVar4, cVar5, cVar6, cVar7, cVar8, cVar9, c.L0, c.M0, c.f44204j0, c.f44207k0, c.H, c.L, c.f44209l};
        f44250g = cVarArr2;
        a c10 = new a(true).c((c[]) Arrays.copyOf(cVarArr, cVarArr.length));
        h hVar = h.TLS_1_3;
        h hVar2 = h.TLS_1_2;
        f44251h = c10.f(hVar, hVar2).d(true).a();
        f44252i = new a(true).c((c[]) Arrays.copyOf(cVarArr2, cVarArr2.length)).f(hVar, hVar2).d(true).a();
        f44253j = new a(true).c((c[]) Arrays.copyOf(cVarArr2, cVarArr2.length)).f(hVar, hVar2, h.TLS_1_1, h.TLS_1_0).d(true).a();
        f44254k = new a(false).a();
    }

    public d(boolean z10, boolean z11, String[] strArr, String[] strArr2) {
        this.f44255a = z10;
        this.f44256b = z11;
        this.f44257c = strArr;
        this.f44258d = strArr2;
    }

    private final d g(SSLSocket sSLSocket, boolean z10) {
        String[] cipherSuitesIntersection;
        String[] tlsVersionsIntersection;
        if (this.f44257c != null) {
            String[] enabledCipherSuites = sSLSocket.getEnabledCipherSuites();
            Intrinsics.checkNotNullExpressionValue(enabledCipherSuites, "sslSocket.enabledCipherSuites");
            cipherSuitesIntersection = xt.e.E(enabledCipherSuites, this.f44257c, c.f44179b.c());
        } else {
            cipherSuitesIntersection = sSLSocket.getEnabledCipherSuites();
        }
        if (this.f44258d != null) {
            String[] enabledProtocols = sSLSocket.getEnabledProtocols();
            Intrinsics.checkNotNullExpressionValue(enabledProtocols, "sslSocket.enabledProtocols");
            tlsVersionsIntersection = xt.e.E(enabledProtocols, this.f44258d, or.a.f());
        } else {
            tlsVersionsIntersection = sSLSocket.getEnabledProtocols();
        }
        String[] supportedCipherSuites = sSLSocket.getSupportedCipherSuites();
        Intrinsics.checkNotNullExpressionValue(supportedCipherSuites, "supportedCipherSuites");
        int x10 = xt.e.x(supportedCipherSuites, "TLS_FALLBACK_SCSV", c.f44179b.c());
        if (z10 && x10 != -1) {
            Intrinsics.checkNotNullExpressionValue(cipherSuitesIntersection, "cipherSuitesIntersection");
            String str = supportedCipherSuites[x10];
            Intrinsics.checkNotNullExpressionValue(str, "supportedCipherSuites[indexOfFallbackScsv]");
            cipherSuitesIntersection = xt.e.o(cipherSuitesIntersection, str);
        }
        a aVar = new a(this);
        Intrinsics.checkNotNullExpressionValue(cipherSuitesIntersection, "cipherSuitesIntersection");
        a b10 = aVar.b((String[]) Arrays.copyOf(cipherSuitesIntersection, cipherSuitesIntersection.length));
        Intrinsics.checkNotNullExpressionValue(tlsVersionsIntersection, "tlsVersionsIntersection");
        return b10.e((String[]) Arrays.copyOf(tlsVersionsIntersection, tlsVersionsIntersection.length)).a();
    }

    public final void c(SSLSocket sslSocket, boolean z10) {
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        d g10 = g(sslSocket, z10);
        if (g10.i() != null) {
            sslSocket.setEnabledProtocols(g10.f44258d);
        }
        if (g10.d() != null) {
            sslSocket.setEnabledCipherSuites(g10.f44257c);
        }
    }

    public final List d() {
        String[] strArr = this.f44257c;
        if (strArr != null) {
            ArrayList arrayList = new ArrayList(strArr.length);
            for (String str : strArr) {
                arrayList.add(c.f44179b.b(str));
            }
            return CollectionsKt.h1(arrayList);
        }
        return null;
    }

    public final boolean e(SSLSocket socket) {
        Intrinsics.checkNotNullParameter(socket, "socket");
        if (!this.f44255a) {
            return false;
        }
        String[] strArr = this.f44258d;
        if (strArr != null && !xt.e.u(strArr, socket.getEnabledProtocols(), or.a.f())) {
            return false;
        }
        String[] strArr2 = this.f44257c;
        if (strArr2 != null && !xt.e.u(strArr2, socket.getEnabledCipherSuites(), c.f44179b.c())) {
            return false;
        }
        return true;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof d)) {
            return false;
        }
        if (obj == this) {
            return true;
        }
        boolean z10 = this.f44255a;
        d dVar = (d) obj;
        if (z10 != dVar.f44255a) {
            return false;
        }
        if (z10 && (!Arrays.equals(this.f44257c, dVar.f44257c) || !Arrays.equals(this.f44258d, dVar.f44258d) || this.f44256b != dVar.f44256b)) {
            return false;
        }
        return true;
    }

    public final boolean f() {
        return this.f44255a;
    }

    public final boolean h() {
        return this.f44256b;
    }

    public int hashCode() {
        int i10;
        if (this.f44255a) {
            String[] strArr = this.f44257c;
            int i11 = 0;
            if (strArr != null) {
                i10 = Arrays.hashCode(strArr);
            } else {
                i10 = 0;
            }
            int i12 = (527 + i10) * 31;
            String[] strArr2 = this.f44258d;
            if (strArr2 != null) {
                i11 = Arrays.hashCode(strArr2);
            }
            return ((i12 + i11) * 31) + (!this.f44256b ? 1 : 0);
        }
        return 17;
    }

    public final List i() {
        String[] strArr = this.f44258d;
        if (strArr != null) {
            ArrayList arrayList = new ArrayList(strArr.length);
            for (String str : strArr) {
                arrayList.add(h.f44280e.a(str));
            }
            return CollectionsKt.h1(arrayList);
        }
        return null;
    }

    public String toString() {
        if (!this.f44255a) {
            return "ConnectionSpec()";
        }
        return "ConnectionSpec(cipherSuites=" + Objects.toString(d(), "[all enabled]") + ", tlsVersions=" + Objects.toString(i(), "[all enabled]") + ", supportsTlsExtensions=" + this.f44256b + ')';
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private boolean f44259a;

        /* renamed from: b  reason: collision with root package name */
        private String[] f44260b;

        /* renamed from: c  reason: collision with root package name */
        private String[] f44261c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f44262d;

        public a(boolean z10) {
            this.f44259a = z10;
        }

        public final d a() {
            return new d(this.f44259a, this.f44262d, this.f44260b, this.f44261c);
        }

        public final a b(String... cipherSuites) {
            boolean z10;
            Intrinsics.checkNotNullParameter(cipherSuites, "cipherSuites");
            if (this.f44259a) {
                if (cipherSuites.length == 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                if (!z10) {
                    this.f44260b = (String[]) cipherSuites.clone();
                    return this;
                }
                throw new IllegalArgumentException("At least one cipher suite is required");
            }
            throw new IllegalArgumentException("no cipher suites for cleartext connections");
        }

        public final a c(c... cipherSuites) {
            Intrinsics.checkNotNullParameter(cipherSuites, "cipherSuites");
            if (this.f44259a) {
                ArrayList arrayList = new ArrayList(cipherSuites.length);
                for (c cVar : cipherSuites) {
                    arrayList.add(cVar.c());
                }
                String[] strArr = (String[]) arrayList.toArray(new String[0]);
                return b((String[]) Arrays.copyOf(strArr, strArr.length));
            }
            throw new IllegalArgumentException("no cipher suites for cleartext connections");
        }

        public final a d(boolean z10) {
            if (this.f44259a) {
                this.f44262d = z10;
                return this;
            }
            throw new IllegalArgumentException("no TLS extensions for cleartext connections");
        }

        public final a e(String... tlsVersions) {
            boolean z10;
            Intrinsics.checkNotNullParameter(tlsVersions, "tlsVersions");
            if (this.f44259a) {
                if (tlsVersions.length == 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                if (!z10) {
                    this.f44261c = (String[]) tlsVersions.clone();
                    return this;
                }
                throw new IllegalArgumentException("At least one TLS version is required");
            }
            throw new IllegalArgumentException("no TLS versions for cleartext connections");
        }

        public final a f(h... tlsVersions) {
            Intrinsics.checkNotNullParameter(tlsVersions, "tlsVersions");
            if (this.f44259a) {
                ArrayList arrayList = new ArrayList(tlsVersions.length);
                for (h hVar : tlsVersions) {
                    arrayList.add(hVar.d());
                }
                String[] strArr = (String[]) arrayList.toArray(new String[0]);
                return e((String[]) Arrays.copyOf(strArr, strArr.length));
            }
            throw new IllegalArgumentException("no TLS versions for cleartext connections");
        }

        public a(d connectionSpec) {
            Intrinsics.checkNotNullParameter(connectionSpec, "connectionSpec");
            this.f44259a = connectionSpec.f();
            this.f44260b = connectionSpec.f44257c;
            this.f44261c = connectionSpec.f44258d;
            this.f44262d = connectionSpec.h();
        }
    }
}
