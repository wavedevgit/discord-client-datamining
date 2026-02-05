package ah;

import android.animation.Animator;
import android.animation.TimeInterpolator;
import android.animation.ValueAnimator;
import android.view.animation.AccelerateDecelerateInterpolator;
import android.view.animation.AccelerateInterpolator;
import android.view.animation.DecelerateInterpolator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private long f638a;

    /* renamed from: b  reason: collision with root package name */
    private long f639b;

    /* renamed from: c  reason: collision with root package name */
    private TimeInterpolator f640c;

    /* renamed from: d  reason: collision with root package name */
    private int f641d;

    /* renamed from: e  reason: collision with root package name */
    private int f642e;

    public h(long j10, long j11) {
        this.f640c = null;
        this.f641d = 0;
        this.f642e = 1;
        this.f638a = j10;
        this.f639b = j11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static h b(ValueAnimator valueAnimator) {
        h hVar = new h(valueAnimator.getStartDelay(), valueAnimator.getDuration(), f(valueAnimator));
        hVar.f641d = valueAnimator.getRepeatCount();
        hVar.f642e = valueAnimator.getRepeatMode();
        return hVar;
    }

    private static TimeInterpolator f(ValueAnimator valueAnimator) {
        TimeInterpolator interpolator = valueAnimator.getInterpolator();
        if (!(interpolator instanceof AccelerateDecelerateInterpolator) && interpolator != null) {
            if (interpolator instanceof AccelerateInterpolator) {
                return a.f627c;
            }
            if (interpolator instanceof DecelerateInterpolator) {
                return a.f628d;
            }
            return interpolator;
        }
        return a.f626b;
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
        return this.f638a;
    }

    public long d() {
        return this.f639b;
    }

    public TimeInterpolator e() {
        TimeInterpolator timeInterpolator = this.f640c;
        if (timeInterpolator != null) {
            return timeInterpolator;
        }
        return a.f626b;
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
        return this.f641d;
    }

    public int h() {
        return this.f642e;
    }

    public int hashCode() {
        return (((((((((int) (c() ^ (c() >>> 32))) * 31) + ((int) (d() ^ (d() >>> 32)))) * 31) + e().getClass().hashCode()) * 31) + g()) * 31) + h();
    }

    public String toString() {
        return '\n' + getClass().getName() + '{' + Integer.toHexString(System.identityHashCode(this)) + " delay: " + c() + " duration: " + d() + " interpolator: " + e().getClass() + " repeatCount: " + g() + " repeatMode: " + h() + "}\n";
    }

    public h(long j10, long j11, TimeInterpolator timeInterpolator) {
        this.f641d = 0;
        this.f642e = 1;
        this.f638a = j10;
        this.f639b = j11;
        this.f640c = timeInterpolator;
    }
}
