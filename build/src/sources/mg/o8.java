package mg;

import xi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class o8 implements xi.d {

    /* renamed from: a  reason: collision with root package name */
    static final o8 f37987a = new o8();

    static {
        c.b a10 = xi.c.a("isChargingRequired");
        l2 l2Var = new l2();
        l2Var.a(1);
        a10.b(l2Var.b()).a();
        c.b a11 = xi.c.a("isWifiRequired");
        l2 l2Var2 = new l2();
        l2Var2.a(2);
        a11.b(l2Var2.b()).a();
        c.b a12 = xi.c.a("isDeviceIdleRequired");
        l2 l2Var3 = new l2();
        l2Var3.a(3);
        a12.b(l2Var3.b()).a();
        c.b a13 = xi.c.a("canDownloadInBackground");
        l2 l2Var4 = new l2();
        l2Var4.a(4);
        a13.b(l2Var4.b()).a();
    }

    private o8() {
    }

    @Override // xi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        android.support.v4.media.session.b.a(obj);
        xi.e eVar = (xi.e) obj2;
        throw null;
    }
}
