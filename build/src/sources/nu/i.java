package nu;

import java.util.List;
import javax.net.ssl.SSLSocket;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import nu.j;
import org.conscrypt.Conscrypt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i implements k {

    /* renamed from: a  reason: collision with root package name */
    public static final b f40053a = new b(null);

    /* renamed from: b  reason: collision with root package name */
    private static final j.a f40054b = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements j.a {
        a() {
        }

        @Override // nu.j.a
        public boolean b(SSLSocket sslSocket) {
            Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
            if (mu.d.f37637e.c() && Conscrypt.isConscrypt(sslSocket)) {
                return true;
            }
            return false;
        }

        @Override // nu.j.a
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
            return i.f40054b;
        }

        private b() {
        }
    }

    @Override // nu.k
    public boolean a() {
        return mu.d.f37637e.c();
    }

    @Override // nu.k
    public boolean b(SSLSocket sslSocket) {
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        return Conscrypt.isConscrypt(sslSocket);
    }

    @Override // nu.k
    public String c(SSLSocket sslSocket) {
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        if (b(sslSocket)) {
            return Conscrypt.getApplicationProtocol(sslSocket);
        }
        return null;
    }

    @Override // nu.k
    public void d(SSLSocket sslSocket, String str, List protocols) {
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        Intrinsics.checkNotNullParameter(protocols, "protocols");
        if (b(sslSocket)) {
            Conscrypt.setUseSessionTickets(sslSocket, true);
            Conscrypt.setApplicationProtocols(sslSocket, (String[]) mu.h.f37655a.b(protocols).toArray(new String[0]));
        }
    }
}
