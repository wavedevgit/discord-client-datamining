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
    public static final b f41101e = new b(null);

    /* renamed from: f  reason: collision with root package name */
    private static final c[] f41102f;

    /* renamed from: g  reason: collision with root package name */
    private static final c[] f41103g;

    /* renamed from: h  reason: collision with root package name */
    public static final d f41104h;

    /* renamed from: i  reason: collision with root package name */
    public static final d f41105i;

    /* renamed from: j  reason: collision with root package name */
    public static final d f41106j;

    /* renamed from: k  reason: collision with root package name */
    public static final d f41107k;

    /* renamed from: a  reason: collision with root package name */
    private final boolean f41108a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f41109b;

    /* renamed from: c  reason: collision with root package name */
    private final String[] f41110c;

    /* renamed from: d  reason: collision with root package name */
    private final String[] f41111d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private b() {
        }
    }

    static {
        c cVar = c.f41073o1;
        c cVar2 = c.f41076p1;
        c cVar3 = c.f41079q1;
        c cVar4 = c.f41031a1;
        c cVar5 = c.f41043e1;
        c cVar6 = c.f41034b1;
        c cVar7 = c.f41046f1;
        c cVar8 = c.f41064l1;
        c cVar9 = c.f41061k1;
        c[] cVarArr = {cVar, cVar2, cVar3, cVar4, cVar5, cVar6, cVar7, cVar8, cVar9};
        f41102f = cVarArr;
        c[] cVarArr2 = {cVar, cVar2, cVar3, cVar4, cVar5, cVar6, cVar7, cVar8, cVar9, c.L0, c.M0, c.f41057j0, c.f41060k0, c.H, c.L, c.f41062l};
        f41103g = cVarArr2;
        a c10 = new a(true).c((c[]) Arrays.copyOf(cVarArr, cVarArr.length));
        h hVar = h.TLS_1_3;
        h hVar2 = h.TLS_1_2;
        f41104h = c10.f(hVar, hVar2).d(true).a();
        f41105i = new a(true).c((c[]) Arrays.copyOf(cVarArr2, cVarArr2.length)).f(hVar, hVar2).d(true).a();
        f41106j = new a(true).c((c[]) Arrays.copyOf(cVarArr2, cVarArr2.length)).f(hVar, hVar2, h.TLS_1_1, h.TLS_1_0).d(true).a();
        f41107k = new a(false).a();
    }

    public d(boolean z10, boolean z11, String[] strArr, String[] strArr2) {
        this.f41108a = z10;
        this.f41109b = z11;
        this.f41110c = strArr;
        this.f41111d = strArr2;
    }

    private final d g(SSLSocket sSLSocket, boolean z10) {
        String[] cipherSuitesIntersection;
        String[] tlsVersionsIntersection;
        if (this.f41110c != null) {
            String[] enabledCipherSuites = sSLSocket.getEnabledCipherSuites();
            Intrinsics.checkNotNullExpressionValue(enabledCipherSuites, "sslSocket.enabledCipherSuites");
            cipherSuitesIntersection = mu.e.E(enabledCipherSuites, this.f41110c, c.f41032b.c());
        } else {
            cipherSuitesIntersection = sSLSocket.getEnabledCipherSuites();
        }
        if (this.f41111d != null) {
            String[] enabledProtocols = sSLSocket.getEnabledProtocols();
            Intrinsics.checkNotNullExpressionValue(enabledProtocols, "sslSocket.enabledProtocols");
            tlsVersionsIntersection = mu.e.E(enabledProtocols, this.f41111d, ds.a.f());
        } else {
            tlsVersionsIntersection = sSLSocket.getEnabledProtocols();
        }
        String[] supportedCipherSuites = sSLSocket.getSupportedCipherSuites();
        Intrinsics.checkNotNullExpressionValue(supportedCipherSuites, "supportedCipherSuites");
        int x10 = mu.e.x(supportedCipherSuites, "TLS_FALLBACK_SCSV", c.f41032b.c());
        if (z10 && x10 != -1) {
            Intrinsics.checkNotNullExpressionValue(cipherSuitesIntersection, "cipherSuitesIntersection");
            String str = supportedCipherSuites[x10];
            Intrinsics.checkNotNullExpressionValue(str, "supportedCipherSuites[indexOfFallbackScsv]");
            cipherSuitesIntersection = mu.e.o(cipherSuitesIntersection, str);
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
            sslSocket.setEnabledProtocols(g10.f41111d);
        }
        if (g10.d() != null) {
            sslSocket.setEnabledCipherSuites(g10.f41110c);
        }
    }

    public final List d() {
        String[] strArr = this.f41110c;
        if (strArr != null) {
            ArrayList arrayList = new ArrayList(strArr.length);
            for (String str : strArr) {
                arrayList.add(c.f41032b.b(str));
            }
            return CollectionsKt.h1(arrayList);
        }
        return null;
    }

    public final boolean e(SSLSocket socket) {
        Intrinsics.checkNotNullParameter(socket, "socket");
        if (!this.f41108a) {
            return false;
        }
        String[] strArr = this.f41111d;
        if (strArr != null && !mu.e.u(strArr, socket.getEnabledProtocols(), ds.a.f())) {
            return false;
        }
        String[] strArr2 = this.f41110c;
        if (strArr2 != null && !mu.e.u(strArr2, socket.getEnabledCipherSuites(), c.f41032b.c())) {
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
        boolean z10 = this.f41108a;
        d dVar = (d) obj;
        if (z10 != dVar.f41108a) {
            return false;
        }
        if (z10 && (!Arrays.equals(this.f41110c, dVar.f41110c) || !Arrays.equals(this.f41111d, dVar.f41111d) || this.f41109b != dVar.f41109b)) {
            return false;
        }
        return true;
    }

    public final boolean f() {
        return this.f41108a;
    }

    public final boolean h() {
        return this.f41109b;
    }

    public int hashCode() {
        int i10;
        if (this.f41108a) {
            String[] strArr = this.f41110c;
            int i11 = 0;
            if (strArr != null) {
                i10 = Arrays.hashCode(strArr);
            } else {
                i10 = 0;
            }
            int i12 = (527 + i10) * 31;
            String[] strArr2 = this.f41111d;
            if (strArr2 != null) {
                i11 = Arrays.hashCode(strArr2);
            }
            return ((i12 + i11) * 31) + (!this.f41109b ? 1 : 0);
        }
        return 17;
    }

    public final List i() {
        String[] strArr = this.f41111d;
        if (strArr != null) {
            ArrayList arrayList = new ArrayList(strArr.length);
            for (String str : strArr) {
                arrayList.add(h.f41133e.a(str));
            }
            return CollectionsKt.h1(arrayList);
        }
        return null;
    }

    public String toString() {
        if (!this.f41108a) {
            return "ConnectionSpec()";
        }
        return "ConnectionSpec(cipherSuites=" + Objects.toString(d(), "[all enabled]") + ", tlsVersions=" + Objects.toString(i(), "[all enabled]") + ", supportsTlsExtensions=" + this.f41109b + ')';
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private boolean f41112a;

        /* renamed from: b  reason: collision with root package name */
        private String[] f41113b;

        /* renamed from: c  reason: collision with root package name */
        private String[] f41114c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f41115d;

        public a(boolean z10) {
            this.f41112a = z10;
        }

        public final d a() {
            return new d(this.f41112a, this.f41115d, this.f41113b, this.f41114c);
        }

        public final a b(String... cipherSuites) {
            boolean z10;
            Intrinsics.checkNotNullParameter(cipherSuites, "cipherSuites");
            if (this.f41112a) {
                if (cipherSuites.length == 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                if (!z10) {
                    this.f41113b = (String[]) cipherSuites.clone();
                    return this;
                }
                throw new IllegalArgumentException("At least one cipher suite is required");
            }
            throw new IllegalArgumentException("no cipher suites for cleartext connections");
        }

        public final a c(c... cipherSuites) {
            Intrinsics.checkNotNullParameter(cipherSuites, "cipherSuites");
            if (this.f41112a) {
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
            if (this.f41112a) {
                this.f41115d = z10;
                return this;
            }
            throw new IllegalArgumentException("no TLS extensions for cleartext connections");
        }

        public final a e(String... tlsVersions) {
            boolean z10;
            Intrinsics.checkNotNullParameter(tlsVersions, "tlsVersions");
            if (this.f41112a) {
                if (tlsVersions.length == 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                if (!z10) {
                    this.f41114c = (String[]) tlsVersions.clone();
                    return this;
                }
                throw new IllegalArgumentException("At least one TLS version is required");
            }
            throw new IllegalArgumentException("no TLS versions for cleartext connections");
        }

        public final a f(h... tlsVersions) {
            Intrinsics.checkNotNullParameter(tlsVersions, "tlsVersions");
            if (this.f41112a) {
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
            this.f41112a = connectionSpec.f();
            this.f41113b = connectionSpec.f41110c;
            this.f41114c = connectionSpec.f41111d;
            this.f41115d = connectionSpec.h();
        }
    }
}
