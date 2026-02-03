package jn;

import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {
    public static final ViewGroup a(View view) {
        Intrinsics.checkNotNullParameter(view, "<this>");
        ViewParent parent = view.getParent();
        if (parent instanceof ViewGroup) {
            return (ViewGroup) parent;
        }
        return null;
    }

    public static final View b(View view) {
        Intrinsics.checkNotNullParameter(view, "<this>");
        ViewGroup a10 = a(view);
        if (a10 != null) {
            a10.endViewTransition(view);
            a10.removeView(view);
        }
        view.setVisibility(0);
        view.setTranslationY(0.0f);
        return view;
    }
}
