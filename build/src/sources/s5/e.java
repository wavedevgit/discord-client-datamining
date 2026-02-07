package s5;

import android.graphics.Path;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e implements c {

    /* renamed from: a  reason: collision with root package name */
    private final g f49721a;

    /* renamed from: b  reason: collision with root package name */
    private final Path.FillType f49722b;

    /* renamed from: c  reason: collision with root package name */
    private final r5.c f49723c;

    /* renamed from: d  reason: collision with root package name */
    private final r5.d f49724d;

    /* renamed from: e  reason: collision with root package name */
    private final r5.f f49725e;

    /* renamed from: f  reason: collision with root package name */
    private final r5.f f49726f;

    /* renamed from: g  reason: collision with root package name */
    private final String f49727g;

    /* renamed from: h  reason: collision with root package name */
    private final r5.b f49728h;

    /* renamed from: i  reason: collision with root package name */
    private final r5.b f49729i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f49730j;

    public e(String str, g gVar, Path.FillType fillType, r5.c cVar, r5.d dVar, r5.f fVar, r5.f fVar2, r5.b bVar, r5.b bVar2, boolean z10) {
        this.f49721a = gVar;
        this.f49722b = fillType;
        this.f49723c = cVar;
        this.f49724d = dVar;
        this.f49725e = fVar;
        this.f49726f = fVar2;
        this.f49727g = str;
        this.f49728h = bVar;
        this.f49729i = bVar2;
        this.f49730j = z10;
    }

    @Override // s5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar) {
        return new n5.h(nVar, iVar, bVar, this);
    }

    public r5.f b() {
        return this.f49726f;
    }

    public Path.FillType c() {
        return this.f49722b;
    }

    public r5.c d() {
        return this.f49723c;
    }

    public g e() {
        return this.f49721a;
    }

    public String f() {
        return this.f49727g;
    }

    public r5.d g() {
        return this.f49724d;
    }

    public r5.f h() {
        return this.f49725e;
    }

    public boolean i() {
        return this.f49730j;
    }
}
