package r3;

import java.io.File;
import java.util.concurrent.Callable;
import kotlin.jvm.internal.Intrinsics;
import x3.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class z implements h.c {

    /* renamed from: a  reason: collision with root package name */
    private final String f46117a;

    /* renamed from: b  reason: collision with root package name */
    private final File f46118b;

    /* renamed from: c  reason: collision with root package name */
    private final Callable f46119c;

    /* renamed from: d  reason: collision with root package name */
    private final h.c f46120d;

    public z(String str, File file, Callable callable, h.c mDelegate) {
        Intrinsics.checkNotNullParameter(mDelegate, "mDelegate");
        this.f46117a = str;
        this.f46118b = file;
        this.f46119c = callable;
        this.f46120d = mDelegate;
    }

    @Override // x3.h.c
    public x3.h a(h.b configuration) {
        Intrinsics.checkNotNullParameter(configuration, "configuration");
        return new y(configuration.f54317a, this.f46117a, this.f46118b, this.f46119c, configuration.f54319c.f54315a, this.f46120d.a(configuration));
    }
}
