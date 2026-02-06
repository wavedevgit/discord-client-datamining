package dn;

import android.view.View;
import dn.j0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class g0 {
    public static final void a(View view, Object initialRendering, a0 initialViewEnvironment, Function2 showRendering) {
        j0.a aVar;
        Intrinsics.checkNotNullParameter(view, "<this>");
        Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
        Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
        Intrinsics.checkNotNullParameter(showRendering, "showRendering");
        if (k0.d(view) instanceof j0.a) {
            aVar = new j0.a(initialRendering, initialViewEnvironment, showRendering, e(view));
        } else {
            aVar = new j0.a(initialRendering, initialViewEnvironment, showRendering, null, 8, null);
        }
        k0.e(view, aVar);
    }

    public static final boolean b(View view, Object rendering) {
        Object c10;
        Intrinsics.checkNotNullParameter(view, "<this>");
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        j0 d10 = k0.d(view);
        Object obj = null;
        if (d10 == null) {
            c10 = null;
        } else {
            c10 = d10.c();
        }
        if (c10 != null) {
            obj = c10;
        }
        if (obj == null || !h.a(obj, rendering)) {
            return false;
        }
        return true;
    }

    public static final a0 c(View view) {
        Intrinsics.checkNotNullParameter(view, "<this>");
        j0 d10 = k0.d(view);
        if (d10 == null) {
            return null;
        }
        return d10.a();
    }

    public static final Function2 d(View view) {
        Intrinsics.checkNotNullParameter(view, "<this>");
        j0 d10 = k0.d(view);
        if (d10 == null) {
            return null;
        }
        return d10.b();
    }

    public static final Function1 e(View view) {
        Intrinsics.checkNotNullParameter(view, "<this>");
        return k0.b(view).g();
    }

    public static final void f(View view, Function1 value) {
        Intrinsics.checkNotNullParameter(view, "<this>");
        Intrinsics.checkNotNullParameter(value, "value");
        k0.e(view, j0.a.e(k0.b(view), null, null, null, value, 7, null));
    }

    public static final void g(View view, Object rendering, a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(view, "<this>");
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        j0.b c10 = k0.c(view);
        if (h.a(c10.c(), rendering)) {
            k0.e(view, new j0.b(rendering, viewEnvironment, c10.b()));
            c10.b().invoke(rendering, viewEnvironment);
            return;
        }
        throw new IllegalStateException(("Expected " + view + " to be able to show rendering " + rendering + ", but that did not match previous rendering " + c10.c() + ". Consider using WorkflowViewStub to display arbitrary types.").toString());
    }

    public static final void h(View view) {
        Intrinsics.checkNotNullParameter(view, "<this>");
        j0.a b10 = k0.b(view);
        k0.e(view, new j0.b(b10.c(), b10.a(), b10.b()));
        b10.g().invoke(view);
    }
}
