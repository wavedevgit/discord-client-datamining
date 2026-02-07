package j8;

import com.facebook.common.internal.Supplier;
import i8.a;
import j8.e;
import java.io.File;
import java.io.IOException;
import java.util.Collection;
import n8.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class g implements e {

    /* renamed from: f  reason: collision with root package name */
    private static final Class f29835f = g.class;

    /* renamed from: a  reason: collision with root package name */
    private final int f29836a;

    /* renamed from: b  reason: collision with root package name */
    private final Supplier f29837b;

    /* renamed from: c  reason: collision with root package name */
    private final String f29838c;

    /* renamed from: d  reason: collision with root package name */
    private final i8.a f29839d;

    /* renamed from: e  reason: collision with root package name */
    volatile a f29840e = new a(null, null);

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        public final e f29841a;

        /* renamed from: b  reason: collision with root package name */
        public final File f29842b;

        a(File file, e eVar) {
            this.f29841a = eVar;
            this.f29842b = file;
        }
    }

    public g(int i10, Supplier supplier, String str, i8.a aVar) {
        this.f29836a = i10;
        this.f29839d = aVar;
        this.f29837b = supplier;
        this.f29838c = str;
    }

    private void j() {
        File file = new File((File) this.f29837b.get(), this.f29838c);
        i(file);
        this.f29840e = new a(file, new j8.a(file, this.f29836a, this.f29839d));
    }

    private boolean m() {
        File file;
        a aVar = this.f29840e;
        if (aVar.f29841a != null && (file = aVar.f29842b) != null && file.exists()) {
            return false;
        }
        return true;
    }

    @Override // j8.e
    public void a() {
        l().a();
    }

    @Override // j8.e
    public long b(e.a aVar) {
        return l().b(aVar);
    }

    @Override // j8.e
    public void c() {
        try {
            l().c();
        } catch (IOException e10) {
            p8.a.j(f29835f, "purgeUnexpectedResources", e10);
        }
    }

    @Override // j8.e
    public boolean d(String str, Object obj) {
        return l().d(str, obj);
    }

    @Override // j8.e
    public e.b e(String str, Object obj) {
        return l().e(str, obj);
    }

    @Override // j8.e
    public boolean f(String str, Object obj) {
        return l().f(str, obj);
    }

    @Override // j8.e
    public h8.a g(String str, Object obj) {
        return l().g(str, obj);
    }

    @Override // j8.e
    public Collection h() {
        return l().h();
    }

    void i(File file) {
        try {
            n8.c.a(file);
            p8.a.a(f29835f, "Created cache directory %s", file.getAbsolutePath());
        } catch (c.a e10) {
            this.f29839d.a(a.EnumC0377a.WRITE_CREATE_DIR, f29835f, "createRootDirectoryIfNecessary", e10);
            throw e10;
        }
    }

    @Override // j8.e
    public boolean isExternal() {
        try {
            return l().isExternal();
        } catch (IOException unused) {
            return false;
        }
    }

    void k() {
        if (this.f29840e.f29841a != null && this.f29840e.f29842b != null) {
            n8.a.b(this.f29840e.f29842b);
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
        return (e) o8.j.g(this.f29840e.f29841a);
    }

    @Override // j8.e
    public long remove(String str) {
        return l().remove(str);
    }
}
