package androidx.transition;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.view.View;
import android.view.ViewGroup;
import androidx.transition.Transition;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class n0 extends Transition {

    /* renamed from: c0  reason: collision with root package name */
    private static final String[] f5287c0 = {"android:visibility:visibility", "android:visibility:parent"};

    /* renamed from: b0  reason: collision with root package name */
    private int f5288b0 = 3;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a extends AnimatorListenerAdapter implements Transition.h {

        /* renamed from: a  reason: collision with root package name */
        private final View f5289a;

        /* renamed from: b  reason: collision with root package name */
        private final int f5290b;

        /* renamed from: c  reason: collision with root package name */
        private final ViewGroup f5291c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f5292d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f5293e;

        /* renamed from: f  reason: collision with root package name */
        boolean f5294f = false;

        a(View view, int i10, boolean z10) {
            this.f5289a = view;
            this.f5290b = i10;
            this.f5291c = (ViewGroup) view.getParent();
            this.f5292d = z10;
            b(true);
        }

        private void a() {
            if (!this.f5294f) {
                h0.f(this.f5289a, this.f5290b);
                ViewGroup viewGroup = this.f5291c;
                if (viewGroup != null) {
                    viewGroup.invalidate();
                }
            }
            b(false);
        }

        private void b(boolean z10) {
            ViewGroup viewGroup;
            if (this.f5292d && this.f5293e != z10 && (viewGroup = this.f5291c) != null) {
                this.f5293e = z10;
                g0.b(viewGroup, z10);
            }
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationCancel(Animator animator) {
            this.f5294f = true;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            a();
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationRepeat(Animator animator) {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionCancel(Transition transition) {
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionEnd(Transition transition) {
            transition.e0(this);
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionPause(Transition transition) {
            b(false);
            if (!this.f5294f) {
                h0.f(this.f5289a, this.f5290b);
            }
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionResume(Transition transition) {
            b(true);
            if (!this.f5294f) {
                h0.f(this.f5289a, 0);
            }
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionStart(Transition transition) {
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator, boolean z10) {
            if (z10) {
                return;
            }
            a();
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator, boolean z10) {
            if (z10) {
                h0.f(this.f5289a, 0);
                ViewGroup viewGroup = this.f5291c;
                if (viewGroup != null) {
                    viewGroup.invalidate();
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b extends AnimatorListenerAdapter implements Transition.h {

        /* renamed from: a  reason: collision with root package name */
        private final ViewGroup f5295a;

        /* renamed from: b  reason: collision with root package name */
        private final View f5296b;

        /* renamed from: c  reason: collision with root package name */
        private final View f5297c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f5298d = true;

        b(ViewGroup viewGroup, View view, View view2) {
            this.f5295a = viewGroup;
            this.f5296b = view;
            this.f5297c = view2;
        }

        private void a() {
            this.f5297c.setTag(l.f5273a, null);
            this.f5295a.getOverlay().remove(this.f5296b);
            this.f5298d = false;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            a();
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorPauseListener
        public void onAnimationPause(Animator animator) {
            this.f5295a.getOverlay().remove(this.f5296b);
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorPauseListener
        public void onAnimationResume(Animator animator) {
            if (this.f5296b.getParent() == null) {
                this.f5295a.getOverlay().add(this.f5296b);
            } else {
                n0.this.cancel();
            }
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator, boolean z10) {
            if (z10) {
                this.f5297c.setTag(l.f5273a, this.f5296b);
                this.f5295a.getOverlay().add(this.f5296b);
                this.f5298d = true;
            }
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionCancel(Transition transition) {
            if (this.f5298d) {
                a();
            }
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionEnd(Transition transition) {
            transition.e0(this);
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionPause(Transition transition) {
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionResume(Transition transition) {
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionStart(Transition transition) {
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator, boolean z10) {
            if (z10) {
                return;
            }
            a();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        boolean f5300a;

        /* renamed from: b  reason: collision with root package name */
        boolean f5301b;

        /* renamed from: c  reason: collision with root package name */
        int f5302c;

        /* renamed from: d  reason: collision with root package name */
        int f5303d;

        /* renamed from: e  reason: collision with root package name */
        ViewGroup f5304e;

        /* renamed from: f  reason: collision with root package name */
        ViewGroup f5305f;

        c() {
        }
    }

    private void t0(c0 c0Var) {
        c0Var.f5214a.put("android:visibility:visibility", Integer.valueOf(c0Var.f5215b.getVisibility()));
        c0Var.f5214a.put("android:visibility:parent", c0Var.f5215b.getParent());
        int[] iArr = new int[2];
        c0Var.f5215b.getLocationOnScreen(iArr);
        c0Var.f5214a.put("android:visibility:screenLocation", iArr);
    }

    private c u0(c0 c0Var, c0 c0Var2) {
        c cVar = new c();
        cVar.f5300a = false;
        cVar.f5301b = false;
        if (c0Var != null && c0Var.f5214a.containsKey("android:visibility:visibility")) {
            cVar.f5302c = ((Integer) c0Var.f5214a.get("android:visibility:visibility")).intValue();
            cVar.f5304e = (ViewGroup) c0Var.f5214a.get("android:visibility:parent");
        } else {
            cVar.f5302c = -1;
            cVar.f5304e = null;
        }
        if (c0Var2 != null && c0Var2.f5214a.containsKey("android:visibility:visibility")) {
            cVar.f5303d = ((Integer) c0Var2.f5214a.get("android:visibility:visibility")).intValue();
            cVar.f5305f = (ViewGroup) c0Var2.f5214a.get("android:visibility:parent");
        } else {
            cVar.f5303d = -1;
            cVar.f5305f = null;
        }
        if (c0Var != null && c0Var2 != null) {
            int i10 = cVar.f5302c;
            int i11 = cVar.f5303d;
            if (i10 != i11 || cVar.f5304e != cVar.f5305f) {
                if (i10 != i11) {
                    if (i10 == 0) {
                        cVar.f5301b = false;
                        cVar.f5300a = true;
                        return cVar;
                    } else if (i11 == 0) {
                        cVar.f5301b = true;
                        cVar.f5300a = true;
                        return cVar;
                    }
                } else if (cVar.f5305f == null) {
                    cVar.f5301b = false;
                    cVar.f5300a = true;
                    return cVar;
                } else if (cVar.f5304e == null) {
                    cVar.f5301b = true;
                    cVar.f5300a = true;
                    return cVar;
                }
            }
        } else if (c0Var == null && cVar.f5303d == 0) {
            cVar.f5301b = true;
            cVar.f5300a = true;
            return cVar;
        } else if (c0Var2 == null && cVar.f5302c == 0) {
            cVar.f5301b = false;
            cVar.f5300a = true;
        }
        return cVar;
    }

    @Override // androidx.transition.Transition
    public String[] N() {
        return f5287c0;
    }

    @Override // androidx.transition.Transition
    public boolean R(c0 c0Var, c0 c0Var2) {
        if (c0Var == null && c0Var2 == null) {
            return false;
        }
        if (c0Var != null && c0Var2 != null && c0Var2.f5214a.containsKey("android:visibility:visibility") != c0Var.f5214a.containsKey("android:visibility:visibility")) {
            return false;
        }
        c u02 = u0(c0Var, c0Var2);
        if (!u02.f5300a || (u02.f5302c != 0 && u02.f5303d != 0)) {
            return false;
        }
        return true;
    }

    @Override // androidx.transition.Transition
    public void i(c0 c0Var) {
        t0(c0Var);
    }

    @Override // androidx.transition.Transition
    public void l(c0 c0Var) {
        t0(c0Var);
    }

    @Override // androidx.transition.Transition
    public Animator q(ViewGroup viewGroup, c0 c0Var, c0 c0Var2) {
        c u02 = u0(c0Var, c0Var2);
        if (u02.f5300a) {
            if (u02.f5304e != null || u02.f5305f != null) {
                if (u02.f5301b) {
                    return w0(viewGroup, c0Var, u02.f5302c, c0Var2, u02.f5303d);
                }
                return y0(viewGroup, c0Var, u02.f5302c, c0Var2, u02.f5303d);
            }
            return null;
        }
        return null;
    }

    public abstract Animator v0(ViewGroup viewGroup, View view, c0 c0Var, c0 c0Var2);

    public Animator w0(ViewGroup viewGroup, c0 c0Var, int i10, c0 c0Var2, int i11) {
        if ((this.f5288b0 & 1) != 1 || c0Var2 == null) {
            return null;
        }
        if (c0Var == null) {
            View view = (View) c0Var2.f5215b.getParent();
            if (u0(A(view, false), O(view, false)).f5300a) {
                return null;
            }
        }
        return v0(viewGroup, c0Var2.f5215b, c0Var, c0Var2);
    }

    public abstract Animator x0(ViewGroup viewGroup, View view, c0 c0Var, c0 c0Var2);

    /* JADX WARN: Code restructure failed: missing block: B:43:0x0083, code lost:
        if (r9.H != false) goto L54;
     */
    /* JADX WARN: Removed duplicated region for block: B:27:0x0040  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public android.animation.Animator y0(android.view.ViewGroup r10, androidx.transition.c0 r11, int r12, androidx.transition.c0 r13, int r14) {
        /*
            Method dump skipped, instructions count: 264
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.transition.n0.y0(android.view.ViewGroup, androidx.transition.c0, int, androidx.transition.c0, int):android.animation.Animator");
    }

    public void z0(int i10) {
        if ((i10 & (-4)) == 0) {
            this.f5288b0 = i10;
            return;
        }
        throw new IllegalArgumentException("Only MODE_IN and MODE_OUT flags are allowed");
    }
}
