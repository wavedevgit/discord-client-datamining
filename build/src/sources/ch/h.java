package ch;

import android.animation.Animator;
import android.animation.TimeInterpolator;
import android.animation.ValueAnimator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private long f8289a;

    /* renamed from: b  reason: collision with root package name */
    private long f8290b;

    /* renamed from: c  reason: collision with root package name */
    private TimeInterpolator f8291c;

    /* renamed from: d  reason: collision with root package name */
    private int f8292d;

    /* renamed from: e  reason: collision with root package name */
    private int f8293e;

    public h(long j10, long j11) {
        this.f8291c = null;
        this.f8292d = 0;
        this.f8293e = 1;
        this.f8289a = j10;
        this.f8290b = j11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static h b(ValueAnimator valueAnimator) {
        h hVar = new h(valueAnimator.getStartDelay(), valueAnimator.getDuration(), valueAnimator.getInterpolator());
        hVar.f8292d = valueAnimator.getRepeatCount();
        hVar.f8293e = valueAnimator.getRepeatMode();
        return hVar;
    }

    public void a(Animator animator) {
        animator.setStartDelay(c());
        animator.setDuration(d());
        animator.setInterpolator(e());
        if (animator instanceof ValueAnimator) {
            ValueAnimator valueAnimator = (ValueAnimator) animator;
            valueAnimator.setRepeatCount(f());
            valueAnimator.setRepeatMode(g());
        }
    }

    public long c() {
        return this.f8289a;
    }

    public long d() {
        return this.f8290b;
    }

    public TimeInterpolator e() {
        TimeInterpolator timeInterpolator = this.f8291c;
        if (timeInterpolator != null) {
            return timeInterpolator;
        }
        return a.f8277b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof h)) {
            return false;
        }
        h hVar = (h) obj;
        if (c() != hVar.c() || d() != hVar.d() || f() != hVar.f() || g() != hVar.g()) {
            return false;
        }
        return e().getClass().equals(hVar.e().getClass());
    }

    public int f() {
        return this.f8292d;
    }

    public int g() {
        return this.f8293e;
    }

    public int hashCode() {
        return (((((((((int) (c() ^ (c() >>> 32))) * 31) + ((int) (d() ^ (d() >>> 32)))) * 31) + e().getClass().hashCode()) * 31) + f()) * 31) + g();
    }

    public String toString() {
        return '\n' + getClass().getName() + '{' + Integer.toHexString(System.identityHashCode(this)) + " delay: " + c() + " duration: " + d() + " interpolator: " + e().getClass() + " repeatCount: " + f() + " repeatMode: " + g() + "}\n";
    }

    public h(long j10, long j11, TimeInterpolator timeInterpolator) {
        this.f8292d = 0;
        this.f8293e = 1;
        this.f8289a = j10;
        this.f8290b = j11;
        this.f8291c = timeInterpolator;
    }
}
