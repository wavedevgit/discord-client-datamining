package oe;

import android.content.Context;
import android.hardware.display.DisplayManager;
import android.os.Handler;
import android.os.HandlerThread;
import android.os.Message;
import android.view.Choreographer;
import android.view.Display;
import android.view.Surface;
import android.view.WindowManager;
import com.facebook.react.uimanager.ViewProps;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n {

    /* renamed from: a  reason: collision with root package name */
    private final oe.e f42787a = new oe.e();

    /* renamed from: b  reason: collision with root package name */
    private final b f42788b;

    /* renamed from: c  reason: collision with root package name */
    private final e f42789c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f42790d;

    /* renamed from: e  reason: collision with root package name */
    private Surface f42791e;

    /* renamed from: f  reason: collision with root package name */
    private float f42792f;

    /* renamed from: g  reason: collision with root package name */
    private float f42793g;

    /* renamed from: h  reason: collision with root package name */
    private float f42794h;

    /* renamed from: i  reason: collision with root package name */
    private float f42795i;

    /* renamed from: j  reason: collision with root package name */
    private int f42796j;

    /* renamed from: k  reason: collision with root package name */
    private long f42797k;

    /* renamed from: l  reason: collision with root package name */
    private long f42798l;

    /* renamed from: m  reason: collision with root package name */
    private long f42799m;

    /* renamed from: n  reason: collision with root package name */
    private long f42800n;

    /* renamed from: o  reason: collision with root package name */
    private long f42801o;

    /* renamed from: p  reason: collision with root package name */
    private long f42802p;

    /* renamed from: q  reason: collision with root package name */
    private long f42803q;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public static void a(Surface surface, float f10) {
            int i10;
            if (f10 == 0.0f) {
                i10 = 0;
            } else {
                i10 = 1;
            }
            try {
                surface.setFrameRate(f10, i10);
            } catch (IllegalStateException e10) {
                ne.y.d("VideoFrameReleaseHelper", "Failed to call Surface.setFrameRate", e10);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public interface a {
            void a(Display display);
        }

        void a(a aVar);

        void b();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class e implements Choreographer.FrameCallback, Handler.Callback {

        /* renamed from: q  reason: collision with root package name */
        private static final e f42807q = new e();

        /* renamed from: d  reason: collision with root package name */
        public volatile long f42808d = -9223372036854775807L;

        /* renamed from: e  reason: collision with root package name */
        private final Handler f42809e;

        /* renamed from: i  reason: collision with root package name */
        private final HandlerThread f42810i;

        /* renamed from: o  reason: collision with root package name */
        private Choreographer f42811o;

        /* renamed from: p  reason: collision with root package name */
        private int f42812p;

        private e() {
            HandlerThread handlerThread = new HandlerThread("ExoPlayer:FrameReleaseChoreographer");
            this.f42810i = handlerThread;
            handlerThread.start();
            Handler v10 = w0.v(handlerThread.getLooper(), this);
            this.f42809e = v10;
            v10.sendEmptyMessage(0);
        }

        private void b() {
            Choreographer choreographer = this.f42811o;
            if (choreographer != null) {
                int i10 = this.f42812p + 1;
                this.f42812p = i10;
                if (i10 == 1) {
                    choreographer.postFrameCallback(this);
                }
            }
        }

        private void c() {
            try {
                this.f42811o = Choreographer.getInstance();
            } catch (RuntimeException e10) {
                ne.y.j("VideoFrameReleaseHelper", "Vsync sampling disabled due to platform error", e10);
            }
        }

        public static e d() {
            return f42807q;
        }

        private void f() {
            Choreographer choreographer = this.f42811o;
            if (choreographer != null) {
                int i10 = this.f42812p - 1;
                this.f42812p = i10;
                if (i10 == 0) {
                    choreographer.removeFrameCallback(this);
                    this.f42808d = -9223372036854775807L;
                }
            }
        }

        public void a() {
            this.f42809e.sendEmptyMessage(1);
        }

        @Override // android.view.Choreographer.FrameCallback
        public void doFrame(long j10) {
            this.f42808d = j10;
            ((Choreographer) ne.a.e(this.f42811o)).postFrameCallbackDelayed(this, 500L);
        }

        public void e() {
            this.f42809e.sendEmptyMessage(2);
        }

        @Override // android.os.Handler.Callback
        public boolean handleMessage(Message message) {
            int i10 = message.what;
            if (i10 != 0) {
                if (i10 != 1) {
                    if (i10 != 2) {
                        return false;
                    }
                    f();
                    return true;
                }
                b();
                return true;
            }
            c();
            return true;
        }
    }

    public n(Context context) {
        e eVar;
        b f10 = f(context);
        this.f42788b = f10;
        if (f10 != null) {
            eVar = e.d();
        } else {
            eVar = null;
        }
        this.f42789c = eVar;
        this.f42797k = -9223372036854775807L;
        this.f42798l = -9223372036854775807L;
        this.f42792f = -1.0f;
        this.f42795i = 1.0f;
        this.f42796j = 0;
    }

    private static boolean c(long j10, long j11) {
        if (Math.abs(j10 - j11) <= 20000000) {
            return true;
        }
        return false;
    }

    private void d() {
        Surface surface;
        if (w0.f40158a >= 30 && (surface = this.f42791e) != null && this.f42796j != Integer.MIN_VALUE && this.f42794h != 0.0f) {
            this.f42794h = 0.0f;
            a.a(surface, 0.0f);
        }
    }

    private static long e(long j10, long j11, long j12) {
        long j13;
        long j14 = j11 + (((j10 - j11) / j12) * j12);
        if (j10 <= j14) {
            j13 = j14 - j12;
        } else {
            long j15 = j12 + j14;
            j13 = j14;
            j14 = j15;
        }
        if (j14 - j10 < j10 - j13) {
            return j14;
        }
        return j13;
    }

    private static b f(Context context) {
        b bVar = null;
        if (context != null) {
            Context applicationContext = context.getApplicationContext();
            if (w0.f40158a >= 17) {
                bVar = d.d(applicationContext);
            }
            if (bVar == null) {
                return c.c(applicationContext);
            }
        }
        return bVar;
    }

    private void n() {
        this.f42799m = 0L;
        this.f42802p = -1L;
        this.f42800n = -1L;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void p(Display display) {
        if (display != null) {
            long refreshRate = (long) (1.0E9d / display.getRefreshRate());
            this.f42797k = refreshRate;
            this.f42798l = (refreshRate * 80) / 100;
            return;
        }
        ne.y.i("VideoFrameReleaseHelper", "Unable to query display refresh rate");
        this.f42797k = -9223372036854775807L;
        this.f42798l = -9223372036854775807L;
    }

    private void q() {
        float f10;
        float f11;
        if (w0.f40158a >= 30 && this.f42791e != null) {
            if (this.f42787a.e()) {
                f10 = this.f42787a.b();
            } else {
                f10 = this.f42792f;
            }
            float f12 = this.f42793g;
            if (f10 != f12) {
                int i10 = (f10 > (-1.0f) ? 1 : (f10 == (-1.0f) ? 0 : -1));
                if (i10 != 0 && f12 != -1.0f) {
                    if (this.f42787a.e() && this.f42787a.d() >= 5000000000L) {
                        f11 = 0.02f;
                    } else {
                        f11 = 1.0f;
                    }
                    if (Math.abs(f10 - this.f42793g) < f11) {
                        return;
                    }
                } else if (i10 == 0 && this.f42787a.c() < 30) {
                    return;
                }
                this.f42793g = f10;
                r(false);
            }
        }
    }

    private void r(boolean z10) {
        Surface surface;
        float f10;
        if (w0.f40158a >= 30 && (surface = this.f42791e) != null && this.f42796j != Integer.MIN_VALUE) {
            if (this.f42790d) {
                float f11 = this.f42793g;
                if (f11 != -1.0f) {
                    f10 = f11 * this.f42795i;
                    if (!z10 || this.f42794h != f10) {
                        this.f42794h = f10;
                        a.a(surface, f10);
                    }
                    return;
                }
            }
            f10 = 0.0f;
            if (!z10) {
            }
            this.f42794h = f10;
            a.a(surface, f10);
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:19:0x004d  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public long b(long r11) {
        /*
            r10 = this;
            long r0 = r10.f42802p
            r2 = -1
            int r0 = (r0 > r2 ? 1 : (r0 == r2 ? 0 : -1))
            if (r0 == 0) goto L2f
            oe.e r0 = r10.f42787a
            boolean r0 = r0.e()
            if (r0 == 0) goto L2f
            oe.e r0 = r10.f42787a
            long r0 = r0.a()
            long r2 = r10.f42803q
            long r4 = r10.f42799m
            long r6 = r10.f42802p
            long r4 = r4 - r6
            long r0 = r0 * r4
            float r0 = (float) r0
            float r1 = r10.f42795i
            float r0 = r0 / r1
            long r0 = (long) r0
            long r2 = r2 + r0
            boolean r0 = c(r11, r2)
            if (r0 == 0) goto L2c
            r4 = r2
            goto L30
        L2c:
            r10.n()
        L2f:
            r4 = r11
        L30:
            long r11 = r10.f42799m
            r10.f42800n = r11
            r10.f42801o = r4
            oe.n$e r11 = r10.f42789c
            if (r11 == 0) goto L57
            long r0 = r10.f42797k
            r2 = -9223372036854775807(0x8000000000000001, double:-4.9E-324)
            int r12 = (r0 > r2 ? 1 : (r0 == r2 ? 0 : -1))
            if (r12 != 0) goto L46
            goto L57
        L46:
            long r6 = r11.f42808d
            int r11 = (r6 > r2 ? 1 : (r6 == r2 ? 0 : -1))
            if (r11 != 0) goto L4d
            goto L57
        L4d:
            long r8 = r10.f42797k
            long r11 = e(r4, r6, r8)
            long r0 = r10.f42798l
            long r11 = r11 - r0
            return r11
        L57:
            return r4
        */
        throw new UnsupportedOperationException("Method not decompiled: oe.n.b(long):long");
    }

    public void g(float f10) {
        this.f42792f = f10;
        this.f42787a.g();
        q();
    }

    public void h(long j10) {
        long j11 = this.f42800n;
        if (j11 != -1) {
            this.f42802p = j11;
            this.f42803q = this.f42801o;
        }
        this.f42799m++;
        this.f42787a.f(j10 * 1000);
        q();
    }

    public void i(float f10) {
        this.f42795i = f10;
        n();
        r(false);
    }

    public void j() {
        n();
    }

    public void k() {
        this.f42790d = true;
        n();
        if (this.f42788b != null) {
            ((e) ne.a.e(this.f42789c)).a();
            this.f42788b.a(new b.a() { // from class: oe.m
                @Override // oe.n.b.a
                public final void a(Display display) {
                    n.this.p(display);
                }
            });
        }
        r(false);
    }

    public void l() {
        this.f42790d = false;
        b bVar = this.f42788b;
        if (bVar != null) {
            bVar.b();
            ((e) ne.a.e(this.f42789c)).e();
        }
        d();
    }

    public void m(Surface surface) {
        if (surface instanceof i) {
            surface = null;
        }
        if (this.f42791e == surface) {
            return;
        }
        d();
        this.f42791e = surface;
        r(true);
    }

    public void o(int i10) {
        if (this.f42796j == i10) {
            return;
        }
        this.f42796j = i10;
        r(true);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c implements b {

        /* renamed from: a  reason: collision with root package name */
        private final WindowManager f42804a;

        private c(WindowManager windowManager) {
            this.f42804a = windowManager;
        }

        public static b c(Context context) {
            WindowManager windowManager = (WindowManager) context.getSystemService("window");
            if (windowManager != null) {
                return new c(windowManager);
            }
            return null;
        }

        @Override // oe.n.b
        public void a(b.a aVar) {
            aVar.a(this.f42804a.getDefaultDisplay());
        }

        @Override // oe.n.b
        public void b() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d implements b, DisplayManager.DisplayListener {

        /* renamed from: a  reason: collision with root package name */
        private final DisplayManager f42805a;

        /* renamed from: b  reason: collision with root package name */
        private b.a f42806b;

        private d(DisplayManager displayManager) {
            this.f42805a = displayManager;
        }

        private Display c() {
            return this.f42805a.getDisplay(0);
        }

        public static b d(Context context) {
            DisplayManager displayManager = (DisplayManager) context.getSystemService(ViewProps.DISPLAY);
            if (displayManager != null) {
                return new d(displayManager);
            }
            return null;
        }

        @Override // oe.n.b
        public void a(b.a aVar) {
            this.f42806b = aVar;
            this.f42805a.registerDisplayListener(this, w0.w());
            aVar.a(c());
        }

        @Override // oe.n.b
        public void b() {
            this.f42805a.unregisterDisplayListener(this);
            this.f42806b = null;
        }

        @Override // android.hardware.display.DisplayManager.DisplayListener
        public void onDisplayChanged(int i10) {
            b.a aVar = this.f42806b;
            if (aVar != null && i10 == 0) {
                aVar.a(c());
            }
        }

        @Override // android.hardware.display.DisplayManager.DisplayListener
        public void onDisplayAdded(int i10) {
        }

        @Override // android.hardware.display.DisplayManager.DisplayListener
        public void onDisplayRemoved(int i10) {
        }
    }
}
