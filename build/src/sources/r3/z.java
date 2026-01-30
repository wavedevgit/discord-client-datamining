package r3;

import java.io.File;
import java.util.concurrent.Callable;
import kotlin.jvm.internal.Intrinsics;
import x3.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class z implements h.c {

    /* renamed from: a  reason: collision with root package name */
    private final String f48039a;

    /* renamed from: b  reason: collision with root package name */
    private final File f48040b;

    /* renamed from: c  reason: collision with root package name */
    private final Callable f48041c;

    /* renamed from: d  reason: collision with root package name */
    private final h.c f48042d;

    public z(String str, File file, Callable callable, h.c mDelegate) {
        Intrinsics.checkNotNullParameter(mDelegate, "mDelegate");
        this.f48039a = str;
        this.f48040b = file;
        this.f48041c = callable;
        this.f48042d = mDelegate;
    }

    @Override // x3.h.c
    public x3.h a(h.b configuration) {
        Intrinsics.checkNotNullParameter(configuration, "configuration");
        return new y(configuration.f53156a, this.f48039a, this.f48040b, this.f48041c, configuration.f53158c.f53154a, this.f48042d.a(configuration));
    }
}
