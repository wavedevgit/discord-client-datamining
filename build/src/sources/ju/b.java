package ju;

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
import ku.i;
import ku.j;
import ku.k;
import ku.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b extends h {

    /* renamed from: f  reason: collision with root package name */
    public static final a f31414f = new a(null);

    /* renamed from: g  reason: collision with root package name */
    private static final boolean f31415g;

    /* renamed from: d  reason: collision with root package name */
    private final List f31416d;

    /* renamed from: e  reason: collision with root package name */
    private final ku.h f31417e;

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
            return b.f31415g;
        }

        private a() {
        }
    }

    /* renamed from: ju.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0433b implements mu.e {

        /* renamed from: a  reason: collision with root package name */
        private final X509TrustManager f31418a;

        /* renamed from: b  reason: collision with root package name */
        private final Method f31419b;

        public C0433b(X509TrustManager trustManager, Method findByIssuerAndSignatureMethod) {
            Intrinsics.checkNotNullParameter(trustManager, "trustManager");
            Intrinsics.checkNotNullParameter(findByIssuerAndSignatureMethod, "findByIssuerAndSignatureMethod");
            this.f31418a = trustManager;
            this.f31419b = findByIssuerAndSignatureMethod;
        }

        @Override // mu.e
        public X509Certificate a(X509Certificate cert) {
            Intrinsics.checkNotNullParameter(cert, "cert");
            try {
                Object invoke = this.f31419b.invoke(this.f31418a, cert);
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
            if (!(obj instanceof C0433b)) {
                return false;
            }
            C0433b c0433b = (C0433b) obj;
            if (Intrinsics.areEqual(this.f31418a, c0433b.f31418a) && Intrinsics.areEqual(this.f31419b, c0433b.f31419b)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f31418a.hashCode() * 31) + this.f31419b.hashCode();
        }

        public String toString() {
            return "CustomTrustRootIndex(trustManager=" + this.f31418a + ", findByIssuerAndSignatureMethod=" + this.f31419b + ')';
        }
    }

    static {
        boolean z10 = false;
        if (h.f31441a.h() && Build.VERSION.SDK_INT < 30) {
            z10 = true;
        }
        f31415g = z10;
    }

    public b() {
        k[] kVarArr = {l.a.b(l.f36168j, null, 1, null), new j(ku.f.f36150f.d()), new j(i.f36164a.a()), new j(ku.g.f36158a.a())};
        ArrayList arrayList = new ArrayList();
        for (Object obj : CollectionsKt.q(kVarArr)) {
            if (((k) obj).a()) {
                arrayList.add(obj);
            }
        }
        this.f31416d = arrayList;
        this.f31417e = ku.h.f36160d.a();
    }

    @Override // ju.h
    public mu.c c(X509TrustManager trustManager) {
        Intrinsics.checkNotNullParameter(trustManager, "trustManager");
        ku.b a10 = ku.b.f36143d.a(trustManager);
        if (a10 != null) {
            return a10;
        }
        return super.c(trustManager);
    }

    @Override // ju.h
    public mu.e d(X509TrustManager trustManager) {
        Intrinsics.checkNotNullParameter(trustManager, "trustManager");
        try {
            Method method = trustManager.getClass().getDeclaredMethod("findTrustAnchorByIssuerAndSignature", X509Certificate.class);
            method.setAccessible(true);
            Intrinsics.checkNotNullExpressionValue(method, "method");
            return new C0433b(trustManager, method);
        } catch (NoSuchMethodException unused) {
            return super.d(trustManager);
        }
    }

    @Override // ju.h
    public void e(SSLSocket sslSocket, String str, List protocols) {
        Object obj;
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        Intrinsics.checkNotNullParameter(protocols, "protocols");
        Iterator it = this.f31416d.iterator();
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

    @Override // ju.h
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

    @Override // ju.h
    public String h(SSLSocket sslSocket) {
        Object obj;
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        Iterator it = this.f31416d.iterator();
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

    @Override // ju.h
    public Object i(String closer) {
        Intrinsics.checkNotNullParameter(closer, "closer");
        return this.f31417e.a(closer);
    }

    @Override // ju.h
    public boolean j(String hostname) {
        Intrinsics.checkNotNullParameter(hostname, "hostname");
        return NetworkSecurityPolicy.getInstance().isCleartextTrafficPermitted(hostname);
    }

    @Override // ju.h
    public void m(String message, Object obj) {
        Intrinsics.checkNotNullParameter(message, "message");
        if (!this.f31417e.b(obj)) {
            h.l(this, message, 5, null, 4, null);
        }
    }
}
