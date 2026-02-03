package gu;

import android.os.Build;
import android.security.NetworkSecurityPolicy;
import hu.i;
import hu.j;
import hu.k;
import hu.l;
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
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b extends h {

    /* renamed from: f  reason: collision with root package name */
    public static final a f26623f = new a(null);

    /* renamed from: g  reason: collision with root package name */
    private static final boolean f26624g;

    /* renamed from: d  reason: collision with root package name */
    private final List f26625d;

    /* renamed from: e  reason: collision with root package name */
    private final hu.h f26626e;

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
            return b.f26624g;
        }

        private a() {
        }
    }

    /* renamed from: gu.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0343b implements ju.e {

        /* renamed from: a  reason: collision with root package name */
        private final X509TrustManager f26627a;

        /* renamed from: b  reason: collision with root package name */
        private final Method f26628b;

        public C0343b(X509TrustManager trustManager, Method findByIssuerAndSignatureMethod) {
            Intrinsics.checkNotNullParameter(trustManager, "trustManager");
            Intrinsics.checkNotNullParameter(findByIssuerAndSignatureMethod, "findByIssuerAndSignatureMethod");
            this.f26627a = trustManager;
            this.f26628b = findByIssuerAndSignatureMethod;
        }

        @Override // ju.e
        public X509Certificate a(X509Certificate cert) {
            Intrinsics.checkNotNullParameter(cert, "cert");
            try {
                Object invoke = this.f26628b.invoke(this.f26627a, cert);
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
            if (!(obj instanceof C0343b)) {
                return false;
            }
            C0343b c0343b = (C0343b) obj;
            if (Intrinsics.areEqual(this.f26627a, c0343b.f26627a) && Intrinsics.areEqual(this.f26628b, c0343b.f26628b)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f26627a.hashCode() * 31) + this.f26628b.hashCode();
        }

        public String toString() {
            return "CustomTrustRootIndex(trustManager=" + this.f26627a + ", findByIssuerAndSignatureMethod=" + this.f26628b + ')';
        }
    }

    static {
        boolean z10 = false;
        if (h.f26650a.h() && Build.VERSION.SDK_INT < 30) {
            z10 = true;
        }
        f26624g = z10;
    }

    public b() {
        k[] kVarArr = {l.a.b(l.f28181j, null, 1, null), new j(hu.f.f28163f.d()), new j(i.f28177a.a()), new j(hu.g.f28171a.a())};
        ArrayList arrayList = new ArrayList();
        for (Object obj : CollectionsKt.q(kVarArr)) {
            if (((k) obj).a()) {
                arrayList.add(obj);
            }
        }
        this.f26625d = arrayList;
        this.f26626e = hu.h.f28173d.a();
    }

    @Override // gu.h
    public ju.c c(X509TrustManager trustManager) {
        Intrinsics.checkNotNullParameter(trustManager, "trustManager");
        hu.b a10 = hu.b.f28156d.a(trustManager);
        if (a10 != null) {
            return a10;
        }
        return super.c(trustManager);
    }

    @Override // gu.h
    public ju.e d(X509TrustManager trustManager) {
        Intrinsics.checkNotNullParameter(trustManager, "trustManager");
        try {
            Method method = trustManager.getClass().getDeclaredMethod("findTrustAnchorByIssuerAndSignature", X509Certificate.class);
            method.setAccessible(true);
            Intrinsics.checkNotNullExpressionValue(method, "method");
            return new C0343b(trustManager, method);
        } catch (NoSuchMethodException unused) {
            return super.d(trustManager);
        }
    }

    @Override // gu.h
    public void e(SSLSocket sslSocket, String str, List protocols) {
        Object obj;
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        Intrinsics.checkNotNullParameter(protocols, "protocols");
        Iterator it = this.f26625d.iterator();
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

    @Override // gu.h
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

    @Override // gu.h
    public String h(SSLSocket sslSocket) {
        Object obj;
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        Iterator it = this.f26625d.iterator();
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

    @Override // gu.h
    public Object i(String closer) {
        Intrinsics.checkNotNullParameter(closer, "closer");
        return this.f26626e.a(closer);
    }

    @Override // gu.h
    public boolean j(String hostname) {
        Intrinsics.checkNotNullParameter(hostname, "hostname");
        return NetworkSecurityPolicy.getInstance().isCleartextTrafficPermitted(hostname);
    }

    @Override // gu.h
    public void m(String message, Object obj) {
        Intrinsics.checkNotNullParameter(message, "message");
        if (!this.f26626e.b(obj)) {
            h.l(this, message, 5, null, 4, null);
        }
    }
}
