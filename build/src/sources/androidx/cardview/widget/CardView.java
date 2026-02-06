package androidx.cardview.widget;

import android.content.Context;
import android.content.res.ColorStateList;
import android.content.res.TypedArray;
import android.graphics.Color;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.util.AttributeSet;
import android.view.View;
import android.widget.FrameLayout;
import androidx.annotation.NonNull;
import t0.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class CardView extends FrameLayout {
    private static final int[] COLOR_BACKGROUND_ATTR = {16842801};
    private static final CardViewImpl IMPL;
    private final CardViewDelegate mCardViewDelegate;
    private boolean mCompatPadding;
    final Rect mContentPadding;
    private boolean mPreventCornerOverlap;
    final Rect mShadowBounds;
    int mUserSetMinHeight;
    int mUserSetMinWidth;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements CardViewDelegate {

        /* renamed from: a  reason: collision with root package name */
        private Drawable f2607a;

        a() {
        }

        @Override // androidx.cardview.widget.CardViewDelegate
        public void a(int i10, int i11, int i12, int i13) {
            CardView.this.mShadowBounds.set(i10, i11, i12, i13);
            CardView cardView = CardView.this;
            Rect rect = cardView.mContentPadding;
            CardView.super.setPadding(i10 + rect.left, i11 + rect.top, i12 + rect.right, i13 + rect.bottom);
        }

        @Override // androidx.cardview.widget.CardViewDelegate
        public void b(Drawable drawable) {
            this.f2607a = drawable;
            CardView.this.setBackgroundDrawable(drawable);
        }

        @Override // androidx.cardview.widget.CardViewDelegate
        public boolean c() {
            return CardView.this.getUseCompatPadding();
        }

        @Override // androidx.cardview.widget.CardViewDelegate
        public Drawable d() {
            return this.f2607a;
        }

        @Override // androidx.cardview.widget.CardViewDelegate
        public boolean e() {
            return CardView.this.getPreventCornerOverlap();
        }

        @Override // androidx.cardview.widget.CardViewDelegate
        public View f() {
            return CardView.this;
        }
    }

    static {
        androidx.cardview.widget.a aVar = new androidx.cardview.widget.a();
        IMPL = aVar;
        aVar.l();
    }

    public CardView(@NonNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, t0.a.f50237a);
    }

    @NonNull
    public ColorStateList getCardBackgroundColor() {
        return IMPL.e(this.mCardViewDelegate);
    }

    public float getCardElevation() {
        return IMPL.i(this.mCardViewDelegate);
    }

    public int getContentPaddingBottom() {
        return this.mContentPadding.bottom;
    }

    public int getContentPaddingLeft() {
        return this.mContentPadding.left;
    }

    public int getContentPaddingRight() {
        return this.mContentPadding.right;
    }

    public int getContentPaddingTop() {
        return this.mContentPadding.top;
    }

    public float getMaxCardElevation() {
        return IMPL.d(this.mCardViewDelegate);
    }

    public boolean getPreventCornerOverlap() {
        return this.mPreventCornerOverlap;
    }

    public float getRadius() {
        return IMPL.b(this.mCardViewDelegate);
    }

    public boolean getUseCompatPadding() {
        return this.mCompatPadding;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.widget.FrameLayout, android.view.View
    public void onMeasure(int i10, int i11) {
        CardViewImpl cardViewImpl = IMPL;
        if (!(cardViewImpl instanceof androidx.cardview.widget.a)) {
            int mode = View.MeasureSpec.getMode(i10);
            if (mode == Integer.MIN_VALUE || mode == 1073741824) {
                i10 = View.MeasureSpec.makeMeasureSpec(Math.max((int) Math.ceil(cardViewImpl.m(this.mCardViewDelegate)), View.MeasureSpec.getSize(i10)), mode);
            }
            int mode2 = View.MeasureSpec.getMode(i11);
            if (mode2 == Integer.MIN_VALUE || mode2 == 1073741824) {
                i11 = View.MeasureSpec.makeMeasureSpec(Math.max((int) Math.ceil(cardViewImpl.f(this.mCardViewDelegate)), View.MeasureSpec.getSize(i11)), mode2);
            }
            super.onMeasure(i10, i11);
            return;
        }
        super.onMeasure(i10, i11);
    }

    public void setCardBackgroundColor(int i10) {
        IMPL.n(this.mCardViewDelegate, ColorStateList.valueOf(i10));
    }

    public void setCardElevation(float f10) {
        IMPL.c(this.mCardViewDelegate, f10);
    }

    public void setContentPadding(int i10, int i11, int i12, int i13) {
        this.mContentPadding.set(i10, i11, i12, i13);
        IMPL.k(this.mCardViewDelegate);
    }

    public void setMaxCardElevation(float f10) {
        IMPL.o(this.mCardViewDelegate, f10);
    }

    @Override // android.view.View
    public void setMinimumHeight(int i10) {
        this.mUserSetMinHeight = i10;
        super.setMinimumHeight(i10);
    }

    @Override // android.view.View
    public void setMinimumWidth(int i10) {
        this.mUserSetMinWidth = i10;
        super.setMinimumWidth(i10);
    }

    @Override // android.view.View
    public void setPadding(int i10, int i11, int i12, int i13) {
    }

    @Override // android.view.View
    public void setPaddingRelative(int i10, int i11, int i12, int i13) {
    }

    public void setPreventCornerOverlap(boolean z10) {
        if (z10 != this.mPreventCornerOverlap) {
            this.mPreventCornerOverlap = z10;
            IMPL.g(this.mCardViewDelegate);
        }
    }

    public void setRadius(float f10) {
        IMPL.a(this.mCardViewDelegate, f10);
    }

    public void setUseCompatPadding(boolean z10) {
        if (this.mCompatPadding != z10) {
            this.mCompatPadding = z10;
            IMPL.j(this.mCardViewDelegate);
        }
    }

    public CardView(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        int color;
        ColorStateList valueOf;
        Rect rect = new Rect();
        this.mContentPadding = rect;
        this.mShadowBounds = new Rect();
        a aVar = new a();
        this.mCardViewDelegate = aVar;
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, d.f50241a, i10, t0.c.f50240a);
        if (obtainStyledAttributes.hasValue(d.f50244d)) {
            valueOf = obtainStyledAttributes.getColorStateList(d.f50244d);
        } else {
            TypedArray obtainStyledAttributes2 = getContext().obtainStyledAttributes(COLOR_BACKGROUND_ATTR);
            int color2 = obtainStyledAttributes2.getColor(0, 0);
            obtainStyledAttributes2.recycle();
            float[] fArr = new float[3];
            Color.colorToHSV(color2, fArr);
            if (fArr[2] > 0.5f) {
                color = getResources().getColor(t0.b.f50239b);
            } else {
                color = getResources().getColor(t0.b.f50238a);
            }
            valueOf = ColorStateList.valueOf(color);
        }
        ColorStateList colorStateList = valueOf;
        float dimension = obtainStyledAttributes.getDimension(d.f50245e, 0.0f);
        float dimension2 = obtainStyledAttributes.getDimension(d.f50246f, 0.0f);
        float dimension3 = obtainStyledAttributes.getDimension(d.f50247g, 0.0f);
        this.mCompatPadding = obtainStyledAttributes.getBoolean(d.f50249i, false);
        this.mPreventCornerOverlap = obtainStyledAttributes.getBoolean(d.f50248h, true);
        int dimensionPixelSize = obtainStyledAttributes.getDimensionPixelSize(d.f50250j, 0);
        rect.left = obtainStyledAttributes.getDimensionPixelSize(d.f50252l, dimensionPixelSize);
        rect.top = obtainStyledAttributes.getDimensionPixelSize(d.f50254n, dimensionPixelSize);
        rect.right = obtainStyledAttributes.getDimensionPixelSize(d.f50253m, dimensionPixelSize);
        rect.bottom = obtainStyledAttributes.getDimensionPixelSize(d.f50251k, dimensionPixelSize);
        float f10 = dimension2 > dimension3 ? dimension2 : dimension3;
        this.mUserSetMinWidth = obtainStyledAttributes.getDimensionPixelSize(d.f50242b, 0);
        this.mUserSetMinHeight = obtainStyledAttributes.getDimensionPixelSize(d.f50243c, 0);
        obtainStyledAttributes.recycle();
        IMPL.h(aVar, context, colorStateList, dimension, dimension2, f10);
    }

    public void setCardBackgroundColor(ColorStateList colorStateList) {
        IMPL.n(this.mCardViewDelegate, colorStateList);
    }
}
