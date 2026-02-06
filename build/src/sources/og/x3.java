package og;

import yi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class x3 implements yi.d {

    /* renamed from: a  reason: collision with root package name */
    static final x3 f42678a = new x3();

    /* renamed from: b  reason: collision with root package name */
    private static final yi.c f42679b;

    /* renamed from: c  reason: collision with root package name */
    private static final yi.c f42680c;

    /* renamed from: d  reason: collision with root package name */
    private static final yi.c f42681d;

    /* renamed from: e  reason: collision with root package name */
    private static final yi.c f42682e;

    static {
        c.b a10 = yi.c.a("isChargingRequired");
        f fVar = new f();
        fVar.a(1);
        f42679b = a10.b(fVar.b()).a();
        c.b a11 = yi.c.a("isWifiRequired");
        f fVar2 = new f();
        fVar2.a(2);
        f42680c = a11.b(fVar2.b()).a();
        c.b a12 = yi.c.a("isDeviceIdleRequired");
        f fVar3 = new f();
        fVar3.a(3);
        f42681d = a12.b(fVar3.b()).a();
        c.b a13 = yi.c.a("canDownloadInBackground");
        f fVar4 = new f();
        fVar4.a(4);
        f42682e = a13.b(fVar4.b()).a();
    }

    private x3() {
    }

    @Override // yi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        android.support.v4.media.session.b.a(obj);
        yi.e eVar = (yi.e) obj2;
        throw null;
    }
}
