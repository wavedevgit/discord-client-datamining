package vg;

import android.content.Context;
import android.os.PowerManager;
import android.os.WorkSource;
import android.text.TextUtils;
import android.util.Log;
import com.google.android.gms.common.util.f;
import com.google.android.gms.common.util.m;
import com.google.android.gms.common.util.o;
import gf.q;
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
import qg.h;
import qg.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a {

    /* renamed from: r  reason: collision with root package name */
    private static final long f51130r = TimeUnit.DAYS.toMillis(366);

    /* renamed from: s  reason: collision with root package name */
    private static volatile ScheduledExecutorService f51131s = null;

    /* renamed from: t  reason: collision with root package name */
    private static final Object f51132t = new Object();

    /* renamed from: u  reason: collision with root package name */
    private static volatile e f51133u = new c();

    /* renamed from: a  reason: collision with root package name */
    private final Object f51134a;

    /* renamed from: b  reason: collision with root package name */
    private final PowerManager.WakeLock f51135b;

    /* renamed from: c  reason: collision with root package name */
    private int f51136c;

    /* renamed from: d  reason: collision with root package name */
    private Future f51137d;

    /* renamed from: e  reason: collision with root package name */
    private long f51138e;

    /* renamed from: f  reason: collision with root package name */
    private final Set f51139f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f51140g;

    /* renamed from: h  reason: collision with root package name */
    private int f51141h;

    /* renamed from: i  reason: collision with root package name */
    qg.b f51142i;

    /* renamed from: j  reason: collision with root package name */
    private com.google.android.gms.common.util.d f51143j;

    /* renamed from: k  reason: collision with root package name */
    private WorkSource f51144k;

    /* renamed from: l  reason: collision with root package name */
    private final String f51145l;

    /* renamed from: m  reason: collision with root package name */
    private final String f51146m;

    /* renamed from: n  reason: collision with root package name */
    private final Context f51147n;

    /* renamed from: o  reason: collision with root package name */
    private final Map f51148o;

    /* renamed from: p  reason: collision with root package name */
    private AtomicInteger f51149p;

    /* renamed from: q  reason: collision with root package name */
    private final ScheduledExecutorService f51150q;

    public a(Context context, int i10, String str) {
        String str2;
        String packageName = context.getPackageName();
        this.f51134a = new Object();
        this.f51136c = 0;
        this.f51139f = new HashSet();
        this.f51140g = true;
        this.f51143j = f.c();
        this.f51148o = new HashMap();
        this.f51149p = new AtomicInteger(0);
        q.m(context, "WakeLock: context must not be null");
        q.g(str, "WakeLock: wakeLockName must not be empty");
        this.f51147n = context.getApplicationContext();
        this.f51146m = str;
        this.f51142i = null;
        if (!"com.google.android.gms".equals(context.getPackageName())) {
            String valueOf = String.valueOf(str);
            if (valueOf.length() != 0) {
                str2 = "*gcore*:".concat(valueOf);
            } else {
                str2 = new String("*gcore*:");
            }
            this.f51145l = str2;
        } else {
            this.f51145l = str;
        }
        PowerManager powerManager = (PowerManager) context.getSystemService("power");
        if (powerManager != null) {
            PowerManager.WakeLock newWakeLock = powerManager.newWakeLock(i10, str);
            this.f51135b = newWakeLock;
            if (o.c(context)) {
                WorkSource b10 = o.b(context, m.a(packageName) ? context.getPackageName() : packageName);
                this.f51144k = b10;
                if (b10 != null) {
                    i(newWakeLock, b10);
                }
            }
            ScheduledExecutorService scheduledExecutorService = f51131s;
            if (scheduledExecutorService == null) {
                synchronized (f51132t) {
                    try {
                        scheduledExecutorService = f51131s;
                        if (scheduledExecutorService == null) {
                            h.a();
                            scheduledExecutorService = Executors.unconfigurableScheduledExecutorService(Executors.newScheduledThreadPool(1));
                            f51131s = scheduledExecutorService;
                        }
                    } finally {
                    }
                }
            }
            this.f51150q = scheduledExecutorService;
            return;
        }
        StringBuilder sb2 = new StringBuilder(29);
        sb2.append((CharSequence) "expected a non-null reference", 0, 29);
        throw new i(sb2.toString());
    }

    public static /* synthetic */ void e(a aVar) {
        synchronized (aVar.f51134a) {
            try {
                if (!aVar.b()) {
                    return;
                }
                Log.e("WakeLock", String.valueOf(aVar.f51145l).concat(" ** IS FORCE-RELEASED ON TIMEOUT **"));
                aVar.g();
                if (!aVar.b()) {
                    return;
                }
                aVar.f51136c = 1;
                aVar.h(0);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private final String f(String str) {
        if (this.f51140g) {
            TextUtils.isEmpty(null);
        }
        return null;
    }

    private final void g() {
        if (!this.f51139f.isEmpty()) {
            ArrayList arrayList = new ArrayList(this.f51139f);
            this.f51139f.clear();
            if (arrayList.size() <= 0) {
                return;
            }
            android.support.v4.media.session.b.a(arrayList.get(0));
            throw null;
        }
    }

    private final void h(int i10) {
        synchronized (this.f51134a) {
            try {
                if (!b()) {
                    return;
                }
                if (this.f51140g) {
                    int i11 = this.f51136c - 1;
                    this.f51136c = i11;
                    if (i11 > 0) {
                        return;
                    }
                } else {
                    this.f51136c = 0;
                }
                g();
                for (d dVar : this.f51148o.values()) {
                    dVar.f51152a = 0;
                }
                this.f51148o.clear();
                Future future = this.f51137d;
                if (future != null) {
                    future.cancel(false);
                    this.f51137d = null;
                    this.f51138e = 0L;
                }
                this.f51141h = 0;
                if (this.f51135b.isHeld()) {
                    try {
                        this.f51135b.release();
                        if (this.f51142i != null) {
                            this.f51142i = null;
                        }
                    } catch (RuntimeException e10) {
                        if (e10.getClass().equals(RuntimeException.class)) {
                            Log.e("WakeLock", String.valueOf(this.f51145l).concat(" failed to release!"), e10);
                            if (this.f51142i != null) {
                                this.f51142i = null;
                            }
                        } else {
                            throw e10;
                        }
                    }
                } else {
                    Log.e("WakeLock", String.valueOf(this.f51145l).concat(" should be held!"));
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
        this.f51149p.incrementAndGet();
        long j11 = f51130r;
        long j12 = LongCompanionObject.MAX_VALUE;
        long max = Math.max(Math.min((long) LongCompanionObject.MAX_VALUE, j11), 1L);
        if (j10 > 0) {
            max = Math.min(j10, max);
        }
        synchronized (this.f51134a) {
            try {
                if (!b()) {
                    this.f51142i = qg.b.a(false, null);
                    this.f51135b.acquire();
                    this.f51143j.b();
                }
                this.f51136c++;
                this.f51141h++;
                f(null);
                d dVar = (d) this.f51148o.get(null);
                if (dVar == null) {
                    dVar = new d(null);
                    this.f51148o.put(null, dVar);
                }
                dVar.f51152a++;
                long b10 = this.f51143j.b();
                if (LongCompanionObject.MAX_VALUE - b10 > max) {
                    j12 = b10 + max;
                }
                if (j12 > this.f51138e) {
                    this.f51138e = j12;
                    Future future = this.f51137d;
                    if (future != null) {
                        future.cancel(false);
                    }
                    this.f51137d = this.f51150q.schedule(new Runnable() { // from class: vg.b
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
        synchronized (this.f51134a) {
            if (this.f51136c > 0) {
                z10 = true;
            } else {
                z10 = false;
            }
        }
        return z10;
    }

    public void c() {
        if (this.f51149p.decrementAndGet() < 0) {
            Log.e("WakeLock", String.valueOf(this.f51145l).concat(" release without a matched acquire!"));
        }
        synchronized (this.f51134a) {
            try {
                f(null);
                if (this.f51148o.containsKey(null)) {
                    d dVar = (d) this.f51148o.get(null);
                    if (dVar != null) {
                        int i10 = dVar.f51152a - 1;
                        dVar.f51152a = i10;
                        if (i10 == 0) {
                            this.f51148o.remove(null);
                        }
                    }
                } else {
                    Log.w("WakeLock", String.valueOf(this.f51145l).concat(" counter does not exist"));
                }
                h(0);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void d(boolean z10) {
        synchronized (this.f51134a) {
            this.f51140g = z10;
        }
    }
}
