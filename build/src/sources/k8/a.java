package k8;

import android.os.Environment;
import j8.a;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.TimeUnit;
import k8.e;
import o8.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a implements k8.e {

    /* renamed from: f  reason: collision with root package name */
    private static final Class f31597f = a.class;

    /* renamed from: g  reason: collision with root package name */
    static final long f31598g = TimeUnit.MINUTES.toMillis(30);

    /* renamed from: a  reason: collision with root package name */
    private final File f31599a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f31600b;

    /* renamed from: c  reason: collision with root package name */
    private final File f31601c;

    /* renamed from: d  reason: collision with root package name */
    private final j8.a f31602d;

    /* renamed from: e  reason: collision with root package name */
    private final w8.a f31603e;

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: k8.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class C0442a implements o8.b {

        /* renamed from: a  reason: collision with root package name */
        private final List f31604a;

        @Override // o8.b
        public void b(File file) {
            c u10 = a.this.u(file);
            if (u10 != null && u10.f31610a == ".cnt") {
                this.f31604a.add(new b(u10.f31611b, file));
            }
        }

        public List d() {
            return Collections.unmodifiableList(this.f31604a);
        }

        private C0442a() {
            this.f31604a = new ArrayList();
        }

        @Override // o8.b
        public void a(File file) {
        }

        @Override // o8.b
        public void c(File file) {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static class b implements e.a {

        /* renamed from: a  reason: collision with root package name */
        private final String f31606a;

        /* renamed from: b  reason: collision with root package name */
        private final i8.b f31607b;

        /* renamed from: c  reason: collision with root package name */
        private long f31608c;

        /* renamed from: d  reason: collision with root package name */
        private long f31609d;

        @Override // k8.e.a
        public long a() {
            if (this.f31609d < 0) {
                this.f31609d = this.f31607b.d().lastModified();
            }
            return this.f31609d;
        }

        public i8.b b() {
            return this.f31607b;
        }

        @Override // k8.e.a
        public String getId() {
            return this.f31606a;
        }

        @Override // k8.e.a
        public long getSize() {
            if (this.f31608c < 0) {
                this.f31608c = this.f31607b.size();
            }
            return this.f31608c;
        }

        private b(String str, File file) {
            p8.j.g(file);
            this.f31606a = (String) p8.j.g(str);
            this.f31607b = i8.b.b(file);
            this.f31608c = -1L;
            this.f31609d = -1L;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        public final String f31610a;

        /* renamed from: b  reason: collision with root package name */
        public final String f31611b;

        public static c b(File file) {
            String s10;
            String name = file.getName();
            int lastIndexOf = name.lastIndexOf(46);
            if (lastIndexOf <= 0 || (s10 = a.s(name.substring(lastIndexOf))) == null) {
                return null;
            }
            String substring = name.substring(0, lastIndexOf);
            if (s10.equals(".tmp")) {
                int lastIndexOf2 = substring.lastIndexOf(46);
                if (lastIndexOf2 <= 0) {
                    return null;
                }
                substring = substring.substring(0, lastIndexOf2);
            }
            return new c(s10, substring);
        }

        public File a(File file) {
            return File.createTempFile(this.f31611b + ".", ".tmp", file);
        }

        public String c(String str) {
            return str + File.separator + this.f31611b + this.f31610a;
        }

        public String toString() {
            return this.f31610a + "(" + this.f31611b + ")";
        }

        private c(String str, String str2) {
            this.f31610a = str;
            this.f31611b = str2;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static class d extends IOException {
        public d(long j10, long j11) {
            super("File was not written completely. Expected: " + j10 + ", found: " + j11);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class e implements e.b {

        /* renamed from: a  reason: collision with root package name */
        private final String f31612a;

        /* renamed from: b  reason: collision with root package name */
        final File f31613b;

        public e(String str, File file) {
            this.f31612a = str;
            this.f31613b = file;
        }

        @Override // k8.e.b
        public i8.a a(Object obj) {
            return c(obj, a.this.f31603e.now());
        }

        @Override // k8.e.b
        public void b(j8.i iVar, Object obj) {
            try {
                FileOutputStream fileOutputStream = new FileOutputStream(this.f31613b);
                try {
                    p8.c cVar = new p8.c(fileOutputStream);
                    iVar.a(cVar);
                    cVar.flush();
                    long a10 = cVar.a();
                    fileOutputStream.close();
                    if (this.f31613b.length() == a10) {
                        return;
                    }
                    throw new d(a10, this.f31613b.length());
                } catch (Throwable th2) {
                    fileOutputStream.close();
                    throw th2;
                }
            } catch (FileNotFoundException e10) {
                a.this.f31602d.a(a.EnumC0418a.WRITE_UPDATE_FILE_NOT_FOUND, a.f31597f, "updateResource", e10);
                throw e10;
            }
        }

        public i8.a c(Object obj, long j10) {
            a.EnumC0418a enumC0418a;
            File q10 = a.this.q(this.f31612a);
            try {
                o8.c.b(this.f31613b, q10);
                if (q10.exists()) {
                    q10.setLastModified(j10);
                }
                return i8.b.b(q10);
            } catch (c.d e10) {
                Throwable cause = e10.getCause();
                if (cause != null) {
                    if (!(cause instanceof c.C0545c)) {
                        if (cause instanceof FileNotFoundException) {
                            enumC0418a = a.EnumC0418a.WRITE_RENAME_FILE_TEMPFILE_NOT_FOUND;
                        } else {
                            enumC0418a = a.EnumC0418a.WRITE_RENAME_FILE_OTHER;
                        }
                    } else {
                        enumC0418a = a.EnumC0418a.WRITE_RENAME_FILE_TEMPFILE_PARENT_NOT_FOUND;
                    }
                } else {
                    enumC0418a = a.EnumC0418a.WRITE_RENAME_FILE_OTHER;
                }
                a.this.f31602d.a(enumC0418a, a.f31597f, "commit", e10);
                throw e10;
            }
        }

        @Override // k8.e.b
        public boolean l() {
            if (this.f31613b.exists() && !this.f31613b.delete()) {
                return false;
            }
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private class f implements o8.b {

        /* renamed from: a  reason: collision with root package name */
        private boolean f31615a;

        private boolean d(File file) {
            c u10 = a.this.u(file);
            boolean z10 = false;
            if (u10 == null) {
                return false;
            }
            String str = u10.f31610a;
            if (str == ".tmp") {
                return e(file);
            }
            if (str == ".cnt") {
                z10 = true;
            }
            p8.j.i(z10);
            return true;
        }

        private boolean e(File file) {
            if (file.lastModified() > a.this.f31603e.now() - a.f31598g) {
                return true;
            }
            return false;
        }

        @Override // o8.b
        public void a(File file) {
            if (!a.this.f31599a.equals(file) && !this.f31615a) {
                file.delete();
            }
            if (this.f31615a && file.equals(a.this.f31601c)) {
                this.f31615a = false;
            }
        }

        @Override // o8.b
        public void b(File file) {
            if (this.f31615a && d(file)) {
                return;
            }
            file.delete();
        }

        @Override // o8.b
        public void c(File file) {
            if (!this.f31615a && file.equals(a.this.f31601c)) {
                this.f31615a = true;
            }
        }

        private f() {
        }
    }

    public a(File file, int i10, j8.a aVar) {
        p8.j.g(file);
        this.f31599a = file;
        this.f31600b = y(file, aVar);
        this.f31601c = new File(file, x(i10));
        this.f31602d = aVar;
        B();
        this.f31603e = w8.d.a();
    }

    private boolean A(String str, boolean z10) {
        File q10 = q(str);
        boolean exists = q10.exists();
        if (z10 && exists) {
            q10.setLastModified(this.f31603e.now());
        }
        return exists;
    }

    private void B() {
        if (this.f31599a.exists()) {
            if (!this.f31601c.exists()) {
                o8.a.b(this.f31599a);
            } else {
                return;
            }
        }
        try {
            o8.c.a(this.f31601c);
        } catch (c.a unused) {
            j8.a aVar = this.f31602d;
            a.EnumC0418a enumC0418a = a.EnumC0418a.WRITE_CREATE_DIR;
            Class cls = f31597f;
            aVar.a(enumC0418a, cls, "version directory could not be created: " + this.f31601c, null);
        }
    }

    private long p(File file) {
        if (!file.exists()) {
            return 0L;
        }
        long length = file.length();
        if (file.delete()) {
            return length;
        }
        return -1L;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static String s(String str) {
        if (".cnt".equals(str)) {
            return ".cnt";
        }
        if (".tmp".equals(str)) {
            return ".tmp";
        }
        return null;
    }

    private String t(String str) {
        c cVar = new c(".cnt", str);
        return cVar.c(w(cVar.f31611b));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public c u(File file) {
        c b10 = c.b(file);
        if (b10 == null || !v(b10.f31611b).equals(file.getParentFile())) {
            return null;
        }
        return b10;
    }

    private File v(String str) {
        return new File(w(str));
    }

    private String w(String str) {
        String valueOf = String.valueOf(Math.abs(str.hashCode() % 100));
        return this.f31601c + File.separator + valueOf;
    }

    static String x(int i10) {
        return String.format(null, "%s.ols%d.%d", "v2", 100, Integer.valueOf(i10));
    }

    private static boolean y(File file, j8.a aVar) {
        String str;
        try {
            File externalStorageDirectory = Environment.getExternalStorageDirectory();
            if (externalStorageDirectory == null) {
                return false;
            }
            String file2 = externalStorageDirectory.toString();
            try {
                str = file.getCanonicalPath();
            } catch (IOException e10) {
                e = e10;
                str = null;
            }
            try {
                return str.contains(file2);
            } catch (IOException e11) {
                e = e11;
                a.EnumC0418a enumC0418a = a.EnumC0418a.OTHER;
                Class cls = f31597f;
                aVar.a(enumC0418a, cls, "failed to read folder to check if external: " + str, e);
                return false;
            }
        } catch (Exception e12) {
            aVar.a(a.EnumC0418a.OTHER, f31597f, "failed to get the external storage directory!", e12);
            return false;
        }
    }

    private void z(File file, String str) {
        try {
            o8.c.a(file);
        } catch (c.a e10) {
            this.f31602d.a(a.EnumC0418a.WRITE_CREATE_DIR, f31597f, str, e10);
            throw e10;
        }
    }

    @Override // k8.e
    public void a() {
        o8.a.a(this.f31599a);
    }

    @Override // k8.e
    public void b() {
        o8.a.c(this.f31599a, new f());
    }

    @Override // k8.e
    public boolean c(String str, Object obj) {
        return A(str, true);
    }

    @Override // k8.e
    public e.b d(String str, Object obj) {
        c cVar = new c(".tmp", str);
        File v10 = v(cVar.f31611b);
        if (!v10.exists()) {
            z(v10, "insert");
        }
        try {
            return new e(str, cVar.a(v10));
        } catch (IOException e10) {
            this.f31602d.a(a.EnumC0418a.WRITE_CREATE_TEMPFILE, f31597f, "insert", e10);
            throw e10;
        }
    }

    @Override // k8.e
    public boolean e(String str, Object obj) {
        return A(str, false);
    }

    @Override // k8.e
    public i8.a f(String str, Object obj) {
        File q10 = q(str);
        if (q10.exists()) {
            q10.setLastModified(this.f31603e.now());
            return i8.b.c(q10);
        }
        return null;
    }

    @Override // k8.e
    public long h(e.a aVar) {
        return p(((b) aVar).b().d());
    }

    @Override // k8.e
    public boolean isExternal() {
        return this.f31600b;
    }

    File q(String str) {
        return new File(t(str));
    }

    @Override // k8.e
    /* renamed from: r */
    public List g() {
        C0442a c0442a = new C0442a();
        o8.a.c(this.f31601c, c0442a);
        return c0442a.d();
    }

    @Override // k8.e
    public long remove(String str) {
        return p(q(str));
    }
}
