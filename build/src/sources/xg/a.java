package xg;

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
import sg.h;
import sg.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a {

    /* renamed from: r  reason: collision with root package name */
    private static final long f54675r = TimeUnit.DAYS.toMillis(366);

    /* renamed from: s  reason: collision with root package name */
    private static volatile ScheduledExecutorService f54676s = null;

    /* renamed from: t  reason: collision with root package name */
    private static final Object f54677t = new Object();

    /* renamed from: u  reason: collision with root package name */
    private static volatile e f54678u = new c();

    /* renamed from: a  reason: collision with root package name */
    private final Object f54679a;

    /* renamed from: b  reason: collision with root package name */
    private final PowerManager.WakeLock f54680b;

    /* renamed from: c  reason: collision with root package name */
    private int f54681c;

    /* renamed from: d  reason: collision with root package name */
    private Future f54682d;

    /* renamed from: e  reason: collision with root package name */
    private long f54683e;

    /* renamed from: f  reason: collision with root package name */
    private final Set f54684f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f54685g;

    /* renamed from: h  reason: collision with root package name */
    private int f54686h;

    /* renamed from: i  reason: collision with root package name */
    sg.b f54687i;

    /* renamed from: j  reason: collision with root package name */
    private com.google.android.gms.common.util.d f54688j;

    /* renamed from: k  reason: collision with root package name */
    private WorkSource f54689k;

    /* renamed from: l  reason: collision with root package name */
    private final String f54690l;

    /* renamed from: m  reason: collision with root package name */
    private final String f54691m;

    /* renamed from: n  reason: collision with root package name */
    private final Context f54692n;

    /* renamed from: o  reason: collision with root package name */
    private final Map f54693o;

    /* renamed from: p  reason: collision with root package name */
    private AtomicInteger f54694p;

    /* renamed from: q  reason: collision with root package name */
    private final ScheduledExecutorService f54695q;

    public a(Context context, int i10, String str) {
        String str2;
        String packageName = context.getPackageName();
        this.f54679a = new Object();
        this.f54681c = 0;
        this.f54684f = new HashSet();
        this.f54685g = true;
        this.f54688j = f.c();
        this.f54693o = new HashMap();
        this.f54694p = new AtomicInteger(0);
        q.m(context, "WakeLock: context must not be null");
        q.g(str, "WakeLock: wakeLockName must not be empty");
        this.f54692n = context.getApplicationContext();
        this.f54691m = str;
        this.f54687i = null;
        if (!"com.google.android.gms".equals(context.getPackageName())) {
            String valueOf = String.valueOf(str);
            if (valueOf.length() != 0) {
                str2 = "*gcore*:".concat(valueOf);
            } else {
                str2 = new String("*gcore*:");
            }
            this.f54690l = str2;
        } else {
            this.f54690l = str;
        }
        PowerManager powerManager = (PowerManager) context.getSystemService("power");
        if (powerManager != null) {
            PowerManager.WakeLock newWakeLock = powerManager.newWakeLock(i10, str);
            this.f54680b = newWakeLock;
            if (o.c(context)) {
                WorkSource b10 = o.b(context, m.a(packageName) ? context.getPackageName() : packageName);
                this.f54689k = b10;
                if (b10 != null) {
                    i(newWakeLock, b10);
                }
            }
            ScheduledExecutorService scheduledExecutorService = f54676s;
            if (scheduledExecutorService == null) {
                synchronized (f54677t) {
                    try {
                        scheduledExecutorService = f54676s;
                        if (scheduledExecutorService == null) {
                            h.a();
                            scheduledExecutorService = Executors.unconfigurableScheduledExecutorService(Executors.newScheduledThreadPool(1));
                            f54676s = scheduledExecutorService;
                        }
                    } finally {
                    }
                }
            }
            this.f54695q = scheduledExecutorService;
            return;
        }
        StringBuilder sb2 = new StringBuilder(29);
        sb2.append((CharSequence) "expected a non-null reference", 0, 29);
        throw new i(sb2.toString());
    }

    public static /* synthetic */ void e(a aVar) {
        synchronized (aVar.f54679a) {
            try {
                if (!aVar.b()) {
                    return;
                }
                Log.e("WakeLock", String.valueOf(aVar.f54690l).concat(" ** IS FORCE-RELEASED ON TIMEOUT **"));
                aVar.g();
                if (!aVar.b()) {
                    return;
                }
                aVar.f54681c = 1;
                aVar.h(0);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private final String f(String str) {
        if (this.f54685g) {
            TextUtils.isEmpty(null);
        }
        return null;
    }

    private final void g() {
        if (!this.f54684f.isEmpty()) {
            ArrayList arrayList = new ArrayList(this.f54684f);
            this.f54684f.clear();
            if (arrayList.size() <= 0) {
                return;
            }
            android.support.v4.media.session.b.a(arrayList.get(0));
            throw null;
        }
    }

    private final void h(int i10) {
        synchronized (this.f54679a) {
            try {
                if (!b()) {
                    return;
                }
                if (this.f54685g) {
                    int i11 = this.f54681c - 1;
                    this.f54681c = i11;
                    if (i11 > 0) {
                        return;
                    }
                } else {
                    this.f54681c = 0;
                }
                g();
                for (d dVar : this.f54693o.values()) {
                    dVar.f54697a = 0;
                }
                this.f54693o.clear();
                Future future = this.f54682d;
                if (future != null) {
                    future.cancel(false);
                    this.f54682d = null;
                    this.f54683e = 0L;
                }
                this.f54686h = 0;
                if (this.f54680b.isHeld()) {
                    try {
                        this.f54680b.release();
                        if (this.f54687i != null) {
                            this.f54687i = null;
                        }
                    } catch (RuntimeException e10) {
                        if (e10.getClass().equals(RuntimeException.class)) {
                            Log.e("WakeLock", String.valueOf(this.f54690l).concat(" failed to release!"), e10);
                            if (this.f54687i != null) {
                                this.f54687i = null;
                            }
                        } else {
                            throw e10;
                        }
                    }
                } else {
                    Log.e("WakeLock", String.valueOf(this.f54690l).concat(" should be held!"));
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
        this.f54694p.incrementAndGet();
        long j11 = f54675r;
        long j12 = LongCompanionObject.MAX_VALUE;
        long max = Math.max(Math.min((long) LongCompanionObject.MAX_VALUE, j11), 1L);
        if (j10 > 0) {
            max = Math.min(j10, max);
        }
        synchronized (this.f54679a) {
            try {
                if (!b()) {
                    this.f54687i = sg.b.a(false, null);
                    this.f54680b.acquire();
                    this.f54688j.b();
                }
                this.f54681c++;
                this.f54686h++;
                f(null);
                d dVar = (d) this.f54693o.get(null);
                if (dVar == null) {
                    dVar = new d(null);
                    this.f54693o.put(null, dVar);
                }
                dVar.f54697a++;
                long b10 = this.f54688j.b();
                if (LongCompanionObject.MAX_VALUE - b10 > max) {
                    j12 = b10 + max;
                }
                if (j12 > this.f54683e) {
                    this.f54683e = j12;
                    Future future = this.f54682d;
                    if (future != null) {
                        future.cancel(false);
                    }
                    this.f54682d = this.f54695q.schedule(new Runnable() { // from class: xg.b
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
        synchronized (this.f54679a) {
            if (this.f54681c > 0) {
                z10 = true;
            } else {
                z10 = false;
            }
        }
        return z10;
    }

    public void c() {
        if (this.f54694p.decrementAndGet() < 0) {
            Log.e("WakeLock", String.valueOf(this.f54690l).concat(" release without a matched acquire!"));
        }
        synchronized (this.f54679a) {
            try {
                f(null);
                if (this.f54693o.containsKey(null)) {
                    d dVar = (d) this.f54693o.get(null);
                    if (dVar != null) {
                        int i10 = dVar.f54697a - 1;
                        dVar.f54697a = i10;
                        if (i10 == 0) {
                            this.f54693o.remove(null);
                        }
                    }
                } else {
                    Log.w("WakeLock", String.valueOf(this.f54690l).concat(" counter does not exist"));
                }
                h(0);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void d(boolean z10) {
        synchronized (this.f54679a) {
            this.f54685g = z10;
        }
    }
}
