package og;

import android.os.SystemClock;
import java.io.Closeable;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class jb implements Closeable {

    /* renamed from: s  reason: collision with root package name */
    private static final Map f42223s = new HashMap();

    /* renamed from: d  reason: collision with root package name */
    private final String f42224d;

    /* renamed from: e  reason: collision with root package name */
    private int f42225e;

    /* renamed from: i  reason: collision with root package name */
    private double f42226i;

    /* renamed from: o  reason: collision with root package name */
    private long f42227o;

    /* renamed from: p  reason: collision with root package name */
    private long f42228p;

    /* renamed from: q  reason: collision with root package name */
    private long f42229q;

    /* renamed from: r  reason: collision with root package name */
    private long f42230r;

    private jb(String str) {
        this.f42229q = 2147483647L;
        this.f42230r = -2147483648L;
        this.f42224d = str;
    }

    private final void a() {
        this.f42225e = 0;
        this.f42226i = 0.0d;
        this.f42227o = 0L;
        this.f42229q = 2147483647L;
        this.f42230r = -2147483648L;
    }

    public static jb n(String str) {
        hb hbVar;
        jc.a();
        if (!jc.b()) {
            hbVar = hb.f42150t;
            return hbVar;
        }
        Map map = f42223s;
        if (map.get("detectorTaskWithResource#run") == null) {
            map.put("detectorTaskWithResource#run", new jb("detectorTaskWithResource#run"));
        }
        return (jb) map.get("detectorTaskWithResource#run");
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        long j10 = this.f42227o;
        if (j10 != 0) {
            m(j10);
            return;
        }
        throw new IllegalStateException("Did you forget to call start()?");
    }

    public jb g() {
        this.f42227o = SystemClock.elapsedRealtimeNanos() / 1000;
        return this;
    }

    public void k(long j10) {
        long elapsedRealtimeNanos = SystemClock.elapsedRealtimeNanos() / 1000;
        long j11 = this.f42228p;
        if (j11 != 0 && elapsedRealtimeNanos - j11 >= 1000000) {
            a();
        }
        this.f42228p = elapsedRealtimeNanos;
        this.f42225e++;
        this.f42226i += j10;
        this.f42229q = Math.min(this.f42229q, j10);
        this.f42230r = Math.max(this.f42230r, j10);
        if (this.f42225e % 50 == 0) {
            String.format(Locale.US, "[%s] cur=%dus, counts=%d, min=%dus, max=%dus, avg=%dus", this.f42224d, Long.valueOf(j10), Integer.valueOf(this.f42225e), Long.valueOf(this.f42229q), Long.valueOf(this.f42230r), Integer.valueOf((int) (this.f42226i / this.f42225e)));
            jc.a();
        }
        if (this.f42225e % 500 == 0) {
            a();
        }
    }

    public void m(long j10) {
        k((SystemClock.elapsedRealtimeNanos() / 1000) - j10);
    }
}
