package androidx.transition;

import android.animation.Animator;
import android.animation.TimeInterpolator;
import android.view.View;
import android.view.ViewGroup;
import android.view.animation.AccelerateInterpolator;
import android.view.animation.DecelerateInterpolator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class p extends n0 {

    /* renamed from: f0  reason: collision with root package name */
    private static final TimeInterpolator f5763f0 = new DecelerateInterpolator();

    /* renamed from: g0  reason: collision with root package name */
    private static final TimeInterpolator f5764g0 = new AccelerateInterpolator();

    /* renamed from: h0  reason: collision with root package name */
    private static final g f5765h0 = new a();

    /* renamed from: i0  reason: collision with root package name */
    private static final g f5766i0 = new b();

    /* renamed from: j0  reason: collision with root package name */
    private static final g f5767j0 = new c();

    /* renamed from: k0  reason: collision with root package name */
    private static final g f5768k0 = new d();

    /* renamed from: l0  reason: collision with root package name */
    private static final g f5769l0 = new e();

    /* renamed from: m0  reason: collision with root package name */
    private static final g f5770m0 = new f();

    /* renamed from: d0  reason: collision with root package name */
    private g f5771d0 = f5770m0;

    /* renamed from: e0  reason: collision with root package name */
    private int f5772e0 = 80;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a extends h {
        a() {
            super(null);
        }

        @Override // androidx.transition.p.g
        public float b(ViewGroup viewGroup, View view) {
            return view.getTranslationX() - viewGroup.getWidth();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b extends h {
        b() {
            super(null);
        }

        @Override // androidx.transition.p.g
        public float b(ViewGroup viewGroup, View view) {
            if (viewGroup.getLayoutDirection() == 1) {
                return view.getTranslationX() + viewGroup.getWidth();
            }
            return view.getTranslationX() - viewGroup.getWidth();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class c extends i {
        c() {
            super(null);
        }

        @Override // androidx.transition.p.g
        public float a(ViewGroup viewGroup, View view) {
            return view.getTranslationY() - viewGroup.getHeight();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class d extends h {
        d() {
            super(null);
        }

        @Override // androidx.transition.p.g
        public float b(ViewGroup viewGroup, View view) {
            return view.getTranslationX() + viewGroup.getWidth();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class e extends h {
        e() {
            super(null);
        }

        @Override // androidx.transition.p.g
        public float b(ViewGroup viewGroup, View view) {
            if (viewGroup.getLayoutDirection() == 1) {
                return view.getTranslationX() - viewGroup.getWidth();
            }
            return view.getTranslationX() + viewGroup.getWidth();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class f extends i {
        f() {
            super(null);
        }

        @Override // androidx.transition.p.g
        public float a(ViewGroup viewGroup, View view) {
            return view.getTranslationY() + viewGroup.getHeight();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface g {
        float a(ViewGroup viewGroup, View view);

        float b(ViewGroup viewGroup, View view);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static abstract class h implements g {
        private h() {
        }

        @Override // androidx.transition.p.g
        public float a(ViewGroup viewGroup, View view) {
            return view.getTranslationY();
        }

        /* synthetic */ h(a aVar) {
            this();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static abstract class i implements g {
        private i() {
        }

        @Override // androidx.transition.p.g
        public float b(ViewGroup viewGroup, View view) {
            return view.getTranslationX();
        }

        /* synthetic */ i(a aVar) {
            this();
        }
    }

    public p(int i10) {
        B0(i10);
    }

    private void u0(c0 c0Var) {
        int[] iArr = new int[2];
        c0Var.f5669b.getLocationOnScreen(iArr);
        c0Var.f5668a.put("android:slide:screenPosition", iArr);
    }

    public void B0(int i10) {
        if (i10 != 3) {
            if (i10 != 5) {
                if (i10 != 48) {
                    if (i10 != 80) {
                        if (i10 != 8388611) {
                            if (i10 == 8388613) {
                                this.f5771d0 = f5769l0;
                            } else {
                                throw new IllegalArgumentException("Invalid slide direction");
                            }
                        } else {
                            this.f5771d0 = f5766i0;
                        }
                    } else {
                        this.f5771d0 = f5770m0;
                    }
                } else {
                    this.f5771d0 = f5767j0;
                }
            } else {
                this.f5771d0 = f5768k0;
            }
        } else {
            this.f5771d0 = f5765h0;
        }
        this.f5772e0 = i10;
        o oVar = new o();
        oVar.j(i10);
        q0(oVar);
    }

    @Override // androidx.transition.Transition
    public boolean R() {
        return true;
    }

    @Override // androidx.transition.n0, androidx.transition.Transition
    public void i(c0 c0Var) {
        super.i(c0Var);
        u0(c0Var);
    }

    @Override // androidx.transition.n0, androidx.transition.Transition
    public void l(c0 c0Var) {
        super.l(c0Var);
        u0(c0Var);
    }

    @Override // androidx.transition.n0
    public Animator w0(ViewGroup viewGroup, View view, c0 c0Var, c0 c0Var2) {
        if (c0Var2 == null) {
            return null;
        }
        int[] iArr = (int[]) c0Var2.f5668a.get("android:slide:screenPosition");
        float translationX = view.getTranslationX();
        float translationY = view.getTranslationY();
        return e0.a(view, c0Var2, iArr[0], iArr[1], this.f5771d0.b(viewGroup, view), this.f5771d0.a(viewGroup, view), translationX, translationY, f5763f0, this);
    }

    @Override // androidx.transition.n0
    public Animator y0(ViewGroup viewGroup, View view, c0 c0Var, c0 c0Var2) {
        if (c0Var == null) {
            return null;
        }
        int[] iArr = (int[]) c0Var.f5668a.get("android:slide:screenPosition");
        return e0.a(view, c0Var, iArr[0], iArr[1], view.getTranslationX(), view.getTranslationY(), this.f5771d0.b(viewGroup, view), this.f5771d0.a(viewGroup, view), f5764g0, this);
    }
}
