package com.google.android.material.chip;

import android.content.Context;
import android.content.res.ColorStateList;
import android.content.res.TypedArray;
import android.graphics.Outline;
import android.graphics.PorterDuff;
import android.graphics.Rect;
import android.graphics.RectF;
import android.graphics.Typeface;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.InsetDrawable;
import android.graphics.drawable.RippleDrawable;
import android.os.Bundle;
import android.text.TextPaint;
import android.text.TextUtils;
import android.util.AttributeSet;
import android.util.Log;
import android.util.TypedValue;
import android.view.KeyEvent;
import android.view.MotionEvent;
import android.view.PointerIcon;
import android.view.View;
import android.view.ViewOutlineProvider;
import android.view.accessibility.AccessibilityNodeInfo;
import android.widget.Checkable;
import android.widget.CompoundButton;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.appcompat.widget.f;
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
import androidx.core.view.h0;
import androidx.customview.widget.ExploreByTouchHelper;
import com.facebook.react.modules.appstate.AppStateModule;
import com.google.android.material.chip.a;
import com.google.android.material.internal.l;
import com.google.android.material.internal.o;
import com.reactnativecommunity.webview.RNCWebViewManager;
import java.util.List;
import lh.d;
import oh.h;
import oh.n;
import yg.i;
import yg.j;
import yg.k;
import zg.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class Chip extends f implements a.InterfaceC0179a, n, Checkable {
    private static final int H = j.f54529p;
    private static final Rect I = new Rect();
    private static final int[] J = {16842913};
    private static final int[] K = {16842911};
    private int A;
    private CharSequence B;
    private final c C;
    private boolean D;
    private final Rect E;
    private final RectF F;
    private final lh.f G;

    /* renamed from: p  reason: collision with root package name */
    private com.google.android.material.chip.a f15837p;

    /* renamed from: q  reason: collision with root package name */
    private InsetDrawable f15838q;

    /* renamed from: r  reason: collision with root package name */
    private RippleDrawable f15839r;

    /* renamed from: s  reason: collision with root package name */
    private View.OnClickListener f15840s;

    /* renamed from: t  reason: collision with root package name */
    private CompoundButton.OnCheckedChangeListener f15841t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f15842u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f15843v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f15844w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f15845x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f15846y;

    /* renamed from: z  reason: collision with root package name */
    private int f15847z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends lh.f {
        a() {
        }

        @Override // lh.f
        public void a(int i10) {
        }

        @Override // lh.f
        public void b(Typeface typeface, boolean z10) {
            CharSequence text;
            Chip chip = Chip.this;
            if (chip.f15837p.M2()) {
                text = Chip.this.f15837p.h1();
            } else {
                text = Chip.this.getText();
            }
            chip.setText(text);
            Chip.this.requestLayout();
            Chip.this.invalidate();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b extends ViewOutlineProvider {
        b() {
        }

        @Override // android.view.ViewOutlineProvider
        public void getOutline(View view, Outline outline) {
            if (Chip.this.f15837p != null) {
                Chip.this.f15837p.getOutline(outline);
            } else {
                outline.setAlpha(0.0f);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class c extends ExploreByTouchHelper {
        c(Chip chip) {
            super(chip);
        }

        @Override // androidx.customview.widget.ExploreByTouchHelper
        protected int getVirtualViewAt(float f10, float f11) {
            if (Chip.this.n() && Chip.this.getCloseIconTouchBounds().contains(f10, f11)) {
                return 1;
            }
            return 0;
        }

        @Override // androidx.customview.widget.ExploreByTouchHelper
        protected void getVisibleVirtualViews(List list) {
            list.add(0);
            if (Chip.this.n() && Chip.this.s() && Chip.this.f15840s != null) {
                list.add(1);
            }
        }

        @Override // androidx.customview.widget.ExploreByTouchHelper
        protected boolean onPerformActionForVirtualView(int i10, int i11, Bundle bundle) {
            if (i11 == 16) {
                if (i10 == 0) {
                    return Chip.this.performClick();
                }
                if (i10 == 1) {
                    return Chip.this.t();
                }
                return false;
            }
            return false;
        }

        @Override // androidx.customview.widget.ExploreByTouchHelper
        protected void onPopulateNodeForHost(AccessibilityNodeInfoCompat accessibilityNodeInfoCompat) {
            accessibilityNodeInfoCompat.u0(Chip.this.r());
            accessibilityNodeInfoCompat.x0(Chip.this.isClickable());
            accessibilityNodeInfoCompat.w0(Chip.this.getAccessibilityClassName());
            accessibilityNodeInfoCompat.b1(Chip.this.getText());
        }

        @Override // androidx.customview.widget.ExploreByTouchHelper
        protected void onPopulateNodeForVirtualView(int i10, AccessibilityNodeInfoCompat accessibilityNodeInfoCompat) {
            String str = "";
            if (i10 == 1) {
                CharSequence closeIconContentDescription = Chip.this.getCloseIconContentDescription();
                if (closeIconContentDescription != null) {
                    accessibilityNodeInfoCompat.A0(closeIconContentDescription);
                } else {
                    CharSequence text = Chip.this.getText();
                    Context context = Chip.this.getContext();
                    int i11 = i.f54501k;
                    if (!TextUtils.isEmpty(text)) {
                        str = text;
                    }
                    accessibilityNodeInfoCompat.A0(context.getString(i11, str).trim());
                }
                accessibilityNodeInfoCompat.s0(Chip.this.getCloseIconTouchBoundsInt());
                accessibilityNodeInfoCompat.b(AccessibilityNodeInfoCompat.a.f3303i);
                accessibilityNodeInfoCompat.C0(Chip.this.isEnabled());
                return;
            }
            accessibilityNodeInfoCompat.A0("");
            accessibilityNodeInfoCompat.s0(Chip.I);
        }

        @Override // androidx.customview.widget.ExploreByTouchHelper
        protected void onVirtualViewKeyboardFocusChanged(int i10, boolean z10) {
            if (i10 == 1) {
                Chip.this.f15845x = z10;
                Chip.this.refreshDrawableState();
            }
        }
    }

    public Chip(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, yg.b.f54356f);
    }

    private void A() {
        com.google.android.material.chip.a aVar;
        if (!TextUtils.isEmpty(getText()) && (aVar = this.f15837p) != null) {
            int J0 = (int) (aVar.J0() + this.f15837p.j1() + this.f15837p.q0());
            int O0 = (int) (this.f15837p.O0() + this.f15837p.k1() + this.f15837p.m0());
            if (this.f15838q != null) {
                Rect rect = new Rect();
                this.f15838q.getPadding(rect);
                O0 += rect.left;
                J0 += rect.right;
            }
            h0.F0(this, O0, getPaddingTop(), J0, getPaddingBottom());
        }
    }

    private void B() {
        TextPaint paint = getPaint();
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            paint.drawableState = aVar.getState();
        }
        d textAppearance = getTextAppearance();
        if (textAppearance != null) {
            textAppearance.n(getContext(), paint, this.G);
        }
    }

    private void C(AttributeSet attributeSet) {
        if (attributeSet != null) {
            if (attributeSet.getAttributeValue("http://schemas.android.com/apk/res/android", AppStateModule.APP_STATE_BACKGROUND) != null) {
                Log.w("Chip", "Do not set the background; Chip manages its own background drawable.");
            }
            if (attributeSet.getAttributeValue("http://schemas.android.com/apk/res/android", "drawableLeft") == null) {
                if (attributeSet.getAttributeValue("http://schemas.android.com/apk/res/android", "drawableStart") == null) {
                    if (attributeSet.getAttributeValue("http://schemas.android.com/apk/res/android", "drawableEnd") == null) {
                        if (attributeSet.getAttributeValue("http://schemas.android.com/apk/res/android", "drawableRight") == null) {
                            if (attributeSet.getAttributeBooleanValue("http://schemas.android.com/apk/res/android", "singleLine", true) && attributeSet.getAttributeIntValue("http://schemas.android.com/apk/res/android", "lines", 1) == 1 && attributeSet.getAttributeIntValue("http://schemas.android.com/apk/res/android", "minLines", 1) == 1 && attributeSet.getAttributeIntValue("http://schemas.android.com/apk/res/android", "maxLines", 1) == 1) {
                                if (attributeSet.getAttributeIntValue("http://schemas.android.com/apk/res/android", "gravity", 8388627) != 8388627) {
                                    Log.w("Chip", "Chip text must be vertically center and start aligned");
                                    return;
                                }
                                return;
                            }
                            throw new UnsupportedOperationException("Chip does not support multi-line text");
                        }
                        throw new UnsupportedOperationException("Please set end drawable using R.attr#closeIcon.");
                    }
                    throw new UnsupportedOperationException("Please set end drawable using R.attr#closeIcon.");
                }
                throw new UnsupportedOperationException("Please set start drawable using R.attr#chipIcon.");
            }
            throw new UnsupportedOperationException("Please set left drawable using R.attr#chipIcon.");
        }
    }

    public static /* synthetic */ void b(Chip chip, CompoundButton compoundButton, boolean z10) {
        CompoundButton.OnCheckedChangeListener onCheckedChangeListener = chip.f15841t;
        if (onCheckedChangeListener != null) {
            onCheckedChangeListener.onCheckedChanged(compoundButton, z10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    @NonNull
    public RectF getCloseIconTouchBounds() {
        this.F.setEmpty();
        if (n() && this.f15840s != null) {
            this.f15837p.Y0(this.F);
        }
        return this.F;
    }

    /* JADX INFO: Access modifiers changed from: private */
    @NonNull
    public Rect getCloseIconTouchBoundsInt() {
        RectF closeIconTouchBounds = getCloseIconTouchBounds();
        this.E.set((int) closeIconTouchBounds.left, (int) closeIconTouchBounds.top, (int) closeIconTouchBounds.right, (int) closeIconTouchBounds.bottom);
        return this.E;
    }

    private d getTextAppearance() {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            return aVar.i1();
        }
        return null;
    }

    private void j(com.google.android.material.chip.a aVar) {
        aVar.p2(this);
    }

    /* JADX WARN: Type inference failed for: r0v0, types: [boolean, int] */
    private int[] k() {
        ?? isEnabled = isEnabled();
        int i10 = isEnabled;
        if (this.f15845x) {
            i10 = isEnabled + 1;
        }
        int i11 = i10;
        if (this.f15844w) {
            i11 = i10 + 1;
        }
        int i12 = i11;
        if (this.f15843v) {
            i12 = i11 + 1;
        }
        int i13 = i12;
        if (isChecked()) {
            i13 = i12 + 1;
        }
        int[] iArr = new int[i13];
        int i14 = 0;
        if (isEnabled()) {
            iArr[0] = 16842910;
            i14 = 1;
        }
        if (this.f15845x) {
            iArr[i14] = 16842908;
            i14++;
        }
        if (this.f15844w) {
            iArr[i14] = 16843623;
            i14++;
        }
        if (this.f15843v) {
            iArr[i14] = 16842919;
            i14++;
        }
        if (isChecked()) {
            iArr[i14] = 16842913;
        }
        return iArr;
    }

    private void m() {
        if (getBackgroundDrawable() == this.f15838q && this.f15837p.getCallback() == null) {
            this.f15837p.setCallback(this.f15838q);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean n() {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null && aVar.R0() != null) {
            return true;
        }
        return false;
    }

    private void o(Context context, AttributeSet attributeSet, int i10) {
        TypedArray i11 = l.i(context, attributeSet, k.f54760x0, i10, H, new int[0]);
        this.f15846y = i11.getBoolean(k.f54572d1, false);
        this.A = (int) Math.ceil(i11.getDimension(k.R0, (float) Math.ceil(o.d(getContext(), 48))));
        i11.recycle();
    }

    private void p() {
        setOutlineProvider(new b());
    }

    private void q(int i10, int i11, int i12, int i13) {
        this.f15838q = new InsetDrawable((Drawable) this.f15837p, i10, i11, i12, i13);
    }

    private void setCloseIconHovered(boolean z10) {
        if (this.f15844w != z10) {
            this.f15844w = z10;
            refreshDrawableState();
        }
    }

    private void setCloseIconPressed(boolean z10) {
        if (this.f15843v != z10) {
            this.f15843v = z10;
            refreshDrawableState();
        }
    }

    private void u() {
        if (this.f15838q != null) {
            this.f15838q = null;
            setMinWidth(0);
            setMinHeight((int) getChipMinHeight());
            y();
        }
    }

    private void w(com.google.android.material.chip.a aVar) {
        if (aVar != null) {
            aVar.p2(null);
        }
    }

    private void x() {
        if (n() && s() && this.f15840s != null) {
            h0.n0(this, this.C);
            this.D = true;
            return;
        }
        h0.n0(this, null);
        this.D = false;
    }

    private void y() {
        if (mh.b.f39081a) {
            z();
            return;
        }
        this.f15837p.L2(true);
        h0.r0(this, getBackgroundDrawable());
        A();
        m();
    }

    private void z() {
        this.f15839r = new RippleDrawable(mh.b.a(this.f15837p.f1()), getBackgroundDrawable(), null);
        this.f15837p.L2(false);
        h0.r0(this, this.f15839r);
        A();
    }

    @Override // com.google.android.material.chip.a.InterfaceC0179a
    public void a() {
        l(this.A);
        requestLayout();
        invalidateOutline();
    }

    @Override // android.view.View
    protected boolean dispatchHoverEvent(MotionEvent motionEvent) {
        if (!this.D) {
            return super.dispatchHoverEvent(motionEvent);
        }
        if (!this.C.dispatchHoverEvent(motionEvent) && !super.dispatchHoverEvent(motionEvent)) {
            return false;
        }
        return true;
    }

    @Override // android.view.View
    public boolean dispatchKeyEvent(KeyEvent keyEvent) {
        if (!this.D) {
            return super.dispatchKeyEvent(keyEvent);
        }
        if (this.C.dispatchKeyEvent(keyEvent) && this.C.getKeyboardFocusedVirtualViewId() != Integer.MIN_VALUE) {
            return true;
        }
        return super.dispatchKeyEvent(keyEvent);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.appcompat.widget.f, android.widget.CompoundButton, android.widget.TextView, android.view.View
    public void drawableStateChanged() {
        boolean z10;
        super.drawableStateChanged();
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null && aVar.p1()) {
            z10 = this.f15837p.l2(k());
        } else {
            z10 = false;
        }
        if (z10) {
            invalidate();
        }
    }

    @Override // android.widget.CheckBox, android.widget.CompoundButton, android.widget.Button, android.widget.TextView, android.view.View
    @NonNull
    public CharSequence getAccessibilityClassName() {
        if (!TextUtils.isEmpty(this.B)) {
            return this.B;
        }
        if (r()) {
            getParent();
            return "android.widget.Button";
        } else if (isClickable()) {
            return "android.widget.Button";
        } else {
            return "android.view.View";
        }
    }

    public Drawable getBackgroundDrawable() {
        InsetDrawable insetDrawable = this.f15838q;
        if (insetDrawable == null) {
            return this.f15837p;
        }
        return insetDrawable;
    }

    public Drawable getCheckedIcon() {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            return aVar.F0();
        }
        return null;
    }

    public ColorStateList getCheckedIconTint() {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            return aVar.G0();
        }
        return null;
    }

    public ColorStateList getChipBackgroundColor() {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            return aVar.H0();
        }
        return null;
    }

    public float getChipCornerRadius() {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar == null) {
            return 0.0f;
        }
        return Math.max(0.0f, aVar.I0());
    }

    public Drawable getChipDrawable() {
        return this.f15837p;
    }

    public float getChipEndPadding() {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            return aVar.J0();
        }
        return 0.0f;
    }

    public Drawable getChipIcon() {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            return aVar.K0();
        }
        return null;
    }

    public float getChipIconSize() {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            return aVar.L0();
        }
        return 0.0f;
    }

    public ColorStateList getChipIconTint() {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            return aVar.M0();
        }
        return null;
    }

    public float getChipMinHeight() {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            return aVar.N0();
        }
        return 0.0f;
    }

    public float getChipStartPadding() {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            return aVar.O0();
        }
        return 0.0f;
    }

    public ColorStateList getChipStrokeColor() {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            return aVar.P0();
        }
        return null;
    }

    public float getChipStrokeWidth() {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            return aVar.Q0();
        }
        return 0.0f;
    }

    @Deprecated
    public CharSequence getChipText() {
        return getText();
    }

    public Drawable getCloseIcon() {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            return aVar.R0();
        }
        return null;
    }

    public CharSequence getCloseIconContentDescription() {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            return aVar.S0();
        }
        return null;
    }

    public float getCloseIconEndPadding() {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            return aVar.T0();
        }
        return 0.0f;
    }

    public float getCloseIconSize() {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            return aVar.U0();
        }
        return 0.0f;
    }

    public float getCloseIconStartPadding() {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            return aVar.V0();
        }
        return 0.0f;
    }

    public ColorStateList getCloseIconTint() {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            return aVar.X0();
        }
        return null;
    }

    @Override // android.widget.TextView
    public TextUtils.TruncateAt getEllipsize() {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            return aVar.b1();
        }
        return null;
    }

    @Override // android.widget.TextView, android.view.View
    public void getFocusedRect(Rect rect) {
        if (this.D && (this.C.getKeyboardFocusedVirtualViewId() == 1 || this.C.getAccessibilityFocusedVirtualViewId() == 1)) {
            rect.set(getCloseIconTouchBoundsInt());
        } else {
            super.getFocusedRect(rect);
        }
    }

    public g getHideMotionSpec() {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            return aVar.c1();
        }
        return null;
    }

    public float getIconEndPadding() {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            return aVar.d1();
        }
        return 0.0f;
    }

    public float getIconStartPadding() {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            return aVar.e1();
        }
        return 0.0f;
    }

    public ColorStateList getRippleColor() {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            return aVar.f1();
        }
        return null;
    }

    @NonNull
    public oh.k getShapeAppearanceModel() {
        return this.f15837p.D();
    }

    public g getShowMotionSpec() {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            return aVar.g1();
        }
        return null;
    }

    public float getTextEndPadding() {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            return aVar.j1();
        }
        return 0.0f;
    }

    public float getTextStartPadding() {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            return aVar.k1();
        }
        return 0.0f;
    }

    public boolean l(int i10) {
        int i11;
        this.A = i10;
        int i12 = 0;
        if (!v()) {
            if (this.f15838q != null) {
                u();
            } else {
                y();
            }
            return false;
        }
        int max = Math.max(0, i10 - this.f15837p.getIntrinsicHeight());
        int max2 = Math.max(0, i10 - this.f15837p.getIntrinsicWidth());
        if (max2 <= 0 && max <= 0) {
            if (this.f15838q != null) {
                u();
            } else {
                y();
            }
            return false;
        }
        if (max2 > 0) {
            i11 = max2 / 2;
        } else {
            i11 = 0;
        }
        if (max > 0) {
            i12 = max / 2;
        }
        if (this.f15838q != null) {
            Rect rect = new Rect();
            this.f15838q.getPadding(rect);
            if (rect.top == i12 && rect.bottom == i12 && rect.left == i11 && rect.right == i11) {
                y();
                return true;
            }
        }
        if (getMinHeight() != i10) {
            setMinHeight(i10);
        }
        if (getMinWidth() != i10) {
            setMinWidth(i10);
        }
        q(i11, i12, i11, i12);
        y();
        return true;
    }

    @Override // android.widget.TextView, android.view.View
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        h.f(this, this.f15837p);
    }

    @Override // android.widget.CompoundButton, android.widget.TextView, android.view.View
    protected int[] onCreateDrawableState(int i10) {
        int[] onCreateDrawableState = super.onCreateDrawableState(i10 + 2);
        if (isChecked()) {
            View.mergeDrawableStates(onCreateDrawableState, J);
        }
        if (r()) {
            View.mergeDrawableStates(onCreateDrawableState, K);
        }
        return onCreateDrawableState;
    }

    @Override // android.widget.TextView, android.view.View
    protected void onFocusChanged(boolean z10, int i10, Rect rect) {
        super.onFocusChanged(z10, i10, rect);
        if (this.D) {
            this.C.onFocusChanged(z10, i10, rect);
        }
    }

    @Override // android.view.View
    public boolean onHoverEvent(MotionEvent motionEvent) {
        int actionMasked = motionEvent.getActionMasked();
        if (actionMasked != 7) {
            if (actionMasked == 10) {
                setCloseIconHovered(false);
            }
        } else {
            setCloseIconHovered(getCloseIconTouchBounds().contains(motionEvent.getX(), motionEvent.getY()));
        }
        return super.onHoverEvent(motionEvent);
    }

    @Override // android.view.View
    public void onInitializeAccessibilityNodeInfo(AccessibilityNodeInfo accessibilityNodeInfo) {
        super.onInitializeAccessibilityNodeInfo(accessibilityNodeInfo);
        accessibilityNodeInfo.setClassName(getAccessibilityClassName());
        accessibilityNodeInfo.setCheckable(r());
        accessibilityNodeInfo.setClickable(isClickable());
        getParent();
    }

    @Override // android.widget.Button, android.widget.TextView, android.view.View
    public PointerIcon onResolvePointerIcon(MotionEvent motionEvent, int i10) {
        if (getCloseIconTouchBounds().contains(motionEvent.getX(), motionEvent.getY()) && isEnabled()) {
            return PointerIcon.getSystemIcon(getContext(), RNCWebViewManager.COMMAND_CLEAR_HISTORY);
        }
        return super.onResolvePointerIcon(motionEvent, i10);
    }

    @Override // android.widget.TextView, android.view.View
    public void onRtlPropertiesChanged(int i10) {
        super.onRtlPropertiesChanged(i10);
        if (this.f15847z != i10) {
            this.f15847z = i10;
            A();
        }
    }

    /* JADX WARN: Code restructure failed: missing block: B:8:0x001e, code lost:
        if (r0 != 3) goto L16;
     */
    @Override // android.widget.TextView, android.view.View
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public boolean onTouchEvent(android.view.MotionEvent r6) {
        /*
            r5 = this;
            int r0 = r6.getActionMasked()
            android.graphics.RectF r1 = r5.getCloseIconTouchBounds()
            float r2 = r6.getX()
            float r3 = r6.getY()
            boolean r1 = r1.contains(r2, r3)
            r2 = 1
            r3 = 0
            if (r0 == 0) goto L3a
            if (r0 == r2) goto L2c
            r4 = 2
            if (r0 == r4) goto L21
            r1 = 3
            if (r0 == r1) goto L35
            goto L40
        L21:
            boolean r0 = r5.f15843v
            if (r0 == 0) goto L40
            if (r1 != 0) goto L2a
            r5.setCloseIconPressed(r3)
        L2a:
            r0 = r2
            goto L41
        L2c:
            boolean r0 = r5.f15843v
            if (r0 == 0) goto L35
            r5.t()
            r0 = r2
            goto L36
        L35:
            r0 = r3
        L36:
            r5.setCloseIconPressed(r3)
            goto L41
        L3a:
            if (r1 == 0) goto L40
            r5.setCloseIconPressed(r2)
            goto L2a
        L40:
            r0 = r3
        L41:
            if (r0 != 0) goto L4b
            boolean r6 = super.onTouchEvent(r6)
            if (r6 == 0) goto L4a
            goto L4b
        L4a:
            return r3
        L4b:
            return r2
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.material.chip.Chip.onTouchEvent(android.view.MotionEvent):boolean");
    }

    public boolean r() {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null && aVar.o1()) {
            return true;
        }
        return false;
    }

    public boolean s() {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null && aVar.q1()) {
            return true;
        }
        return false;
    }

    public void setAccessibilityClassName(CharSequence charSequence) {
        this.B = charSequence;
    }

    @Override // android.view.View
    public void setBackground(Drawable drawable) {
        if (drawable != getBackgroundDrawable() && drawable != this.f15839r) {
            Log.w("Chip", "Do not set the background; Chip manages its own background drawable.");
        } else {
            super.setBackground(drawable);
        }
    }

    @Override // android.view.View
    public void setBackgroundColor(int i10) {
        Log.w("Chip", "Do not set the background color; Chip manages its own background drawable.");
    }

    @Override // androidx.appcompat.widget.f, android.view.View
    public void setBackgroundDrawable(Drawable drawable) {
        if (drawable != getBackgroundDrawable() && drawable != this.f15839r) {
            Log.w("Chip", "Do not set the background drawable; Chip manages its own background drawable.");
        } else {
            super.setBackgroundDrawable(drawable);
        }
    }

    @Override // androidx.appcompat.widget.f, android.view.View
    public void setBackgroundResource(int i10) {
        Log.w("Chip", "Do not set the background resource; Chip manages its own background drawable.");
    }

    @Override // android.view.View
    public void setBackgroundTintList(ColorStateList colorStateList) {
        Log.w("Chip", "Do not set the background tint list; Chip manages its own background drawable.");
    }

    @Override // android.view.View
    public void setBackgroundTintMode(PorterDuff.Mode mode) {
        Log.w("Chip", "Do not set the background tint mode; Chip manages its own background drawable.");
    }

    public void setCheckable(boolean z10) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.x1(z10);
        }
    }

    public void setCheckableResource(int i10) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.y1(i10);
        }
    }

    @Override // android.widget.CompoundButton, android.widget.Checkable
    public void setChecked(boolean z10) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar == null) {
            this.f15842u = z10;
        } else if (aVar.o1()) {
            super.setChecked(z10);
        }
    }

    public void setCheckedIcon(Drawable drawable) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.z1(drawable);
        }
    }

    @Deprecated
    public void setCheckedIconEnabled(boolean z10) {
        setCheckedIconVisible(z10);
    }

    @Deprecated
    public void setCheckedIconEnabledResource(int i10) {
        setCheckedIconVisible(i10);
    }

    public void setCheckedIconResource(int i10) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.A1(i10);
        }
    }

    public void setCheckedIconTint(ColorStateList colorStateList) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.B1(colorStateList);
        }
    }

    public void setCheckedIconTintResource(int i10) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.C1(i10);
        }
    }

    public void setCheckedIconVisible(int i10) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.D1(i10);
        }
    }

    public void setChipBackgroundColor(ColorStateList colorStateList) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.F1(colorStateList);
        }
    }

    public void setChipBackgroundColorResource(int i10) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.G1(i10);
        }
    }

    @Deprecated
    public void setChipCornerRadius(float f10) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.H1(f10);
        }
    }

    @Deprecated
    public void setChipCornerRadiusResource(int i10) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.I1(i10);
        }
    }

    public void setChipDrawable(@NonNull com.google.android.material.chip.a aVar) {
        com.google.android.material.chip.a aVar2 = this.f15837p;
        if (aVar2 != aVar) {
            w(aVar2);
            this.f15837p = aVar;
            aVar.A2(false);
            j(this.f15837p);
            l(this.A);
        }
    }

    public void setChipEndPadding(float f10) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.J1(f10);
        }
    }

    public void setChipEndPaddingResource(int i10) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.K1(i10);
        }
    }

    public void setChipIcon(Drawable drawable) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.L1(drawable);
        }
    }

    @Deprecated
    public void setChipIconEnabled(boolean z10) {
        setChipIconVisible(z10);
    }

    @Deprecated
    public void setChipIconEnabledResource(int i10) {
        setChipIconVisible(i10);
    }

    public void setChipIconResource(int i10) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.M1(i10);
        }
    }

    public void setChipIconSize(float f10) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.N1(f10);
        }
    }

    public void setChipIconSizeResource(int i10) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.O1(i10);
        }
    }

    public void setChipIconTint(ColorStateList colorStateList) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.P1(colorStateList);
        }
    }

    public void setChipIconTintResource(int i10) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.Q1(i10);
        }
    }

    public void setChipIconVisible(int i10) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.R1(i10);
        }
    }

    public void setChipMinHeight(float f10) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.T1(f10);
        }
    }

    public void setChipMinHeightResource(int i10) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.U1(i10);
        }
    }

    public void setChipStartPadding(float f10) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.V1(f10);
        }
    }

    public void setChipStartPaddingResource(int i10) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.W1(i10);
        }
    }

    public void setChipStrokeColor(ColorStateList colorStateList) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.X1(colorStateList);
        }
    }

    public void setChipStrokeColorResource(int i10) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.Y1(i10);
        }
    }

    public void setChipStrokeWidth(float f10) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.Z1(f10);
        }
    }

    public void setChipStrokeWidthResource(int i10) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.a2(i10);
        }
    }

    @Deprecated
    public void setChipText(CharSequence charSequence) {
        setText(charSequence);
    }

    @Deprecated
    public void setChipTextResource(int i10) {
        setText(getResources().getString(i10));
    }

    public void setCloseIcon(Drawable drawable) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.c2(drawable);
        }
        x();
    }

    public void setCloseIconContentDescription(CharSequence charSequence) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.d2(charSequence);
        }
    }

    @Deprecated
    public void setCloseIconEnabled(boolean z10) {
        setCloseIconVisible(z10);
    }

    @Deprecated
    public void setCloseIconEnabledResource(int i10) {
        setCloseIconVisible(i10);
    }

    public void setCloseIconEndPadding(float f10) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.e2(f10);
        }
    }

    public void setCloseIconEndPaddingResource(int i10) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.f2(i10);
        }
    }

    public void setCloseIconResource(int i10) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.g2(i10);
        }
        x();
    }

    public void setCloseIconSize(float f10) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.h2(f10);
        }
    }

    public void setCloseIconSizeResource(int i10) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.i2(i10);
        }
    }

    public void setCloseIconStartPadding(float f10) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.j2(f10);
        }
    }

    public void setCloseIconStartPaddingResource(int i10) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.k2(i10);
        }
    }

    public void setCloseIconTint(ColorStateList colorStateList) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.m2(colorStateList);
        }
    }

    public void setCloseIconTintResource(int i10) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.n2(i10);
        }
    }

    public void setCloseIconVisible(int i10) {
        setCloseIconVisible(getResources().getBoolean(i10));
    }

    @Override // androidx.appcompat.widget.f, android.widget.TextView
    public void setCompoundDrawables(Drawable drawable, Drawable drawable2, Drawable drawable3, Drawable drawable4) {
        if (drawable == null) {
            if (drawable3 == null) {
                super.setCompoundDrawables(drawable, drawable2, drawable3, drawable4);
                return;
            }
            throw new UnsupportedOperationException("Please set end drawable using R.attr#closeIcon.");
        }
        throw new UnsupportedOperationException("Please set start drawable using R.attr#chipIcon.");
    }

    @Override // androidx.appcompat.widget.f, android.widget.TextView
    public void setCompoundDrawablesRelative(Drawable drawable, Drawable drawable2, Drawable drawable3, Drawable drawable4) {
        if (drawable == null) {
            if (drawable3 == null) {
                super.setCompoundDrawablesRelative(drawable, drawable2, drawable3, drawable4);
                return;
            }
            throw new UnsupportedOperationException("Please set end drawable using R.attr#closeIcon.");
        }
        throw new UnsupportedOperationException("Please set start drawable using R.attr#chipIcon.");
    }

    @Override // android.widget.TextView
    public void setCompoundDrawablesRelativeWithIntrinsicBounds(int i10, int i11, int i12, int i13) {
        if (i10 != 0) {
            throw new UnsupportedOperationException("Please set start drawable using R.attr#chipIcon.");
        }
        if (i12 == 0) {
            super.setCompoundDrawablesRelativeWithIntrinsicBounds(i10, i11, i12, i13);
            return;
        }
        throw new UnsupportedOperationException("Please set end drawable using R.attr#closeIcon.");
    }

    @Override // android.widget.TextView
    public void setCompoundDrawablesWithIntrinsicBounds(int i10, int i11, int i12, int i13) {
        if (i10 != 0) {
            throw new UnsupportedOperationException("Please set start drawable using R.attr#chipIcon.");
        }
        if (i12 == 0) {
            super.setCompoundDrawablesWithIntrinsicBounds(i10, i11, i12, i13);
            return;
        }
        throw new UnsupportedOperationException("Please set end drawable using R.attr#closeIcon.");
    }

    @Override // android.view.View
    public void setElevation(float f10) {
        super.setElevation(f10);
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.W(f10);
        }
    }

    @Override // android.widget.TextView
    public void setEllipsize(TextUtils.TruncateAt truncateAt) {
        if (this.f15837p != null) {
            if (truncateAt != TextUtils.TruncateAt.MARQUEE) {
                super.setEllipsize(truncateAt);
                com.google.android.material.chip.a aVar = this.f15837p;
                if (aVar != null) {
                    aVar.q2(truncateAt);
                    return;
                }
                return;
            }
            throw new UnsupportedOperationException("Text within a chip are not allowed to scroll.");
        }
    }

    public void setEnsureMinTouchTargetSize(boolean z10) {
        this.f15846y = z10;
        l(this.A);
    }

    @Override // android.widget.TextView
    public void setGravity(int i10) {
        if (i10 != 8388627) {
            Log.w("Chip", "Chip text must be vertically center and start aligned");
        } else {
            super.setGravity(i10);
        }
    }

    public void setHideMotionSpec(g gVar) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.r2(gVar);
        }
    }

    public void setHideMotionSpecResource(int i10) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.s2(i10);
        }
    }

    public void setIconEndPadding(float f10) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.t2(f10);
        }
    }

    public void setIconEndPaddingResource(int i10) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.u2(i10);
        }
    }

    public void setIconStartPadding(float f10) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.v2(f10);
        }
    }

    public void setIconStartPaddingResource(int i10) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.w2(i10);
        }
    }

    public void setInternalOnCheckedChangeListener(com.google.android.material.internal.f fVar) {
    }

    @Override // android.view.View
    public void setLayoutDirection(int i10) {
        if (this.f15837p == null) {
            return;
        }
        super.setLayoutDirection(i10);
    }

    @Override // android.widget.TextView
    public void setLines(int i10) {
        if (i10 <= 1) {
            super.setLines(i10);
            return;
        }
        throw new UnsupportedOperationException("Chip does not support multi-line text");
    }

    @Override // android.widget.TextView
    public void setMaxLines(int i10) {
        if (i10 <= 1) {
            super.setMaxLines(i10);
            return;
        }
        throw new UnsupportedOperationException("Chip does not support multi-line text");
    }

    @Override // android.widget.TextView
    public void setMaxWidth(int i10) {
        super.setMaxWidth(i10);
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.x2(i10);
        }
    }

    @Override // android.widget.TextView
    public void setMinLines(int i10) {
        if (i10 <= 1) {
            super.setMinLines(i10);
            return;
        }
        throw new UnsupportedOperationException("Chip does not support multi-line text");
    }

    @Override // android.widget.CompoundButton
    public void setOnCheckedChangeListener(CompoundButton.OnCheckedChangeListener onCheckedChangeListener) {
        this.f15841t = onCheckedChangeListener;
    }

    public void setOnCloseIconClickListener(View.OnClickListener onClickListener) {
        this.f15840s = onClickListener;
        x();
    }

    public void setRippleColor(ColorStateList colorStateList) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.y2(colorStateList);
        }
        if (!this.f15837p.m1()) {
            z();
        }
    }

    public void setRippleColorResource(int i10) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.z2(i10);
            if (!this.f15837p.m1()) {
                z();
            }
        }
    }

    @Override // oh.n
    public void setShapeAppearanceModel(@NonNull oh.k kVar) {
        this.f15837p.setShapeAppearanceModel(kVar);
    }

    public void setShowMotionSpec(g gVar) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.B2(gVar);
        }
    }

    public void setShowMotionSpecResource(int i10) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.C2(i10);
        }
    }

    @Override // android.widget.TextView
    public void setSingleLine(boolean z10) {
        if (z10) {
            super.setSingleLine(z10);
            return;
        }
        throw new UnsupportedOperationException("Chip does not support multi-line text");
    }

    @Override // android.widget.TextView
    public void setText(CharSequence charSequence, TextView.BufferType bufferType) {
        CharSequence charSequence2;
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            if (charSequence == null) {
                charSequence = "";
            }
            if (aVar.M2()) {
                charSequence2 = null;
            } else {
                charSequence2 = charSequence;
            }
            super.setText(charSequence2, bufferType);
            com.google.android.material.chip.a aVar2 = this.f15837p;
            if (aVar2 != null) {
                aVar2.D2(charSequence);
            }
        }
    }

    public void setTextAppearance(d dVar) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.E2(dVar);
        }
        B();
    }

    public void setTextAppearanceResource(int i10) {
        setTextAppearance(getContext(), i10);
    }

    public void setTextEndPadding(float f10) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.G2(f10);
        }
    }

    public void setTextEndPaddingResource(int i10) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.H2(i10);
        }
    }

    @Override // android.widget.TextView
    public void setTextSize(int i10, float f10) {
        super.setTextSize(i10, f10);
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.I2(TypedValue.applyDimension(i10, f10, getResources().getDisplayMetrics()));
        }
        B();
    }

    public void setTextStartPadding(float f10) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.J2(f10);
        }
    }

    public void setTextStartPaddingResource(int i10) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.K2(i10);
        }
    }

    public boolean t() {
        boolean z10 = false;
        playSoundEffect(0);
        View.OnClickListener onClickListener = this.f15840s;
        if (onClickListener != null) {
            onClickListener.onClick(this);
            z10 = true;
        }
        if (this.D) {
            this.C.sendEventForVirtualView(1, 1);
        }
        return z10;
    }

    public boolean v() {
        return this.f15846y;
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public Chip(android.content.Context r7, android.util.AttributeSet r8, int r9) {
        /*
            r6 = this;
            int r4 = com.google.android.material.chip.Chip.H
            android.content.Context r7 = rh.a.c(r7, r8, r9, r4)
            r6.<init>(r7, r8, r9)
            android.graphics.Rect r7 = new android.graphics.Rect
            r7.<init>()
            r6.E = r7
            android.graphics.RectF r7 = new android.graphics.RectF
            r7.<init>()
            r6.F = r7
            com.google.android.material.chip.Chip$a r7 = new com.google.android.material.chip.Chip$a
            r7.<init>()
            r6.G = r7
            android.content.Context r0 = r6.getContext()
            r6.C(r8)
            com.google.android.material.chip.a r7 = com.google.android.material.chip.a.v0(r0, r8, r9, r4)
            r6.o(r0, r8, r9)
            r6.setChipDrawable(r7)
            float r1 = androidx.core.view.h0.u(r6)
            r7.W(r1)
            int[] r2 = yg.k.f54760x0
            r1 = 0
            int[] r5 = new int[r1]
            r1 = r8
            r3 = r9
            android.content.res.TypedArray r8 = com.google.android.material.internal.l.i(r0, r1, r2, r3, r4, r5)
            int r9 = yg.k.f54622i1
            boolean r9 = r8.hasValue(r9)
            r8.recycle()
            com.google.android.material.chip.Chip$c r8 = new com.google.android.material.chip.Chip$c
            r8.<init>(r6)
            r6.C = r8
            r6.x()
            if (r9 != 0) goto L59
            r6.p()
        L59:
            boolean r8 = r6.f15842u
            r6.setChecked(r8)
            java.lang.CharSequence r8 = r7.h1()
            r6.setText(r8)
            android.text.TextUtils$TruncateAt r7 = r7.b1()
            r6.setEllipsize(r7)
            r6.B()
            com.google.android.material.chip.a r7 = r6.f15837p
            boolean r7 = r7.M2()
            if (r7 != 0) goto L7e
            r7 = 1
            r6.setLines(r7)
            r6.setHorizontallyScrolling(r7)
        L7e:
            r7 = 8388627(0x800013, float:1.175497E-38)
            r6.setGravity(r7)
            r6.A()
            boolean r7 = r6.v()
            if (r7 == 0) goto L92
            int r7 = r6.A
            r6.setMinHeight(r7)
        L92:
            int r7 = androidx.core.view.h0.z(r6)
            r6.f15847z = r7
            dh.a r7 = new dh.a
            r7.<init>()
            super.setOnCheckedChangeListener(r7)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.material.chip.Chip.<init>(android.content.Context, android.util.AttributeSet, int):void");
    }

    public void setCloseIconVisible(boolean z10) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.o2(z10);
        }
        x();
    }

    public void setCheckedIconVisible(boolean z10) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.E1(z10);
        }
    }

    public void setChipIconVisible(boolean z10) {
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.S1(z10);
        }
    }

    @Override // android.widget.TextView
    public void setCompoundDrawablesRelativeWithIntrinsicBounds(Drawable drawable, Drawable drawable2, Drawable drawable3, Drawable drawable4) {
        if (drawable != null) {
            throw new UnsupportedOperationException("Please set start drawable using R.attr#chipIcon.");
        }
        if (drawable3 == null) {
            super.setCompoundDrawablesRelativeWithIntrinsicBounds(drawable, drawable2, drawable3, drawable4);
            return;
        }
        throw new UnsupportedOperationException("Please set end drawable using R.attr#closeIcon.");
    }

    @Override // android.widget.TextView
    public void setCompoundDrawablesWithIntrinsicBounds(Drawable drawable, Drawable drawable2, Drawable drawable3, Drawable drawable4) {
        if (drawable != null) {
            throw new UnsupportedOperationException("Please set left drawable using R.attr#chipIcon.");
        }
        if (drawable3 == null) {
            super.setCompoundDrawablesWithIntrinsicBounds(drawable, drawable2, drawable3, drawable4);
            return;
        }
        throw new UnsupportedOperationException("Please set right drawable using R.attr#closeIcon.");
    }

    @Override // android.widget.TextView
    public void setTextAppearance(Context context, int i10) {
        super.setTextAppearance(context, i10);
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.F2(i10);
        }
        B();
    }

    @Override // android.widget.TextView
    public void setTextAppearance(int i10) {
        super.setTextAppearance(i10);
        com.google.android.material.chip.a aVar = this.f15837p;
        if (aVar != null) {
            aVar.F2(i10);
        }
        B();
    }
}
