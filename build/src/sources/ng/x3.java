package ng;

import xi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class x3 implements xi.d {

    /* renamed from: a  reason: collision with root package name */
    static final x3 f41226a = new x3();

    /* renamed from: b  reason: collision with root package name */
    private static final xi.c f41227b;

    /* renamed from: c  reason: collision with root package name */
    private static final xi.c f41228c;

    /* renamed from: d  reason: collision with root package name */
    private static final xi.c f41229d;

    /* renamed from: e  reason: collision with root package name */
    private static final xi.c f41230e;

    static {
        c.b a10 = xi.c.a("isChargingRequired");
        f fVar = new f();
        fVar.a(1);
        f41227b = a10.b(fVar.b()).a();
        c.b a11 = xi.c.a("isWifiRequired");
        f fVar2 = new f();
        fVar2.a(2);
        f41228c = a11.b(fVar2.b()).a();
        c.b a12 = xi.c.a("isDeviceIdleRequired");
        f fVar3 = new f();
        fVar3.a(3);
        f41229d = a12.b(fVar3.b()).a();
        c.b a13 = xi.c.a("canDownloadInBackground");
        f fVar4 = new f();
        fVar4.a(4);
        f41230e = a13.b(fVar4.b()).a();
    }

    private x3() {
    }

    @Override // xi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        android.support.v4.media.session.b.a(obj);
        xi.e eVar = (xi.e) obj2;
        throw null;
    }
}
