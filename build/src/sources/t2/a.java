package t2;

import android.view.View;
import android.view.ViewGroup;
import androidx.core.view.o0;
import androidx.core.view.p0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private static final int f49004a = c.f49008b;

    /* renamed from: b  reason: collision with root package name */
    private static final int f49005b = c.f49007a;

    public static final void a(View view) {
        Intrinsics.checkNotNullParameter(view, "<this>");
        for (View view2 : p0.a(view)) {
            c(view2).a();
        }
    }

    public static final void b(ViewGroup viewGroup) {
        Intrinsics.checkNotNullParameter(viewGroup, "<this>");
        for (View view : o0.a(viewGroup)) {
            c(view).a();
        }
    }

    private static final b c(View view) {
        int i10 = f49004a;
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
        view.setTag(f49005b, Boolean.valueOf(z10));
    }
}
