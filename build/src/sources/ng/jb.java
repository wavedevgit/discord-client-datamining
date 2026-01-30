package ng;

import android.os.SystemClock;
import java.io.Closeable;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class jb implements Closeable {

    /* renamed from: s  reason: collision with root package name */
    private static final Map f41361s = new HashMap();

    /* renamed from: d  reason: collision with root package name */
    private final String f41362d;

    /* renamed from: e  reason: collision with root package name */
    private int f41363e;

    /* renamed from: i  reason: collision with root package name */
    private double f41364i;

    /* renamed from: o  reason: collision with root package name */
    private long f41365o;

    /* renamed from: p  reason: collision with root package name */
    private long f41366p;

    /* renamed from: q  reason: collision with root package name */
    private long f41367q;

    /* renamed from: r  reason: collision with root package name */
    private long f41368r;

    private jb(String str) {
        this.f41367q = 2147483647L;
        this.f41368r = -2147483648L;
        this.f41362d = str;
    }

    private final void a() {
        this.f41363e = 0;
        this.f41364i = 0.0d;
        this.f41365o = 0L;
        this.f41367q = 2147483647L;
        this.f41368r = -2147483648L;
    }

    public static jb x(String str) {
        hb hbVar;
        jc.a();
        if (!jc.b()) {
            hbVar = hb.f41288t;
            return hbVar;
        }
        Map map = f41361s;
        if (map.get("detectorTaskWithResource#run") == null) {
            map.put("detectorTaskWithResource#run", new jb("detectorTaskWithResource#run"));
        }
        return (jb) map.get("detectorTaskWithResource#run");
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        long j10 = this.f41365o;
        if (j10 != 0) {
            n(j10);
            return;
        }
        throw new IllegalStateException("Did you forget to call start()?");
    }

    public jb h() {
        this.f41365o = SystemClock.elapsedRealtimeNanos() / 1000;
        return this;
    }

    public void l(long j10) {
        long elapsedRealtimeNanos = SystemClock.elapsedRealtimeNanos() / 1000;
        long j11 = this.f41366p;
        if (j11 != 0 && elapsedRealtimeNanos - j11 >= 1000000) {
            a();
        }
        this.f41366p = elapsedRealtimeNanos;
        this.f41363e++;
        this.f41364i += j10;
        this.f41367q = Math.min(this.f41367q, j10);
        this.f41368r = Math.max(this.f41368r, j10);
        if (this.f41363e % 50 == 0) {
            String.format(Locale.US, "[%s] cur=%dus, counts=%d, min=%dus, max=%dus, avg=%dus", this.f41362d, Long.valueOf(j10), Integer.valueOf(this.f41363e), Long.valueOf(this.f41367q), Long.valueOf(this.f41368r), Integer.valueOf((int) (this.f41364i / this.f41363e)));
            jc.a();
        }
        if (this.f41363e % 500 == 0) {
            a();
        }
    }

    public void n(long j10) {
        l((SystemClock.elapsedRealtimeNanos() / 1000) - j10);
    }
}
