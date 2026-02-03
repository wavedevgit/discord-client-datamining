package r3;

import kotlin.jvm.internal.Intrinsics;
import x3.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e implements h.c {

    /* renamed from: a  reason: collision with root package name */
    private final h.c f48092a;

    /* renamed from: b  reason: collision with root package name */
    private final c f48093b;

    public e(h.c delegate, c autoCloser) {
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        Intrinsics.checkNotNullParameter(autoCloser, "autoCloser");
        this.f48092a = delegate;
        this.f48093b = autoCloser;
    }

    @Override // x3.h.c
    /* renamed from: b */
    public d a(h.b configuration) {
        Intrinsics.checkNotNullParameter(configuration, "configuration");
        return new d(this.f48092a.a(configuration), this.f48093b);
    }
}
