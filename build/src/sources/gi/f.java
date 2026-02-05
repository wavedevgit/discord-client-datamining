package gi;

import android.content.Context;
import android.util.Log;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final long f24930a;

    /* renamed from: b  reason: collision with root package name */
    private final Context f24931b;

    /* renamed from: c  reason: collision with root package name */
    private File f24932c;

    public f(Context context) {
        this.f24931b = context;
        this.f24930a = context.getPackageManager().getPackageInfo(context.getPackageName(), 0).versionCode;
    }

    public static void l(File file) {
        File[] listFiles;
        if (file.isDirectory() && (listFiles = file.listFiles()) != null) {
            for (File file2 : listFiles) {
                l(file2);
            }
        }
        if (file.exists() && !file.delete()) {
            throw new IOException(String.format("Failed to delete '%s'", file.getAbsolutePath()));
        }
    }

    public static void m(File file) {
        file.setWritable(false, true);
        file.setWritable(false, false);
    }

    public static boolean p(File file) {
        if (!file.canWrite()) {
            return true;
        }
        return false;
    }

    private static File q(File file, String str) {
        File file2 = new File(file, str);
        if (file2.getCanonicalPath().startsWith(file.getCanonicalPath())) {
            return file2;
        }
        throw new IllegalArgumentException("split ID cannot be placed in target directory");
    }

    private final File r() {
        File file = new File(w(), "native-libraries");
        u(file);
        return file;
    }

    private final File s(String str) {
        File q10 = q(r(), str);
        u(q10);
        return q10;
    }

    private final File t() {
        File file = new File(w(), "verified-splits");
        u(file);
        return file;
    }

    private static File u(File file) {
        if (file.exists()) {
            if (!file.isDirectory()) {
                throw new IllegalArgumentException("File input must be directory when it exists.");
            }
        } else {
            file.mkdirs();
            if (!file.isDirectory()) {
                throw new IOException("Unable to create directory: ".concat(String.valueOf(file.getAbsolutePath())));
            }
        }
        return file;
    }

    private final File v() {
        if (this.f24932c == null) {
            Context context = this.f24931b;
            if (context != null) {
                this.f24932c = context.getFilesDir();
            } else {
                throw new IllegalStateException("context must be non-null to populate null filesDir");
            }
        }
        File file = new File(this.f24932c, "splitcompat");
        u(file);
        return file;
    }

    private final File w() {
        File file = new File(v(), Long.toString(this.f24930a));
        u(file);
        return file;
    }

    private static String x(String str) {
        return String.valueOf(str).concat(".apk");
    }

    public final File a(String str) {
        File file = new File(w(), "dex");
        u(file);
        File q10 = q(file, str);
        u(q10);
        return q10;
    }

    public final File b() {
        File file = new File(w(), "unverified-splits");
        u(file);
        return file;
    }

    public final File c(String str, String str2) {
        return q(s(str), str2);
    }

    public final File d() {
        return new File(w(), "lock.tmp");
    }

    public final File e(String str) {
        return q(b(), x(str));
    }

    public final File f(File file) {
        return q(t(), file.getName());
    }

    public final File g(String str) {
        return q(t(), x(str));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final List h() {
        ArrayList arrayList = new ArrayList();
        File[] listFiles = r().listFiles();
        if (listFiles != null) {
            for (File file : listFiles) {
                if (file.isDirectory()) {
                    arrayList.add(file.getName());
                }
            }
        }
        return arrayList;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final Set i(String str) {
        HashSet hashSet = new HashSet();
        File[] listFiles = s(str).listFiles();
        if (listFiles != null) {
            for (File file : listFiles) {
                if (file.isFile()) {
                    hashSet.add(file);
                }
            }
        }
        return hashSet;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final Set j() {
        String name;
        File t10 = t();
        HashSet hashSet = new HashSet();
        File[] listFiles = t10.listFiles();
        if (listFiles != null) {
            for (File file : listFiles) {
                if (file.isFile() && file.getName().endsWith(".apk") && p(file)) {
                    hashSet.add(new c(file, file.getName().substring(0, name.length() - 4)));
                }
            }
        }
        return hashSet;
    }

    public final void k() {
        File v10 = v();
        String[] list = v10.list();
        if (list != null) {
            for (String str : list) {
                if (!str.equals(Long.toString(this.f24930a))) {
                    File file = new File(v10, str);
                    Log.d("SplitCompat", "FileStorage: removing directory for different version code (directory = " + file.toString() + ", current version code = " + this.f24930a + ")");
                    l(file);
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void n(String str) {
        l(s(str));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void o(File file) {
        if (file.getParentFile().getParentFile().equals(r())) {
            l(file);
            return;
        }
        throw new IllegalStateException("File to remove is not a native library");
    }
}
