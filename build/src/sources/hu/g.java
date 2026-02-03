package hu;

import hu.j;
import java.util.List;
import javax.net.ssl.SSLSocket;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.bouncycastle.jsse.BCSSLParameters;
import org.bouncycastle.jsse.BCSSLSocket;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g implements k {

    /* renamed from: a  reason: collision with root package name */
    public static final b f28171a = new b(null);

    /* renamed from: b  reason: collision with root package name */
    private static final j.a f28172b = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements j.a {
        a() {
        }

        @Override // hu.j.a
        public boolean b(SSLSocket sslSocket) {
            Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
            gu.c.f26629e.b();
            return false;
        }

        @Override // hu.j.a
        public k c(SSLSocket sslSocket) {
            Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
            return new g();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final j.a a() {
            return g.f28172b;
        }

        private b() {
        }
    }

    @Override // hu.k
    public boolean a() {
        return gu.c.f26629e.b();
    }

    @Override // hu.k
    public boolean b(SSLSocket sslSocket) {
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        return false;
    }

    @Override // hu.k
    public String c(SSLSocket sslSocket) {
        boolean areEqual;
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        String applicationProtocol = ((BCSSLSocket) sslSocket).getApplicationProtocol();
        if (applicationProtocol == null) {
            areEqual = true;
        } else {
            areEqual = Intrinsics.areEqual(applicationProtocol, "");
        }
        if (areEqual) {
            return null;
        }
        return applicationProtocol;
    }

    @Override // hu.k
    public void d(SSLSocket sslSocket, String str, List protocols) {
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        Intrinsics.checkNotNullParameter(protocols, "protocols");
        if (b(sslSocket)) {
            BCSSLSocket bCSSLSocket = (BCSSLSocket) sslSocket;
            BCSSLParameters parameters = bCSSLSocket.getParameters();
            parameters.setApplicationProtocols((String[]) gu.h.f26650a.b(protocols).toArray(new String[0]));
            bCSSLSocket.setParameters(parameters);
        }
    }
}
