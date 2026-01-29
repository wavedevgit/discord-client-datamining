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
    private static a f49304h;

    /* renamed from: i  reason: collision with root package name */
    private static final long f49305i = TimeUnit.MINUTES.toMillis(2);

    /* renamed from: b  reason: collision with root package name */
    private volatile File f49307b;

    /* renamed from: d  reason: collision with root package name */
    private volatile File f49309d;

    /* renamed from: e  reason: collision with root package name */
    private long f49310e;

    /* renamed from: a  reason: collision with root package name */
    private volatile StatFs f49306a = null;

    /* renamed from: c  reason: collision with root package name */
    private volatile StatFs f49308c = null;

    /* renamed from: g  reason: collision with root package name */
    private volatile boolean f49312g = false;

    /* renamed from: f  reason: collision with root package name */
    private final Lock f49311f = new ReentrantLock();

    /* renamed from: t8.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public enum EnumC0634a {
        INTERNAL,
        EXTERNAL
    }

    protected a() {
    }

    protected static StatFs a(String str) {
        return new StatFs(str);
    }

    private void b() {
        if (!this.f49312g) {
            this.f49311f.lock();
            try {
                if (!this.f49312g) {
                    this.f49307b = Environment.getDataDirectory();
                    this.f49309d = Environment.getExternalStorageDirectory();
                    g();
                    this.f49312g = true;
                }
            } finally {
                this.f49311f.unlock();
            }
        }
    }

    public static synchronized a d() {
        a aVar;
        synchronized (a.class) {
            try {
                if (f49304h == null) {
                    f49304h = new a();
                }
                aVar = f49304h;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return aVar;
    }

    private void e() {
        if (this.f49311f.tryLock()) {
            try {
                if (SystemClock.uptimeMillis() - this.f49310e > f49305i) {
                    g();
                }
            } finally {
                this.f49311f.unlock();
            }
        }
    }

    private void g() {
        this.f49306a = h(this.f49306a, this.f49307b);
        this.f49308c = h(this.f49308c, this.f49309d);
        this.f49310e = SystemClock.uptimeMillis();
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

    public long c(EnumC0634a enumC0634a) {
        StatFs statFs;
        b();
        e();
        if (enumC0634a == EnumC0634a.INTERNAL) {
            statFs = this.f49306a;
        } else {
            statFs = this.f49308c;
        }
        if (statFs != null) {
            return statFs.getBlockSizeLong() * statFs.getAvailableBlocksLong();
        }
        return 0L;
    }

    public boolean f(EnumC0634a enumC0634a, long j10) {
        b();
        long c10 = c(enumC0634a);
        if (c10 <= 0 || c10 < j10) {
            return true;
        }
        return false;
    }
}
