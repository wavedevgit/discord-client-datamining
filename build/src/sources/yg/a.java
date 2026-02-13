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
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: r  reason: collision with root package name */
    private static final long f56110r = TimeUnit.DAYS.toMillis(366);

    /* renamed from: s  reason: collision with root package name */
    private static volatile ScheduledExecutorService f56111s = null;

    /* renamed from: t  reason: collision with root package name */
    private static final Object f56112t = new Object();

    /* renamed from: u  reason: collision with root package name */
    private static volatile e f56113u = new c();

    /* renamed from: a  reason: collision with root package name */
    private final Object f56114a;

    /* renamed from: b  reason: collision with root package name */
    private final PowerManager.WakeLock f56115b;

    /* renamed from: c  reason: collision with root package name */
    private int f56116c;

    /* renamed from: d  reason: collision with root package name */
    private Future f56117d;

    /* renamed from: e  reason: collision with root package name */
    private long f56118e;

    /* renamed from: f  reason: collision with root package name */
    private final Set f56119f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f56120g;

    /* renamed from: h  reason: collision with root package name */
    private int f56121h;

    /* renamed from: i  reason: collision with root package name */
    tg.b f56122i;

    /* renamed from: j  reason: collision with root package name */
    private com.google.android.gms.common.util.d f56123j;

    /* renamed from: k  reason: collision with root package name */
    private WorkSource f56124k;

    /* renamed from: l  reason: collision with root package name */
    private final String f56125l;

    /* renamed from: m  reason: collision with root package name */
    private final String f56126m;

    /* renamed from: n  reason: collision with root package name */
    private final Context f56127n;

    /* renamed from: o  reason: collision with root package name */
    private final Map f56128o;

    /* renamed from: p  reason: collision with root package name */
    private AtomicInteger f56129p;

    /* renamed from: q  reason: collision with root package name */
    private final ScheduledExecutorService f56130q;

    public a(Context context, int i10, String str) {
        String str2;
        String packageName = context.getPackageName();
        this.f56114a = new Object();
        this.f56116c = 0;
        this.f56119f = new HashSet();
        this.f56120g = true;
        this.f56123j = f.c();
        this.f56128o = new HashMap();
        this.f56129p = new AtomicInteger(0);
        q.m(context, "WakeLock: context must not be null");
        q.g(str, "WakeLock: wakeLockName must not be empty");
        this.f56127n = context.getApplicationContext();
        this.f56126m = str;
        this.f56122i = null;
        if (!"com.google.android.gms".equals(context.getPackageName())) {
            String valueOf = String.valueOf(str);
            if (valueOf.length() != 0) {
                str2 = "*gcore*:".concat(valueOf);
            } else {
                str2 = new String("*gcore*:");
            }
            this.f56125l = str2;
        } else {
            this.f56125l = str;
        }
        PowerManager powerManager = (PowerManager) context.getSystemService("power");
        if (powerManager != null) {
            PowerManager.WakeLock newWakeLock = powerManager.newWakeLock(i10, str);
            this.f56115b = newWakeLock;
            if (o.c(context)) {
                WorkSource b10 = o.b(context, m.a(packageName) ? context.getPackageName() : packageName);
                this.f56124k = b10;
                if (b10 != null) {
                    i(newWakeLock, b10);
                }
            }
            ScheduledExecutorService scheduledExecutorService = f56111s;
            if (scheduledExecutorService == null) {
                synchronized (f56112t) {
                    try {
                        scheduledExecutorService = f56111s;
                        if (scheduledExecutorService == null) {
                            h.a();
                            scheduledExecutorService = Executors.unconfigurableScheduledExecutorService(Executors.newScheduledThreadPool(1));
                            f56111s = scheduledExecutorService;
                        }
                    } finally {
                    }
                }
            }
            this.f56130q = scheduledExecutorService;
            return;
        }
        StringBuilder sb2 = new StringBuilder(29);
        sb2.append((CharSequence) "expected a non-null reference", 0, 29);
        throw new i(sb2.toString());
    }

    public static /* synthetic */ void e(a aVar) {
        synchronized (aVar.f56114a) {
            try {
                if (!aVar.b()) {
                    return;
                }
                Log.e("WakeLock", String.valueOf(aVar.f56125l).concat(" ** IS FORCE-RELEASED ON TIMEOUT **"));
                aVar.g();
                if (!aVar.b()) {
                    return;
                }
                aVar.f56116c = 1;
                aVar.h(0);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private final String f(String str) {
        if (this.f56120g) {
            TextUtils.isEmpty(null);
        }
        return null;
    }

    private final void g() {
        if (!this.f56119f.isEmpty()) {
            ArrayList arrayList = new ArrayList(this.f56119f);
            this.f56119f.clear();
            if (arrayList.size() <= 0) {
                return;
            }
            android.support.v4.media.session.b.a(arrayList.get(0));
            throw null;
        }
    }

    private final void h(int i10) {
        synchronized (this.f56114a) {
            try {
                if (!b()) {
                    return;
                }
                if (this.f56120g) {
                    int i11 = this.f56116c - 1;
                    this.f56116c = i11;
                    if (i11 > 0) {
                        return;
                    }
                } else {
                    this.f56116c = 0;
                }
                g();
                for (d dVar : this.f56128o.values()) {
                    dVar.f56132a = 0;
                }
                this.f56128o.clear();
                Future future = this.f56117d;
                if (future != null) {
                    future.cancel(false);
                    this.f56117d = null;
                    this.f56118e = 0L;
                }
                this.f56121h = 0;
                if (this.f56115b.isHeld()) {
                    try {
                        this.f56115b.release();
                        if (this.f56122i != null) {
                            this.f56122i = null;
                        }
                    } catch (RuntimeException e10) {
                        if (e10.getClass().equals(RuntimeException.class)) {
                            Log.e("WakeLock", String.valueOf(this.f56125l).concat(" failed to release!"), e10);
                            if (this.f56122i != null) {
                                this.f56122i = null;
                            }
                        } else {
                            throw e10;
                        }
                    }
                } else {
                    Log.e("WakeLock", String.valueOf(this.f56125l).concat(" should be held!"));
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
        this.f56129p.incrementAndGet();
        long j11 = f56110r;
        long j12 = LongCompanionObject.MAX_VALUE;
        long max = Math.max(Math.min((long) LongCompanionObject.MAX_VALUE, j11), 1L);
        if (j10 > 0) {
            max = Math.min(j10, max);
        }
        synchronized (this.f56114a) {
            try {
                if (!b()) {
                    this.f56122i = tg.b.a(false, null);
                    this.f56115b.acquire();
                    this.f56123j.b();
                }
                this.f56116c++;
                this.f56121h++;
                f(null);
                d dVar = (d) this.f56128o.get(null);
                if (dVar == null) {
                    dVar = new d(null);
                    this.f56128o.put(null, dVar);
                }
                dVar.f56132a++;
                long b10 = this.f56123j.b();
                if (LongCompanionObject.MAX_VALUE - b10 > max) {
                    j12 = b10 + max;
                }
                if (j12 > this.f56118e) {
                    this.f56118e = j12;
                    Future future = this.f56117d;
                    if (future != null) {
                        future.cancel(false);
                    }
                    this.f56117d = this.f56130q.schedule(new Runnable() { // from class: yg.b
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
        synchronized (this.f56114a) {
            if (this.f56116c > 0) {
                z10 = true;
            } else {
                z10 = false;
            }
        }
        return z10;
    }

    public void c() {
        if (this.f56129p.decrementAndGet() < 0) {
            Log.e("WakeLock", String.valueOf(this.f56125l).concat(" release without a matched acquire!"));
        }
        synchronized (this.f56114a) {
            try {
                f(null);
                if (this.f56128o.containsKey(null)) {
                    d dVar = (d) this.f56128o.get(null);
                    if (dVar != null) {
                        int i10 = dVar.f56132a - 1;
                        dVar.f56132a = i10;
                        if (i10 == 0) {
                            this.f56128o.remove(null);
                        }
                    }
                } else {
                    Log.w("WakeLock", String.valueOf(this.f56125l).concat(" counter does not exist"));
                }
                h(0);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void d(boolean z10) {
        synchronized (this.f56114a) {
            this.f56120g = z10;
        }
    }
}
