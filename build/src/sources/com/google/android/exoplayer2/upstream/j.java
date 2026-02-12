package com.google.android.exoplayer2.upstream;

import android.os.Handler;
import android.os.Looper;
import android.os.Message;
import android.os.SystemClock;
import java.io.IOException;
import java.util.concurrent.ExecutorService;
import me.u;
import oe.t0;
import oe.w0;
import oe.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class j implements u {

    /* renamed from: d  reason: collision with root package name */
    public static final c f14144d = h(false, -9223372036854775807L);

    /* renamed from: e  reason: collision with root package name */
    public static final c f14145e = h(true, -9223372036854775807L);

    /* renamed from: f  reason: collision with root package name */
    public static final c f14146f = new c(2, -9223372036854775807L);

    /* renamed from: g  reason: collision with root package name */
    public static final c f14147g = new c(3, -9223372036854775807L);

    /* renamed from: a  reason: collision with root package name */
    private final ExecutorService f14148a;

    /* renamed from: b  reason: collision with root package name */
    private d f14149b;

    /* renamed from: c  reason: collision with root package name */
    private IOException f14150c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
        void i(e eVar, long j10, long j11, boolean z10);

        void k(e eVar, long j10, long j11);

        c n(e eVar, long j10, long j11, IOException iOException, int i10);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        private final int f14151a;

        /* renamed from: b  reason: collision with root package name */
        private final long f14152b;

        public boolean c() {
            int i10 = this.f14151a;
            if (i10 == 0 || i10 == 1) {
                return true;
            }
            return false;
        }

        private c(int i10, long j10) {
            this.f14151a = i10;
            this.f14152b = j10;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class d extends Handler implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        public final int f14153d;

        /* renamed from: e  reason: collision with root package name */
        private final e f14154e;

        /* renamed from: i  reason: collision with root package name */
        private final long f14155i;

        /* renamed from: o  reason: collision with root package name */
        private b f14156o;

        /* renamed from: p  reason: collision with root package name */
        private IOException f14157p;

        /* renamed from: q  reason: collision with root package name */
        private int f14158q;

        /* renamed from: r  reason: collision with root package name */
        private Thread f14159r;

        /* renamed from: s  reason: collision with root package name */
        private boolean f14160s;

        /* renamed from: t  reason: collision with root package name */
        private volatile boolean f14161t;

        public d(Looper looper, e eVar, b bVar, int i10, long j10) {
            super(looper);
            this.f14154e = eVar;
            this.f14156o = bVar;
            this.f14153d = i10;
            this.f14155i = j10;
        }

        private void b() {
            this.f14157p = null;
            j.this.f14148a.execute((Runnable) oe.a.e(j.this.f14149b));
        }

        private void c() {
            j.this.f14149b = null;
        }

        private long d() {
            return Math.min((this.f14158q - 1) * 1000, 5000);
        }

        public void a(boolean z10) {
            this.f14161t = z10;
            this.f14157p = null;
            if (hasMessages(0)) {
                this.f14160s = true;
                removeMessages(0);
                if (!z10) {
                    sendEmptyMessage(1);
                }
            } else {
                synchronized (this) {
                    try {
                        this.f14160s = true;
                        this.f14154e.c();
                        Thread thread = this.f14159r;
                        if (thread != null) {
                            thread.interrupt();
                        }
                    } catch (Throwable th2) {
                        throw th2;
                    }
                }
            }
            if (z10) {
                c();
                long elapsedRealtime = SystemClock.elapsedRealtime();
                ((b) oe.a.e(this.f14156o)).i(this.f14154e, elapsedRealtime, elapsedRealtime - this.f14155i, true);
                this.f14156o = null;
            }
        }

        public void e(int i10) {
            IOException iOException = this.f14157p;
            if (iOException != null && this.f14158q > i10) {
                throw iOException;
            }
        }

        public void f(long j10) {
            boolean z10;
            if (j.this.f14149b == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            oe.a.g(z10);
            j.this.f14149b = this;
            if (j10 > 0) {
                sendEmptyMessageDelayed(0, j10);
            } else {
                b();
            }
        }

        @Override // android.os.Handler
        public void handleMessage(Message message) {
            long d10;
            if (!this.f14161t) {
                int i10 = message.what;
                if (i10 == 0) {
                    b();
                } else if (i10 != 3) {
                    c();
                    long elapsedRealtime = SystemClock.elapsedRealtime();
                    long j10 = elapsedRealtime - this.f14155i;
                    b bVar = (b) oe.a.e(this.f14156o);
                    if (this.f14160s) {
                        bVar.i(this.f14154e, elapsedRealtime, j10, false);
                        return;
                    }
                    int i11 = message.what;
                    if (i11 != 1) {
                        if (i11 == 2) {
                            IOException iOException = (IOException) message.obj;
                            this.f14157p = iOException;
                            int i12 = this.f14158q + 1;
                            this.f14158q = i12;
                            c n10 = bVar.n(this.f14154e, elapsedRealtime, j10, iOException, i12);
                            if (n10.f14151a == 3) {
                                j.this.f14150c = this.f14157p;
                                return;
                            } else if (n10.f14151a != 2) {
                                if (n10.f14151a == 1) {
                                    this.f14158q = 1;
                                }
                                if (n10.f14152b != -9223372036854775807L) {
                                    d10 = n10.f14152b;
                                } else {
                                    d10 = d();
                                }
                                f(d10);
                                return;
                            } else {
                                return;
                            }
                        }
                        return;
                    }
                    try {
                        bVar.k(this.f14154e, elapsedRealtime, j10);
                    } catch (RuntimeException e10) {
                        y.d("LoadTask", "Unexpected exception handling load completed", e10);
                        j.this.f14150c = new h(e10);
                    }
                } else {
                    throw ((Error) message.obj);
                }
            }
        }

        @Override // java.lang.Runnable
        public void run() {
            boolean z10;
            try {
                synchronized (this) {
                    z10 = this.f14160s;
                    this.f14159r = Thread.currentThread();
                }
                if (!z10) {
                    t0.a("load:" + this.f14154e.getClass().getSimpleName());
                    try {
                        this.f14154e.a();
                        t0.c();
                    } catch (Throwable th2) {
                        t0.c();
                        throw th2;
                    }
                }
                synchronized (this) {
                    this.f14159r = null;
                    Thread.interrupted();
                }
                if (!this.f14161t) {
                    sendEmptyMessage(1);
                }
            } catch (IOException e10) {
                if (!this.f14161t) {
                    obtainMessage(2, e10).sendToTarget();
                }
            } catch (Error e11) {
                if (!this.f14161t) {
                    y.d("LoadTask", "Unexpected error loading stream", e11);
                    obtainMessage(3, e11).sendToTarget();
                }
                throw e11;
            } catch (Exception e12) {
                if (!this.f14161t) {
                    y.d("LoadTask", "Unexpected exception loading stream", e12);
                    obtainMessage(2, new h(e12)).sendToTarget();
                }
            } catch (OutOfMemoryError e13) {
                if (!this.f14161t) {
                    y.d("LoadTask", "OutOfMemory error loading stream", e13);
                    obtainMessage(2, new h(e13)).sendToTarget();
                }
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface e {
        void a();

        void c();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface f {
        void o();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class g implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final f f14163d;

        public g(f fVar) {
            this.f14163d = fVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f14163d.o();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class h extends IOException {
        public h(Throwable th2) {
            super("Unexpected " + th2.getClass().getSimpleName() + ": " + th2.getMessage(), th2);
        }
    }

    public j(String str) {
        this.f14148a = w0.L0("ExoPlayer:Loader:" + str);
    }

    public static c h(boolean z10, long j10) {
        return new c(z10 ? 1 : 0, j10);
    }

    @Override // me.u
    public void a() {
        k(Integer.MIN_VALUE);
    }

    public void f() {
        ((d) oe.a.i(this.f14149b)).a(false);
    }

    public void g() {
        this.f14150c = null;
    }

    public boolean i() {
        if (this.f14150c != null) {
            return true;
        }
        return false;
    }

    public boolean j() {
        if (this.f14149b != null) {
            return true;
        }
        return false;
    }

    public void k(int i10) {
        IOException iOException = this.f14150c;
        if (iOException == null) {
            d dVar = this.f14149b;
            if (dVar != null) {
                if (i10 == Integer.MIN_VALUE) {
                    i10 = dVar.f14153d;
                }
                dVar.e(i10);
                return;
            }
            return;
        }
        throw iOException;
    }

    public void l() {
        m(null);
    }

    public void m(f fVar) {
        d dVar = this.f14149b;
        if (dVar != null) {
            dVar.a(true);
        }
        if (fVar != null) {
            this.f14148a.execute(new g(fVar));
        }
        this.f14148a.shutdown();
    }

    public long n(e eVar, b bVar, int i10) {
        this.f14150c = null;
        long elapsedRealtime = SystemClock.elapsedRealtime();
        new d((Looper) oe.a.i(Looper.myLooper()), eVar, bVar, i10, elapsedRealtime).f(0L);
        return elapsedRealtime;
    }
}
