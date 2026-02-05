package bn;

import android.view.View;
import bn.j0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class k0 {
    public static final j0 a(View view) {
        Intrinsics.checkNotNullParameter(view, "<this>");
        j0 d10 = d(view);
        if (d10 != null) {
            return d10;
        }
        throw new IllegalStateException(("Expected " + view + " to have been built by a ViewFactory. Perhaps the factory did not call View.bindShowRendering.").toString());
    }

    public static final j0.a b(View view) {
        j0.a aVar;
        Intrinsics.checkNotNullParameter(view, "<this>");
        j0 a10 = a(view);
        if (a10 instanceof j0.a) {
            aVar = (j0.a) a10;
        } else {
            aVar = null;
        }
        if (aVar != null) {
            return aVar;
        }
        throw new IllegalStateException(("Expected " + view + " to be un-started, but View.start() has been called").toString());
    }

    public static final j0.b c(View view) {
        j0.b bVar;
        Intrinsics.checkNotNullParameter(view, "<this>");
        j0 a10 = a(view);
        if (a10 instanceof j0.b) {
            bVar = (j0.b) a10;
        } else {
            bVar = null;
        }
        if (bVar != null) {
            return bVar;
        }
        throw new IllegalStateException(("Expected " + view + " to have been started, but View.start() has not been called").toString());
    }

    public static final j0 d(View view) {
        Intrinsics.checkNotNullParameter(view, "<this>");
        Object tag = view.getTag(q.f6607e);
        if (tag instanceof j0) {
            return (j0) tag;
        }
        return null;
    }

    public static final void e(View view, j0 value) {
        Intrinsics.checkNotNullParameter(view, "<this>");
        Intrinsics.checkNotNullParameter(value, "value");
        view.setTag(q.f6607e, value);
    }
}
