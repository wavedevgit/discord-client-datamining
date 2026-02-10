package com.budiyev.android.codescanner;

import java.lang.Thread;
import java.util.EnumMap;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class f {

    /* renamed from: a  reason: collision with root package name */
    private final kk.j f9060a;

    /* renamed from: b  reason: collision with root package name */
    private final a f9061b;

    /* renamed from: c  reason: collision with root package name */
    private final c f9062c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f9063d;

    /* renamed from: e  reason: collision with root package name */
    private final Object f9064e = new Object();

    /* renamed from: f  reason: collision with root package name */
    private volatile d f9065f;

    /* renamed from: g  reason: collision with root package name */
    private volatile e f9066g;

    /* renamed from: h  reason: collision with root package name */
    private volatile b f9067h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private final class a extends Thread {
        public a() {
            super("cs-decoder");
        }

        /* JADX WARN: Removed duplicated region for block: B:37:0x0035 A[SYNTHETIC] */
        /* JADX WARN: Removed duplicated region for block: B:44:0x0005 A[SYNTHETIC] */
        @Override // java.lang.Thread, java.lang.Runnable
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public void run() {
            /*
                r4 = this;
                r0 = 10
                android.os.Process.setThreadPriority(r0)
            L5:
                com.budiyev.android.codescanner.f r0 = com.budiyev.android.codescanner.f.this
                com.budiyev.android.codescanner.f$b r1 = com.budiyev.android.codescanner.f.b.IDLE
                com.budiyev.android.codescanner.f.a(r0, r1)
            Lc:
                com.budiyev.android.codescanner.f r0 = com.budiyev.android.codescanner.f.this     // Catch: kk.n -> L5 java.lang.Throwable -> L50
                java.lang.Object r0 = com.budiyev.android.codescanner.f.b(r0)     // Catch: kk.n -> L5 java.lang.Throwable -> L50
                monitor-enter(r0)     // Catch: kk.n -> L5 java.lang.Throwable -> L50
                com.budiyev.android.codescanner.f r1 = com.budiyev.android.codescanner.f.this     // Catch: java.lang.Throwable -> L52
                com.budiyev.android.codescanner.e r1 = com.budiyev.android.codescanner.f.c(r1)     // Catch: java.lang.Throwable -> L52
                if (r1 == 0) goto L54
                com.budiyev.android.codescanner.f r2 = com.budiyev.android.codescanner.f.this     // Catch: java.lang.Throwable -> L52
                r3 = 0
                com.budiyev.android.codescanner.f.d(r2, r3)     // Catch: java.lang.Throwable -> L52
                monitor-exit(r0)     // Catch: java.lang.Throwable -> L52
                com.budiyev.android.codescanner.f r0 = com.budiyev.android.codescanner.f.this     // Catch: kk.n -> L5 java.lang.Throwable -> L50
                com.budiyev.android.codescanner.f$b r2 = com.budiyev.android.codescanner.f.b.DECODING     // Catch: kk.n -> L5 java.lang.Throwable -> L50
                com.budiyev.android.codescanner.f.a(r0, r2)     // Catch: kk.n -> L5 java.lang.Throwable -> L50
                com.budiyev.android.codescanner.f r0 = com.budiyev.android.codescanner.f.this     // Catch: kk.n -> L5 java.lang.Throwable -> L50
                kk.j r0 = com.budiyev.android.codescanner.f.e(r0)     // Catch: kk.n -> L5 java.lang.Throwable -> L50
                com.google.zxing.Result r0 = r1.a(r0)     // Catch: kk.n -> L5 java.lang.Throwable -> L50
                if (r0 == 0) goto L5
                com.budiyev.android.codescanner.f r1 = com.budiyev.android.codescanner.f.this
                com.budiyev.android.codescanner.f.d(r1, r3)
                com.budiyev.android.codescanner.f r1 = com.budiyev.android.codescanner.f.this
                com.budiyev.android.codescanner.f$b r2 = com.budiyev.android.codescanner.f.b.DECODED
                boolean r1 = com.budiyev.android.codescanner.f.a(r1, r2)
                if (r1 == 0) goto L5
                com.budiyev.android.codescanner.f r1 = com.budiyev.android.codescanner.f.this
                com.budiyev.android.codescanner.d r1 = com.budiyev.android.codescanner.f.f(r1)
                if (r1 == 0) goto L5
                r1.onDecoded(r0)
                goto L5
            L50:
                r0 = move-exception
                goto L6a
            L52:
                r1 = move-exception
                goto L68
            L54:
                com.budiyev.android.codescanner.f r1 = com.budiyev.android.codescanner.f.this     // Catch: java.lang.Throwable -> L52 java.lang.InterruptedException -> L5f
                java.lang.Object r1 = com.budiyev.android.codescanner.f.b(r1)     // Catch: java.lang.Throwable -> L52 java.lang.InterruptedException -> L5f
                r1.wait()     // Catch: java.lang.Throwable -> L52 java.lang.InterruptedException -> L5f
                monitor-exit(r0)     // Catch: java.lang.Throwable -> L52
                goto Lc
            L5f:
                com.budiyev.android.codescanner.f r1 = com.budiyev.android.codescanner.f.this     // Catch: java.lang.Throwable -> L52
                com.budiyev.android.codescanner.f$b r2 = com.budiyev.android.codescanner.f.b.STOPPED     // Catch: java.lang.Throwable -> L52
                com.budiyev.android.codescanner.f.a(r1, r2)     // Catch: java.lang.Throwable -> L52
                monitor-exit(r0)     // Catch: java.lang.Throwable -> L52
                return
            L68:
                monitor-exit(r0)     // Catch: java.lang.Throwable -> L52
                throw r1     // Catch: kk.n -> L5 java.lang.Throwable -> L50
            L6a:
                throw r0
            */
            throw new UnsupportedOperationException("Method not decompiled: com.budiyev.android.codescanner.f.a.run():void");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum b {
        INITIALIZED,
        IDLE,
        DECODING,
        DECODED,
        STOPPED
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface c {
        boolean a(b bVar);
    }

    public f(c cVar, Thread.UncaughtExceptionHandler uncaughtExceptionHandler, List list, d dVar) {
        kk.j jVar = new kk.j();
        this.f9060a = jVar;
        a aVar = new a();
        this.f9061b = aVar;
        aVar.setUncaughtExceptionHandler(uncaughtExceptionHandler);
        EnumMap enumMap = new EnumMap(kk.e.class);
        this.f9063d = enumMap;
        enumMap.put((EnumMap) kk.e.POSSIBLE_FORMATS, (kk.e) list);
        jVar.d(enumMap);
        this.f9065f = dVar;
        this.f9062c = cVar;
        this.f9067h = b.INITIALIZED;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean k(b bVar) {
        this.f9067h = bVar;
        return this.f9062c.a(bVar);
    }

    public void g(e eVar) {
        synchronized (this.f9064e) {
            try {
                if (this.f9067h != b.STOPPED) {
                    this.f9066g = eVar;
                    this.f9064e.notify();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public b h() {
        return this.f9067h;
    }

    public void i(d dVar) {
        this.f9065f = dVar;
    }

    public void j(List list) {
        this.f9063d.put(kk.e.POSSIBLE_FORMATS, list);
        this.f9060a.d(this.f9063d);
    }

    public void l() {
        this.f9061b.interrupt();
        this.f9066g = null;
    }

    public void m() {
        if (this.f9067h == b.INITIALIZED) {
            this.f9061b.start();
            return;
        }
        throw new IllegalStateException("Illegal decoder state");
    }
}
