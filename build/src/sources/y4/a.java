package y4;

import android.os.StatFs;
import gs.m0;
import iu.c0;
import iu.h;
import java.io.Closeable;
import java.io.File;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface a {

    /* renamed from: y4.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0750a {

        /* renamed from: a  reason: collision with root package name */
        private c0 f53959a;

        /* renamed from: f  reason: collision with root package name */
        private long f53964f;

        /* renamed from: b  reason: collision with root package name */
        private h f53960b = h.f31273b;

        /* renamed from: c  reason: collision with root package name */
        private double f53961c = 0.02d;

        /* renamed from: d  reason: collision with root package name */
        private long f53962d = 10485760;

        /* renamed from: e  reason: collision with root package name */
        private long f53963e = 262144000;

        /* renamed from: g  reason: collision with root package name */
        private CoroutineDispatcher f53965g = m0.b();

        public final a a() {
            long j10;
            c0 c0Var = this.f53959a;
            if (c0Var != null) {
                if (this.f53961c > 0.0d) {
                    try {
                        File file = c0Var.toFile();
                        file.mkdir();
                        StatFs statFs = new StatFs(file.getAbsolutePath());
                        j10 = kotlin.ranges.d.o((long) (this.f53961c * statFs.getBlockCountLong() * statFs.getBlockSizeLong()), this.f53962d, this.f53963e);
                    } catch (Exception unused) {
                        j10 = this.f53962d;
                    }
                } else {
                    j10 = this.f53964f;
                }
                return new e(j10, c0Var, this.f53960b, this.f53965g);
            }
            throw new IllegalStateException("directory == null");
        }

        public final C0750a b(c0 c0Var) {
            this.f53959a = c0Var;
            return this;
        }

        public final C0750a c(File file) {
            return b(c0.a.d(c0.f31229e, file, false, 1, null));
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
