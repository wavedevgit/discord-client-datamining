package y4;

import android.os.StatFs;
import java.io.Closeable;
import java.io.File;
import kotlinx.coroutines.CoroutineDispatcher;
import os.m0;
import qu.c0;
import qu.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface a {

    /* renamed from: y4.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0739a {

        /* renamed from: a  reason: collision with root package name */
        private c0 f54929a;

        /* renamed from: f  reason: collision with root package name */
        private long f54934f;

        /* renamed from: b  reason: collision with root package name */
        private h f54930b = h.f48232b;

        /* renamed from: c  reason: collision with root package name */
        private double f54931c = 0.02d;

        /* renamed from: d  reason: collision with root package name */
        private long f54932d = 10485760;

        /* renamed from: e  reason: collision with root package name */
        private long f54933e = 262144000;

        /* renamed from: g  reason: collision with root package name */
        private CoroutineDispatcher f54935g = m0.b();

        public final a a() {
            long j10;
            c0 c0Var = this.f54929a;
            if (c0Var != null) {
                if (this.f54931c > 0.0d) {
                    try {
                        File file = c0Var.toFile();
                        file.mkdir();
                        StatFs statFs = new StatFs(file.getAbsolutePath());
                        j10 = kotlin.ranges.d.o((long) (this.f54931c * statFs.getBlockCountLong() * statFs.getBlockSizeLong()), this.f54932d, this.f54933e);
                    } catch (Exception unused) {
                        j10 = this.f54932d;
                    }
                } else {
                    j10 = this.f54934f;
                }
                return new e(j10, c0Var, this.f54930b, this.f54935g);
            }
            throw new IllegalStateException("directory == null");
        }

        public final C0739a b(File file) {
            return c(c0.a.d(c0.f48188e, file, false, 1, null));
        }

        public final C0739a c(c0 c0Var) {
            this.f54929a = c0Var;
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
        b B1();

        c0 getData();

        c0 getMetadata();
    }

    b a(String str);

    c b(String str);

    h getFileSystem();
}
