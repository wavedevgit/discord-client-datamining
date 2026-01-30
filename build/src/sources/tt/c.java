package tt;

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
    public static final b f49929c = new b(null);

    /* renamed from: d  reason: collision with root package name */
    public static final c f49930d = new a().a();

    /* renamed from: a  reason: collision with root package name */
    private final Set f49931a;

    /* renamed from: b  reason: collision with root package name */
    private final gu.c f49932b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final List f49933a = new ArrayList();

        public final c a() {
            return new c(CollectionsKt.l1(this.f49933a), null, 2, null);
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
            ByteString.a aVar = ByteString.f44379o;
            byte[] encoded = x509Certificate.getPublicKey().getEncoded();
            Intrinsics.checkNotNullExpressionValue(encoded, "publicKey.encoded");
            return ByteString.a.j(aVar, encoded, 0, 0, 3, null).F();
        }

        private b() {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: tt.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0656c extends Lambda implements Function0 {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ List f49935e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ String f49936i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        C0656c(List list, String str) {
            super(0);
            this.f49935e = list;
            this.f49936i = str;
        }

        @Override // kotlin.jvm.functions.Function0
        public final List invoke() {
            List list;
            gu.c d10 = c.this.d();
            if (d10 == null || (list = d10.a(this.f49935e, this.f49936i)) == null) {
                list = this.f49935e;
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

    public c(Set pins, gu.c cVar) {
        Intrinsics.checkNotNullParameter(pins, "pins");
        this.f49931a = pins;
        this.f49932b = cVar;
    }

    public final void a(String hostname, List peerCertificates) {
        Intrinsics.checkNotNullParameter(hostname, "hostname");
        Intrinsics.checkNotNullParameter(peerCertificates, "peerCertificates");
        b(hostname, new C0656c(peerCertificates, hostname));
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
            sb2.append(f49929c.a(x509Certificate2));
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
        Iterator it = this.f49931a.iterator();
        if (!it.hasNext()) {
            return l10;
        }
        android.support.v4.media.session.b.a(it.next());
        throw null;
    }

    public final gu.c d() {
        return this.f49932b;
    }

    public final c e(gu.c certificateChainCleaner) {
        Intrinsics.checkNotNullParameter(certificateChainCleaner, "certificateChainCleaner");
        if (Intrinsics.areEqual(this.f49932b, certificateChainCleaner)) {
            return this;
        }
        return new c(this.f49931a, certificateChainCleaner);
    }

    public boolean equals(Object obj) {
        if (obj instanceof c) {
            c cVar = (c) obj;
            if (Intrinsics.areEqual(cVar.f49931a, this.f49931a) && Intrinsics.areEqual(cVar.f49932b, this.f49932b)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int hashCode = (1517 + this.f49931a.hashCode()) * 41;
        gu.c cVar = this.f49932b;
        if (cVar != null) {
            i10 = cVar.hashCode();
        } else {
            i10 = 0;
        }
        return hashCode + i10;
    }

    public /* synthetic */ c(Set set, gu.c cVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(set, (i10 & 2) != 0 ? null : cVar);
    }
}
