package pg;

import android.os.SystemClock;
import java.io.Closeable;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class jb implements Closeable {

    /* renamed from: s  reason: collision with root package name */
    private static final Map f42142s = new HashMap();

    /* renamed from: d  reason: collision with root package name */
    private final String f42143d;

    /* renamed from: e  reason: collision with root package name */
    private int f42144e;

    /* renamed from: i  reason: collision with root package name */
    private double f42145i;

    /* renamed from: o  reason: collision with root package name */
    private long f42146o;

    /* renamed from: p  reason: collision with root package name */
    private long f42147p;

    /* renamed from: q  reason: collision with root package name */
    private long f42148q;

    /* renamed from: r  reason: collision with root package name */
    private long f42149r;

    private jb(String str) {
        this.f42148q = 2147483647L;
        this.f42149r = -2147483648L;
        this.f42143d = str;
    }

    private final void a() {
        this.f42144e = 0;
        this.f42145i = 0.0d;
        this.f42146o = 0L;
        this.f42148q = 2147483647L;
        this.f42149r = -2147483648L;
    }

    public static jb n(String str) {
        hb hbVar;
        jc.a();
        if (!jc.b()) {
            hbVar = hb.f42069t;
            return hbVar;
        }
        Map map = f42142s;
        if (map.get("detectorTaskWithResource#run") == null) {
            map.put("detectorTaskWithResource#run", new jb("detectorTaskWithResource#run"));
        }
        return (jb) map.get("detectorTaskWithResource#run");
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        long j10 = this.f42146o;
        if (j10 != 0) {
            m(j10);
            return;
        }
        throw new IllegalStateException("Did you forget to call start()?");
    }

    public jb h() {
        this.f42146o = SystemClock.elapsedRealtimeNanos() / 1000;
        return this;
    }

    public void i(long j10) {
        long elapsedRealtimeNanos = SystemClock.elapsedRealtimeNanos() / 1000;
        long j11 = this.f42147p;
        if (j11 != 0 && elapsedRealtimeNanos - j11 >= 1000000) {
            a();
        }
        this.f42147p = elapsedRealtimeNanos;
        this.f42144e++;
        this.f42145i += j10;
        this.f42148q = Math.min(this.f42148q, j10);
        this.f42149r = Math.max(this.f42149r, j10);
        if (this.f42144e % 50 == 0) {
            String.format(Locale.US, "[%s] cur=%dus, counts=%d, min=%dus, max=%dus, avg=%dus", this.f42143d, Long.valueOf(j10), Integer.valueOf(this.f42144e), Long.valueOf(this.f42148q), Long.valueOf(this.f42149r), Integer.valueOf((int) (this.f42145i / this.f42144e)));
            jc.a();
        }
        if (this.f42144e % 500 == 0) {
            a();
        }
    }

    public void m(long j10) {
        i((SystemClock.elapsedRealtimeNanos() / 1000) - j10);
    }
}
