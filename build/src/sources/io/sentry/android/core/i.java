package io.sentry.android.core;

import android.app.Activity;
import android.util.SparseIntArray;
import androidx.core.app.FrameMetricsAggregator;
import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.util.r;
import java.util.Map;
import java.util.WeakHashMap;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private io.sentry.util.r f27055a;

    /* renamed from: b  reason: collision with root package name */
    private final SentryAndroidOptions f27056b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f27057c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f27058d;

    /* renamed from: e  reason: collision with root package name */
    private final a2 f27059e;

    /* renamed from: f  reason: collision with root package name */
    protected io.sentry.util.a f27060f;

    /* renamed from: g  reason: collision with root package name */
    private final io.sentry.util.r f27061g;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final int f27062a;

        /* renamed from: b  reason: collision with root package name */
        private final int f27063b;

        /* renamed from: c  reason: collision with root package name */
        private final int f27064c;

        private b(int i10, int i11, int i12) {
            this.f27062a = i10;
            this.f27063b = i11;
            this.f27064c = i12;
        }
    }

    public i(io.sentry.util.u uVar, SentryAndroidOptions sentryAndroidOptions, a2 a2Var) {
        this.f27057c = new ConcurrentHashMap();
        this.f27058d = new WeakHashMap();
        this.f27060f = new io.sentry.util.a();
        this.f27061g = uVar.e("androidx.core.app.FrameMetricsAggregator", sentryAndroidOptions.getLogger());
        this.f27055a = new io.sentry.util.r(new r.a() { // from class: io.sentry.android.core.d
            @Override // io.sentry.util.r.a
            public final Object a() {
                return i.e();
            }
        });
        this.f27056b = sentryAndroidOptions;
        this.f27059e = a2Var;
    }

    public static /* synthetic */ void c(i iVar, Runnable runnable, String str) {
        iVar.getClass();
        try {
            runnable.run();
        } catch (Throwable unused) {
            if (str != null) {
                ILogger logger = iVar.f27056b.getLogger();
                SentryLevel sentryLevel = SentryLevel.WARNING;
                logger.c(sentryLevel, "Failed to execute " + str, new Object[0]);
            }
        }
    }

    public static /* synthetic */ FrameMetricsAggregator e() {
        return new FrameMetricsAggregator();
    }

    private b g() {
        int i10;
        int i11;
        SparseIntArray sparseIntArray;
        if (!i() || !((Boolean) this.f27061g.a()).booleanValue()) {
            return null;
        }
        SparseIntArray[] b10 = ((FrameMetricsAggregator) this.f27055a.a()).b();
        int i12 = 0;
        if (b10 != null && b10.length > 0 && (sparseIntArray = b10[0]) != null) {
            int i13 = 0;
            i10 = 0;
            i11 = 0;
            while (i12 < sparseIntArray.size()) {
                int keyAt = sparseIntArray.keyAt(i12);
                int valueAt = sparseIntArray.valueAt(i12);
                i13 += valueAt;
                if (keyAt > 700) {
                    i11 += valueAt;
                } else if (keyAt > 16) {
                    i10 += valueAt;
                }
                i12++;
            }
            i12 = i13;
        } else {
            i10 = 0;
            i11 = 0;
        }
        return new b(i12, i10, i11);
    }

    private b h(Activity activity) {
        b g10;
        b bVar = (b) this.f27058d.remove(activity);
        if (bVar == null || (g10 = g()) == null) {
            return null;
        }
        return new b(g10.f27062a - bVar.f27062a, g10.f27063b - bVar.f27063b, g10.f27064c - bVar.f27064c);
    }

    private void j(final Runnable runnable, final String str) {
        try {
            if (io.sentry.android.core.internal.util.j.e().a()) {
                runnable.run();
            } else {
                this.f27059e.b(new Runnable() { // from class: io.sentry.android.core.g
                    @Override // java.lang.Runnable
                    public final void run() {
                        i.c(i.this, runnable, str);
                    }
                });
            }
        } catch (Throwable unused) {
            if (str != null) {
                ILogger logger = this.f27056b.getLogger();
                SentryLevel sentryLevel = SentryLevel.WARNING;
                logger.c(sentryLevel, "Failed to execute " + str, new Object[0]);
            }
        }
    }

    private void l(Activity activity) {
        b g10 = g();
        if (g10 != null) {
            this.f27058d.put(activity, g10);
        }
    }

    public void f(final Activity activity) {
        io.sentry.a1 a10 = this.f27060f.a();
        try {
            if (!i()) {
                if (a10 != null) {
                    a10.close();
                    return;
                }
                return;
            }
            j(new Runnable() { // from class: io.sentry.android.core.e
                @Override // java.lang.Runnable
                public final void run() {
                    ((FrameMetricsAggregator) i.this.f27055a.a()).a(activity);
                }
            }, "FrameMetricsAggregator.add");
            l(activity);
            if (a10 != null) {
                a10.close();
            }
        } catch (Throwable th2) {
            if (a10 != null) {
                try {
                    a10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    public boolean i() {
        if (((Boolean) this.f27061g.a()).booleanValue() && this.f27056b.isEnableFramesTracking() && !this.f27056b.isEnablePerformanceV2()) {
            return true;
        }
        return false;
    }

    /* JADX WARN: Code restructure failed: missing block: B:24:0x0080, code lost:
        r1.close();
     */
    /* JADX WARN: Code restructure failed: missing block: B:25:0x0083, code lost:
        return;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void k(final android.app.Activity r6, io.sentry.protocol.x r7) {
        /*
            r5 = this;
            java.lang.String r0 = "none"
            io.sentry.util.a r1 = r5.f27060f
            io.sentry.a1 r1 = r1.a()
            boolean r2 = r5.i()     // Catch: java.lang.Throwable -> L36
            if (r2 != 0) goto L14
            if (r1 == 0) goto L83
            r1.close()
            return
        L14:
            io.sentry.android.core.h r2 = new io.sentry.android.core.h     // Catch: java.lang.Throwable -> L36
            r2.<init>()     // Catch: java.lang.Throwable -> L36
            r3 = 0
            r5.j(r2, r3)     // Catch: java.lang.Throwable -> L36
            io.sentry.android.core.i$b r6 = r5.h(r6)     // Catch: java.lang.Throwable -> L36
            if (r6 == 0) goto L7e
            int r2 = io.sentry.android.core.i.b.a(r6)     // Catch: java.lang.Throwable -> L36
            if (r2 != 0) goto L38
            int r2 = io.sentry.android.core.i.b.b(r6)     // Catch: java.lang.Throwable -> L36
            if (r2 != 0) goto L38
            int r2 = io.sentry.android.core.i.b.c(r6)     // Catch: java.lang.Throwable -> L36
            if (r2 != 0) goto L38
            goto L7e
        L36:
            r6 = move-exception
            goto L84
        L38:
            io.sentry.protocol.k r2 = new io.sentry.protocol.k     // Catch: java.lang.Throwable -> L36
            int r3 = io.sentry.android.core.i.b.a(r6)     // Catch: java.lang.Throwable -> L36
            java.lang.Integer r3 = java.lang.Integer.valueOf(r3)     // Catch: java.lang.Throwable -> L36
            r2.<init>(r3, r0)     // Catch: java.lang.Throwable -> L36
            io.sentry.protocol.k r3 = new io.sentry.protocol.k     // Catch: java.lang.Throwable -> L36
            int r4 = io.sentry.android.core.i.b.b(r6)     // Catch: java.lang.Throwable -> L36
            java.lang.Integer r4 = java.lang.Integer.valueOf(r4)     // Catch: java.lang.Throwable -> L36
            r3.<init>(r4, r0)     // Catch: java.lang.Throwable -> L36
            io.sentry.protocol.k r4 = new io.sentry.protocol.k     // Catch: java.lang.Throwable -> L36
            int r6 = io.sentry.android.core.i.b.c(r6)     // Catch: java.lang.Throwable -> L36
            java.lang.Integer r6 = java.lang.Integer.valueOf(r6)     // Catch: java.lang.Throwable -> L36
            r4.<init>(r6, r0)     // Catch: java.lang.Throwable -> L36
            java.util.HashMap r6 = new java.util.HashMap     // Catch: java.lang.Throwable -> L36
            r6.<init>()     // Catch: java.lang.Throwable -> L36
            java.lang.String r0 = "frames_total"
            r6.put(r0, r2)     // Catch: java.lang.Throwable -> L36
            java.lang.String r0 = "frames_slow"
            r6.put(r0, r3)     // Catch: java.lang.Throwable -> L36
            java.lang.String r0 = "frames_frozen"
            r6.put(r0, r4)     // Catch: java.lang.Throwable -> L36
            java.util.Map r0 = r5.f27057c     // Catch: java.lang.Throwable -> L36
            r0.put(r7, r6)     // Catch: java.lang.Throwable -> L36
            if (r1 == 0) goto L83
            r1.close()
            return
        L7e:
            if (r1 == 0) goto L83
            r1.close()
        L83:
            return
        L84:
            if (r1 == 0) goto L8e
            r1.close()     // Catch: java.lang.Throwable -> L8a
            goto L8e
        L8a:
            r7 = move-exception
            r6.addSuppressed(r7)
        L8e:
            throw r6
        */
        throw new UnsupportedOperationException("Method not decompiled: io.sentry.android.core.i.k(android.app.Activity, io.sentry.protocol.x):void");
    }

    public void m() {
        io.sentry.a1 a10 = this.f27060f.a();
        try {
            if (i()) {
                j(new Runnable() { // from class: io.sentry.android.core.f
                    @Override // java.lang.Runnable
                    public final void run() {
                        ((FrameMetricsAggregator) i.this.f27055a.a()).e();
                    }
                }, "FrameMetricsAggregator.stop");
                ((FrameMetricsAggregator) this.f27055a.a()).d();
            }
            this.f27057c.clear();
            if (a10 != null) {
                a10.close();
            }
        } catch (Throwable th2) {
            if (a10 != null) {
                try {
                    a10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    public Map n(io.sentry.protocol.x xVar) {
        io.sentry.a1 a10 = this.f27060f.a();
        try {
            if (!i()) {
                if (a10 != null) {
                    a10.close();
                }
                return null;
            }
            Map map = (Map) this.f27057c.get(xVar);
            this.f27057c.remove(xVar);
            if (a10 != null) {
                a10.close();
            }
            return map;
        } catch (Throwable th2) {
            if (a10 != null) {
                try {
                    a10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    public i(io.sentry.util.u uVar, SentryAndroidOptions sentryAndroidOptions) {
        this(uVar, sentryAndroidOptions, new a2());
    }
}
