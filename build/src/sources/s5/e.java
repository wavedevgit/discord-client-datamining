package s5;

import android.graphics.Path;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e implements c {

    /* renamed from: a  reason: collision with root package name */
    private final g f49338a;

    /* renamed from: b  reason: collision with root package name */
    private final Path.FillType f49339b;

    /* renamed from: c  reason: collision with root package name */
    private final r5.c f49340c;

    /* renamed from: d  reason: collision with root package name */
    private final r5.d f49341d;

    /* renamed from: e  reason: collision with root package name */
    private final r5.f f49342e;

    /* renamed from: f  reason: collision with root package name */
    private final r5.f f49343f;

    /* renamed from: g  reason: collision with root package name */
    private final String f49344g;

    /* renamed from: h  reason: collision with root package name */
    private final r5.b f49345h;

    /* renamed from: i  reason: collision with root package name */
    private final r5.b f49346i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f49347j;

    public e(String str, g gVar, Path.FillType fillType, r5.c cVar, r5.d dVar, r5.f fVar, r5.f fVar2, r5.b bVar, r5.b bVar2, boolean z10) {
        this.f49338a = gVar;
        this.f49339b = fillType;
        this.f49340c = cVar;
        this.f49341d = dVar;
        this.f49342e = fVar;
        this.f49343f = fVar2;
        this.f49344g = str;
        this.f49345h = bVar;
        this.f49346i = bVar2;
        this.f49347j = z10;
    }

    @Override // s5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar) {
        return new n5.h(nVar, iVar, bVar, this);
    }

    public r5.f b() {
        return this.f49343f;
    }

    public Path.FillType c() {
        return this.f49339b;
    }

    public r5.c d() {
        return this.f49340c;
    }

    public g e() {
        return this.f49338a;
    }

    public String f() {
        return this.f49344g;
    }

    public r5.d g() {
        return this.f49341d;
    }

    public r5.f h() {
        return this.f49342e;
    }

    public boolean i() {
        return this.f49347j;
    }
}
