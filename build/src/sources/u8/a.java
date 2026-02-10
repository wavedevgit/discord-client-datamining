package u8;

import android.os.Environment;
import android.os.StatFs;
import android.os.SystemClock;
import java.io.File;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;
import p8.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a {

    /* renamed from: h  reason: collision with root package name */
    private static a f51337h;

    /* renamed from: i  reason: collision with root package name */
    private static final long f51338i = TimeUnit.MINUTES.toMillis(2);

    /* renamed from: b  reason: collision with root package name */
    private volatile File f51340b;

    /* renamed from: d  reason: collision with root package name */
    private volatile File f51342d;

    /* renamed from: e  reason: collision with root package name */
    private long f51343e;

    /* renamed from: a  reason: collision with root package name */
    private volatile StatFs f51339a = null;

    /* renamed from: c  reason: collision with root package name */
    private volatile StatFs f51341c = null;

    /* renamed from: g  reason: collision with root package name */
    private volatile boolean f51345g = false;

    /* renamed from: f  reason: collision with root package name */
    private final Lock f51344f = new ReentrantLock();

    /* renamed from: u8.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public enum EnumC0711a {
        INTERNAL,
        EXTERNAL
    }

    protected a() {
    }

    protected static StatFs a(String str) {
        return new StatFs(str);
    }

    private void b() {
        if (!this.f51345g) {
            this.f51344f.lock();
            try {
                if (!this.f51345g) {
                    this.f51340b = Environment.getDataDirectory();
                    this.f51342d = Environment.getExternalStorageDirectory();
                    g();
                    this.f51345g = true;
                }
            } finally {
                this.f51344f.unlock();
            }
        }
    }

    public static synchronized a d() {
        a aVar;
        synchronized (a.class) {
            try {
                if (f51337h == null) {
                    f51337h = new a();
                }
                aVar = f51337h;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return aVar;
    }

    private void e() {
        if (this.f51344f.tryLock()) {
            try {
                if (SystemClock.uptimeMillis() - this.f51343e > f51338i) {
                    g();
                }
            } finally {
                this.f51344f.unlock();
            }
        }
    }

    private void g() {
        this.f51339a = h(this.f51339a, this.f51340b);
        this.f51341c = h(this.f51341c, this.f51342d);
        this.f51343e = SystemClock.uptimeMillis();
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

    public long c(EnumC0711a enumC0711a) {
        StatFs statFs;
        b();
        e();
        if (enumC0711a == EnumC0711a.INTERNAL) {
            statFs = this.f51339a;
        } else {
            statFs = this.f51341c;
        }
        if (statFs != null) {
            return statFs.getBlockSizeLong() * statFs.getAvailableBlocksLong();
        }
        return 0L;
    }

    public boolean f(EnumC0711a enumC0711a, long j10) {
        b();
        long c10 = c(enumC0711a);
        if (c10 <= 0 || c10 < j10) {
            return true;
        }
        return false;
    }
}
