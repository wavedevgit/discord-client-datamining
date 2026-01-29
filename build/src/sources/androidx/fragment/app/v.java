package androidx.fragment.app;

import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class v {
    public static final void a(Fragment fragment, String str, Bundle bundle) {
        fragment.getParentFragmentManager().v1(str, bundle);
    }
}
