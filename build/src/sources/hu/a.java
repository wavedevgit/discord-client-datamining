package hu;

import android.net.ssl.SSLSockets;
import android.os.Build;
import java.io.IOException;
import java.util.List;
import javax.net.ssl.SSLParameters;
import javax.net.ssl.SSLSocket;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements k {

    /* renamed from: a  reason: collision with root package name */
    public static final C0369a f28155a = new C0369a(null);

    /* renamed from: hu.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0369a {
        public /* synthetic */ C0369a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final k a() {
            if (b()) {
                return new a();
            }
            return null;
        }

        public final boolean b() {
            if (gu.h.f26650a.h() && Build.VERSION.SDK_INT >= 29) {
                return true;
            }
            return false;
        }

        private C0369a() {
        }
    }

    @Override // hu.k
    public boolean a() {
        return f28155a.b();
    }

    @Override // hu.k
    public boolean b(SSLSocket sslSocket) {
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        return SSLSockets.isSupportedSocket(sslSocket);
    }

    @Override // hu.k
    public String c(SSLSocket sslSocket) {
        boolean areEqual;
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
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
    }

    @Override // hu.k
    public void d(SSLSocket sslSocket, String str, List protocols) {
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        Intrinsics.checkNotNullParameter(protocols, "protocols");
        try {
            SSLSockets.setUseSessionTickets(sslSocket, true);
            SSLParameters sSLParameters = sslSocket.getSSLParameters();
            sSLParameters.setApplicationProtocols((String[]) gu.h.f26650a.b(protocols).toArray(new String[0]));
            sslSocket.setSSLParameters(sSLParameters);
        } catch (IllegalArgumentException e10) {
            throw new IOException("Android internal error", e10);
        }
    }
}
