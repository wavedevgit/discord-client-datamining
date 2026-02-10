package y4;

import android.os.StatFs;
import java.io.Closeable;
import java.io.File;
import kotlinx.coroutines.CoroutineDispatcher;
import ps.m0;
import ru.c0;
import ru.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface a {

    /* renamed from: y4.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0778a {

        /* renamed from: a  reason: collision with root package name */
        private c0 f55454a;

        /* renamed from: f  reason: collision with root package name */
        private long f55459f;

        /* renamed from: b  reason: collision with root package name */
        private h f55455b = h.f49398b;

        /* renamed from: c  reason: collision with root package name */
        private double f55456c = 0.02d;

        /* renamed from: d  reason: collision with root package name */
        private long f55457d = 10485760;

        /* renamed from: e  reason: collision with root package name */
        private long f55458e = 262144000;

        /* renamed from: g  reason: collision with root package name */
        private CoroutineDispatcher f55460g = m0.b();

        public final a a() {
            long j10;
            c0 c0Var = this.f55454a;
            if (c0Var != null) {
                if (this.f55456c > 0.0d) {
                    try {
                        File file = c0Var.toFile();
                        file.mkdir();
                        StatFs statFs = new StatFs(file.getAbsolutePath());
                        j10 = kotlin.ranges.d.o((long) (this.f55456c * statFs.getBlockCountLong() * statFs.getBlockSizeLong()), this.f55457d, this.f55458e);
                    } catch (Exception unused) {
                        j10 = this.f55457d;
                    }
                } else {
                    j10 = this.f55459f;
                }
                return new e(j10, c0Var, this.f55455b, this.f55460g);
            }
            throw new IllegalStateException("directory == null");
        }

        public final C0778a b(File file) {
            return c(c0.a.d(c0.f49354e, file, false, 1, null));
        }

        public final C0778a c(c0 c0Var) {
            this.f55454a = c0Var;
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
        c0 getData();

        c0 getMetadata();

        b x1();
    }

    b a(String str);

    c b(String str);

    h getFileSystem();
}
