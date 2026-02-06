package s5;

import android.graphics.Path;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e implements c {

    /* renamed from: a  reason: collision with root package name */
    private final g f49673a;

    /* renamed from: b  reason: collision with root package name */
    private final Path.FillType f49674b;

    /* renamed from: c  reason: collision with root package name */
    private final r5.c f49675c;

    /* renamed from: d  reason: collision with root package name */
    private final r5.d f49676d;

    /* renamed from: e  reason: collision with root package name */
    private final r5.f f49677e;

    /* renamed from: f  reason: collision with root package name */
    private final r5.f f49678f;

    /* renamed from: g  reason: collision with root package name */
    private final String f49679g;

    /* renamed from: h  reason: collision with root package name */
    private final r5.b f49680h;

    /* renamed from: i  reason: collision with root package name */
    private final r5.b f49681i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f49682j;

    public e(String str, g gVar, Path.FillType fillType, r5.c cVar, r5.d dVar, r5.f fVar, r5.f fVar2, r5.b bVar, r5.b bVar2, boolean z10) {
        this.f49673a = gVar;
        this.f49674b = fillType;
        this.f49675c = cVar;
        this.f49676d = dVar;
        this.f49677e = fVar;
        this.f49678f = fVar2;
        this.f49679g = str;
        this.f49680h = bVar;
        this.f49681i = bVar2;
        this.f49682j = z10;
    }

    @Override // s5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar) {
        return new n5.h(nVar, iVar, bVar, this);
    }

    public r5.f b() {
        return this.f49678f;
    }

    public Path.FillType c() {
        return this.f49674b;
    }

    public r5.c d() {
        return this.f49675c;
    }

    public g e() {
        return this.f49673a;
    }

    public String f() {
        return this.f49679g;
    }

    public r5.d g() {
        return this.f49676d;
    }

    public r5.f h() {
        return this.f49677e;
    }

    public boolean i() {
        return this.f49682j;
    }
}
