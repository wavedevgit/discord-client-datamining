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
    private static final Class f29787f = g.class;

    /* renamed from: a  reason: collision with root package name */
    private final int f29788a;

    /* renamed from: b  reason: collision with root package name */
    private final Supplier f29789b;

    /* renamed from: c  reason: collision with root package name */
    private final String f29790c;

    /* renamed from: d  reason: collision with root package name */
    private final i8.a f29791d;

    /* renamed from: e  reason: collision with root package name */
    volatile a f29792e = new a(null, null);

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        public final e f29793a;

        /* renamed from: b  reason: collision with root package name */
        public final File f29794b;

        a(File file, e eVar) {
            this.f29793a = eVar;
            this.f29794b = file;
        }
    }

    public g(int i10, Supplier supplier, String str, i8.a aVar) {
        this.f29788a = i10;
        this.f29791d = aVar;
        this.f29789b = supplier;
        this.f29790c = str;
    }

    private void j() {
        File file = new File((File) this.f29789b.get(), this.f29790c);
        i(file);
        this.f29792e = new a(file, new j8.a(file, this.f29788a, this.f29791d));
    }

    private boolean m() {
        File file;
        a aVar = this.f29792e;
        if (aVar.f29793a != null && (file = aVar.f29794b) != null && file.exists()) {
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
            p8.a.j(f29787f, "purgeUnexpectedResources", e10);
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
            p8.a.a(f29787f, "Created cache directory %s", file.getAbsolutePath());
        } catch (c.a e10) {
            this.f29791d.a(a.EnumC0377a.WRITE_CREATE_DIR, f29787f, "createRootDirectoryIfNecessary", e10);
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
        if (this.f29792e.f29793a != null && this.f29792e.f29794b != null) {
            n8.a.b(this.f29792e.f29794b);
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
        return (e) o8.j.g(this.f29792e.f29793a);
    }

    @Override // j8.e
    public long remove(String str) {
        return l().remove(str);
    }
}
