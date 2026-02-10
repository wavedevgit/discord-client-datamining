package d2;

import android.view.animation.Interpolator;
import android.view.animation.PathInterpolator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a {

    /* renamed from: d2.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class C0287a {
        static Interpolator a(float f10, float f11, float f12, float f13) {
            return new PathInterpolator(f10, f11, f12, f13);
        }
    }

    public static Interpolator a(float f10, float f11, float f12, float f13) {
        return C0287a.a(f10, f11, f12, f13);
    }
}
