package mu;

import android.os.Build;
import android.security.NetworkSecurityPolicy;
import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.net.InetSocketAddress;
import java.net.Socket;
import java.security.cert.TrustAnchor;
import java.security.cert.X509Certificate;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import javax.net.ssl.SSLSocket;
import javax.net.ssl.X509TrustManager;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import nu.i;
import nu.j;
import nu.k;
import nu.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b extends h {

    /* renamed from: f  reason: collision with root package name */
    public static final a f37628f = new a(null);

    /* renamed from: g  reason: collision with root package name */
    private static final boolean f37629g;

    /* renamed from: d  reason: collision with root package name */
    private final List f37630d;

    /* renamed from: e  reason: collision with root package name */
    private final nu.h f37631e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final h a() {
            if (b()) {
                return new b();
            }
            return null;
        }

        public final boolean b() {
            return b.f37629g;
        }

        private a() {
        }
    }

    /* renamed from: mu.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0542b implements pu.e {

        /* renamed from: a  reason: collision with root package name */
        private final X509TrustManager f37632a;

        /* renamed from: b  reason: collision with root package name */
        private final Method f37633b;

        public C0542b(X509TrustManager trustManager, Method findByIssuerAndSignatureMethod) {
            Intrinsics.checkNotNullParameter(trustManager, "trustManager");
            Intrinsics.checkNotNullParameter(findByIssuerAndSignatureMethod, "findByIssuerAndSignatureMethod");
            this.f37632a = trustManager;
            this.f37633b = findByIssuerAndSignatureMethod;
        }

        @Override // pu.e
        public X509Certificate a(X509Certificate cert) {
            Intrinsics.checkNotNullParameter(cert, "cert");
            try {
                Object invoke = this.f37633b.invoke(this.f37632a, cert);
                Intrinsics.checkNotNull(invoke, "null cannot be cast to non-null type java.security.cert.TrustAnchor");
                return ((TrustAnchor) invoke).getTrustedCert();
            } catch (IllegalAccessException e10) {
                throw new AssertionError("unable to get issues and signature", e10);
            } catch (InvocationTargetException unused) {
                return null;
            }
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof C0542b)) {
                return false;
            }
            C0542b c0542b = (C0542b) obj;
            if (Intrinsics.areEqual(this.f37632a, c0542b.f37632a) && Intrinsics.areEqual(this.f37633b, c0542b.f37633b)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f37632a.hashCode() * 31) + this.f37633b.hashCode();
        }

        public String toString() {
            return "CustomTrustRootIndex(trustManager=" + this.f37632a + ", findByIssuerAndSignatureMethod=" + this.f37633b + ')';
        }
    }

    static {
        boolean z10 = false;
        if (h.f37655a.h() && Build.VERSION.SDK_INT < 30) {
            z10 = true;
        }
        f37629g = z10;
    }

    public b() {
        k[] kVarArr = {l.a.b(l.f40057j, null, 1, null), new j(nu.f.f40039f.d()), new j(i.f40053a.a()), new j(nu.g.f40047a.a())};
        ArrayList arrayList = new ArrayList();
        for (Object obj : CollectionsKt.q(kVarArr)) {
            if (((k) obj).a()) {
                arrayList.add(obj);
            }
        }
        this.f37630d = arrayList;
        this.f37631e = nu.h.f40049d.a();
    }

    @Override // mu.h
    public pu.c c(X509TrustManager trustManager) {
        Intrinsics.checkNotNullParameter(trustManager, "trustManager");
        nu.b a10 = nu.b.f40032d.a(trustManager);
        if (a10 != null) {
            return a10;
        }
        return super.c(trustManager);
    }

    @Override // mu.h
    public pu.e d(X509TrustManager trustManager) {
        Intrinsics.checkNotNullParameter(trustManager, "trustManager");
        try {
            Method method = trustManager.getClass().getDeclaredMethod("findTrustAnchorByIssuerAndSignature", X509Certificate.class);
            method.setAccessible(true);
            Intrinsics.checkNotNullExpressionValue(method, "method");
            return new C0542b(trustManager, method);
        } catch (NoSuchMethodException unused) {
            return super.d(trustManager);
        }
    }

    @Override // mu.h
    public void e(SSLSocket sslSocket, String str, List protocols) {
        Object obj;
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        Intrinsics.checkNotNullParameter(protocols, "protocols");
        Iterator it = this.f37630d.iterator();
        while (true) {
            if (it.hasNext()) {
                obj = it.next();
                if (((k) obj).b(sslSocket)) {
                    break;
                }
            } else {
                obj = null;
                break;
            }
        }
        k kVar = (k) obj;
        if (kVar != null) {
            kVar.d(sslSocket, str, protocols);
        }
    }

    @Override // mu.h
    public void f(Socket socket, InetSocketAddress address, int i10) {
        Intrinsics.checkNotNullParameter(socket, "socket");
        Intrinsics.checkNotNullParameter(address, "address");
        try {
            socket.connect(address, i10);
        } catch (ClassCastException e10) {
            if (Build.VERSION.SDK_INT == 26) {
                throw new IOException("Exception in connect", e10);
            }
            throw e10;
        }
    }

    @Override // mu.h
    public String h(SSLSocket sslSocket) {
        Object obj;
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        Iterator it = this.f37630d.iterator();
        while (true) {
            if (it.hasNext()) {
                obj = it.next();
                if (((k) obj).b(sslSocket)) {
                    break;
                }
            } else {
                obj = null;
                break;
            }
        }
        k kVar = (k) obj;
        if (kVar == null) {
            return null;
        }
        return kVar.c(sslSocket);
    }

    @Override // mu.h
    public Object i(String closer) {
        Intrinsics.checkNotNullParameter(closer, "closer");
        return this.f37631e.a(closer);
    }

    @Override // mu.h
    public boolean j(String hostname) {
        Intrinsics.checkNotNullParameter(hostname, "hostname");
        return NetworkSecurityPolicy.getInstance().isCleartextTrafficPermitted(hostname);
    }

    @Override // mu.h
    public void m(String message, Object obj) {
        Intrinsics.checkNotNullParameter(message, "message");
        if (!this.f37631e.b(obj)) {
            h.l(this, message, 5, null, 4, null);
        }
    }
}
