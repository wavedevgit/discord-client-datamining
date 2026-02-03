package s5;

import android.graphics.Path;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e implements c {

    /* renamed from: a  reason: collision with root package name */
    private final g f49192a;

    /* renamed from: b  reason: collision with root package name */
    private final Path.FillType f49193b;

    /* renamed from: c  reason: collision with root package name */
    private final r5.c f49194c;

    /* renamed from: d  reason: collision with root package name */
    private final r5.d f49195d;

    /* renamed from: e  reason: collision with root package name */
    private final r5.f f49196e;

    /* renamed from: f  reason: collision with root package name */
    private final r5.f f49197f;

    /* renamed from: g  reason: collision with root package name */
    private final String f49198g;

    /* renamed from: h  reason: collision with root package name */
    private final r5.b f49199h;

    /* renamed from: i  reason: collision with root package name */
    private final r5.b f49200i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f49201j;

    public e(String str, g gVar, Path.FillType fillType, r5.c cVar, r5.d dVar, r5.f fVar, r5.f fVar2, r5.b bVar, r5.b bVar2, boolean z10) {
        this.f49192a = gVar;
        this.f49193b = fillType;
        this.f49194c = cVar;
        this.f49195d = dVar;
        this.f49196e = fVar;
        this.f49197f = fVar2;
        this.f49198g = str;
        this.f49199h = bVar;
        this.f49200i = bVar2;
        this.f49201j = z10;
    }

    @Override // s5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar) {
        return new n5.h(nVar, iVar, bVar, this);
    }

    public r5.f b() {
        return this.f49197f;
    }

    public Path.FillType c() {
        return this.f49193b;
    }

    public r5.c d() {
        return this.f49194c;
    }

    public g e() {
        return this.f49192a;
    }

    public String f() {
        return this.f49198g;
    }

    public r5.d g() {
        return this.f49195d;
    }

    public r5.f h() {
        return this.f49196e;
    }

    public boolean i() {
        return this.f49201j;
    }
}
