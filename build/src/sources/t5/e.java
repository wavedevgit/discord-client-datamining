package t5;

import android.graphics.Path;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e implements c {

    /* renamed from: a  reason: collision with root package name */
    private final g f49060a;

    /* renamed from: b  reason: collision with root package name */
    private final Path.FillType f49061b;

    /* renamed from: c  reason: collision with root package name */
    private final s5.c f49062c;

    /* renamed from: d  reason: collision with root package name */
    private final s5.d f49063d;

    /* renamed from: e  reason: collision with root package name */
    private final s5.f f49064e;

    /* renamed from: f  reason: collision with root package name */
    private final s5.f f49065f;

    /* renamed from: g  reason: collision with root package name */
    private final String f49066g;

    /* renamed from: h  reason: collision with root package name */
    private final s5.b f49067h;

    /* renamed from: i  reason: collision with root package name */
    private final s5.b f49068i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f49069j;

    public e(String str, g gVar, Path.FillType fillType, s5.c cVar, s5.d dVar, s5.f fVar, s5.f fVar2, s5.b bVar, s5.b bVar2, boolean z10) {
        this.f49060a = gVar;
        this.f49061b = fillType;
        this.f49062c = cVar;
        this.f49063d = dVar;
        this.f49064e = fVar;
        this.f49065f = fVar2;
        this.f49066g = str;
        this.f49067h = bVar;
        this.f49068i = bVar2;
        this.f49069j = z10;
    }

    @Override // t5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, u5.b bVar) {
        return new n5.h(nVar, iVar, bVar, this);
    }

    public s5.f b() {
        return this.f49065f;
    }

    public Path.FillType c() {
        return this.f49061b;
    }

    public s5.c d() {
        return this.f49062c;
    }

    public g e() {
        return this.f49060a;
    }

    public String f() {
        return this.f49066g;
    }

    public s5.d g() {
        return this.f49063d;
    }

    public s5.f h() {
        return this.f49064e;
    }

    public boolean i() {
        return this.f49069j;
    }
}
