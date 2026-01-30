package com.google.android.material.transformation;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.AnimatorSet;
import android.animation.ObjectAnimator;
import android.content.Context;
import android.graphics.Rect;
import android.graphics.RectF;
import android.util.AttributeSet;
import android.util.Pair;
import android.util.Property;
import android.view.View;
import android.view.ViewGroup;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.core.view.h0;
import com.facebook.react.uimanager.ViewProps;
import com.google.android.material.floatingactionbutton.FloatingActionButton;
import java.util.ArrayList;
import java.util.List;
import yg.f;
import zg.d;
import zg.g;
import zg.h;
import zg.i;
@Deprecated
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class FabTransformationBehavior extends ExpandableTransformationBehavior {

    /* renamed from: i  reason: collision with root package name */
    private final Rect f16653i;

    /* renamed from: o  reason: collision with root package name */
    private final RectF f16654o;

    /* renamed from: p  reason: collision with root package name */
    private final RectF f16655p;

    /* renamed from: q  reason: collision with root package name */
    private final int[] f16656q;

    /* renamed from: r  reason: collision with root package name */
    private float f16657r;

    /* renamed from: s  reason: collision with root package name */
    private float f16658s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends AnimatorListenerAdapter {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ boolean f16659a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ View f16660b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ View f16661c;

        a(boolean z10, View view, View view2) {
            this.f16659a = z10;
            this.f16660b = view;
            this.f16661c = view2;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            if (!this.f16659a) {
                this.f16660b.setVisibility(4);
                this.f16661c.setAlpha(1.0f);
                this.f16661c.setVisibility(0);
            }
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            if (this.f16659a) {
                this.f16660b.setVisibility(0);
                this.f16661c.setAlpha(0.0f);
                this.f16661c.setVisibility(4);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        public g f16663a;

        /* renamed from: b  reason: collision with root package name */
        public i f16664b;
    }

    public FabTransformationBehavior() {
        this.f16653i = new Rect();
        this.f16654o = new RectF();
        this.f16655p = new RectF();
        this.f16656q = new int[2];
    }

    private ViewGroup O(View view) {
        View findViewById = view.findViewById(f.E);
        if (findViewById != null) {
            return e0(findViewById);
        }
        return e0(view);
    }

    private void P(View view, b bVar, h hVar, h hVar2, float f10, float f11, float f12, float f13, RectF rectF) {
        float U = U(bVar, hVar, f10, f12);
        float U2 = U(bVar, hVar2, f11, f13);
        Rect rect = this.f16653i;
        view.getWindowVisibleDisplayFrame(rect);
        RectF rectF2 = this.f16654o;
        rectF2.set(rect);
        RectF rectF3 = this.f16655p;
        V(view, rectF3);
        rectF3.offset(U, U2);
        rectF3.intersect(rectF2);
        rectF.set(rectF3);
    }

    private void Q(View view, RectF rectF) {
        V(view, rectF);
        rectF.offset(this.f16657r, this.f16658s);
    }

    private Pair R(float f10, float f11, boolean z10, b bVar) {
        h e10;
        h e11;
        int i10;
        if (f10 != 0.0f && f11 != 0.0f) {
            if ((z10 && f11 < 0.0f) || (!z10 && i10 > 0)) {
                e10 = bVar.f16663a.e("translationXCurveUpwards");
                e11 = bVar.f16663a.e("translationYCurveUpwards");
            } else {
                e10 = bVar.f16663a.e("translationXCurveDownwards");
                e11 = bVar.f16663a.e("translationYCurveDownwards");
            }
        } else {
            e10 = bVar.f16663a.e("translationXLinear");
            e11 = bVar.f16663a.e("translationYLinear");
        }
        return new Pair(e10, e11);
    }

    private float S(View view, View view2, i iVar) {
        float centerX;
        float centerX2;
        float f10;
        RectF rectF = this.f16654o;
        RectF rectF2 = this.f16655p;
        Q(view, rectF);
        V(view2, rectF2);
        int i10 = iVar.f55692a & 7;
        if (i10 != 1) {
            if (i10 != 3) {
                if (i10 != 5) {
                    f10 = 0.0f;
                    return f10 + iVar.f55693b;
                }
                centerX = rectF2.right;
                centerX2 = rectF.right;
            } else {
                centerX = rectF2.left;
                centerX2 = rectF.left;
            }
        } else {
            centerX = rectF2.centerX();
            centerX2 = rectF.centerX();
        }
        f10 = centerX - centerX2;
        return f10 + iVar.f55693b;
    }

    private float T(View view, View view2, i iVar) {
        float centerY;
        float centerY2;
        float f10;
        RectF rectF = this.f16654o;
        RectF rectF2 = this.f16655p;
        Q(view, rectF);
        V(view2, rectF2);
        int i10 = iVar.f55692a & 112;
        if (i10 != 16) {
            if (i10 != 48) {
                if (i10 != 80) {
                    f10 = 0.0f;
                    return f10 + iVar.f55694c;
                }
                centerY = rectF2.bottom;
                centerY2 = rectF.bottom;
            } else {
                centerY = rectF2.top;
                centerY2 = rectF.top;
            }
        } else {
            centerY = rectF2.centerY();
            centerY2 = rectF.centerY();
        }
        f10 = centerY - centerY2;
        return f10 + iVar.f55694c;
    }

    private float U(b bVar, h hVar, float f10, float f11) {
        long c10 = hVar.c();
        long d10 = hVar.d();
        h e10 = bVar.f16663a.e("expansion");
        return zg.a.a(f10, f11, hVar.e().getInterpolation(((float) (((e10.c() + e10.d()) + 17) - c10)) / ((float) d10)));
    }

    private void V(View view, RectF rectF) {
        rectF.set(0.0f, 0.0f, view.getWidth(), view.getHeight());
        int[] iArr = this.f16656q;
        view.getLocationInWindow(iArr);
        rectF.offsetTo(iArr[0], iArr[1]);
        rectF.offset((int) (-view.getTranslationX()), (int) (-view.getTranslationY()));
    }

    private void W(View view, View view2, boolean z10, boolean z11, b bVar, List list, List list2) {
        ViewGroup O;
        ObjectAnimator ofFloat;
        if (!(view2 instanceof ViewGroup) || (O = O(view2)) == null) {
            return;
        }
        if (z10) {
            if (!z11) {
                d.f55680a.set(O, Float.valueOf(0.0f));
            }
            ofFloat = ObjectAnimator.ofFloat(O, d.f55680a, 1.0f);
        } else {
            ofFloat = ObjectAnimator.ofFloat(O, d.f55680a, 0.0f);
        }
        bVar.f16663a.e("contentFade").a(ofFloat);
        list.add(ofFloat);
    }

    private void X(View view, View view2, boolean z10, boolean z11, b bVar, List list, List list2) {
    }

    private void Y(View view, View view2, boolean z10, b bVar, List list) {
        float S = S(view, view2, bVar.f16664b);
        float T = T(view, view2, bVar.f16664b);
        Pair R = R(S, T, z10, bVar);
        h hVar = (h) R.first;
        h hVar2 = (h) R.second;
        Property property = View.TRANSLATION_X;
        if (!z10) {
            S = this.f16657r;
        }
        ObjectAnimator ofFloat = ObjectAnimator.ofFloat(view, property, S);
        Property property2 = View.TRANSLATION_Y;
        if (!z10) {
            T = this.f16658s;
        }
        ObjectAnimator ofFloat2 = ObjectAnimator.ofFloat(view, property2, T);
        hVar.a(ofFloat);
        hVar2.a(ofFloat2);
        list.add(ofFloat);
        list.add(ofFloat2);
    }

    private void Z(View view, View view2, boolean z10, boolean z11, b bVar, List list, List list2) {
        ObjectAnimator ofFloat;
        float u10 = h0.u(view2) - h0.u(view);
        if (z10) {
            if (!z11) {
                view2.setTranslationZ(-u10);
            }
            ofFloat = ObjectAnimator.ofFloat(view2, View.TRANSLATION_Z, 0.0f);
        } else {
            ofFloat = ObjectAnimator.ofFloat(view2, View.TRANSLATION_Z, -u10);
        }
        bVar.f16663a.e(ViewProps.ELEVATION).a(ofFloat);
        list.add(ofFloat);
    }

    private void a0(View view, View view2, boolean z10, boolean z11, b bVar, float f10, float f11, List list, List list2) {
    }

    private void b0(View view, View view2, boolean z10, boolean z11, b bVar, List list, List list2) {
    }

    private void c0(View view, View view2, boolean z10, boolean z11, b bVar, List list, List list2, RectF rectF) {
        h hVar;
        h hVar2;
        ObjectAnimator ofFloat;
        ObjectAnimator ofFloat2;
        float S = S(view, view2, bVar.f16664b);
        float T = T(view, view2, bVar.f16664b);
        Pair R = R(S, T, z10, bVar);
        h hVar3 = (h) R.first;
        h hVar4 = (h) R.second;
        if (z10) {
            if (!z11) {
                view2.setTranslationX(-S);
                view2.setTranslationY(-T);
            }
            ofFloat = ObjectAnimator.ofFloat(view2, View.TRANSLATION_X, 0.0f);
            ofFloat2 = ObjectAnimator.ofFloat(view2, View.TRANSLATION_Y, 0.0f);
            hVar = hVar4;
            hVar2 = hVar3;
            P(view2, bVar, hVar2, hVar, -S, -T, 0.0f, 0.0f, rectF);
        } else {
            hVar = hVar4;
            hVar2 = hVar3;
            ofFloat = ObjectAnimator.ofFloat(view2, View.TRANSLATION_X, -S);
            ofFloat2 = ObjectAnimator.ofFloat(view2, View.TRANSLATION_Y, -T);
        }
        hVar2.a(ofFloat);
        hVar.a(ofFloat2);
        list.add(ofFloat);
        list.add(ofFloat2);
    }

    private ViewGroup e0(View view) {
        if (view instanceof ViewGroup) {
            return (ViewGroup) view;
        }
        return null;
    }

    @Override // com.google.android.material.transformation.ExpandableTransformationBehavior
    protected AnimatorSet N(View view, View view2, boolean z10, boolean z11) {
        b d02 = d0(view2.getContext(), z10);
        if (z10) {
            this.f16657r = view.getTranslationX();
            this.f16658s = view.getTranslationY();
        }
        ArrayList arrayList = new ArrayList();
        ArrayList arrayList2 = new ArrayList();
        Z(view, view2, z10, z11, d02, arrayList, arrayList2);
        RectF rectF = this.f16654o;
        c0(view, view2, z10, z11, d02, arrayList, arrayList2, rectF);
        float width = rectF.width();
        float height = rectF.height();
        Y(view, view2, z10, d02, arrayList);
        b0(view, view2, z10, z11, d02, arrayList, arrayList2);
        a0(view, view2, z10, z11, d02, width, height, arrayList, arrayList2);
        X(view, view2, z10, z11, d02, arrayList, arrayList2);
        W(view, view2, z10, z11, d02, arrayList, arrayList2);
        AnimatorSet animatorSet = new AnimatorSet();
        zg.b.a(animatorSet, arrayList);
        animatorSet.addListener(new a(z10, view2, view));
        int size = arrayList2.size();
        for (int i10 = 0; i10 < size; i10++) {
            animatorSet.addListener((Animator.AnimatorListener) arrayList2.get(i10));
        }
        return animatorSet;
    }

    protected abstract b d0(Context context, boolean z10);

    @Override // com.google.android.material.transformation.ExpandableBehavior, androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public boolean i(CoordinatorLayout coordinatorLayout, View view, View view2) {
        if (view.getVisibility() != 8) {
            if (!(view2 instanceof FloatingActionButton)) {
                return false;
            }
            int expandedComponentIdHint = ((FloatingActionButton) view2).getExpandedComponentIdHint();
            if (expandedComponentIdHint != 0 && expandedComponentIdHint != view.getId()) {
                return false;
            }
            return true;
        }
        throw new IllegalStateException("This behavior cannot be attached to a GONE view. Set the view to INVISIBLE instead.");
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public void k(CoordinatorLayout.f fVar) {
        if (fVar.f2855h == 0) {
            fVar.f2855h = 80;
        }
    }

    public FabTransformationBehavior(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f16653i = new Rect();
        this.f16654o = new RectF();
        this.f16655p = new RectF();
        this.f16656q = new int[2];
    }
}
