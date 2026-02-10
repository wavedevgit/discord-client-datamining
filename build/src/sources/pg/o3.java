package pg;

import bj.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class o3 implements bj.d {

    /* renamed from: a  reason: collision with root package name */
    static final o3 f42298a = new o3();

    /* renamed from: b  reason: collision with root package name */
    private static final bj.c f42299b;

    /* renamed from: c  reason: collision with root package name */
    private static final bj.c f42300c;

    /* renamed from: d  reason: collision with root package name */
    private static final bj.c f42301d;

    /* renamed from: e  reason: collision with root package name */
    private static final bj.c f42302e;

    /* renamed from: f  reason: collision with root package name */
    private static final bj.c f42303f;

    /* renamed from: g  reason: collision with root package name */
    private static final bj.c f42304g;

    /* renamed from: h  reason: collision with root package name */
    private static final bj.c f42305h;

    static {
        c.b a10 = bj.c.a("durationMs");
        f fVar = new f();
        fVar.a(1);
        f42299b = a10.b(fVar.b()).a();
        c.b a11 = bj.c.a("imageSource");
        f fVar2 = new f();
        fVar2.a(2);
        f42300c = a11.b(fVar2.b()).a();
        c.b a12 = bj.c.a("imageFormat");
        f fVar3 = new f();
        fVar3.a(3);
        f42301d = a12.b(fVar3.b()).a();
        c.b a13 = bj.c.a("imageByteSize");
        f fVar4 = new f();
        fVar4.a(4);
        f42302e = a13.b(fVar4.b()).a();
        c.b a14 = bj.c.a("imageWidth");
        f fVar5 = new f();
        fVar5.a(5);
        f42303f = a14.b(fVar5.b()).a();
        c.b a15 = bj.c.a("imageHeight");
        f fVar6 = new f();
        fVar6.a(6);
        f42304g = a15.b(fVar6.b()).a();
        c.b a16 = bj.c.a("rotationDegrees");
        f fVar7 = new f();
        fVar7.a(7);
        f42305h = a16.b(fVar7.b()).a();
    }

    private o3() {
    }

    @Override // bj.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        z7 z7Var = (z7) obj;
        bj.e eVar = (bj.e) obj2;
        eVar.e(f42299b, z7Var.g());
        eVar.e(f42300c, z7Var.b());
        eVar.e(f42301d, z7Var.a());
        eVar.e(f42302e, z7Var.c());
        eVar.e(f42303f, z7Var.e());
        eVar.e(f42304g, z7Var.d());
        eVar.e(f42305h, z7Var.f());
    }
}
