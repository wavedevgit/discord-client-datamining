package r3;

import java.io.File;
import java.util.concurrent.Callable;
import kotlin.jvm.internal.Intrinsics;
import x3.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class z implements h.c {

    /* renamed from: a  reason: collision with root package name */
    private final String f46686a;

    /* renamed from: b  reason: collision with root package name */
    private final File f46687b;

    /* renamed from: c  reason: collision with root package name */
    private final Callable f46688c;

    /* renamed from: d  reason: collision with root package name */
    private final h.c f46689d;

    public z(String str, File file, Callable callable, h.c mDelegate) {
        Intrinsics.checkNotNullParameter(mDelegate, "mDelegate");
        this.f46686a = str;
        this.f46687b = file;
        this.f46688c = callable;
        this.f46689d = mDelegate;
    }

    @Override // x3.h.c
    public x3.h a(h.b configuration) {
        Intrinsics.checkNotNullParameter(configuration, "configuration");
        return new y(configuration.f54886a, this.f46686a, this.f46687b, this.f46688c, configuration.f54888c.f54884a, this.f46689d.a(configuration));
    }
}
