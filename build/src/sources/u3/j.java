package u3;

import android.view.View;
import android.view.ViewParent;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class j {
    public static final f a(View view) {
        f fVar;
        Intrinsics.checkNotNullParameter(view, "<this>");
        while (view != null) {
            Object tag = view.getTag(a.f51248a);
            if (tag instanceof f) {
                fVar = (f) tag;
            } else {
                fVar = null;
            }
            if (fVar != null) {
                return fVar;
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

    public static final void b(View view, f fVar) {
        Intrinsics.checkNotNullParameter(view, "<this>");
        view.setTag(a.f51248a, fVar);
    }
}
