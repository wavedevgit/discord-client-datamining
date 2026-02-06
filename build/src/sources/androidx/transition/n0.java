package androidx.transition;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.view.View;
import android.view.ViewGroup;
import androidx.transition.Transition;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class n0 extends Transition {

    /* renamed from: c0  reason: collision with root package name */
    private static final String[] f5741c0 = {"android:visibility:visibility", "android:visibility:parent"};

    /* renamed from: b0  reason: collision with root package name */
    private int f5742b0 = 3;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a extends AnimatorListenerAdapter implements Transition.h {

        /* renamed from: a  reason: collision with root package name */
        private final View f5743a;

        /* renamed from: b  reason: collision with root package name */
        private final int f5744b;

        /* renamed from: c  reason: collision with root package name */
        private final ViewGroup f5745c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f5746d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f5747e;

        /* renamed from: f  reason: collision with root package name */
        boolean f5748f = false;

        a(View view, int i10, boolean z10) {
            this.f5743a = view;
            this.f5744b = i10;
            this.f5745c = (ViewGroup) view.getParent();
            this.f5746d = z10;
            b(true);
        }

        private void a() {
            if (!this.f5748f) {
                h0.f(this.f5743a, this.f5744b);
                ViewGroup viewGroup = this.f5745c;
                if (viewGroup != null) {
                    viewGroup.invalidate();
                }
            }
            b(false);
        }

        private void b(boolean z10) {
            ViewGroup viewGroup;
            if (this.f5746d && this.f5747e != z10 && (viewGroup = this.f5745c) != null) {
                this.f5747e = z10;
                g0.b(viewGroup, z10);
            }
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationCancel(Animator animator) {
            this.f5748f = true;
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
            transition.f0(this);
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionPause(Transition transition) {
            b(false);
            if (!this.f5748f) {
                h0.f(this.f5743a, this.f5744b);
            }
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionResume(Transition transition) {
            b(true);
            if (!this.f5748f) {
                h0.f(this.f5743a, 0);
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
                h0.f(this.f5743a, 0);
                ViewGroup viewGroup = this.f5745c;
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
        private final ViewGroup f5749a;

        /* renamed from: b  reason: collision with root package name */
        private final View f5750b;

        /* renamed from: c  reason: collision with root package name */
        private final View f5751c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f5752d = true;

        b(ViewGroup viewGroup, View view, View view2) {
            this.f5749a = viewGroup;
            this.f5750b = view;
            this.f5751c = view2;
        }

        private void a() {
            this.f5751c.setTag(l.f5727a, null);
            this.f5749a.getOverlay().remove(this.f5750b);
            this.f5752d = false;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            a();
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorPauseListener
        public void onAnimationPause(Animator animator) {
            this.f5749a.getOverlay().remove(this.f5750b);
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorPauseListener
        public void onAnimationResume(Animator animator) {
            if (this.f5750b.getParent() == null) {
                this.f5749a.getOverlay().add(this.f5750b);
            } else {
                n0.this.cancel();
            }
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator, boolean z10) {
            if (z10) {
                this.f5751c.setTag(l.f5727a, this.f5750b);
                this.f5749a.getOverlay().add(this.f5750b);
                this.f5752d = true;
            }
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionCancel(Transition transition) {
            if (this.f5752d) {
                a();
            }
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionEnd(Transition transition) {
            transition.f0(this);
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
        boolean f5754a;

        /* renamed from: b  reason: collision with root package name */
        boolean f5755b;

        /* renamed from: c  reason: collision with root package name */
        int f5756c;

        /* renamed from: d  reason: collision with root package name */
        int f5757d;

        /* renamed from: e  reason: collision with root package name */
        ViewGroup f5758e;

        /* renamed from: f  reason: collision with root package name */
        ViewGroup f5759f;

        c() {
        }
    }

    private void u0(c0 c0Var) {
        c0Var.f5668a.put("android:visibility:visibility", Integer.valueOf(c0Var.f5669b.getVisibility()));
        c0Var.f5668a.put("android:visibility:parent", c0Var.f5669b.getParent());
        int[] iArr = new int[2];
        c0Var.f5669b.getLocationOnScreen(iArr);
        c0Var.f5668a.put("android:visibility:screenLocation", iArr);
    }

    private c v0(c0 c0Var, c0 c0Var2) {
        c cVar = new c();
        cVar.f5754a = false;
        cVar.f5755b = false;
        if (c0Var != null && c0Var.f5668a.containsKey("android:visibility:visibility")) {
            cVar.f5756c = ((Integer) c0Var.f5668a.get("android:visibility:visibility")).intValue();
            cVar.f5758e = (ViewGroup) c0Var.f5668a.get("android:visibility:parent");
        } else {
            cVar.f5756c = -1;
            cVar.f5758e = null;
        }
        if (c0Var2 != null && c0Var2.f5668a.containsKey("android:visibility:visibility")) {
            cVar.f5757d = ((Integer) c0Var2.f5668a.get("android:visibility:visibility")).intValue();
            cVar.f5759f = (ViewGroup) c0Var2.f5668a.get("android:visibility:parent");
        } else {
            cVar.f5757d = -1;
            cVar.f5759f = null;
        }
        if (c0Var != null && c0Var2 != null) {
            int i10 = cVar.f5756c;
            int i11 = cVar.f5757d;
            if (i10 != i11 || cVar.f5758e != cVar.f5759f) {
                if (i10 != i11) {
                    if (i10 == 0) {
                        cVar.f5755b = false;
                        cVar.f5754a = true;
                        return cVar;
                    } else if (i11 == 0) {
                        cVar.f5755b = true;
                        cVar.f5754a = true;
                        return cVar;
                    }
                } else if (cVar.f5759f == null) {
                    cVar.f5755b = false;
                    cVar.f5754a = true;
                    return cVar;
                } else if (cVar.f5758e == null) {
                    cVar.f5755b = true;
                    cVar.f5754a = true;
                    return cVar;
                }
            }
        } else if (c0Var == null && cVar.f5757d == 0) {
            cVar.f5755b = true;
            cVar.f5754a = true;
            return cVar;
        } else if (c0Var2 == null && cVar.f5756c == 0) {
            cVar.f5755b = false;
            cVar.f5754a = true;
        }
        return cVar;
    }

    public void A0(int i10) {
        if ((i10 & (-4)) == 0) {
            this.f5742b0 = i10;
            return;
        }
        throw new IllegalArgumentException("Only MODE_IN and MODE_OUT flags are allowed");
    }

    @Override // androidx.transition.Transition
    public String[] N() {
        return f5741c0;
    }

    @Override // androidx.transition.Transition
    public boolean S(c0 c0Var, c0 c0Var2) {
        if (c0Var == null && c0Var2 == null) {
            return false;
        }
        if (c0Var != null && c0Var2 != null && c0Var2.f5668a.containsKey("android:visibility:visibility") != c0Var.f5668a.containsKey("android:visibility:visibility")) {
            return false;
        }
        c v02 = v0(c0Var, c0Var2);
        if (!v02.f5754a || (v02.f5756c != 0 && v02.f5757d != 0)) {
            return false;
        }
        return true;
    }

    @Override // androidx.transition.Transition
    public void i(c0 c0Var) {
        u0(c0Var);
    }

    @Override // androidx.transition.Transition
    public void l(c0 c0Var) {
        u0(c0Var);
    }

    @Override // androidx.transition.Transition
    public Animator q(ViewGroup viewGroup, c0 c0Var, c0 c0Var2) {
        c v02 = v0(c0Var, c0Var2);
        if (v02.f5754a) {
            if (v02.f5758e != null || v02.f5759f != null) {
                if (v02.f5755b) {
                    return x0(viewGroup, c0Var, v02.f5756c, c0Var2, v02.f5757d);
                }
                return z0(viewGroup, c0Var, v02.f5756c, c0Var2, v02.f5757d);
            }
            return null;
        }
        return null;
    }

    public abstract Animator w0(ViewGroup viewGroup, View view, c0 c0Var, c0 c0Var2);

    public Animator x0(ViewGroup viewGroup, c0 c0Var, int i10, c0 c0Var2, int i11) {
        if ((this.f5742b0 & 1) != 1 || c0Var2 == null) {
            return null;
        }
        if (c0Var == null) {
            View view = (View) c0Var2.f5669b.getParent();
            if (v0(A(view, false), O(view, false)).f5754a) {
                return null;
            }
        }
        return w0(viewGroup, c0Var2.f5669b, c0Var, c0Var2);
    }

    public abstract Animator y0(ViewGroup viewGroup, View view, c0 c0Var, c0 c0Var2);

    /* JADX WARN: Code restructure failed: missing block: B:43:0x0083, code lost:
        if (r9.H != false) goto L54;
     */
    /* JADX WARN: Removed duplicated region for block: B:27:0x0040  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public android.animation.Animator z0(android.view.ViewGroup r10, androidx.transition.c0 r11, int r12, androidx.transition.c0 r13, int r14) {
        /*
            Method dump skipped, instructions count: 264
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.transition.n0.z0(android.view.ViewGroup, androidx.transition.c0, int, androidx.transition.c0, int):android.animation.Animator");
    }
}
