package com.facebook.imagepipeline.producers;

import android.os.SystemClock;
import java.util.concurrent.Executor;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f10342a;

    /* renamed from: b  reason: collision with root package name */
    private final d f10343b;

    /* renamed from: e  reason: collision with root package name */
    private final int f10346e;

    /* renamed from: c  reason: collision with root package name */
    private final Runnable f10344c = new a();

    /* renamed from: d  reason: collision with root package name */
    private final Runnable f10345d = new b();

    /* renamed from: f  reason: collision with root package name */
    sa.k f10347f = null;

    /* renamed from: g  reason: collision with root package name */
    int f10348g = 0;

    /* renamed from: h  reason: collision with root package name */
    f f10349h = f.IDLE;

    /* renamed from: i  reason: collision with root package name */
    long f10350i = 0;

    /* renamed from: j  reason: collision with root package name */
    long f10351j = 0;

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
        static final /* synthetic */ int[] f10354a;

        static {
            int[] iArr = new int[f.values().length];
            f10354a = iArr;
            try {
                iArr[f.IDLE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f10354a[f.QUEUED.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f10354a[f.RUNNING.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f10354a[f.RUNNING_AND_PENDING.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface d {
        void a(sa.k kVar, int i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class e {

        /* renamed from: a  reason: collision with root package name */
        private static ScheduledExecutorService f10355a;

        static ScheduledExecutorService a() {
            if (f10355a == null) {
                f10355a = Executors.newSingleThreadScheduledExecutor();
            }
            return f10355a;
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
        this.f10342a = executor;
        this.f10343b = dVar;
        this.f10346e = i10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void d() {
        sa.k kVar;
        int i10;
        long uptimeMillis = SystemClock.uptimeMillis();
        synchronized (this) {
            kVar = this.f10347f;
            i10 = this.f10348g;
            this.f10347f = null;
            this.f10348g = 0;
            this.f10349h = f.RUNNING;
            this.f10351j = uptimeMillis;
        }
        try {
            if (i(kVar, i10)) {
                this.f10343b.a(kVar, i10);
            }
        } finally {
            sa.k.l(kVar);
            g();
        }
    }

    private void e(long j10) {
        Runnable a10 = ta.a.a(this.f10345d, "JobScheduler_enqueueJob");
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
                if (this.f10349h == f.RUNNING_AND_PENDING) {
                    j10 = Math.max(this.f10351j + this.f10346e, uptimeMillis);
                    this.f10350i = uptimeMillis;
                    this.f10349h = f.QUEUED;
                    z10 = true;
                } else {
                    this.f10349h = f.IDLE;
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

    private static boolean i(sa.k kVar, int i10) {
        if (!com.facebook.imagepipeline.producers.c.d(i10) && !com.facebook.imagepipeline.producers.c.m(i10, 4) && !sa.k.R0(kVar)) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void j() {
        this.f10342a.execute(ta.a.a(this.f10344c, "JobScheduler_submitJob"));
    }

    public void c() {
        sa.k kVar;
        synchronized (this) {
            kVar = this.f10347f;
            this.f10347f = null;
            this.f10348g = 0;
        }
        sa.k.l(kVar);
    }

    public synchronized long f() {
        return this.f10351j - this.f10350i;
    }

    public boolean h() {
        long max;
        long uptimeMillis = SystemClock.uptimeMillis();
        synchronized (this) {
            try {
                boolean z10 = false;
                if (!i(this.f10347f, this.f10348g)) {
                    return false;
                }
                int i10 = c.f10354a[this.f10349h.ordinal()];
                if (i10 != 1) {
                    if (i10 == 3) {
                        this.f10349h = f.RUNNING_AND_PENDING;
                    }
                    max = 0;
                } else {
                    max = Math.max(this.f10351j + this.f10346e, uptimeMillis);
                    this.f10350i = uptimeMillis;
                    this.f10349h = f.QUEUED;
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

    public boolean k(sa.k kVar, int i10) {
        sa.k kVar2;
        if (!i(kVar, i10)) {
            return false;
        }
        synchronized (this) {
            kVar2 = this.f10347f;
            this.f10347f = sa.k.h(kVar);
            this.f10348g = i10;
        }
        sa.k.l(kVar2);
        return true;
    }
}
