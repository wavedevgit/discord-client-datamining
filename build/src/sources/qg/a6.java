package qg;

import zi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a6 implements zi.d {

    /* renamed from: a  reason: collision with root package name */
    static final a6 f45472a = new a6();

    /* renamed from: b  reason: collision with root package name */
    private static final zi.c f45473b;

    /* renamed from: c  reason: collision with root package name */
    private static final zi.c f45474c;

    /* renamed from: d  reason: collision with root package name */
    private static final zi.c f45475d;

    /* renamed from: e  reason: collision with root package name */
    private static final zi.c f45476e;

    static {
        c.b a10 = zi.c.a("isChargingRequired");
        s1 s1Var = new s1();
        s1Var.a(1);
        f45473b = a10.b(s1Var.b()).a();
        c.b a11 = zi.c.a("isWifiRequired");
        s1 s1Var2 = new s1();
        s1Var2.a(2);
        f45474c = a11.b(s1Var2.b()).a();
        c.b a12 = zi.c.a("isDeviceIdleRequired");
        s1 s1Var3 = new s1();
        s1Var3.a(3);
        f45475d = a12.b(s1Var3.b()).a();
        c.b a13 = zi.c.a("canDownloadInBackground");
        s1 s1Var4 = new s1();
        s1Var4.a(4);
        f45476e = a13.b(s1Var4.b()).a();
    }

    private a6() {
    }

    @Override // zi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        android.support.v4.media.session.b.a(obj);
        zi.e eVar = (zi.e) obj2;
        throw null;
    }
}
