package bh;

import android.animation.Animator;
import android.animation.TimeInterpolator;
import android.animation.ValueAnimator;
import android.view.animation.AccelerateDecelerateInterpolator;
import android.view.animation.AccelerateInterpolator;
import android.view.animation.DecelerateInterpolator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private long f6767a;

    /* renamed from: b  reason: collision with root package name */
    private long f6768b;

    /* renamed from: c  reason: collision with root package name */
    private TimeInterpolator f6769c;

    /* renamed from: d  reason: collision with root package name */
    private int f6770d;

    /* renamed from: e  reason: collision with root package name */
    private int f6771e;

    public h(long j10, long j11) {
        this.f6769c = null;
        this.f6770d = 0;
        this.f6771e = 1;
        this.f6767a = j10;
        this.f6768b = j11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static h b(ValueAnimator valueAnimator) {
        h hVar = new h(valueAnimator.getStartDelay(), valueAnimator.getDuration(), f(valueAnimator));
        hVar.f6770d = valueAnimator.getRepeatCount();
        hVar.f6771e = valueAnimator.getRepeatMode();
        return hVar;
    }

    private static TimeInterpolator f(ValueAnimator valueAnimator) {
        TimeInterpolator interpolator = valueAnimator.getInterpolator();
        if (!(interpolator instanceof AccelerateDecelerateInterpolator) && interpolator != null) {
            if (interpolator instanceof AccelerateInterpolator) {
                return a.f6756c;
            }
            if (interpolator instanceof DecelerateInterpolator) {
                return a.f6757d;
            }
            return interpolator;
        }
        return a.f6755b;
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
        return this.f6767a;
    }

    public long d() {
        return this.f6768b;
    }

    public TimeInterpolator e() {
        TimeInterpolator timeInterpolator = this.f6769c;
        if (timeInterpolator != null) {
            return timeInterpolator;
        }
        return a.f6755b;
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
        return this.f6770d;
    }

    public int h() {
        return this.f6771e;
    }

    public int hashCode() {
        return (((((((((int) (c() ^ (c() >>> 32))) * 31) + ((int) (d() ^ (d() >>> 32)))) * 31) + e().getClass().hashCode()) * 31) + g()) * 31) + h();
    }

    public String toString() {
        return '\n' + getClass().getName() + '{' + Integer.toHexString(System.identityHashCode(this)) + " delay: " + c() + " duration: " + d() + " interpolator: " + e().getClass() + " repeatCount: " + g() + " repeatMode: " + h() + "}\n";
    }

    public h(long j10, long j11, TimeInterpolator timeInterpolator) {
        this.f6770d = 0;
        this.f6771e = 1;
        this.f6767a = j10;
        this.f6768b = j11;
        this.f6769c = timeInterpolator;
    }
}
