package com.th3rdwave.safeareacontext;

import android.graphics.Insets;
import android.graphics.Rect;
import android.os.Build;
import android.view.View;
import android.view.ViewGroup;
import android.view.WindowInsets;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class h {
    public static final c a(ViewGroup rootView, View view) {
        Intrinsics.checkNotNullParameter(rootView, "rootView");
        Intrinsics.checkNotNullParameter(view, "view");
        if (view.getParent() == null) {
            return null;
        }
        Rect rect = new Rect();
        view.getDrawingRect(rect);
        try {
            rootView.offsetDescendantRectToMyCoords(view, rect);
            return new c(rect.left, rect.top, view.getWidth(), view.getHeight());
        } catch (IllegalArgumentException e10) {
            e10.printStackTrace();
            return null;
        }
    }

    private static final a b(View view) {
        if (Build.VERSION.SDK_INT >= 30) {
            return d(view);
        }
        return c(view);
    }

    private static final a c(View view) {
        WindowInsets rootWindowInsets = view.getRootWindowInsets();
        if (rootWindowInsets == null) {
            return null;
        }
        return new a(rootWindowInsets.getSystemWindowInsetTop(), rootWindowInsets.getSystemWindowInsetRight(), Math.min(rootWindowInsets.getSystemWindowInsetBottom(), rootWindowInsets.getStableInsetBottom()), rootWindowInsets.getSystemWindowInsetLeft());
    }

    private static final a d(View view) {
        Insets insets;
        int i10;
        int i11;
        int i12;
        int i13;
        WindowInsets rootWindowInsets = view.getRootWindowInsets();
        if (rootWindowInsets != null && (insets = rootWindowInsets.getInsets(WindowInsets.Type.statusBars() | WindowInsets.Type.displayCutout() | WindowInsets.Type.navigationBars() | WindowInsets.Type.captionBar() | WindowInsets.Type.ime())) != null) {
            i10 = insets.top;
            i11 = insets.right;
            i12 = insets.bottom;
            i13 = insets.left;
            return new a(i10, i11, i12, i13);
        }
        return null;
    }

    public static final a e(View view) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (view.getHeight() == 0) {
            return null;
        }
        View rootView = view.getRootView();
        Intrinsics.checkNotNull(rootView);
        a b10 = b(rootView);
        if (b10 == null) {
            return null;
        }
        Rect rect = new Rect();
        view.getGlobalVisibleRect(rect);
        return new a(Math.max(b10.d() - rect.top, 0.0f), Math.max(Math.min((rect.left + view.getWidth()) - rootView.getWidth(), 0.0f) + b10.c(), 0.0f), Math.max(Math.min((rect.top + view.getHeight()) - rootView.getHeight(), 0.0f) + b10.a(), 0.0f), Math.max(b10.b() - rect.left, 0.0f));
    }
}
