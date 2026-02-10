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
    public static final c f13566d = h(false, -9223372036854775807L);

    /* renamed from: e  reason: collision with root package name */
    public static final c f13567e = h(true, -9223372036854775807L);

    /* renamed from: f  reason: collision with root package name */
    public static final c f13568f = new c(2, -9223372036854775807L);

    /* renamed from: g  reason: collision with root package name */
    public static final c f13569g = new c(3, -9223372036854775807L);

    /* renamed from: a  reason: collision with root package name */
    private final ExecutorService f13570a;

    /* renamed from: b  reason: collision with root package name */
    private d f13571b;

    /* renamed from: c  reason: collision with root package name */
    private IOException f13572c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
        void i(e eVar, long j10, long j11, boolean z10);

        void k(e eVar, long j10, long j11);

        c n(e eVar, long j10, long j11, IOException iOException, int i10);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        private final int f13573a;

        /* renamed from: b  reason: collision with root package name */
        private final long f13574b;

        public boolean c() {
            int i10 = this.f13573a;
            if (i10 == 0 || i10 == 1) {
                return true;
            }
            return false;
        }

        private c(int i10, long j10) {
            this.f13573a = i10;
            this.f13574b = j10;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class d extends Handler implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        public final int f13575d;

        /* renamed from: e  reason: collision with root package name */
        private final e f13576e;

        /* renamed from: i  reason: collision with root package name */
        private final long f13577i;

        /* renamed from: o  reason: collision with root package name */
        private b f13578o;

        /* renamed from: p  reason: collision with root package name */
        private IOException f13579p;

        /* renamed from: q  reason: collision with root package name */
        private int f13580q;

        /* renamed from: r  reason: collision with root package name */
        private Thread f13581r;

        /* renamed from: s  reason: collision with root package name */
        private boolean f13582s;

        /* renamed from: t  reason: collision with root package name */
        private volatile boolean f13583t;

        public d(Looper looper, e eVar, b bVar, int i10, long j10) {
            super(looper);
            this.f13576e = eVar;
            this.f13578o = bVar;
            this.f13575d = i10;
            this.f13577i = j10;
        }

        private void b() {
            this.f13579p = null;
            j.this.f13570a.execute((Runnable) oe.a.e(j.this.f13571b));
        }

        private void c() {
            j.this.f13571b = null;
        }

        private long d() {
            return Math.min((this.f13580q - 1) * 1000, 5000);
        }

        public void a(boolean z10) {
            this.f13583t = z10;
            this.f13579p = null;
            if (hasMessages(0)) {
                this.f13582s = true;
                removeMessages(0);
                if (!z10) {
                    sendEmptyMessage(1);
                }
            } else {
                synchronized (this) {
                    try {
                        this.f13582s = true;
                        this.f13576e.c();
                        Thread thread = this.f13581r;
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
                ((b) oe.a.e(this.f13578o)).i(this.f13576e, elapsedRealtime, elapsedRealtime - this.f13577i, true);
                this.f13578o = null;
            }
        }

        public void e(int i10) {
            IOException iOException = this.f13579p;
            if (iOException != null && this.f13580q > i10) {
                throw iOException;
            }
        }

        public void f(long j10) {
            boolean z10;
            if (j.this.f13571b == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            oe.a.g(z10);
            j.this.f13571b = this;
            if (j10 > 0) {
                sendEmptyMessageDelayed(0, j10);
            } else {
                b();
            }
        }

        @Override // android.os.Handler
        public void handleMessage(Message message) {
            long d10;
            if (!this.f13583t) {
                int i10 = message.what;
                if (i10 == 0) {
                    b();
                } else if (i10 != 3) {
                    c();
                    long elapsedRealtime = SystemClock.elapsedRealtime();
                    long j10 = elapsedRealtime - this.f13577i;
                    b bVar = (b) oe.a.e(this.f13578o);
                    if (this.f13582s) {
                        bVar.i(this.f13576e, elapsedRealtime, j10, false);
                        return;
                    }
                    int i11 = message.what;
                    if (i11 != 1) {
                        if (i11 == 2) {
                            IOException iOException = (IOException) message.obj;
                            this.f13579p = iOException;
                            int i12 = this.f13580q + 1;
                            this.f13580q = i12;
                            c n10 = bVar.n(this.f13576e, elapsedRealtime, j10, iOException, i12);
                            if (n10.f13573a == 3) {
                                j.this.f13572c = this.f13579p;
                                return;
                            } else if (n10.f13573a != 2) {
                                if (n10.f13573a == 1) {
                                    this.f13580q = 1;
                                }
                                if (n10.f13574b != -9223372036854775807L) {
                                    d10 = n10.f13574b;
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
                        bVar.k(this.f13576e, elapsedRealtime, j10);
                    } catch (RuntimeException e10) {
                        y.d("LoadTask", "Unexpected exception handling load completed", e10);
                        j.this.f13572c = new h(e10);
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
                    z10 = this.f13582s;
                    this.f13581r = Thread.currentThread();
                }
                if (!z10) {
                    t0.a("load:" + this.f13576e.getClass().getSimpleName());
                    try {
                        this.f13576e.a();
                        t0.c();
                    } catch (Throwable th2) {
                        t0.c();
                        throw th2;
                    }
                }
                synchronized (this) {
                    this.f13581r = null;
                    Thread.interrupted();
                }
                if (!this.f13583t) {
                    sendEmptyMessage(1);
                }
            } catch (IOException e10) {
                if (!this.f13583t) {
                    obtainMessage(2, e10).sendToTarget();
                }
            } catch (Error e11) {
                if (!this.f13583t) {
                    y.d("LoadTask", "Unexpected error loading stream", e11);
                    obtainMessage(3, e11).sendToTarget();
                }
                throw e11;
            } catch (Exception e12) {
                if (!this.f13583t) {
                    y.d("LoadTask", "Unexpected exception loading stream", e12);
                    obtainMessage(2, new h(e12)).sendToTarget();
                }
            } catch (OutOfMemoryError e13) {
                if (!this.f13583t) {
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
        private final f f13585d;

        public g(f fVar) {
            this.f13585d = fVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f13585d.o();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class h extends IOException {
        public h(Throwable th2) {
            super("Unexpected " + th2.getClass().getSimpleName() + ": " + th2.getMessage(), th2);
        }
    }

    public j(String str) {
        this.f13570a = w0.L0("ExoPlayer:Loader:" + str);
    }

    public static c h(boolean z10, long j10) {
        return new c(z10 ? 1 : 0, j10);
    }

    @Override // me.u
    public void a() {
        k(Integer.MIN_VALUE);
    }

    public void f() {
        ((d) oe.a.i(this.f13571b)).a(false);
    }

    public void g() {
        this.f13572c = null;
    }

    public boolean i() {
        if (this.f13572c != null) {
            return true;
        }
        return false;
    }

    public boolean j() {
        if (this.f13571b != null) {
            return true;
        }
        return false;
    }

    public void k(int i10) {
        IOException iOException = this.f13572c;
        if (iOException == null) {
            d dVar = this.f13571b;
            if (dVar != null) {
                if (i10 == Integer.MIN_VALUE) {
                    i10 = dVar.f13575d;
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
        d dVar = this.f13571b;
        if (dVar != null) {
            dVar.a(true);
        }
        if (fVar != null) {
            this.f13570a.execute(new g(fVar));
        }
        this.f13570a.shutdown();
    }

    public long n(e eVar, b bVar, int i10) {
        this.f13572c = null;
        long elapsedRealtime = SystemClock.elapsedRealtime();
        new d((Looper) oe.a.i(Looper.myLooper()), eVar, bVar, i10, elapsedRealtime).f(0L);
        return elapsedRealtime;
    }
}
