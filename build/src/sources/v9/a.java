package v9;

import kotlin.jvm.internal.Intrinsics;
import p9.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements d {

    /* renamed from: a  reason: collision with root package name */
    private final ha.a f51404a;

    public a(ha.a animatedDrawableBackend) {
        Intrinsics.checkNotNullParameter(animatedDrawableBackend, "animatedDrawableBackend");
        this.f51404a = animatedDrawableBackend;
    }

    @Override // p9.d
    public int a() {
        return this.f51404a.a();
    }

    @Override // p9.d
    public int b() {
        return this.f51404a.b();
    }

    @Override // p9.d
    public int g() {
        return this.f51404a.getHeight();
    }

    @Override // p9.d
    public int j() {
        return this.f51404a.d();
    }

    @Override // p9.d
    public int k(int i10) {
        return this.f51404a.g(i10);
    }

    @Override // p9.d
    public int m() {
        return this.f51404a.getWidth();
    }
}
