package ku;

import java.util.List;
import javax.net.ssl.SSLSocket;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j implements k {

    /* renamed from: a  reason: collision with root package name */
    private final a f36166a;

    /* renamed from: b  reason: collision with root package name */
    private k f36167b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface a {
        boolean b(SSLSocket sSLSocket);

        k c(SSLSocket sSLSocket);
    }

    public j(a socketAdapterFactory) {
        Intrinsics.checkNotNullParameter(socketAdapterFactory, "socketAdapterFactory");
        this.f36166a = socketAdapterFactory;
    }

    private final synchronized k e(SSLSocket sSLSocket) {
        try {
            if (this.f36167b == null && this.f36166a.b(sSLSocket)) {
                this.f36167b = this.f36166a.c(sSLSocket);
            }
        } catch (Throwable th2) {
            throw th2;
        }
        return this.f36167b;
    }

    @Override // ku.k
    public boolean a() {
        return true;
    }

    @Override // ku.k
    public boolean b(SSLSocket sslSocket) {
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        return this.f36166a.b(sslSocket);
    }

    @Override // ku.k
    public String c(SSLSocket sslSocket) {
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        k e10 = e(sslSocket);
        if (e10 != null) {
            return e10.c(sslSocket);
        }
        return null;
    }

    @Override // ku.k
    public void d(SSLSocket sslSocket, String str, List protocols) {
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        Intrinsics.checkNotNullParameter(protocols, "protocols");
        k e10 = e(sslSocket);
        if (e10 != null) {
            e10.d(sslSocket, str, protocols);
        }
    }
}
