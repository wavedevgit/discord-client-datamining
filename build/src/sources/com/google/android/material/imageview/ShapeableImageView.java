package com.google.android.material.imageview;

import android.content.Context;
import android.content.res.ColorStateList;
import android.graphics.Canvas;
import android.graphics.Outline;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.Rect;
import android.graphics.RectF;
import android.util.AttributeSet;
import android.view.View;
import android.view.ViewOutlineProvider;
import androidx.annotation.NonNull;
import androidx.appcompat.widget.m;
import bh.k;
import th.h;
import th.l;
import th.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class ShapeableImageView extends m implements o {
    private static final int D = k.E;
    private int A;
    private int B;
    private boolean C;

    /* renamed from: d  reason: collision with root package name */
    private final th.m f15823d;

    /* renamed from: e  reason: collision with root package name */
    private final RectF f15824e;

    /* renamed from: i  reason: collision with root package name */
    private final RectF f15825i;

    /* renamed from: o  reason: collision with root package name */
    private final Paint f15826o;

    /* renamed from: p  reason: collision with root package name */
    private final Paint f15827p;

    /* renamed from: q  reason: collision with root package name */
    private final Path f15828q;

    /* renamed from: r  reason: collision with root package name */
    private ColorStateList f15829r;

    /* renamed from: s  reason: collision with root package name */
    private h f15830s;

    /* renamed from: t  reason: collision with root package name */
    private l f15831t;

    /* renamed from: u  reason: collision with root package name */
    private float f15832u;

    /* renamed from: v  reason: collision with root package name */
    private Path f15833v;

    /* renamed from: w  reason: collision with root package name */
    private int f15834w;

    /* renamed from: x  reason: collision with root package name */
    private int f15835x;

    /* renamed from: y  reason: collision with root package name */
    private int f15836y;

    /* renamed from: z  reason: collision with root package name */
    private int f15837z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends ViewOutlineProvider {

        /* renamed from: a  reason: collision with root package name */
        private final Rect f15838a = new Rect();

        a() {
        }

        @Override // android.view.ViewOutlineProvider
        public void getOutline(View view, Outline outline) {
            if (ShapeableImageView.this.f15831t == null) {
                return;
            }
            if (ShapeableImageView.this.f15830s == null) {
                ShapeableImageView.this.f15830s = new h(ShapeableImageView.this.f15831t);
            }
            ShapeableImageView.this.f15824e.round(this.f15838a);
            ShapeableImageView.this.f15830s.setBounds(this.f15838a);
            ShapeableImageView.this.f15830s.getOutline(outline);
        }
    }

    public ShapeableImageView(Context context) {
        this(context, null, 0);
    }

    private void g(Canvas canvas) {
        if (this.f15829r != null) {
            this.f15826o.setStrokeWidth(this.f15832u);
            int colorForState = this.f15829r.getColorForState(getDrawableState(), this.f15829r.getDefaultColor());
            if (this.f15832u > 0.0f && colorForState != 0) {
                this.f15826o.setColor(colorForState);
                canvas.drawPath(this.f15828q, this.f15826o);
            }
        }
    }

    private boolean h() {
        if (this.A == Integer.MIN_VALUE && this.B == Integer.MIN_VALUE) {
            return false;
        }
        return true;
    }

    private boolean i() {
        if (getLayoutDirection() == 1) {
            return true;
        }
        return false;
    }

    private void j(int i10, int i11) {
        this.f15824e.set(getPaddingLeft(), getPaddingTop(), i10 - getPaddingRight(), i11 - getPaddingBottom());
        this.f15823d.d(this.f15831t, 1.0f, this.f15824e, this.f15828q);
        this.f15833v.rewind();
        this.f15833v.addPath(this.f15828q);
        this.f15825i.set(0.0f, 0.0f, i10, i11);
        this.f15833v.addRect(this.f15825i, Path.Direction.CCW);
    }

    public int getContentPaddingBottom() {
        return this.f15837z;
    }

    public final int getContentPaddingEnd() {
        int i10 = this.B;
        if (i10 != Integer.MIN_VALUE) {
            return i10;
        }
        if (i()) {
            return this.f15834w;
        }
        return this.f15836y;
    }

    public int getContentPaddingLeft() {
        int i10;
        int i11;
        if (h()) {
            if (i() && (i11 = this.B) != Integer.MIN_VALUE) {
                return i11;
            }
            if (!i() && (i10 = this.A) != Integer.MIN_VALUE) {
                return i10;
            }
        }
        return this.f15834w;
    }

    public int getContentPaddingRight() {
        int i10;
        int i11;
        if (h()) {
            if (i() && (i11 = this.A) != Integer.MIN_VALUE) {
                return i11;
            }
            if (!i() && (i10 = this.B) != Integer.MIN_VALUE) {
                return i10;
            }
        }
        return this.f15836y;
    }

    public final int getContentPaddingStart() {
        int i10 = this.A;
        if (i10 != Integer.MIN_VALUE) {
            return i10;
        }
        if (i()) {
            return this.f15836y;
        }
        return this.f15834w;
    }

    public int getContentPaddingTop() {
        return this.f15835x;
    }

    @Override // android.view.View
    public int getPaddingBottom() {
        return super.getPaddingBottom() - getContentPaddingBottom();
    }

    @Override // android.view.View
    public int getPaddingEnd() {
        return super.getPaddingEnd() - getContentPaddingEnd();
    }

    @Override // android.view.View
    public int getPaddingLeft() {
        return super.getPaddingLeft() - getContentPaddingLeft();
    }

    @Override // android.view.View
    public int getPaddingRight() {
        return super.getPaddingRight() - getContentPaddingRight();
    }

    @Override // android.view.View
    public int getPaddingStart() {
        return super.getPaddingStart() - getContentPaddingStart();
    }

    @Override // android.view.View
    public int getPaddingTop() {
        return super.getPaddingTop() - getContentPaddingTop();
    }

    @NonNull
    public l getShapeAppearanceModel() {
        return this.f15831t;
    }

    public ColorStateList getStrokeColor() {
        return this.f15829r;
    }

    public float getStrokeWidth() {
        return this.f15832u;
    }

    @Override // android.widget.ImageView, android.view.View
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        canvas.drawPath(this.f15833v, this.f15827p);
        g(canvas);
    }

    @Override // android.widget.ImageView, android.view.View
    protected void onMeasure(int i10, int i11) {
        super.onMeasure(i10, i11);
        if (this.C || !isLayoutDirectionResolved()) {
            return;
        }
        this.C = true;
        if (!isPaddingRelative() && !h()) {
            setPadding(super.getPaddingLeft(), super.getPaddingTop(), super.getPaddingRight(), super.getPaddingBottom());
        } else {
            setPaddingRelative(super.getPaddingStart(), super.getPaddingTop(), super.getPaddingEnd(), super.getPaddingBottom());
        }
    }

    @Override // android.view.View
    protected void onSizeChanged(int i10, int i11, int i12, int i13) {
        super.onSizeChanged(i10, i11, i12, i13);
        j(i10, i11);
    }

    @Override // android.view.View
    public void setPadding(int i10, int i11, int i12, int i13) {
        super.setPadding(i10 + getContentPaddingLeft(), i11 + getContentPaddingTop(), i12 + getContentPaddingRight(), i13 + getContentPaddingBottom());
    }

    @Override // android.view.View
    public void setPaddingRelative(int i10, int i11, int i12, int i13) {
        super.setPaddingRelative(i10 + getContentPaddingStart(), i11 + getContentPaddingTop(), i12 + getContentPaddingEnd(), i13 + getContentPaddingBottom());
    }

    @Override // th.o
    public void setShapeAppearanceModel(@NonNull l lVar) {
        this.f15831t = lVar;
        h hVar = this.f15830s;
        if (hVar != null) {
            hVar.setShapeAppearanceModel(lVar);
        }
        j(getWidth(), getHeight());
        invalidate();
        invalidateOutline();
    }

    public void setStrokeColor(ColorStateList colorStateList) {
        this.f15829r = colorStateList;
        invalidate();
    }

    public void setStrokeColorResource(int i10) {
        setStrokeColor(g.a.a(getContext(), i10));
    }

    public void setStrokeWidth(float f10) {
        if (this.f15832u != f10) {
            this.f15832u = f10;
            invalidate();
        }
    }

    public void setStrokeWidthResource(int i10) {
        setStrokeWidth(getResources().getDimensionPixelSize(i10));
    }

    public ShapeableImageView(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0);
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public ShapeableImageView(android.content.Context r7, android.util.AttributeSet r8, int r9) {
        /*
            r6 = this;
            int r0 = com.google.android.material.imageview.ShapeableImageView.D
            android.content.Context r7 = wh.a.d(r7, r8, r9, r0)
            r6.<init>(r7, r8, r9)
            th.m r7 = th.m.l()
            r6.f15823d = r7
            android.graphics.Path r7 = new android.graphics.Path
            r7.<init>()
            r6.f15828q = r7
            r7 = 0
            r6.C = r7
            android.content.Context r1 = r6.getContext()
            android.graphics.Paint r2 = new android.graphics.Paint
            r2.<init>()
            r6.f15827p = r2
            r3 = 1
            r2.setAntiAlias(r3)
            r4 = -1
            r2.setColor(r4)
            android.graphics.PorterDuffXfermode r4 = new android.graphics.PorterDuffXfermode
            android.graphics.PorterDuff$Mode r5 = android.graphics.PorterDuff.Mode.DST_OUT
            r4.<init>(r5)
            r2.setXfermode(r4)
            android.graphics.RectF r2 = new android.graphics.RectF
            r2.<init>()
            r6.f15824e = r2
            android.graphics.RectF r2 = new android.graphics.RectF
            r2.<init>()
            r6.f15825i = r2
            android.graphics.Path r2 = new android.graphics.Path
            r2.<init>()
            r6.f15833v = r2
            int[] r2 = bh.l.f6999e6
            android.content.res.TypedArray r2 = r1.obtainStyledAttributes(r8, r2, r9, r0)
            r4 = 2
            r5 = 0
            r6.setLayerType(r4, r5)
            int r4 = bh.l.f7079m6
            android.content.res.ColorStateList r4 = qh.c.a(r1, r2, r4)
            r6.f15829r = r4
            int r4 = bh.l.f7089n6
            int r4 = r2.getDimensionPixelSize(r4, r7)
            float r4 = (float) r4
            r6.f15832u = r4
            int r4 = bh.l.f7009f6
            int r7 = r2.getDimensionPixelSize(r4, r7)
            r6.f15834w = r7
            r6.f15835x = r7
            r6.f15836y = r7
            r6.f15837z = r7
            int r4 = bh.l.f7039i6
            int r4 = r2.getDimensionPixelSize(r4, r7)
            r6.f15834w = r4
            int r4 = bh.l.f7069l6
            int r4 = r2.getDimensionPixelSize(r4, r7)
            r6.f15835x = r4
            int r4 = bh.l.f7049j6
            int r4 = r2.getDimensionPixelSize(r4, r7)
            r6.f15836y = r4
            int r4 = bh.l.f7019g6
            int r7 = r2.getDimensionPixelSize(r4, r7)
            r6.f15837z = r7
            int r7 = bh.l.f7059k6
            r4 = -2147483648(0xffffffff80000000, float:-0.0)
            int r7 = r2.getDimensionPixelSize(r7, r4)
            r6.A = r7
            int r7 = bh.l.f7029h6
            int r7 = r2.getDimensionPixelSize(r7, r4)
            r6.B = r7
            r2.recycle()
            android.graphics.Paint r7 = new android.graphics.Paint
            r7.<init>()
            r6.f15826o = r7
            android.graphics.Paint$Style r2 = android.graphics.Paint.Style.STROKE
            r7.setStyle(r2)
            r7.setAntiAlias(r3)
            th.l$b r7 = th.l.e(r1, r8, r9, r0)
            th.l r7 = r7.m()
            r6.f15831t = r7
            com.google.android.material.imageview.ShapeableImageView$a r7 = new com.google.android.material.imageview.ShapeableImageView$a
            r7.<init>()
            r6.setOutlineProvider(r7)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.material.imageview.ShapeableImageView.<init>(android.content.Context, android.util.AttributeSet, int):void");
    }
}
