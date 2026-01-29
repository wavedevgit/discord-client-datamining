package com.swmansion.reanimated;

import android.graphics.Matrix;
import android.graphics.RectF;
import android.util.Log;
import android.view.View;
import android.view.ViewParent;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.RootViewUtil;
import com.facebook.react.views.scroll.ReactHorizontalScrollView;
import com.facebook.react.views.scroll.ReactScrollView;
import com.facebook.react.views.swiperefresh.ReactSwipeRefreshLayout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class NativeMethodsHelper {
    private static void computeBoundingBox(View view, int[] iArr) {
        RectF rectF = new RectF();
        rectF.set(0.0f, 0.0f, view.getWidth(), view.getHeight());
        mapRectFromViewToWindowCoords(view, rectF);
        iArr[0] = Math.round(rectF.left);
        iArr[1] = Math.round(rectF.top);
        iArr[2] = Math.round(rectF.right - rectF.left);
        iArr[3] = Math.round(rectF.bottom - rectF.top);
    }

    private static ReactScrollView findScrollView(ReactSwipeRefreshLayout reactSwipeRefreshLayout) {
        for (int i10 = 0; i10 < reactSwipeRefreshLayout.getChildCount(); i10++) {
            if (reactSwipeRefreshLayout.getChildAt(i10) instanceof ReactScrollView) {
                return (ReactScrollView) reactSwipeRefreshLayout.getChildAt(i10);
            }
        }
        return null;
    }

    private static void mapRectFromViewToWindowCoords(View view, RectF rectF) {
        Matrix matrix = view.getMatrix();
        if (!matrix.isIdentity()) {
            matrix.mapRect(rectF);
        }
        rectF.offset(view.getLeft(), view.getTop());
        ViewParent parent = view.getParent();
        while (parent instanceof View) {
            View view2 = (View) parent;
            rectF.offset(-view2.getScrollX(), -view2.getScrollY());
            Matrix matrix2 = view2.getMatrix();
            if (!matrix2.isIdentity()) {
                matrix2.mapRect(rectF);
            }
            rectF.offset(view2.getLeft(), view2.getTop());
            parent = view2.getParent();
        }
    }

    public static float[] measure(View view) {
        View view2 = (View) RootViewUtil.getRootView(view);
        if (view2 != null && view != null) {
            computeBoundingBox(view2, r3);
            int i10 = r3[0];
            int i11 = r3[1];
            computeBoundingBox(view, r3);
            int[] iArr = {iArr[0] - i10, iArr[1] - i11};
            float[] fArr = new float[6];
            fArr[0] = PixelUtil.toDIPFromPixel(view.getLeft());
            fArr[1] = PixelUtil.toDIPFromPixel(view.getTop());
            for (int i12 = 2; i12 < 6; i12++) {
                fArr[i12] = PixelUtil.toDIPFromPixel(iArr[i12 - 2]);
            }
            return fArr;
        }
        float[] fArr2 = new float[6];
        fArr2[0] = -1234567.0f;
        return fArr2;
    }

    public static void scrollTo(final View view, double d10, double d11, boolean z10) {
        final int round = Math.round(PixelUtil.toPixelFromDIP(d10));
        final int round2 = Math.round(PixelUtil.toPixelFromDIP(d11));
        boolean z11 = view instanceof ReactHorizontalScrollView;
        if (!z11) {
            if (view instanceof ReactSwipeRefreshLayout) {
                view = findScrollView((ReactSwipeRefreshLayout) view);
            }
            if (!(view instanceof ReactScrollView)) {
                Log.w("REANIMATED", "NativeMethodsHelper: Unhandled scroll view type - allowed only {ReactScrollView, ReactHorizontalScrollView}");
            }
        }
        if (z10) {
            if (z11) {
                view.post(new Runnable() { // from class: com.swmansion.reanimated.a
                    @Override // java.lang.Runnable
                    public final void run() {
                        ((ReactHorizontalScrollView) view).smoothScrollTo(round, round2);
                    }
                });
                return;
            } else {
                view.post(new Runnable() { // from class: com.swmansion.reanimated.b
                    @Override // java.lang.Runnable
                    public final void run() {
                        ((ReactScrollView) view).smoothScrollTo(round, round2);
                    }
                });
                return;
            }
        }
        view.scrollTo(round, round2);
    }
}
