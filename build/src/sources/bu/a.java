package bu;

import java.net.Authenticator;
import java.net.InetAddress;
import java.net.InetSocketAddress;
import java.net.PasswordAuthentication;
import java.net.Proxy;
import java.net.SocketAddress;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import okhttp3.HttpUrl;
import okhttp3.Request;
import okhttp3.Response;
import zt.d;
import zt.g;
import zt.h;
import zt.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements zt.a {

    /* renamed from: d  reason: collision with root package name */
    private final h f7278d;

    /* renamed from: bu.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class C0128a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f7279a;

        static {
            int[] iArr = new int[Proxy.Type.values().length];
            try {
                iArr[Proxy.Type.DIRECT.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            f7279a = iArr;
        }
    }

    public a(h defaultDns) {
        Intrinsics.checkNotNullParameter(defaultDns, "defaultDns");
        this.f7278d = defaultDns;
    }

    private final InetAddress b(Proxy proxy, HttpUrl httpUrl, h hVar) {
        int i10;
        Proxy.Type type = proxy.type();
        if (type == null) {
            i10 = -1;
        } else {
            i10 = C0128a.f7279a[type.ordinal()];
        }
        if (i10 == 1) {
            return (InetAddress) CollectionsKt.o0(hVar.lookup(httpUrl.i()));
        }
        SocketAddress address = proxy.address();
        Intrinsics.checkNotNull(address, "null cannot be cast to non-null type java.net.InetSocketAddress");
        InetAddress address2 = ((InetSocketAddress) address).getAddress();
        Intrinsics.checkNotNullExpressionValue(address2, "address() as InetSocketAddress).address");
        return address2;
    }

    @Override // zt.a
    public Request a(k kVar, Response response) {
        boolean z10;
        Proxy proxy;
        h hVar;
        PasswordAuthentication requestPasswordAuthentication;
        String str;
        okhttp3.a a10;
        Intrinsics.checkNotNullParameter(response, "response");
        List<d> F = response.F();
        Request Z0 = response.Z0();
        HttpUrl n10 = Z0.n();
        if (response.L() == 407) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (kVar == null || (proxy = kVar.b()) == null) {
            proxy = Proxy.NO_PROXY;
        }
        for (d dVar : F) {
            if (StringsKt.A("Basic", dVar.c(), true)) {
                if (kVar == null || (a10 = kVar.a()) == null || (hVar = a10.c()) == null) {
                    hVar = this.f7278d;
                }
                if (z10) {
                    SocketAddress address = proxy.address();
                    Intrinsics.checkNotNull(address, "null cannot be cast to non-null type java.net.InetSocketAddress");
                    InetSocketAddress inetSocketAddress = (InetSocketAddress) address;
                    String hostName = inetSocketAddress.getHostName();
                    Intrinsics.checkNotNullExpressionValue(proxy, "proxy");
                    requestPasswordAuthentication = Authenticator.requestPasswordAuthentication(hostName, b(proxy, n10, hVar), inetSocketAddress.getPort(), n10.s(), dVar.b(), dVar.c(), n10.u(), Authenticator.RequestorType.PROXY);
                } else {
                    String i10 = n10.i();
                    Intrinsics.checkNotNullExpressionValue(proxy, "proxy");
                    requestPasswordAuthentication = Authenticator.requestPasswordAuthentication(i10, b(proxy, n10, hVar), n10.o(), n10.s(), dVar.b(), dVar.c(), n10.u(), Authenticator.RequestorType.SERVER);
                }
                if (requestPasswordAuthentication != null) {
                    if (z10) {
                        str = "Proxy-Authorization";
                    } else {
                        str = "Authorization";
                    }
                    String userName = requestPasswordAuthentication.getUserName();
                    Intrinsics.checkNotNullExpressionValue(userName, "auth.userName");
                    char[] password = requestPasswordAuthentication.getPassword();
                    Intrinsics.checkNotNullExpressionValue(password, "auth.password");
                    return Z0.k().e(str, g.a(userName, new String(password), dVar.a())).b();
                }
            }
        }
        return null;
    }

    public /* synthetic */ a(h hVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? h.f56288b : hVar);
    }
}
