package com.facebook.imagepipeline.producers;

import android.os.SystemClock;
import java.util.concurrent.Executor;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f11343a;

    /* renamed from: b  reason: collision with root package name */
    private final d f11344b;

    /* renamed from: e  reason: collision with root package name */
    private final int f11347e;

    /* renamed from: c  reason: collision with root package name */
    private final Runnable f11345c = new a();

    /* renamed from: d  reason: collision with root package name */
    private final Runnable f11346d = new b();

    /* renamed from: f  reason: collision with root package name */
    ta.k f11348f = null;

    /* renamed from: g  reason: collision with root package name */
    int f11349g = 0;

    /* renamed from: h  reason: collision with root package name */
    f f11350h = f.IDLE;

    /* renamed from: i  reason: collision with root package name */
    long f11351i = 0;

    /* renamed from: j  reason: collision with root package name */
    long f11352j = 0;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Runnable {
        a() {
        }

        @Override // java.lang.Runnable
        public void run() {
            e0.this.d();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class b implements Runnable {
        b() {
        }

        @Override // java.lang.Runnable
        public void run() {
            e0.this.j();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static /* synthetic */ class c {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f11355a;

        static {
            int[] iArr = new int[f.values().length];
            f11355a = iArr;
            try {
                iArr[f.IDLE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f11355a[f.QUEUED.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f11355a[f.RUNNING.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f11355a[f.RUNNING_AND_PENDING.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface d {
        void a(ta.k kVar, int i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class e {

        /* renamed from: a  reason: collision with root package name */
        private static ScheduledExecutorService f11356a;

        static ScheduledExecutorService a() {
            if (f11356a == null) {
                f11356a = Executors.newSingleThreadScheduledExecutor();
            }
            return f11356a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public enum f {
        IDLE,
        QUEUED,
        RUNNING,
        RUNNING_AND_PENDING
    }

    public e0(Executor executor, d dVar, int i10) {
        this.f11343a = executor;
        this.f11344b = dVar;
        this.f11347e = i10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void d() {
        ta.k kVar;
        int i10;
        long uptimeMillis = SystemClock.uptimeMillis();
        synchronized (this) {
            kVar = this.f11348f;
            i10 = this.f11349g;
            this.f11348f = null;
            this.f11349g = 0;
            this.f11350h = f.RUNNING;
            this.f11352j = uptimeMillis;
        }
        try {
            if (i(kVar, i10)) {
                this.f11344b.a(kVar, i10);
            }
        } finally {
            ta.k.i(kVar);
            g();
        }
    }

    private void e(long j10) {
        Runnable a10 = ua.a.a(this.f11346d, "JobScheduler_enqueueJob");
        if (j10 > 0) {
            e.a().schedule(a10, j10, TimeUnit.MILLISECONDS);
        } else {
            a10.run();
        }
    }

    private void g() {
        long j10;
        boolean z10;
        long uptimeMillis = SystemClock.uptimeMillis();
        synchronized (this) {
            try {
                if (this.f11350h == f.RUNNING_AND_PENDING) {
                    j10 = Math.max(this.f11352j + this.f11347e, uptimeMillis);
                    this.f11351i = uptimeMillis;
                    this.f11350h = f.QUEUED;
                    z10 = true;
                } else {
                    this.f11350h = f.IDLE;
                    j10 = 0;
                    z10 = false;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        if (z10) {
            e(j10 - uptimeMillis);
        }
    }

    private static boolean i(ta.k kVar, int i10) {
        if (!com.facebook.imagepipeline.producers.c.d(i10) && !com.facebook.imagepipeline.producers.c.m(i10, 4) && !ta.k.H0(kVar)) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void j() {
        this.f11343a.execute(ua.a.a(this.f11345c, "JobScheduler_submitJob"));
    }

    public void c() {
        ta.k kVar;
        synchronized (this) {
            kVar = this.f11348f;
            this.f11348f = null;
            this.f11349g = 0;
        }
        ta.k.i(kVar);
    }

    public synchronized long f() {
        return this.f11352j - this.f11351i;
    }

    public boolean h() {
        long max;
        long uptimeMillis = SystemClock.uptimeMillis();
        synchronized (this) {
            try {
                boolean z10 = false;
                if (!i(this.f11348f, this.f11349g)) {
                    return false;
                }
                int i10 = c.f11355a[this.f11350h.ordinal()];
                if (i10 != 1) {
                    if (i10 == 3) {
                        this.f11350h = f.RUNNING_AND_PENDING;
                    }
                    max = 0;
                } else {
                    max = Math.max(this.f11352j + this.f11347e, uptimeMillis);
                    this.f11351i = uptimeMillis;
                    this.f11350h = f.QUEUED;
                    z10 = true;
                }
                if (z10) {
                    e(max - uptimeMillis);
                }
                return true;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public boolean k(ta.k kVar, int i10) {
        ta.k kVar2;
        if (!i(kVar, i10)) {
            return false;
        }
        synchronized (this) {
            kVar2 = this.f11348f;
            this.f11348f = ta.k.h(kVar);
            this.f11349g = i10;
        }
        ta.k.i(kVar2);
        return true;
    }
}
