package io.sentry.android.replay.util;

import android.graphics.Bitmap;
import android.graphics.Point;
import android.graphics.Rect;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.GradientDrawable;
import android.graphics.drawable.InsetDrawable;
import android.graphics.drawable.VectorDrawable;
import android.os.Build;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import android.view.ViewTreeObserver;
import android.widget.TextView;
import io.sentry.k7;
import java.util.ArrayList;
import java.util.List;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import lr.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class n {
    public static final void a(View view, ViewTreeObserver.OnDrawListener listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        if (view != null && view.getViewTreeObserver() != null && view.getViewTreeObserver().isAlive()) {
            try {
                view.getViewTreeObserver().addOnDrawListener(listener);
            } catch (IllegalStateException unused) {
            }
        }
    }

    public static final void b(View view, ViewTreeObserver.OnPreDrawListener listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        if (view != null && view.getViewTreeObserver() != null && view.getViewTreeObserver().isAlive()) {
            try {
                view.getViewTreeObserver().addOnPreDrawListener(listener);
            } catch (IllegalStateException unused) {
            }
        }
    }

    public static final int c(TextView textView) {
        Intrinsics.checkNotNullParameter(textView, "<this>");
        try {
            return textView.getTotalPaddingTop();
        } catch (NullPointerException unused) {
            return textView.getExtendedPaddingTop();
        }
    }

    public static final List d(m mVar, Rect globalRect, int i10, int i11) {
        int i12;
        Intrinsics.checkNotNullParameter(globalRect, "globalRect");
        if (mVar == null) {
            return CollectionsKt.e(globalRect);
        }
        ArrayList arrayList = new ArrayList();
        int d10 = mVar.d();
        for (int i13 = 0; i13 < d10; i13++) {
            int b10 = (int) mVar.b(i13, mVar.c(i13));
            int g10 = mVar.g(i13);
            int f10 = mVar.f(i13);
            int i14 = f10 - g10;
            if (g10 > 0) {
                i12 = 1;
            } else {
                i12 = 0;
            }
            int b11 = (int) mVar.b(i13, i14 + i12);
            if (b11 == 0 && f10 > 0) {
                b11 = ((int) mVar.b(i13, f10 - 1)) + 1;
            }
            int a10 = mVar.a(i13);
            int h10 = mVar.h(i13);
            Rect rect = new Rect();
            int i15 = globalRect.left + i10 + b10;
            rect.left = i15;
            rect.right = i15 + (b11 - b10);
            int i16 = globalRect.top + i11 + a10;
            rect.top = i16;
            rect.bottom = i16 + (h10 - a10);
            arrayList.add(rect);
        }
        return arrayList;
    }

    public static final boolean e(View view) {
        Intrinsics.checkNotNullParameter(view, "<this>");
        if (view.getWidth() > 0 && view.getHeight() > 0) {
            return true;
        }
        return false;
    }

    public static final boolean f(Drawable drawable) {
        boolean z10;
        boolean z11;
        boolean z12;
        if (drawable instanceof InsetDrawable) {
            z10 = true;
        } else {
            z10 = drawable instanceof ColorDrawable;
        }
        if (z10) {
            z11 = true;
        } else {
            z11 = drawable instanceof VectorDrawable;
        }
        if (z11) {
            z12 = true;
        } else {
            z12 = drawable instanceof GradientDrawable;
        }
        if (z12) {
            return false;
        }
        if (!(drawable instanceof BitmapDrawable)) {
            return true;
        }
        Bitmap bitmap = ((BitmapDrawable) drawable).getBitmap();
        if (bitmap != null && !bitmap.isRecycled() && bitmap.getHeight() > 10 && bitmap.getWidth() > 10) {
            return true;
        }
        return false;
    }

    public static final Pair g(View view) {
        float f10;
        Intrinsics.checkNotNullParameter(view, "<this>");
        if (view.isAttachedToWindow()) {
            if (view.getWindowVisibility() != 0) {
                return v.a(Boolean.FALSE, null);
            }
            ViewParent viewParent = view;
            while (viewParent instanceof View) {
                if (Build.VERSION.SDK_INT >= 29) {
                    f10 = viewParent.getTransitionAlpha();
                } else {
                    f10 = 1.0f;
                }
                View view2 = viewParent;
                if (view2.getAlpha() > 0.0f && f10 > 0.0f && view2.getVisibility() == 0) {
                    viewParent = view2.getParent();
                } else {
                    return v.a(Boolean.FALSE, null);
                }
            }
            Rect rect = new Rect();
            return v.a(Boolean.valueOf(view.getGlobalVisibleRect(rect, new Point())), rect);
        }
        return v.a(Boolean.FALSE, null);
    }

    public static final void h(View view, ViewTreeObserver.OnDrawListener listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        if (view != null && view.getViewTreeObserver() != null && view.getViewTreeObserver().isAlive()) {
            try {
                view.getViewTreeObserver().removeOnDrawListener(listener);
            } catch (IllegalStateException unused) {
            }
        }
    }

    public static final void i(View view, ViewTreeObserver.OnPreDrawListener listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        if (view != null && view.getViewTreeObserver() != null && view.getViewTreeObserver().isAlive()) {
            try {
                view.getViewTreeObserver().removeOnPreDrawListener(listener);
            } catch (IllegalStateException unused) {
            }
        }
    }

    public static final int j(int i10) {
        return i10 | (-16777216);
    }

    public static final void k(View view, io.sentry.android.replay.viewhierarchy.b parentNode, k7 options) {
        Intrinsics.checkNotNullParameter(view, "<this>");
        Intrinsics.checkNotNullParameter(parentNode, "parentNode");
        Intrinsics.checkNotNullParameter(options, "options");
        if ((view instanceof ViewGroup) && !io.sentry.android.replay.viewhierarchy.a.f29657a.a(view, parentNode, options)) {
            ViewGroup viewGroup = (ViewGroup) view;
            if (viewGroup.getChildCount() == 0) {
                return;
            }
            ArrayList arrayList = new ArrayList(viewGroup.getChildCount());
            int childCount = viewGroup.getChildCount();
            for (int i10 = 0; i10 < childCount; i10++) {
                View childAt = viewGroup.getChildAt(i10);
                if (childAt != null) {
                    io.sentry.android.replay.viewhierarchy.b a10 = io.sentry.android.replay.viewhierarchy.b.f29661m.a(childAt, parentNode, viewGroup.indexOfChild(childAt), options);
                    arrayList.add(a10);
                    k(childAt, a10, options);
                }
            }
            parentNode.f(arrayList);
        }
    }
}
