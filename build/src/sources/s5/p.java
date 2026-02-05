package s5;

import android.graphics.Path;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class p implements c {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f49428a;

    /* renamed from: b  reason: collision with root package name */
    private final Path.FillType f49429b;

    /* renamed from: c  reason: collision with root package name */
    private final String f49430c;

    /* renamed from: d  reason: collision with root package name */
    private final r5.a f49431d;

    /* renamed from: e  reason: collision with root package name */
    private final r5.d f49432e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f49433f;

    public p(String str, boolean z10, Path.FillType fillType, r5.a aVar, r5.d dVar, boolean z11) {
        this.f49430c = str;
        this.f49428a = z10;
        this.f49429b = fillType;
        this.f49431d = aVar;
        this.f49432e = dVar;
        this.f49433f = z11;
    }

    @Override // s5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar) {
        return new n5.g(nVar, bVar, this);
    }

    public r5.a b() {
        return this.f49431d;
    }

    public Path.FillType c() {
        return this.f49429b;
    }

    public String d() {
        return this.f49430c;
    }

    public r5.d e() {
        return this.f49432e;
    }

    public boolean f() {
        return this.f49433f;
    }

    public String toString() {
        return "ShapeFill{color=, fillEnabled=" + this.f49428a + '}';
    }
}
