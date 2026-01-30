package nm;

import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import android.widget.EditText;
import com.facebook.react.bridge.UiThreadUtil;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import kotlin.ranges.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    public static final c f41995a = new c();

    private c() {
    }

    private final EditText b(View view, int i10) {
        ViewGroup viewGroup;
        int i11;
        int i12;
        ViewParent parent = view.getParent();
        if (parent instanceof ViewGroup) {
            viewGroup = (ViewGroup) parent;
        } else {
            viewGroup = null;
        }
        if (viewGroup == null) {
            return null;
        }
        int indexOfChild = viewGroup.indexOfChild(view);
        if (i10 > 0) {
            i11 = indexOfChild + 1;
        } else {
            i11 = indexOfChild - 1;
        }
        if (i10 > 0) {
            i12 = viewGroup.getChildCount();
        } else {
            i12 = -1;
        }
        while (i11 != i12) {
            View childAt = viewGroup.getChildAt(i11);
            Intrinsics.checkNotNull(childAt);
            EditText d10 = d(childAt, i10);
            if (d10 != null) {
                return d10;
            }
            i11 += i10;
        }
        return b(viewGroup, i10);
    }

    private final EditText c(ViewGroup viewGroup, int i10) {
        kotlin.ranges.a p10;
        int childCount = viewGroup.getChildCount();
        if (i10 > 0) {
            p10 = d.u(0, childCount);
        } else {
            p10 = d.p(childCount - 1, 0);
        }
        int d10 = p10.d();
        int e10 = p10.e();
        int f10 = p10.f();
        if ((f10 <= 0 || d10 > e10) && (f10 >= 0 || e10 > d10)) {
            return null;
        }
        while (true) {
            View childAt = viewGroup.getChildAt(d10);
            Intrinsics.checkNotNull(childAt);
            EditText d11 = d(childAt, i10);
            if (d11 != null) {
                return d11;
            }
            if (d10 != e10) {
                d10 += f10;
            } else {
                return null;
            }
        }
    }

    private final EditText d(View view, int i10) {
        if (i(view)) {
            Intrinsics.checkNotNull(view, "null cannot be cast to non-null type android.widget.EditText");
            return (EditText) view;
        } else if (view instanceof ViewGroup) {
            return c((ViewGroup) view, i10);
        } else {
            return null;
        }
    }

    private final EditText e(View view) {
        return b(view, 1);
    }

    private final EditText f(View view) {
        return b(view, -1);
    }

    private static final void h(List list, View view) {
        if (f41995a.i(view)) {
            Intrinsics.checkNotNull(view, "null cannot be cast to non-null type android.widget.EditText");
            list.add((EditText) view);
        } else if (view instanceof ViewGroup) {
            ViewGroup viewGroup = (ViewGroup) view;
            int childCount = viewGroup.getChildCount();
            for (int i10 = 0; i10 < childCount; i10++) {
                h(list, viewGroup.getChildAt(i10));
            }
        }
    }

    private final boolean i(View view) {
        if ((view instanceof EditText) && ((EditText) view).isEnabled()) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void k(EditText editText) {
        fm.c.e(editText);
    }

    public final List g(View view) {
        ArrayList arrayList = new ArrayList();
        h(arrayList, view);
        return arrayList;
    }

    public final void j(String direction, View view) {
        final EditText f10;
        Intrinsics.checkNotNullParameter(direction, "direction");
        Intrinsics.checkNotNullParameter(view, "view");
        if (Intrinsics.areEqual(direction, "next")) {
            f10 = e(view);
        } else {
            f10 = f(view);
        }
        UiThreadUtil.runOnUiThread(new Runnable() { // from class: nm.b
            @Override // java.lang.Runnable
            public final void run() {
                c.k(f10);
            }
        });
    }
}
