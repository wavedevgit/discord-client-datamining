package og;

import xi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a6 implements xi.d {

    /* renamed from: a  reason: collision with root package name */
    static final a6 f42568a = new a6();

    /* renamed from: b  reason: collision with root package name */
    private static final xi.c f42569b;

    /* renamed from: c  reason: collision with root package name */
    private static final xi.c f42570c;

    /* renamed from: d  reason: collision with root package name */
    private static final xi.c f42571d;

    /* renamed from: e  reason: collision with root package name */
    private static final xi.c f42572e;

    static {
        c.b a10 = xi.c.a("isChargingRequired");
        s1 s1Var = new s1();
        s1Var.a(1);
        f42569b = a10.b(s1Var.b()).a();
        c.b a11 = xi.c.a("isWifiRequired");
        s1 s1Var2 = new s1();
        s1Var2.a(2);
        f42570c = a11.b(s1Var2.b()).a();
        c.b a12 = xi.c.a("isDeviceIdleRequired");
        s1 s1Var3 = new s1();
        s1Var3.a(3);
        f42571d = a12.b(s1Var3.b()).a();
        c.b a13 = xi.c.a("canDownloadInBackground");
        s1 s1Var4 = new s1();
        s1Var4.a(4);
        f42572e = a13.b(s1Var4.b()).a();
    }

    private a6() {
    }

    @Override // xi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        android.support.v4.media.session.b.a(obj);
        xi.e eVar = (xi.e) obj2;
        throw null;
    }
}
