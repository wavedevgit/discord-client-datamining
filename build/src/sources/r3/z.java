package r3;

import java.io.File;
import java.util.concurrent.Callable;
import kotlin.jvm.internal.Intrinsics;
import x3.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class z implements h.c {

    /* renamed from: a  reason: collision with root package name */
    private final String f48241a;

    /* renamed from: b  reason: collision with root package name */
    private final File f48242b;

    /* renamed from: c  reason: collision with root package name */
    private final Callable f48243c;

    /* renamed from: d  reason: collision with root package name */
    private final h.c f48244d;

    public z(String str, File file, Callable callable, h.c mDelegate) {
        Intrinsics.checkNotNullParameter(mDelegate, "mDelegate");
        this.f48241a = str;
        this.f48242b = file;
        this.f48243c = callable;
        this.f48244d = mDelegate;
    }

    @Override // x3.h.c
    public x3.h a(h.b configuration) {
        Intrinsics.checkNotNullParameter(configuration, "configuration");
        return new y(configuration.f53364a, this.f48241a, this.f48242b, this.f48243c, configuration.f53366c.f53362a, this.f48244d.a(configuration));
    }
}
