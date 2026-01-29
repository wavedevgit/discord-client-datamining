package ff;

import android.app.Activity;
import androidx.fragment.app.FragmentActivity;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    private final Object f25099a;

    public f(Activity activity) {
        gf.q.m(activity, "Activity must not be null");
        this.f25099a = activity;
    }

    public final Activity a() {
        return (Activity) this.f25099a;
    }

    public final FragmentActivity b() {
        return (FragmentActivity) this.f25099a;
    }

    public final boolean c() {
        return this.f25099a instanceof Activity;
    }

    public final boolean d() {
        return this.f25099a instanceof FragmentActivity;
    }
}
