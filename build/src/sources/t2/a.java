package t2;

import android.view.View;
import android.view.ViewGroup;
import androidx.core.view.n0;
import androidx.core.view.o0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private static final int f49194a = c.f49198b;

    /* renamed from: b  reason: collision with root package name */
    private static final int f49195b = c.f49197a;

    public static final void a(View view) {
        Intrinsics.checkNotNullParameter(view, "<this>");
        for (View view2 : o0.a(view)) {
            c(view2).a();
        }
    }

    public static final void b(ViewGroup viewGroup) {
        Intrinsics.checkNotNullParameter(viewGroup, "<this>");
        for (View view : n0.a(viewGroup)) {
            c(view).a();
        }
    }

    private static final b c(View view) {
        int i10 = f49194a;
        b bVar = (b) view.getTag(i10);
        if (bVar == null) {
            b bVar2 = new b();
            view.setTag(i10, bVar2);
            return bVar2;
        }
        return bVar;
    }

    public static final void d(View view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "<this>");
        view.setTag(f49195b, Boolean.valueOf(z10));
    }
}
