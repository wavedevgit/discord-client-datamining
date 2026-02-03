package androidx.transition;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.AnimatorSet;
import android.animation.ObjectAnimator;
import android.graphics.PointF;
import android.graphics.Rect;
import android.util.Property;
import android.view.View;
import android.view.ViewGroup;
import androidx.transition.Transition;
import com.facebook.react.uimanager.ViewProps;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b extends Transition {

    /* renamed from: c0  reason: collision with root package name */
    private static final String[] f5216c0 = {"android:changeBounds:bounds", "android:changeBounds:clip", "android:changeBounds:parent", "android:changeBounds:windowX", "android:changeBounds:windowY"};

    /* renamed from: d0  reason: collision with root package name */
    private static final Property f5217d0 = new a(PointF.class, "topLeft");

    /* renamed from: e0  reason: collision with root package name */
    private static final Property f5218e0 = new C0072b(PointF.class, "bottomRight");

    /* renamed from: f0  reason: collision with root package name */
    private static final Property f5219f0 = new c(PointF.class, "bottomRight");

    /* renamed from: g0  reason: collision with root package name */
    private static final Property f5220g0 = new d(PointF.class, "topLeft");

    /* renamed from: h0  reason: collision with root package name */
    private static final Property f5221h0 = new e(PointF.class, ViewProps.POSITION);

    /* renamed from: i0  reason: collision with root package name */
    private static final m f5222i0 = new m();

    /* renamed from: b0  reason: collision with root package name */
    private boolean f5223b0 = false;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a extends Property {
        a(Class cls, String str) {
            super(cls, str);
        }

        @Override // android.util.Property
        /* renamed from: a */
        public PointF get(i iVar) {
            return null;
        }

        @Override // android.util.Property
        /* renamed from: b */
        public void set(i iVar, PointF pointF) {
            iVar.c(pointF);
        }
    }

    /* renamed from: androidx.transition.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class C0072b extends Property {
        C0072b(Class cls, String str) {
            super(cls, str);
        }

        @Override // android.util.Property
        /* renamed from: a */
        public PointF get(i iVar) {
            return null;
        }

        @Override // android.util.Property
        /* renamed from: b */
        public void set(i iVar, PointF pointF) {
            iVar.a(pointF);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class c extends Property {
        c(Class cls, String str) {
            super(cls, str);
        }

        @Override // android.util.Property
        /* renamed from: a */
        public PointF get(View view) {
            return null;
        }

        @Override // android.util.Property
        /* renamed from: b */
        public void set(View view, PointF pointF) {
            h0.d(view, view.getLeft(), view.getTop(), Math.round(pointF.x), Math.round(pointF.y));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class d extends Property {
        d(Class cls, String str) {
            super(cls, str);
        }

        @Override // android.util.Property
        /* renamed from: a */
        public PointF get(View view) {
            return null;
        }

        @Override // android.util.Property
        /* renamed from: b */
        public void set(View view, PointF pointF) {
            h0.d(view, Math.round(pointF.x), Math.round(pointF.y), view.getRight(), view.getBottom());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class e extends Property {
        e(Class cls, String str) {
            super(cls, str);
        }

        @Override // android.util.Property
        /* renamed from: a */
        public PointF get(View view) {
            return null;
        }

        @Override // android.util.Property
        /* renamed from: b */
        public void set(View view, PointF pointF) {
            int round = Math.round(pointF.x);
            int round2 = Math.round(pointF.y);
            h0.d(view, round, round2, view.getWidth() + round, view.getHeight() + round2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class f extends AnimatorListenerAdapter {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ i f5224a;
        private final i mViewBounds;

        f(i iVar) {
            this.f5224a = iVar;
            this.mViewBounds = iVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class g extends AnimatorListenerAdapter implements Transition.h {

        /* renamed from: a  reason: collision with root package name */
        private final View f5226a;

        /* renamed from: b  reason: collision with root package name */
        private final Rect f5227b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f5228c;

        /* renamed from: d  reason: collision with root package name */
        private final Rect f5229d;

        /* renamed from: e  reason: collision with root package name */
        private final boolean f5230e;

        /* renamed from: f  reason: collision with root package name */
        private final int f5231f;

        /* renamed from: g  reason: collision with root package name */
        private final int f5232g;

        /* renamed from: h  reason: collision with root package name */
        private final int f5233h;

        /* renamed from: i  reason: collision with root package name */
        private final int f5234i;

        /* renamed from: j  reason: collision with root package name */
        private final int f5235j;

        /* renamed from: k  reason: collision with root package name */
        private final int f5236k;

        /* renamed from: l  reason: collision with root package name */
        private final int f5237l;

        /* renamed from: m  reason: collision with root package name */
        private final int f5238m;

        /* renamed from: n  reason: collision with root package name */
        private boolean f5239n;

        g(View view, Rect rect, boolean z10, Rect rect2, boolean z11, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
            this.f5226a = view;
            this.f5227b = rect;
            this.f5228c = z10;
            this.f5229d = rect2;
            this.f5230e = z11;
            this.f5231f = i10;
            this.f5232g = i11;
            this.f5233h = i12;
            this.f5234i = i13;
            this.f5235j = i14;
            this.f5236k = i15;
            this.f5237l = i16;
            this.f5238m = i17;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            onAnimationEnd(animator, false);
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            onAnimationStart(animator, false);
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionCancel(Transition transition) {
            this.f5239n = true;
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionEnd(Transition transition) {
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionPause(Transition transition) {
            Rect rect;
            this.f5226a.setTag(l.f5318b, this.f5226a.getClipBounds());
            if (this.f5230e) {
                rect = null;
            } else {
                rect = this.f5229d;
            }
            this.f5226a.setClipBounds(rect);
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionResume(Transition transition) {
            this.f5226a.setTag(l.f5318b, null);
            this.f5226a.setClipBounds((Rect) this.f5226a.getTag(l.f5318b));
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionStart(Transition transition) {
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator, boolean z10) {
            if (this.f5239n) {
                return;
            }
            Rect rect = null;
            if (z10) {
                if (!this.f5228c) {
                    rect = this.f5227b;
                }
            } else if (!this.f5230e) {
                rect = this.f5229d;
            }
            this.f5226a.setClipBounds(rect);
            if (z10) {
                h0.d(this.f5226a, this.f5231f, this.f5232g, this.f5233h, this.f5234i);
            } else {
                h0.d(this.f5226a, this.f5235j, this.f5236k, this.f5237l, this.f5238m);
            }
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator, boolean z10) {
            int max = Math.max(this.f5233h - this.f5231f, this.f5237l - this.f5235j);
            int max2 = Math.max(this.f5234i - this.f5232g, this.f5238m - this.f5236k);
            int i10 = z10 ? this.f5235j : this.f5231f;
            int i11 = z10 ? this.f5236k : this.f5232g;
            h0.d(this.f5226a, i10, i11, max + i10, max2 + i11);
            this.f5226a.setClipBounds(z10 ? this.f5229d : this.f5227b);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class h extends w {

        /* renamed from: a  reason: collision with root package name */
        boolean f5240a = false;

        /* renamed from: b  reason: collision with root package name */
        final ViewGroup f5241b;

        h(ViewGroup viewGroup) {
            this.f5241b = viewGroup;
        }

        @Override // androidx.transition.w, androidx.transition.Transition.h
        public void onTransitionCancel(Transition transition) {
            g0.b(this.f5241b, false);
            this.f5240a = true;
        }

        @Override // androidx.transition.w, androidx.transition.Transition.h
        public void onTransitionEnd(Transition transition) {
            if (!this.f5240a) {
                g0.b(this.f5241b, false);
            }
            transition.e0(this);
        }

        @Override // androidx.transition.w, androidx.transition.Transition.h
        public void onTransitionPause(Transition transition) {
            g0.b(this.f5241b, false);
        }

        @Override // androidx.transition.w, androidx.transition.Transition.h
        public void onTransitionResume(Transition transition) {
            g0.b(this.f5241b, true);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class i {

        /* renamed from: a  reason: collision with root package name */
        private int f5242a;

        /* renamed from: b  reason: collision with root package name */
        private int f5243b;

        /* renamed from: c  reason: collision with root package name */
        private int f5244c;

        /* renamed from: d  reason: collision with root package name */
        private int f5245d;

        /* renamed from: e  reason: collision with root package name */
        private final View f5246e;

        /* renamed from: f  reason: collision with root package name */
        private int f5247f;

        /* renamed from: g  reason: collision with root package name */
        private int f5248g;

        i(View view) {
            this.f5246e = view;
        }

        private void b() {
            h0.d(this.f5246e, this.f5242a, this.f5243b, this.f5244c, this.f5245d);
            this.f5247f = 0;
            this.f5248g = 0;
        }

        void a(PointF pointF) {
            this.f5244c = Math.round(pointF.x);
            this.f5245d = Math.round(pointF.y);
            int i10 = this.f5248g + 1;
            this.f5248g = i10;
            if (this.f5247f == i10) {
                b();
            }
        }

        void c(PointF pointF) {
            this.f5242a = Math.round(pointF.x);
            this.f5243b = Math.round(pointF.y);
            int i10 = this.f5247f + 1;
            this.f5247f = i10;
            if (i10 == this.f5248g) {
                b();
            }
        }
    }

    private void u0(c0 c0Var) {
        View view = c0Var.f5259b;
        if (view.isLaidOut() || view.getWidth() != 0 || view.getHeight() != 0) {
            c0Var.f5258a.put("android:changeBounds:bounds", new Rect(view.getLeft(), view.getTop(), view.getRight(), view.getBottom()));
            c0Var.f5258a.put("android:changeBounds:parent", c0Var.f5259b.getParent());
            if (this.f5223b0) {
                c0Var.f5258a.put("android:changeBounds:clip", view.getClipBounds());
            }
        }
    }

    @Override // androidx.transition.Transition
    public String[] N() {
        return f5216c0;
    }

    @Override // androidx.transition.Transition
    public boolean Q() {
        return true;
    }

    @Override // androidx.transition.Transition
    public void i(c0 c0Var) {
        u0(c0Var);
    }

    @Override // androidx.transition.Transition
    public void l(c0 c0Var) {
        Rect rect;
        u0(c0Var);
        if (this.f5223b0 && (rect = (Rect) c0Var.f5259b.getTag(l.f5318b)) != null) {
            c0Var.f5258a.put("android:changeBounds:clip", rect);
        }
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // androidx.transition.Transition
    public Animator q(ViewGroup viewGroup, c0 c0Var, c0 c0Var2) {
        int i10;
        int i11;
        int i12;
        int i13;
        ObjectAnimator a10;
        boolean z10;
        int i14;
        Rect rect;
        int i15;
        Rect rect2;
        ObjectAnimator objectAnimator;
        Animator c10;
        if (c0Var == null || c0Var2 == null) {
            return null;
        }
        Map map = c0Var.f5258a;
        Map map2 = c0Var2.f5258a;
        ViewGroup viewGroup2 = (ViewGroup) map.get("android:changeBounds:parent");
        ViewGroup viewGroup3 = (ViewGroup) map2.get("android:changeBounds:parent");
        if (viewGroup2 == null || viewGroup3 == null) {
            return null;
        }
        View view = c0Var2.f5259b;
        Rect rect3 = (Rect) c0Var.f5258a.get("android:changeBounds:bounds");
        Rect rect4 = (Rect) c0Var2.f5258a.get("android:changeBounds:bounds");
        int i16 = rect3.left;
        int i17 = rect4.left;
        int i18 = rect3.top;
        int i19 = rect4.top;
        int i20 = rect3.right;
        int i21 = rect4.right;
        int i22 = rect3.bottom;
        int i23 = rect4.bottom;
        int i24 = i20 - i16;
        int i25 = i22 - i18;
        int i26 = i21 - i17;
        int i27 = i23 - i19;
        Rect rect5 = (Rect) c0Var.f5258a.get("android:changeBounds:clip");
        Rect rect6 = (Rect) c0Var2.f5258a.get("android:changeBounds:clip");
        if ((i24 != 0 && i25 != 0) || (i26 != 0 && i27 != 0)) {
            if (i16 == i17 && i18 == i19) {
                i10 = 0;
            } else {
                i10 = 1;
            }
            if (i20 != i21 || i22 != i23) {
                i10++;
            }
        } else {
            i10 = 0;
        }
        if ((rect5 != null && !rect5.equals(rect6)) || (rect5 == null && rect6 != null)) {
            i10++;
        }
        int i28 = i10;
        if (i28 <= 0) {
            return null;
        }
        if (!this.f5223b0) {
            h0.d(view, i16, i18, i20, i22);
            if (i28 == 2) {
                if (i24 == i26 && i25 == i27) {
                    c10 = j.a(view, f5221h0, C().a(i16, i18, i17, i19));
                } else {
                    i iVar = new i(view);
                    ObjectAnimator a11 = j.a(iVar, f5217d0, C().a(i16, i18, i17, i19));
                    ObjectAnimator a12 = j.a(iVar, f5218e0, C().a(i20, i22, i21, i23));
                    AnimatorSet animatorSet = new AnimatorSet();
                    animatorSet.playTogether(a11, a12);
                    animatorSet.addListener(new f(iVar));
                    c10 = animatorSet;
                }
            } else if (i16 == i17 && i18 == i19) {
                c10 = j.a(view, f5219f0, C().a(i20, i22, i21, i23));
            } else {
                c10 = j.a(view, f5220g0, C().a(i16, i18, i17, i19));
            }
        } else {
            h0.d(view, i16, i18, Math.max(i24, i26) + i16, i18 + Math.max(i25, i27));
            if (i16 == i17 && i18 == i19) {
                a10 = null;
                i11 = i23;
                i13 = i17;
                i12 = i21;
            } else {
                i11 = i23;
                i12 = i21;
                i13 = i17;
                a10 = j.a(view, f5221h0, C().a(i16, i18, i17, i19));
            }
            if (rect5 == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z10) {
                i14 = 0;
                rect = new Rect(0, 0, i24, i25);
            } else {
                i14 = 0;
                rect = rect5;
            }
            if (rect6 == null) {
                i15 = 1;
            } else {
                i15 = i14;
            }
            if (i15 != 0) {
                rect2 = new Rect(i14, i14, i26, i27);
            } else {
                rect2 = rect6;
            }
            if (!rect.equals(rect2)) {
                view.setClipBounds(rect);
                objectAnimator = ObjectAnimator.ofObject(view, "clipBounds", f5222i0, rect, rect2);
                g gVar = new g(view, rect, z10, rect2, i15, i16, i18, i20, i22, i13, i19, i12, i11);
                objectAnimator.addListener(gVar);
                c(gVar);
            } else {
                objectAnimator = null;
            }
            c10 = b0.c(a10, objectAnimator);
        }
        if (view.getParent() instanceof ViewGroup) {
            ViewGroup viewGroup4 = (ViewGroup) view.getParent();
            g0.b(viewGroup4, true);
            E().c(new h(viewGroup4));
        }
        return c10;
    }
}
