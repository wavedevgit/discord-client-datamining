package androidx.appcompat.widget;

import android.os.SystemClock;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewConfiguration;
import android.view.ViewParent;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class h0 implements View.OnTouchListener, View.OnAttachStateChangeListener {

    /* renamed from: d  reason: collision with root package name */
    private final float f1680d;

    /* renamed from: e  reason: collision with root package name */
    private final int f1681e;

    /* renamed from: i  reason: collision with root package name */
    private final int f1682i;

    /* renamed from: o  reason: collision with root package name */
    final View f1683o;

    /* renamed from: p  reason: collision with root package name */
    private Runnable f1684p;

    /* renamed from: q  reason: collision with root package name */
    private Runnable f1685q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f1686r;

    /* renamed from: s  reason: collision with root package name */
    private int f1687s;

    /* renamed from: t  reason: collision with root package name */
    private final int[] f1688t = new int[2];

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements Runnable {
        a() {
        }

        @Override // java.lang.Runnable
        public void run() {
            ViewParent parent = h0.this.f1683o.getParent();
            if (parent != null) {
                parent.requestDisallowInterceptTouchEvent(true);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b implements Runnable {
        b() {
        }

        @Override // java.lang.Runnable
        public void run() {
            h0.this.e();
        }
    }

    public h0(View view) {
        this.f1683o = view;
        view.setLongClickable(true);
        view.addOnAttachStateChangeListener(this);
        this.f1680d = ViewConfiguration.get(view.getContext()).getScaledTouchSlop();
        int tapTimeout = ViewConfiguration.getTapTimeout();
        this.f1681e = tapTimeout;
        this.f1682i = (tapTimeout + ViewConfiguration.getLongPressTimeout()) / 2;
    }

    private void a() {
        Runnable runnable = this.f1685q;
        if (runnable != null) {
            this.f1683o.removeCallbacks(runnable);
        }
        Runnable runnable2 = this.f1684p;
        if (runnable2 != null) {
            this.f1683o.removeCallbacks(runnable2);
        }
    }

    private boolean f(MotionEvent motionEvent) {
        f0 f0Var;
        boolean z10;
        View view = this.f1683o;
        k.e b10 = b();
        if (b10 != null && b10.isShowing() && (f0Var = (f0) b10.n()) != null && f0Var.isShown()) {
            MotionEvent obtainNoHistory = MotionEvent.obtainNoHistory(motionEvent);
            i(view, obtainNoHistory);
            j(f0Var, obtainNoHistory);
            boolean e10 = f0Var.e(obtainNoHistory, this.f1687s);
            obtainNoHistory.recycle();
            int actionMasked = motionEvent.getActionMasked();
            if (actionMasked != 1 && actionMasked != 3) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (e10 && z10) {
                return true;
            }
        }
        return false;
    }

    /* JADX WARN: Code restructure failed: missing block: B:12:0x0017, code lost:
        if (r1 != 3) goto L13;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private boolean g(android.view.MotionEvent r6) {
        /*
            r5 = this;
            android.view.View r0 = r5.f1683o
            boolean r1 = r0.isEnabled()
            r2 = 0
            if (r1 != 0) goto La
            return r2
        La:
            int r1 = r6.getActionMasked()
            if (r1 == 0) goto L41
            r3 = 1
            if (r1 == r3) goto L3d
            r4 = 2
            if (r1 == r4) goto L1a
            r6 = 3
            if (r1 == r6) goto L3d
            goto L6d
        L1a:
            int r1 = r5.f1687s
            int r1 = r6.findPointerIndex(r1)
            if (r1 < 0) goto L6d
            float r4 = r6.getX(r1)
            float r6 = r6.getY(r1)
            float r1 = r5.f1680d
            boolean r6 = h(r0, r4, r6, r1)
            if (r6 != 0) goto L6d
            r5.a()
            android.view.ViewParent r6 = r0.getParent()
            r6.requestDisallowInterceptTouchEvent(r3)
            return r3
        L3d:
            r5.a()
            goto L6d
        L41:
            int r6 = r6.getPointerId(r2)
            r5.f1687s = r6
            java.lang.Runnable r6 = r5.f1684p
            if (r6 != 0) goto L52
            androidx.appcompat.widget.h0$a r6 = new androidx.appcompat.widget.h0$a
            r6.<init>()
            r5.f1684p = r6
        L52:
            java.lang.Runnable r6 = r5.f1684p
            int r1 = r5.f1681e
            long r3 = (long) r1
            r0.postDelayed(r6, r3)
            java.lang.Runnable r6 = r5.f1685q
            if (r6 != 0) goto L65
            androidx.appcompat.widget.h0$b r6 = new androidx.appcompat.widget.h0$b
            r6.<init>()
            r5.f1685q = r6
        L65:
            java.lang.Runnable r6 = r5.f1685q
            int r1 = r5.f1682i
            long r3 = (long) r1
            r0.postDelayed(r6, r3)
        L6d:
            return r2
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.appcompat.widget.h0.g(android.view.MotionEvent):boolean");
    }

    private static boolean h(View view, float f10, float f11, float f12) {
        float f13 = -f12;
        if (f10 >= f13 && f11 >= f13 && f10 < (view.getRight() - view.getLeft()) + f12 && f11 < (view.getBottom() - view.getTop()) + f12) {
            return true;
        }
        return false;
    }

    private boolean i(View view, MotionEvent motionEvent) {
        int[] iArr = this.f1688t;
        view.getLocationOnScreen(iArr);
        motionEvent.offsetLocation(iArr[0], iArr[1]);
        return true;
    }

    private boolean j(View view, MotionEvent motionEvent) {
        int[] iArr = this.f1688t;
        view.getLocationOnScreen(iArr);
        motionEvent.offsetLocation(-iArr[0], -iArr[1]);
        return true;
    }

    public abstract k.e b();

    protected abstract boolean c();

    protected boolean d() {
        k.e b10 = b();
        if (b10 != null && b10.isShowing()) {
            b10.dismiss();
            return true;
        }
        return true;
    }

    void e() {
        a();
        View view = this.f1683o;
        if (view.isEnabled() && !view.isLongClickable() && c()) {
            view.getParent().requestDisallowInterceptTouchEvent(true);
            long uptimeMillis = SystemClock.uptimeMillis();
            MotionEvent obtain = MotionEvent.obtain(uptimeMillis, uptimeMillis, 3, 0.0f, 0.0f, 0);
            view.onTouchEvent(obtain);
            obtain.recycle();
            this.f1686r = true;
        }
    }

    @Override // android.view.View.OnTouchListener
    public boolean onTouch(View view, MotionEvent motionEvent) {
        boolean z10;
        boolean z11 = this.f1686r;
        if (z11) {
            if (!f(motionEvent) && d()) {
                z10 = false;
            } else {
                z10 = true;
            }
        } else {
            if (g(motionEvent) && c()) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z10) {
                long uptimeMillis = SystemClock.uptimeMillis();
                MotionEvent obtain = MotionEvent.obtain(uptimeMillis, uptimeMillis, 3, 0.0f, 0.0f, 0);
                this.f1683o.onTouchEvent(obtain);
                obtain.recycle();
            }
        }
        this.f1686r = z10;
        if (z10 || z11) {
            return true;
        }
        return false;
    }

    @Override // android.view.View.OnAttachStateChangeListener
    public void onViewAttachedToWindow(View view) {
    }

    @Override // android.view.View.OnAttachStateChangeListener
    public void onViewDetachedFromWindow(View view) {
        this.f1686r = false;
        this.f1687s = -1;
        Runnable runnable = this.f1684p;
        if (runnable != null) {
            this.f1683o.removeCallbacks(runnable);
        }
    }
}
