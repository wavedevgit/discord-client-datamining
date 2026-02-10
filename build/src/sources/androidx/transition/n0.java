package androidx.transition;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.view.View;
import android.view.ViewGroup;
import androidx.transition.Transition;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class n0 extends Transition {

    /* renamed from: c0  reason: collision with root package name */
    private static final String[] f5448c0 = {"android:visibility:visibility", "android:visibility:parent"};

    /* renamed from: b0  reason: collision with root package name */
    private int f5449b0 = 3;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a extends AnimatorListenerAdapter implements Transition.i {

        /* renamed from: a  reason: collision with root package name */
        private final View f5450a;

        /* renamed from: b  reason: collision with root package name */
        private final int f5451b;

        /* renamed from: c  reason: collision with root package name */
        private final ViewGroup f5452c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f5453d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f5454e;

        /* renamed from: f  reason: collision with root package name */
        boolean f5455f = false;

        a(View view, int i10, boolean z10) {
            this.f5450a = view;
            this.f5451b = i10;
            this.f5452c = (ViewGroup) view.getParent();
            this.f5453d = z10;
            b(true);
        }

        private void a() {
            if (!this.f5455f) {
                h0.f(this.f5450a, this.f5451b);
                ViewGroup viewGroup = this.f5452c;
                if (viewGroup != null) {
                    viewGroup.invalidate();
                }
            }
            b(false);
        }

        private void b(boolean z10) {
            ViewGroup viewGroup;
            if (this.f5453d && this.f5454e != z10 && (viewGroup = this.f5452c) != null) {
                this.f5454e = z10;
                g0.b(viewGroup, z10);
            }
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationCancel(Animator animator) {
            this.f5455f = true;
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

        @Override // androidx.transition.Transition.i
        public void onTransitionCancel(Transition transition) {
        }

        @Override // androidx.transition.Transition.i
        public void onTransitionEnd(Transition transition) {
            transition.h0(this);
        }

        @Override // androidx.transition.Transition.i
        public void onTransitionPause(Transition transition) {
            b(false);
            if (!this.f5455f) {
                h0.f(this.f5450a, this.f5451b);
            }
        }

        @Override // androidx.transition.Transition.i
        public void onTransitionResume(Transition transition) {
            b(true);
            if (!this.f5455f) {
                h0.f(this.f5450a, 0);
            }
        }

        @Override // androidx.transition.Transition.i
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
                h0.f(this.f5450a, 0);
                ViewGroup viewGroup = this.f5452c;
                if (viewGroup != null) {
                    viewGroup.invalidate();
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b extends AnimatorListenerAdapter implements Transition.i {

        /* renamed from: a  reason: collision with root package name */
        private final ViewGroup f5456a;

        /* renamed from: b  reason: collision with root package name */
        private final View f5457b;

        /* renamed from: c  reason: collision with root package name */
        private final View f5458c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f5459d = true;

        b(ViewGroup viewGroup, View view, View view2) {
            this.f5456a = viewGroup;
            this.f5457b = view;
            this.f5458c = view2;
        }

        private void a() {
            this.f5458c.setTag(l.f5434a, null);
            this.f5456a.getOverlay().remove(this.f5457b);
            this.f5459d = false;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            a();
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorPauseListener
        public void onAnimationPause(Animator animator) {
            this.f5456a.getOverlay().remove(this.f5457b);
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorPauseListener
        public void onAnimationResume(Animator animator) {
            if (this.f5457b.getParent() == null) {
                this.f5456a.getOverlay().add(this.f5457b);
            } else {
                n0.this.cancel();
            }
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator, boolean z10) {
            if (z10) {
                this.f5458c.setTag(l.f5434a, this.f5457b);
                this.f5456a.getOverlay().add(this.f5457b);
                this.f5459d = true;
            }
        }

        @Override // androidx.transition.Transition.i
        public void onTransitionCancel(Transition transition) {
            if (this.f5459d) {
                a();
            }
        }

        @Override // androidx.transition.Transition.i
        public void onTransitionEnd(Transition transition) {
            transition.h0(this);
        }

        @Override // androidx.transition.Transition.i
        public void onTransitionPause(Transition transition) {
        }

        @Override // androidx.transition.Transition.i
        public void onTransitionResume(Transition transition) {
        }

        @Override // androidx.transition.Transition.i
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
        boolean f5461a;

        /* renamed from: b  reason: collision with root package name */
        boolean f5462b;

        /* renamed from: c  reason: collision with root package name */
        int f5463c;

        /* renamed from: d  reason: collision with root package name */
        int f5464d;

        /* renamed from: e  reason: collision with root package name */
        ViewGroup f5465e;

        /* renamed from: f  reason: collision with root package name */
        ViewGroup f5466f;

        c() {
        }
    }

    private void w0(c0 c0Var) {
        c0Var.f5375a.put("android:visibility:visibility", Integer.valueOf(c0Var.f5376b.getVisibility()));
        c0Var.f5375a.put("android:visibility:parent", c0Var.f5376b.getParent());
        int[] iArr = new int[2];
        c0Var.f5376b.getLocationOnScreen(iArr);
        c0Var.f5375a.put("android:visibility:screenLocation", iArr);
    }

    private c x0(c0 c0Var, c0 c0Var2) {
        c cVar = new c();
        cVar.f5461a = false;
        cVar.f5462b = false;
        if (c0Var != null && c0Var.f5375a.containsKey("android:visibility:visibility")) {
            cVar.f5463c = ((Integer) c0Var.f5375a.get("android:visibility:visibility")).intValue();
            cVar.f5465e = (ViewGroup) c0Var.f5375a.get("android:visibility:parent");
        } else {
            cVar.f5463c = -1;
            cVar.f5465e = null;
        }
        if (c0Var2 != null && c0Var2.f5375a.containsKey("android:visibility:visibility")) {
            cVar.f5464d = ((Integer) c0Var2.f5375a.get("android:visibility:visibility")).intValue();
            cVar.f5466f = (ViewGroup) c0Var2.f5375a.get("android:visibility:parent");
        } else {
            cVar.f5464d = -1;
            cVar.f5466f = null;
        }
        if (c0Var != null && c0Var2 != null) {
            int i10 = cVar.f5463c;
            int i11 = cVar.f5464d;
            if (i10 != i11 || cVar.f5465e != cVar.f5466f) {
                if (i10 != i11) {
                    if (i10 == 0) {
                        cVar.f5462b = false;
                        cVar.f5461a = true;
                        return cVar;
                    } else if (i11 == 0) {
                        cVar.f5462b = true;
                        cVar.f5461a = true;
                        return cVar;
                    }
                } else if (cVar.f5466f == null) {
                    cVar.f5462b = false;
                    cVar.f5461a = true;
                    return cVar;
                } else if (cVar.f5465e == null) {
                    cVar.f5462b = true;
                    cVar.f5461a = true;
                    return cVar;
                }
            }
        } else if (c0Var == null && cVar.f5464d == 0) {
            cVar.f5462b = true;
            cVar.f5461a = true;
            return cVar;
        } else if (c0Var2 == null && cVar.f5463c == 0) {
            cVar.f5462b = false;
            cVar.f5461a = true;
        }
        return cVar;
    }

    public abstract Animator A0(ViewGroup viewGroup, View view, c0 c0Var, c0 c0Var2);

    /* JADX WARN: Code restructure failed: missing block: B:43:0x0083, code lost:
        if (r9.H != false) goto L54;
     */
    /* JADX WARN: Removed duplicated region for block: B:27:0x0040  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public android.animation.Animator B0(android.view.ViewGroup r10, androidx.transition.c0 r11, int r12, androidx.transition.c0 r13, int r14) {
        /*
            Method dump skipped, instructions count: 264
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.transition.n0.B0(android.view.ViewGroup, androidx.transition.c0, int, androidx.transition.c0, int):android.animation.Animator");
    }

    public void C0(int i10) {
        if ((i10 & (-4)) == 0) {
            this.f5449b0 = i10;
            return;
        }
        throw new IllegalArgumentException("Only MODE_IN and MODE_OUT flags are allowed");
    }

    @Override // androidx.transition.Transition
    public String[] P() {
        return f5448c0;
    }

    @Override // androidx.transition.Transition
    public boolean U(c0 c0Var, c0 c0Var2) {
        if (c0Var == null && c0Var2 == null) {
            return false;
        }
        if (c0Var != null && c0Var2 != null && c0Var2.f5375a.containsKey("android:visibility:visibility") != c0Var.f5375a.containsKey("android:visibility:visibility")) {
            return false;
        }
        c x02 = x0(c0Var, c0Var2);
        if (!x02.f5461a || (x02.f5463c != 0 && x02.f5464d != 0)) {
            return false;
        }
        return true;
    }

    @Override // androidx.transition.Transition
    public void h(c0 c0Var) {
        w0(c0Var);
    }

    @Override // androidx.transition.Transition
    public void l(c0 c0Var) {
        w0(c0Var);
    }

    @Override // androidx.transition.Transition
    public Animator q(ViewGroup viewGroup, c0 c0Var, c0 c0Var2) {
        c x02 = x0(c0Var, c0Var2);
        if (x02.f5461a) {
            if (x02.f5465e != null || x02.f5466f != null) {
                if (x02.f5462b) {
                    return z0(viewGroup, c0Var, x02.f5463c, c0Var2, x02.f5464d);
                }
                return B0(viewGroup, c0Var, x02.f5463c, c0Var2, x02.f5464d);
            }
            return null;
        }
        return null;
    }

    public abstract Animator y0(ViewGroup viewGroup, View view, c0 c0Var, c0 c0Var2);

    public Animator z0(ViewGroup viewGroup, c0 c0Var, int i10, c0 c0Var2, int i11) {
        if ((this.f5449b0 & 1) != 1 || c0Var2 == null) {
            return null;
        }
        if (c0Var == null) {
            View view = (View) c0Var2.f5376b.getParent();
            if (x0(D(view, false), R(view, false)).f5461a) {
                return null;
            }
        }
        return y0(viewGroup, c0Var2.f5376b, c0Var, c0Var2);
    }
}
