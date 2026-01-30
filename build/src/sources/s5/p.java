package s5;

import android.graphics.Path;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class p implements c {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f48818a;

    /* renamed from: b  reason: collision with root package name */
    private final Path.FillType f48819b;

    /* renamed from: c  reason: collision with root package name */
    private final String f48820c;

    /* renamed from: d  reason: collision with root package name */
    private final r5.a f48821d;

    /* renamed from: e  reason: collision with root package name */
    private final r5.d f48822e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f48823f;

    public p(String str, boolean z10, Path.FillType fillType, r5.a aVar, r5.d dVar, boolean z11) {
        this.f48820c = str;
        this.f48818a = z10;
        this.f48819b = fillType;
        this.f48821d = aVar;
        this.f48822e = dVar;
        this.f48823f = z11;
    }

    @Override // s5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar) {
        return new n5.g(nVar, bVar, this);
    }

    public r5.a b() {
        return this.f48821d;
    }

    public Path.FillType c() {
        return this.f48819b;
    }

    public String d() {
        return this.f48820c;
    }

    public r5.d e() {
        return this.f48822e;
    }

    public boolean f() {
        return this.f48823f;
    }

    public String toString() {
        return "ShapeFill{color=, fillEnabled=" + this.f48818a + '}';
    }
}
