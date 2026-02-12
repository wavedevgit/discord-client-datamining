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
    private static final long f55542r = TimeUnit.DAYS.toMillis(366);

    /* renamed from: s  reason: collision with root package name */
    private static volatile ScheduledExecutorService f55543s = null;

    /* renamed from: t  reason: collision with root package name */
    private static final Object f55544t = new Object();

    /* renamed from: u  reason: collision with root package name */
    private static volatile e f55545u = new c();

    /* renamed from: a  reason: collision with root package name */
    private final Object f55546a;

    /* renamed from: b  reason: collision with root package name */
    private final PowerManager.WakeLock f55547b;

    /* renamed from: c  reason: collision with root package name */
    private int f55548c;

    /* renamed from: d  reason: collision with root package name */
    private Future f55549d;

    /* renamed from: e  reason: collision with root package name */
    private long f55550e;

    /* renamed from: f  reason: collision with root package name */
    private final Set f55551f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f55552g;

    /* renamed from: h  reason: collision with root package name */
    private int f55553h;

    /* renamed from: i  reason: collision with root package name */
    tg.b f55554i;

    /* renamed from: j  reason: collision with root package name */
    private com.google.android.gms.common.util.d f55555j;

    /* renamed from: k  reason: collision with root package name */
    private WorkSource f55556k;

    /* renamed from: l  reason: collision with root package name */
    private final String f55557l;

    /* renamed from: m  reason: collision with root package name */
    private final String f55558m;

    /* renamed from: n  reason: collision with root package name */
    private final Context f55559n;

    /* renamed from: o  reason: collision with root package name */
    private final Map f55560o;

    /* renamed from: p  reason: collision with root package name */
    private AtomicInteger f55561p;

    /* renamed from: q  reason: collision with root package name */
    private final ScheduledExecutorService f55562q;

    public a(Context context, int i10, String str) {
        String str2;
        String packageName = context.getPackageName();
        this.f55546a = new Object();
        this.f55548c = 0;
        this.f55551f = new HashSet();
        this.f55552g = true;
        this.f55555j = f.c();
        this.f55560o = new HashMap();
        this.f55561p = new AtomicInteger(0);
        q.m(context, "WakeLock: context must not be null");
        q.g(str, "WakeLock: wakeLockName must not be empty");
        this.f55559n = context.getApplicationContext();
        this.f55558m = str;
        this.f55554i = null;
        if (!"com.google.android.gms".equals(context.getPackageName())) {
            String valueOf = String.valueOf(str);
            if (valueOf.length() != 0) {
                str2 = "*gcore*:".concat(valueOf);
            } else {
                str2 = new String("*gcore*:");
            }
            this.f55557l = str2;
        } else {
            this.f55557l = str;
        }
        PowerManager powerManager = (PowerManager) context.getSystemService("power");
        if (powerManager != null) {
            PowerManager.WakeLock newWakeLock = powerManager.newWakeLock(i10, str);
            this.f55547b = newWakeLock;
            if (o.c(context)) {
                WorkSource b10 = o.b(context, m.a(packageName) ? context.getPackageName() : packageName);
                this.f55556k = b10;
                if (b10 != null) {
                    i(newWakeLock, b10);
                }
            }
            ScheduledExecutorService scheduledExecutorService = f55543s;
            if (scheduledExecutorService == null) {
                synchronized (f55544t) {
                    try {
                        scheduledExecutorService = f55543s;
                        if (scheduledExecutorService == null) {
                            h.a();
                            scheduledExecutorService = Executors.unconfigurableScheduledExecutorService(Executors.newScheduledThreadPool(1));
                            f55543s = scheduledExecutorService;
                        }
                    } finally {
                    }
                }
            }
            this.f55562q = scheduledExecutorService;
            return;
        }
        StringBuilder sb2 = new StringBuilder(29);
        sb2.append((CharSequence) "expected a non-null reference", 0, 29);
        throw new i(sb2.toString());
    }

    public static /* synthetic */ void e(a aVar) {
        synchronized (aVar.f55546a) {
            try {
                if (!aVar.b()) {
                    return;
                }
                Log.e("WakeLock", String.valueOf(aVar.f55557l).concat(" ** IS FORCE-RELEASED ON TIMEOUT **"));
                aVar.g();
                if (!aVar.b()) {
                    return;
                }
                aVar.f55548c = 1;
                aVar.h(0);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private final String f(String str) {
        if (this.f55552g) {
            TextUtils.isEmpty(null);
        }
        return null;
    }

    private final void g() {
        if (!this.f55551f.isEmpty()) {
            ArrayList arrayList = new ArrayList(this.f55551f);
            this.f55551f.clear();
            if (arrayList.size() <= 0) {
                return;
            }
            android.support.v4.media.session.b.a(arrayList.get(0));
            throw null;
        }
    }

    private final void h(int i10) {
        synchronized (this.f55546a) {
            try {
                if (!b()) {
                    return;
                }
                if (this.f55552g) {
                    int i11 = this.f55548c - 1;
                    this.f55548c = i11;
                    if (i11 > 0) {
                        return;
                    }
                } else {
                    this.f55548c = 0;
                }
                g();
                for (d dVar : this.f55560o.values()) {
                    dVar.f55564a = 0;
                }
                this.f55560o.clear();
                Future future = this.f55549d;
                if (future != null) {
                    future.cancel(false);
                    this.f55549d = null;
                    this.f55550e = 0L;
                }
                this.f55553h = 0;
                if (this.f55547b.isHeld()) {
                    try {
                        this.f55547b.release();
                        if (this.f55554i != null) {
                            this.f55554i = null;
                        }
                    } catch (RuntimeException e10) {
                        if (e10.getClass().equals(RuntimeException.class)) {
                            Log.e("WakeLock", String.valueOf(this.f55557l).concat(" failed to release!"), e10);
                            if (this.f55554i != null) {
                                this.f55554i = null;
                            }
                        } else {
                            throw e10;
                        }
                    }
                } else {
                    Log.e("WakeLock", String.valueOf(this.f55557l).concat(" should be held!"));
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
        this.f55561p.incrementAndGet();
        long j11 = f55542r;
        long j12 = LongCompanionObject.MAX_VALUE;
        long max = Math.max(Math.min((long) LongCompanionObject.MAX_VALUE, j11), 1L);
        if (j10 > 0) {
            max = Math.min(j10, max);
        }
        synchronized (this.f55546a) {
            try {
                if (!b()) {
                    this.f55554i = tg.b.a(false, null);
                    this.f55547b.acquire();
                    this.f55555j.b();
                }
                this.f55548c++;
                this.f55553h++;
                f(null);
                d dVar = (d) this.f55560o.get(null);
                if (dVar == null) {
                    dVar = new d(null);
                    this.f55560o.put(null, dVar);
                }
                dVar.f55564a++;
                long b10 = this.f55555j.b();
                if (LongCompanionObject.MAX_VALUE - b10 > max) {
                    j12 = b10 + max;
                }
                if (j12 > this.f55550e) {
                    this.f55550e = j12;
                    Future future = this.f55549d;
                    if (future != null) {
                        future.cancel(false);
                    }
                    this.f55549d = this.f55562q.schedule(new Runnable() { // from class: yg.b
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
        synchronized (this.f55546a) {
            if (this.f55548c > 0) {
                z10 = true;
            } else {
                z10 = false;
            }
        }
        return z10;
    }

    public void c() {
        if (this.f55561p.decrementAndGet() < 0) {
            Log.e("WakeLock", String.valueOf(this.f55557l).concat(" release without a matched acquire!"));
        }
        synchronized (this.f55546a) {
            try {
                f(null);
                if (this.f55560o.containsKey(null)) {
                    d dVar = (d) this.f55560o.get(null);
                    if (dVar != null) {
                        int i10 = dVar.f55564a - 1;
                        dVar.f55564a = i10;
                        if (i10 == 0) {
                            this.f55560o.remove(null);
                        }
                    }
                } else {
                    Log.w("WakeLock", String.valueOf(this.f55557l).concat(" counter does not exist"));
                }
                h(0);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void d(boolean z10) {
        synchronized (this.f55546a) {
            this.f55552g = z10;
        }
    }
}
