package x5;

import android.animation.Animator;
import android.animation.TimeInterpolator;
import android.animation.ValueAnimator;
import android.os.Build;
import java.util.Set;
import java.util.concurrent.CopyOnWriteArraySet;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a extends ValueAnimator {

    /* renamed from: d  reason: collision with root package name */
    private final Set f53158d = new CopyOnWriteArraySet();

    /* renamed from: e  reason: collision with root package name */
    private final Set f53159e = new CopyOnWriteArraySet();

    /* renamed from: i  reason: collision with root package name */
    private final Set f53160i = new CopyOnWriteArraySet();

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a() {
        for (Animator.AnimatorListener animatorListener : this.f53159e) {
            animatorListener.onAnimationCancel(this);
        }
    }

    @Override // android.animation.Animator
    public void addListener(Animator.AnimatorListener animatorListener) {
        this.f53159e.add(animatorListener);
    }

    @Override // android.animation.Animator
    public void addPauseListener(Animator.AnimatorPauseListener animatorPauseListener) {
        this.f53160i.add(animatorPauseListener);
    }

    @Override // android.animation.ValueAnimator
    public void addUpdateListener(ValueAnimator.AnimatorUpdateListener animatorUpdateListener) {
        this.f53158d.add(animatorUpdateListener);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(boolean z10) {
        for (Animator.AnimatorListener animatorListener : this.f53159e) {
            if (Build.VERSION.SDK_INT >= 26) {
                animatorListener.onAnimationEnd(this, z10);
            } else {
                animatorListener.onAnimationEnd(this);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c() {
        for (Animator.AnimatorPauseListener animatorPauseListener : this.f53160i) {
            animatorPauseListener.onAnimationPause(this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d() {
        for (Animator.AnimatorListener animatorListener : this.f53159e) {
            animatorListener.onAnimationRepeat(this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e() {
        for (Animator.AnimatorPauseListener animatorPauseListener : this.f53160i) {
            animatorPauseListener.onAnimationResume(this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f(boolean z10) {
        for (Animator.AnimatorListener animatorListener : this.f53159e) {
            if (Build.VERSION.SDK_INT >= 26) {
                animatorListener.onAnimationStart(this, z10);
            } else {
                animatorListener.onAnimationStart(this);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g() {
        for (ValueAnimator.AnimatorUpdateListener animatorUpdateListener : this.f53158d) {
            animatorUpdateListener.onAnimationUpdate(this);
        }
    }

    @Override // android.animation.ValueAnimator, android.animation.Animator
    public long getStartDelay() {
        throw new UnsupportedOperationException("LottieAnimator does not support getStartDelay.");
    }

    @Override // android.animation.Animator
    public void removeAllListeners() {
        this.f53159e.clear();
    }

    @Override // android.animation.ValueAnimator
    public void removeAllUpdateListeners() {
        this.f53158d.clear();
    }

    @Override // android.animation.Animator
    public void removeListener(Animator.AnimatorListener animatorListener) {
        this.f53159e.remove(animatorListener);
    }

    @Override // android.animation.Animator
    public void removePauseListener(Animator.AnimatorPauseListener animatorPauseListener) {
        this.f53160i.remove(animatorPauseListener);
    }

    @Override // android.animation.ValueAnimator
    public void removeUpdateListener(ValueAnimator.AnimatorUpdateListener animatorUpdateListener) {
        this.f53158d.remove(animatorUpdateListener);
    }

    @Override // android.animation.ValueAnimator, android.animation.Animator
    public void setInterpolator(TimeInterpolator timeInterpolator) {
        throw new UnsupportedOperationException("LottieAnimator does not support setInterpolator.");
    }

    @Override // android.animation.ValueAnimator, android.animation.Animator
    public void setStartDelay(long j10) {
        throw new UnsupportedOperationException("LottieAnimator does not support setStartDelay.");
    }

    @Override // android.animation.ValueAnimator, android.animation.Animator
    public ValueAnimator setDuration(long j10) {
        throw new UnsupportedOperationException("LottieAnimator does not support setDuration.");
    }
}
