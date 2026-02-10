package t5;

import android.graphics.Path;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class p implements c {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f50649a;

    /* renamed from: b  reason: collision with root package name */
    private final Path.FillType f50650b;

    /* renamed from: c  reason: collision with root package name */
    private final String f50651c;

    /* renamed from: d  reason: collision with root package name */
    private final s5.a f50652d;

    /* renamed from: e  reason: collision with root package name */
    private final s5.d f50653e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f50654f;

    public p(String str, boolean z10, Path.FillType fillType, s5.a aVar, s5.d dVar, boolean z11) {
        this.f50651c = str;
        this.f50649a = z10;
        this.f50650b = fillType;
        this.f50652d = aVar;
        this.f50653e = dVar;
        this.f50654f = z11;
    }

    @Override // t5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, u5.b bVar) {
        return new n5.g(nVar, bVar, this);
    }

    public s5.a b() {
        return this.f50652d;
    }

    public Path.FillType c() {
        return this.f50650b;
    }

    public String d() {
        return this.f50651c;
    }

    public s5.d e() {
        return this.f50653e;
    }

    public boolean f() {
        return this.f50654f;
    }

    public String toString() {
        return "ShapeFill{color=, fillEnabled=" + this.f50649a + '}';
    }
}
