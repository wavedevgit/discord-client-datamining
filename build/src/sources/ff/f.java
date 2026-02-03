package ff;

import android.app.Activity;
import androidx.fragment.app.FragmentActivity;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    private final Object f23902a;

    public f(Activity activity) {
        gf.q.m(activity, "Activity must not be null");
        this.f23902a = activity;
    }

    public final Activity a() {
        return (Activity) this.f23902a;
    }

    public final FragmentActivity b() {
        return (FragmentActivity) this.f23902a;
    }

    public final boolean c() {
        return this.f23902a instanceof Activity;
    }

    public final boolean d() {
        return this.f23902a instanceof FragmentActivity;
    }
}
