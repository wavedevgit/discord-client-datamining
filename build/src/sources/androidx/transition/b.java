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
    private static final String[] f5297c0 = {"android:changeBounds:bounds", "android:changeBounds:clip", "android:changeBounds:parent", "android:changeBounds:windowX", "android:changeBounds:windowY"};

    /* renamed from: d0  reason: collision with root package name */
    private static final Property f5298d0 = new a(PointF.class, "topLeft");

    /* renamed from: e0  reason: collision with root package name */
    private static final Property f5299e0 = new C0071b(PointF.class, "bottomRight");

    /* renamed from: f0  reason: collision with root package name */
    private static final Property f5300f0 = new c(PointF.class, "bottomRight");

    /* renamed from: g0  reason: collision with root package name */
    private static final Property f5301g0 = new d(PointF.class, "topLeft");

    /* renamed from: h0  reason: collision with root package name */
    private static final Property f5302h0 = new e(PointF.class, ViewProps.POSITION);

    /* renamed from: i0  reason: collision with root package name */
    private static final m f5303i0 = new m();

    /* renamed from: b0  reason: collision with root package name */
    private boolean f5304b0 = false;

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
    class C0071b extends Property {
        C0071b(Class cls, String str) {
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
        final /* synthetic */ i f5305a;
        private final i mViewBounds;

        f(i iVar) {
            this.f5305a = iVar;
            this.mViewBounds = iVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class g extends AnimatorListenerAdapter implements Transition.h {

        /* renamed from: a  reason: collision with root package name */
        private final View f5307a;

        /* renamed from: b  reason: collision with root package name */
        private final Rect f5308b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f5309c;

        /* renamed from: d  reason: collision with root package name */
        private final Rect f5310d;

        /* renamed from: e  reason: collision with root package name */
        private final boolean f5311e;

        /* renamed from: f  reason: collision with root package name */
        private final int f5312f;

        /* renamed from: g  reason: collision with root package name */
        private final int f5313g;

        /* renamed from: h  reason: collision with root package name */
        private final int f5314h;

        /* renamed from: i  reason: collision with root package name */
        private final int f5315i;

        /* renamed from: j  reason: collision with root package name */
        private final int f5316j;

        /* renamed from: k  reason: collision with root package name */
        private final int f5317k;

        /* renamed from: l  reason: collision with root package name */
        private final int f5318l;

        /* renamed from: m  reason: collision with root package name */
        private final int f5319m;

        /* renamed from: n  reason: collision with root package name */
        private boolean f5320n;

        g(View view, Rect rect, boolean z10, Rect rect2, boolean z11, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
            this.f5307a = view;
            this.f5308b = rect;
            this.f5309c = z10;
            this.f5310d = rect2;
            this.f5311e = z11;
            this.f5312f = i10;
            this.f5313g = i11;
            this.f5314h = i12;
            this.f5315i = i13;
            this.f5316j = i14;
            this.f5317k = i15;
            this.f5318l = i16;
            this.f5319m = i17;
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
            this.f5320n = true;
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionEnd(Transition transition) {
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionPause(Transition transition) {
            Rect rect;
            this.f5307a.setTag(l.f5399b, this.f5307a.getClipBounds());
            if (this.f5311e) {
                rect = null;
            } else {
                rect = this.f5310d;
            }
            this.f5307a.setClipBounds(rect);
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionResume(Transition transition) {
            this.f5307a.setTag(l.f5399b, null);
            this.f5307a.setClipBounds((Rect) this.f5307a.getTag(l.f5399b));
        }

        @Override // androidx.transition.Transition.h
        public void onTransitionStart(Transition transition) {
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator, boolean z10) {
            if (this.f5320n) {
                return;
            }
            Rect rect = null;
            if (z10) {
                if (!this.f5309c) {
                    rect = this.f5308b;
                }
            } else if (!this.f5311e) {
                rect = this.f5310d;
            }
            this.f5307a.setClipBounds(rect);
            if (z10) {
                h0.d(this.f5307a, this.f5312f, this.f5313g, this.f5314h, this.f5315i);
            } else {
                h0.d(this.f5307a, this.f5316j, this.f5317k, this.f5318l, this.f5319m);
            }
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator, boolean z10) {
            int max = Math.max(this.f5314h - this.f5312f, this.f5318l - this.f5316j);
            int max2 = Math.max(this.f5315i - this.f5313g, this.f5319m - this.f5317k);
            int i10 = z10 ? this.f5316j : this.f5312f;
            int i11 = z10 ? this.f5317k : this.f5313g;
            h0.d(this.f5307a, i10, i11, max + i10, max2 + i11);
            this.f5307a.setClipBounds(z10 ? this.f5310d : this.f5308b);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class h extends w {

        /* renamed from: a  reason: collision with root package name */
        boolean f5321a = false;

        /* renamed from: b  reason: collision with root package name */
        final ViewGroup f5322b;

        h(ViewGroup viewGroup) {
            this.f5322b = viewGroup;
        }

        @Override // androidx.transition.w, androidx.transition.Transition.h
        public void onTransitionCancel(Transition transition) {
            g0.b(this.f5322b, false);
            this.f5321a = true;
        }

        @Override // androidx.transition.w, androidx.transition.Transition.h
        public void onTransitionEnd(Transition transition) {
            if (!this.f5321a) {
                g0.b(this.f5322b, false);
            }
            transition.f0(this);
        }

        @Override // androidx.transition.w, androidx.transition.Transition.h
        public void onTransitionPause(Transition transition) {
            g0.b(this.f5322b, false);
        }

        @Override // androidx.transition.w, androidx.transition.Transition.h
        public void onTransitionResume(Transition transition) {
            g0.b(this.f5322b, true);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class i {

        /* renamed from: a  reason: collision with root package name */
        private int f5323a;

        /* renamed from: b  reason: collision with root package name */
        private int f5324b;

        /* renamed from: c  reason: collision with root package name */
        private int f5325c;

        /* renamed from: d  reason: collision with root package name */
        private int f5326d;

        /* renamed from: e  reason: collision with root package name */
        private final View f5327e;

        /* renamed from: f  reason: collision with root package name */
        private int f5328f;

        /* renamed from: g  reason: collision with root package name */
        private int f5329g;

        i(View view) {
            this.f5327e = view;
        }

        private void b() {
            h0.d(this.f5327e, this.f5323a, this.f5324b, this.f5325c, this.f5326d);
            this.f5328f = 0;
            this.f5329g = 0;
        }

        void a(PointF pointF) {
            this.f5325c = Math.round(pointF.x);
            this.f5326d = Math.round(pointF.y);
            int i10 = this.f5329g + 1;
            this.f5329g = i10;
            if (this.f5328f == i10) {
                b();
            }
        }

        void c(PointF pointF) {
            this.f5323a = Math.round(pointF.x);
            this.f5324b = Math.round(pointF.y);
            int i10 = this.f5328f + 1;
            this.f5328f = i10;
            if (i10 == this.f5329g) {
                b();
            }
        }
    }

    private void u0(c0 c0Var) {
        View view = c0Var.f5340b;
        if (view.isLaidOut() || view.getWidth() != 0 || view.getHeight() != 0) {
            c0Var.f5339a.put("android:changeBounds:bounds", new Rect(view.getLeft(), view.getTop(), view.getRight(), view.getBottom()));
            c0Var.f5339a.put("android:changeBounds:parent", c0Var.f5340b.getParent());
            if (this.f5304b0) {
                c0Var.f5339a.put("android:changeBounds:clip", view.getClipBounds());
            }
        }
    }

    @Override // androidx.transition.Transition
    public String[] N() {
        return f5297c0;
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
        if (this.f5304b0 && (rect = (Rect) c0Var.f5340b.getTag(l.f5399b)) != null) {
            c0Var.f5339a.put("android:changeBounds:clip", rect);
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
        Map map = c0Var.f5339a;
        Map map2 = c0Var2.f5339a;
        ViewGroup viewGroup2 = (ViewGroup) map.get("android:changeBounds:parent");
        ViewGroup viewGroup3 = (ViewGroup) map2.get("android:changeBounds:parent");
        if (viewGroup2 == null || viewGroup3 == null) {
            return null;
        }
        View view = c0Var2.f5340b;
        Rect rect3 = (Rect) c0Var.f5339a.get("android:changeBounds:bounds");
        Rect rect4 = (Rect) c0Var2.f5339a.get("android:changeBounds:bounds");
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
        Rect rect5 = (Rect) c0Var.f5339a.get("android:changeBounds:clip");
        Rect rect6 = (Rect) c0Var2.f5339a.get("android:changeBounds:clip");
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
        if (!this.f5304b0) {
            h0.d(view, i16, i18, i20, i22);
            if (i28 == 2) {
                if (i24 == i26 && i25 == i27) {
                    c10 = j.a(view, f5302h0, C().a(i16, i18, i17, i19));
                } else {
                    i iVar = new i(view);
                    ObjectAnimator a11 = j.a(iVar, f5298d0, C().a(i16, i18, i17, i19));
                    ObjectAnimator a12 = j.a(iVar, f5299e0, C().a(i20, i22, i21, i23));
                    AnimatorSet animatorSet = new AnimatorSet();
                    animatorSet.playTogether(a11, a12);
                    animatorSet.addListener(new f(iVar));
                    c10 = animatorSet;
                }
            } else if (i16 == i17 && i18 == i19) {
                c10 = j.a(view, f5300f0, C().a(i20, i22, i21, i23));
            } else {
                c10 = j.a(view, f5301g0, C().a(i16, i18, i17, i19));
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
                a10 = j.a(view, f5302h0, C().a(i16, i18, i17, i19));
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
                objectAnimator = ObjectAnimator.ofObject(view, "clipBounds", f5303i0, rect, rect2);
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
