package r3;

import java.io.File;
import java.util.concurrent.Callable;
import kotlin.jvm.internal.Intrinsics;
import x3.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class z implements h.c {

    /* renamed from: a  reason: collision with root package name */
    private final String f47663a;

    /* renamed from: b  reason: collision with root package name */
    private final File f47664b;

    /* renamed from: c  reason: collision with root package name */
    private final Callable f47665c;

    /* renamed from: d  reason: collision with root package name */
    private final h.c f47666d;

    public z(String str, File file, Callable callable, h.c mDelegate) {
        Intrinsics.checkNotNullParameter(mDelegate, "mDelegate");
        this.f47663a = str;
        this.f47664b = file;
        this.f47665c = callable;
        this.f47666d = mDelegate;
    }

    @Override // x3.h.c
    public x3.h a(h.b configuration) {
        Intrinsics.checkNotNullParameter(configuration, "configuration");
        return new y(configuration.f54585a, this.f47663a, this.f47664b, this.f47665c, configuration.f54587c.f54583a, this.f47666d.a(configuration));
    }
}
