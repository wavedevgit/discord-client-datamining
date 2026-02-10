package t5;

import android.graphics.Path;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class p implements c {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f48581a;

    /* renamed from: b  reason: collision with root package name */
    private final Path.FillType f48582b;

    /* renamed from: c  reason: collision with root package name */
    private final String f48583c;

    /* renamed from: d  reason: collision with root package name */
    private final s5.a f48584d;

    /* renamed from: e  reason: collision with root package name */
    private final s5.d f48585e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f48586f;

    public p(String str, boolean z10, Path.FillType fillType, s5.a aVar, s5.d dVar, boolean z11) {
        this.f48583c = str;
        this.f48581a = z10;
        this.f48582b = fillType;
        this.f48584d = aVar;
        this.f48585e = dVar;
        this.f48586f = z11;
    }

    @Override // t5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, u5.b bVar) {
        return new n5.g(nVar, bVar, this);
    }

    public s5.a b() {
        return this.f48584d;
    }

    public Path.FillType c() {
        return this.f48582b;
    }

    public String d() {
        return this.f48583c;
    }

    public s5.d e() {
        return this.f48585e;
    }

    public boolean f() {
        return this.f48586f;
    }

    public String toString() {
        return "ShapeFill{color=, fillEnabled=" + this.f48581a + '}';
    }
}
