package ng;

import android.os.SystemClock;
import java.io.Closeable;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class jb implements Closeable {

    /* renamed from: s  reason: collision with root package name */
    private static final Map f41224s = new HashMap();

    /* renamed from: d  reason: collision with root package name */
    private final String f41225d;

    /* renamed from: e  reason: collision with root package name */
    private int f41226e;

    /* renamed from: i  reason: collision with root package name */
    private double f41227i;

    /* renamed from: o  reason: collision with root package name */
    private long f41228o;

    /* renamed from: p  reason: collision with root package name */
    private long f41229p;

    /* renamed from: q  reason: collision with root package name */
    private long f41230q;

    /* renamed from: r  reason: collision with root package name */
    private long f41231r;

    private jb(String str) {
        this.f41230q = 2147483647L;
        this.f41231r = -2147483648L;
        this.f41225d = str;
    }

    private final void a() {
        this.f41226e = 0;
        this.f41227i = 0.0d;
        this.f41228o = 0L;
        this.f41230q = 2147483647L;
        this.f41231r = -2147483648L;
    }

    public static jb x(String str) {
        hb hbVar;
        jc.a();
        if (!jc.b()) {
            hbVar = hb.f41151t;
            return hbVar;
        }
        Map map = f41224s;
        if (map.get("detectorTaskWithResource#run") == null) {
            map.put("detectorTaskWithResource#run", new jb("detectorTaskWithResource#run"));
        }
        return (jb) map.get("detectorTaskWithResource#run");
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        long j10 = this.f41228o;
        if (j10 != 0) {
            n(j10);
            return;
        }
        throw new IllegalStateException("Did you forget to call start()?");
    }

    public jb h() {
        this.f41228o = SystemClock.elapsedRealtimeNanos() / 1000;
        return this;
    }

    public void l(long j10) {
        long elapsedRealtimeNanos = SystemClock.elapsedRealtimeNanos() / 1000;
        long j11 = this.f41229p;
        if (j11 != 0 && elapsedRealtimeNanos - j11 >= 1000000) {
            a();
        }
        this.f41229p = elapsedRealtimeNanos;
        this.f41226e++;
        this.f41227i += j10;
        this.f41230q = Math.min(this.f41230q, j10);
        this.f41231r = Math.max(this.f41231r, j10);
        if (this.f41226e % 50 == 0) {
            String.format(Locale.US, "[%s] cur=%dus, counts=%d, min=%dus, max=%dus, avg=%dus", this.f41225d, Long.valueOf(j10), Integer.valueOf(this.f41226e), Long.valueOf(this.f41230q), Long.valueOf(this.f41231r), Integer.valueOf((int) (this.f41227i / this.f41226e)));
            jc.a();
        }
        if (this.f41226e % 500 == 0) {
            a();
        }
    }

    public void n(long j10) {
        l((SystemClock.elapsedRealtimeNanos() / 1000) - j10);
    }
}
