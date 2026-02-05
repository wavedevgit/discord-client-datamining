package t8;

import android.os.Environment;
import android.os.StatFs;
import android.os.SystemClock;
import java.io.File;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;
import o8.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a {

    /* renamed from: h  reason: collision with root package name */
    private static a f50405h;

    /* renamed from: i  reason: collision with root package name */
    private static final long f50406i = TimeUnit.MINUTES.toMillis(2);

    /* renamed from: b  reason: collision with root package name */
    private volatile File f50408b;

    /* renamed from: d  reason: collision with root package name */
    private volatile File f50410d;

    /* renamed from: e  reason: collision with root package name */
    private long f50411e;

    /* renamed from: a  reason: collision with root package name */
    private volatile StatFs f50407a = null;

    /* renamed from: c  reason: collision with root package name */
    private volatile StatFs f50409c = null;

    /* renamed from: g  reason: collision with root package name */
    private volatile boolean f50413g = false;

    /* renamed from: f  reason: collision with root package name */
    private final Lock f50412f = new ReentrantLock();

    /* renamed from: t8.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public enum EnumC0645a {
        INTERNAL,
        EXTERNAL
    }

    protected a() {
    }

    protected static StatFs a(String str) {
        return new StatFs(str);
    }

    private void b() {
        if (!this.f50413g) {
            this.f50412f.lock();
            try {
                if (!this.f50413g) {
                    this.f50408b = Environment.getDataDirectory();
                    this.f50410d = Environment.getExternalStorageDirectory();
                    g();
                    this.f50413g = true;
                }
            } finally {
                this.f50412f.unlock();
            }
        }
    }

    public static synchronized a d() {
        a aVar;
        synchronized (a.class) {
            try {
                if (f50405h == null) {
                    f50405h = new a();
                }
                aVar = f50405h;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return aVar;
    }

    private void e() {
        if (this.f50412f.tryLock()) {
            try {
                if (SystemClock.uptimeMillis() - this.f50411e > f50406i) {
                    g();
                }
            } finally {
                this.f50412f.unlock();
            }
        }
    }

    private void g() {
        this.f50407a = h(this.f50407a, this.f50408b);
        this.f50409c = h(this.f50409c, this.f50410d);
        this.f50411e = SystemClock.uptimeMillis();
    }

    private StatFs h(StatFs statFs, File file) {
        if (file != null && file.exists()) {
            try {
                if (statFs == null) {
                    return a(file.getAbsolutePath());
                }
                statFs.restat(file.getAbsolutePath());
                return statFs;
            } catch (IllegalArgumentException unused) {
            } catch (Throwable th2) {
                throw n.a(th2);
            }
        }
        return null;
    }

    public long c(EnumC0645a enumC0645a) {
        StatFs statFs;
        b();
        e();
        if (enumC0645a == EnumC0645a.INTERNAL) {
            statFs = this.f50407a;
        } else {
            statFs = this.f50409c;
        }
        if (statFs != null) {
            return statFs.getBlockSizeLong() * statFs.getAvailableBlocksLong();
        }
        return 0L;
    }

    public boolean f(EnumC0645a enumC0645a, long j10) {
        b();
        long c10 = c(enumC0645a);
        if (c10 <= 0 || c10 < j10) {
            return true;
        }
        return false;
    }
}
