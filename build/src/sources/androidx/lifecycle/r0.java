package androidx.lifecycle;

import android.view.View;
import android.view.ViewParent;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class r0 {
    public static final LifecycleOwner a(View view) {
        LifecycleOwner lifecycleOwner;
        Intrinsics.checkNotNullParameter(view, "<this>");
        while (view != null) {
            Object tag = view.getTag(k3.a.f32099a);
            if (tag instanceof LifecycleOwner) {
                lifecycleOwner = (LifecycleOwner) tag;
            } else {
                lifecycleOwner = null;
            }
            if (lifecycleOwner != null) {
                return lifecycleOwner;
            }
            ViewParent a10 = f2.b.a(view);
            if (a10 instanceof View) {
                view = (View) a10;
            } else {
                view = null;
            }
        }
        return null;
    }

    public static final void b(View view, LifecycleOwner lifecycleOwner) {
        Intrinsics.checkNotNullParameter(view, "<this>");
        view.setTag(k3.a.f32099a, lifecycleOwner);
    }
}
