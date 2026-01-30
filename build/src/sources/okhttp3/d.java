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
    public static final b f44320e = new b(null);

    /* renamed from: f  reason: collision with root package name */
    private static final c[] f44321f;

    /* renamed from: g  reason: collision with root package name */
    private static final c[] f44322g;

    /* renamed from: h  reason: collision with root package name */
    public static final d f44323h;

    /* renamed from: i  reason: collision with root package name */
    public static final d f44324i;

    /* renamed from: j  reason: collision with root package name */
    public static final d f44325j;

    /* renamed from: k  reason: collision with root package name */
    public static final d f44326k;

    /* renamed from: a  reason: collision with root package name */
    private final boolean f44327a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f44328b;

    /* renamed from: c  reason: collision with root package name */
    private final String[] f44329c;

    /* renamed from: d  reason: collision with root package name */
    private final String[] f44330d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private b() {
        }
    }

    static {
        c cVar = c.f44292o1;
        c cVar2 = c.f44295p1;
        c cVar3 = c.f44298q1;
        c cVar4 = c.f44250a1;
        c cVar5 = c.f44262e1;
        c cVar6 = c.f44253b1;
        c cVar7 = c.f44265f1;
        c cVar8 = c.f44283l1;
        c cVar9 = c.f44280k1;
        c[] cVarArr = {cVar, cVar2, cVar3, cVar4, cVar5, cVar6, cVar7, cVar8, cVar9};
        f44321f = cVarArr;
        c[] cVarArr2 = {cVar, cVar2, cVar3, cVar4, cVar5, cVar6, cVar7, cVar8, cVar9, c.L0, c.M0, c.f44276j0, c.f44279k0, c.H, c.L, c.f44281l};
        f44322g = cVarArr2;
        a c10 = new a(true).c((c[]) Arrays.copyOf(cVarArr, cVarArr.length));
        h hVar = h.TLS_1_3;
        h hVar2 = h.TLS_1_2;
        f44323h = c10.f(hVar, hVar2).d(true).a();
        f44324i = new a(true).c((c[]) Arrays.copyOf(cVarArr2, cVarArr2.length)).f(hVar, hVar2).d(true).a();
        f44325j = new a(true).c((c[]) Arrays.copyOf(cVarArr2, cVarArr2.length)).f(hVar, hVar2, h.TLS_1_1, h.TLS_1_0).d(true).a();
        f44326k = new a(false).a();
    }

    public d(boolean z10, boolean z11, String[] strArr, String[] strArr2) {
        this.f44327a = z10;
        this.f44328b = z11;
        this.f44329c = strArr;
        this.f44330d = strArr2;
    }

    private final d g(SSLSocket sSLSocket, boolean z10) {
        String[] cipherSuitesIntersection;
        String[] tlsVersionsIntersection;
        if (this.f44329c != null) {
            String[] enabledCipherSuites = sSLSocket.getEnabledCipherSuites();
            Intrinsics.checkNotNullExpressionValue(enabledCipherSuites, "sslSocket.enabledCipherSuites");
            cipherSuitesIntersection = ut.e.E(enabledCipherSuites, this.f44329c, c.f44251b.c());
        } else {
            cipherSuitesIntersection = sSLSocket.getEnabledCipherSuites();
        }
        if (this.f44330d != null) {
            String[] enabledProtocols = sSLSocket.getEnabledProtocols();
            Intrinsics.checkNotNullExpressionValue(enabledProtocols, "sslSocket.enabledProtocols");
            tlsVersionsIntersection = ut.e.E(enabledProtocols, this.f44330d, lr.a.f());
        } else {
            tlsVersionsIntersection = sSLSocket.getEnabledProtocols();
        }
        String[] supportedCipherSuites = sSLSocket.getSupportedCipherSuites();
        Intrinsics.checkNotNullExpressionValue(supportedCipherSuites, "supportedCipherSuites");
        int x10 = ut.e.x(supportedCipherSuites, "TLS_FALLBACK_SCSV", c.f44251b.c());
        if (z10 && x10 != -1) {
            Intrinsics.checkNotNullExpressionValue(cipherSuitesIntersection, "cipherSuitesIntersection");
            String str = supportedCipherSuites[x10];
            Intrinsics.checkNotNullExpressionValue(str, "supportedCipherSuites[indexOfFallbackScsv]");
            cipherSuitesIntersection = ut.e.o(cipherSuitesIntersection, str);
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
            sslSocket.setEnabledProtocols(g10.f44330d);
        }
        if (g10.d() != null) {
            sslSocket.setEnabledCipherSuites(g10.f44329c);
        }
    }

    public final List d() {
        String[] strArr = this.f44329c;
        if (strArr != null) {
            ArrayList arrayList = new ArrayList(strArr.length);
            for (String str : strArr) {
                arrayList.add(c.f44251b.b(str));
            }
            return CollectionsKt.h1(arrayList);
        }
        return null;
    }

    public final boolean e(SSLSocket socket) {
        Intrinsics.checkNotNullParameter(socket, "socket");
        if (!this.f44327a) {
            return false;
        }
        String[] strArr = this.f44330d;
        if (strArr != null && !ut.e.u(strArr, socket.getEnabledProtocols(), lr.a.f())) {
            return false;
        }
        String[] strArr2 = this.f44329c;
        if (strArr2 != null && !ut.e.u(strArr2, socket.getEnabledCipherSuites(), c.f44251b.c())) {
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
        boolean z10 = this.f44327a;
        d dVar = (d) obj;
        if (z10 != dVar.f44327a) {
            return false;
        }
        if (z10 && (!Arrays.equals(this.f44329c, dVar.f44329c) || !Arrays.equals(this.f44330d, dVar.f44330d) || this.f44328b != dVar.f44328b)) {
            return false;
        }
        return true;
    }

    public final boolean f() {
        return this.f44327a;
    }

    public final boolean h() {
        return this.f44328b;
    }

    public int hashCode() {
        int i10;
        if (this.f44327a) {
            String[] strArr = this.f44329c;
            int i11 = 0;
            if (strArr != null) {
                i10 = Arrays.hashCode(strArr);
            } else {
                i10 = 0;
            }
            int i12 = (527 + i10) * 31;
            String[] strArr2 = this.f44330d;
            if (strArr2 != null) {
                i11 = Arrays.hashCode(strArr2);
            }
            return ((i12 + i11) * 31) + (!this.f44328b ? 1 : 0);
        }
        return 17;
    }

    public final List i() {
        String[] strArr = this.f44330d;
        if (strArr != null) {
            ArrayList arrayList = new ArrayList(strArr.length);
            for (String str : strArr) {
                arrayList.add(h.f44352e.a(str));
            }
            return CollectionsKt.h1(arrayList);
        }
        return null;
    }

    public String toString() {
        if (!this.f44327a) {
            return "ConnectionSpec()";
        }
        return "ConnectionSpec(cipherSuites=" + Objects.toString(d(), "[all enabled]") + ", tlsVersions=" + Objects.toString(i(), "[all enabled]") + ", supportsTlsExtensions=" + this.f44328b + ')';
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private boolean f44331a;

        /* renamed from: b  reason: collision with root package name */
        private String[] f44332b;

        /* renamed from: c  reason: collision with root package name */
        private String[] f44333c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f44334d;

        public a(boolean z10) {
            this.f44331a = z10;
        }

        public final d a() {
            return new d(this.f44331a, this.f44334d, this.f44332b, this.f44333c);
        }

        public final a b(String... cipherSuites) {
            boolean z10;
            Intrinsics.checkNotNullParameter(cipherSuites, "cipherSuites");
            if (this.f44331a) {
                if (cipherSuites.length == 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                if (!z10) {
                    this.f44332b = (String[]) cipherSuites.clone();
                    return this;
                }
                throw new IllegalArgumentException("At least one cipher suite is required");
            }
            throw new IllegalArgumentException("no cipher suites for cleartext connections");
        }

        public final a c(c... cipherSuites) {
            Intrinsics.checkNotNullParameter(cipherSuites, "cipherSuites");
            if (this.f44331a) {
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
            if (this.f44331a) {
                this.f44334d = z10;
                return this;
            }
            throw new IllegalArgumentException("no TLS extensions for cleartext connections");
        }

        public final a e(String... tlsVersions) {
            boolean z10;
            Intrinsics.checkNotNullParameter(tlsVersions, "tlsVersions");
            if (this.f44331a) {
                if (tlsVersions.length == 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                if (!z10) {
                    this.f44333c = (String[]) tlsVersions.clone();
                    return this;
                }
                throw new IllegalArgumentException("At least one TLS version is required");
            }
            throw new IllegalArgumentException("no TLS versions for cleartext connections");
        }

        public final a f(h... tlsVersions) {
            Intrinsics.checkNotNullParameter(tlsVersions, "tlsVersions");
            if (this.f44331a) {
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
            this.f44331a = connectionSpec.f();
            this.f44332b = connectionSpec.f44329c;
            this.f44333c = connectionSpec.f44330d;
            this.f44334d = connectionSpec.h();
        }
    }
}
