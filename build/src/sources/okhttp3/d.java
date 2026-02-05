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
    public static final b f44001e = new b(null);

    /* renamed from: f  reason: collision with root package name */
    private static final c[] f44002f;

    /* renamed from: g  reason: collision with root package name */
    private static final c[] f44003g;

    /* renamed from: h  reason: collision with root package name */
    public static final d f44004h;

    /* renamed from: i  reason: collision with root package name */
    public static final d f44005i;

    /* renamed from: j  reason: collision with root package name */
    public static final d f44006j;

    /* renamed from: k  reason: collision with root package name */
    public static final d f44007k;

    /* renamed from: a  reason: collision with root package name */
    private final boolean f44008a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f44009b;

    /* renamed from: c  reason: collision with root package name */
    private final String[] f44010c;

    /* renamed from: d  reason: collision with root package name */
    private final String[] f44011d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private b() {
        }
    }

    static {
        c cVar = c.f43973o1;
        c cVar2 = c.f43976p1;
        c cVar3 = c.f43979q1;
        c cVar4 = c.f43931a1;
        c cVar5 = c.f43943e1;
        c cVar6 = c.f43934b1;
        c cVar7 = c.f43946f1;
        c cVar8 = c.f43964l1;
        c cVar9 = c.f43961k1;
        c[] cVarArr = {cVar, cVar2, cVar3, cVar4, cVar5, cVar6, cVar7, cVar8, cVar9};
        f44002f = cVarArr;
        c[] cVarArr2 = {cVar, cVar2, cVar3, cVar4, cVar5, cVar6, cVar7, cVar8, cVar9, c.L0, c.M0, c.f43957j0, c.f43960k0, c.H, c.L, c.f43962l};
        f44003g = cVarArr2;
        a c10 = new a(true).c((c[]) Arrays.copyOf(cVarArr, cVarArr.length));
        h hVar = h.TLS_1_3;
        h hVar2 = h.TLS_1_2;
        f44004h = c10.f(hVar, hVar2).d(true).a();
        f44005i = new a(true).c((c[]) Arrays.copyOf(cVarArr2, cVarArr2.length)).f(hVar, hVar2).d(true).a();
        f44006j = new a(true).c((c[]) Arrays.copyOf(cVarArr2, cVarArr2.length)).f(hVar, hVar2, h.TLS_1_1, h.TLS_1_0).d(true).a();
        f44007k = new a(false).a();
    }

    public d(boolean z10, boolean z11, String[] strArr, String[] strArr2) {
        this.f44008a = z10;
        this.f44009b = z11;
        this.f44010c = strArr;
        this.f44011d = strArr2;
    }

    private final d g(SSLSocket sSLSocket, boolean z10) {
        String[] cipherSuitesIntersection;
        String[] tlsVersionsIntersection;
        if (this.f44010c != null) {
            String[] enabledCipherSuites = sSLSocket.getEnabledCipherSuites();
            Intrinsics.checkNotNullExpressionValue(enabledCipherSuites, "sslSocket.enabledCipherSuites");
            cipherSuitesIntersection = au.e.E(enabledCipherSuites, this.f44010c, c.f43932b.c());
        } else {
            cipherSuitesIntersection = sSLSocket.getEnabledCipherSuites();
        }
        if (this.f44011d != null) {
            String[] enabledProtocols = sSLSocket.getEnabledProtocols();
            Intrinsics.checkNotNullExpressionValue(enabledProtocols, "sslSocket.enabledProtocols");
            tlsVersionsIntersection = au.e.E(enabledProtocols, this.f44011d, rr.a.f());
        } else {
            tlsVersionsIntersection = sSLSocket.getEnabledProtocols();
        }
        String[] supportedCipherSuites = sSLSocket.getSupportedCipherSuites();
        Intrinsics.checkNotNullExpressionValue(supportedCipherSuites, "supportedCipherSuites");
        int x10 = au.e.x(supportedCipherSuites, "TLS_FALLBACK_SCSV", c.f43932b.c());
        if (z10 && x10 != -1) {
            Intrinsics.checkNotNullExpressionValue(cipherSuitesIntersection, "cipherSuitesIntersection");
            String str = supportedCipherSuites[x10];
            Intrinsics.checkNotNullExpressionValue(str, "supportedCipherSuites[indexOfFallbackScsv]");
            cipherSuitesIntersection = au.e.o(cipherSuitesIntersection, str);
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
            sslSocket.setEnabledProtocols(g10.f44011d);
        }
        if (g10.d() != null) {
            sslSocket.setEnabledCipherSuites(g10.f44010c);
        }
    }

    public final List d() {
        String[] strArr = this.f44010c;
        if (strArr != null) {
            ArrayList arrayList = new ArrayList(strArr.length);
            for (String str : strArr) {
                arrayList.add(c.f43932b.b(str));
            }
            return CollectionsKt.h1(arrayList);
        }
        return null;
    }

    public final boolean e(SSLSocket socket) {
        Intrinsics.checkNotNullParameter(socket, "socket");
        if (!this.f44008a) {
            return false;
        }
        String[] strArr = this.f44011d;
        if (strArr != null && !au.e.u(strArr, socket.getEnabledProtocols(), rr.a.f())) {
            return false;
        }
        String[] strArr2 = this.f44010c;
        if (strArr2 != null && !au.e.u(strArr2, socket.getEnabledCipherSuites(), c.f43932b.c())) {
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
        boolean z10 = this.f44008a;
        d dVar = (d) obj;
        if (z10 != dVar.f44008a) {
            return false;
        }
        if (z10 && (!Arrays.equals(this.f44010c, dVar.f44010c) || !Arrays.equals(this.f44011d, dVar.f44011d) || this.f44009b != dVar.f44009b)) {
            return false;
        }
        return true;
    }

    public final boolean f() {
        return this.f44008a;
    }

    public final boolean h() {
        return this.f44009b;
    }

    public int hashCode() {
        int i10;
        if (this.f44008a) {
            String[] strArr = this.f44010c;
            int i11 = 0;
            if (strArr != null) {
                i10 = Arrays.hashCode(strArr);
            } else {
                i10 = 0;
            }
            int i12 = (527 + i10) * 31;
            String[] strArr2 = this.f44011d;
            if (strArr2 != null) {
                i11 = Arrays.hashCode(strArr2);
            }
            return ((i12 + i11) * 31) + (!this.f44009b ? 1 : 0);
        }
        return 17;
    }

    public final List i() {
        String[] strArr = this.f44011d;
        if (strArr != null) {
            ArrayList arrayList = new ArrayList(strArr.length);
            for (String str : strArr) {
                arrayList.add(h.f44033e.a(str));
            }
            return CollectionsKt.h1(arrayList);
        }
        return null;
    }

    public String toString() {
        if (!this.f44008a) {
            return "ConnectionSpec()";
        }
        return "ConnectionSpec(cipherSuites=" + Objects.toString(d(), "[all enabled]") + ", tlsVersions=" + Objects.toString(i(), "[all enabled]") + ", supportsTlsExtensions=" + this.f44009b + ')';
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private boolean f44012a;

        /* renamed from: b  reason: collision with root package name */
        private String[] f44013b;

        /* renamed from: c  reason: collision with root package name */
        private String[] f44014c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f44015d;

        public a(boolean z10) {
            this.f44012a = z10;
        }

        public final d a() {
            return new d(this.f44012a, this.f44015d, this.f44013b, this.f44014c);
        }

        public final a b(String... cipherSuites) {
            boolean z10;
            Intrinsics.checkNotNullParameter(cipherSuites, "cipherSuites");
            if (this.f44012a) {
                if (cipherSuites.length == 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                if (!z10) {
                    this.f44013b = (String[]) cipherSuites.clone();
                    return this;
                }
                throw new IllegalArgumentException("At least one cipher suite is required");
            }
            throw new IllegalArgumentException("no cipher suites for cleartext connections");
        }

        public final a c(c... cipherSuites) {
            Intrinsics.checkNotNullParameter(cipherSuites, "cipherSuites");
            if (this.f44012a) {
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
            if (this.f44012a) {
                this.f44015d = z10;
                return this;
            }
            throw new IllegalArgumentException("no TLS extensions for cleartext connections");
        }

        public final a e(String... tlsVersions) {
            boolean z10;
            Intrinsics.checkNotNullParameter(tlsVersions, "tlsVersions");
            if (this.f44012a) {
                if (tlsVersions.length == 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                if (!z10) {
                    this.f44014c = (String[]) tlsVersions.clone();
                    return this;
                }
                throw new IllegalArgumentException("At least one TLS version is required");
            }
            throw new IllegalArgumentException("no TLS versions for cleartext connections");
        }

        public final a f(h... tlsVersions) {
            Intrinsics.checkNotNullParameter(tlsVersions, "tlsVersions");
            if (this.f44012a) {
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
            this.f44012a = connectionSpec.f();
            this.f44013b = connectionSpec.f44010c;
            this.f44014c = connectionSpec.f44011d;
            this.f44015d = connectionSpec.h();
        }
    }
}
