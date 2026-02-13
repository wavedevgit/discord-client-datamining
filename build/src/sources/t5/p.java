package t5;

import android.graphics.Path;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class p implements c {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f49150a;

    /* renamed from: b  reason: collision with root package name */
    private final Path.FillType f49151b;

    /* renamed from: c  reason: collision with root package name */
    private final String f49152c;

    /* renamed from: d  reason: collision with root package name */
    private final s5.a f49153d;

    /* renamed from: e  reason: collision with root package name */
    private final s5.d f49154e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f49155f;

    public p(String str, boolean z10, Path.FillType fillType, s5.a aVar, s5.d dVar, boolean z11) {
        this.f49152c = str;
        this.f49150a = z10;
        this.f49151b = fillType;
        this.f49153d = aVar;
        this.f49154e = dVar;
        this.f49155f = z11;
    }

    @Override // t5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, u5.b bVar) {
        return new n5.g(nVar, bVar, this);
    }

    public s5.a b() {
        return this.f49153d;
    }

    public Path.FillType c() {
        return this.f49151b;
    }

    public String d() {
        return this.f49152c;
    }

    public s5.d e() {
        return this.f49154e;
    }

    public boolean f() {
        return this.f49155f;
    }

    public String toString() {
        return "ShapeFill{color=, fillEnabled=" + this.f49150a + '}';
    }
}
