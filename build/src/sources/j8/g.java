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
    private static final Class f31669f = g.class;

    /* renamed from: a  reason: collision with root package name */
    private final int f31670a;

    /* renamed from: b  reason: collision with root package name */
    private final Supplier f31671b;

    /* renamed from: c  reason: collision with root package name */
    private final String f31672c;

    /* renamed from: d  reason: collision with root package name */
    private final i8.a f31673d;

    /* renamed from: e  reason: collision with root package name */
    volatile a f31674e = new a(null, null);

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        public final e f31675a;

        /* renamed from: b  reason: collision with root package name */
        public final File f31676b;

        a(File file, e eVar) {
            this.f31675a = eVar;
            this.f31676b = file;
        }
    }

    public g(int i10, Supplier supplier, String str, i8.a aVar) {
        this.f31670a = i10;
        this.f31673d = aVar;
        this.f31671b = supplier;
        this.f31672c = str;
    }

    private void j() {
        File file = new File((File) this.f31671b.get(), this.f31672c);
        i(file);
        this.f31674e = new a(file, new j8.a(file, this.f31670a, this.f31673d));
    }

    private boolean m() {
        File file;
        a aVar = this.f31674e;
        if (aVar.f31675a != null && (file = aVar.f31676b) != null && file.exists()) {
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
            p8.a.j(f31669f, "purgeUnexpectedResources", e10);
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
            p8.a.a(f31669f, "Created cache directory %s", file.getAbsolutePath());
        } catch (c.a e10) {
            this.f31673d.a(a.EnumC0373a.WRITE_CREATE_DIR, f31669f, "createRootDirectoryIfNecessary", e10);
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
        if (this.f31674e.f31675a != null && this.f31674e.f31676b != null) {
            n8.a.b(this.f31674e.f31676b);
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
        return (e) o8.j.g(this.f31674e.f31675a);
    }

    @Override // j8.e
    public long remove(String str) {
        return l().remove(str);
    }
}
