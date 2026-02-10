package pg;

import android.os.SystemClock;
import java.io.Closeable;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class jb implements Closeable {

    /* renamed from: s  reason: collision with root package name */
    private static final Map f43683s = new HashMap();

    /* renamed from: d  reason: collision with root package name */
    private final String f43684d;

    /* renamed from: e  reason: collision with root package name */
    private int f43685e;

    /* renamed from: i  reason: collision with root package name */
    private double f43686i;

    /* renamed from: o  reason: collision with root package name */
    private long f43687o;

    /* renamed from: p  reason: collision with root package name */
    private long f43688p;

    /* renamed from: q  reason: collision with root package name */
    private long f43689q;

    /* renamed from: r  reason: collision with root package name */
    private long f43690r;

    private jb(String str) {
        this.f43689q = 2147483647L;
        this.f43690r = -2147483648L;
        this.f43684d = str;
    }

    private final void a() {
        this.f43685e = 0;
        this.f43686i = 0.0d;
        this.f43687o = 0L;
        this.f43689q = 2147483647L;
        this.f43690r = -2147483648L;
    }

    public static jb n(String str) {
        hb hbVar;
        jc.a();
        if (!jc.b()) {
            hbVar = hb.f43610t;
            return hbVar;
        }
        Map map = f43683s;
        if (map.get("detectorTaskWithResource#run") == null) {
            map.put("detectorTaskWithResource#run", new jb("detectorTaskWithResource#run"));
        }
        return (jb) map.get("detectorTaskWithResource#run");
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        long j10 = this.f43687o;
        if (j10 != 0) {
            m(j10);
            return;
        }
        throw new IllegalStateException("Did you forget to call start()?");
    }

    public jb g() {
        this.f43687o = SystemClock.elapsedRealtimeNanos() / 1000;
        return this;
    }

    public void k(long j10) {
        long elapsedRealtimeNanos = SystemClock.elapsedRealtimeNanos() / 1000;
        long j11 = this.f43688p;
        if (j11 != 0 && elapsedRealtimeNanos - j11 >= 1000000) {
            a();
        }
        this.f43688p = elapsedRealtimeNanos;
        this.f43685e++;
        this.f43686i += j10;
        this.f43689q = Math.min(this.f43689q, j10);
        this.f43690r = Math.max(this.f43690r, j10);
        if (this.f43685e % 50 == 0) {
            String.format(Locale.US, "[%s] cur=%dus, counts=%d, min=%dus, max=%dus, avg=%dus", this.f43684d, Long.valueOf(j10), Integer.valueOf(this.f43685e), Long.valueOf(this.f43689q), Long.valueOf(this.f43690r), Integer.valueOf((int) (this.f43686i / this.f43685e)));
            jc.a();
        }
        if (this.f43685e % 500 == 0) {
            a();
        }
    }

    public void m(long j10) {
        k((SystemClock.elapsedRealtimeNanos() / 1000) - j10);
    }
}
