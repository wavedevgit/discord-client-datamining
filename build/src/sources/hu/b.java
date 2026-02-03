package hu;

import android.net.http.X509TrustManagerExtensions;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;
import java.util.List;
import javax.net.ssl.SSLPeerUnverifiedException;
import javax.net.ssl.X509TrustManager;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b extends ju.c {

    /* renamed from: d  reason: collision with root package name */
    public static final a f28156d = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final X509TrustManager f28157b;

    /* renamed from: c  reason: collision with root package name */
    private final X509TrustManagerExtensions f28158c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final b a(X509TrustManager trustManager) {
            X509TrustManagerExtensions x509TrustManagerExtensions;
            Intrinsics.checkNotNullParameter(trustManager, "trustManager");
            try {
                x509TrustManagerExtensions = new X509TrustManagerExtensions(trustManager);
            } catch (IllegalArgumentException unused) {
                x509TrustManagerExtensions = null;
            }
            if (x509TrustManagerExtensions == null) {
                return null;
            }
            return new b(trustManager, x509TrustManagerExtensions);
        }

        private a() {
        }
    }

    public b(X509TrustManager trustManager, X509TrustManagerExtensions x509TrustManagerExtensions) {
        Intrinsics.checkNotNullParameter(trustManager, "trustManager");
        Intrinsics.checkNotNullParameter(x509TrustManagerExtensions, "x509TrustManagerExtensions");
        this.f28157b = trustManager;
        this.f28158c = x509TrustManagerExtensions;
    }

    @Override // ju.c
    public List a(List chain, String hostname) {
        Intrinsics.checkNotNullParameter(chain, "chain");
        Intrinsics.checkNotNullParameter(hostname, "hostname");
        try {
            List<X509Certificate> checkServerTrusted = this.f28158c.checkServerTrusted((X509Certificate[]) chain.toArray(new X509Certificate[0]), "RSA", hostname);
            Intrinsics.checkNotNullExpressionValue(checkServerTrusted, "x509TrustManagerExtensio…ficates, \"RSA\", hostname)");
            return checkServerTrusted;
        } catch (CertificateException e10) {
            SSLPeerUnverifiedException sSLPeerUnverifiedException = new SSLPeerUnverifiedException(e10.getMessage());
            sSLPeerUnverifiedException.initCause(e10);
            throw sSLPeerUnverifiedException;
        }
    }

    public boolean equals(Object obj) {
        if ((obj instanceof b) && ((b) obj).f28157b == this.f28157b) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return System.identityHashCode(this.f28157b);
    }
}
