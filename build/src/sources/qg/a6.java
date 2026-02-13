package qg;

import bj.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a6 implements bj.d {

    /* renamed from: a  reason: collision with root package name */
    static final a6 f44709a = new a6();

    /* renamed from: b  reason: collision with root package name */
    private static final bj.c f44710b;

    /* renamed from: c  reason: collision with root package name */
    private static final bj.c f44711c;

    /* renamed from: d  reason: collision with root package name */
    private static final bj.c f44712d;

    /* renamed from: e  reason: collision with root package name */
    private static final bj.c f44713e;

    static {
        c.b a10 = bj.c.a("isChargingRequired");
        s1 s1Var = new s1();
        s1Var.a(1);
        f44710b = a10.b(s1Var.b()).a();
        c.b a11 = bj.c.a("isWifiRequired");
        s1 s1Var2 = new s1();
        s1Var2.a(2);
        f44711c = a11.b(s1Var2.b()).a();
        c.b a12 = bj.c.a("isDeviceIdleRequired");
        s1 s1Var3 = new s1();
        s1Var3.a(3);
        f44712d = a12.b(s1Var3.b()).a();
        c.b a13 = bj.c.a("canDownloadInBackground");
        s1 s1Var4 = new s1();
        s1Var4.a(4);
        f44713e = a13.b(s1Var4.b()).a();
    }

    private a6() {
    }

    @Override // bj.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        android.support.v4.media.session.b.a(obj);
        bj.e eVar = (bj.e) obj2;
        throw null;
    }
}
