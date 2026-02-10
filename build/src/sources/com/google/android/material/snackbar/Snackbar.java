package com.google.android.material.snackbar;

import android.content.Context;
import android.content.res.ColorStateList;
import android.content.res.TypedArray;
import android.graphics.PorterDuff;
import android.graphics.drawable.Drawable;
import android.os.Build;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import android.view.accessibility.AccessibilityManager;
import android.widget.FrameLayout;
import android.widget.TextView;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import bh.h;
import com.google.android.material.snackbar.BaseTransientBottomBar;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class Snackbar extends BaseTransientBottomBar {
    private static final int[] I;
    private static final int[] J;
    private final AccessibilityManager G;
    private boolean H;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class SnackbarLayout extends BaseTransientBottomBar.t {
        public SnackbarLayout(Context context, AttributeSet attributeSet) {
            super(context, attributeSet);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.google.android.material.snackbar.BaseTransientBottomBar.t, android.widget.FrameLayout, android.view.View
        public void onMeasure(int i10, int i11) {
            super.onMeasure(i10, i11);
            int childCount = getChildCount();
            int measuredWidth = (getMeasuredWidth() - getPaddingLeft()) - getPaddingRight();
            for (int i12 = 0; i12 < childCount; i12++) {
                View childAt = getChildAt(i12);
                if (childAt.getLayoutParams().width == -1) {
                    childAt.measure(View.MeasureSpec.makeMeasureSpec(measuredWidth, 1073741824), View.MeasureSpec.makeMeasureSpec(childAt.getMeasuredHeight(), 1073741824));
                }
            }
        }

        @Override // com.google.android.material.snackbar.BaseTransientBottomBar.t, android.view.View
        public /* bridge */ /* synthetic */ void setBackground(Drawable drawable) {
            super.setBackground(drawable);
        }

        @Override // com.google.android.material.snackbar.BaseTransientBottomBar.t, android.view.View
        public /* bridge */ /* synthetic */ void setBackgroundDrawable(Drawable drawable) {
            super.setBackgroundDrawable(drawable);
        }

        @Override // com.google.android.material.snackbar.BaseTransientBottomBar.t, android.view.View
        public /* bridge */ /* synthetic */ void setBackgroundTintList(ColorStateList colorStateList) {
            super.setBackgroundTintList(colorStateList);
        }

        @Override // com.google.android.material.snackbar.BaseTransientBottomBar.t, android.view.View
        public /* bridge */ /* synthetic */ void setBackgroundTintMode(PorterDuff.Mode mode) {
            super.setBackgroundTintMode(mode);
        }

        @Override // com.google.android.material.snackbar.BaseTransientBottomBar.t, android.view.View
        public /* bridge */ /* synthetic */ void setLayoutParams(ViewGroup.LayoutParams layoutParams) {
            super.setLayoutParams(layoutParams);
        }

        @Override // com.google.android.material.snackbar.BaseTransientBottomBar.t, android.view.View
        public /* bridge */ /* synthetic */ void setOnClickListener(View.OnClickListener onClickListener) {
            super.setOnClickListener(onClickListener);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a extends BaseTransientBottomBar.r {
        @Override // com.google.android.material.snackbar.BaseTransientBottomBar.r
        /* renamed from: c */
        public void b(Snackbar snackbar) {
        }
    }

    static {
        int i10 = bh.b.f6726b0;
        I = new int[]{i10};
        J = new int[]{i10, bh.b.f6730d0};
    }

    private Snackbar(Context context, ViewGroup viewGroup, View view, com.google.android.material.snackbar.a aVar) {
        super(context, viewGroup, view, aVar);
        this.G = (AccessibilityManager) viewGroup.getContext().getSystemService("accessibility");
    }

    private static ViewGroup g0(View view) {
        ViewGroup viewGroup = null;
        while (!(view instanceof CoordinatorLayout)) {
            if (view instanceof FrameLayout) {
                if (view.getId() == 16908290) {
                    return (ViewGroup) view;
                }
                viewGroup = (ViewGroup) view;
            }
            if (view != null) {
                ViewParent parent = view.getParent();
                if (parent instanceof View) {
                    view = (View) parent;
                    continue;
                } else {
                    view = null;
                    continue;
                }
            }
            if (view == null) {
                return viewGroup;
            }
        }
        return (ViewGroup) view;
    }

    private SnackbarContentLayout h0() {
        return (SnackbarContentLayout) this.f16205i.getChildAt(0);
    }

    private TextView i0() {
        return h0().getMessageView();
    }

    private static boolean j0(Context context) {
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(J);
        int resourceId = obtainStyledAttributes.getResourceId(0, -1);
        int resourceId2 = obtainStyledAttributes.getResourceId(1, -1);
        obtainStyledAttributes.recycle();
        if (resourceId == -1 || resourceId2 == -1) {
            return false;
        }
        return true;
    }

    public static Snackbar k0(View view, CharSequence charSequence, int i10) {
        return l0(null, view, charSequence, i10);
    }

    private static Snackbar l0(Context context, View view, CharSequence charSequence, int i10) {
        int i11;
        ViewGroup g02 = g0(view);
        if (g02 != null) {
            if (context == null) {
                context = g02.getContext();
            }
            LayoutInflater from = LayoutInflater.from(context);
            if (j0(context)) {
                i11 = h.f6896x;
            } else {
                i11 = h.f6876d;
            }
            SnackbarContentLayout snackbarContentLayout = (SnackbarContentLayout) from.inflate(i11, g02, false);
            Snackbar snackbar = new Snackbar(context, g02, snackbarContentLayout, snackbarContentLayout);
            snackbar.m0(charSequence);
            snackbar.U(i10);
            return snackbar;
        }
        throw new IllegalArgumentException("No suitable parent found from the given view. Please provide a valid view.");
    }

    @Override // com.google.android.material.snackbar.BaseTransientBottomBar
    public int D() {
        int i10;
        int D = super.D();
        if (D == -2) {
            return -2;
        }
        if (Build.VERSION.SDK_INT >= 29) {
            if (this.H) {
                i10 = 4;
            } else {
                i10 = 0;
            }
            return this.G.getRecommendedTimeoutMillis(D, i10 | 3);
        } else if (this.H && this.G.isTouchExplorationEnabled()) {
            return -2;
        } else {
            return D;
        }
    }

    @Override // com.google.android.material.snackbar.BaseTransientBottomBar
    public void Y() {
        super.Y();
    }

    public Snackbar m0(CharSequence charSequence) {
        i0().setText(charSequence);
        return this;
    }

    public Snackbar n0(int i10) {
        i0().setMaxLines(i10);
        return this;
    }

    @Override // com.google.android.material.snackbar.BaseTransientBottomBar
    public void z() {
        super.z();
    }
}
