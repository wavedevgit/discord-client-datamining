package t5;

import android.graphics.Path;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e implements c {

    /* renamed from: a  reason: collision with root package name */
    private final g f50559a;

    /* renamed from: b  reason: collision with root package name */
    private final Path.FillType f50560b;

    /* renamed from: c  reason: collision with root package name */
    private final s5.c f50561c;

    /* renamed from: d  reason: collision with root package name */
    private final s5.d f50562d;

    /* renamed from: e  reason: collision with root package name */
    private final s5.f f50563e;

    /* renamed from: f  reason: collision with root package name */
    private final s5.f f50564f;

    /* renamed from: g  reason: collision with root package name */
    private final String f50565g;

    /* renamed from: h  reason: collision with root package name */
    private final s5.b f50566h;

    /* renamed from: i  reason: collision with root package name */
    private final s5.b f50567i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f50568j;

    public e(String str, g gVar, Path.FillType fillType, s5.c cVar, s5.d dVar, s5.f fVar, s5.f fVar2, s5.b bVar, s5.b bVar2, boolean z10) {
        this.f50559a = gVar;
        this.f50560b = fillType;
        this.f50561c = cVar;
        this.f50562d = dVar;
        this.f50563e = fVar;
        this.f50564f = fVar2;
        this.f50565g = str;
        this.f50566h = bVar;
        this.f50567i = bVar2;
        this.f50568j = z10;
    }

    @Override // t5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, u5.b bVar) {
        return new n5.h(nVar, iVar, bVar, this);
    }

    public s5.f b() {
        return this.f50564f;
    }

    public Path.FillType c() {
        return this.f50560b;
    }

    public s5.c d() {
        return this.f50561c;
    }

    public g e() {
        return this.f50559a;
    }

    public String f() {
        return this.f50565g;
    }

    public s5.d g() {
        return this.f50562d;
    }

    public s5.f h() {
        return this.f50563e;
    }

    public boolean i() {
        return this.f50568j;
    }
}
