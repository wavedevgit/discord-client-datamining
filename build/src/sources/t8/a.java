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
    private static a f49592h;

    /* renamed from: i  reason: collision with root package name */
    private static final long f49593i = TimeUnit.MINUTES.toMillis(2);

    /* renamed from: b  reason: collision with root package name */
    private volatile File f49595b;

    /* renamed from: d  reason: collision with root package name */
    private volatile File f49597d;

    /* renamed from: e  reason: collision with root package name */
    private long f49598e;

    /* renamed from: a  reason: collision with root package name */
    private volatile StatFs f49594a = null;

    /* renamed from: c  reason: collision with root package name */
    private volatile StatFs f49596c = null;

    /* renamed from: g  reason: collision with root package name */
    private volatile boolean f49600g = false;

    /* renamed from: f  reason: collision with root package name */
    private final Lock f49599f = new ReentrantLock();

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
        if (!this.f49600g) {
            this.f49599f.lock();
            try {
                if (!this.f49600g) {
                    this.f49595b = Environment.getDataDirectory();
                    this.f49597d = Environment.getExternalStorageDirectory();
                    g();
                    this.f49600g = true;
                }
            } finally {
                this.f49599f.unlock();
            }
        }
    }

    public static synchronized a d() {
        a aVar;
        synchronized (a.class) {
            try {
                if (f49592h == null) {
                    f49592h = new a();
                }
                aVar = f49592h;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return aVar;
    }

    private void e() {
        if (this.f49599f.tryLock()) {
            try {
                if (SystemClock.uptimeMillis() - this.f49598e > f49593i) {
                    g();
                }
            } finally {
                this.f49599f.unlock();
            }
        }
    }

    private void g() {
        this.f49594a = h(this.f49594a, this.f49595b);
        this.f49596c = h(this.f49596c, this.f49597d);
        this.f49598e = SystemClock.uptimeMillis();
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
            statFs = this.f49594a;
        } else {
            statFs = this.f49596c;
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
