package u9;

import kotlin.jvm.internal.Intrinsics;
import o9.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements d {

    /* renamed from: a  reason: collision with root package name */
    private final ga.a f51213a;

    public a(ga.a animatedDrawableBackend) {
        Intrinsics.checkNotNullParameter(animatedDrawableBackend, "animatedDrawableBackend");
        this.f51213a = animatedDrawableBackend;
    }

    @Override // o9.d
    public int a() {
        return this.f51213a.a();
    }

    @Override // o9.d
    public int b() {
        return this.f51213a.b();
    }

    @Override // o9.d
    public int g() {
        return this.f51213a.getHeight();
    }

    @Override // o9.d
    public int j() {
        return this.f51213a.d();
    }

    @Override // o9.d
    public int l(int i10) {
        return this.f51213a.g(i10);
    }

    @Override // o9.d
    public int n() {
        return this.f51213a.getWidth();
    }
}
