package ff;

import android.app.Activity;
import androidx.fragment.app.FragmentActivity;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    private final Object f23228a;

    public f(Activity activity) {
        gf.q.m(activity, "Activity must not be null");
        this.f23228a = activity;
    }

    public final boolean a() {
        return this.f23228a instanceof FragmentActivity;
    }

    public final boolean b() {
        return this.f23228a instanceof Activity;
    }

    public final Activity c() {
        return (Activity) this.f23228a;
    }

    public final FragmentActivity d() {
        return (FragmentActivity) this.f23228a;
    }
}
