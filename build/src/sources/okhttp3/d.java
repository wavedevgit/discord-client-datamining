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
    public static final b f42282e = new b(null);

    /* renamed from: f  reason: collision with root package name */
    private static final c[] f42283f;

    /* renamed from: g  reason: collision with root package name */
    private static final c[] f42284g;

    /* renamed from: h  reason: collision with root package name */
    public static final d f42285h;

    /* renamed from: i  reason: collision with root package name */
    public static final d f42286i;

    /* renamed from: j  reason: collision with root package name */
    public static final d f42287j;

    /* renamed from: k  reason: collision with root package name */
    public static final d f42288k;

    /* renamed from: a  reason: collision with root package name */
    private final boolean f42289a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f42290b;

    /* renamed from: c  reason: collision with root package name */
    private final String[] f42291c;

    /* renamed from: d  reason: collision with root package name */
    private final String[] f42292d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private b() {
        }
    }

    static {
        c cVar = c.f42254o1;
        c cVar2 = c.f42257p1;
        c cVar3 = c.f42260q1;
        c cVar4 = c.f42212a1;
        c cVar5 = c.f42224e1;
        c cVar6 = c.f42215b1;
        c cVar7 = c.f42227f1;
        c cVar8 = c.f42245l1;
        c cVar9 = c.f42242k1;
        c[] cVarArr = {cVar, cVar2, cVar3, cVar4, cVar5, cVar6, cVar7, cVar8, cVar9};
        f42283f = cVarArr;
        c[] cVarArr2 = {cVar, cVar2, cVar3, cVar4, cVar5, cVar6, cVar7, cVar8, cVar9, c.L0, c.M0, c.f42238j0, c.f42241k0, c.H, c.L, c.f42243l};
        f42284g = cVarArr2;
        a c10 = new a(true).c((c[]) Arrays.copyOf(cVarArr, cVarArr.length));
        h hVar = h.TLS_1_3;
        h hVar2 = h.TLS_1_2;
        f42285h = c10.f(hVar, hVar2).d(true).a();
        f42286i = new a(true).c((c[]) Arrays.copyOf(cVarArr2, cVarArr2.length)).f(hVar, hVar2).d(true).a();
        f42287j = new a(true).c((c[]) Arrays.copyOf(cVarArr2, cVarArr2.length)).f(hVar, hVar2, h.TLS_1_1, h.TLS_1_0).d(true).a();
        f42288k = new a(false).a();
    }

    public d(boolean z10, boolean z11, String[] strArr, String[] strArr2) {
        this.f42289a = z10;
        this.f42290b = z11;
        this.f42291c = strArr;
        this.f42292d = strArr2;
    }

    private final d g(SSLSocket sSLSocket, boolean z10) {
        String[] cipherSuitesIntersection;
        String[] tlsVersionsIntersection;
        if (this.f42291c != null) {
            String[] enabledCipherSuites = sSLSocket.getEnabledCipherSuites();
            Intrinsics.checkNotNullExpressionValue(enabledCipherSuites, "sslSocket.enabledCipherSuites");
            cipherSuitesIntersection = du.e.E(enabledCipherSuites, this.f42291c, c.f42213b.c());
        } else {
            cipherSuitesIntersection = sSLSocket.getEnabledCipherSuites();
        }
        if (this.f42292d != null) {
            String[] enabledProtocols = sSLSocket.getEnabledProtocols();
            Intrinsics.checkNotNullExpressionValue(enabledProtocols, "sslSocket.enabledProtocols");
            tlsVersionsIntersection = du.e.E(enabledProtocols, this.f42292d, ur.a.f());
        } else {
            tlsVersionsIntersection = sSLSocket.getEnabledProtocols();
        }
        String[] supportedCipherSuites = sSLSocket.getSupportedCipherSuites();
        Intrinsics.checkNotNullExpressionValue(supportedCipherSuites, "supportedCipherSuites");
        int x10 = du.e.x(supportedCipherSuites, "TLS_FALLBACK_SCSV", c.f42213b.c());
        if (z10 && x10 != -1) {
            Intrinsics.checkNotNullExpressionValue(cipherSuitesIntersection, "cipherSuitesIntersection");
            String str = supportedCipherSuites[x10];
            Intrinsics.checkNotNullExpressionValue(str, "supportedCipherSuites[indexOfFallbackScsv]");
            cipherSuitesIntersection = du.e.o(cipherSuitesIntersection, str);
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
            sslSocket.setEnabledProtocols(g10.f42292d);
        }
        if (g10.d() != null) {
            sslSocket.setEnabledCipherSuites(g10.f42291c);
        }
    }

    public final List d() {
        String[] strArr = this.f42291c;
        if (strArr != null) {
            ArrayList arrayList = new ArrayList(strArr.length);
            for (String str : strArr) {
                arrayList.add(c.f42213b.b(str));
            }
            return CollectionsKt.h1(arrayList);
        }
        return null;
    }

    public final boolean e(SSLSocket socket) {
        Intrinsics.checkNotNullParameter(socket, "socket");
        if (!this.f42289a) {
            return false;
        }
        String[] strArr = this.f42292d;
        if (strArr != null && !du.e.u(strArr, socket.getEnabledProtocols(), ur.a.f())) {
            return false;
        }
        String[] strArr2 = this.f42291c;
        if (strArr2 != null && !du.e.u(strArr2, socket.getEnabledCipherSuites(), c.f42213b.c())) {
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
        boolean z10 = this.f42289a;
        d dVar = (d) obj;
        if (z10 != dVar.f42289a) {
            return false;
        }
        if (z10 && (!Arrays.equals(this.f42291c, dVar.f42291c) || !Arrays.equals(this.f42292d, dVar.f42292d) || this.f42290b != dVar.f42290b)) {
            return false;
        }
        return true;
    }

    public final boolean f() {
        return this.f42289a;
    }

    public final boolean h() {
        return this.f42290b;
    }

    public int hashCode() {
        int i10;
        if (this.f42289a) {
            String[] strArr = this.f42291c;
            int i11 = 0;
            if (strArr != null) {
                i10 = Arrays.hashCode(strArr);
            } else {
                i10 = 0;
            }
            int i12 = (527 + i10) * 31;
            String[] strArr2 = this.f42292d;
            if (strArr2 != null) {
                i11 = Arrays.hashCode(strArr2);
            }
            return ((i12 + i11) * 31) + (!this.f42290b ? 1 : 0);
        }
        return 17;
    }

    public final List i() {
        String[] strArr = this.f42292d;
        if (strArr != null) {
            ArrayList arrayList = new ArrayList(strArr.length);
            for (String str : strArr) {
                arrayList.add(h.f42314e.a(str));
            }
            return CollectionsKt.h1(arrayList);
        }
        return null;
    }

    public String toString() {
        if (!this.f42289a) {
            return "ConnectionSpec()";
        }
        return "ConnectionSpec(cipherSuites=" + Objects.toString(d(), "[all enabled]") + ", tlsVersions=" + Objects.toString(i(), "[all enabled]") + ", supportsTlsExtensions=" + this.f42290b + ')';
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private boolean f42293a;

        /* renamed from: b  reason: collision with root package name */
        private String[] f42294b;

        /* renamed from: c  reason: collision with root package name */
        private String[] f42295c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f42296d;

        public a(boolean z10) {
            this.f42293a = z10;
        }

        public final d a() {
            return new d(this.f42293a, this.f42296d, this.f42294b, this.f42295c);
        }

        public final a b(String... cipherSuites) {
            boolean z10;
            Intrinsics.checkNotNullParameter(cipherSuites, "cipherSuites");
            if (this.f42293a) {
                if (cipherSuites.length == 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                if (!z10) {
                    this.f42294b = (String[]) cipherSuites.clone();
                    return this;
                }
                throw new IllegalArgumentException("At least one cipher suite is required");
            }
            throw new IllegalArgumentException("no cipher suites for cleartext connections");
        }

        public final a c(c... cipherSuites) {
            Intrinsics.checkNotNullParameter(cipherSuites, "cipherSuites");
            if (this.f42293a) {
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
            if (this.f42293a) {
                this.f42296d = z10;
                return this;
            }
            throw new IllegalArgumentException("no TLS extensions for cleartext connections");
        }

        public final a e(String... tlsVersions) {
            boolean z10;
            Intrinsics.checkNotNullParameter(tlsVersions, "tlsVersions");
            if (this.f42293a) {
                if (tlsVersions.length == 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                if (!z10) {
                    this.f42295c = (String[]) tlsVersions.clone();
                    return this;
                }
                throw new IllegalArgumentException("At least one TLS version is required");
            }
            throw new IllegalArgumentException("no TLS versions for cleartext connections");
        }

        public final a f(h... tlsVersions) {
            Intrinsics.checkNotNullParameter(tlsVersions, "tlsVersions");
            if (this.f42293a) {
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
            this.f42293a = connectionSpec.f();
            this.f42294b = connectionSpec.f42291c;
            this.f42295c = connectionSpec.f42292d;
            this.f42296d = connectionSpec.h();
        }
    }
}
