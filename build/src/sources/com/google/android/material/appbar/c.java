package com.google.android.material.appbar;

import android.content.Context;
import android.util.AttributeSet;
import android.view.MotionEvent;
import android.view.VelocityTracker;
import android.view.View;
import android.view.ViewConfiguration;
import android.widget.OverScroller;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.core.view.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class c extends e {

    /* renamed from: o  reason: collision with root package name */
    private Runnable f14119o;

    /* renamed from: p  reason: collision with root package name */
    OverScroller f14120p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f14121q;

    /* renamed from: r  reason: collision with root package name */
    private int f14122r;

    /* renamed from: s  reason: collision with root package name */
    private int f14123s;

    /* renamed from: t  reason: collision with root package name */
    private int f14124t;

    /* renamed from: u  reason: collision with root package name */
    private VelocityTracker f14125u;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final CoordinatorLayout f14126d;

        /* renamed from: e  reason: collision with root package name */
        private final View f14127e;

        a(CoordinatorLayout coordinatorLayout, View view) {
            this.f14126d = coordinatorLayout;
            this.f14127e = view;
        }

        @Override // java.lang.Runnable
        public void run() {
            OverScroller overScroller;
            if (this.f14127e != null && (overScroller = c.this.f14120p) != null) {
                if (overScroller.computeScrollOffset()) {
                    c cVar = c.this;
                    cVar.T(this.f14126d, this.f14127e, cVar.f14120p.getCurrY());
                    h0.f0(this.f14127e, this);
                    return;
                }
                c.this.R(this.f14126d, this.f14127e);
            }
        }
    }

    public c() {
        this.f14122r = -1;
        this.f14124t = -1;
    }

    private void M() {
        if (this.f14125u == null) {
            this.f14125u = VelocityTracker.obtain();
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:27:0x007a  */
    /* JADX WARN: Removed duplicated region for block: B:30:0x0084  */
    /* JADX WARN: Removed duplicated region for block: B:33:0x008b A[ADDED_TO_REGION] */
    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public boolean H(androidx.coordinatorlayout.widget.CoordinatorLayout r10, android.view.View r11, android.view.MotionEvent r12) {
        /*
            r9 = this;
            int r1 = r12.getActionMasked()
            r6 = -1
            r7 = 0
            r8 = 1
            if (r1 == r8) goto L4d
            r3 = 2
            if (r1 == r3) goto L2d
            r2 = 3
            if (r1 == r2) goto L71
            r2 = 6
            if (r1 == r2) goto L13
            goto L4b
        L13:
            int r1 = r12.getActionIndex()
            if (r1 != 0) goto L1b
            r1 = r8
            goto L1c
        L1b:
            r1 = r7
        L1c:
            int r2 = r12.getPointerId(r1)
            r9.f14122r = r2
            float r1 = r12.getY(r1)
            r2 = 1056964608(0x3f000000, float:0.5)
            float r1 = r1 + r2
            int r1 = (int) r1
            r9.f14123s = r1
            goto L4b
        L2d:
            int r1 = r9.f14122r
            int r1 = r12.findPointerIndex(r1)
            if (r1 != r6) goto L36
            return r7
        L36:
            float r1 = r12.getY(r1)
            int r1 = (int) r1
            int r3 = r9.f14123s
            int r3 = r3 - r1
            r9.f14123s = r1
            int r4 = r9.O(r11)
            r5 = 0
            r0 = r9
            r1 = r10
            r2 = r11
            r0.S(r1, r2, r3, r4, r5)
        L4b:
            r1 = r7
            goto L80
        L4d:
            android.view.VelocityTracker r1 = r9.f14125u
            if (r1 == 0) goto L71
            r1.addMovement(r12)
            android.view.VelocityTracker r1 = r9.f14125u
            r3 = 1000(0x3e8, float:1.401E-42)
            r1.computeCurrentVelocity(r3)
            android.view.VelocityTracker r1 = r9.f14125u
            int r3 = r9.f14122r
            float r5 = r1.getYVelocity(r3)
            int r1 = r9.P(r11)
            int r3 = -r1
            r4 = 0
            r0 = r9
            r1 = r10
            r2 = r11
            r0.N(r1, r2, r3, r4, r5)
            r1 = r8
            goto L72
        L71:
            r1 = r7
        L72:
            r9.f14121q = r7
            r9.f14122r = r6
            android.view.VelocityTracker r2 = r9.f14125u
            if (r2 == 0) goto L80
            r2.recycle()
            r2 = 0
            r9.f14125u = r2
        L80:
            android.view.VelocityTracker r2 = r9.f14125u
            if (r2 == 0) goto L87
            r2.addMovement(r12)
        L87:
            boolean r2 = r9.f14121q
            if (r2 != 0) goto L8f
            if (r1 == 0) goto L8e
            goto L8f
        L8e:
            return r7
        L8f:
            return r8
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.material.appbar.c.H(androidx.coordinatorlayout.widget.CoordinatorLayout, android.view.View, android.view.MotionEvent):boolean");
    }

    abstract boolean L(View view);

    final boolean N(CoordinatorLayout coordinatorLayout, View view, int i10, int i11, float f10) {
        Runnable runnable = this.f14119o;
        if (runnable != null) {
            view.removeCallbacks(runnable);
            this.f14119o = null;
        }
        if (this.f14120p == null) {
            this.f14120p = new OverScroller(view.getContext());
        }
        this.f14120p.fling(0, I(), 0, Math.round(f10), 0, 0, i10, i11);
        if (this.f14120p.computeScrollOffset()) {
            a aVar = new a(coordinatorLayout, view);
            this.f14119o = aVar;
            h0.f0(view, aVar);
            return true;
        }
        R(coordinatorLayout, view);
        return false;
    }

    abstract int O(View view);

    abstract int P(View view);

    abstract int Q();

    abstract void R(CoordinatorLayout coordinatorLayout, View view);

    /* JADX INFO: Access modifiers changed from: package-private */
    public final int S(CoordinatorLayout coordinatorLayout, View view, int i10, int i11, int i12) {
        return U(coordinatorLayout, view, Q() - i10, i11, i12);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int T(CoordinatorLayout coordinatorLayout, View view, int i10) {
        return U(coordinatorLayout, view, i10, Integer.MIN_VALUE, Integer.MAX_VALUE);
    }

    abstract int U(CoordinatorLayout coordinatorLayout, View view, int i10, int i11, int i12);

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public boolean o(CoordinatorLayout coordinatorLayout, View view, MotionEvent motionEvent) {
        boolean z10;
        int findPointerIndex;
        if (this.f14124t < 0) {
            this.f14124t = ViewConfiguration.get(coordinatorLayout.getContext()).getScaledTouchSlop();
        }
        if (motionEvent.getActionMasked() == 2 && this.f14121q) {
            int i10 = this.f14122r;
            if (i10 == -1 || (findPointerIndex = motionEvent.findPointerIndex(i10)) == -1) {
                return false;
            }
            int y10 = (int) motionEvent.getY(findPointerIndex);
            if (Math.abs(y10 - this.f14123s) > this.f14124t) {
                this.f14123s = y10;
                return true;
            }
        }
        if (motionEvent.getActionMasked() == 0) {
            this.f14122r = -1;
            int x10 = (int) motionEvent.getX();
            int y11 = (int) motionEvent.getY();
            if (L(view) && coordinatorLayout.w(view, x10, y11)) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f14121q = z10;
            if (z10) {
                this.f14123s = y11;
                this.f14122r = motionEvent.getPointerId(0);
                M();
                OverScroller overScroller = this.f14120p;
                if (overScroller != null && !overScroller.isFinished()) {
                    this.f14120p.abortAnimation();
                    return true;
                }
            }
        }
        VelocityTracker velocityTracker = this.f14125u;
        if (velocityTracker != null) {
            velocityTracker.addMovement(motionEvent);
        }
        return false;
    }

    public c(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f14122r = -1;
        this.f14124t = -1;
    }
}
