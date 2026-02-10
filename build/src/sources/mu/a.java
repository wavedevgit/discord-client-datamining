package mu;

import android.os.Build;
import android.security.NetworkSecurityPolicy;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import javax.net.ssl.SSLSocket;
import javax.net.ssl.X509TrustManager;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import nu.i;
import nu.j;
import nu.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a extends h {

    /* renamed from: e  reason: collision with root package name */
    public static final C0541a f37625e = new C0541a(null);

    /* renamed from: f  reason: collision with root package name */
    private static final boolean f37626f;

    /* renamed from: d  reason: collision with root package name */
    private final List f37627d;

    /* renamed from: mu.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0541a {
        public /* synthetic */ C0541a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final h a() {
            if (b()) {
                return new a();
            }
            return null;
        }

        public final boolean b() {
            return a.f37626f;
        }

        private C0541a() {
        }
    }

    static {
        boolean z10;
        if (h.f37655a.h() && Build.VERSION.SDK_INT >= 29) {
            z10 = true;
        } else {
            z10 = false;
        }
        f37626f = z10;
    }

    public a() {
        k[] kVarArr = {nu.a.f40031a.a(), new j(nu.f.f40039f.d()), new j(i.f40053a.a()), new j(nu.g.f40047a.a())};
        ArrayList arrayList = new ArrayList();
        for (Object obj : CollectionsKt.q(kVarArr)) {
            if (((k) obj).a()) {
                arrayList.add(obj);
            }
        }
        this.f37627d = arrayList;
    }

    @Override // mu.h
    public pu.c c(X509TrustManager trustManager) {
        Intrinsics.checkNotNullParameter(trustManager, "trustManager");
        nu.b a10 = nu.b.f40032d.a(trustManager);
        if (a10 != null) {
            return a10;
        }
        return super.c(trustManager);
    }

    @Override // mu.h
    public void e(SSLSocket sslSocket, String str, List protocols) {
        Object obj;
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        Intrinsics.checkNotNullParameter(protocols, "protocols");
        Iterator it = this.f37627d.iterator();
        while (true) {
            if (it.hasNext()) {
                obj = it.next();
                if (((k) obj).b(sslSocket)) {
                    break;
                }
            } else {
                obj = null;
                break;
            }
        }
        k kVar = (k) obj;
        if (kVar != null) {
            kVar.d(sslSocket, str, protocols);
        }
    }

    @Override // mu.h
    public String h(SSLSocket sslSocket) {
        Object obj;
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        Iterator it = this.f37627d.iterator();
        while (true) {
            if (it.hasNext()) {
                obj = it.next();
                if (((k) obj).b(sslSocket)) {
                    break;
                }
            } else {
                obj = null;
                break;
            }
        }
        k kVar = (k) obj;
        if (kVar == null) {
            return null;
        }
        return kVar.c(sslSocket);
    }

    @Override // mu.h
    public boolean j(String hostname) {
        Intrinsics.checkNotNullParameter(hostname, "hostname");
        return NetworkSecurityPolicy.getInstance().isCleartextTrafficPermitted(hostname);
    }
}
