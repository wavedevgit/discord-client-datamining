package jh;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.AnimatorSet;
import android.animation.ObjectAnimator;
import android.animation.ValueAnimator;
import android.content.res.Resources;
import android.util.Property;
import android.view.View;
import android.view.ViewGroup;
import androidx.activity.BackEventCompat;
import androidx.core.view.h0;
import androidx.core.view.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class f extends jh.a {

    /* renamed from: g  reason: collision with root package name */
    private final float f31780g;

    /* renamed from: h  reason: collision with root package name */
    private final float f31781h;

    /* renamed from: i  reason: collision with root package name */
    private final float f31782i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends AnimatorListenerAdapter {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ boolean f31783a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ int f31784b;

        a(boolean z10, int i10) {
            this.f31783a = z10;
            this.f31784b = i10;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            f.this.f31765b.setTranslationX(0.0f);
            f.this.k(0.0f, this.f31783a, this.f31784b);
        }
    }

    public f(View view) {
        super(view);
        Resources resources = view.getResources();
        this.f31780g = resources.getDimension(yg.d.f54386l);
        this.f31781h = resources.getDimension(yg.d.f54385k);
        this.f31782i = resources.getDimension(yg.d.f54387m);
    }

    private boolean g(int i10, int i11) {
        if ((j.b(i10, h0.z(this.f31765b)) & i11) == i11) {
            return true;
        }
        return false;
    }

    private int i(boolean z10) {
        ViewGroup.LayoutParams layoutParams = this.f31765b.getLayoutParams();
        if (layoutParams instanceof ViewGroup.MarginLayoutParams) {
            ViewGroup.MarginLayoutParams marginLayoutParams = (ViewGroup.MarginLayoutParams) layoutParams;
            if (z10) {
                return marginLayoutParams.leftMargin;
            }
            return marginLayoutParams.rightMargin;
        }
        return 0;
    }

    public void f() {
        if (super.b() == null) {
            return;
        }
        AnimatorSet animatorSet = new AnimatorSet();
        animatorSet.playTogether(ObjectAnimator.ofFloat(this.f31765b, View.SCALE_X, 1.0f), ObjectAnimator.ofFloat(this.f31765b, View.SCALE_Y, 1.0f));
        View view = this.f31765b;
        if (view instanceof ViewGroup) {
            ViewGroup viewGroup = (ViewGroup) view;
            for (int i10 = 0; i10 < viewGroup.getChildCount(); i10++) {
                animatorSet.playTogether(ObjectAnimator.ofFloat(viewGroup.getChildAt(i10), View.SCALE_Y, 1.0f));
            }
        }
        animatorSet.setDuration(this.f31768e);
        animatorSet.start();
    }

    public void h(BackEventCompat backEventCompat, int i10, Animator.AnimatorListener animatorListener, ValueAnimator.AnimatorUpdateListener animatorUpdateListener) {
        boolean z10;
        if (backEventCompat.b() == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        boolean g10 = g(i10, 3);
        float width = (this.f31765b.getWidth() * this.f31765b.getScaleX()) + i(g10);
        View view = this.f31765b;
        Property property = View.TRANSLATION_X;
        if (g10) {
            width = -width;
        }
        ObjectAnimator ofFloat = ObjectAnimator.ofFloat(view, property, width);
        if (animatorUpdateListener != null) {
            ofFloat.addUpdateListener(animatorUpdateListener);
        }
        ofFloat.setInterpolator(new h3.b());
        ofFloat.setDuration(zg.a.c(this.f31766c, this.f31767d, backEventCompat.a()));
        ofFloat.addListener(new a(z10, i10));
        if (animatorListener != null) {
            ofFloat.addListener(animatorListener);
        }
        ofFloat.start();
    }

    public void j(BackEventCompat backEventCompat) {
        super.d(backEventCompat);
    }

    public void k(float f10, boolean z10, int i10) {
        boolean z11;
        int i11;
        float f11;
        float f12;
        float a10 = a(f10);
        boolean g10 = g(i10, 3);
        if (z10 == g10) {
            z11 = true;
        } else {
            z11 = false;
        }
        int width = this.f31765b.getWidth();
        int height = this.f31765b.getHeight();
        float f13 = width;
        if (f13 > 0.0f) {
            float f14 = height;
            if (f14 > 0.0f) {
                float f15 = this.f31780g / f13;
                float f16 = this.f31781h / f13;
                float f17 = this.f31782i / f14;
                View view = this.f31765b;
                if (g10) {
                    f13 = 0.0f;
                }
                view.setPivotX(f13);
                if (!z11) {
                    f16 = -f15;
                }
                float a11 = zg.a.a(0.0f, f16, a10);
                float f18 = a11 + 1.0f;
                this.f31765b.setScaleX(f18);
                float a12 = 1.0f - zg.a.a(0.0f, f17, a10);
                this.f31765b.setScaleY(a12);
                View view2 = this.f31765b;
                if (view2 instanceof ViewGroup) {
                    ViewGroup viewGroup = (ViewGroup) view2;
                    for (int i12 = 0; i12 < viewGroup.getChildCount(); i12++) {
                        View childAt = viewGroup.getChildAt(i12);
                        if (g10) {
                            i11 = (width - childAt.getRight()) + childAt.getWidth();
                        } else {
                            i11 = -childAt.getLeft();
                        }
                        childAt.setPivotX(i11);
                        childAt.setPivotY(-childAt.getTop());
                        if (z11) {
                            f11 = 1.0f - a11;
                        } else {
                            f11 = 1.0f;
                        }
                        if (a12 != 0.0f) {
                            f12 = (f18 / a12) * f11;
                        } else {
                            f12 = 1.0f;
                        }
                        childAt.setScaleX(f11);
                        childAt.setScaleY(f12);
                    }
                }
            }
        }
    }

    public void l(BackEventCompat backEventCompat, int i10) {
        boolean z10;
        if (super.e(backEventCompat) == null) {
            return;
        }
        if (backEventCompat.b() == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        k(backEventCompat.a(), z10, i10);
    }
}
