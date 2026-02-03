package ng;

import ui.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class x3 implements ui.d {

    /* renamed from: a  reason: collision with root package name */
    static final x3 f41766a = new x3();

    /* renamed from: b  reason: collision with root package name */
    private static final ui.c f41767b;

    /* renamed from: c  reason: collision with root package name */
    private static final ui.c f41768c;

    /* renamed from: d  reason: collision with root package name */
    private static final ui.c f41769d;

    /* renamed from: e  reason: collision with root package name */
    private static final ui.c f41770e;

    static {
        c.b a10 = ui.c.a("isChargingRequired");
        f fVar = new f();
        fVar.a(1);
        f41767b = a10.b(fVar.b()).a();
        c.b a11 = ui.c.a("isWifiRequired");
        f fVar2 = new f();
        fVar2.a(2);
        f41768c = a11.b(fVar2.b()).a();
        c.b a12 = ui.c.a("isDeviceIdleRequired");
        f fVar3 = new f();
        fVar3.a(3);
        f41769d = a12.b(fVar3.b()).a();
        c.b a13 = ui.c.a("canDownloadInBackground");
        f fVar4 = new f();
        fVar4.a(4);
        f41770e = a13.b(fVar4.b()).a();
    }

    private x3() {
    }

    @Override // ui.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        android.support.v4.media.session.b.a(obj);
        ui.e eVar = (ui.e) obj2;
        throw null;
    }
}
