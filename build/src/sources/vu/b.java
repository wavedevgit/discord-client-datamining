package vu;

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
import wu.i;
import wu.j;
import wu.k;
import wu.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b extends h {

    /* renamed from: f  reason: collision with root package name */
    public static final a f52557f = new a(null);

    /* renamed from: g  reason: collision with root package name */
    private static final boolean f52558g;

    /* renamed from: d  reason: collision with root package name */
    private final List f52559d;

    /* renamed from: e  reason: collision with root package name */
    private final wu.h f52560e;

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
            return b.f52558g;
        }

        private a() {
        }
    }

    /* renamed from: vu.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0716b implements yu.e {

        /* renamed from: a  reason: collision with root package name */
        private final X509TrustManager f52561a;

        /* renamed from: b  reason: collision with root package name */
        private final Method f52562b;

        public C0716b(X509TrustManager trustManager, Method findByIssuerAndSignatureMethod) {
            Intrinsics.checkNotNullParameter(trustManager, "trustManager");
            Intrinsics.checkNotNullParameter(findByIssuerAndSignatureMethod, "findByIssuerAndSignatureMethod");
            this.f52561a = trustManager;
            this.f52562b = findByIssuerAndSignatureMethod;
        }

        @Override // yu.e
        public X509Certificate a(X509Certificate cert) {
            Intrinsics.checkNotNullParameter(cert, "cert");
            try {
                Object invoke = this.f52562b.invoke(this.f52561a, cert);
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
            if (!(obj instanceof C0716b)) {
                return false;
            }
            C0716b c0716b = (C0716b) obj;
            if (Intrinsics.areEqual(this.f52561a, c0716b.f52561a) && Intrinsics.areEqual(this.f52562b, c0716b.f52562b)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f52561a.hashCode() * 31) + this.f52562b.hashCode();
        }

        public String toString() {
            return "CustomTrustRootIndex(trustManager=" + this.f52561a + ", findByIssuerAndSignatureMethod=" + this.f52562b + ')';
        }
    }

    static {
        boolean z10 = false;
        if (h.f52584a.h() && Build.VERSION.SDK_INT < 30) {
            z10 = true;
        }
        f52558g = z10;
    }

    public b() {
        k[] kVarArr = {l.a.b(l.f54576j, null, 1, null), new j(wu.f.f54558f.d()), new j(i.f54572a.a()), new j(wu.g.f54566a.a())};
        ArrayList arrayList = new ArrayList();
        for (Object obj : CollectionsKt.q(kVarArr)) {
            if (((k) obj).a()) {
                arrayList.add(obj);
            }
        }
        this.f52559d = arrayList;
        this.f52560e = wu.h.f54568d.a();
    }

    @Override // vu.h
    public yu.c c(X509TrustManager trustManager) {
        Intrinsics.checkNotNullParameter(trustManager, "trustManager");
        wu.b a10 = wu.b.f54551d.a(trustManager);
        if (a10 != null) {
            return a10;
        }
        return super.c(trustManager);
    }

    @Override // vu.h
    public yu.e d(X509TrustManager trustManager) {
        Intrinsics.checkNotNullParameter(trustManager, "trustManager");
        try {
            Method method = trustManager.getClass().getDeclaredMethod("findTrustAnchorByIssuerAndSignature", X509Certificate.class);
            method.setAccessible(true);
            Intrinsics.checkNotNullExpressionValue(method, "method");
            return new C0716b(trustManager, method);
        } catch (NoSuchMethodException unused) {
            return super.d(trustManager);
        }
    }

    @Override // vu.h
    public void e(SSLSocket sslSocket, String str, List protocols) {
        Object obj;
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        Intrinsics.checkNotNullParameter(protocols, "protocols");
        Iterator it = this.f52559d.iterator();
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

    @Override // vu.h
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

    @Override // vu.h
    public String h(SSLSocket sslSocket) {
        Object obj;
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        Iterator it = this.f52559d.iterator();
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

    @Override // vu.h
    public Object i(String closer) {
        Intrinsics.checkNotNullParameter(closer, "closer");
        return this.f52560e.a(closer);
    }

    @Override // vu.h
    public boolean j(String hostname) {
        Intrinsics.checkNotNullParameter(hostname, "hostname");
        return NetworkSecurityPolicy.getInstance().isCleartextTrafficPermitted(hostname);
    }

    @Override // vu.h
    public void m(String message, Object obj) {
        Intrinsics.checkNotNullParameter(message, "message");
        if (!this.f52560e.b(obj)) {
            h.l(this, message, 5, null, 4, null);
        }
    }
}
