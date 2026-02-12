package t5;

import android.graphics.Path;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e implements c {

    /* renamed from: a  reason: collision with root package name */
    private final g f48492a;

    /* renamed from: b  reason: collision with root package name */
    private final Path.FillType f48493b;

    /* renamed from: c  reason: collision with root package name */
    private final s5.c f48494c;

    /* renamed from: d  reason: collision with root package name */
    private final s5.d f48495d;

    /* renamed from: e  reason: collision with root package name */
    private final s5.f f48496e;

    /* renamed from: f  reason: collision with root package name */
    private final s5.f f48497f;

    /* renamed from: g  reason: collision with root package name */
    private final String f48498g;

    /* renamed from: h  reason: collision with root package name */
    private final s5.b f48499h;

    /* renamed from: i  reason: collision with root package name */
    private final s5.b f48500i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f48501j;

    public e(String str, g gVar, Path.FillType fillType, s5.c cVar, s5.d dVar, s5.f fVar, s5.f fVar2, s5.b bVar, s5.b bVar2, boolean z10) {
        this.f48492a = gVar;
        this.f48493b = fillType;
        this.f48494c = cVar;
        this.f48495d = dVar;
        this.f48496e = fVar;
        this.f48497f = fVar2;
        this.f48498g = str;
        this.f48499h = bVar;
        this.f48500i = bVar2;
        this.f48501j = z10;
    }

    @Override // t5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, u5.b bVar) {
        return new n5.h(nVar, iVar, bVar, this);
    }

    public s5.f b() {
        return this.f48497f;
    }

    public Path.FillType c() {
        return this.f48493b;
    }

    public s5.c d() {
        return this.f48494c;
    }

    public g e() {
        return this.f48492a;
    }

    public String f() {
        return this.f48498g;
    }

    public s5.d g() {
        return this.f48495d;
    }

    public s5.f h() {
        return this.f48496e;
    }

    public boolean i() {
        return this.f48501j;
    }
}
