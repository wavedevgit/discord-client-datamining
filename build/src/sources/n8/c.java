package n8;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import o8.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class c {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a extends IOException {
        public a(String str) {
            super(str);
        }

        public a(String str, Throwable th2) {
            super(str);
            initCause(th2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b extends IOException {
        public b(String str) {
            super(str);
        }
    }

    /* renamed from: n8.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class C0516c extends FileNotFoundException {
        public C0516c(String str) {
            super(str);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class d extends IOException {
        public d(String str, Throwable th2) {
            super(str);
            initCause(th2);
        }
    }

    public static void a(File file) {
        if (file.exists()) {
            if (!file.isDirectory()) {
                if (!file.delete()) {
                    throw new a(file.getAbsolutePath(), new b(file.getAbsolutePath()));
                }
            } else {
                return;
            }
        }
        if (!file.mkdirs() && !file.isDirectory()) {
            throw new a(file.getAbsolutePath());
        }
    }

    public static void b(File file, File file2) {
        Throwable bVar;
        j.g(file);
        j.g(file2);
        file2.delete();
        if (file.renameTo(file2)) {
            return;
        }
        if (!file2.exists()) {
            if (file.getParentFile().exists()) {
                if (!file.exists()) {
                    bVar = new FileNotFoundException(file.getAbsolutePath());
                } else {
                    bVar = null;
                }
            } else {
                bVar = new C0516c(file.getAbsolutePath());
            }
        } else {
            bVar = new b(file2.getAbsolutePath());
        }
        throw new d("Unknown error renaming " + file.getAbsolutePath() + " to " + file2.getAbsolutePath(), bVar);
    }
}
