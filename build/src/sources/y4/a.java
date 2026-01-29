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
        private c0 f53943a;

        /* renamed from: f  reason: collision with root package name */
        private long f53948f;

        /* renamed from: b  reason: collision with root package name */
        private h f53944b = h.f31257b;

        /* renamed from: c  reason: collision with root package name */
        private double f53945c = 0.02d;

        /* renamed from: d  reason: collision with root package name */
        private long f53946d = 10485760;

        /* renamed from: e  reason: collision with root package name */
        private long f53947e = 262144000;

        /* renamed from: g  reason: collision with root package name */
        private CoroutineDispatcher f53949g = m0.b();

        public final a a() {
            long j10;
            c0 c0Var = this.f53943a;
            if (c0Var != null) {
                if (this.f53945c > 0.0d) {
                    try {
                        File file = c0Var.toFile();
                        file.mkdir();
                        StatFs statFs = new StatFs(file.getAbsolutePath());
                        j10 = kotlin.ranges.d.o((long) (this.f53945c * statFs.getBlockCountLong() * statFs.getBlockSizeLong()), this.f53946d, this.f53947e);
                    } catch (Exception unused) {
                        j10 = this.f53946d;
                    }
                } else {
                    j10 = this.f53948f;
                }
                return new e(j10, c0Var, this.f53944b, this.f53949g);
            }
            throw new IllegalStateException("directory == null");
        }

        public final C0750a b(c0 c0Var) {
            this.f53943a = c0Var;
            return this;
        }

        public final C0750a c(File file) {
            return b(c0.a.d(c0.f31213e, file, false, 1, null));
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
