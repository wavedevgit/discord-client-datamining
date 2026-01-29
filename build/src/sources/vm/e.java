package vm;

import android.view.View;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class e {
    private static final j a(View view) {
        return (j) view.getTag(q.f51282c);
    }

    /* JADX WARN: Removed duplicated region for block: B:7:0x000c  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final androidx.activity.z b(android.content.Context r2) {
        /*
            java.lang.String r0 = "<this>"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r2, r0)
        L5:
            boolean r0 = r2 instanceof androidx.activity.z
            if (r0 == 0) goto Lc
            androidx.activity.z r2 = (androidx.activity.z) r2
            return r2
        Lc:
            boolean r0 = r2 instanceof android.content.ContextWrapper
            r1 = 0
            if (r0 == 0) goto L14
            android.content.ContextWrapper r2 = (android.content.ContextWrapper) r2
            goto L15
        L14:
            r2 = r1
        L15:
            if (r2 != 0) goto L18
            return r1
        L18:
            android.content.Context r2 = r2.getBaseContext()
            if (r2 != 0) goto L5
            return r1
        */
        throw new UnsupportedOperationException("Method not decompiled: vm.e.b(android.content.Context):androidx.activity.z");
    }

    public static final void c(View view, Function0 function0) {
        j jVar;
        Intrinsics.checkNotNullParameter(view, "<this>");
        j a10 = a(view);
        if (a10 != null) {
            a10.b();
        }
        if (function0 == null) {
            jVar = null;
        } else {
            j jVar2 = new j(view, function0);
            jVar2.start();
            jVar = jVar2;
        }
        view.setTag(q.f51282c, jVar);
    }
}
