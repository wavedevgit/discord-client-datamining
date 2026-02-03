package y4;

import android.os.StatFs;
import java.io.Closeable;
import java.io.File;
import js.m0;
import kotlinx.coroutines.CoroutineDispatcher;
import lu.c0;
import lu.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface a {

    /* renamed from: y4.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0732a {

        /* renamed from: a  reason: collision with root package name */
        private c0 f53692a;

        /* renamed from: f  reason: collision with root package name */
        private long f53697f;

        /* renamed from: b  reason: collision with root package name */
        private h f53693b = h.f37308b;

        /* renamed from: c  reason: collision with root package name */
        private double f53694c = 0.02d;

        /* renamed from: d  reason: collision with root package name */
        private long f53695d = 10485760;

        /* renamed from: e  reason: collision with root package name */
        private long f53696e = 262144000;

        /* renamed from: g  reason: collision with root package name */
        private CoroutineDispatcher f53698g = m0.b();

        public final a a() {
            long j10;
            c0 c0Var = this.f53692a;
            if (c0Var != null) {
                if (this.f53694c > 0.0d) {
                    try {
                        File file = c0Var.toFile();
                        file.mkdir();
                        StatFs statFs = new StatFs(file.getAbsolutePath());
                        j10 = kotlin.ranges.d.o((long) (this.f53694c * statFs.getBlockCountLong() * statFs.getBlockSizeLong()), this.f53695d, this.f53696e);
                    } catch (Exception unused) {
                        j10 = this.f53695d;
                    }
                } else {
                    j10 = this.f53697f;
                }
                return new e(j10, c0Var, this.f53693b, this.f53698g);
            }
            throw new IllegalStateException("directory == null");
        }

        public final C0732a b(File file) {
            return c(c0.a.d(c0.f37264e, file, false, 1, null));
        }

        public final C0732a c(c0 c0Var) {
            this.f53692a = c0Var;
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
