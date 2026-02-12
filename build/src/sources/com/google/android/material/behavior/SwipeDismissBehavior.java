package com.google.android.material.behavior;

import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
import androidx.core.view.accessibility.AccessibilityViewCommand;
import androidx.core.view.i0;
import androidx.customview.widget.ViewDragHelper;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class SwipeDismissBehavior<V extends View> extends CoordinatorLayout.c {

    /* renamed from: d  reason: collision with root package name */
    ViewDragHelper f15269d;

    /* renamed from: e  reason: collision with root package name */
    c f15270e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f15271i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f15272o;

    /* renamed from: q  reason: collision with root package name */
    private boolean f15274q;

    /* renamed from: p  reason: collision with root package name */
    private float f15273p = 0.0f;

    /* renamed from: r  reason: collision with root package name */
    int f15275r = 2;

    /* renamed from: s  reason: collision with root package name */
    float f15276s = 0.5f;

    /* renamed from: t  reason: collision with root package name */
    float f15277t = 0.0f;

    /* renamed from: u  reason: collision with root package name */
    float f15278u = 0.5f;

    /* renamed from: v  reason: collision with root package name */
    private final ViewDragHelper.c f15279v = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends ViewDragHelper.c {

        /* renamed from: a  reason: collision with root package name */
        private int f15280a;

        /* renamed from: b  reason: collision with root package name */
        private int f15281b = -1;

        a() {
        }

        private boolean n(View view, float f10) {
            boolean z10;
            int i10 = (f10 > 0.0f ? 1 : (f10 == 0.0f ? 0 : -1));
            if (i10 != 0) {
                if (view.getLayoutDirection() == 1) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                int i11 = SwipeDismissBehavior.this.f15275r;
                if (i11 == 2) {
                    return true;
                }
                if (i11 == 0) {
                    if (z10) {
                        if (f10 >= 0.0f) {
                            return false;
                        }
                        return true;
                    } else if (i10 <= 0) {
                        return false;
                    } else {
                        return true;
                    }
                }
                if (i11 == 1) {
                    if (z10) {
                        if (i10 <= 0) {
                            return false;
                        }
                        return true;
                    } else if (f10 < 0.0f) {
                        return true;
                    }
                }
                return false;
            }
            if (Math.abs(view.getLeft() - this.f15280a) < Math.round(view.getWidth() * SwipeDismissBehavior.this.f15276s)) {
                return false;
            }
            return true;
        }

        @Override // androidx.customview.widget.ViewDragHelper.c
        public int a(View view, int i10, int i11) {
            boolean z10;
            int width;
            int width2;
            int width3;
            if (view.getLayoutDirection() == 1) {
                z10 = true;
            } else {
                z10 = false;
            }
            int i12 = SwipeDismissBehavior.this.f15275r;
            if (i12 == 0) {
                if (z10) {
                    width = this.f15280a - view.getWidth();
                    width2 = this.f15280a;
                } else {
                    width = this.f15280a;
                    width3 = view.getWidth();
                    width2 = width3 + width;
                }
            } else if (i12 == 1) {
                if (z10) {
                    width = this.f15280a;
                    width3 = view.getWidth();
                    width2 = width3 + width;
                } else {
                    width = this.f15280a - view.getWidth();
                    width2 = this.f15280a;
                }
            } else {
                width = this.f15280a - view.getWidth();
                width2 = view.getWidth() + this.f15280a;
            }
            return SwipeDismissBehavior.L(width, i10, width2);
        }

        @Override // androidx.customview.widget.ViewDragHelper.c
        public int b(View view, int i10, int i11) {
            return view.getTop();
        }

        @Override // androidx.customview.widget.ViewDragHelper.c
        public int d(View view) {
            return view.getWidth();
        }

        @Override // androidx.customview.widget.ViewDragHelper.c
        public void i(View view, int i10) {
            this.f15281b = i10;
            this.f15280a = view.getLeft();
            ViewParent parent = view.getParent();
            if (parent != null) {
                SwipeDismissBehavior.this.f15272o = true;
                parent.requestDisallowInterceptTouchEvent(true);
                SwipeDismissBehavior.this.f15272o = false;
            }
        }

        @Override // androidx.customview.widget.ViewDragHelper.c
        public void j(int i10) {
            c cVar = SwipeDismissBehavior.this.f15270e;
            if (cVar != null) {
                cVar.b(i10);
            }
        }

        @Override // androidx.customview.widget.ViewDragHelper.c
        public void k(View view, int i10, int i11, int i12, int i13) {
            float width = view.getWidth() * SwipeDismissBehavior.this.f15277t;
            float width2 = view.getWidth() * SwipeDismissBehavior.this.f15278u;
            float abs = Math.abs(i10 - this.f15280a);
            if (abs <= width) {
                view.setAlpha(1.0f);
            } else if (abs >= width2) {
                view.setAlpha(0.0f);
            } else {
                view.setAlpha(SwipeDismissBehavior.K(0.0f, 1.0f - SwipeDismissBehavior.N(width, width2, abs), 1.0f));
            }
        }

        @Override // androidx.customview.widget.ViewDragHelper.c
        public void l(View view, float f10, float f11) {
            int i10;
            boolean z10;
            c cVar;
            this.f15281b = -1;
            int width = view.getWidth();
            if (n(view, f10)) {
                if (f10 >= 0.0f) {
                    int left = view.getLeft();
                    int i11 = this.f15280a;
                    if (left >= i11) {
                        i10 = i11 + width;
                        z10 = true;
                    }
                }
                i10 = this.f15280a - width;
                z10 = true;
            } else {
                i10 = this.f15280a;
                z10 = false;
            }
            if (SwipeDismissBehavior.this.f15269d.O(i10, view.getTop())) {
                view.postOnAnimation(new d(view, z10));
            } else if (z10 && (cVar = SwipeDismissBehavior.this.f15270e) != null) {
                cVar.a(view);
            }
        }

        @Override // androidx.customview.widget.ViewDragHelper.c
        public boolean m(View view, int i10) {
            int i11 = this.f15281b;
            if ((i11 == -1 || i11 == i10) && SwipeDismissBehavior.this.J(view)) {
                return true;
            }
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b implements AccessibilityViewCommand {
        b() {
        }

        @Override // androidx.core.view.accessibility.AccessibilityViewCommand
        public boolean a(View view, AccessibilityViewCommand.a aVar) {
            int width;
            boolean z10 = false;
            if (!SwipeDismissBehavior.this.J(view)) {
                return false;
            }
            if (view.getLayoutDirection() == 1) {
                z10 = true;
            }
            int i10 = SwipeDismissBehavior.this.f15275r;
            if ((i10 == 0 && z10) || (i10 == 1 && !z10)) {
                width = -view.getWidth();
            } else {
                width = view.getWidth();
            }
            i0.U(view, width);
            view.setAlpha(0.0f);
            c cVar = SwipeDismissBehavior.this.f15270e;
            if (cVar != null) {
                cVar.a(view);
            }
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface c {
        void a(View view);

        void b(int i10);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private class d implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final View f15284d;

        /* renamed from: e  reason: collision with root package name */
        private final boolean f15285e;

        d(View view, boolean z10) {
            this.f15284d = view;
            this.f15285e = z10;
        }

        @Override // java.lang.Runnable
        public void run() {
            c cVar;
            ViewDragHelper viewDragHelper = SwipeDismissBehavior.this.f15269d;
            if (viewDragHelper != null && viewDragHelper.m(true)) {
                this.f15284d.postOnAnimation(this);
            } else if (this.f15285e && (cVar = SwipeDismissBehavior.this.f15270e) != null) {
                cVar.a(this.f15284d);
            }
        }
    }

    static float K(float f10, float f11, float f12) {
        return Math.min(Math.max(f10, f11), f12);
    }

    static int L(int i10, int i11, int i12) {
        return Math.min(Math.max(i10, i11), i12);
    }

    private void M(ViewGroup viewGroup) {
        ViewDragHelper o10;
        if (this.f15269d == null) {
            if (this.f15274q) {
                o10 = ViewDragHelper.n(viewGroup, this.f15273p, this.f15279v);
            } else {
                o10 = ViewDragHelper.o(viewGroup, this.f15279v);
            }
            this.f15269d = o10;
        }
    }

    static float N(float f10, float f11, float f12) {
        return (f12 - f10) / (f11 - f10);
    }

    private void S(View view) {
        i0.e0(view, 1048576);
        if (J(view)) {
            i0.g0(view, AccessibilityNodeInfoCompat.a.f3474y, null, new b());
        }
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public boolean H(CoordinatorLayout coordinatorLayout, View view, MotionEvent motionEvent) {
        if (this.f15269d != null) {
            if (!this.f15272o || motionEvent.getActionMasked() != 3) {
                this.f15269d.F(motionEvent);
                return true;
            }
            return true;
        }
        return false;
    }

    public boolean J(View view) {
        return true;
    }

    public void O(float f10) {
        this.f15278u = K(0.0f, f10, 1.0f);
    }

    public void P(c cVar) {
        this.f15270e = cVar;
    }

    public void Q(float f10) {
        this.f15277t = K(0.0f, f10, 1.0f);
    }

    public void R(int i10) {
        this.f15275r = i10;
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public boolean o(CoordinatorLayout coordinatorLayout, View view, MotionEvent motionEvent) {
        boolean z10 = this.f15271i;
        int actionMasked = motionEvent.getActionMasked();
        if (actionMasked != 0) {
            if (actionMasked == 1 || actionMasked == 3) {
                this.f15271i = false;
            }
        } else {
            z10 = coordinatorLayout.A(view, (int) motionEvent.getX(), (int) motionEvent.getY());
            this.f15271i = z10;
        }
        if (z10) {
            M(coordinatorLayout);
            if (!this.f15272o && this.f15269d.P(motionEvent)) {
                return true;
            }
        }
        return false;
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public boolean p(CoordinatorLayout coordinatorLayout, View view, int i10) {
        boolean p10 = super.p(coordinatorLayout, view, i10);
        if (view.getImportantForAccessibility() == 0) {
            view.setImportantForAccessibility(1);
            S(view);
        }
        return p10;
    }
}
