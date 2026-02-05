package ju;

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
import ku.i;
import ku.j;
import ku.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a extends h {

    /* renamed from: e  reason: collision with root package name */
    public static final C0432a f31411e = new C0432a(null);

    /* renamed from: f  reason: collision with root package name */
    private static final boolean f31412f;

    /* renamed from: d  reason: collision with root package name */
    private final List f31413d;

    /* renamed from: ju.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0432a {
        public /* synthetic */ C0432a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final h a() {
            if (b()) {
                return new a();
            }
            return null;
        }

        public final boolean b() {
            return a.f31412f;
        }

        private C0432a() {
        }
    }

    static {
        boolean z10;
        if (h.f31441a.h() && Build.VERSION.SDK_INT >= 29) {
            z10 = true;
        } else {
            z10 = false;
        }
        f31412f = z10;
    }

    public a() {
        k[] kVarArr = {ku.a.f36142a.a(), new j(ku.f.f36150f.d()), new j(i.f36164a.a()), new j(ku.g.f36158a.a())};
        ArrayList arrayList = new ArrayList();
        for (Object obj : CollectionsKt.q(kVarArr)) {
            if (((k) obj).a()) {
                arrayList.add(obj);
            }
        }
        this.f31413d = arrayList;
    }

    @Override // ju.h
    public mu.c c(X509TrustManager trustManager) {
        Intrinsics.checkNotNullParameter(trustManager, "trustManager");
        ku.b a10 = ku.b.f36143d.a(trustManager);
        if (a10 != null) {
            return a10;
        }
        return super.c(trustManager);
    }

    @Override // ju.h
    public void e(SSLSocket sslSocket, String str, List protocols) {
        Object obj;
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        Intrinsics.checkNotNullParameter(protocols, "protocols");
        Iterator it = this.f31413d.iterator();
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

    @Override // ju.h
    public String h(SSLSocket sslSocket) {
        Object obj;
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        Iterator it = this.f31413d.iterator();
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

    @Override // ju.h
    public boolean j(String hostname) {
        Intrinsics.checkNotNullParameter(hostname, "hostname");
        return NetworkSecurityPolicy.getInstance().isCleartextTrafficPermitted(hostname);
    }
}
