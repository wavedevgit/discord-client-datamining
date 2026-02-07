package lu;

import java.util.List;
import javax.net.ssl.SSLParameters;
import javax.net.ssl.SSLSocket;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class f extends h {

    /* renamed from: d  reason: collision with root package name */
    public static final a f36820d = new a(null);

    /* renamed from: e  reason: collision with root package name */
    private static final boolean f36821e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final f a() {
            if (b()) {
                return new f();
            }
            return null;
        }

        public final boolean b() {
            return f.f36821e;
        }

        private a() {
        }
    }

    /* JADX WARN: Code restructure failed: missing block: B:9:0x0020, code lost:
        if (r0.intValue() >= 9) goto L8;
     */
    static {
        /*
            lu.f$a r0 = new lu.f$a
            r1 = 0
            r0.<init>(r1)
            lu.f.f36820d = r0
            java.lang.String r0 = "java.specification.version"
            java.lang.String r0 = java.lang.System.getProperty(r0)
            if (r0 == 0) goto L15
            java.lang.Integer r0 = kotlin.text.StringsKt.toIntOrNull(r0)
            goto L16
        L15:
            r0 = r1
        L16:
            r2 = 0
            r3 = 1
            if (r0 == 0) goto L24
            int r0 = r0.intValue()
            r1 = 9
            if (r0 < r1) goto L2c
        L22:
            r2 = r3
            goto L2c
        L24:
            java.lang.Class<javax.net.ssl.SSLSocket> r0 = javax.net.ssl.SSLSocket.class
            java.lang.String r4 = "getApplicationProtocol"
            r0.getMethod(r4, r1)     // Catch: java.lang.NoSuchMethodException -> L2c
            goto L22
        L2c:
            lu.f.f36821e = r2
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: lu.f.<clinit>():void");
    }

    @Override // lu.h
    public void e(SSLSocket sslSocket, String str, List protocols) {
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        Intrinsics.checkNotNullParameter(protocols, "protocols");
        SSLParameters sSLParameters = sslSocket.getSSLParameters();
        sSLParameters.setApplicationProtocols((String[]) h.f36825a.b(protocols).toArray(new String[0]));
        sslSocket.setSSLParameters(sSLParameters);
    }

    @Override // lu.h
    public String h(SSLSocket sslSocket) {
        boolean areEqual;
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        try {
            String applicationProtocol = sslSocket.getApplicationProtocol();
            if (applicationProtocol == null) {
                areEqual = true;
            } else {
                areEqual = Intrinsics.areEqual(applicationProtocol, "");
            }
            if (areEqual) {
                return null;
            }
            return applicationProtocol;
        } catch (UnsupportedOperationException unused) {
            return null;
        }
    }
}
