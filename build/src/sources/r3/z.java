package r3;

import java.io.File;
import java.util.concurrent.Callable;
import kotlin.jvm.internal.Intrinsics;
import x3.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class z implements h.c {

    /* renamed from: a  reason: collision with root package name */
    private final String f48641a;

    /* renamed from: b  reason: collision with root package name */
    private final File f48642b;

    /* renamed from: c  reason: collision with root package name */
    private final Callable f48643c;

    /* renamed from: d  reason: collision with root package name */
    private final h.c f48644d;

    public z(String str, File file, Callable callable, h.c mDelegate) {
        Intrinsics.checkNotNullParameter(mDelegate, "mDelegate");
        this.f48641a = str;
        this.f48642b = file;
        this.f48643c = callable;
        this.f48644d = mDelegate;
    }

    @Override // x3.h.c
    public x3.h a(h.b configuration) {
        Intrinsics.checkNotNullParameter(configuration, "configuration");
        return new y(configuration.f54445a, this.f48641a, this.f48642b, this.f48643c, configuration.f54447c.f54443a, this.f48644d.a(configuration));
    }
}
