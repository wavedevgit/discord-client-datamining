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
    private static a f50517h;

    /* renamed from: i  reason: collision with root package name */
    private static final long f50518i = TimeUnit.MINUTES.toMillis(2);

    /* renamed from: b  reason: collision with root package name */
    private volatile File f50520b;

    /* renamed from: d  reason: collision with root package name */
    private volatile File f50522d;

    /* renamed from: e  reason: collision with root package name */
    private long f50523e;

    /* renamed from: a  reason: collision with root package name */
    private volatile StatFs f50519a = null;

    /* renamed from: c  reason: collision with root package name */
    private volatile StatFs f50521c = null;

    /* renamed from: g  reason: collision with root package name */
    private volatile boolean f50525g = false;

    /* renamed from: f  reason: collision with root package name */
    private final Lock f50524f = new ReentrantLock();

    /* renamed from: u8.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public enum EnumC0693a {
        INTERNAL,
        EXTERNAL
    }

    protected a() {
    }

    protected static StatFs a(String str) {
        return new StatFs(str);
    }

    private void b() {
        if (!this.f50525g) {
            this.f50524f.lock();
            try {
                if (!this.f50525g) {
                    this.f50520b = Environment.getDataDirectory();
                    this.f50522d = Environment.getExternalStorageDirectory();
                    g();
                    this.f50525g = true;
                }
            } finally {
                this.f50524f.unlock();
            }
        }
    }

    public static synchronized a d() {
        a aVar;
        synchronized (a.class) {
            try {
                if (f50517h == null) {
                    f50517h = new a();
                }
                aVar = f50517h;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return aVar;
    }

    private void e() {
        if (this.f50524f.tryLock()) {
            try {
                if (SystemClock.uptimeMillis() - this.f50523e > f50518i) {
                    g();
                }
            } finally {
                this.f50524f.unlock();
            }
        }
    }

    private void g() {
        this.f50519a = h(this.f50519a, this.f50520b);
        this.f50521c = h(this.f50521c, this.f50522d);
        this.f50523e = SystemClock.uptimeMillis();
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

    public long c(EnumC0693a enumC0693a) {
        StatFs statFs;
        b();
        e();
        if (enumC0693a == EnumC0693a.INTERNAL) {
            statFs = this.f50519a;
        } else {
            statFs = this.f50521c;
        }
        if (statFs != null) {
            return statFs.getBlockSizeLong() * statFs.getAvailableBlocksLong();
        }
        return 0L;
    }

    public boolean f(EnumC0693a enumC0693a, long j10) {
        b();
        long c10 = c(enumC0693a);
        if (c10 <= 0 || c10 < j10) {
            return true;
        }
        return false;
    }
}
