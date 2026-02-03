package og;

import ui.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a6 implements ui.d {

    /* renamed from: a  reason: collision with root package name */
    static final a6 f42862a = new a6();

    /* renamed from: b  reason: collision with root package name */
    private static final ui.c f42863b;

    /* renamed from: c  reason: collision with root package name */
    private static final ui.c f42864c;

    /* renamed from: d  reason: collision with root package name */
    private static final ui.c f42865d;

    /* renamed from: e  reason: collision with root package name */
    private static final ui.c f42866e;

    static {
        c.b a10 = ui.c.a("isChargingRequired");
        s1 s1Var = new s1();
        s1Var.a(1);
        f42863b = a10.b(s1Var.b()).a();
        c.b a11 = ui.c.a("isWifiRequired");
        s1 s1Var2 = new s1();
        s1Var2.a(2);
        f42864c = a11.b(s1Var2.b()).a();
        c.b a12 = ui.c.a("isDeviceIdleRequired");
        s1 s1Var3 = new s1();
        s1Var3.a(3);
        f42865d = a12.b(s1Var3.b()).a();
        c.b a13 = ui.c.a("canDownloadInBackground");
        s1 s1Var4 = new s1();
        s1Var4.a(4);
        f42866e = a13.b(s1Var4.b()).a();
    }

    private a6() {
    }

    @Override // ui.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        android.support.v4.media.session.b.a(obj);
        ui.e eVar = (ui.e) obj2;
        throw null;
    }
}
