package ju;

import java.net.InetSocketAddress;
import java.net.Socket;
import java.security.GeneralSecurityException;
import java.security.KeyStore;
import java.security.Security;
import java.security.cert.X509Certificate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLSocket;
import javax.net.ssl.SSLSocketFactory;
import javax.net.ssl.TrustManager;
import javax.net.ssl.TrustManagerFactory;
import javax.net.ssl.X509TrustManager;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.OkHttpClient;
import okio.Buffer;
import zt.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    public static final a f31441a;

    /* renamed from: b  reason: collision with root package name */
    private static volatile h f31442b;

    /* renamed from: c  reason: collision with root package name */
    private static final Logger f31443c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private final h d() {
            ku.c.f36146a.b();
            h a10 = ju.a.f31411e.a();
            if (a10 == null) {
                h a11 = b.f31414f.a();
                Intrinsics.checkNotNull(a11);
                return a11;
            }
            return a10;
        }

        private final h e() {
            g a10;
            c a11;
            d b10;
            if (j() && (b10 = d.f31423e.b()) != null) {
                return b10;
            }
            if (i() && (a11 = c.f31420e.a()) != null) {
                return a11;
            }
            if (k() && (a10 = g.f31438e.a()) != null) {
                return a10;
            }
            f a12 = f.f31436d.a();
            if (a12 != null) {
                return a12;
            }
            h a13 = e.f31427i.a();
            if (a13 != null) {
                return a13;
            }
            return new h();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final h f() {
            if (h()) {
                return d();
            }
            return e();
        }

        private final boolean i() {
            return Intrinsics.areEqual("BC", Security.getProviders()[0].getName());
        }

        private final boolean j() {
            return Intrinsics.areEqual("Conscrypt", Security.getProviders()[0].getName());
        }

        private final boolean k() {
            return Intrinsics.areEqual("OpenJSSE", Security.getProviders()[0].getName());
        }

        public final List b(List protocols) {
            Intrinsics.checkNotNullParameter(protocols, "protocols");
            ArrayList<j> arrayList = new ArrayList();
            for (Object obj : protocols) {
                if (((j) obj) != j.HTTP_1_0) {
                    arrayList.add(obj);
                }
            }
            ArrayList arrayList2 = new ArrayList(CollectionsKt.w(arrayList, 10));
            for (j jVar : arrayList) {
                arrayList2.add(jVar.toString());
            }
            return arrayList2;
        }

        public final byte[] c(List protocols) {
            Intrinsics.checkNotNullParameter(protocols, "protocols");
            Buffer buffer = new Buffer();
            for (String str : b(protocols)) {
                buffer.writeByte(str.length());
                buffer.o0(str);
            }
            return buffer.n1();
        }

        public final h g() {
            return h.f31442b;
        }

        public final boolean h() {
            return Intrinsics.areEqual("Dalvik", System.getProperty("java.vm.name"));
        }

        private a() {
        }
    }

    static {
        a aVar = new a(null);
        f31441a = aVar;
        f31442b = aVar.f();
        f31443c = Logger.getLogger(OkHttpClient.class.getName());
    }

    public static /* synthetic */ void l(h hVar, String str, int i10, Throwable th2, int i11, Object obj) {
        if (obj == null) {
            if ((i11 & 2) != 0) {
                i10 = 4;
            }
            if ((i11 & 4) != 0) {
                th2 = null;
            }
            hVar.k(str, i10, th2);
            return;
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: log");
    }

    public void b(SSLSocket sslSocket) {
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
    }

    public mu.c c(X509TrustManager trustManager) {
        Intrinsics.checkNotNullParameter(trustManager, "trustManager");
        return new mu.a(d(trustManager));
    }

    public mu.e d(X509TrustManager trustManager) {
        Intrinsics.checkNotNullParameter(trustManager, "trustManager");
        X509Certificate[] acceptedIssuers = trustManager.getAcceptedIssuers();
        Intrinsics.checkNotNullExpressionValue(acceptedIssuers, "trustManager.acceptedIssuers");
        return new mu.b((X509Certificate[]) Arrays.copyOf(acceptedIssuers, acceptedIssuers.length));
    }

    public void e(SSLSocket sslSocket, String str, List protocols) {
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        Intrinsics.checkNotNullParameter(protocols, "protocols");
    }

    public void f(Socket socket, InetSocketAddress address, int i10) {
        Intrinsics.checkNotNullParameter(socket, "socket");
        Intrinsics.checkNotNullParameter(address, "address");
        socket.connect(address, i10);
    }

    public final String g() {
        return "OkHttp";
    }

    public String h(SSLSocket sslSocket) {
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        return null;
    }

    public Object i(String closer) {
        Intrinsics.checkNotNullParameter(closer, "closer");
        if (f31443c.isLoggable(Level.FINE)) {
            return new Throwable(closer);
        }
        return null;
    }

    public boolean j(String hostname) {
        Intrinsics.checkNotNullParameter(hostname, "hostname");
        return true;
    }

    public void k(String message, int i10, Throwable th2) {
        Level level;
        Intrinsics.checkNotNullParameter(message, "message");
        if (i10 == 5) {
            level = Level.WARNING;
        } else {
            level = Level.INFO;
        }
        f31443c.log(level, message, th2);
    }

    public void m(String message, Object obj) {
        Intrinsics.checkNotNullParameter(message, "message");
        if (obj == null) {
            message = message + " To see where this was allocated, set the OkHttpClient logger level to FINE: Logger.getLogger(OkHttpClient.class.getName()).setLevel(Level.FINE);";
        }
        k(message, 5, (Throwable) obj);
    }

    public SSLContext n() {
        SSLContext sSLContext = SSLContext.getInstance("TLS");
        Intrinsics.checkNotNullExpressionValue(sSLContext, "getInstance(\"TLS\")");
        return sSLContext;
    }

    public SSLSocketFactory o(X509TrustManager trustManager) {
        Intrinsics.checkNotNullParameter(trustManager, "trustManager");
        try {
            SSLContext n10 = n();
            n10.init(null, new TrustManager[]{trustManager}, null);
            SSLSocketFactory socketFactory = n10.getSocketFactory();
            Intrinsics.checkNotNullExpressionValue(socketFactory, "newSSLContext().apply {\n…ll)\n      }.socketFactory");
            return socketFactory;
        } catch (GeneralSecurityException e10) {
            throw new AssertionError("No System TLS: " + e10, e10);
        }
    }

    public X509TrustManager p() {
        TrustManagerFactory trustManagerFactory = TrustManagerFactory.getInstance(TrustManagerFactory.getDefaultAlgorithm());
        trustManagerFactory.init((KeyStore) null);
        TrustManager[] trustManagers = trustManagerFactory.getTrustManagers();
        Intrinsics.checkNotNull(trustManagers);
        if (trustManagers.length == 1) {
            TrustManager trustManager = trustManagers[0];
            if (trustManager instanceof X509TrustManager) {
                Intrinsics.checkNotNull(trustManager, "null cannot be cast to non-null type javax.net.ssl.X509TrustManager");
                return (X509TrustManager) trustManager;
            }
        }
        StringBuilder sb2 = new StringBuilder();
        sb2.append("Unexpected default trust managers: ");
        String arrays = Arrays.toString(trustManagers);
        Intrinsics.checkNotNullExpressionValue(arrays, "toString(this)");
        sb2.append(arrays);
        throw new IllegalStateException(sb2.toString().toString());
    }

    public String toString() {
        String simpleName = getClass().getSimpleName();
        Intrinsics.checkNotNullExpressionValue(simpleName, "javaClass.simpleName");
        return simpleName;
    }
}
