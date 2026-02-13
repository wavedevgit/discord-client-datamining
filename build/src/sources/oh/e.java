package oh;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.AnimatorSet;
import android.animation.ObjectAnimator;
import android.content.res.Resources;
import android.view.View;
import android.view.ViewGroup;
import androidx.activity.BackEventCompat;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e extends oh.a {

    /* renamed from: g  reason: collision with root package name */
    private final float f40661g;

    /* renamed from: h  reason: collision with root package name */
    private final float f40662h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends AnimatorListenerAdapter {
        a() {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            e.this.f40649b.setTranslationY(0.0f);
            e.this.k(0.0f);
        }
    }

    public e(View view) {
        super(view);
        Resources resources = view.getResources();
        this.f40661g = resources.getDimension(bh.d.f6806q);
        this.f40662h = resources.getDimension(bh.d.f6808r);
    }

    private Animator g() {
        AnimatorSet animatorSet = new AnimatorSet();
        animatorSet.playTogether(ObjectAnimator.ofFloat(this.f40649b, View.SCALE_X, 1.0f), ObjectAnimator.ofFloat(this.f40649b, View.SCALE_Y, 1.0f));
        View view = this.f40649b;
        if (view instanceof ViewGroup) {
            ViewGroup viewGroup = (ViewGroup) view;
            for (int i10 = 0; i10 < viewGroup.getChildCount(); i10++) {
                animatorSet.playTogether(ObjectAnimator.ofFloat(viewGroup.getChildAt(i10), View.SCALE_Y, 1.0f));
            }
        }
        animatorSet.setInterpolator(new h3.b());
        return animatorSet;
    }

    public void f() {
        if (super.b() == null) {
            return;
        }
        Animator g10 = g();
        g10.setDuration(this.f40652e);
        g10.start();
    }

    public void h(BackEventCompat backEventCompat, Animator.AnimatorListener animatorListener) {
        ObjectAnimator ofFloat = ObjectAnimator.ofFloat(this.f40649b, View.TRANSLATION_Y, this.f40649b.getHeight() * this.f40649b.getScaleY());
        ofFloat.setInterpolator(new h3.b());
        ofFloat.setDuration(ch.a.c(this.f40650c, this.f40651d, backEventCompat.a()));
        ofFloat.addListener(new a());
        if (animatorListener != null) {
            ofFloat.addListener(animatorListener);
        }
        ofFloat.start();
    }

    public void i(BackEventCompat backEventCompat, Animator.AnimatorListener animatorListener) {
        Animator g10 = g();
        g10.setDuration(ch.a.c(this.f40650c, this.f40651d, backEventCompat.a()));
        if (animatorListener != null) {
            g10.addListener(animatorListener);
        }
        g10.start();
    }

    public void j(BackEventCompat backEventCompat) {
        super.d(backEventCompat);
    }

    public void k(float f10) {
        float f11;
        float a10 = a(f10);
        float width = this.f40649b.getWidth();
        float height = this.f40649b.getHeight();
        if (width > 0.0f && height > 0.0f) {
            float a11 = 1.0f - ch.a.a(0.0f, this.f40661g / width, a10);
            float a12 = 1.0f - ch.a.a(0.0f, this.f40662h / height, a10);
            if (!Float.isNaN(a11) && !Float.isNaN(a12)) {
                this.f40649b.setScaleX(a11);
                this.f40649b.setPivotY(height);
                this.f40649b.setScaleY(a12);
                View view = this.f40649b;
                if (view instanceof ViewGroup) {
                    ViewGroup viewGroup = (ViewGroup) view;
                    for (int i10 = 0; i10 < viewGroup.getChildCount(); i10++) {
                        View childAt = viewGroup.getChildAt(i10);
                        childAt.setPivotY(-childAt.getTop());
                        if (a12 != 0.0f) {
                            f11 = a11 / a12;
                        } else {
                            f11 = 1.0f;
                        }
                        childAt.setScaleY(f11);
                    }
                }
            }
        }
    }

    public void l(BackEventCompat backEventCompat) {
        if (super.e(backEventCompat) == null) {
            return;
        }
        k(backEventCompat.a());
    }
}
