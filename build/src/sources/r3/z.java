package r3;

import java.io.File;
import java.util.concurrent.Callable;
import kotlin.jvm.internal.Intrinsics;
import x3.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class z implements h.c {

    /* renamed from: a  reason: collision with root package name */
    private final String f48557a;

    /* renamed from: b  reason: collision with root package name */
    private final File f48558b;

    /* renamed from: c  reason: collision with root package name */
    private final Callable f48559c;

    /* renamed from: d  reason: collision with root package name */
    private final h.c f48560d;

    public z(String str, File file, Callable callable, h.c mDelegate) {
        Intrinsics.checkNotNullParameter(mDelegate, "mDelegate");
        this.f48557a = str;
        this.f48558b = file;
        this.f48559c = callable;
        this.f48560d = mDelegate;
    }

    @Override // x3.h.c
    public x3.h a(h.b configuration) {
        Intrinsics.checkNotNullParameter(configuration, "configuration");
        return new y(configuration.f53626a, this.f48557a, this.f48558b, this.f48559c, configuration.f53628c.f53624a, this.f48560d.a(configuration));
    }
}
