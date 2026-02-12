package y4;

import android.os.StatFs;
import av.c0;
import av.h;
import java.io.Closeable;
import java.io.File;
import kotlinx.coroutines.CoroutineDispatcher;
import ys.m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface a {

    /* renamed from: y4.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0772a {

        /* renamed from: a  reason: collision with root package name */
        private c0 f55386a;

        /* renamed from: f  reason: collision with root package name */
        private long f55391f;

        /* renamed from: b  reason: collision with root package name */
        private h f55387b = h.f6270b;

        /* renamed from: c  reason: collision with root package name */
        private double f55388c = 0.02d;

        /* renamed from: d  reason: collision with root package name */
        private long f55389d = 10485760;

        /* renamed from: e  reason: collision with root package name */
        private long f55390e = 262144000;

        /* renamed from: g  reason: collision with root package name */
        private CoroutineDispatcher f55392g = m0.b();

        public final a a() {
            long j10;
            c0 c0Var = this.f55386a;
            if (c0Var != null) {
                if (this.f55388c > 0.0d) {
                    try {
                        File file = c0Var.toFile();
                        file.mkdir();
                        StatFs statFs = new StatFs(file.getAbsolutePath());
                        j10 = kotlin.ranges.d.o((long) (this.f55388c * statFs.getBlockCountLong() * statFs.getBlockSizeLong()), this.f55389d, this.f55390e);
                    } catch (Exception unused) {
                        j10 = this.f55389d;
                    }
                } else {
                    j10 = this.f55391f;
                }
                return new e(j10, c0Var, this.f55387b, this.f55392g);
            }
            throw new IllegalStateException("directory == null");
        }

        public final C0772a b(c0 c0Var) {
            this.f55386a = c0Var;
            return this;
        }

        public final C0772a c(File file) {
            return b(c0.a.d(c0.f6226e, file, false, 1, null));
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
