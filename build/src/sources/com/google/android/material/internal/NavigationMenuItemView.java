package com.google.android.material.internal;

import android.content.Context;
import android.content.res.ColorStateList;
import android.graphics.Typeface;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.StateListDrawable;
import android.util.AttributeSet;
import android.util.TypedValue;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewStub;
import android.widget.CheckedTextView;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import androidx.annotation.NonNull;
import androidx.appcompat.view.menu.k;
import androidx.appcompat.widget.a1;
import androidx.appcompat.widget.i0;
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
import androidx.core.view.h0;
import androidx.recyclerview.widget.RecyclerView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class NavigationMenuItemView extends d implements k.a {
    private static final int[] R = {16842912};
    private int G;
    private boolean H;
    boolean I;
    boolean J;
    private final CheckedTextView K;
    private FrameLayout L;
    private androidx.appcompat.view.menu.g M;
    private ColorStateList N;
    private boolean O;
    private Drawable P;
    private final androidx.core.view.a Q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends androidx.core.view.a {
        a() {
        }

        @Override // androidx.core.view.a
        public void onInitializeAccessibilityNodeInfo(View view, AccessibilityNodeInfoCompat accessibilityNodeInfoCompat) {
            super.onInitializeAccessibilityNodeInfo(view, accessibilityNodeInfoCompat);
            accessibilityNodeInfoCompat.u0(NavigationMenuItemView.this.I);
        }
    }

    public NavigationMenuItemView(@NonNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0);
    }

    private StateListDrawable A() {
        TypedValue typedValue = new TypedValue();
        if (getContext().getTheme().resolveAttribute(f.a.f22891t, typedValue, true)) {
            StateListDrawable stateListDrawable = new StateListDrawable();
            stateListDrawable.addState(R, new ColorDrawable(typedValue.data));
            stateListDrawable.addState(ViewGroup.EMPTY_STATE_SET, new ColorDrawable(0));
            return stateListDrawable;
        }
        return null;
    }

    private boolean B() {
        if (this.M.getTitle() == null && this.M.getIcon() == null && this.M.getActionView() != null) {
            return true;
        }
        return false;
    }

    private void setActionView(View view) {
        if (view != null) {
            if (this.L == null) {
                this.L = (FrameLayout) ((ViewStub) findViewById(yg.f.f54176g)).inflate();
            }
            if (view.getParent() != null) {
                ((ViewGroup) view.getParent()).removeView(view);
            }
            this.L.removeAllViews();
            this.L.addView(view);
        }
    }

    private void z() {
        if (B()) {
            this.K.setVisibility(8);
            FrameLayout frameLayout = this.L;
            if (frameLayout != null) {
                i0.a aVar = (i0.a) frameLayout.getLayoutParams();
                ((LinearLayout.LayoutParams) aVar).width = -1;
                this.L.setLayoutParams(aVar);
                return;
            }
            return;
        }
        this.K.setVisibility(0);
        FrameLayout frameLayout2 = this.L;
        if (frameLayout2 != null) {
            i0.a aVar2 = (i0.a) frameLayout2.getLayoutParams();
            ((LinearLayout.LayoutParams) aVar2).width = -2;
            this.L.setLayoutParams(aVar2);
        }
    }

    @Override // androidx.appcompat.view.menu.k.a
    public void c(androidx.appcompat.view.menu.g gVar, int i10) {
        int i11;
        this.M = gVar;
        if (gVar.getItemId() > 0) {
            setId(gVar.getItemId());
        }
        if (gVar.isVisible()) {
            i11 = 0;
        } else {
            i11 = 8;
        }
        setVisibility(i11);
        if (getBackground() == null) {
            h0.r0(this, A());
        }
        setCheckable(gVar.isCheckable());
        setChecked(gVar.isChecked());
        setEnabled(gVar.isEnabled());
        setTitle(gVar.getTitle());
        setIcon(gVar.getIcon());
        setActionView(gVar.getActionView());
        setContentDescription(gVar.getContentDescription());
        a1.a(this, gVar.getTooltipText());
        z();
    }

    @Override // androidx.appcompat.view.menu.k.a
    public boolean d() {
        return false;
    }

    @Override // androidx.appcompat.view.menu.k.a
    public androidx.appcompat.view.menu.g getItemData() {
        return this.M;
    }

    @Override // android.view.ViewGroup, android.view.View
    protected int[] onCreateDrawableState(int i10) {
        int[] onCreateDrawableState = super.onCreateDrawableState(i10 + 1);
        androidx.appcompat.view.menu.g gVar = this.M;
        if (gVar != null && gVar.isCheckable() && this.M.isChecked()) {
            View.mergeDrawableStates(onCreateDrawableState, R);
        }
        return onCreateDrawableState;
    }

    public void setCheckable(boolean z10) {
        refreshDrawableState();
        if (this.I != z10) {
            this.I = z10;
            this.Q.sendAccessibilityEvent(this.K, RecyclerView.ItemAnimator.FLAG_MOVED);
        }
    }

    public void setChecked(boolean z10) {
        int i10;
        refreshDrawableState();
        this.K.setChecked(z10);
        CheckedTextView checkedTextView = this.K;
        Typeface typeface = checkedTextView.getTypeface();
        if (z10 && this.J) {
            i10 = 1;
        } else {
            i10 = 0;
        }
        checkedTextView.setTypeface(typeface, i10);
    }

    public void setHorizontalPadding(int i10) {
        setPadding(i10, getPaddingTop(), i10, getPaddingBottom());
    }

    public void setIcon(Drawable drawable) {
        if (drawable != null) {
            if (this.O) {
                Drawable.ConstantState constantState = drawable.getConstantState();
                if (constantState != null) {
                    drawable = constantState.newDrawable();
                }
                drawable = s1.a.r(drawable).mutate();
                s1.a.o(drawable, this.N);
            }
            int i10 = this.G;
            drawable.setBounds(0, 0, i10, i10);
        } else if (this.H) {
            if (this.P == null) {
                Drawable f10 = q1.j.f(getResources(), yg.e.f54169k, getContext().getTheme());
                this.P = f10;
                if (f10 != null) {
                    int i11 = this.G;
                    f10.setBounds(0, 0, i11, i11);
                }
            }
            drawable = this.P;
        }
        androidx.core.widget.j.m(this.K, drawable, null, null, null);
    }

    public void setIconPadding(int i10) {
        this.K.setCompoundDrawablePadding(i10);
    }

    public void setIconSize(int i10) {
        this.G = i10;
    }

    void setIconTintList(ColorStateList colorStateList) {
        boolean z10;
        this.N = colorStateList;
        if (colorStateList != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.O = z10;
        androidx.appcompat.view.menu.g gVar = this.M;
        if (gVar != null) {
            setIcon(gVar.getIcon());
        }
    }

    public void setMaxLines(int i10) {
        this.K.setMaxLines(i10);
    }

    public void setNeedsEmptyIcon(boolean z10) {
        this.H = z10;
    }

    public void setTextAppearance(int i10) {
        androidx.core.widget.j.s(this.K, i10);
    }

    public void setTextColor(ColorStateList colorStateList) {
        this.K.setTextColor(colorStateList);
    }

    public void setTitle(CharSequence charSequence) {
        this.K.setText(charSequence);
    }

    public NavigationMenuItemView(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        this.J = true;
        a aVar = new a();
        this.Q = aVar;
        setOrientation(0);
        LayoutInflater.from(context).inflate(yg.h.f54204d, (ViewGroup) this, true);
        setIconSize(context.getResources().getDimensionPixelSize(yg.d.f54133e));
        CheckedTextView checkedTextView = (CheckedTextView) findViewById(yg.f.f54177h);
        this.K = checkedTextView;
        checkedTextView.setDuplicateParentStateEnabled(true);
        h0.n0(checkedTextView, aVar);
    }
}
