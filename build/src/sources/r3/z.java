package r3;

import java.io.File;
import java.util.concurrent.Callable;
import kotlin.jvm.internal.Intrinsics;
import x3.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class z implements h.c {

    /* renamed from: a  reason: collision with root package name */
    private final String f46118a;

    /* renamed from: b  reason: collision with root package name */
    private final File f46119b;

    /* renamed from: c  reason: collision with root package name */
    private final Callable f46120c;

    /* renamed from: d  reason: collision with root package name */
    private final h.c f46121d;

    public z(String str, File file, Callable callable, h.c mDelegate) {
        Intrinsics.checkNotNullParameter(mDelegate, "mDelegate");
        this.f46118a = str;
        this.f46119b = file;
        this.f46120c = callable;
        this.f46121d = mDelegate;
    }

    @Override // x3.h.c
    public x3.h a(h.b configuration) {
        Intrinsics.checkNotNullParameter(configuration, "configuration");
        return new y(configuration.f54318a, this.f46118a, this.f46119b, this.f46120c, configuration.f54320c.f54316a, this.f46121d.a(configuration));
    }
}
