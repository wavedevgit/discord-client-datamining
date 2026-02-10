package rn;

import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.w0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {
    public static final Fragment a(View view) {
        Intrinsics.checkNotNullParameter(view, "<this>");
        try {
            return w0.a(view);
        } catch (IllegalStateException unused) {
            return null;
        }
    }

    public static final ViewGroup b(View view) {
        Intrinsics.checkNotNullParameter(view, "<this>");
        ViewParent parent = view.getParent();
        if (parent instanceof ViewGroup) {
            return (ViewGroup) parent;
        }
        return null;
    }

    public static final View c(View view) {
        Intrinsics.checkNotNullParameter(view, "<this>");
        ViewGroup b10 = b(view);
        if (b10 != null) {
            b10.endViewTransition(view);
            b10.removeView(view);
        }
        view.setVisibility(0);
        view.setTranslationY(0.0f);
        return view;
    }
}
