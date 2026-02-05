package androidx.transition;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.view.View;
import android.view.ViewGroup;
import androidx.transition.Transition;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class n0 extends Transition {

    /* renamed from: c0  reason: collision with root package name */
    private static final String[] f5412c0 = {"android:visibility:visibility", "android:visibility:parent"};

    /* renamed from: b0  reason: collision with root package name */
    private int f5413b0 = 3;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a extends AnimatorListenerAdapter implements Transition.h {

        /* renamed from: a  reason: collision with root package name */
        private final View f5414a;

        /* renamed from: b  reason: collision with root package name */
        private final int f5415b;

        /* renamed from: c  reason: collision with root package name */
        private final ViewGroup f5416c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f5417d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f5418e;

        /* renamed from: f  reason: collision with root package name */
        boolean f5419f = false;

        a(View view, int i10, boolean z10) {
            this.f5414a = view;
            this.f5415b = i10;
            this.f5416c = (ViewGroup) view.getParent();
            this.f5417d = z10;
            b(true);
        }

        private void a() {
            if (!this.f5419f) {
                h0.f(this.f5414a, this.f5415b);
                ViewGroup viewGroup = this.f5416c;
                if (viewGroup != null) {
                    viewGroup.invalidate();
                }
            }
            b(false);
        }

        private void b(boolean z10) {
            ViewGroup viewGroup;
            if (this.f5417d && this.f5418e != z10 && (viewGroup = this.f5416c) != null) {
                this.f5418e = z10;
                g0.b(viewGroup, z10);
            }
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationCancel(Animator animator) {
            this.f5419f = true;
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
            if (!this.f5419f) {
                h0.f(this.f5414a, this.f5415b);
            }
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionResume(Transition transition) {
            b(true);
            if (!this.f5419f) {
                h0.f(this.f5414a, 0);
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
                h0.f(this.f5414a, 0);
                ViewGroup viewGroup = this.f5416c;
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
        private final ViewGroup f5420a;

        /* renamed from: b  reason: collision with root package name */
        private final View f5421b;

        /* renamed from: c  reason: collision with root package name */
        private final View f5422c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f5423d = true;

        b(ViewGroup viewGroup, View view, View view2) {
            this.f5420a = viewGroup;
            this.f5421b = view;
            this.f5422c = view2;
        }

        private void a() {
            this.f5422c.setTag(l.f5398a, null);
            this.f5420a.getOverlay().remove(this.f5421b);
            this.f5423d = false;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            a();
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorPauseListener
        public void onAnimationPause(Animator animator) {
            this.f5420a.getOverlay().remove(this.f5421b);
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorPauseListener
        public void onAnimationResume(Animator animator) {
            if (this.f5421b.getParent() == null) {
                this.f5420a.getOverlay().add(this.f5421b);
            } else {
                n0.this.cancel();
            }
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator, boolean z10) {
            if (z10) {
                this.f5422c.setTag(l.f5398a, this.f5421b);
                this.f5420a.getOverlay().add(this.f5421b);
                this.f5423d = true;
            }
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionCancel(Transition transition) {
            if (this.f5423d) {
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
        boolean f5425a;

        /* renamed from: b  reason: collision with root package name */
        boolean f5426b;

        /* renamed from: c  reason: collision with root package name */
        int f5427c;

        /* renamed from: d  reason: collision with root package name */
        int f5428d;

        /* renamed from: e  reason: collision with root package name */
        ViewGroup f5429e;

        /* renamed from: f  reason: collision with root package name */
        ViewGroup f5430f;

        c() {
        }
    }

    private void u0(c0 c0Var) {
        c0Var.f5339a.put("android:visibility:visibility", Integer.valueOf(c0Var.f5340b.getVisibility()));
        c0Var.f5339a.put("android:visibility:parent", c0Var.f5340b.getParent());
        int[] iArr = new int[2];
        c0Var.f5340b.getLocationOnScreen(iArr);
        c0Var.f5339a.put("android:visibility:screenLocation", iArr);
    }

    private c v0(c0 c0Var, c0 c0Var2) {
        c cVar = new c();
        cVar.f5425a = false;
        cVar.f5426b = false;
        if (c0Var != null && c0Var.f5339a.containsKey("android:visibility:visibility")) {
            cVar.f5427c = ((Integer) c0Var.f5339a.get("android:visibility:visibility")).intValue();
            cVar.f5429e = (ViewGroup) c0Var.f5339a.get("android:visibility:parent");
        } else {
            cVar.f5427c = -1;
            cVar.f5429e = null;
        }
        if (c0Var2 != null && c0Var2.f5339a.containsKey("android:visibility:visibility")) {
            cVar.f5428d = ((Integer) c0Var2.f5339a.get("android:visibility:visibility")).intValue();
            cVar.f5430f = (ViewGroup) c0Var2.f5339a.get("android:visibility:parent");
        } else {
            cVar.f5428d = -1;
            cVar.f5430f = null;
        }
        if (c0Var != null && c0Var2 != null) {
            int i10 = cVar.f5427c;
            int i11 = cVar.f5428d;
            if (i10 != i11 || cVar.f5429e != cVar.f5430f) {
                if (i10 != i11) {
                    if (i10 == 0) {
                        cVar.f5426b = false;
                        cVar.f5425a = true;
                        return cVar;
                    } else if (i11 == 0) {
                        cVar.f5426b = true;
                        cVar.f5425a = true;
                        return cVar;
                    }
                } else if (cVar.f5430f == null) {
                    cVar.f5426b = false;
                    cVar.f5425a = true;
                    return cVar;
                } else if (cVar.f5429e == null) {
                    cVar.f5426b = true;
                    cVar.f5425a = true;
                    return cVar;
                }
            }
        } else if (c0Var == null && cVar.f5428d == 0) {
            cVar.f5426b = true;
            cVar.f5425a = true;
            return cVar;
        } else if (c0Var2 == null && cVar.f5427c == 0) {
            cVar.f5426b = false;
            cVar.f5425a = true;
        }
        return cVar;
    }

    public void A0(int i10) {
        if ((i10 & (-4)) == 0) {
            this.f5413b0 = i10;
            return;
        }
        throw new IllegalArgumentException("Only MODE_IN and MODE_OUT flags are allowed");
    }

    @Override // androidx.transition.Transition
    public String[] N() {
        return f5412c0;
    }

    @Override // androidx.transition.Transition
    public boolean R(c0 c0Var, c0 c0Var2) {
        if (c0Var == null && c0Var2 == null) {
            return false;
        }
        if (c0Var != null && c0Var2 != null && c0Var2.f5339a.containsKey("android:visibility:visibility") != c0Var.f5339a.containsKey("android:visibility:visibility")) {
            return false;
        }
        c v02 = v0(c0Var, c0Var2);
        if (!v02.f5425a || (v02.f5427c != 0 && v02.f5428d != 0)) {
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
        if (v02.f5425a) {
            if (v02.f5429e != null || v02.f5430f != null) {
                if (v02.f5426b) {
                    return x0(viewGroup, c0Var, v02.f5427c, c0Var2, v02.f5428d);
                }
                return z0(viewGroup, c0Var, v02.f5427c, c0Var2, v02.f5428d);
            }
            return null;
        }
        return null;
    }

    public abstract Animator w0(ViewGroup viewGroup, View view, c0 c0Var, c0 c0Var2);

    public Animator x0(ViewGroup viewGroup, c0 c0Var, int i10, c0 c0Var2, int i11) {
        if ((this.f5413b0 & 1) != 1 || c0Var2 == null) {
            return null;
        }
        if (c0Var == null) {
            View view = (View) c0Var2.f5340b.getParent();
            if (v0(A(view, false), O(view, false)).f5425a) {
                return null;
            }
        }
        return w0(viewGroup, c0Var2.f5340b, c0Var, c0Var2);
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
