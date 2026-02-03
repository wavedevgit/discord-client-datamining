package r3;

import java.io.File;
import java.util.concurrent.Callable;
import kotlin.jvm.internal.Intrinsics;
import x3.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class z implements h.c {

    /* renamed from: a  reason: collision with root package name */
    private final String f48550a;

    /* renamed from: b  reason: collision with root package name */
    private final File f48551b;

    /* renamed from: c  reason: collision with root package name */
    private final Callable f48552c;

    /* renamed from: d  reason: collision with root package name */
    private final h.c f48553d;

    public z(String str, File file, Callable callable, h.c mDelegate) {
        Intrinsics.checkNotNullParameter(mDelegate, "mDelegate");
        this.f48550a = str;
        this.f48551b = file;
        this.f48552c = callable;
        this.f48553d = mDelegate;
    }

    @Override // x3.h.c
    public x3.h a(h.b configuration) {
        Intrinsics.checkNotNullParameter(configuration, "configuration");
        return new y(configuration.f53085a, this.f48550a, this.f48551b, this.f48552c, configuration.f53087c.f53083a, this.f48553d.a(configuration));
    }
}
