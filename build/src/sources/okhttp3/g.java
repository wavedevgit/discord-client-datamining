package okhttp3;

import as.l;
import java.io.IOException;
import java.security.cert.Certificate;
import java.security.cert.X509Certificate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import javax.net.ssl.SSLPeerUnverifiedException;
import javax.net.ssl.SSLSession;
import kotlin.Lazy;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g {

    /* renamed from: e  reason: collision with root package name */
    public static final a f41125e = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final h f41126a;

    /* renamed from: b  reason: collision with root package name */
    private final c f41127b;

    /* renamed from: c  reason: collision with root package name */
    private final List f41128c;

    /* renamed from: d  reason: collision with root package name */
    private final Lazy f41129d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: okhttp3.g$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static final class C0558a extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ List f41130d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0558a(List list) {
                super(0);
                this.f41130d = list;
            }

            @Override // kotlin.jvm.functions.Function0
            public final List invoke() {
                return this.f41130d;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ List f41131d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(List list) {
                super(0);
                this.f41131d = list;
            }

            @Override // kotlin.jvm.functions.Function0
            public final List invoke() {
                return this.f41131d;
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private final List c(Certificate[] certificateArr) {
            if (certificateArr != null) {
                return mu.e.w(Arrays.copyOf(certificateArr, certificateArr.length));
            }
            return CollectionsKt.l();
        }

        public final g a(SSLSession sSLSession) {
            boolean areEqual;
            List l10;
            Intrinsics.checkNotNullParameter(sSLSession, "<this>");
            String cipherSuite = sSLSession.getCipherSuite();
            if (cipherSuite != null) {
                if (Intrinsics.areEqual(cipherSuite, "TLS_NULL_WITH_NULL_NULL")) {
                    areEqual = true;
                } else {
                    areEqual = Intrinsics.areEqual(cipherSuite, "SSL_NULL_WITH_NULL_NULL");
                }
                if (!areEqual) {
                    c b10 = c.f41032b.b(cipherSuite);
                    String protocol = sSLSession.getProtocol();
                    if (protocol != null) {
                        if (!Intrinsics.areEqual("NONE", protocol)) {
                            h a10 = h.f41133e.a(protocol);
                            try {
                                l10 = c(sSLSession.getPeerCertificates());
                            } catch (SSLPeerUnverifiedException unused) {
                                l10 = CollectionsKt.l();
                            }
                            return new g(a10, b10, c(sSLSession.getLocalCertificates()), new b(l10));
                        }
                        throw new IOException("tlsVersion == NONE");
                    }
                    throw new IllegalStateException("tlsVersion == null");
                }
                throw new IOException("cipherSuite == " + cipherSuite);
            }
            throw new IllegalStateException("cipherSuite == null");
        }

        public final g b(h tlsVersion, c cipherSuite, List peerCertificates, List localCertificates) {
            Intrinsics.checkNotNullParameter(tlsVersion, "tlsVersion");
            Intrinsics.checkNotNullParameter(cipherSuite, "cipherSuite");
            Intrinsics.checkNotNullParameter(peerCertificates, "peerCertificates");
            Intrinsics.checkNotNullParameter(localCertificates, "localCertificates");
            return new g(tlsVersion, cipherSuite, mu.e.V(localCertificates), new C0558a(mu.e.V(peerCertificates)));
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class b extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Function0 f41132d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(Function0 function0) {
            super(0);
            this.f41132d = function0;
        }

        @Override // kotlin.jvm.functions.Function0
        public final List invoke() {
            try {
                return (List) this.f41132d.invoke();
            } catch (SSLPeerUnverifiedException unused) {
                return CollectionsKt.l();
            }
        }
    }

    public g(h tlsVersion, c cipherSuite, List localCertificates, Function0 peerCertificatesFn) {
        Intrinsics.checkNotNullParameter(tlsVersion, "tlsVersion");
        Intrinsics.checkNotNullParameter(cipherSuite, "cipherSuite");
        Intrinsics.checkNotNullParameter(localCertificates, "localCertificates");
        Intrinsics.checkNotNullParameter(peerCertificatesFn, "peerCertificatesFn");
        this.f41126a = tlsVersion;
        this.f41127b = cipherSuite;
        this.f41128c = localCertificates;
        this.f41129d = l.b(new b(peerCertificatesFn));
    }

    private final String b(Certificate certificate) {
        if (certificate instanceof X509Certificate) {
            return ((X509Certificate) certificate).getSubjectDN().toString();
        }
        String type = certificate.getType();
        Intrinsics.checkNotNullExpressionValue(type, "type");
        return type;
    }

    public final c a() {
        return this.f41127b;
    }

    public final List c() {
        return this.f41128c;
    }

    public final List d() {
        return (List) this.f41129d.getValue();
    }

    public final h e() {
        return this.f41126a;
    }

    public boolean equals(Object obj) {
        if (obj instanceof g) {
            g gVar = (g) obj;
            if (gVar.f41126a == this.f41126a && Intrinsics.areEqual(gVar.f41127b, this.f41127b) && Intrinsics.areEqual(gVar.d(), d()) && Intrinsics.areEqual(gVar.f41128c, this.f41128c)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        return ((((((527 + this.f41126a.hashCode()) * 31) + this.f41127b.hashCode()) * 31) + d().hashCode()) * 31) + this.f41128c.hashCode();
    }

    public String toString() {
        List<Certificate> d10 = d();
        ArrayList arrayList = new ArrayList(CollectionsKt.w(d10, 10));
        for (Certificate certificate : d10) {
            arrayList.add(b(certificate));
        }
        String obj = arrayList.toString();
        StringBuilder sb2 = new StringBuilder();
        sb2.append("Handshake{tlsVersion=");
        sb2.append(this.f41126a);
        sb2.append(" cipherSuite=");
        sb2.append(this.f41127b);
        sb2.append(" peerCertificates=");
        sb2.append(obj);
        sb2.append(" localCertificates=");
        List<Certificate> list = this.f41128c;
        ArrayList arrayList2 = new ArrayList(CollectionsKt.w(list, 10));
        for (Certificate certificate2 : list) {
            arrayList2.add(b(certificate2));
        }
        sb2.append(arrayList2);
        sb2.append('}');
        return sb2.toString();
    }
}
