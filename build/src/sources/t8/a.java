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
    private static a f50381h;

    /* renamed from: i  reason: collision with root package name */
    private static final long f50382i = TimeUnit.MINUTES.toMillis(2);

    /* renamed from: b  reason: collision with root package name */
    private volatile File f50384b;

    /* renamed from: d  reason: collision with root package name */
    private volatile File f50386d;

    /* renamed from: e  reason: collision with root package name */
    private long f50387e;

    /* renamed from: a  reason: collision with root package name */
    private volatile StatFs f50383a = null;

    /* renamed from: c  reason: collision with root package name */
    private volatile StatFs f50385c = null;

    /* renamed from: g  reason: collision with root package name */
    private volatile boolean f50389g = false;

    /* renamed from: f  reason: collision with root package name */
    private final Lock f50388f = new ReentrantLock();

    /* renamed from: t8.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public enum EnumC0662a {
        INTERNAL,
        EXTERNAL
    }

    protected a() {
    }

    protected static StatFs a(String str) {
        return new StatFs(str);
    }

    private void b() {
        if (!this.f50389g) {
            this.f50388f.lock();
            try {
                if (!this.f50389g) {
                    this.f50384b = Environment.getDataDirectory();
                    this.f50386d = Environment.getExternalStorageDirectory();
                    g();
                    this.f50389g = true;
                }
            } finally {
                this.f50388f.unlock();
            }
        }
    }

    public static synchronized a d() {
        a aVar;
        synchronized (a.class) {
            try {
                if (f50381h == null) {
                    f50381h = new a();
                }
                aVar = f50381h;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return aVar;
    }

    private void e() {
        if (this.f50388f.tryLock()) {
            try {
                if (SystemClock.uptimeMillis() - this.f50387e > f50382i) {
                    g();
                }
            } finally {
                this.f50388f.unlock();
            }
        }
    }

    private void g() {
        this.f50383a = h(this.f50383a, this.f50384b);
        this.f50385c = h(this.f50385c, this.f50386d);
        this.f50387e = SystemClock.uptimeMillis();
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

    public long c(EnumC0662a enumC0662a) {
        StatFs statFs;
        b();
        e();
        if (enumC0662a == EnumC0662a.INTERNAL) {
            statFs = this.f50383a;
        } else {
            statFs = this.f50385c;
        }
        if (statFs != null) {
            return statFs.getBlockSizeLong() * statFs.getAvailableBlocksLong();
        }
        return 0L;
    }

    public boolean f(EnumC0662a enumC0662a, long j10) {
        b();
        long c10 = c(enumC0662a);
        if (c10 <= 0 || c10 < j10) {
            return true;
        }
        return false;
    }
}
