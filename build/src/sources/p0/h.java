package p0;

import android.animation.Animator;
import android.animation.ValueAnimator;
import android.content.Context;
import android.util.AttributeSet;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import b0.p;
import java.util.Objects;
import x.n0;
import x.y0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class h extends View {

    /* renamed from: d  reason: collision with root package name */
    private Window f43563d;

    /* renamed from: e  reason: collision with root package name */
    private n0.i f43564e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements n0.i {

        /* renamed from: a  reason: collision with root package name */
        private float f43565a;

        /* renamed from: b  reason: collision with root package name */
        private ValueAnimator f43566b;

        a() {
        }

        @Override // x.n0.i
        public void a(long j10, final n0.j jVar) {
            y0.a("ScreenFlashView", "ScreenFlash#apply");
            this.f43565a = h.this.getBrightness();
            h.this.setBrightness(1.0f);
            ValueAnimator valueAnimator = this.f43566b;
            if (valueAnimator != null) {
                valueAnimator.cancel();
            }
            h hVar = h.this;
            Objects.requireNonNull(jVar);
            this.f43566b = hVar.e(new Runnable() { // from class: p0.g
                @Override // java.lang.Runnable
                public final void run() {
                    n0.j.this.a();
                }
            });
        }

        @Override // x.n0.i
        public void clear() {
            y0.a("ScreenFlashView", "ScreenFlash#clearScreenFlashUi");
            ValueAnimator valueAnimator = this.f43566b;
            if (valueAnimator != null) {
                valueAnimator.cancel();
                this.f43566b = null;
            }
            h.this.setAlpha(0.0f);
            h.this.setBrightness(this.f43565a);
        }
    }

    public h(Context context) {
        this(context, null);
    }

    public static /* synthetic */ void a(h hVar, ValueAnimator valueAnimator) {
        hVar.getClass();
        y0.a("ScreenFlashView", "animateToFullOpacity: value = " + ((Float) valueAnimator.getAnimatedValue()).floatValue());
        hVar.setAlpha(((Float) valueAnimator.getAnimatedValue()).floatValue());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public ValueAnimator e(Runnable runnable) {
        y0.a("ScreenFlashView", "animateToFullOpacity");
        ValueAnimator ofFloat = ValueAnimator.ofFloat(0.0f, 1.0f);
        ofFloat.setDuration(getVisibilityRampUpAnimationDurationMillis());
        ofFloat.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: p0.f
            @Override // android.animation.ValueAnimator.AnimatorUpdateListener
            public final void onAnimationUpdate(ValueAnimator valueAnimator) {
                h.a(h.this, valueAnimator);
            }
        });
        ofFloat.addListener(new b(runnable));
        ofFloat.start();
        return ofFloat;
    }

    private void f(Window window) {
        a aVar;
        if (this.f43563d != window) {
            if (window == null) {
                aVar = null;
            } else {
                aVar = new a();
            }
            this.f43564e = aVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public float getBrightness() {
        Window window = this.f43563d;
        if (window == null) {
            y0.c("ScreenFlashView", "setBrightness: mScreenFlashWindow is null!");
            return Float.NaN;
        }
        return window.getAttributes().screenBrightness;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void setBrightness(float f10) {
        if (this.f43563d == null) {
            y0.c("ScreenFlashView", "setBrightness: mScreenFlashWindow is null!");
        } else if (Float.isNaN(f10)) {
            y0.c("ScreenFlashView", "setBrightness: value is NaN!");
        } else {
            WindowManager.LayoutParams attributes = this.f43563d.getAttributes();
            attributes.screenBrightness = f10;
            this.f43563d.setAttributes(attributes);
            y0.a("ScreenFlashView", "Brightness set to " + attributes.screenBrightness);
        }
    }

    private void setScreenFlashUiInfo(n0.i iVar) {
        y0.a("ScreenFlashView", "setScreenFlashUiInfo: mCameraController is null!");
    }

    public n0.i getScreenFlash() {
        return this.f43564e;
    }

    public long getVisibilityRampUpAnimationDurationMillis() {
        return 1000L;
    }

    public void setController(p0.a aVar) {
        p.a();
    }

    public void setScreenFlashWindow(Window window) {
        p.a();
        f(window);
        this.f43563d = window;
        setScreenFlashUiInfo(getScreenFlash());
    }

    public h(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0);
    }

    public h(Context context, AttributeSet attributeSet, int i10) {
        this(context, attributeSet, i10, 0);
    }

    public h(Context context, AttributeSet attributeSet, int i10, int i11) {
        super(context, attributeSet, i10, i11);
        setBackgroundColor(-1);
        setAlpha(0.0f);
        setElevation(Float.MAX_VALUE);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b implements Animator.AnimatorListener {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Runnable f43568a;

        b(Runnable runnable) {
            this.f43568a = runnable;
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            y0.a("ScreenFlashView", "ScreenFlash#apply: onAnimationEnd");
            Runnable runnable = this.f43568a;
            if (runnable != null) {
                runnable.run();
            }
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationCancel(Animator animator) {
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationRepeat(Animator animator) {
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
        }
    }
}
