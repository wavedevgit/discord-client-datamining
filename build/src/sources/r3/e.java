package r3;

import kotlin.jvm.internal.Intrinsics;
import x3.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e implements h.c {

    /* renamed from: a  reason: collision with root package name */
    private final h.c f45968a;

    /* renamed from: b  reason: collision with root package name */
    private final c f45969b;

    public e(h.c delegate, c autoCloser) {
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        Intrinsics.checkNotNullParameter(autoCloser, "autoCloser");
        this.f45968a = delegate;
        this.f45969b = autoCloser;
    }

    @Override // x3.h.c
    /* renamed from: b */
    public d a(h.b configuration) {
        Intrinsics.checkNotNullParameter(configuration, "configuration");
        return new d(this.f45968a.a(configuration), this.f45969b);
    }
}
