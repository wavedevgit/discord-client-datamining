package pg;

import bj.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class x3 implements bj.d {

    /* renamed from: a  reason: collision with root package name */
    static final x3 f43213a = new x3();

    /* renamed from: b  reason: collision with root package name */
    private static final bj.c f43214b;

    /* renamed from: c  reason: collision with root package name */
    private static final bj.c f43215c;

    /* renamed from: d  reason: collision with root package name */
    private static final bj.c f43216d;

    /* renamed from: e  reason: collision with root package name */
    private static final bj.c f43217e;

    static {
        c.b a10 = bj.c.a("isChargingRequired");
        f fVar = new f();
        fVar.a(1);
        f43214b = a10.b(fVar.b()).a();
        c.b a11 = bj.c.a("isWifiRequired");
        f fVar2 = new f();
        fVar2.a(2);
        f43215c = a11.b(fVar2.b()).a();
        c.b a12 = bj.c.a("isDeviceIdleRequired");
        f fVar3 = new f();
        fVar3.a(3);
        f43216d = a12.b(fVar3.b()).a();
        c.b a13 = bj.c.a("canDownloadInBackground");
        f fVar4 = new f();
        fVar4.a(4);
        f43217e = a13.b(fVar4.b()).a();
    }

    private x3() {
    }

    @Override // bj.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        android.support.v4.media.session.b.a(obj);
        bj.e eVar = (bj.e) obj2;
        throw null;
    }
}
