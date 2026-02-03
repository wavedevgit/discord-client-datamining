package j8;

import android.os.Environment;
import i8.a;
import j8.e;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.TimeUnit;
import n8.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a implements j8.e {

    /* renamed from: f  reason: collision with root package name */
    private static final Class f31621f = a.class;

    /* renamed from: g  reason: collision with root package name */
    static final long f31622g = TimeUnit.MINUTES.toMillis(30);

    /* renamed from: a  reason: collision with root package name */
    private final File f31623a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f31624b;

    /* renamed from: c  reason: collision with root package name */
    private final File f31625c;

    /* renamed from: d  reason: collision with root package name */
    private final i8.a f31626d;

    /* renamed from: e  reason: collision with root package name */
    private final v8.a f31627e;

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: j8.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class C0424a implements n8.b {

        /* renamed from: a  reason: collision with root package name */
        private final List f31628a;

        @Override // n8.b
        public void b(File file) {
            c u10 = a.this.u(file);
            if (u10 != null && u10.f31634a == ".cnt") {
                this.f31628a.add(new b(u10.f31635b, file));
            }
        }

        public List d() {
            return Collections.unmodifiableList(this.f31628a);
        }

        private C0424a() {
            this.f31628a = new ArrayList();
        }

        @Override // n8.b
        public void a(File file) {
        }

        @Override // n8.b
        public void c(File file) {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static class b implements e.a {

        /* renamed from: a  reason: collision with root package name */
        private final String f31630a;

        /* renamed from: b  reason: collision with root package name */
        private final h8.b f31631b;

        /* renamed from: c  reason: collision with root package name */
        private long f31632c;

        /* renamed from: d  reason: collision with root package name */
        private long f31633d;

        @Override // j8.e.a
        public long a() {
            if (this.f31633d < 0) {
                this.f31633d = this.f31631b.d().lastModified();
            }
            return this.f31633d;
        }

        public h8.b b() {
            return this.f31631b;
        }

        @Override // j8.e.a
        public String getId() {
            return this.f31630a;
        }

        @Override // j8.e.a
        public long getSize() {
            if (this.f31632c < 0) {
                this.f31632c = this.f31631b.size();
            }
            return this.f31632c;
        }

        private b(String str, File file) {
            o8.j.g(file);
            this.f31630a = (String) o8.j.g(str);
            this.f31631b = h8.b.b(file);
            this.f31632c = -1L;
            this.f31633d = -1L;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        public final String f31634a;

        /* renamed from: b  reason: collision with root package name */
        public final String f31635b;

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
            return File.createTempFile(this.f31635b + ".", ".tmp", file);
        }

        public String c(String str) {
            return str + File.separator + this.f31635b + this.f31634a;
        }

        public String toString() {
            return this.f31634a + "(" + this.f31635b + ")";
        }

        private c(String str, String str2) {
            this.f31634a = str;
            this.f31635b = str2;
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
        private final String f31636a;

        /* renamed from: b  reason: collision with root package name */
        final File f31637b;

        public e(String str, File file) {
            this.f31636a = str;
            this.f31637b = file;
        }

        @Override // j8.e.b
        public h8.a a(Object obj) {
            return c(obj, a.this.f31627e.now());
        }

        @Override // j8.e.b
        public void b(i8.i iVar, Object obj) {
            try {
                FileOutputStream fileOutputStream = new FileOutputStream(this.f31637b);
                try {
                    o8.c cVar = new o8.c(fileOutputStream);
                    iVar.a(cVar);
                    cVar.flush();
                    long a10 = cVar.a();
                    fileOutputStream.close();
                    if (this.f31637b.length() == a10) {
                        return;
                    }
                    throw new d(a10, this.f31637b.length());
                } catch (Throwable th2) {
                    fileOutputStream.close();
                    throw th2;
                }
            } catch (FileNotFoundException e10) {
                a.this.f31626d.a(a.EnumC0373a.WRITE_UPDATE_FILE_NOT_FOUND, a.f31621f, "updateResource", e10);
                throw e10;
            }
        }

        public h8.a c(Object obj, long j10) {
            a.EnumC0373a enumC0373a;
            File q10 = a.this.q(this.f31636a);
            try {
                n8.c.b(this.f31637b, q10);
                if (q10.exists()) {
                    q10.setLastModified(j10);
                }
                return h8.b.b(q10);
            } catch (c.d e10) {
                Throwable cause = e10.getCause();
                if (cause != null) {
                    if (!(cause instanceof c.C0519c)) {
                        if (cause instanceof FileNotFoundException) {
                            enumC0373a = a.EnumC0373a.WRITE_RENAME_FILE_TEMPFILE_NOT_FOUND;
                        } else {
                            enumC0373a = a.EnumC0373a.WRITE_RENAME_FILE_OTHER;
                        }
                    } else {
                        enumC0373a = a.EnumC0373a.WRITE_RENAME_FILE_TEMPFILE_PARENT_NOT_FOUND;
                    }
                } else {
                    enumC0373a = a.EnumC0373a.WRITE_RENAME_FILE_OTHER;
                }
                a.this.f31626d.a(enumC0373a, a.f31621f, "commit", e10);
                throw e10;
            }
        }

        @Override // j8.e.b
        public boolean k() {
            if (this.f31637b.exists() && !this.f31637b.delete()) {
                return false;
            }
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private class f implements n8.b {

        /* renamed from: a  reason: collision with root package name */
        private boolean f31639a;

        private boolean d(File file) {
            c u10 = a.this.u(file);
            boolean z10 = false;
            if (u10 == null) {
                return false;
            }
            String str = u10.f31634a;
            if (str == ".tmp") {
                return e(file);
            }
            if (str == ".cnt") {
                z10 = true;
            }
            o8.j.i(z10);
            return true;
        }

        private boolean e(File file) {
            if (file.lastModified() > a.this.f31627e.now() - a.f31622g) {
                return true;
            }
            return false;
        }

        @Override // n8.b
        public void a(File file) {
            if (!a.this.f31623a.equals(file) && !this.f31639a) {
                file.delete();
            }
            if (this.f31639a && file.equals(a.this.f31625c)) {
                this.f31639a = false;
            }
        }

        @Override // n8.b
        public void b(File file) {
            if (this.f31639a && d(file)) {
                return;
            }
            file.delete();
        }

        @Override // n8.b
        public void c(File file) {
            if (!this.f31639a && file.equals(a.this.f31625c)) {
                this.f31639a = true;
            }
        }

        private f() {
        }
    }

    public a(File file, int i10, i8.a aVar) {
        o8.j.g(file);
        this.f31623a = file;
        this.f31624b = y(file, aVar);
        this.f31625c = new File(file, x(i10));
        this.f31626d = aVar;
        B();
        this.f31627e = v8.d.a();
    }

    private boolean A(String str, boolean z10) {
        File q10 = q(str);
        boolean exists = q10.exists();
        if (z10 && exists) {
            q10.setLastModified(this.f31627e.now());
        }
        return exists;
    }

    private void B() {
        if (this.f31623a.exists()) {
            if (!this.f31625c.exists()) {
                n8.a.b(this.f31623a);
            } else {
                return;
            }
        }
        try {
            n8.c.a(this.f31625c);
        } catch (c.a unused) {
            i8.a aVar = this.f31626d;
            a.EnumC0373a enumC0373a = a.EnumC0373a.WRITE_CREATE_DIR;
            Class cls = f31621f;
            aVar.a(enumC0373a, cls, "version directory could not be created: " + this.f31625c, null);
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
        return cVar.c(w(cVar.f31635b));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public c u(File file) {
        c b10 = c.b(file);
        if (b10 == null || !v(b10.f31635b).equals(file.getParentFile())) {
            return null;
        }
        return b10;
    }

    private File v(String str) {
        return new File(w(str));
    }

    private String w(String str) {
        String valueOf = String.valueOf(Math.abs(str.hashCode() % 100));
        return this.f31625c + File.separator + valueOf;
    }

    static String x(int i10) {
        return String.format(null, "%s.ols%d.%d", "v2", 100, Integer.valueOf(i10));
    }

    private static boolean y(File file, i8.a aVar) {
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
                a.EnumC0373a enumC0373a = a.EnumC0373a.OTHER;
                Class cls = f31621f;
                aVar.a(enumC0373a, cls, "failed to read folder to check if external: " + str, e);
                return false;
            }
        } catch (Exception e12) {
            aVar.a(a.EnumC0373a.OTHER, f31621f, "failed to get the external storage directory!", e12);
            return false;
        }
    }

    private void z(File file, String str) {
        try {
            n8.c.a(file);
        } catch (c.a e10) {
            this.f31626d.a(a.EnumC0373a.WRITE_CREATE_DIR, f31621f, str, e10);
            throw e10;
        }
    }

    @Override // j8.e
    public void a() {
        n8.a.a(this.f31623a);
    }

    @Override // j8.e
    public long b(e.a aVar) {
        return p(((b) aVar).b().d());
    }

    @Override // j8.e
    public void c() {
        n8.a.c(this.f31623a, new f());
    }

    @Override // j8.e
    public boolean d(String str, Object obj) {
        return A(str, true);
    }

    @Override // j8.e
    public e.b e(String str, Object obj) {
        c cVar = new c(".tmp", str);
        File v10 = v(cVar.f31635b);
        if (!v10.exists()) {
            z(v10, "insert");
        }
        try {
            return new e(str, cVar.a(v10));
        } catch (IOException e10) {
            this.f31626d.a(a.EnumC0373a.WRITE_CREATE_TEMPFILE, f31621f, "insert", e10);
            throw e10;
        }
    }

    @Override // j8.e
    public boolean f(String str, Object obj) {
        return A(str, false);
    }

    @Override // j8.e
    public h8.a g(String str, Object obj) {
        File q10 = q(str);
        if (q10.exists()) {
            q10.setLastModified(this.f31627e.now());
            return h8.b.c(q10);
        }
        return null;
    }

    @Override // j8.e
    public boolean isExternal() {
        return this.f31624b;
    }

    File q(String str) {
        return new File(t(str));
    }

    @Override // j8.e
    /* renamed from: r */
    public List h() {
        C0424a c0424a = new C0424a();
        n8.a.c(this.f31625c, c0424a);
        return c0424a.d();
    }

    @Override // j8.e
    public long remove(String str) {
        return p(q(str));
    }
}
