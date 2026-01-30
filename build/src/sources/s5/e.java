package s5;

import android.graphics.Path;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e implements c {

    /* renamed from: a  reason: collision with root package name */
    private final g f48728a;

    /* renamed from: b  reason: collision with root package name */
    private final Path.FillType f48729b;

    /* renamed from: c  reason: collision with root package name */
    private final r5.c f48730c;

    /* renamed from: d  reason: collision with root package name */
    private final r5.d f48731d;

    /* renamed from: e  reason: collision with root package name */
    private final r5.f f48732e;

    /* renamed from: f  reason: collision with root package name */
    private final r5.f f48733f;

    /* renamed from: g  reason: collision with root package name */
    private final String f48734g;

    /* renamed from: h  reason: collision with root package name */
    private final r5.b f48735h;

    /* renamed from: i  reason: collision with root package name */
    private final r5.b f48736i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f48737j;

    public e(String str, g gVar, Path.FillType fillType, r5.c cVar, r5.d dVar, r5.f fVar, r5.f fVar2, r5.b bVar, r5.b bVar2, boolean z10) {
        this.f48728a = gVar;
        this.f48729b = fillType;
        this.f48730c = cVar;
        this.f48731d = dVar;
        this.f48732e = fVar;
        this.f48733f = fVar2;
        this.f48734g = str;
        this.f48735h = bVar;
        this.f48736i = bVar2;
        this.f48737j = z10;
    }

    @Override // s5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar) {
        return new n5.h(nVar, iVar, bVar, this);
    }

    public r5.f b() {
        return this.f48733f;
    }

    public Path.FillType c() {
        return this.f48729b;
    }

    public r5.c d() {
        return this.f48730c;
    }

    public g e() {
        return this.f48728a;
    }

    public String f() {
        return this.f48734g;
    }

    public r5.d g() {
        return this.f48731d;
    }

    public r5.f h() {
        return this.f48732e;
    }

    public boolean i() {
        return this.f48737j;
    }
}
