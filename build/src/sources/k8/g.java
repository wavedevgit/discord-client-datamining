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
    private static final Class f32213f = g.class;

    /* renamed from: a  reason: collision with root package name */
    private final int f32214a;

    /* renamed from: b  reason: collision with root package name */
    private final Supplier f32215b;

    /* renamed from: c  reason: collision with root package name */
    private final String f32216c;

    /* renamed from: d  reason: collision with root package name */
    private final j8.a f32217d;

    /* renamed from: e  reason: collision with root package name */
    volatile a f32218e = new a(null, null);

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        public final e f32219a;

        /* renamed from: b  reason: collision with root package name */
        public final File f32220b;

        a(File file, e eVar) {
            this.f32219a = eVar;
            this.f32220b = file;
        }
    }

    public g(int i10, Supplier supplier, String str, j8.a aVar) {
        this.f32214a = i10;
        this.f32217d = aVar;
        this.f32215b = supplier;
        this.f32216c = str;
    }

    private void j() {
        File file = new File((File) this.f32215b.get(), this.f32216c);
        i(file);
        this.f32218e = new a(file, new k8.a(file, this.f32214a, this.f32217d));
    }

    private boolean m() {
        File file;
        a aVar = this.f32218e;
        if (aVar.f32219a != null && (file = aVar.f32220b) != null && file.exists()) {
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
            q8.a.j(f32213f, "purgeUnexpectedResources", e10);
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
            q8.a.a(f32213f, "Created cache directory %s", file.getAbsolutePath());
        } catch (c.a e10) {
            this.f32217d.a(a.EnumC0418a.WRITE_CREATE_DIR, f32213f, "createRootDirectoryIfNecessary", e10);
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
        if (this.f32218e.f32219a != null && this.f32218e.f32220b != null) {
            o8.a.b(this.f32218e.f32220b);
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
        return (e) p8.j.g(this.f32218e.f32219a);
    }

    @Override // k8.e
    public long remove(String str) {
        return l().remove(str);
    }
}
