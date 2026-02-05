package ku;

import java.util.List;
import javax.net.ssl.SSLSocket;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import ku.j;
import org.conscrypt.Conscrypt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i implements k {

    /* renamed from: a  reason: collision with root package name */
    public static final b f36164a = new b(null);

    /* renamed from: b  reason: collision with root package name */
    private static final j.a f36165b = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements j.a {
        a() {
        }

        @Override // ku.j.a
        public boolean b(SSLSocket sslSocket) {
            Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
            if (ju.d.f31423e.c() && Conscrypt.isConscrypt(sslSocket)) {
                return true;
            }
            return false;
        }

        @Override // ku.j.a
        public k c(SSLSocket sslSocket) {
            Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
            return new i();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final j.a a() {
            return i.f36165b;
        }

        private b() {
        }
    }

    @Override // ku.k
    public boolean a() {
        return ju.d.f31423e.c();
    }

    @Override // ku.k
    public boolean b(SSLSocket sslSocket) {
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        return Conscrypt.isConscrypt(sslSocket);
    }

    @Override // ku.k
    public String c(SSLSocket sslSocket) {
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        if (b(sslSocket)) {
            return Conscrypt.getApplicationProtocol(sslSocket);
        }
        return null;
    }

    @Override // ku.k
    public void d(SSLSocket sslSocket, String str, List protocols) {
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        Intrinsics.checkNotNullParameter(protocols, "protocols");
        if (b(sslSocket)) {
            Conscrypt.setUseSessionTickets(sslSocket, true);
            Conscrypt.setApplicationProtocols(sslSocket, (String[]) ju.h.f31441a.b(protocols).toArray(new String[0]));
        }
    }
}
