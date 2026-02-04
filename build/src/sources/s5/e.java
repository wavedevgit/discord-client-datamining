package s5;

import android.graphics.Path;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e implements c {

    /* renamed from: a  reason: collision with root package name */
    private final g f49189a;

    /* renamed from: b  reason: collision with root package name */
    private final Path.FillType f49190b;

    /* renamed from: c  reason: collision with root package name */
    private final r5.c f49191c;

    /* renamed from: d  reason: collision with root package name */
    private final r5.d f49192d;

    /* renamed from: e  reason: collision with root package name */
    private final r5.f f49193e;

    /* renamed from: f  reason: collision with root package name */
    private final r5.f f49194f;

    /* renamed from: g  reason: collision with root package name */
    private final String f49195g;

    /* renamed from: h  reason: collision with root package name */
    private final r5.b f49196h;

    /* renamed from: i  reason: collision with root package name */
    private final r5.b f49197i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f49198j;

    public e(String str, g gVar, Path.FillType fillType, r5.c cVar, r5.d dVar, r5.f fVar, r5.f fVar2, r5.b bVar, r5.b bVar2, boolean z10) {
        this.f49189a = gVar;
        this.f49190b = fillType;
        this.f49191c = cVar;
        this.f49192d = dVar;
        this.f49193e = fVar;
        this.f49194f = fVar2;
        this.f49195g = str;
        this.f49196h = bVar;
        this.f49197i = bVar2;
        this.f49198j = z10;
    }

    @Override // s5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar) {
        return new n5.h(nVar, iVar, bVar, this);
    }

    public r5.f b() {
        return this.f49194f;
    }

    public Path.FillType c() {
        return this.f49190b;
    }

    public r5.c d() {
        return this.f49191c;
    }

    public g e() {
        return this.f49189a;
    }

    public String f() {
        return this.f49195g;
    }

    public r5.d g() {
        return this.f49192d;
    }

    public r5.f h() {
        return this.f49193e;
    }

    public boolean i() {
        return this.f49198j;
    }
}
