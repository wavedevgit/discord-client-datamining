package com.facebook.imagepipeline.producers;

import android.os.SystemClock;
import java.util.concurrent.Executor;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f10766a;

    /* renamed from: b  reason: collision with root package name */
    private final d f10767b;

    /* renamed from: e  reason: collision with root package name */
    private final int f10770e;

    /* renamed from: c  reason: collision with root package name */
    private final Runnable f10768c = new a();

    /* renamed from: d  reason: collision with root package name */
    private final Runnable f10769d = new b();

    /* renamed from: f  reason: collision with root package name */
    ta.k f10771f = null;

    /* renamed from: g  reason: collision with root package name */
    int f10772g = 0;

    /* renamed from: h  reason: collision with root package name */
    f f10773h = f.IDLE;

    /* renamed from: i  reason: collision with root package name */
    long f10774i = 0;

    /* renamed from: j  reason: collision with root package name */
    long f10775j = 0;

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
        static final /* synthetic */ int[] f10778a;

        static {
            int[] iArr = new int[f.values().length];
            f10778a = iArr;
            try {
                iArr[f.IDLE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f10778a[f.QUEUED.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f10778a[f.RUNNING.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f10778a[f.RUNNING_AND_PENDING.ordinal()] = 4;
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
        private static ScheduledExecutorService f10779a;

        static ScheduledExecutorService a() {
            if (f10779a == null) {
                f10779a = Executors.newSingleThreadScheduledExecutor();
            }
            return f10779a;
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
        this.f10766a = executor;
        this.f10767b = dVar;
        this.f10770e = i10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void d() {
        ta.k kVar;
        int i10;
        long uptimeMillis = SystemClock.uptimeMillis();
        synchronized (this) {
            kVar = this.f10771f;
            i10 = this.f10772g;
            this.f10771f = null;
            this.f10772g = 0;
            this.f10773h = f.RUNNING;
            this.f10775j = uptimeMillis;
        }
        try {
            if (i(kVar, i10)) {
                this.f10767b.a(kVar, i10);
            }
        } finally {
            ta.k.k(kVar);
            g();
        }
    }

    private void e(long j10) {
        Runnable a10 = ua.a.a(this.f10769d, "JobScheduler_enqueueJob");
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
                if (this.f10773h == f.RUNNING_AND_PENDING) {
                    j10 = Math.max(this.f10775j + this.f10770e, uptimeMillis);
                    this.f10774i = uptimeMillis;
                    this.f10773h = f.QUEUED;
                    z10 = true;
                } else {
                    this.f10773h = f.IDLE;
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
        if (!com.facebook.imagepipeline.producers.c.d(i10) && !com.facebook.imagepipeline.producers.c.m(i10, 4) && !ta.k.O0(kVar)) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void j() {
        this.f10766a.execute(ua.a.a(this.f10768c, "JobScheduler_submitJob"));
    }

    public void c() {
        ta.k kVar;
        synchronized (this) {
            kVar = this.f10771f;
            this.f10771f = null;
            this.f10772g = 0;
        }
        ta.k.k(kVar);
    }

    public synchronized long f() {
        return this.f10775j - this.f10774i;
    }

    public boolean h() {
        long max;
        long uptimeMillis = SystemClock.uptimeMillis();
        synchronized (this) {
            try {
                boolean z10 = false;
                if (!i(this.f10771f, this.f10772g)) {
                    return false;
                }
                int i10 = c.f10778a[this.f10773h.ordinal()];
                if (i10 != 1) {
                    if (i10 == 3) {
                        this.f10773h = f.RUNNING_AND_PENDING;
                    }
                    max = 0;
                } else {
                    max = Math.max(this.f10775j + this.f10770e, uptimeMillis);
                    this.f10774i = uptimeMillis;
                    this.f10773h = f.QUEUED;
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
            kVar2 = this.f10771f;
            this.f10771f = ta.k.g(kVar);
            this.f10772g = i10;
        }
        ta.k.k(kVar2);
        return true;
    }
}
