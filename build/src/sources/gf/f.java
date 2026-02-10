package gf;

import android.app.Activity;
import androidx.fragment.app.FragmentActivity;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    private final Object f24313a;

    public f(Activity activity) {
        hf.q.m(activity, "Activity must not be null");
        this.f24313a = activity;
    }

    public final boolean a() {
        return this.f24313a instanceof FragmentActivity;
    }

    public final boolean b() {
        return this.f24313a instanceof Activity;
    }

    public final Activity c() {
        return (Activity) this.f24313a;
    }

    public final FragmentActivity d() {
        return (FragmentActivity) this.f24313a;
    }
}
