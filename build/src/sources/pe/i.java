package pe;

import android.content.Context;
import android.graphics.SurfaceTexture;
import android.os.Handler;
import android.os.HandlerThread;
import android.os.Message;
import android.view.Surface;
import oe.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i extends Surface {

    /* renamed from: o  reason: collision with root package name */
    private static int f41655o;

    /* renamed from: p  reason: collision with root package name */
    private static boolean f41656p;

    /* renamed from: d  reason: collision with root package name */
    public final boolean f41657d;

    /* renamed from: e  reason: collision with root package name */
    private final b f41658e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f41659i;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b extends HandlerThread implements Handler.Callback {

        /* renamed from: d  reason: collision with root package name */
        private oe.m f41660d;

        /* renamed from: e  reason: collision with root package name */
        private Handler f41661e;

        /* renamed from: i  reason: collision with root package name */
        private Error f41662i;

        /* renamed from: o  reason: collision with root package name */
        private RuntimeException f41663o;

        /* renamed from: p  reason: collision with root package name */
        private i f41664p;

        public b() {
            super("ExoPlayer:PlaceholderSurface");
        }

        private void b(int i10) {
            boolean z10;
            oe.a.e(this.f41660d);
            this.f41660d.h(i10);
            SurfaceTexture g10 = this.f41660d.g();
            if (i10 != 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f41664p = new i(this, g10, z10);
        }

        private void d() {
            oe.a.e(this.f41660d);
            this.f41660d.i();
        }

        public i a(int i10) {
            boolean z10;
            start();
            this.f41661e = new Handler(getLooper(), this);
            this.f41660d = new oe.m(this.f41661e);
            synchronized (this) {
                z10 = false;
                this.f41661e.obtainMessage(1, i10, 0).sendToTarget();
                while (this.f41664p == null && this.f41663o == null && this.f41662i == null) {
                    try {
                        wait();
                    } catch (InterruptedException unused) {
                        z10 = true;
                    }
                }
            }
            if (z10) {
                Thread.currentThread().interrupt();
            }
            RuntimeException runtimeException = this.f41663o;
            if (runtimeException == null) {
                Error error = this.f41662i;
                if (error == null) {
                    return (i) oe.a.e(this.f41664p);
                }
                throw error;
            }
            throw runtimeException;
        }

        public void c() {
            oe.a.e(this.f41661e);
            this.f41661e.sendEmptyMessage(2);
        }

        @Override // android.os.Handler.Callback
        public boolean handleMessage(Message message) {
            int i10 = message.what;
            try {
                if (i10 != 1) {
                    if (i10 != 2) {
                        return true;
                    }
                    try {
                        d();
                    } finally {
                        try {
                            return true;
                        } finally {
                        }
                    }
                    return true;
                }
                try {
                    b(message.arg1);
                    synchronized (this) {
                        notify();
                    }
                } catch (Error e10) {
                    oe.y.d("PlaceholderSurface", "Failed to initialize placeholder surface", e10);
                    this.f41662i = e10;
                    synchronized (this) {
                        notify();
                    }
                } catch (RuntimeException e11) {
                    oe.y.d("PlaceholderSurface", "Failed to initialize placeholder surface", e11);
                    this.f41663o = e11;
                    synchronized (this) {
                        notify();
                    }
                } catch (t.a e12) {
                    oe.y.d("PlaceholderSurface", "Failed to initialize placeholder surface", e12);
                    this.f41663o = new IllegalStateException(e12);
                    synchronized (this) {
                        notify();
                    }
                }
                return true;
            } catch (Throwable th2) {
                synchronized (this) {
                    notify();
                    throw th2;
                }
            }
        }
    }

    private static int a(Context context) {
        if (oe.t.h(context)) {
            if (oe.t.i()) {
                return 1;
            }
            return 2;
        }
        return 0;
    }

    public static synchronized boolean b(Context context) {
        boolean z10;
        synchronized (i.class) {
            try {
                z10 = true;
                if (!f41656p) {
                    f41655o = a(context);
                    f41656p = true;
                }
                if (f41655o == 0) {
                    z10 = false;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return z10;
    }

    public static i c(Context context, boolean z10) {
        boolean z11;
        int i10 = 0;
        if (z10 && !b(context)) {
            z11 = false;
        } else {
            z11 = true;
        }
        oe.a.g(z11);
        b bVar = new b();
        if (z10) {
            i10 = f41655o;
        }
        return bVar.a(i10);
    }

    @Override // android.view.Surface
    public void release() {
        super.release();
        synchronized (this.f41658e) {
            try {
                if (!this.f41659i) {
                    this.f41658e.c();
                    this.f41659i = true;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private i(b bVar, SurfaceTexture surfaceTexture, boolean z10) {
        super(surfaceTexture);
        this.f41658e = bVar;
        this.f41657d = z10;
    }
}
