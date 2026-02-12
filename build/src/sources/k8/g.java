package k8;

import com.facebook.common.internal.Supplier;
import j8.a;
import java.io.File;
import java.io.IOException;
import java.util.Collection;
import k8.e;
import o8.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class g implements e {

    /* renamed from: f  reason: collision with root package name */
    private static final Class f31645f = g.class;

    /* renamed from: a  reason: collision with root package name */
    private final int f31646a;

    /* renamed from: b  reason: collision with root package name */
    private final Supplier f31647b;

    /* renamed from: c  reason: collision with root package name */
    private final String f31648c;

    /* renamed from: d  reason: collision with root package name */
    private final j8.a f31649d;

    /* renamed from: e  reason: collision with root package name */
    volatile a f31650e = new a(null, null);

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        public final e f31651a;

        /* renamed from: b  reason: collision with root package name */
        public final File f31652b;

        a(File file, e eVar) {
            this.f31651a = eVar;
            this.f31652b = file;
        }
    }

    public g(int i10, Supplier supplier, String str, j8.a aVar) {
        this.f31646a = i10;
        this.f31649d = aVar;
        this.f31647b = supplier;
        this.f31648c = str;
    }

    private void j() {
        File file = new File((File) this.f31647b.get(), this.f31648c);
        i(file);
        this.f31650e = new a(file, new k8.a(file, this.f31646a, this.f31649d));
    }

    private boolean m() {
        File file;
        a aVar = this.f31650e;
        if (aVar.f31651a != null && (file = aVar.f31652b) != null && file.exists()) {
            return false;
        }
        return true;
    }

    @Override // k8.e
    public void a() {
        l().a();
    }

    @Override // k8.e
    public void b() {
        try {
            l().b();
        } catch (IOException e10) {
            q8.a.j(f31645f, "purgeUnexpectedResources", e10);
        }
    }

    @Override // k8.e
    public boolean c(String str, Object obj) {
        return l().c(str, obj);
    }

    @Override // k8.e
    public e.b d(String str, Object obj) {
        return l().d(str, obj);
    }

    @Override // k8.e
    public boolean e(String str, Object obj) {
        return l().e(str, obj);
    }

    @Override // k8.e
    public i8.a f(String str, Object obj) {
        return l().f(str, obj);
    }

    @Override // k8.e
    public Collection g() {
        return l().g();
    }

    @Override // k8.e
    public long h(e.a aVar) {
        return l().h(aVar);
    }

    void i(File file) {
        try {
            o8.c.a(file);
            q8.a.a(f31645f, "Created cache directory %s", file.getAbsolutePath());
        } catch (c.a e10) {
            this.f31649d.a(a.EnumC0418a.WRITE_CREATE_DIR, f31645f, "createRootDirectoryIfNecessary", e10);
            throw e10;
        }
    }

    @Override // k8.e
    public boolean isExternal() {
        try {
            return l().isExternal();
        } catch (IOException unused) {
            return false;
        }
    }

    void k() {
        if (this.f31650e.f31651a != null && this.f31650e.f31652b != null) {
            o8.a.b(this.f31650e.f31652b);
        }
    }

    synchronized e l() {
        try {
            if (m()) {
                k();
                j();
            }
        } catch (Throwable th2) {
            throw th2;
        }
        return (e) p8.j.g(this.f31650e.f31651a);
    }

    @Override // k8.e
    public long remove(String str) {
        return l().remove(str);
    }
}
