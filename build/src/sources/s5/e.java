package s5;

import android.graphics.Path;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e implements c {

    /* renamed from: a  reason: collision with root package name */
    private final g f48782a;

    /* renamed from: b  reason: collision with root package name */
    private final Path.FillType f48783b;

    /* renamed from: c  reason: collision with root package name */
    private final r5.c f48784c;

    /* renamed from: d  reason: collision with root package name */
    private final r5.d f48785d;

    /* renamed from: e  reason: collision with root package name */
    private final r5.f f48786e;

    /* renamed from: f  reason: collision with root package name */
    private final r5.f f48787f;

    /* renamed from: g  reason: collision with root package name */
    private final String f48788g;

    /* renamed from: h  reason: collision with root package name */
    private final r5.b f48789h;

    /* renamed from: i  reason: collision with root package name */
    private final r5.b f48790i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f48791j;

    public e(String str, g gVar, Path.FillType fillType, r5.c cVar, r5.d dVar, r5.f fVar, r5.f fVar2, r5.b bVar, r5.b bVar2, boolean z10) {
        this.f48782a = gVar;
        this.f48783b = fillType;
        this.f48784c = cVar;
        this.f48785d = dVar;
        this.f48786e = fVar;
        this.f48787f = fVar2;
        this.f48788g = str;
        this.f48789h = bVar;
        this.f48790i = bVar2;
        this.f48791j = z10;
    }

    @Override // s5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar) {
        return new n5.h(nVar, iVar, bVar, this);
    }

    public r5.f b() {
        return this.f48787f;
    }

    public Path.FillType c() {
        return this.f48783b;
    }

    public r5.c d() {
        return this.f48784c;
    }

    public g e() {
        return this.f48782a;
    }

    public String f() {
        return this.f48788g;
    }

    public r5.d g() {
        return this.f48785d;
    }

    public r5.f h() {
        return this.f48786e;
    }

    public boolean i() {
        return this.f48791j;
    }
}
