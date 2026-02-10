package yg;

import android.content.Context;
import android.os.PowerManager;
import android.os.WorkSource;
import android.text.TextUtils;
import android.util.Log;
import com.google.android.gms.common.util.f;
import com.google.android.gms.common.util.m;
import com.google.android.gms.common.util.o;
import hf.q;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;
import kotlin.jvm.internal.LongCompanionObject;
import tg.h;
import tg.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a {

    /* renamed from: r  reason: collision with root package name */
    private static final long f55541r = TimeUnit.DAYS.toMillis(366);

    /* renamed from: s  reason: collision with root package name */
    private static volatile ScheduledExecutorService f55542s = null;

    /* renamed from: t  reason: collision with root package name */
    private static final Object f55543t = new Object();

    /* renamed from: u  reason: collision with root package name */
    private static volatile e f55544u = new c();

    /* renamed from: a  reason: collision with root package name */
    private final Object f55545a;

    /* renamed from: b  reason: collision with root package name */
    private final PowerManager.WakeLock f55546b;

    /* renamed from: c  reason: collision with root package name */
    private int f55547c;

    /* renamed from: d  reason: collision with root package name */
    private Future f55548d;

    /* renamed from: e  reason: collision with root package name */
    private long f55549e;

    /* renamed from: f  reason: collision with root package name */
    private final Set f55550f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f55551g;

    /* renamed from: h  reason: collision with root package name */
    private int f55552h;

    /* renamed from: i  reason: collision with root package name */
    tg.b f55553i;

    /* renamed from: j  reason: collision with root package name */
    private com.google.android.gms.common.util.d f55554j;

    /* renamed from: k  reason: collision with root package name */
    private WorkSource f55555k;

    /* renamed from: l  reason: collision with root package name */
    private final String f55556l;

    /* renamed from: m  reason: collision with root package name */
    private final String f55557m;

    /* renamed from: n  reason: collision with root package name */
    private final Context f55558n;

    /* renamed from: o  reason: collision with root package name */
    private final Map f55559o;

    /* renamed from: p  reason: collision with root package name */
    private AtomicInteger f55560p;

    /* renamed from: q  reason: collision with root package name */
    private final ScheduledExecutorService f55561q;

    public a(Context context, int i10, String str) {
        String str2;
        String packageName = context.getPackageName();
        this.f55545a = new Object();
        this.f55547c = 0;
        this.f55550f = new HashSet();
        this.f55551g = true;
        this.f55554j = f.c();
        this.f55559o = new HashMap();
        this.f55560p = new AtomicInteger(0);
        q.m(context, "WakeLock: context must not be null");
        q.g(str, "WakeLock: wakeLockName must not be empty");
        this.f55558n = context.getApplicationContext();
        this.f55557m = str;
        this.f55553i = null;
        if (!"com.google.android.gms".equals(context.getPackageName())) {
            String valueOf = String.valueOf(str);
            if (valueOf.length() != 0) {
                str2 = "*gcore*:".concat(valueOf);
            } else {
                str2 = new String("*gcore*:");
            }
            this.f55556l = str2;
        } else {
            this.f55556l = str;
        }
        PowerManager powerManager = (PowerManager) context.getSystemService("power");
        if (powerManager != null) {
            PowerManager.WakeLock newWakeLock = powerManager.newWakeLock(i10, str);
            this.f55546b = newWakeLock;
            if (o.c(context)) {
                WorkSource b10 = o.b(context, m.a(packageName) ? context.getPackageName() : packageName);
                this.f55555k = b10;
                if (b10 != null) {
                    i(newWakeLock, b10);
                }
            }
            ScheduledExecutorService scheduledExecutorService = f55542s;
            if (scheduledExecutorService == null) {
                synchronized (f55543t) {
                    try {
                        scheduledExecutorService = f55542s;
                        if (scheduledExecutorService == null) {
                            h.a();
                            scheduledExecutorService = Executors.unconfigurableScheduledExecutorService(Executors.newScheduledThreadPool(1));
                            f55542s = scheduledExecutorService;
                        }
                    } finally {
                    }
                }
            }
            this.f55561q = scheduledExecutorService;
            return;
        }
        StringBuilder sb2 = new StringBuilder(29);
        sb2.append((CharSequence) "expected a non-null reference", 0, 29);
        throw new i(sb2.toString());
    }

    public static /* synthetic */ void e(a aVar) {
        synchronized (aVar.f55545a) {
            try {
                if (!aVar.b()) {
                    return;
                }
                Log.e("WakeLock", String.valueOf(aVar.f55556l).concat(" ** IS FORCE-RELEASED ON TIMEOUT **"));
                aVar.g();
                if (!aVar.b()) {
                    return;
                }
                aVar.f55547c = 1;
                aVar.h(0);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private final String f(String str) {
        if (this.f55551g) {
            TextUtils.isEmpty(null);
        }
        return null;
    }

    private final void g() {
        if (!this.f55550f.isEmpty()) {
            ArrayList arrayList = new ArrayList(this.f55550f);
            this.f55550f.clear();
            if (arrayList.size() <= 0) {
                return;
            }
            android.support.v4.media.session.b.a(arrayList.get(0));
            throw null;
        }
    }

    private final void h(int i10) {
        synchronized (this.f55545a) {
            try {
                if (!b()) {
                    return;
                }
                if (this.f55551g) {
                    int i11 = this.f55547c - 1;
                    this.f55547c = i11;
                    if (i11 > 0) {
                        return;
                    }
                } else {
                    this.f55547c = 0;
                }
                g();
                for (d dVar : this.f55559o.values()) {
                    dVar.f55563a = 0;
                }
                this.f55559o.clear();
                Future future = this.f55548d;
                if (future != null) {
                    future.cancel(false);
                    this.f55548d = null;
                    this.f55549e = 0L;
                }
                this.f55552h = 0;
                if (this.f55546b.isHeld()) {
                    try {
                        this.f55546b.release();
                        if (this.f55553i != null) {
                            this.f55553i = null;
                        }
                    } catch (RuntimeException e10) {
                        if (e10.getClass().equals(RuntimeException.class)) {
                            Log.e("WakeLock", String.valueOf(this.f55556l).concat(" failed to release!"), e10);
                            if (this.f55553i != null) {
                                this.f55553i = null;
                            }
                        } else {
                            throw e10;
                        }
                    }
                } else {
                    Log.e("WakeLock", String.valueOf(this.f55556l).concat(" should be held!"));
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private static void i(PowerManager.WakeLock wakeLock, WorkSource workSource) {
        try {
            wakeLock.setWorkSource(workSource);
        } catch (ArrayIndexOutOfBoundsException | IllegalArgumentException e10) {
            Log.wtf("WakeLock", e10.toString());
        }
    }

    public void a(long j10) {
        this.f55560p.incrementAndGet();
        long j11 = f55541r;
        long j12 = LongCompanionObject.MAX_VALUE;
        long max = Math.max(Math.min((long) LongCompanionObject.MAX_VALUE, j11), 1L);
        if (j10 > 0) {
            max = Math.min(j10, max);
        }
        synchronized (this.f55545a) {
            try {
                if (!b()) {
                    this.f55553i = tg.b.a(false, null);
                    this.f55546b.acquire();
                    this.f55554j.b();
                }
                this.f55547c++;
                this.f55552h++;
                f(null);
                d dVar = (d) this.f55559o.get(null);
                if (dVar == null) {
                    dVar = new d(null);
                    this.f55559o.put(null, dVar);
                }
                dVar.f55563a++;
                long b10 = this.f55554j.b();
                if (LongCompanionObject.MAX_VALUE - b10 > max) {
                    j12 = b10 + max;
                }
                if (j12 > this.f55549e) {
                    this.f55549e = j12;
                    Future future = this.f55548d;
                    if (future != null) {
                        future.cancel(false);
                    }
                    this.f55548d = this.f55561q.schedule(new Runnable() { // from class: yg.b
                        @Override // java.lang.Runnable
                        public final void run() {
                            a.e(a.this);
                        }
                    }, max, TimeUnit.MILLISECONDS);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public boolean b() {
        boolean z10;
        synchronized (this.f55545a) {
            if (this.f55547c > 0) {
                z10 = true;
            } else {
                z10 = false;
            }
        }
        return z10;
    }

    public void c() {
        if (this.f55560p.decrementAndGet() < 0) {
            Log.e("WakeLock", String.valueOf(this.f55556l).concat(" release without a matched acquire!"));
        }
        synchronized (this.f55545a) {
            try {
                f(null);
                if (this.f55559o.containsKey(null)) {
                    d dVar = (d) this.f55559o.get(null);
                    if (dVar != null) {
                        int i10 = dVar.f55563a - 1;
                        dVar.f55563a = i10;
                        if (i10 == 0) {
                            this.f55559o.remove(null);
                        }
                    }
                } else {
                    Log.w("WakeLock", String.valueOf(this.f55556l).concat(" counter does not exist"));
                }
                h(0);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void d(boolean z10) {
        synchronized (this.f55545a) {
            this.f55551g = z10;
        }
    }
}
