package androidx.transition;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.view.View;
import android.view.ViewGroup;
import androidx.transition.Transition;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class n0 extends Transition {

    /* renamed from: c0  reason: collision with root package name */
    private static final String[] f5300c0 = {"android:visibility:visibility", "android:visibility:parent"};

    /* renamed from: b0  reason: collision with root package name */
    private int f5301b0 = 3;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a extends AnimatorListenerAdapter implements Transition.h {

        /* renamed from: a  reason: collision with root package name */
        private final View f5302a;

        /* renamed from: b  reason: collision with root package name */
        private final int f5303b;

        /* renamed from: c  reason: collision with root package name */
        private final ViewGroup f5304c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f5305d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f5306e;

        /* renamed from: f  reason: collision with root package name */
        boolean f5307f = false;

        a(View view, int i10, boolean z10) {
            this.f5302a = view;
            this.f5303b = i10;
            this.f5304c = (ViewGroup) view.getParent();
            this.f5305d = z10;
            b(true);
        }

        private void a() {
            if (!this.f5307f) {
                h0.f(this.f5302a, this.f5303b);
                ViewGroup viewGroup = this.f5304c;
                if (viewGroup != null) {
                    viewGroup.invalidate();
                }
            }
            b(false);
        }

        private void b(boolean z10) {
            ViewGroup viewGroup;
            if (this.f5305d && this.f5306e != z10 && (viewGroup = this.f5304c) != null) {
                this.f5306e = z10;
                g0.b(viewGroup, z10);
            }
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationCancel(Animator animator) {
            this.f5307f = true;
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
            if (!this.f5307f) {
                h0.f(this.f5302a, this.f5303b);
            }
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionResume(Transition transition) {
            b(true);
            if (!this.f5307f) {
                h0.f(this.f5302a, 0);
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
                h0.f(this.f5302a, 0);
                ViewGroup viewGroup = this.f5304c;
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
        private final ViewGroup f5308a;

        /* renamed from: b  reason: collision with root package name */
        private final View f5309b;

        /* renamed from: c  reason: collision with root package name */
        private final View f5310c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f5311d = true;

        b(ViewGroup viewGroup, View view, View view2) {
            this.f5308a = viewGroup;
            this.f5309b = view;
            this.f5310c = view2;
        }

        private void a() {
            this.f5310c.setTag(l.f5286a, null);
            this.f5308a.getOverlay().remove(this.f5309b);
            this.f5311d = false;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            a();
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorPauseListener
        public void onAnimationPause(Animator animator) {
            this.f5308a.getOverlay().remove(this.f5309b);
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorPauseListener
        public void onAnimationResume(Animator animator) {
            if (this.f5309b.getParent() == null) {
                this.f5308a.getOverlay().add(this.f5309b);
            } else {
                n0.this.cancel();
            }
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator, boolean z10) {
            if (z10) {
                this.f5310c.setTag(l.f5286a, this.f5309b);
                this.f5308a.getOverlay().add(this.f5309b);
                this.f5311d = true;
            }
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionCancel(Transition transition) {
            if (this.f5311d) {
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
        boolean f5313a;

        /* renamed from: b  reason: collision with root package name */
        boolean f5314b;

        /* renamed from: c  reason: collision with root package name */
        int f5315c;

        /* renamed from: d  reason: collision with root package name */
        int f5316d;

        /* renamed from: e  reason: collision with root package name */
        ViewGroup f5317e;

        /* renamed from: f  reason: collision with root package name */
        ViewGroup f5318f;

        c() {
        }
    }

    private void t0(c0 c0Var) {
        c0Var.f5227a.put("android:visibility:visibility", Integer.valueOf(c0Var.f5228b.getVisibility()));
        c0Var.f5227a.put("android:visibility:parent", c0Var.f5228b.getParent());
        int[] iArr = new int[2];
        c0Var.f5228b.getLocationOnScreen(iArr);
        c0Var.f5227a.put("android:visibility:screenLocation", iArr);
    }

    private c u0(c0 c0Var, c0 c0Var2) {
        c cVar = new c();
        cVar.f5313a = false;
        cVar.f5314b = false;
        if (c0Var != null && c0Var.f5227a.containsKey("android:visibility:visibility")) {
            cVar.f5315c = ((Integer) c0Var.f5227a.get("android:visibility:visibility")).intValue();
            cVar.f5317e = (ViewGroup) c0Var.f5227a.get("android:visibility:parent");
        } else {
            cVar.f5315c = -1;
            cVar.f5317e = null;
        }
        if (c0Var2 != null && c0Var2.f5227a.containsKey("android:visibility:visibility")) {
            cVar.f5316d = ((Integer) c0Var2.f5227a.get("android:visibility:visibility")).intValue();
            cVar.f5318f = (ViewGroup) c0Var2.f5227a.get("android:visibility:parent");
        } else {
            cVar.f5316d = -1;
            cVar.f5318f = null;
        }
        if (c0Var != null && c0Var2 != null) {
            int i10 = cVar.f5315c;
            int i11 = cVar.f5316d;
            if (i10 != i11 || cVar.f5317e != cVar.f5318f) {
                if (i10 != i11) {
                    if (i10 == 0) {
                        cVar.f5314b = false;
                        cVar.f5313a = true;
                        return cVar;
                    } else if (i11 == 0) {
                        cVar.f5314b = true;
                        cVar.f5313a = true;
                        return cVar;
                    }
                } else if (cVar.f5318f == null) {
                    cVar.f5314b = false;
                    cVar.f5313a = true;
                    return cVar;
                } else if (cVar.f5317e == null) {
                    cVar.f5314b = true;
                    cVar.f5313a = true;
                    return cVar;
                }
            }
        } else if (c0Var == null && cVar.f5316d == 0) {
            cVar.f5314b = true;
            cVar.f5313a = true;
            return cVar;
        } else if (c0Var2 == null && cVar.f5315c == 0) {
            cVar.f5314b = false;
            cVar.f5313a = true;
        }
        return cVar;
    }

    @Override // androidx.transition.Transition
    public String[] N() {
        return f5300c0;
    }

    @Override // androidx.transition.Transition
    public boolean R(c0 c0Var, c0 c0Var2) {
        if (c0Var == null && c0Var2 == null) {
            return false;
        }
        if (c0Var != null && c0Var2 != null && c0Var2.f5227a.containsKey("android:visibility:visibility") != c0Var.f5227a.containsKey("android:visibility:visibility")) {
            return false;
        }
        c u02 = u0(c0Var, c0Var2);
        if (!u02.f5313a || (u02.f5315c != 0 && u02.f5316d != 0)) {
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
        if (u02.f5313a) {
            if (u02.f5317e != null || u02.f5318f != null) {
                if (u02.f5314b) {
                    return w0(viewGroup, c0Var, u02.f5315c, c0Var2, u02.f5316d);
                }
                return y0(viewGroup, c0Var, u02.f5315c, c0Var2, u02.f5316d);
            }
            return null;
        }
        return null;
    }

    public abstract Animator v0(ViewGroup viewGroup, View view, c0 c0Var, c0 c0Var2);

    public Animator w0(ViewGroup viewGroup, c0 c0Var, int i10, c0 c0Var2, int i11) {
        if ((this.f5301b0 & 1) != 1 || c0Var2 == null) {
            return null;
        }
        if (c0Var == null) {
            View view = (View) c0Var2.f5228b.getParent();
            if (u0(A(view, false), O(view, false)).f5313a) {
                return null;
            }
        }
        return v0(viewGroup, c0Var2.f5228b, c0Var, c0Var2);
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
            this.f5301b0 = i10;
            return;
        }
        throw new IllegalArgumentException("Only MODE_IN and MODE_OUT flags are allowed");
    }
}
