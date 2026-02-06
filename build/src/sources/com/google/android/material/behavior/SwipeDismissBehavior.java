package com.google.android.material.behavior;

import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
import androidx.core.view.accessibility.AccessibilityViewCommand;
import androidx.core.view.h0;
import androidx.customview.widget.ViewDragHelper;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class SwipeDismissBehavior<V extends View> extends CoordinatorLayout.c {

    /* renamed from: d  reason: collision with root package name */
    ViewDragHelper f14531d;

    /* renamed from: e  reason: collision with root package name */
    c f14532e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f14533i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f14534o;

    /* renamed from: q  reason: collision with root package name */
    private boolean f14536q;

    /* renamed from: p  reason: collision with root package name */
    private float f14535p = 0.0f;

    /* renamed from: r  reason: collision with root package name */
    int f14537r = 2;

    /* renamed from: s  reason: collision with root package name */
    float f14538s = 0.5f;

    /* renamed from: t  reason: collision with root package name */
    float f14539t = 0.0f;

    /* renamed from: u  reason: collision with root package name */
    float f14540u = 0.5f;

    /* renamed from: v  reason: collision with root package name */
    private final ViewDragHelper.c f14541v = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends ViewDragHelper.c {

        /* renamed from: a  reason: collision with root package name */
        private int f14542a;

        /* renamed from: b  reason: collision with root package name */
        private int f14543b = -1;

        a() {
        }

        private boolean n(View view, float f10) {
            boolean z10;
            int i10 = (f10 > 0.0f ? 1 : (f10 == 0.0f ? 0 : -1));
            if (i10 != 0) {
                if (h0.z(view) == 1) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                int i11 = SwipeDismissBehavior.this.f14537r;
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
            if (Math.abs(view.getLeft() - this.f14542a) < Math.round(view.getWidth() * SwipeDismissBehavior.this.f14538s)) {
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
            if (h0.z(view) == 1) {
                z10 = true;
            } else {
                z10 = false;
            }
            int i12 = SwipeDismissBehavior.this.f14537r;
            if (i12 == 0) {
                if (z10) {
                    width = this.f14542a - view.getWidth();
                    width2 = this.f14542a;
                } else {
                    width = this.f14542a;
                    width3 = view.getWidth();
                    width2 = width3 + width;
                }
            } else if (i12 == 1) {
                if (z10) {
                    width = this.f14542a;
                    width3 = view.getWidth();
                    width2 = width3 + width;
                } else {
                    width = this.f14542a - view.getWidth();
                    width2 = this.f14542a;
                }
            } else {
                width = this.f14542a - view.getWidth();
                width2 = view.getWidth() + this.f14542a;
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
            this.f14543b = i10;
            this.f14542a = view.getLeft();
            ViewParent parent = view.getParent();
            if (parent != null) {
                SwipeDismissBehavior.this.f14534o = true;
                parent.requestDisallowInterceptTouchEvent(true);
                SwipeDismissBehavior.this.f14534o = false;
            }
        }

        @Override // androidx.customview.widget.ViewDragHelper.c
        public void j(int i10) {
            c cVar = SwipeDismissBehavior.this.f14532e;
            if (cVar != null) {
                cVar.b(i10);
            }
        }

        @Override // androidx.customview.widget.ViewDragHelper.c
        public void k(View view, int i10, int i11, int i12, int i13) {
            float width = view.getWidth() * SwipeDismissBehavior.this.f14539t;
            float width2 = view.getWidth() * SwipeDismissBehavior.this.f14540u;
            float abs = Math.abs(i10 - this.f14542a);
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
            this.f14543b = -1;
            int width = view.getWidth();
            if (n(view, f10)) {
                if (f10 >= 0.0f) {
                    int left = view.getLeft();
                    int i11 = this.f14542a;
                    if (left >= i11) {
                        i10 = i11 + width;
                        z10 = true;
                    }
                }
                i10 = this.f14542a - width;
                z10 = true;
            } else {
                i10 = this.f14542a;
                z10 = false;
            }
            if (SwipeDismissBehavior.this.f14531d.O(i10, view.getTop())) {
                h0.f0(view, new d(view, z10));
            } else if (z10 && (cVar = SwipeDismissBehavior.this.f14532e) != null) {
                cVar.a(view);
            }
        }

        @Override // androidx.customview.widget.ViewDragHelper.c
        public boolean m(View view, int i10) {
            int i11 = this.f14543b;
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
            if (h0.z(view) == 1) {
                z10 = true;
            }
            int i10 = SwipeDismissBehavior.this.f14537r;
            if ((i10 == 0 && z10) || (i10 == 1 && !z10)) {
                width = -view.getWidth();
            } else {
                width = view.getWidth();
            }
            h0.X(view, width);
            view.setAlpha(0.0f);
            c cVar = SwipeDismissBehavior.this.f14532e;
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
        private final View f14546d;

        /* renamed from: e  reason: collision with root package name */
        private final boolean f14547e;

        d(View view, boolean z10) {
            this.f14546d = view;
            this.f14547e = z10;
        }

        @Override // java.lang.Runnable
        public void run() {
            c cVar;
            ViewDragHelper viewDragHelper = SwipeDismissBehavior.this.f14531d;
            if (viewDragHelper != null && viewDragHelper.m(true)) {
                h0.f0(this.f14546d, this);
            } else if (this.f14547e && (cVar = SwipeDismissBehavior.this.f14532e) != null) {
                cVar.a(this.f14546d);
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
        if (this.f14531d == null) {
            if (this.f14536q) {
                o10 = ViewDragHelper.n(viewGroup, this.f14535p, this.f14541v);
            } else {
                o10 = ViewDragHelper.o(viewGroup, this.f14541v);
            }
            this.f14531d = o10;
        }
    }

    static float N(float f10, float f11, float f12) {
        return (f12 - f10) / (f11 - f10);
    }

    private void S(View view) {
        h0.h0(view, 1048576);
        if (J(view)) {
            h0.j0(view, AccessibilityNodeInfoCompat.a.f3773y, null, new b());
        }
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public boolean H(CoordinatorLayout coordinatorLayout, View view, MotionEvent motionEvent) {
        if (this.f14531d != null) {
            if (!this.f14534o || motionEvent.getActionMasked() != 3) {
                this.f14531d.F(motionEvent);
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
        this.f14540u = K(0.0f, f10, 1.0f);
    }

    public void P(c cVar) {
        this.f14532e = cVar;
    }

    public void Q(float f10) {
        this.f14539t = K(0.0f, f10, 1.0f);
    }

    public void R(int i10) {
        this.f14537r = i10;
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public boolean o(CoordinatorLayout coordinatorLayout, View view, MotionEvent motionEvent) {
        boolean z10 = this.f14533i;
        int actionMasked = motionEvent.getActionMasked();
        if (actionMasked != 0) {
            if (actionMasked == 1 || actionMasked == 3) {
                this.f14533i = false;
            }
        } else {
            z10 = coordinatorLayout.w(view, (int) motionEvent.getX(), (int) motionEvent.getY());
            this.f14533i = z10;
        }
        if (z10) {
            M(coordinatorLayout);
            if (!this.f14534o && this.f14531d.P(motionEvent)) {
                return true;
            }
        }
        return false;
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public boolean p(CoordinatorLayout coordinatorLayout, View view, int i10) {
        boolean p10 = super.p(coordinatorLayout, view, i10);
        if (h0.x(view) == 0) {
            h0.x0(view, 1);
            S(view);
        }
        return p10;
    }
}
