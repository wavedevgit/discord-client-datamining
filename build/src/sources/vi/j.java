package vi;

import gf.q;
import java.util.ArrayDeque;
import java.util.Deque;
import java.util.concurrent.Executor;
import java.util.logging.Logger;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements Executor {

    /* renamed from: q  reason: collision with root package name */
    private static final Logger f52715q = Logger.getLogger(j.class.getName());

    /* renamed from: d  reason: collision with root package name */
    private final Executor f52716d;

    /* renamed from: e  reason: collision with root package name */
    private final Deque f52717e = new ArrayDeque();

    /* renamed from: i  reason: collision with root package name */
    private c f52718i = c.IDLE;

    /* renamed from: o  reason: collision with root package name */
    private long f52719o = 0;

    /* renamed from: p  reason: collision with root package name */
    private final b f52720p = new b(this, null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Runnable f52721d;

        a(Runnable runnable) {
            this.f52721d = runnable;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f52721d.run();
        }

        public String toString() {
            return this.f52721d.toString();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private final class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        Runnable f52723d;

        private b() {
        }

        /* JADX WARN: Code restructure failed: missing block: B:18:0x0045, code lost:
            if (r1 == false) goto L34;
         */
        /* JADX WARN: Code restructure failed: missing block: B:23:0x004e, code lost:
            r1 = r1 | java.lang.Thread.interrupted();
         */
        /* JADX WARN: Code restructure failed: missing block: B:24:0x0050, code lost:
            r8.f52723d.run();
         */
        /* JADX WARN: Code restructure failed: missing block: B:31:0x005c, code lost:
            r3 = move-exception;
         */
        /* JADX WARN: Code restructure failed: missing block: B:32:0x005d, code lost:
            vi.j.f52715q.log(java.util.logging.Level.SEVERE, "Exception while executing runnable " + r8.f52723d, (java.lang.Throwable) r3);
         */
        /* JADX WARN: Code restructure failed: missing block: B:48:?, code lost:
            return;
         */
        /* JADX WARN: Code restructure failed: missing block: B:49:?, code lost:
            return;
         */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        private void a() {
            /*
                r8 = this;
                r0 = 0
                r1 = r0
            L2:
                vi.j r2 = vi.j.this     // Catch: java.lang.Throwable -> L58
                java.util.Deque r2 = vi.j.a(r2)     // Catch: java.lang.Throwable -> L58
                monitor-enter(r2)     // Catch: java.lang.Throwable -> L58
                if (r0 != 0) goto L2d
                vi.j r0 = vi.j.this     // Catch: java.lang.Throwable -> L20
                vi.j$c r0 = vi.j.b(r0)     // Catch: java.lang.Throwable -> L20
                vi.j$c r3 = vi.j.c.RUNNING     // Catch: java.lang.Throwable -> L20
                if (r0 != r3) goto L22
                monitor-exit(r2)     // Catch: java.lang.Throwable -> L20
                if (r1 == 0) goto L48
            L18:
                java.lang.Thread r0 = java.lang.Thread.currentThread()
                r0.interrupt()
                goto L48
            L20:
                r0 = move-exception
                goto L7d
            L22:
                vi.j r0 = vi.j.this     // Catch: java.lang.Throwable -> L20
                vi.j.d(r0)     // Catch: java.lang.Throwable -> L20
                vi.j r0 = vi.j.this     // Catch: java.lang.Throwable -> L20
                vi.j.c(r0, r3)     // Catch: java.lang.Throwable -> L20
                r0 = 1
            L2d:
                vi.j r3 = vi.j.this     // Catch: java.lang.Throwable -> L20
                java.util.Deque r3 = vi.j.a(r3)     // Catch: java.lang.Throwable -> L20
                java.lang.Object r3 = r3.poll()     // Catch: java.lang.Throwable -> L20
                java.lang.Runnable r3 = (java.lang.Runnable) r3     // Catch: java.lang.Throwable -> L20
                r8.f52723d = r3     // Catch: java.lang.Throwable -> L20
                if (r3 != 0) goto L49
                vi.j r0 = vi.j.this     // Catch: java.lang.Throwable -> L20
                vi.j$c r3 = vi.j.c.IDLE     // Catch: java.lang.Throwable -> L20
                vi.j.c(r0, r3)     // Catch: java.lang.Throwable -> L20
                monitor-exit(r2)     // Catch: java.lang.Throwable -> L20
                if (r1 == 0) goto L48
                goto L18
            L48:
                return
            L49:
                monitor-exit(r2)     // Catch: java.lang.Throwable -> L20
                boolean r2 = java.lang.Thread.interrupted()     // Catch: java.lang.Throwable -> L58
                r1 = r1 | r2
                r2 = 0
                java.lang.Runnable r3 = r8.f52723d     // Catch: java.lang.Throwable -> L5a java.lang.RuntimeException -> L5c
                r3.run()     // Catch: java.lang.Throwable -> L5a java.lang.RuntimeException -> L5c
            L55:
                r8.f52723d = r2     // Catch: java.lang.Throwable -> L58
                goto L2
            L58:
                r0 = move-exception
                goto L7f
            L5a:
                r0 = move-exception
                goto L7a
            L5c:
                r3 = move-exception
                java.util.logging.Logger r4 = vi.j.e()     // Catch: java.lang.Throwable -> L5a
                java.util.logging.Level r5 = java.util.logging.Level.SEVERE     // Catch: java.lang.Throwable -> L5a
                java.lang.StringBuilder r6 = new java.lang.StringBuilder     // Catch: java.lang.Throwable -> L5a
                r6.<init>()     // Catch: java.lang.Throwable -> L5a
                java.lang.String r7 = "Exception while executing runnable "
                r6.append(r7)     // Catch: java.lang.Throwable -> L5a
                java.lang.Runnable r7 = r8.f52723d     // Catch: java.lang.Throwable -> L5a
                r6.append(r7)     // Catch: java.lang.Throwable -> L5a
                java.lang.String r6 = r6.toString()     // Catch: java.lang.Throwable -> L5a
                r4.log(r5, r6, r3)     // Catch: java.lang.Throwable -> L5a
                goto L55
            L7a:
                r8.f52723d = r2     // Catch: java.lang.Throwable -> L58
                throw r0     // Catch: java.lang.Throwable -> L58
            L7d:
                monitor-exit(r2)     // Catch: java.lang.Throwable -> L20
                throw r0     // Catch: java.lang.Throwable -> L58
            L7f:
                if (r1 == 0) goto L88
                java.lang.Thread r1 = java.lang.Thread.currentThread()
                r1.interrupt()
            L88:
                throw r0
            */
            throw new UnsupportedOperationException("Method not decompiled: vi.j.b.a():void");
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                a();
            } catch (Error e10) {
                synchronized (j.this.f52717e) {
                    j.this.f52718i = c.IDLE;
                    throw e10;
                }
            }
        }

        public String toString() {
            Runnable runnable = this.f52723d;
            if (runnable != null) {
                return "SequentialExecutorWorker{running=" + runnable + "}";
            }
            return "SequentialExecutorWorker{state=" + j.this.f52718i + "}";
        }

        /* synthetic */ b(j jVar, a aVar) {
            this();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum c {
        IDLE,
        QUEUING,
        QUEUED,
        RUNNING
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(Executor executor) {
        this.f52716d = (Executor) q.l(executor);
    }

    static /* synthetic */ long d(j jVar) {
        long j10 = jVar.f52719o;
        jVar.f52719o = 1 + j10;
        return j10;
    }

    /* JADX WARN: Removed duplicated region for block: B:46:0x0066 A[ADDED_TO_REGION] */
    @Override // java.util.concurrent.Executor
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void execute(java.lang.Runnable r8) {
        /*
            r7 = this;
            gf.q.l(r8)
            java.util.Deque r0 = r7.f52717e
            monitor-enter(r0)
            vi.j$c r1 = r7.f52718i     // Catch: java.lang.Throwable -> L6d
            vi.j$c r2 = vi.j.c.RUNNING     // Catch: java.lang.Throwable -> L6d
            if (r1 == r2) goto L6f
            vi.j$c r2 = vi.j.c.QUEUED     // Catch: java.lang.Throwable -> L6d
            if (r1 != r2) goto L11
            goto L6f
        L11:
            long r3 = r7.f52719o     // Catch: java.lang.Throwable -> L6d
            vi.j$a r1 = new vi.j$a     // Catch: java.lang.Throwable -> L6d
            r1.<init>(r8)     // Catch: java.lang.Throwable -> L6d
            java.util.Deque r8 = r7.f52717e     // Catch: java.lang.Throwable -> L6d
            r8.add(r1)     // Catch: java.lang.Throwable -> L6d
            vi.j$c r8 = vi.j.c.QUEUING     // Catch: java.lang.Throwable -> L6d
            r7.f52718i = r8     // Catch: java.lang.Throwable -> L6d
            monitor-exit(r0)     // Catch: java.lang.Throwable -> L6d
            java.util.concurrent.Executor r0 = r7.f52716d     // Catch: java.lang.Error -> L44 java.lang.RuntimeException -> L46
            vi.j$b r5 = r7.f52720p     // Catch: java.lang.Error -> L44 java.lang.RuntimeException -> L46
            r0.execute(r5)     // Catch: java.lang.Error -> L44 java.lang.RuntimeException -> L46
            vi.j$c r0 = r7.f52718i
            if (r0 == r8) goto L2e
            return
        L2e:
            java.util.Deque r0 = r7.f52717e
            monitor-enter(r0)
            long r5 = r7.f52719o     // Catch: java.lang.Throwable -> L3e
            int r1 = (r5 > r3 ? 1 : (r5 == r3 ? 0 : -1))
            if (r1 != 0) goto L40
            vi.j$c r1 = r7.f52718i     // Catch: java.lang.Throwable -> L3e
            if (r1 != r8) goto L40
            r7.f52718i = r2     // Catch: java.lang.Throwable -> L3e
            goto L40
        L3e:
            r8 = move-exception
            goto L42
        L40:
            monitor-exit(r0)     // Catch: java.lang.Throwable -> L3e
            return
        L42:
            monitor-exit(r0)     // Catch: java.lang.Throwable -> L3e
            throw r8
        L44:
            r8 = move-exception
            goto L47
        L46:
            r8 = move-exception
        L47:
            java.util.Deque r2 = r7.f52717e
            monitor-enter(r2)
            vi.j$c r0 = r7.f52718i     // Catch: java.lang.Throwable -> L55
            vi.j$c r3 = vi.j.c.IDLE     // Catch: java.lang.Throwable -> L55
            if (r0 == r3) goto L57
            vi.j$c r3 = vi.j.c.QUEUING     // Catch: java.lang.Throwable -> L55
            if (r0 != r3) goto L61
            goto L57
        L55:
            r8 = move-exception
            goto L6b
        L57:
            java.util.Deque r0 = r7.f52717e     // Catch: java.lang.Throwable -> L55
            boolean r0 = r0.removeLastOccurrence(r1)     // Catch: java.lang.Throwable -> L55
            if (r0 == 0) goto L61
            r0 = 1
            goto L62
        L61:
            r0 = 0
        L62:
            boolean r1 = r8 instanceof java.util.concurrent.RejectedExecutionException     // Catch: java.lang.Throwable -> L55
            if (r1 == 0) goto L6a
            if (r0 != 0) goto L6a
            monitor-exit(r2)     // Catch: java.lang.Throwable -> L55
            return
        L6a:
            throw r8     // Catch: java.lang.Throwable -> L55
        L6b:
            monitor-exit(r2)     // Catch: java.lang.Throwable -> L55
            throw r8
        L6d:
            r8 = move-exception
            goto L76
        L6f:
            java.util.Deque r1 = r7.f52717e     // Catch: java.lang.Throwable -> L6d
            r1.add(r8)     // Catch: java.lang.Throwable -> L6d
            monitor-exit(r0)     // Catch: java.lang.Throwable -> L6d
            return
        L76:
            monitor-exit(r0)     // Catch: java.lang.Throwable -> L6d
            throw r8
        */
        throw new UnsupportedOperationException("Method not decompiled: vi.j.execute(java.lang.Runnable):void");
    }

    public String toString() {
        return "SequentialExecutor@" + System.identityHashCode(this) + "{" + this.f52716d + "}";
    }
}
