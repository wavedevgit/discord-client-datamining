package lu;

import java.util.List;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import lu.c0;
import okio.Sink;
import okio.Source;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class h {

    /* renamed from: a  reason: collision with root package name */
    public static final a f37307a = new a(null);

    /* renamed from: b  reason: collision with root package name */
    public static final h f37308b;

    /* renamed from: c  reason: collision with root package name */
    public static final c0 f37309c;

    /* renamed from: d  reason: collision with root package name */
    public static final h f37310d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    static {
        h rVar;
        try {
            Class.forName("java.nio.file.Files");
            rVar = new w();
        } catch (ClassNotFoundException unused) {
            rVar = new r();
        }
        f37308b = rVar;
        c0.a aVar = c0.f37264e;
        String property = System.getProperty("java.io.tmpdir");
        Intrinsics.checkNotNullExpressionValue(property, "getProperty(...)");
        f37309c = c0.a.e(aVar, property, false, 1, null);
        ClassLoader classLoader = mu.h.class.getClassLoader();
        Intrinsics.checkNotNullExpressionValue(classLoader, "getClassLoader(...)");
        f37310d = new mu.h(classLoader, false, null, 4, null);
    }

    public final Sink a(c0 file) {
        Intrinsics.checkNotNullParameter(file, "file");
        return b(file, false);
    }

    public abstract Sink b(c0 c0Var, boolean z10);

    public abstract void c(c0 c0Var, c0 c0Var2);

    public final void d(c0 dir) {
        Intrinsics.checkNotNullParameter(dir, "dir");
        e(dir, false);
    }

    public final void e(c0 dir, boolean z10) {
        Intrinsics.checkNotNullParameter(dir, "dir");
        mu.c.a(this, dir, z10);
    }

    public final void f(c0 dir) {
        Intrinsics.checkNotNullParameter(dir, "dir");
        g(dir, false);
    }

    public abstract void g(c0 c0Var, boolean z10);

    public final void h(c0 path) {
        Intrinsics.checkNotNullParameter(path, "path");
        i(path, false);
    }

    public abstract void i(c0 c0Var, boolean z10);

    public final boolean j(c0 path) {
        Intrinsics.checkNotNullParameter(path, "path");
        return mu.c.b(this, path);
    }

    public abstract List k(c0 c0Var);

    public final g l(c0 path) {
        Intrinsics.checkNotNullParameter(path, "path");
        return mu.c.c(this, path);
    }

    public abstract g m(c0 c0Var);

    public abstract f n(c0 c0Var);

    public final Sink o(c0 file) {
        Intrinsics.checkNotNullParameter(file, "file");
        return p(file, false);
    }

    public abstract Sink p(c0 c0Var, boolean z10);

    public abstract Source q(c0 c0Var);
}
