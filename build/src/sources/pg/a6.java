package pg;

import yi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a6 implements yi.d {

    /* renamed from: a  reason: collision with root package name */
    static final a6 f43958a = new a6();

    /* renamed from: b  reason: collision with root package name */
    private static final yi.c f43959b;

    /* renamed from: c  reason: collision with root package name */
    private static final yi.c f43960c;

    /* renamed from: d  reason: collision with root package name */
    private static final yi.c f43961d;

    /* renamed from: e  reason: collision with root package name */
    private static final yi.c f43962e;

    static {
        c.b a10 = yi.c.a("isChargingRequired");
        s1 s1Var = new s1();
        s1Var.a(1);
        f43959b = a10.b(s1Var.b()).a();
        c.b a11 = yi.c.a("isWifiRequired");
        s1 s1Var2 = new s1();
        s1Var2.a(2);
        f43960c = a11.b(s1Var2.b()).a();
        c.b a12 = yi.c.a("isDeviceIdleRequired");
        s1 s1Var3 = new s1();
        s1Var3.a(3);
        f43961d = a12.b(s1Var3.b()).a();
        c.b a13 = yi.c.a("canDownloadInBackground");
        s1 s1Var4 = new s1();
        s1Var4.a(4);
        f43962e = a13.b(s1Var4.b()).a();
    }

    private a6() {
    }

    @Override // yi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        android.support.v4.media.session.b.a(obj);
        yi.e eVar = (yi.e) obj2;
        throw null;
    }
}
