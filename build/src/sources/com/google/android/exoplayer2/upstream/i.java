package com.google.android.exoplayer2.upstream;

import android.os.Handler;
import android.os.Looper;
import android.os.Message;
import android.os.SystemClock;
import java.io.IOException;
import java.util.concurrent.ExecutorService;
import le.u;
import ne.t0;
import ne.w0;
import ne.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i implements u {

    /* renamed from: d  reason: collision with root package name */
    public static final c f14483d = h(false, -9223372036854775807L);

    /* renamed from: e  reason: collision with root package name */
    public static final c f14484e = h(true, -9223372036854775807L);

    /* renamed from: f  reason: collision with root package name */
    public static final c f14485f = new c(2, -9223372036854775807L);

    /* renamed from: g  reason: collision with root package name */
    public static final c f14486g = new c(3, -9223372036854775807L);

    /* renamed from: a  reason: collision with root package name */
    private final ExecutorService f14487a;

    /* renamed from: b  reason: collision with root package name */
    private d f14488b;

    /* renamed from: c  reason: collision with root package name */
    private IOException f14489c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
        void i(e eVar, long j10, long j11, boolean z10);

        void j(e eVar, long j10, long j11);

        c n(e eVar, long j10, long j11, IOException iOException, int i10);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        private final int f14490a;

        /* renamed from: b  reason: collision with root package name */
        private final long f14491b;

        public boolean c() {
            int i10 = this.f14490a;
            if (i10 == 0 || i10 == 1) {
                return true;
            }
            return false;
        }

        private c(int i10, long j10) {
            this.f14490a = i10;
            this.f14491b = j10;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class d extends Handler implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        public final int f14492d;

        /* renamed from: e  reason: collision with root package name */
        private final e f14493e;

        /* renamed from: i  reason: collision with root package name */
        private final long f14494i;

        /* renamed from: o  reason: collision with root package name */
        private b f14495o;

        /* renamed from: p  reason: collision with root package name */
        private IOException f14496p;

        /* renamed from: q  reason: collision with root package name */
        private int f14497q;

        /* renamed from: r  reason: collision with root package name */
        private Thread f14498r;

        /* renamed from: s  reason: collision with root package name */
        private boolean f14499s;

        /* renamed from: t  reason: collision with root package name */
        private volatile boolean f14500t;

        public d(Looper looper, e eVar, b bVar, int i10, long j10) {
            super(looper);
            this.f14493e = eVar;
            this.f14495o = bVar;
            this.f14492d = i10;
            this.f14494i = j10;
        }

        private void b() {
            this.f14496p = null;
            i.this.f14487a.execute((Runnable) ne.a.e(i.this.f14488b));
        }

        private void c() {
            i.this.f14488b = null;
        }

        private long d() {
            return Math.min((this.f14497q - 1) * 1000, 5000);
        }

        public void a(boolean z10) {
            this.f14500t = z10;
            this.f14496p = null;
            if (hasMessages(0)) {
                this.f14499s = true;
                removeMessages(0);
                if (!z10) {
                    sendEmptyMessage(1);
                }
            } else {
                synchronized (this) {
                    try {
                        this.f14499s = true;
                        this.f14493e.c();
                        Thread thread = this.f14498r;
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
                ((b) ne.a.e(this.f14495o)).i(this.f14493e, elapsedRealtime, elapsedRealtime - this.f14494i, true);
                this.f14495o = null;
            }
        }

        public void e(int i10) {
            IOException iOException = this.f14496p;
            if (iOException != null && this.f14497q > i10) {
                throw iOException;
            }
        }

        public void f(long j10) {
            boolean z10;
            if (i.this.f14488b == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.g(z10);
            i.this.f14488b = this;
            if (j10 > 0) {
                sendEmptyMessageDelayed(0, j10);
            } else {
                b();
            }
        }

        @Override // android.os.Handler
        public void handleMessage(Message message) {
            long d10;
            if (!this.f14500t) {
                int i10 = message.what;
                if (i10 == 0) {
                    b();
                } else if (i10 != 3) {
                    c();
                    long elapsedRealtime = SystemClock.elapsedRealtime();
                    long j10 = elapsedRealtime - this.f14494i;
                    b bVar = (b) ne.a.e(this.f14495o);
                    if (this.f14499s) {
                        bVar.i(this.f14493e, elapsedRealtime, j10, false);
                        return;
                    }
                    int i11 = message.what;
                    if (i11 != 1) {
                        if (i11 == 2) {
                            IOException iOException = (IOException) message.obj;
                            this.f14496p = iOException;
                            int i12 = this.f14497q + 1;
                            this.f14497q = i12;
                            c n10 = bVar.n(this.f14493e, elapsedRealtime, j10, iOException, i12);
                            if (n10.f14490a == 3) {
                                i.this.f14489c = this.f14496p;
                                return;
                            } else if (n10.f14490a != 2) {
                                if (n10.f14490a == 1) {
                                    this.f14497q = 1;
                                }
                                if (n10.f14491b != -9223372036854775807L) {
                                    d10 = n10.f14491b;
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
                        bVar.j(this.f14493e, elapsedRealtime, j10);
                    } catch (RuntimeException e10) {
                        y.d("LoadTask", "Unexpected exception handling load completed", e10);
                        i.this.f14489c = new h(e10);
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
                    z10 = this.f14499s;
                    this.f14498r = Thread.currentThread();
                }
                if (!z10) {
                    t0.a("load:" + this.f14493e.getClass().getSimpleName());
                    try {
                        this.f14493e.b();
                        t0.c();
                    } catch (Throwable th2) {
                        t0.c();
                        throw th2;
                    }
                }
                synchronized (this) {
                    this.f14498r = null;
                    Thread.interrupted();
                }
                if (!this.f14500t) {
                    sendEmptyMessage(1);
                }
            } catch (IOException e10) {
                if (!this.f14500t) {
                    obtainMessage(2, e10).sendToTarget();
                }
            } catch (Error e11) {
                if (!this.f14500t) {
                    y.d("LoadTask", "Unexpected error loading stream", e11);
                    obtainMessage(3, e11).sendToTarget();
                }
                throw e11;
            } catch (Exception e12) {
                if (!this.f14500t) {
                    y.d("LoadTask", "Unexpected exception loading stream", e12);
                    obtainMessage(2, new h(e12)).sendToTarget();
                }
            } catch (OutOfMemoryError e13) {
                if (!this.f14500t) {
                    y.d("LoadTask", "OutOfMemory error loading stream", e13);
                    obtainMessage(2, new h(e13)).sendToTarget();
                }
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface e {
        void b();

        void c();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface f {
        void p();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class g implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final f f14502d;

        public g(f fVar) {
            this.f14502d = fVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f14502d.p();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class h extends IOException {
        public h(Throwable th2) {
            super("Unexpected " + th2.getClass().getSimpleName() + ": " + th2.getMessage(), th2);
        }
    }

    public i(String str) {
        this.f14487a = w0.L0("ExoPlayer:Loader:" + str);
    }

    public static c h(boolean z10, long j10) {
        return new c(z10 ? 1 : 0, j10);
    }

    @Override // le.u
    public void a() {
        k(Integer.MIN_VALUE);
    }

    public void f() {
        ((d) ne.a.i(this.f14488b)).a(false);
    }

    public void g() {
        this.f14489c = null;
    }

    public boolean i() {
        if (this.f14489c != null) {
            return true;
        }
        return false;
    }

    public boolean j() {
        if (this.f14488b != null) {
            return true;
        }
        return false;
    }

    public void k(int i10) {
        IOException iOException = this.f14489c;
        if (iOException == null) {
            d dVar = this.f14488b;
            if (dVar != null) {
                if (i10 == Integer.MIN_VALUE) {
                    i10 = dVar.f14492d;
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
        d dVar = this.f14488b;
        if (dVar != null) {
            dVar.a(true);
        }
        if (fVar != null) {
            this.f14487a.execute(new g(fVar));
        }
        this.f14487a.shutdown();
    }

    public long n(e eVar, b bVar, int i10) {
        this.f14489c = null;
        long elapsedRealtime = SystemClock.elapsedRealtime();
        new d((Looper) ne.a.i(Looper.myLooper()), eVar, bVar, i10, elapsedRealtime).f(0L);
        return elapsedRealtime;
    }
}
