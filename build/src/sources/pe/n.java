package pe;

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
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n {

    /* renamed from: a  reason: collision with root package name */
    private final pe.e f42251a = new pe.e();

    /* renamed from: b  reason: collision with root package name */
    private final b f42252b;

    /* renamed from: c  reason: collision with root package name */
    private final e f42253c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f42254d;

    /* renamed from: e  reason: collision with root package name */
    private Surface f42255e;

    /* renamed from: f  reason: collision with root package name */
    private float f42256f;

    /* renamed from: g  reason: collision with root package name */
    private float f42257g;

    /* renamed from: h  reason: collision with root package name */
    private float f42258h;

    /* renamed from: i  reason: collision with root package name */
    private float f42259i;

    /* renamed from: j  reason: collision with root package name */
    private int f42260j;

    /* renamed from: k  reason: collision with root package name */
    private long f42261k;

    /* renamed from: l  reason: collision with root package name */
    private long f42262l;

    /* renamed from: m  reason: collision with root package name */
    private long f42263m;

    /* renamed from: n  reason: collision with root package name */
    private long f42264n;

    /* renamed from: o  reason: collision with root package name */
    private long f42265o;

    /* renamed from: p  reason: collision with root package name */
    private long f42266p;

    /* renamed from: q  reason: collision with root package name */
    private long f42267q;

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
                oe.y.d("VideoFrameReleaseHelper", "Failed to call Surface.setFrameRate", e10);
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

        void a();

        void b(a aVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class e implements Choreographer.FrameCallback, Handler.Callback {

        /* renamed from: q  reason: collision with root package name */
        private static final e f42271q = new e();

        /* renamed from: d  reason: collision with root package name */
        public volatile long f42272d = -9223372036854775807L;

        /* renamed from: e  reason: collision with root package name */
        private final Handler f42273e;

        /* renamed from: i  reason: collision with root package name */
        private final HandlerThread f42274i;

        /* renamed from: o  reason: collision with root package name */
        private Choreographer f42275o;

        /* renamed from: p  reason: collision with root package name */
        private int f42276p;

        private e() {
            HandlerThread handlerThread = new HandlerThread("ExoPlayer:FrameReleaseChoreographer");
            this.f42274i = handlerThread;
            handlerThread.start();
            Handler v10 = w0.v(handlerThread.getLooper(), this);
            this.f42273e = v10;
            v10.sendEmptyMessage(0);
        }

        private void b() {
            Choreographer choreographer = this.f42275o;
            if (choreographer != null) {
                int i10 = this.f42276p + 1;
                this.f42276p = i10;
                if (i10 == 1) {
                    choreographer.postFrameCallback(this);
                }
            }
        }

        private void c() {
            try {
                this.f42275o = Choreographer.getInstance();
            } catch (RuntimeException e10) {
                oe.y.j("VideoFrameReleaseHelper", "Vsync sampling disabled due to platform error", e10);
            }
        }

        public static e d() {
            return f42271q;
        }

        private void f() {
            Choreographer choreographer = this.f42275o;
            if (choreographer != null) {
                int i10 = this.f42276p - 1;
                this.f42276p = i10;
                if (i10 == 0) {
                    choreographer.removeFrameCallback(this);
                    this.f42272d = -9223372036854775807L;
                }
            }
        }

        public void a() {
            this.f42273e.sendEmptyMessage(1);
        }

        @Override // android.view.Choreographer.FrameCallback
        public void doFrame(long j10) {
            this.f42272d = j10;
            ((Choreographer) oe.a.e(this.f42275o)).postFrameCallbackDelayed(this, 500L);
        }

        public void e() {
            this.f42273e.sendEmptyMessage(2);
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
        this.f42252b = f10;
        if (f10 != null) {
            eVar = e.d();
        } else {
            eVar = null;
        }
        this.f42253c = eVar;
        this.f42261k = -9223372036854775807L;
        this.f42262l = -9223372036854775807L;
        this.f42256f = -1.0f;
        this.f42259i = 1.0f;
        this.f42260j = 0;
    }

    private static boolean c(long j10, long j11) {
        if (Math.abs(j10 - j11) <= 20000000) {
            return true;
        }
        return false;
    }

    private void d() {
        Surface surface;
        if (w0.f39606a >= 30 && (surface = this.f42255e) != null && this.f42260j != Integer.MIN_VALUE && this.f42258h != 0.0f) {
            this.f42258h = 0.0f;
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
            if (w0.f39606a >= 17) {
                bVar = d.d(applicationContext);
            }
            if (bVar == null) {
                return c.c(applicationContext);
            }
        }
        return bVar;
    }

    private void n() {
        this.f42263m = 0L;
        this.f42266p = -1L;
        this.f42264n = -1L;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void p(Display display) {
        if (display != null) {
            long refreshRate = (long) (1.0E9d / display.getRefreshRate());
            this.f42261k = refreshRate;
            this.f42262l = (refreshRate * 80) / 100;
            return;
        }
        oe.y.i("VideoFrameReleaseHelper", "Unable to query display refresh rate");
        this.f42261k = -9223372036854775807L;
        this.f42262l = -9223372036854775807L;
    }

    private void q() {
        float f10;
        float f11;
        if (w0.f39606a >= 30 && this.f42255e != null) {
            if (this.f42251a.e()) {
                f10 = this.f42251a.b();
            } else {
                f10 = this.f42256f;
            }
            float f12 = this.f42257g;
            if (f10 != f12) {
                int i10 = (f10 > (-1.0f) ? 1 : (f10 == (-1.0f) ? 0 : -1));
                if (i10 != 0 && f12 != -1.0f) {
                    if (this.f42251a.e() && this.f42251a.d() >= 5000000000L) {
                        f11 = 0.02f;
                    } else {
                        f11 = 1.0f;
                    }
                    if (Math.abs(f10 - this.f42257g) < f11) {
                        return;
                    }
                } else if (i10 == 0 && this.f42251a.c() < 30) {
                    return;
                }
                this.f42257g = f10;
                r(false);
            }
        }
    }

    private void r(boolean z10) {
        Surface surface;
        float f10;
        if (w0.f39606a >= 30 && (surface = this.f42255e) != null && this.f42260j != Integer.MIN_VALUE) {
            if (this.f42254d) {
                float f11 = this.f42257g;
                if (f11 != -1.0f) {
                    f10 = f11 * this.f42259i;
                    if (!z10 || this.f42258h != f10) {
                        this.f42258h = f10;
                        a.a(surface, f10);
                    }
                    return;
                }
            }
            f10 = 0.0f;
            if (!z10) {
            }
            this.f42258h = f10;
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
            long r0 = r10.f42266p
            r2 = -1
            int r0 = (r0 > r2 ? 1 : (r0 == r2 ? 0 : -1))
            if (r0 == 0) goto L2f
            pe.e r0 = r10.f42251a
            boolean r0 = r0.e()
            if (r0 == 0) goto L2f
            pe.e r0 = r10.f42251a
            long r0 = r0.a()
            long r2 = r10.f42267q
            long r4 = r10.f42263m
            long r6 = r10.f42266p
            long r4 = r4 - r6
            long r0 = r0 * r4
            float r0 = (float) r0
            float r1 = r10.f42259i
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
            long r11 = r10.f42263m
            r10.f42264n = r11
            r10.f42265o = r4
            pe.n$e r11 = r10.f42253c
            if (r11 == 0) goto L57
            long r0 = r10.f42261k
            r2 = -9223372036854775807(0x8000000000000001, double:-4.9E-324)
            int r12 = (r0 > r2 ? 1 : (r0 == r2 ? 0 : -1))
            if (r12 != 0) goto L46
            goto L57
        L46:
            long r6 = r11.f42272d
            int r11 = (r6 > r2 ? 1 : (r6 == r2 ? 0 : -1))
            if (r11 != 0) goto L4d
            goto L57
        L4d:
            long r8 = r10.f42261k
            long r11 = e(r4, r6, r8)
            long r0 = r10.f42262l
            long r11 = r11 - r0
            return r11
        L57:
            return r4
        */
        throw new UnsupportedOperationException("Method not decompiled: pe.n.b(long):long");
    }

    public void g(float f10) {
        this.f42256f = f10;
        this.f42251a.g();
        q();
    }

    public void h(long j10) {
        long j11 = this.f42264n;
        if (j11 != -1) {
            this.f42266p = j11;
            this.f42267q = this.f42265o;
        }
        this.f42263m++;
        this.f42251a.f(j10 * 1000);
        q();
    }

    public void i(float f10) {
        this.f42259i = f10;
        n();
        r(false);
    }

    public void j() {
        n();
    }

    public void k() {
        this.f42254d = true;
        n();
        if (this.f42252b != null) {
            ((e) oe.a.e(this.f42253c)).a();
            this.f42252b.b(new b.a() { // from class: pe.m
                @Override // pe.n.b.a
                public final void a(Display display) {
                    n.this.p(display);
                }
            });
        }
        r(false);
    }

    public void l() {
        this.f42254d = false;
        b bVar = this.f42252b;
        if (bVar != null) {
            bVar.a();
            ((e) oe.a.e(this.f42253c)).e();
        }
        d();
    }

    public void m(Surface surface) {
        if (surface instanceof i) {
            surface = null;
        }
        if (this.f42255e == surface) {
            return;
        }
        d();
        this.f42255e = surface;
        r(true);
    }

    public void o(int i10) {
        if (this.f42260j == i10) {
            return;
        }
        this.f42260j = i10;
        r(true);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c implements b {

        /* renamed from: a  reason: collision with root package name */
        private final WindowManager f42268a;

        private c(WindowManager windowManager) {
            this.f42268a = windowManager;
        }

        public static b c(Context context) {
            WindowManager windowManager = (WindowManager) context.getSystemService("window");
            if (windowManager != null) {
                return new c(windowManager);
            }
            return null;
        }

        @Override // pe.n.b
        public void b(b.a aVar) {
            aVar.a(this.f42268a.getDefaultDisplay());
        }

        @Override // pe.n.b
        public void a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d implements b, DisplayManager.DisplayListener {

        /* renamed from: a  reason: collision with root package name */
        private final DisplayManager f42269a;

        /* renamed from: b  reason: collision with root package name */
        private b.a f42270b;

        private d(DisplayManager displayManager) {
            this.f42269a = displayManager;
        }

        private Display c() {
            return this.f42269a.getDisplay(0);
        }

        public static b d(Context context) {
            DisplayManager displayManager = (DisplayManager) context.getSystemService(ViewProps.DISPLAY);
            if (displayManager != null) {
                return new d(displayManager);
            }
            return null;
        }

        @Override // pe.n.b
        public void a() {
            this.f42269a.unregisterDisplayListener(this);
            this.f42270b = null;
        }

        @Override // pe.n.b
        public void b(b.a aVar) {
            this.f42270b = aVar;
            this.f42269a.registerDisplayListener(this, w0.w());
            aVar.a(c());
        }

        @Override // android.hardware.display.DisplayManager.DisplayListener
        public void onDisplayChanged(int i10) {
            b.a aVar = this.f42270b;
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
