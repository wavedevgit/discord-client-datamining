package zt;

import java.security.cert.Certificate;
import java.security.cert.X509Certificate;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import javax.net.ssl.SSLPeerUnverifiedException;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import okio.ByteString;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c {

    /* renamed from: c  reason: collision with root package name */
    public static final b f56275c = new b(null);

    /* renamed from: d  reason: collision with root package name */
    public static final c f56276d = new a().a();

    /* renamed from: a  reason: collision with root package name */
    private final Set f56277a;

    /* renamed from: b  reason: collision with root package name */
    private final mu.c f56278b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final List f56279a = new ArrayList();

        public final c a() {
            return new c(CollectionsKt.l1(this.f56279a), null, 2, null);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final String a(Certificate certificate) {
            Intrinsics.checkNotNullParameter(certificate, "certificate");
            if (certificate instanceof X509Certificate) {
                return "sha256/" + b((X509Certificate) certificate).d();
            }
            throw new IllegalArgumentException("Certificate pinning requires X509 certificates");
        }

        public final ByteString b(X509Certificate x509Certificate) {
            Intrinsics.checkNotNullParameter(x509Certificate, "<this>");
            ByteString.a aVar = ByteString.f44060o;
            byte[] encoded = x509Certificate.getPublicKey().getEncoded();
            Intrinsics.checkNotNullExpressionValue(encoded, "publicKey.encoded");
            return ByteString.a.j(aVar, encoded, 0, 0, 3, null).F();
        }

        private b() {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: zt.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0798c extends Lambda implements Function0 {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ List f56281e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ String f56282i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        C0798c(List list, String str) {
            super(0);
            this.f56281e = list;
            this.f56282i = str;
        }

        @Override // kotlin.jvm.functions.Function0
        public final List invoke() {
            List list;
            mu.c d10 = c.this.d();
            if (d10 == null || (list = d10.a(this.f56281e, this.f56282i)) == null) {
                list = this.f56281e;
            }
            List<Certificate> list2 = list;
            ArrayList arrayList = new ArrayList(CollectionsKt.w(list2, 10));
            for (Certificate certificate : list2) {
                Intrinsics.checkNotNull(certificate, "null cannot be cast to non-null type java.security.cert.X509Certificate");
                arrayList.add((X509Certificate) certificate);
            }
            return arrayList;
        }
    }

    public c(Set pins, mu.c cVar) {
        Intrinsics.checkNotNullParameter(pins, "pins");
        this.f56277a = pins;
        this.f56278b = cVar;
    }

    public final void a(String hostname, List peerCertificates) {
        Intrinsics.checkNotNullParameter(hostname, "hostname");
        Intrinsics.checkNotNullParameter(peerCertificates, "peerCertificates");
        b(hostname, new C0798c(peerCertificates, hostname));
    }

    public final void b(String hostname, Function0 cleanedPeerCertificatesFn) {
        Intrinsics.checkNotNullParameter(hostname, "hostname");
        Intrinsics.checkNotNullParameter(cleanedPeerCertificatesFn, "cleanedPeerCertificatesFn");
        List<Object> c10 = c(hostname);
        if (c10.isEmpty()) {
            return;
        }
        List<X509Certificate> list = (List) cleanedPeerCertificatesFn.invoke();
        for (X509Certificate x509Certificate : list) {
            Iterator it = c10.iterator();
            if (it.hasNext()) {
                android.support.v4.media.session.b.a(it.next());
                throw null;
            }
        }
        StringBuilder sb2 = new StringBuilder();
        sb2.append("Certificate pinning failure!");
        sb2.append("\n  Peer certificate chain:");
        for (X509Certificate x509Certificate2 : list) {
            sb2.append("\n    ");
            sb2.append(f56275c.a(x509Certificate2));
            sb2.append(": ");
            sb2.append(x509Certificate2.getSubjectDN().getName());
        }
        sb2.append("\n  Pinned certificates for ");
        sb2.append(hostname);
        sb2.append(":");
        for (Object obj : c10) {
            android.support.v4.media.session.b.a(obj);
            sb2.append("\n    ");
            sb2.append((Object) null);
        }
        String sb3 = sb2.toString();
        Intrinsics.checkNotNullExpressionValue(sb3, "StringBuilder().apply(builderAction).toString()");
        throw new SSLPeerUnverifiedException(sb3);
    }

    public final List c(String hostname) {
        Intrinsics.checkNotNullParameter(hostname, "hostname");
        List l10 = CollectionsKt.l();
        Iterator it = this.f56277a.iterator();
        if (!it.hasNext()) {
            return l10;
        }
        android.support.v4.media.session.b.a(it.next());
        throw null;
    }

    public final mu.c d() {
        return this.f56278b;
    }

    public final c e(mu.c certificateChainCleaner) {
        Intrinsics.checkNotNullParameter(certificateChainCleaner, "certificateChainCleaner");
        if (Intrinsics.areEqual(this.f56278b, certificateChainCleaner)) {
            return this;
        }
        return new c(this.f56277a, certificateChainCleaner);
    }

    public boolean equals(Object obj) {
        if (obj instanceof c) {
            c cVar = (c) obj;
            if (Intrinsics.areEqual(cVar.f56277a, this.f56277a) && Intrinsics.areEqual(cVar.f56278b, this.f56278b)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int hashCode = (1517 + this.f56277a.hashCode()) * 41;
        mu.c cVar = this.f56278b;
        if (cVar != null) {
            i10 = cVar.hashCode();
        } else {
            i10 = 0;
        }
        return hashCode + i10;
    }

    public /* synthetic */ c(Set set, mu.c cVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(set, (i10 & 2) != 0 ? null : cVar);
    }
}
