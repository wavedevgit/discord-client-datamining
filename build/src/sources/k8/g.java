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
    private static final Class f30786f = g.class;

    /* renamed from: a  reason: collision with root package name */
    private final int f30787a;

    /* renamed from: b  reason: collision with root package name */
    private final Supplier f30788b;

    /* renamed from: c  reason: collision with root package name */
    private final String f30789c;

    /* renamed from: d  reason: collision with root package name */
    private final j8.a f30790d;

    /* renamed from: e  reason: collision with root package name */
    volatile a f30791e = new a(null, null);

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        public final e f30792a;

        /* renamed from: b  reason: collision with root package name */
        public final File f30793b;

        a(File file, e eVar) {
            this.f30792a = eVar;
            this.f30793b = file;
        }
    }

    public g(int i10, Supplier supplier, String str, j8.a aVar) {
        this.f30787a = i10;
        this.f30790d = aVar;
        this.f30788b = supplier;
        this.f30789c = str;
    }

    private void j() {
        File file = new File((File) this.f30788b.get(), this.f30789c);
        i(file);
        this.f30791e = new a(file, new k8.a(file, this.f30787a, this.f30790d));
    }

    private boolean m() {
        File file;
        a aVar = this.f30791e;
        if (aVar.f30792a != null && (file = aVar.f30793b) != null && file.exists()) {
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
            q8.a.j(f30786f, "purgeUnexpectedResources", e10);
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
            q8.a.a(f30786f, "Created cache directory %s", file.getAbsolutePath());
        } catch (c.a e10) {
            this.f30790d.a(a.EnumC0450a.WRITE_CREATE_DIR, f30786f, "createRootDirectoryIfNecessary", e10);
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
        if (this.f30791e.f30792a != null && this.f30791e.f30793b != null) {
            o8.a.b(this.f30791e.f30793b);
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
        return (e) p8.j.g(this.f30791e.f30792a);
    }

    @Override // k8.e
    public long remove(String str) {
        return l().remove(str);
    }
}
