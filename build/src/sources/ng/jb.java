package ng;

import android.os.SystemClock;
import java.io.Closeable;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class jb implements Closeable {

    /* renamed from: s  reason: collision with root package name */
    private static final Map f40723s = new HashMap();

    /* renamed from: d  reason: collision with root package name */
    private final String f40724d;

    /* renamed from: e  reason: collision with root package name */
    private int f40725e;

    /* renamed from: i  reason: collision with root package name */
    private double f40726i;

    /* renamed from: o  reason: collision with root package name */
    private long f40727o;

    /* renamed from: p  reason: collision with root package name */
    private long f40728p;

    /* renamed from: q  reason: collision with root package name */
    private long f40729q;

    /* renamed from: r  reason: collision with root package name */
    private long f40730r;

    private jb(String str) {
        this.f40729q = 2147483647L;
        this.f40730r = -2147483648L;
        this.f40724d = str;
    }

    private final void a() {
        this.f40725e = 0;
        this.f40726i = 0.0d;
        this.f40727o = 0L;
        this.f40729q = 2147483647L;
        this.f40730r = -2147483648L;
    }

    public static jb o(String str) {
        hb hbVar;
        jc.a();
        if (!jc.b()) {
            hbVar = hb.f40650t;
            return hbVar;
        }
        Map map = f40723s;
        if (map.get("detectorTaskWithResource#run") == null) {
            map.put("detectorTaskWithResource#run", new jb("detectorTaskWithResource#run"));
        }
        return (jb) map.get("detectorTaskWithResource#run");
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        long j10 = this.f40727o;
        if (j10 != 0) {
            m(j10);
            return;
        }
        throw new IllegalStateException("Did you forget to call start()?");
    }

    public jb h() {
        this.f40727o = SystemClock.elapsedRealtimeNanos() / 1000;
        return this;
    }

    public void k(long j10) {
        long elapsedRealtimeNanos = SystemClock.elapsedRealtimeNanos() / 1000;
        long j11 = this.f40728p;
        if (j11 != 0 && elapsedRealtimeNanos - j11 >= 1000000) {
            a();
        }
        this.f40728p = elapsedRealtimeNanos;
        this.f40725e++;
        this.f40726i += j10;
        this.f40729q = Math.min(this.f40729q, j10);
        this.f40730r = Math.max(this.f40730r, j10);
        if (this.f40725e % 50 == 0) {
            String.format(Locale.US, "[%s] cur=%dus, counts=%d, min=%dus, max=%dus, avg=%dus", this.f40724d, Long.valueOf(j10), Integer.valueOf(this.f40725e), Long.valueOf(this.f40729q), Long.valueOf(this.f40730r), Integer.valueOf((int) (this.f40726i / this.f40725e)));
            jc.a();
        }
        if (this.f40725e % 500 == 0) {
            a();
        }
    }

    public void m(long j10) {
        k((SystemClock.elapsedRealtimeNanos() / 1000) - j10);
    }
}
