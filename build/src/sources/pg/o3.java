package pg;

import bj.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class o3 implements bj.d {

    /* renamed from: a  reason: collision with root package name */
    static final o3 f42867a = new o3();

    /* renamed from: b  reason: collision with root package name */
    private static final bj.c f42868b;

    /* renamed from: c  reason: collision with root package name */
    private static final bj.c f42869c;

    /* renamed from: d  reason: collision with root package name */
    private static final bj.c f42870d;

    /* renamed from: e  reason: collision with root package name */
    private static final bj.c f42871e;

    /* renamed from: f  reason: collision with root package name */
    private static final bj.c f42872f;

    /* renamed from: g  reason: collision with root package name */
    private static final bj.c f42873g;

    /* renamed from: h  reason: collision with root package name */
    private static final bj.c f42874h;

    static {
        c.b a10 = bj.c.a("durationMs");
        f fVar = new f();
        fVar.a(1);
        f42868b = a10.b(fVar.b()).a();
        c.b a11 = bj.c.a("imageSource");
        f fVar2 = new f();
        fVar2.a(2);
        f42869c = a11.b(fVar2.b()).a();
        c.b a12 = bj.c.a("imageFormat");
        f fVar3 = new f();
        fVar3.a(3);
        f42870d = a12.b(fVar3.b()).a();
        c.b a13 = bj.c.a("imageByteSize");
        f fVar4 = new f();
        fVar4.a(4);
        f42871e = a13.b(fVar4.b()).a();
        c.b a14 = bj.c.a("imageWidth");
        f fVar5 = new f();
        fVar5.a(5);
        f42872f = a14.b(fVar5.b()).a();
        c.b a15 = bj.c.a("imageHeight");
        f fVar6 = new f();
        fVar6.a(6);
        f42873g = a15.b(fVar6.b()).a();
        c.b a16 = bj.c.a("rotationDegrees");
        f fVar7 = new f();
        fVar7.a(7);
        f42874h = a16.b(fVar7.b()).a();
    }

    private o3() {
    }

    @Override // bj.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        z7 z7Var = (z7) obj;
        bj.e eVar = (bj.e) obj2;
        eVar.e(f42868b, z7Var.g());
        eVar.e(f42869c, z7Var.b());
        eVar.e(f42870d, z7Var.a());
        eVar.e(f42871e, z7Var.c());
        eVar.e(f42872f, z7Var.e());
        eVar.e(f42873g, z7Var.d());
        eVar.e(f42874h, z7Var.f());
    }
}
