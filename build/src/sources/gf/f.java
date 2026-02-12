package gf;

import android.app.Activity;
import androidx.fragment.app.FragmentActivity;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    private final Object f25614a;

    public f(Activity activity) {
        hf.q.m(activity, "Activity must not be null");
        this.f25614a = activity;
    }

    public final boolean a() {
        return this.f25614a instanceof FragmentActivity;
    }

    public final boolean b() {
        return this.f25614a instanceof Activity;
    }

    public final Activity c() {
        return (Activity) this.f25614a;
    }

    public final FragmentActivity d() {
        return (FragmentActivity) this.f25614a;
    }
}
