package r3;

import java.io.File;
import java.util.concurrent.Callable;
import kotlin.jvm.internal.Intrinsics;
import x3.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class z implements h.c {

    /* renamed from: a  reason: collision with root package name */
    private final String f48547a;

    /* renamed from: b  reason: collision with root package name */
    private final File f48548b;

    /* renamed from: c  reason: collision with root package name */
    private final Callable f48549c;

    /* renamed from: d  reason: collision with root package name */
    private final h.c f48550d;

    public z(String str, File file, Callable callable, h.c mDelegate) {
        Intrinsics.checkNotNullParameter(mDelegate, "mDelegate");
        this.f48547a = str;
        this.f48548b = file;
        this.f48549c = callable;
        this.f48550d = mDelegate;
    }

    @Override // x3.h.c
    public x3.h a(h.b configuration) {
        Intrinsics.checkNotNullParameter(configuration, "configuration");
        return new y(configuration.f53082a, this.f48547a, this.f48548b, this.f48549c, configuration.f53084c.f53080a, this.f48550d.a(configuration));
    }
}
