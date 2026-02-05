package wg;

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
import rg.h;
import rg.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a {

    /* renamed from: r  reason: collision with root package name */
    private static final long f53040r = TimeUnit.DAYS.toMillis(366);

    /* renamed from: s  reason: collision with root package name */
    private static volatile ScheduledExecutorService f53041s = null;

    /* renamed from: t  reason: collision with root package name */
    private static final Object f53042t = new Object();

    /* renamed from: u  reason: collision with root package name */
    private static volatile e f53043u = new c();

    /* renamed from: a  reason: collision with root package name */
    private final Object f53044a;

    /* renamed from: b  reason: collision with root package name */
    private final PowerManager.WakeLock f53045b;

    /* renamed from: c  reason: collision with root package name */
    private int f53046c;

    /* renamed from: d  reason: collision with root package name */
    private Future f53047d;

    /* renamed from: e  reason: collision with root package name */
    private long f53048e;

    /* renamed from: f  reason: collision with root package name */
    private final Set f53049f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f53050g;

    /* renamed from: h  reason: collision with root package name */
    private int f53051h;

    /* renamed from: i  reason: collision with root package name */
    rg.b f53052i;

    /* renamed from: j  reason: collision with root package name */
    private com.google.android.gms.common.util.d f53053j;

    /* renamed from: k  reason: collision with root package name */
    private WorkSource f53054k;

    /* renamed from: l  reason: collision with root package name */
    private final String f53055l;

    /* renamed from: m  reason: collision with root package name */
    private final String f53056m;

    /* renamed from: n  reason: collision with root package name */
    private final Context f53057n;

    /* renamed from: o  reason: collision with root package name */
    private final Map f53058o;

    /* renamed from: p  reason: collision with root package name */
    private AtomicInteger f53059p;

    /* renamed from: q  reason: collision with root package name */
    private final ScheduledExecutorService f53060q;

    public a(Context context, int i10, String str) {
        String str2;
        String packageName = context.getPackageName();
        this.f53044a = new Object();
        this.f53046c = 0;
        this.f53049f = new HashSet();
        this.f53050g = true;
        this.f53053j = f.c();
        this.f53058o = new HashMap();
        this.f53059p = new AtomicInteger(0);
        q.m(context, "WakeLock: context must not be null");
        q.g(str, "WakeLock: wakeLockName must not be empty");
        this.f53057n = context.getApplicationContext();
        this.f53056m = str;
        this.f53052i = null;
        if (!"com.google.android.gms".equals(context.getPackageName())) {
            String valueOf = String.valueOf(str);
            if (valueOf.length() != 0) {
                str2 = "*gcore*:".concat(valueOf);
            } else {
                str2 = new String("*gcore*:");
            }
            this.f53055l = str2;
        } else {
            this.f53055l = str;
        }
        PowerManager powerManager = (PowerManager) context.getSystemService("power");
        if (powerManager != null) {
            PowerManager.WakeLock newWakeLock = powerManager.newWakeLock(i10, str);
            this.f53045b = newWakeLock;
            if (o.c(context)) {
                WorkSource b10 = o.b(context, m.a(packageName) ? context.getPackageName() : packageName);
                this.f53054k = b10;
                if (b10 != null) {
                    i(newWakeLock, b10);
                }
            }
            ScheduledExecutorService scheduledExecutorService = f53041s;
            if (scheduledExecutorService == null) {
                synchronized (f53042t) {
                    try {
                        scheduledExecutorService = f53041s;
                        if (scheduledExecutorService == null) {
                            h.a();
                            scheduledExecutorService = Executors.unconfigurableScheduledExecutorService(Executors.newScheduledThreadPool(1));
                            f53041s = scheduledExecutorService;
                        }
                    } finally {
                    }
                }
            }
            this.f53060q = scheduledExecutorService;
            return;
        }
        StringBuilder sb2 = new StringBuilder(29);
        sb2.append((CharSequence) "expected a non-null reference", 0, 29);
        throw new i(sb2.toString());
    }

    public static /* synthetic */ void e(a aVar) {
        synchronized (aVar.f53044a) {
            try {
                if (!aVar.b()) {
                    return;
                }
                Log.e("WakeLock", String.valueOf(aVar.f53055l).concat(" ** IS FORCE-RELEASED ON TIMEOUT **"));
                aVar.g();
                if (!aVar.b()) {
                    return;
                }
                aVar.f53046c = 1;
                aVar.h(0);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private final String f(String str) {
        if (this.f53050g) {
            TextUtils.isEmpty(null);
        }
        return null;
    }

    private final void g() {
        if (!this.f53049f.isEmpty()) {
            ArrayList arrayList = new ArrayList(this.f53049f);
            this.f53049f.clear();
            if (arrayList.size() <= 0) {
                return;
            }
            android.support.v4.media.session.b.a(arrayList.get(0));
            throw null;
        }
    }

    private final void h(int i10) {
        synchronized (this.f53044a) {
            try {
                if (!b()) {
                    return;
                }
                if (this.f53050g) {
                    int i11 = this.f53046c - 1;
                    this.f53046c = i11;
                    if (i11 > 0) {
                        return;
                    }
                } else {
                    this.f53046c = 0;
                }
                g();
                for (d dVar : this.f53058o.values()) {
                    dVar.f53062a = 0;
                }
                this.f53058o.clear();
                Future future = this.f53047d;
                if (future != null) {
                    future.cancel(false);
                    this.f53047d = null;
                    this.f53048e = 0L;
                }
                this.f53051h = 0;
                if (this.f53045b.isHeld()) {
                    try {
                        this.f53045b.release();
                        if (this.f53052i != null) {
                            this.f53052i = null;
                        }
                    } catch (RuntimeException e10) {
                        if (e10.getClass().equals(RuntimeException.class)) {
                            Log.e("WakeLock", String.valueOf(this.f53055l).concat(" failed to release!"), e10);
                            if (this.f53052i != null) {
                                this.f53052i = null;
                            }
                        } else {
                            throw e10;
                        }
                    }
                } else {
                    Log.e("WakeLock", String.valueOf(this.f53055l).concat(" should be held!"));
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
        this.f53059p.incrementAndGet();
        long j11 = f53040r;
        long j12 = LongCompanionObject.MAX_VALUE;
        long max = Math.max(Math.min((long) LongCompanionObject.MAX_VALUE, j11), 1L);
        if (j10 > 0) {
            max = Math.min(j10, max);
        }
        synchronized (this.f53044a) {
            try {
                if (!b()) {
                    this.f53052i = rg.b.a(false, null);
                    this.f53045b.acquire();
                    this.f53053j.b();
                }
                this.f53046c++;
                this.f53051h++;
                f(null);
                d dVar = (d) this.f53058o.get(null);
                if (dVar == null) {
                    dVar = new d(null);
                    this.f53058o.put(null, dVar);
                }
                dVar.f53062a++;
                long b10 = this.f53053j.b();
                if (LongCompanionObject.MAX_VALUE - b10 > max) {
                    j12 = b10 + max;
                }
                if (j12 > this.f53048e) {
                    this.f53048e = j12;
                    Future future = this.f53047d;
                    if (future != null) {
                        future.cancel(false);
                    }
                    this.f53047d = this.f53060q.schedule(new Runnable() { // from class: wg.b
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
        synchronized (this.f53044a) {
            if (this.f53046c > 0) {
                z10 = true;
            } else {
                z10 = false;
            }
        }
        return z10;
    }

    public void c() {
        if (this.f53059p.decrementAndGet() < 0) {
            Log.e("WakeLock", String.valueOf(this.f53055l).concat(" release without a matched acquire!"));
        }
        synchronized (this.f53044a) {
            try {
                f(null);
                if (this.f53058o.containsKey(null)) {
                    d dVar = (d) this.f53058o.get(null);
                    if (dVar != null) {
                        int i10 = dVar.f53062a - 1;
                        dVar.f53062a = i10;
                        if (i10 == 0) {
                            this.f53058o.remove(null);
                        }
                    }
                } else {
                    Log.w("WakeLock", String.valueOf(this.f53055l).concat(" counter does not exist"));
                }
                h(0);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void d(boolean z10) {
        synchronized (this.f53044a) {
            this.f53050g = z10;
        }
    }
}
