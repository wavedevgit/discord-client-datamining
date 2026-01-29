package ng;

import ui.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class o3 implements ui.d {

    /* renamed from: a  reason: collision with root package name */
    static final o3 f41502a = new o3();

    /* renamed from: b  reason: collision with root package name */
    private static final ui.c f41503b;

    /* renamed from: c  reason: collision with root package name */
    private static final ui.c f41504c;

    /* renamed from: d  reason: collision with root package name */
    private static final ui.c f41505d;

    /* renamed from: e  reason: collision with root package name */
    private static final ui.c f41506e;

    /* renamed from: f  reason: collision with root package name */
    private static final ui.c f41507f;

    /* renamed from: g  reason: collision with root package name */
    private static final ui.c f41508g;

    /* renamed from: h  reason: collision with root package name */
    private static final ui.c f41509h;

    static {
        c.b a10 = ui.c.a("durationMs");
        f fVar = new f();
        fVar.a(1);
        f41503b = a10.b(fVar.b()).a();
        c.b a11 = ui.c.a("imageSource");
        f fVar2 = new f();
        fVar2.a(2);
        f41504c = a11.b(fVar2.b()).a();
        c.b a12 = ui.c.a("imageFormat");
        f fVar3 = new f();
        fVar3.a(3);
        f41505d = a12.b(fVar3.b()).a();
        c.b a13 = ui.c.a("imageByteSize");
        f fVar4 = new f();
        fVar4.a(4);
        f41506e = a13.b(fVar4.b()).a();
        c.b a14 = ui.c.a("imageWidth");
        f fVar5 = new f();
        fVar5.a(5);
        f41507f = a14.b(fVar5.b()).a();
        c.b a15 = ui.c.a("imageHeight");
        f fVar6 = new f();
        fVar6.a(6);
        f41508g = a15.b(fVar6.b()).a();
        c.b a16 = ui.c.a("rotationDegrees");
        f fVar7 = new f();
        fVar7.a(7);
        f41509h = a16.b(fVar7.b()).a();
    }

    private o3() {
    }

    @Override // ui.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        z7 z7Var = (z7) obj;
        ui.e eVar = (ui.e) obj2;
        eVar.b(f41503b, z7Var.g());
        eVar.b(f41504c, z7Var.b());
        eVar.b(f41505d, z7Var.a());
        eVar.b(f41506e, z7Var.c());
        eVar.b(f41507f, z7Var.e());
        eVar.b(f41508g, z7Var.d());
        eVar.b(f41509h, z7Var.f());
    }
}
