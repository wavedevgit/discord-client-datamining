package cu;

import iu.x;
import iu.y;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import kotlin.jvm.internal.Intrinsics;
import okio.Sink;
import okio.Source;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface a {

    /* renamed from: a  reason: collision with root package name */
    public static final C0270a f21436a = C0270a.f21438a;

    /* renamed from: b  reason: collision with root package name */
    public static final a f21437b = new C0270a.C0271a();

    /* renamed from: cu.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0270a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ C0270a f21438a = new C0270a();

        /* renamed from: cu.a$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        private static final class C0271a implements a {
            @Override // cu.a
            public void a(File directory) {
                Intrinsics.checkNotNullParameter(directory, "directory");
                File[] listFiles = directory.listFiles();
                if (listFiles != null) {
                    for (File file : listFiles) {
                        if (file.isDirectory()) {
                            Intrinsics.checkNotNullExpressionValue(file, "file");
                            a(file);
                        }
                        if (!file.delete()) {
                            throw new IOException("failed to delete " + file);
                        }
                    }
                    return;
                }
                throw new IOException("not a readable directory: " + directory);
            }

            @Override // cu.a
            public boolean b(File file) {
                Intrinsics.checkNotNullParameter(file, "file");
                return file.exists();
            }

            @Override // cu.a
            public Sink c(File file) {
                Intrinsics.checkNotNullParameter(file, "file");
                try {
                    return x.a(file);
                } catch (FileNotFoundException unused) {
                    file.getParentFile().mkdirs();
                    return x.a(file);
                }
            }

            @Override // cu.a
            public long d(File file) {
                Intrinsics.checkNotNullParameter(file, "file");
                return file.length();
            }

            @Override // cu.a
            public Source e(File file) {
                Intrinsics.checkNotNullParameter(file, "file");
                return x.j(file);
            }

            @Override // cu.a
            public Sink f(File file) {
                Sink g10;
                Sink g11;
                Intrinsics.checkNotNullParameter(file, "file");
                try {
                    g11 = y.g(file, false, 1, null);
                    return g11;
                } catch (FileNotFoundException unused) {
                    file.getParentFile().mkdirs();
                    g10 = y.g(file, false, 1, null);
                    return g10;
                }
            }

            @Override // cu.a
            public void g(File from, File to2) {
                Intrinsics.checkNotNullParameter(from, "from");
                Intrinsics.checkNotNullParameter(to2, "to");
                h(to2);
                if (from.renameTo(to2)) {
                    return;
                }
                throw new IOException("failed to rename " + from + " to " + to2);
            }

            @Override // cu.a
            public void h(File file) {
                Intrinsics.checkNotNullParameter(file, "file");
                if (!file.delete() && file.exists()) {
                    throw new IOException("failed to delete " + file);
                }
            }

            public String toString() {
                return "FileSystem.SYSTEM";
            }
        }

        private C0270a() {
        }
    }

    void a(File file);

    boolean b(File file);

    Sink c(File file);

    long d(File file);

    Source e(File file);

    Sink f(File file);

    void g(File file, File file2);

    void h(File file);
}
