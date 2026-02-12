package t5;

import android.graphics.Path;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class p implements c {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f48582a;

    /* renamed from: b  reason: collision with root package name */
    private final Path.FillType f48583b;

    /* renamed from: c  reason: collision with root package name */
    private final String f48584c;

    /* renamed from: d  reason: collision with root package name */
    private final s5.a f48585d;

    /* renamed from: e  reason: collision with root package name */
    private final s5.d f48586e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f48587f;

    public p(String str, boolean z10, Path.FillType fillType, s5.a aVar, s5.d dVar, boolean z11) {
        this.f48584c = str;
        this.f48582a = z10;
        this.f48583b = fillType;
        this.f48585d = aVar;
        this.f48586e = dVar;
        this.f48587f = z11;
    }

    @Override // t5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, u5.b bVar) {
        return new n5.g(nVar, bVar, this);
    }

    public s5.a b() {
        return this.f48585d;
    }

    public Path.FillType c() {
        return this.f48583b;
    }

    public String d() {
        return this.f48584c;
    }

    public s5.d e() {
        return this.f48586e;
    }

    public boolean f() {
        return this.f48587f;
    }

    public String toString() {
        return "ShapeFill{color=, fillEnabled=" + this.f48582a + '}';
    }
}
