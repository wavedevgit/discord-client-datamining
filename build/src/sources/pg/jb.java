package pg;

import android.os.SystemClock;
import java.io.Closeable;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class jb implements Closeable {

    /* renamed from: s  reason: collision with root package name */
    private static final Map f42141s = new HashMap();

    /* renamed from: d  reason: collision with root package name */
    private final String f42142d;

    /* renamed from: e  reason: collision with root package name */
    private int f42143e;

    /* renamed from: i  reason: collision with root package name */
    private double f42144i;

    /* renamed from: o  reason: collision with root package name */
    private long f42145o;

    /* renamed from: p  reason: collision with root package name */
    private long f42146p;

    /* renamed from: q  reason: collision with root package name */
    private long f42147q;

    /* renamed from: r  reason: collision with root package name */
    private long f42148r;

    private jb(String str) {
        this.f42147q = 2147483647L;
        this.f42148r = -2147483648L;
        this.f42142d = str;
    }

    private final void a() {
        this.f42143e = 0;
        this.f42144i = 0.0d;
        this.f42145o = 0L;
        this.f42147q = 2147483647L;
        this.f42148r = -2147483648L;
    }

    public static jb n(String str) {
        hb hbVar;
        jc.a();
        if (!jc.b()) {
            hbVar = hb.f42068t;
            return hbVar;
        }
        Map map = f42141s;
        if (map.get("detectorTaskWithResource#run") == null) {
            map.put("detectorTaskWithResource#run", new jb("detectorTaskWithResource#run"));
        }
        return (jb) map.get("detectorTaskWithResource#run");
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        long j10 = this.f42145o;
        if (j10 != 0) {
            m(j10);
            return;
        }
        throw new IllegalStateException("Did you forget to call start()?");
    }

    public jb h() {
        this.f42145o = SystemClock.elapsedRealtimeNanos() / 1000;
        return this;
    }

    public void i(long j10) {
        long elapsedRealtimeNanos = SystemClock.elapsedRealtimeNanos() / 1000;
        long j11 = this.f42146p;
        if (j11 != 0 && elapsedRealtimeNanos - j11 >= 1000000) {
            a();
        }
        this.f42146p = elapsedRealtimeNanos;
        this.f42143e++;
        this.f42144i += j10;
        this.f42147q = Math.min(this.f42147q, j10);
        this.f42148r = Math.max(this.f42148r, j10);
        if (this.f42143e % 50 == 0) {
            String.format(Locale.US, "[%s] cur=%dus, counts=%d, min=%dus, max=%dus, avg=%dus", this.f42142d, Long.valueOf(j10), Integer.valueOf(this.f42143e), Long.valueOf(this.f42147q), Long.valueOf(this.f42148r), Integer.valueOf((int) (this.f42144i / this.f42143e)));
            jc.a();
        }
        if (this.f42143e % 500 == 0) {
            a();
        }
    }

    public void m(long j10) {
        i((SystemClock.elapsedRealtimeNanos() / 1000) - j10);
    }
}
