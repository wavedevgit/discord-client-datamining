package com.budiyev.android.codescanner;

import java.lang.Thread;
import java.util.EnumMap;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class f {

    /* renamed from: a  reason: collision with root package name */
    private final hk.j f8343a;

    /* renamed from: b  reason: collision with root package name */
    private final a f8344b;

    /* renamed from: c  reason: collision with root package name */
    private final c f8345c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f8346d;

    /* renamed from: e  reason: collision with root package name */
    private final Object f8347e = new Object();

    /* renamed from: f  reason: collision with root package name */
    private volatile d f8348f;

    /* renamed from: g  reason: collision with root package name */
    private volatile e f8349g;

    /* renamed from: h  reason: collision with root package name */
    private volatile b f8350h;

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
                com.budiyev.android.codescanner.f r0 = com.budiyev.android.codescanner.f.this     // Catch: hk.n -> L5 java.lang.Throwable -> L50
                java.lang.Object r0 = com.budiyev.android.codescanner.f.b(r0)     // Catch: hk.n -> L5 java.lang.Throwable -> L50
                monitor-enter(r0)     // Catch: hk.n -> L5 java.lang.Throwable -> L50
                com.budiyev.android.codescanner.f r1 = com.budiyev.android.codescanner.f.this     // Catch: java.lang.Throwable -> L52
                com.budiyev.android.codescanner.e r1 = com.budiyev.android.codescanner.f.c(r1)     // Catch: java.lang.Throwable -> L52
                if (r1 == 0) goto L54
                com.budiyev.android.codescanner.f r2 = com.budiyev.android.codescanner.f.this     // Catch: java.lang.Throwable -> L52
                r3 = 0
                com.budiyev.android.codescanner.f.d(r2, r3)     // Catch: java.lang.Throwable -> L52
                monitor-exit(r0)     // Catch: java.lang.Throwable -> L52
                com.budiyev.android.codescanner.f r0 = com.budiyev.android.codescanner.f.this     // Catch: hk.n -> L5 java.lang.Throwable -> L50
                com.budiyev.android.codescanner.f$b r2 = com.budiyev.android.codescanner.f.b.DECODING     // Catch: hk.n -> L5 java.lang.Throwable -> L50
                com.budiyev.android.codescanner.f.a(r0, r2)     // Catch: hk.n -> L5 java.lang.Throwable -> L50
                com.budiyev.android.codescanner.f r0 = com.budiyev.android.codescanner.f.this     // Catch: hk.n -> L5 java.lang.Throwable -> L50
                hk.j r0 = com.budiyev.android.codescanner.f.e(r0)     // Catch: hk.n -> L5 java.lang.Throwable -> L50
                com.google.zxing.Result r0 = r1.a(r0)     // Catch: hk.n -> L5 java.lang.Throwable -> L50
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
                throw r1     // Catch: hk.n -> L5 java.lang.Throwable -> L50
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
        hk.j jVar = new hk.j();
        this.f8343a = jVar;
        a aVar = new a();
        this.f8344b = aVar;
        aVar.setUncaughtExceptionHandler(uncaughtExceptionHandler);
        EnumMap enumMap = new EnumMap(hk.e.class);
        this.f8346d = enumMap;
        enumMap.put((EnumMap) hk.e.POSSIBLE_FORMATS, (hk.e) list);
        jVar.d(enumMap);
        this.f8348f = dVar;
        this.f8345c = cVar;
        this.f8350h = b.INITIALIZED;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean k(b bVar) {
        this.f8350h = bVar;
        return this.f8345c.a(bVar);
    }

    public void g(e eVar) {
        synchronized (this.f8347e) {
            try {
                if (this.f8350h != b.STOPPED) {
                    this.f8349g = eVar;
                    this.f8347e.notify();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public b h() {
        return this.f8350h;
    }

    public void i(d dVar) {
        this.f8348f = dVar;
    }

    public void j(List list) {
        this.f8346d.put(hk.e.POSSIBLE_FORMATS, list);
        this.f8343a.d(this.f8346d);
    }

    public void l() {
        this.f8344b.interrupt();
        this.f8349g = null;
    }

    public void m() {
        if (this.f8350h == b.INITIALIZED) {
            this.f8344b.start();
            return;
        }
        throw new IllegalStateException("Illegal decoder state");
    }
}
