package gu;

import iu.k0;
import java.security.cert.Certificate;
import java.security.cert.CertificateParsingException;
import java.security.cert.X509Certificate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Locale;
import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.SSLException;
import javax.net.ssl.SSLSession;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d implements HostnameVerifier {

    /* renamed from: a  reason: collision with root package name */
    public static final d f27207a = new d();

    private d() {
    }

    private final String b(String str) {
        if (d(str)) {
            Locale US = Locale.US;
            Intrinsics.checkNotNullExpressionValue(US, "US");
            String lowerCase = str.toLowerCase(US);
            Intrinsics.checkNotNullExpressionValue(lowerCase, "this as java.lang.String).toLowerCase(locale)");
            return lowerCase;
        }
        return str;
    }

    private final List c(X509Certificate x509Certificate, int i10) {
        Object obj;
        try {
            Collection<List<?>> subjectAlternativeNames = x509Certificate.getSubjectAlternativeNames();
            if (subjectAlternativeNames == null) {
                return CollectionsKt.l();
            }
            ArrayList arrayList = new ArrayList();
            for (List<?> list : subjectAlternativeNames) {
                if (list != null && list.size() >= 2 && Intrinsics.areEqual(list.get(0), Integer.valueOf(i10)) && (obj = list.get(1)) != null) {
                    arrayList.add((String) obj);
                }
            }
            return arrayList;
        } catch (CertificateParsingException unused) {
            return CollectionsKt.l();
        }
    }

    private final boolean d(String str) {
        if (str.length() != ((int) k0.b(str, 0, 0, 3, null))) {
            return false;
        }
        return true;
    }

    private final boolean f(String str, String str2) {
        if (str != null && str.length() != 0 && !StringsKt.P(str, ".", false, 2, null) && !StringsKt.z(str, "..", false, 2, null) && str2 != null && str2.length() != 0 && !StringsKt.P(str2, ".", false, 2, null) && !StringsKt.z(str2, "..", false, 2, null)) {
            if (!StringsKt.z(str, ".", false, 2, null)) {
                str = str + '.';
            }
            String str3 = str;
            if (!StringsKt.z(str2, ".", false, 2, null)) {
                str2 = str2 + '.';
            }
            String b10 = b(str2);
            if (!StringsKt.V(b10, "*", false, 2, null)) {
                return Intrinsics.areEqual(str3, b10);
            }
            if (!StringsKt.P(b10, "*.", false, 2, null) || StringsKt.h0(b10, '*', 1, false, 4, null) != -1 || str3.length() < b10.length() || Intrinsics.areEqual("*.", b10)) {
                return false;
            }
            String substring = b10.substring(1);
            Intrinsics.checkNotNullExpressionValue(substring, "this as java.lang.String).substring(startIndex)");
            if (!StringsKt.z(str3, substring, false, 2, null)) {
                return false;
            }
            int length = str3.length() - substring.length();
            if (length > 0 && StringsKt.n0(str3, '.', length - 1, false, 4, null) != -1) {
                return false;
            }
            return true;
        }
        return false;
    }

    private final boolean g(String str, X509Certificate x509Certificate) {
        String b10 = b(str);
        List<String> c10 = c(x509Certificate, 2);
        if ((c10 instanceof Collection) && c10.isEmpty()) {
            return false;
        }
        for (String str2 : c10) {
            if (f27207a.f(b10, str2)) {
                return true;
            }
        }
        return false;
    }

    private final boolean h(String str, X509Certificate x509Certificate) {
        String e10 = ut.a.e(str);
        List<String> c10 = c(x509Certificate, 7);
        if ((c10 instanceof Collection) && c10.isEmpty()) {
            return false;
        }
        for (String str2 : c10) {
            if (Intrinsics.areEqual(e10, ut.a.e(str2))) {
                return true;
            }
        }
        return false;
    }

    public final List a(X509Certificate certificate) {
        Intrinsics.checkNotNullParameter(certificate, "certificate");
        return CollectionsKt.L0(c(certificate, 7), c(certificate, 2));
    }

    public final boolean e(String host, X509Certificate certificate) {
        Intrinsics.checkNotNullParameter(host, "host");
        Intrinsics.checkNotNullParameter(certificate, "certificate");
        if (ut.e.i(host)) {
            return h(host, certificate);
        }
        return g(host, certificate);
    }

    @Override // javax.net.ssl.HostnameVerifier
    public boolean verify(String host, SSLSession session) {
        Intrinsics.checkNotNullParameter(host, "host");
        Intrinsics.checkNotNullParameter(session, "session");
        if (!d(host)) {
            return false;
        }
        try {
            Certificate certificate = session.getPeerCertificates()[0];
            Intrinsics.checkNotNull(certificate, "null cannot be cast to non-null type java.security.cert.X509Certificate");
            return e(host, (X509Certificate) certificate);
        } catch (SSLException unused) {
            return false;
        }
    }
}
