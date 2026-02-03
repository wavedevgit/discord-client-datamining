package androidx.transition;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.view.View;
import android.view.ViewGroup;
import androidx.transition.Transition;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class n0 extends Transition {

    /* renamed from: c0  reason: collision with root package name */
    private static final String[] f5331c0 = {"android:visibility:visibility", "android:visibility:parent"};

    /* renamed from: b0  reason: collision with root package name */
    private int f5332b0 = 3;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a extends AnimatorListenerAdapter implements Transition.h {

        /* renamed from: a  reason: collision with root package name */
        private final View f5333a;

        /* renamed from: b  reason: collision with root package name */
        private final int f5334b;

        /* renamed from: c  reason: collision with root package name */
        private final ViewGroup f5335c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f5336d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f5337e;

        /* renamed from: f  reason: collision with root package name */
        boolean f5338f = false;

        a(View view, int i10, boolean z10) {
            this.f5333a = view;
            this.f5334b = i10;
            this.f5335c = (ViewGroup) view.getParent();
            this.f5336d = z10;
            b(true);
        }

        private void a() {
            if (!this.f5338f) {
                h0.f(this.f5333a, this.f5334b);
                ViewGroup viewGroup = this.f5335c;
                if (viewGroup != null) {
                    viewGroup.invalidate();
                }
            }
            b(false);
        }

        private void b(boolean z10) {
            ViewGroup viewGroup;
            if (this.f5336d && this.f5337e != z10 && (viewGroup = this.f5335c) != null) {
                this.f5337e = z10;
                g0.b(viewGroup, z10);
            }
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationCancel(Animator animator) {
            this.f5338f = true;
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
            if (!this.f5338f) {
                h0.f(this.f5333a, this.f5334b);
            }
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionResume(Transition transition) {
            b(true);
            if (!this.f5338f) {
                h0.f(this.f5333a, 0);
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
                h0.f(this.f5333a, 0);
                ViewGroup viewGroup = this.f5335c;
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
        private final ViewGroup f5339a;

        /* renamed from: b  reason: collision with root package name */
        private final View f5340b;

        /* renamed from: c  reason: collision with root package name */
        private final View f5341c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f5342d = true;

        b(ViewGroup viewGroup, View view, View view2) {
            this.f5339a = viewGroup;
            this.f5340b = view;
            this.f5341c = view2;
        }

        private void a() {
            this.f5341c.setTag(l.f5317a, null);
            this.f5339a.getOverlay().remove(this.f5340b);
            this.f5342d = false;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            a();
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorPauseListener
        public void onAnimationPause(Animator animator) {
            this.f5339a.getOverlay().remove(this.f5340b);
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorPauseListener
        public void onAnimationResume(Animator animator) {
            if (this.f5340b.getParent() == null) {
                this.f5339a.getOverlay().add(this.f5340b);
            } else {
                n0.this.cancel();
            }
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator, boolean z10) {
            if (z10) {
                this.f5341c.setTag(l.f5317a, this.f5340b);
                this.f5339a.getOverlay().add(this.f5340b);
                this.f5342d = true;
            }
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionCancel(Transition transition) {
            if (this.f5342d) {
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
        boolean f5344a;

        /* renamed from: b  reason: collision with root package name */
        boolean f5345b;

        /* renamed from: c  reason: collision with root package name */
        int f5346c;

        /* renamed from: d  reason: collision with root package name */
        int f5347d;

        /* renamed from: e  reason: collision with root package name */
        ViewGroup f5348e;

        /* renamed from: f  reason: collision with root package name */
        ViewGroup f5349f;

        c() {
        }
    }

    private void u0(c0 c0Var) {
        c0Var.f5258a.put("android:visibility:visibility", Integer.valueOf(c0Var.f5259b.getVisibility()));
        c0Var.f5258a.put("android:visibility:parent", c0Var.f5259b.getParent());
        int[] iArr = new int[2];
        c0Var.f5259b.getLocationOnScreen(iArr);
        c0Var.f5258a.put("android:visibility:screenLocation", iArr);
    }

    private c v0(c0 c0Var, c0 c0Var2) {
        c cVar = new c();
        cVar.f5344a = false;
        cVar.f5345b = false;
        if (c0Var != null && c0Var.f5258a.containsKey("android:visibility:visibility")) {
            cVar.f5346c = ((Integer) c0Var.f5258a.get("android:visibility:visibility")).intValue();
            cVar.f5348e = (ViewGroup) c0Var.f5258a.get("android:visibility:parent");
        } else {
            cVar.f5346c = -1;
            cVar.f5348e = null;
        }
        if (c0Var2 != null && c0Var2.f5258a.containsKey("android:visibility:visibility")) {
            cVar.f5347d = ((Integer) c0Var2.f5258a.get("android:visibility:visibility")).intValue();
            cVar.f5349f = (ViewGroup) c0Var2.f5258a.get("android:visibility:parent");
        } else {
            cVar.f5347d = -1;
            cVar.f5349f = null;
        }
        if (c0Var != null && c0Var2 != null) {
            int i10 = cVar.f5346c;
            int i11 = cVar.f5347d;
            if (i10 != i11 || cVar.f5348e != cVar.f5349f) {
                if (i10 != i11) {
                    if (i10 == 0) {
                        cVar.f5345b = false;
                        cVar.f5344a = true;
                        return cVar;
                    } else if (i11 == 0) {
                        cVar.f5345b = true;
                        cVar.f5344a = true;
                        return cVar;
                    }
                } else if (cVar.f5349f == null) {
                    cVar.f5345b = false;
                    cVar.f5344a = true;
                    return cVar;
                } else if (cVar.f5348e == null) {
                    cVar.f5345b = true;
                    cVar.f5344a = true;
                    return cVar;
                }
            }
        } else if (c0Var == null && cVar.f5347d == 0) {
            cVar.f5345b = true;
            cVar.f5344a = true;
            return cVar;
        } else if (c0Var2 == null && cVar.f5346c == 0) {
            cVar.f5345b = false;
            cVar.f5344a = true;
        }
        return cVar;
    }

    public void A0(int i10) {
        if ((i10 & (-4)) == 0) {
            this.f5332b0 = i10;
            return;
        }
        throw new IllegalArgumentException("Only MODE_IN and MODE_OUT flags are allowed");
    }

    @Override // androidx.transition.Transition
    public String[] N() {
        return f5331c0;
    }

    @Override // androidx.transition.Transition
    public boolean R(c0 c0Var, c0 c0Var2) {
        if (c0Var == null && c0Var2 == null) {
            return false;
        }
        if (c0Var != null && c0Var2 != null && c0Var2.f5258a.containsKey("android:visibility:visibility") != c0Var.f5258a.containsKey("android:visibility:visibility")) {
            return false;
        }
        c v02 = v0(c0Var, c0Var2);
        if (!v02.f5344a || (v02.f5346c != 0 && v02.f5347d != 0)) {
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
        if (v02.f5344a) {
            if (v02.f5348e != null || v02.f5349f != null) {
                if (v02.f5345b) {
                    return x0(viewGroup, c0Var, v02.f5346c, c0Var2, v02.f5347d);
                }
                return z0(viewGroup, c0Var, v02.f5346c, c0Var2, v02.f5347d);
            }
            return null;
        }
        return null;
    }

    public abstract Animator w0(ViewGroup viewGroup, View view, c0 c0Var, c0 c0Var2);

    public Animator x0(ViewGroup viewGroup, c0 c0Var, int i10, c0 c0Var2, int i11) {
        if ((this.f5332b0 & 1) != 1 || c0Var2 == null) {
            return null;
        }
        if (c0Var == null) {
            View view = (View) c0Var2.f5259b.getParent();
            if (v0(A(view, false), O(view, false)).f5344a) {
                return null;
            }
        }
        return w0(viewGroup, c0Var2.f5259b, c0Var, c0Var2);
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
