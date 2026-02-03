package io.sentry.logger;

import io.sentry.SentryLevel;
import io.sentry.a1;
import io.sentry.k7;
import io.sentry.q6;
import io.sentry.transport.b0;
import io.sentry.x6;
import io.sentry.y0;
import io.sentry.z0;
import io.sentry.z6;
import java.util.ArrayList;
import java.util.Queue;
import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.concurrent.Future;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements io.sentry.logger.b {

    /* renamed from: h  reason: collision with root package name */
    private static final io.sentry.util.a f30086h = new io.sentry.util.a();

    /* renamed from: a  reason: collision with root package name */
    private final k7 f30087a;

    /* renamed from: b  reason: collision with root package name */
    private final y0 f30088b;

    /* renamed from: d  reason: collision with root package name */
    private final z0 f30090d;

    /* renamed from: e  reason: collision with root package name */
    private volatile Future f30091e;

    /* renamed from: f  reason: collision with root package name */
    private volatile boolean f30092f = false;

    /* renamed from: g  reason: collision with root package name */
    private final b0 f30093g = new b0();

    /* renamed from: c  reason: collision with root package name */
    private final Queue f30089c = new ConcurrentLinkedQueue();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b implements Runnable {
        private b() {
        }

        @Override // java.lang.Runnable
        public void run() {
            e.this.e();
        }
    }

    public e(k7 k7Var, y0 y0Var) {
        this.f30087a = k7Var;
        this.f30088b = y0Var;
        this.f30090d = new q6(k7Var);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void e() {
        g();
        a1 a10 = f30086h.a();
        try {
            if (!this.f30089c.isEmpty()) {
                h(true, false);
            } else {
                this.f30092f = false;
            }
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

    private void f() {
        ArrayList arrayList = new ArrayList(100);
        do {
            x6 x6Var = (x6) this.f30089c.poll();
            if (x6Var != null) {
                arrayList.add(x6Var);
            }
            if (this.f30089c.isEmpty()) {
                break;
            }
        } while (arrayList.size() < 100);
        if (!arrayList.isEmpty()) {
            this.f30088b.h(new z6(arrayList));
            for (int i10 = 0; i10 < arrayList.size(); i10++) {
                this.f30093g.a();
            }
        }
    }

    private void g() {
        do {
            f();
        } while (this.f30089c.size() >= 100);
    }

    /* JADX WARN: Can't wrap try/catch for region: R(9:7|8|(1:(2:11|(3:13|(1:15)|(2:17|18)(1:19))))|20|21|(1:23)(1:30)|24|25|(0)(0)) */
    /* JADX WARN: Code restructure failed: missing block: B:24:0x003c, code lost:
        r7 = move-exception;
     */
    /* JADX WARN: Code restructure failed: missing block: B:25:0x003d, code lost:
        r5.f30092f = false;
        r5.f30087a.getLogger().b(io.sentry.SentryLevel.WARNING, "Logs batch processor flush task rejected", r7);
     */
    /* JADX WARN: Removed duplicated region for block: B:27:0x004e  */
    /* JADX WARN: Removed duplicated region for block: B:41:? A[RETURN, SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void h(boolean r6, boolean r7) {
        /*
            r5 = this;
            boolean r0 = r5.f30092f
            if (r0 == 0) goto L7
            if (r6 != 0) goto L7
            goto L51
        L7:
            io.sentry.util.a r0 = io.sentry.logger.e.f30086h
            io.sentry.a1 r0 = r0.a()
            java.util.concurrent.Future r1 = r5.f30091e     // Catch: java.lang.Throwable -> L20
            if (r6 != 0) goto L22
            if (r1 == 0) goto L22
            boolean r6 = r1.isDone()     // Catch: java.lang.Throwable -> L20
            if (r6 != 0) goto L22
            boolean r6 = r1.isCancelled()     // Catch: java.lang.Throwable -> L20
            if (r6 == 0) goto L4c
            goto L22
        L20:
            r6 = move-exception
            goto L52
        L22:
            r6 = 1
            r5.f30092f = r6     // Catch: java.lang.Throwable -> L20
            r6 = 0
            if (r7 == 0) goto L2a
            r7 = r6
            goto L2c
        L2a:
            r7 = 5000(0x1388, float:7.006E-42)
        L2c:
            io.sentry.z0 r1 = r5.f30090d     // Catch: java.lang.Throwable -> L20 java.util.concurrent.RejectedExecutionException -> L3c
            io.sentry.logger.e$b r2 = new io.sentry.logger.e$b     // Catch: java.lang.Throwable -> L20 java.util.concurrent.RejectedExecutionException -> L3c
            r3 = 0
            r2.<init>()     // Catch: java.lang.Throwable -> L20 java.util.concurrent.RejectedExecutionException -> L3c
            long r3 = (long) r7     // Catch: java.lang.Throwable -> L20 java.util.concurrent.RejectedExecutionException -> L3c
            java.util.concurrent.Future r7 = r1.c(r2, r3)     // Catch: java.lang.Throwable -> L20 java.util.concurrent.RejectedExecutionException -> L3c
            r5.f30091e = r7     // Catch: java.lang.Throwable -> L20 java.util.concurrent.RejectedExecutionException -> L3c
            goto L4c
        L3c:
            r7 = move-exception
            r5.f30092f = r6     // Catch: java.lang.Throwable -> L20
            io.sentry.k7 r6 = r5.f30087a     // Catch: java.lang.Throwable -> L20
            io.sentry.ILogger r6 = r6.getLogger()     // Catch: java.lang.Throwable -> L20
            io.sentry.SentryLevel r1 = io.sentry.SentryLevel.WARNING     // Catch: java.lang.Throwable -> L20
            java.lang.String r2 = "Logs batch processor flush task rejected"
            r6.b(r1, r2, r7)     // Catch: java.lang.Throwable -> L20
        L4c:
            if (r0 == 0) goto L51
            r0.close()
        L51:
            return
        L52:
            if (r0 == 0) goto L5c
            r0.close()     // Catch: java.lang.Throwable -> L58
            goto L5c
        L58:
            r7 = move-exception
            r6.addSuppressed(r7)
        L5c:
            throw r6
        */
        throw new UnsupportedOperationException("Method not decompiled: io.sentry.logger.e.h(boolean, boolean):void");
    }

    @Override // io.sentry.logger.b
    public void c(boolean z10) {
        if (z10) {
            h(true, true);
            this.f30090d.submit(new Runnable() { // from class: io.sentry.logger.d
                @Override // java.lang.Runnable
                public final void run() {
                    r0.f30090d.a(e.this.f30087a.getShutdownTimeoutMillis());
                }
            });
            return;
        }
        this.f30090d.a(this.f30087a.getShutdownTimeoutMillis());
        while (!this.f30089c.isEmpty()) {
            f();
        }
    }

    @Override // io.sentry.logger.b
    public void d(long j10) {
        h(true, true);
        try {
            this.f30093g.d(j10, TimeUnit.MILLISECONDS);
        } catch (InterruptedException e10) {
            this.f30087a.getLogger().b(SentryLevel.ERROR, "Failed to flush log events", e10);
            Thread.currentThread().interrupt();
        }
    }
}
