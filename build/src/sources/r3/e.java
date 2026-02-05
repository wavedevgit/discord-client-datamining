package r3;

import kotlin.jvm.internal.Intrinsics;
import x3.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e implements h.c {

    /* renamed from: a  reason: collision with root package name */
    private final h.c f48408a;

    /* renamed from: b  reason: collision with root package name */
    private final c f48409b;

    public e(h.c delegate, c autoCloser) {
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        Intrinsics.checkNotNullParameter(autoCloser, "autoCloser");
        this.f48408a = delegate;
        this.f48409b = autoCloser;
    }

    @Override // x3.h.c
    /* renamed from: b */
    public d a(h.b configuration) {
        Intrinsics.checkNotNullParameter(configuration, "configuration");
        return new d(this.f48408a.a(configuration), this.f48409b);
    }
}
