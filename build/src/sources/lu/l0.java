package lu;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.zip.Inflater;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import lu.c0;
import okio.BufferedSource;
import okio.Sink;
import okio.Source;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class l0 extends h {

    /* renamed from: i  reason: collision with root package name */
    private static final a f37322i = new a(null);

    /* renamed from: j  reason: collision with root package name */
    private static final c0 f37323j = c0.a.e(c0.f37264e, "/", false, 1, null);

    /* renamed from: e  reason: collision with root package name */
    private final c0 f37324e;

    /* renamed from: f  reason: collision with root package name */
    private final h f37325f;

    /* renamed from: g  reason: collision with root package name */
    private final Map f37326g;

    /* renamed from: h  reason: collision with root package name */
    private final String f37327h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public l0(c0 zipPath, h fileSystem, Map entries, String str) {
        Intrinsics.checkNotNullParameter(zipPath, "zipPath");
        Intrinsics.checkNotNullParameter(fileSystem, "fileSystem");
        Intrinsics.checkNotNullParameter(entries, "entries");
        this.f37324e = zipPath;
        this.f37325f = fileSystem;
        this.f37326g = entries;
        this.f37327h = str;
    }

    private final c0 r(c0 c0Var) {
        return f37323j.l(c0Var, true);
    }

    private final List s(c0 c0Var, boolean z10) {
        mu.i iVar = (mu.i) this.f37326g.get(r(c0Var));
        if (iVar == null) {
            if (!z10) {
                return null;
            }
            throw new IOException("not a directory: " + c0Var);
        }
        return CollectionsKt.h1(iVar.c());
    }

    @Override // lu.h
    public Sink b(c0 file, boolean z10) {
        Intrinsics.checkNotNullParameter(file, "file");
        throw new IOException("zip file systems are read-only");
    }

    @Override // lu.h
    public void c(c0 source, c0 target) {
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(target, "target");
        throw new IOException("zip file systems are read-only");
    }

    @Override // lu.h
    public void g(c0 dir, boolean z10) {
        Intrinsics.checkNotNullParameter(dir, "dir");
        throw new IOException("zip file systems are read-only");
    }

    @Override // lu.h
    public void i(c0 path, boolean z10) {
        Intrinsics.checkNotNullParameter(path, "path");
        throw new IOException("zip file systems are read-only");
    }

    @Override // lu.h
    public List k(c0 dir) {
        Intrinsics.checkNotNullParameter(dir, "dir");
        List s10 = s(dir, true);
        Intrinsics.checkNotNull(s10);
        return s10;
    }

    @Override // lu.h
    public g m(c0 path) {
        Throwable th2;
        Intrinsics.checkNotNullParameter(path, "path");
        mu.i iVar = (mu.i) this.f37326g.get(r(path));
        Long l10 = null;
        if (iVar == null) {
            return null;
        }
        if (iVar.i() != -1) {
            f n10 = this.f37325f.n(this.f37324e);
            try {
                BufferedSource d10 = x.d(n10.N(iVar.i()));
                iVar = mu.j.j(d10, iVar);
                if (d10 != null) {
                    try {
                        d10.close();
                    } catch (Throwable th3) {
                        th = th3;
                    }
                }
                th = null;
            } catch (Throwable th4) {
                if (n10 != null) {
                    try {
                        n10.close();
                    } catch (Throwable th5) {
                        lr.e.a(th4, th5);
                    }
                }
                th2 = th4;
                iVar = null;
            }
            if (th == null) {
                if (n10 != null) {
                    try {
                        n10.close();
                    } catch (Throwable th6) {
                        th2 = th6;
                    }
                }
                th2 = null;
                if (th2 != null) {
                    throw th2;
                }
            } else {
                throw th;
            }
        }
        boolean z10 = !iVar.k();
        boolean k10 = iVar.k();
        if (!iVar.k()) {
            l10 = Long.valueOf(iVar.j());
        }
        return new g(z10, k10, null, l10, iVar.f(), iVar.h(), iVar.g(), null, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT, null);
    }

    @Override // lu.h
    public f n(c0 file) {
        Intrinsics.checkNotNullParameter(file, "file");
        throw new UnsupportedOperationException("not implemented yet!");
    }

    @Override // lu.h
    public Sink p(c0 file, boolean z10) {
        Intrinsics.checkNotNullParameter(file, "file");
        throw new IOException("zip file systems are read-only");
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r2v1, types: [java.lang.Throwable] */
    /* JADX WARN: Type inference failed for: r2v2, types: [java.lang.Throwable] */
    /* JADX WARN: Type inference failed for: r2v8 */
    @Override // lu.h
    public Source q(c0 file) {
        Intrinsics.checkNotNullParameter(file, "file");
        mu.i iVar = (mu.i) this.f37326g.get(r(file));
        if (iVar != null) {
            f n10 = this.f37325f.n(this.f37324e);
            BufferedSource th2 = null;
            try {
                BufferedSource d10 = x.d(n10.N(iVar.i()));
                if (n10 != null) {
                    try {
                        n10.close();
                    } catch (Throwable th3) {
                        th2 = th3;
                    }
                }
                th = th2;
                th2 = d10;
            } catch (Throwable th4) {
                th = th4;
                if (n10 != null) {
                    try {
                        n10.close();
                    } catch (Throwable th5) {
                        lr.e.a(th, th5);
                    }
                }
            }
            if (th == 0) {
                mu.j.m(th2);
                if (iVar.e() == 0) {
                    return new mu.g(th2, iVar.j(), true);
                }
                return new mu.g(new o(new mu.g(th2, iVar.d(), true), new Inflater(true)), iVar.j(), false);
            }
            throw th;
        }
        throw new FileNotFoundException("no such file: " + file);
    }
}
