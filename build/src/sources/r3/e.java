package r3;

import kotlin.jvm.internal.Intrinsics;
import x3.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e implements h.c {

    /* renamed from: a  reason: collision with root package name */
    private final h.c f47874a;

    /* renamed from: b  reason: collision with root package name */
    private final c f47875b;

    public e(h.c delegate, c autoCloser) {
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        Intrinsics.checkNotNullParameter(autoCloser, "autoCloser");
        this.f47874a = delegate;
        this.f47875b = autoCloser;
    }

    @Override // x3.h.c
    /* renamed from: b */
    public d a(h.b configuration) {
        Intrinsics.checkNotNullParameter(configuration, "configuration");
        return new d(this.f47874a.a(configuration), this.f47875b);
    }
}
