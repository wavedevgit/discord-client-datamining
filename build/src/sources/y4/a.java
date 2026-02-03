package y4;

import android.os.StatFs;
import hs.m0;
import java.io.Closeable;
import java.io.File;
import ju.c0;
import ju.h;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface a {

    /* renamed from: y4.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0759a {

        /* renamed from: a  reason: collision with root package name */
        private c0 f53934a;

        /* renamed from: f  reason: collision with root package name */
        private long f53939f;

        /* renamed from: b  reason: collision with root package name */
        private h f53935b = h.f32370b;

        /* renamed from: c  reason: collision with root package name */
        private double f53936c = 0.02d;

        /* renamed from: d  reason: collision with root package name */
        private long f53937d = 10485760;

        /* renamed from: e  reason: collision with root package name */
        private long f53938e = 262144000;

        /* renamed from: g  reason: collision with root package name */
        private CoroutineDispatcher f53940g = m0.b();

        public final a a() {
            long j10;
            c0 c0Var = this.f53934a;
            if (c0Var != null) {
                if (this.f53936c > 0.0d) {
                    try {
                        File file = c0Var.toFile();
                        file.mkdir();
                        StatFs statFs = new StatFs(file.getAbsolutePath());
                        j10 = kotlin.ranges.d.o((long) (this.f53936c * statFs.getBlockCountLong() * statFs.getBlockSizeLong()), this.f53937d, this.f53938e);
                    } catch (Exception unused) {
                        j10 = this.f53937d;
                    }
                } else {
                    j10 = this.f53939f;
                }
                return new e(j10, c0Var, this.f53935b, this.f53940g);
            }
            throw new IllegalStateException("directory == null");
        }

        public final C0759a b(File file) {
            return c(c0.a.d(c0.f32326e, file, false, 1, null));
        }

        public final C0759a c(c0 c0Var) {
            this.f53934a = c0Var;
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface b {
        void a();

        c b();

        c0 getData();

        c0 getMetadata();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface c extends Closeable {
        b C1();

        c0 getData();

        c0 getMetadata();
    }

    b a(String str);

    c b(String str);

    h getFileSystem();
}
