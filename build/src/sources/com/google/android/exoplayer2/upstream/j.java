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
public final class j implements u {

    /* renamed from: d  reason: collision with root package name */
    public static final c f13426d = h(false, -9223372036854775807L);

    /* renamed from: e  reason: collision with root package name */
    public static final c f13427e = h(true, -9223372036854775807L);

    /* renamed from: f  reason: collision with root package name */
    public static final c f13428f = new c(2, -9223372036854775807L);

    /* renamed from: g  reason: collision with root package name */
    public static final c f13429g = new c(3, -9223372036854775807L);

    /* renamed from: a  reason: collision with root package name */
    private final ExecutorService f13430a;

    /* renamed from: b  reason: collision with root package name */
    private d f13431b;

    /* renamed from: c  reason: collision with root package name */
    private IOException f13432c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
        void i(e eVar, long j10, long j11, boolean z10);

        void j(e eVar, long j10, long j11);

        c n(e eVar, long j10, long j11, IOException iOException, int i10);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        private final int f13433a;

        /* renamed from: b  reason: collision with root package name */
        private final long f13434b;

        public boolean c() {
            int i10 = this.f13433a;
            if (i10 == 0 || i10 == 1) {
                return true;
            }
            return false;
        }

        private c(int i10, long j10) {
            this.f13433a = i10;
            this.f13434b = j10;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class d extends Handler implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        public final int f13435d;

        /* renamed from: e  reason: collision with root package name */
        private final e f13436e;

        /* renamed from: i  reason: collision with root package name */
        private final long f13437i;

        /* renamed from: o  reason: collision with root package name */
        private b f13438o;

        /* renamed from: p  reason: collision with root package name */
        private IOException f13439p;

        /* renamed from: q  reason: collision with root package name */
        private int f13440q;

        /* renamed from: r  reason: collision with root package name */
        private Thread f13441r;

        /* renamed from: s  reason: collision with root package name */
        private boolean f13442s;

        /* renamed from: t  reason: collision with root package name */
        private volatile boolean f13443t;

        public d(Looper looper, e eVar, b bVar, int i10, long j10) {
            super(looper);
            this.f13436e = eVar;
            this.f13438o = bVar;
            this.f13435d = i10;
            this.f13437i = j10;
        }

        private void b() {
            this.f13439p = null;
            j.this.f13430a.execute((Runnable) ne.a.e(j.this.f13431b));
        }

        private void c() {
            j.this.f13431b = null;
        }

        private long d() {
            return Math.min((this.f13440q - 1) * 1000, 5000);
        }

        public void a(boolean z10) {
            this.f13443t = z10;
            this.f13439p = null;
            if (hasMessages(0)) {
                this.f13442s = true;
                removeMessages(0);
                if (!z10) {
                    sendEmptyMessage(1);
                }
            } else {
                synchronized (this) {
                    try {
                        this.f13442s = true;
                        this.f13436e.c();
                        Thread thread = this.f13441r;
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
                ((b) ne.a.e(this.f13438o)).i(this.f13436e, elapsedRealtime, elapsedRealtime - this.f13437i, true);
                this.f13438o = null;
            }
        }

        public void e(int i10) {
            IOException iOException = this.f13439p;
            if (iOException != null && this.f13440q > i10) {
                throw iOException;
            }
        }

        public void f(long j10) {
            boolean z10;
            if (j.this.f13431b == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.g(z10);
            j.this.f13431b = this;
            if (j10 > 0) {
                sendEmptyMessageDelayed(0, j10);
            } else {
                b();
            }
        }

        @Override // android.os.Handler
        public void handleMessage(Message message) {
            long d10;
            if (!this.f13443t) {
                int i10 = message.what;
                if (i10 == 0) {
                    b();
                } else if (i10 != 3) {
                    c();
                    long elapsedRealtime = SystemClock.elapsedRealtime();
                    long j10 = elapsedRealtime - this.f13437i;
                    b bVar = (b) ne.a.e(this.f13438o);
                    if (this.f13442s) {
                        bVar.i(this.f13436e, elapsedRealtime, j10, false);
                        return;
                    }
                    int i11 = message.what;
                    if (i11 != 1) {
                        if (i11 == 2) {
                            IOException iOException = (IOException) message.obj;
                            this.f13439p = iOException;
                            int i12 = this.f13440q + 1;
                            this.f13440q = i12;
                            c n10 = bVar.n(this.f13436e, elapsedRealtime, j10, iOException, i12);
                            if (n10.f13433a == 3) {
                                j.this.f13432c = this.f13439p;
                                return;
                            } else if (n10.f13433a != 2) {
                                if (n10.f13433a == 1) {
                                    this.f13440q = 1;
                                }
                                if (n10.f13434b != -9223372036854775807L) {
                                    d10 = n10.f13434b;
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
                        bVar.j(this.f13436e, elapsedRealtime, j10);
                    } catch (RuntimeException e10) {
                        y.d("LoadTask", "Unexpected exception handling load completed", e10);
                        j.this.f13432c = new h(e10);
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
                    z10 = this.f13442s;
                    this.f13441r = Thread.currentThread();
                }
                if (!z10) {
                    t0.a("load:" + this.f13436e.getClass().getSimpleName());
                    try {
                        this.f13436e.b();
                        t0.c();
                    } catch (Throwable th2) {
                        t0.c();
                        throw th2;
                    }
                }
                synchronized (this) {
                    this.f13441r = null;
                    Thread.interrupted();
                }
                if (!this.f13443t) {
                    sendEmptyMessage(1);
                }
            } catch (IOException e10) {
                if (!this.f13443t) {
                    obtainMessage(2, e10).sendToTarget();
                }
            } catch (Error e11) {
                if (!this.f13443t) {
                    y.d("LoadTask", "Unexpected error loading stream", e11);
                    obtainMessage(3, e11).sendToTarget();
                }
                throw e11;
            } catch (Exception e12) {
                if (!this.f13443t) {
                    y.d("LoadTask", "Unexpected exception loading stream", e12);
                    obtainMessage(2, new h(e12)).sendToTarget();
                }
            } catch (OutOfMemoryError e13) {
                if (!this.f13443t) {
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
        private final f f13445d;

        public g(f fVar) {
            this.f13445d = fVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f13445d.p();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class h extends IOException {
        public h(Throwable th2) {
            super("Unexpected " + th2.getClass().getSimpleName() + ": " + th2.getMessage(), th2);
        }
    }

    public j(String str) {
        this.f13430a = w0.L0("ExoPlayer:Loader:" + str);
    }

    public static c h(boolean z10, long j10) {
        return new c(z10 ? 1 : 0, j10);
    }

    @Override // le.u
    public void a() {
        k(Integer.MIN_VALUE);
    }

    public void f() {
        ((d) ne.a.i(this.f13431b)).a(false);
    }

    public void g() {
        this.f13432c = null;
    }

    public boolean i() {
        if (this.f13432c != null) {
            return true;
        }
        return false;
    }

    public boolean j() {
        if (this.f13431b != null) {
            return true;
        }
        return false;
    }

    public void k(int i10) {
        IOException iOException = this.f13432c;
        if (iOException == null) {
            d dVar = this.f13431b;
            if (dVar != null) {
                if (i10 == Integer.MIN_VALUE) {
                    i10 = dVar.f13435d;
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
        d dVar = this.f13431b;
        if (dVar != null) {
            dVar.a(true);
        }
        if (fVar != null) {
            this.f13430a.execute(new g(fVar));
        }
        this.f13430a.shutdown();
    }

    public long n(e eVar, b bVar, int i10) {
        this.f13432c = null;
        long elapsedRealtime = SystemClock.elapsedRealtime();
        new d((Looper) ne.a.i(Looper.myLooper()), eVar, bVar, i10, elapsedRealtime).f(0L);
        return elapsedRealtime;
    }
}
