package ch;

import android.animation.Animator;
import android.animation.TimeInterpolator;
import android.animation.ValueAnimator;
import android.view.animation.AccelerateDecelerateInterpolator;
import android.view.animation.AccelerateInterpolator;
import android.view.animation.DecelerateInterpolator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private long f7608a;

    /* renamed from: b  reason: collision with root package name */
    private long f7609b;

    /* renamed from: c  reason: collision with root package name */
    private TimeInterpolator f7610c;

    /* renamed from: d  reason: collision with root package name */
    private int f7611d;

    /* renamed from: e  reason: collision with root package name */
    private int f7612e;

    public h(long j10, long j11) {
        this.f7610c = null;
        this.f7611d = 0;
        this.f7612e = 1;
        this.f7608a = j10;
        this.f7609b = j11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static h b(ValueAnimator valueAnimator) {
        h hVar = new h(valueAnimator.getStartDelay(), valueAnimator.getDuration(), f(valueAnimator));
        hVar.f7611d = valueAnimator.getRepeatCount();
        hVar.f7612e = valueAnimator.getRepeatMode();
        return hVar;
    }

    private static TimeInterpolator f(ValueAnimator valueAnimator) {
        TimeInterpolator interpolator = valueAnimator.getInterpolator();
        if (!(interpolator instanceof AccelerateDecelerateInterpolator) && interpolator != null) {
            if (interpolator instanceof AccelerateInterpolator) {
                return a.f7597c;
            }
            if (interpolator instanceof DecelerateInterpolator) {
                return a.f7598d;
            }
            return interpolator;
        }
        return a.f7596b;
    }

    public void a(Animator animator) {
        animator.setStartDelay(c());
        animator.setDuration(d());
        animator.setInterpolator(e());
        if (animator instanceof ValueAnimator) {
            ValueAnimator valueAnimator = (ValueAnimator) animator;
            valueAnimator.setRepeatCount(g());
            valueAnimator.setRepeatMode(h());
        }
    }

    public long c() {
        return this.f7608a;
    }

    public long d() {
        return this.f7609b;
    }

    public TimeInterpolator e() {
        TimeInterpolator timeInterpolator = this.f7610c;
        if (timeInterpolator != null) {
            return timeInterpolator;
        }
        return a.f7596b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof h)) {
            return false;
        }
        h hVar = (h) obj;
        if (c() != hVar.c() || d() != hVar.d() || g() != hVar.g() || h() != hVar.h()) {
            return false;
        }
        return e().getClass().equals(hVar.e().getClass());
    }

    public int g() {
        return this.f7611d;
    }

    public int h() {
        return this.f7612e;
    }

    public int hashCode() {
        return (((((((((int) (c() ^ (c() >>> 32))) * 31) + ((int) (d() ^ (d() >>> 32)))) * 31) + e().getClass().hashCode()) * 31) + g()) * 31) + h();
    }

    public String toString() {
        return '\n' + getClass().getName() + '{' + Integer.toHexString(System.identityHashCode(this)) + " delay: " + c() + " duration: " + d() + " interpolator: " + e().getClass() + " repeatCount: " + g() + " repeatMode: " + h() + "}\n";
    }

    public h(long j10, long j11, TimeInterpolator timeInterpolator) {
        this.f7611d = 0;
        this.f7612e = 1;
        this.f7608a = j10;
        this.f7609b = j11;
        this.f7610c = timeInterpolator;
    }
}
