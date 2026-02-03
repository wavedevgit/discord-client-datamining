package ff;

import android.app.Activity;
import androidx.fragment.app.FragmentActivity;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    private final Object f24310a;

    public f(Activity activity) {
        gf.q.m(activity, "Activity must not be null");
        this.f24310a = activity;
    }

    public final Activity a() {
        return (Activity) this.f24310a;
    }

    public final FragmentActivity b() {
        return (FragmentActivity) this.f24310a;
    }

    public final boolean c() {
        return this.f24310a instanceof Activity;
    }

    public final boolean d() {
        return this.f24310a instanceof FragmentActivity;
    }
}
