package oe;

import android.content.Context;
import android.graphics.SurfaceTexture;
import android.os.Handler;
import android.os.HandlerThread;
import android.os.Message;
import android.view.Surface;
import ne.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i extends Surface {

    /* renamed from: o  reason: collision with root package name */
    private static int f41737o;

    /* renamed from: p  reason: collision with root package name */
    private static boolean f41738p;

    /* renamed from: d  reason: collision with root package name */
    public final boolean f41739d;

    /* renamed from: e  reason: collision with root package name */
    private final b f41740e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f41741i;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b extends HandlerThread implements Handler.Callback {

        /* renamed from: d  reason: collision with root package name */
        private ne.m f41742d;

        /* renamed from: e  reason: collision with root package name */
        private Handler f41743e;

        /* renamed from: i  reason: collision with root package name */
        private Error f41744i;

        /* renamed from: o  reason: collision with root package name */
        private RuntimeException f41745o;

        /* renamed from: p  reason: collision with root package name */
        private i f41746p;

        public b() {
            super("ExoPlayer:PlaceholderSurface");
        }

        private void b(int i10) {
            boolean z10;
            ne.a.e(this.f41742d);
            this.f41742d.h(i10);
            SurfaceTexture g10 = this.f41742d.g();
            if (i10 != 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f41746p = new i(this, g10, z10);
        }

        private void d() {
            ne.a.e(this.f41742d);
            this.f41742d.i();
        }

        public i a(int i10) {
            boolean z10;
            start();
            this.f41743e = new Handler(getLooper(), this);
            this.f41742d = new ne.m(this.f41743e);
            synchronized (this) {
                z10 = false;
                this.f41743e.obtainMessage(1, i10, 0).sendToTarget();
                while (this.f41746p == null && this.f41745o == null && this.f41744i == null) {
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
            RuntimeException runtimeException = this.f41745o;
            if (runtimeException == null) {
                Error error = this.f41744i;
                if (error == null) {
                    return (i) ne.a.e(this.f41746p);
                }
                throw error;
            }
            throw runtimeException;
        }

        public void c() {
            ne.a.e(this.f41743e);
            this.f41743e.sendEmptyMessage(2);
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
                    ne.y.d("PlaceholderSurface", "Failed to initialize placeholder surface", e10);
                    this.f41744i = e10;
                    synchronized (this) {
                        notify();
                    }
                } catch (RuntimeException e11) {
                    ne.y.d("PlaceholderSurface", "Failed to initialize placeholder surface", e11);
                    this.f41745o = e11;
                    synchronized (this) {
                        notify();
                    }
                } catch (t.a e12) {
                    ne.y.d("PlaceholderSurface", "Failed to initialize placeholder surface", e12);
                    this.f41745o = new IllegalStateException(e12);
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
        if (ne.t.h(context)) {
            if (ne.t.i()) {
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
                if (!f41738p) {
                    f41737o = a(context);
                    f41738p = true;
                }
                if (f41737o == 0) {
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
        ne.a.g(z11);
        b bVar = new b();
        if (z10) {
            i10 = f41737o;
        }
        return bVar.a(i10);
    }

    @Override // android.view.Surface
    public void release() {
        super.release();
        synchronized (this.f41740e) {
            try {
                if (!this.f41741i) {
                    this.f41740e.c();
                    this.f41741i = true;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private i(b bVar, SurfaceTexture surfaceTexture, boolean z10) {
        super(surfaceTexture);
        this.f41740e = bVar;
        this.f41739d = z10;
    }
}
