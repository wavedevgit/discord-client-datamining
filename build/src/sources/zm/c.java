package zm;

import android.content.Context;
import android.view.View;
import androidx.lifecycle.LifecycleOwner;
import androidx.lifecycle.r0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import u3.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    public static final c f56074a = new c();

    private c() {
    }

    /* JADX WARN: Removed duplicated region for block: B:6:0x000b  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final java.lang.Object b(android.content.Context r3, kotlin.reflect.KClass r4) {
        /*
            r2 = this;
        L0:
            boolean r0 = r4.isInstance(r3)
            if (r0 == 0) goto Lb
            java.lang.Object r3 = kotlin.reflect.c.a(r4, r3)
            return r3
        Lb:
            boolean r0 = r3 instanceof android.content.ContextWrapper
            r1 = 0
            if (r0 == 0) goto L13
            android.content.ContextWrapper r3 = (android.content.ContextWrapper) r3
            goto L14
        L13:
            r3 = r1
        L14:
            if (r3 != 0) goto L17
            return r1
        L17:
            android.content.Context r3 = r3.getBaseContext()
            if (r3 != 0) goto L0
            return r1
        */
        throw new UnsupportedOperationException("Method not decompiled: zm.c.b(android.content.Context, kotlin.reflect.KClass):java.lang.Object");
    }

    private final u3.f d(View view) {
        u3.f a10 = j.a(view);
        if (a10 == null) {
            Context context = view.getContext();
            Intrinsics.checkNotNullExpressionValue(context, "view.context");
            return (u3.f) b(context, Reflection.getOrCreateKotlinClass(u3.f.class));
        }
        return a10;
    }

    public final LifecycleOwner a(View view) {
        Intrinsics.checkNotNullParameter(view, "view");
        LifecycleOwner a10 = r0.a(view);
        if (a10 == null) {
            Context context = view.getContext();
            Intrinsics.checkNotNullExpressionValue(context, "view.context");
            return (LifecycleOwner) b(context, Reflection.getOrCreateKotlinClass(LifecycleOwner.class));
        }
        return a10;
    }

    public final u3.f c(View view) {
        Intrinsics.checkNotNullParameter(view, "view");
        u3.f d10 = d(view);
        if (d10 != null) {
            return d10;
        }
        throw new IllegalStateException(Intrinsics.stringPlus("Expected to find a SavedStateRegistryOwner either in a parent view or the Context of ", view).toString());
    }
}
