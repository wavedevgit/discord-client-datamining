package s5;

import android.graphics.Path;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e implements c {

    /* renamed from: a  reason: collision with root package name */
    private final g f48712a;

    /* renamed from: b  reason: collision with root package name */
    private final Path.FillType f48713b;

    /* renamed from: c  reason: collision with root package name */
    private final r5.c f48714c;

    /* renamed from: d  reason: collision with root package name */
    private final r5.d f48715d;

    /* renamed from: e  reason: collision with root package name */
    private final r5.f f48716e;

    /* renamed from: f  reason: collision with root package name */
    private final r5.f f48717f;

    /* renamed from: g  reason: collision with root package name */
    private final String f48718g;

    /* renamed from: h  reason: collision with root package name */
    private final r5.b f48719h;

    /* renamed from: i  reason: collision with root package name */
    private final r5.b f48720i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f48721j;

    public e(String str, g gVar, Path.FillType fillType, r5.c cVar, r5.d dVar, r5.f fVar, r5.f fVar2, r5.b bVar, r5.b bVar2, boolean z10) {
        this.f48712a = gVar;
        this.f48713b = fillType;
        this.f48714c = cVar;
        this.f48715d = dVar;
        this.f48716e = fVar;
        this.f48717f = fVar2;
        this.f48718g = str;
        this.f48719h = bVar;
        this.f48720i = bVar2;
        this.f48721j = z10;
    }

    @Override // s5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar) {
        return new n5.h(nVar, iVar, bVar, this);
    }

    public r5.f b() {
        return this.f48717f;
    }

    public Path.FillType c() {
        return this.f48713b;
    }

    public r5.c d() {
        return this.f48714c;
    }

    public g e() {
        return this.f48712a;
    }

    public String f() {
        return this.f48718g;
    }

    public r5.d g() {
        return this.f48715d;
    }

    public r5.f h() {
        return this.f48716e;
    }

    public boolean i() {
        return this.f48721j;
    }
}
