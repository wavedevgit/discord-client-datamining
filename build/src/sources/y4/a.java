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
        private c0 f54977a;

        /* renamed from: f  reason: collision with root package name */
        private long f54982f;

        /* renamed from: b  reason: collision with root package name */
        private h f54978b = h.f48280b;

        /* renamed from: c  reason: collision with root package name */
        private double f54979c = 0.02d;

        /* renamed from: d  reason: collision with root package name */
        private long f54980d = 10485760;

        /* renamed from: e  reason: collision with root package name */
        private long f54981e = 262144000;

        /* renamed from: g  reason: collision with root package name */
        private CoroutineDispatcher f54983g = m0.b();

        public final a a() {
            long j10;
            c0 c0Var = this.f54977a;
            if (c0Var != null) {
                if (this.f54979c > 0.0d) {
                    try {
                        File file = c0Var.toFile();
                        file.mkdir();
                        StatFs statFs = new StatFs(file.getAbsolutePath());
                        j10 = kotlin.ranges.d.o((long) (this.f54979c * statFs.getBlockCountLong() * statFs.getBlockSizeLong()), this.f54980d, this.f54981e);
                    } catch (Exception unused) {
                        j10 = this.f54980d;
                    }
                } else {
                    j10 = this.f54982f;
                }
                return new e(j10, c0Var, this.f54978b, this.f54983g);
            }
            throw new IllegalStateException("directory == null");
        }

        public final C0739a b(File file) {
            return c(c0.a.d(c0.f48236e, file, false, 1, null));
        }

        public final C0739a c(c0 c0Var) {
            this.f54977a = c0Var;
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
