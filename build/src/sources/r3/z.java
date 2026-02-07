package r3;

import java.io.File;
import java.util.concurrent.Callable;
import kotlin.jvm.internal.Intrinsics;
import x3.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class z implements h.c {

    /* renamed from: a  reason: collision with root package name */
    private final String f48689a;

    /* renamed from: b  reason: collision with root package name */
    private final File f48690b;

    /* renamed from: c  reason: collision with root package name */
    private final Callable f48691c;

    /* renamed from: d  reason: collision with root package name */
    private final h.c f48692d;

    public z(String str, File file, Callable callable, h.c mDelegate) {
        Intrinsics.checkNotNullParameter(mDelegate, "mDelegate");
        this.f48689a = str;
        this.f48690b = file;
        this.f48691c = callable;
        this.f48692d = mDelegate;
    }

    @Override // x3.h.c
    public x3.h a(h.b configuration) {
        Intrinsics.checkNotNullParameter(configuration, "configuration");
        return new y(configuration.f54493a, this.f48689a, this.f48690b, this.f48691c, configuration.f54495c.f54491a, this.f48692d.a(configuration));
    }
}
