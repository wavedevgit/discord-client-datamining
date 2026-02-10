package v9;

import kotlin.jvm.internal.Intrinsics;
import p9.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements d {

    /* renamed from: a  reason: collision with root package name */
    private final ha.a f52162a;

    public a(ha.a animatedDrawableBackend) {
        Intrinsics.checkNotNullParameter(animatedDrawableBackend, "animatedDrawableBackend");
        this.f52162a = animatedDrawableBackend;
    }

    @Override // p9.d
    public int a() {
        return this.f52162a.a();
    }

    @Override // p9.d
    public int b() {
        return this.f52162a.b();
    }

    @Override // p9.d
    public int g() {
        return this.f52162a.getHeight();
    }

    @Override // p9.d
    public int j() {
        return this.f52162a.d();
    }

    @Override // p9.d
    public int k(int i10) {
        return this.f52162a.g(i10);
    }

    @Override // p9.d
    public int m() {
        return this.f52162a.getWidth();
    }
}
