package x;

import android.graphics.PointF;
import android.util.Rational;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class c1 {

    /* renamed from: a  reason: collision with root package name */
    private Rational f54157a;

    public c1() {
        this(null);
    }

    public static float d() {
        return 0.15f;
    }

    protected abstract PointF a(float f10, float f11);

    public final b1 b(float f10, float f11) {
        return c(f10, f11, d());
    }

    public final b1 c(float f10, float f11, float f12) {
        PointF a10 = a(f10, f11);
        return new b1(a10.x, a10.y, f12, this.f54157a);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void e(Rational rational) {
        this.f54157a = rational;
    }

    public c1(Rational rational) {
        this.f54157a = rational;
    }
}
