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
    private static a f49800h;

    /* renamed from: i  reason: collision with root package name */
    private static final long f49801i = TimeUnit.MINUTES.toMillis(2);

    /* renamed from: b  reason: collision with root package name */
    private volatile File f49803b;

    /* renamed from: d  reason: collision with root package name */
    private volatile File f49805d;

    /* renamed from: e  reason: collision with root package name */
    private long f49806e;

    /* renamed from: a  reason: collision with root package name */
    private volatile StatFs f49802a = null;

    /* renamed from: c  reason: collision with root package name */
    private volatile StatFs f49804c = null;

    /* renamed from: g  reason: collision with root package name */
    private volatile boolean f49808g = false;

    /* renamed from: f  reason: collision with root package name */
    private final Lock f49807f = new ReentrantLock();

    /* renamed from: t8.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public enum EnumC0618a {
        INTERNAL,
        EXTERNAL
    }

    protected a() {
    }

    protected static StatFs a(String str) {
        return new StatFs(str);
    }

    private void b() {
        if (!this.f49808g) {
            this.f49807f.lock();
            try {
                if (!this.f49808g) {
                    this.f49803b = Environment.getDataDirectory();
                    this.f49805d = Environment.getExternalStorageDirectory();
                    g();
                    this.f49808g = true;
                }
            } finally {
                this.f49807f.unlock();
            }
        }
    }

    public static synchronized a d() {
        a aVar;
        synchronized (a.class) {
            try {
                if (f49800h == null) {
                    f49800h = new a();
                }
                aVar = f49800h;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return aVar;
    }

    private void e() {
        if (this.f49807f.tryLock()) {
            try {
                if (SystemClock.uptimeMillis() - this.f49806e > f49801i) {
                    g();
                }
            } finally {
                this.f49807f.unlock();
            }
        }
    }

    private void g() {
        this.f49802a = h(this.f49802a, this.f49803b);
        this.f49804c = h(this.f49804c, this.f49805d);
        this.f49806e = SystemClock.uptimeMillis();
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

    public long c(EnumC0618a enumC0618a) {
        StatFs statFs;
        b();
        e();
        if (enumC0618a == EnumC0618a.INTERNAL) {
            statFs = this.f49802a;
        } else {
            statFs = this.f49804c;
        }
        if (statFs != null) {
            return statFs.getBlockSizeLong() * statFs.getAvailableBlocksLong();
        }
        return 0L;
    }

    public boolean f(EnumC0618a enumC0618a, long j10) {
        b();
        long c10 = c(enumC0618a);
        if (c10 <= 0 || c10 < j10) {
            return true;
        }
        return false;
    }
}
