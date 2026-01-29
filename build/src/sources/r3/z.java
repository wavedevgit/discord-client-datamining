package r3;

import java.io.File;
import java.util.concurrent.Callable;
import kotlin.jvm.internal.Intrinsics;
import x3.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class z implements h.c {

    /* renamed from: a  reason: collision with root package name */
    private final String f48023a;

    /* renamed from: b  reason: collision with root package name */
    private final File f48024b;

    /* renamed from: c  reason: collision with root package name */
    private final Callable f48025c;

    /* renamed from: d  reason: collision with root package name */
    private final h.c f48026d;

    public z(String str, File file, Callable callable, h.c mDelegate) {
        Intrinsics.checkNotNullParameter(mDelegate, "mDelegate");
        this.f48023a = str;
        this.f48024b = file;
        this.f48025c = callable;
        this.f48026d = mDelegate;
    }

    @Override // x3.h.c
    public x3.h a(h.b configuration) {
        Intrinsics.checkNotNullParameter(configuration, "configuration");
        return new y(configuration.f53140a, this.f48023a, this.f48024b, this.f48025c, configuration.f53142c.f53138a, this.f48026d.a(configuration));
    }
}
