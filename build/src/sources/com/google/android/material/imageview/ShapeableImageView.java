package com.google.android.material.imageview;

import ah.j;
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
import qh.g;
import qh.k;
import qh.l;
import qh.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class ShapeableImageView extends m implements n {
    private static final int D = j.f821y;
    private int A;
    private int B;
    private boolean C;

    /* renamed from: d  reason: collision with root package name */
    private final l f15069d;

    /* renamed from: e  reason: collision with root package name */
    private final RectF f15070e;

    /* renamed from: i  reason: collision with root package name */
    private final RectF f15071i;

    /* renamed from: o  reason: collision with root package name */
    private final Paint f15072o;

    /* renamed from: p  reason: collision with root package name */
    private final Paint f15073p;

    /* renamed from: q  reason: collision with root package name */
    private final Path f15074q;

    /* renamed from: r  reason: collision with root package name */
    private ColorStateList f15075r;

    /* renamed from: s  reason: collision with root package name */
    private g f15076s;

    /* renamed from: t  reason: collision with root package name */
    private k f15077t;

    /* renamed from: u  reason: collision with root package name */
    private float f15078u;

    /* renamed from: v  reason: collision with root package name */
    private Path f15079v;

    /* renamed from: w  reason: collision with root package name */
    private int f15080w;

    /* renamed from: x  reason: collision with root package name */
    private int f15081x;

    /* renamed from: y  reason: collision with root package name */
    private int f15082y;

    /* renamed from: z  reason: collision with root package name */
    private int f15083z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends ViewOutlineProvider {

        /* renamed from: a  reason: collision with root package name */
        private final Rect f15084a = new Rect();

        a() {
        }

        @Override // android.view.ViewOutlineProvider
        public void getOutline(View view, Outline outline) {
            if (ShapeableImageView.this.f15077t == null) {
                return;
            }
            if (ShapeableImageView.this.f15076s == null) {
                ShapeableImageView.this.f15076s = new g(ShapeableImageView.this.f15077t);
            }
            ShapeableImageView.this.f15070e.round(this.f15084a);
            ShapeableImageView.this.f15076s.setBounds(this.f15084a);
            ShapeableImageView.this.f15076s.getOutline(outline);
        }
    }

    public ShapeableImageView(Context context) {
        this(context, null, 0);
    }

    private void g(Canvas canvas) {
        if (this.f15075r != null) {
            this.f15072o.setStrokeWidth(this.f15078u);
            int colorForState = this.f15075r.getColorForState(getDrawableState(), this.f15075r.getDefaultColor());
            if (this.f15078u > 0.0f && colorForState != 0) {
                this.f15072o.setColor(colorForState);
                canvas.drawPath(this.f15074q, this.f15072o);
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
        this.f15070e.set(getPaddingLeft(), getPaddingTop(), i10 - getPaddingRight(), i11 - getPaddingBottom());
        this.f15069d.d(this.f15077t, 1.0f, this.f15070e, this.f15074q);
        this.f15079v.rewind();
        this.f15079v.addPath(this.f15074q);
        this.f15071i.set(0.0f, 0.0f, i10, i11);
        this.f15079v.addRect(this.f15071i, Path.Direction.CCW);
    }

    public int getContentPaddingBottom() {
        return this.f15083z;
    }

    public final int getContentPaddingEnd() {
        int i10 = this.B;
        if (i10 != Integer.MIN_VALUE) {
            return i10;
        }
        if (i()) {
            return this.f15080w;
        }
        return this.f15082y;
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
        return this.f15080w;
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
        return this.f15082y;
    }

    public final int getContentPaddingStart() {
        int i10 = this.A;
        if (i10 != Integer.MIN_VALUE) {
            return i10;
        }
        if (i()) {
            return this.f15082y;
        }
        return this.f15080w;
    }

    public int getContentPaddingTop() {
        return this.f15081x;
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
    public k getShapeAppearanceModel() {
        return this.f15077t;
    }

    public ColorStateList getStrokeColor() {
        return this.f15075r;
    }

    public float getStrokeWidth() {
        return this.f15078u;
    }

    @Override // android.widget.ImageView, android.view.View
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        canvas.drawPath(this.f15079v, this.f15073p);
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

    @Override // qh.n
    public void setShapeAppearanceModel(@NonNull k kVar) {
        this.f15077t = kVar;
        g gVar = this.f15076s;
        if (gVar != null) {
            gVar.setShapeAppearanceModel(kVar);
        }
        j(getWidth(), getHeight());
        invalidate();
        invalidateOutline();
    }

    public void setStrokeColor(ColorStateList colorStateList) {
        this.f15075r = colorStateList;
        invalidate();
    }

    public void setStrokeColorResource(int i10) {
        setStrokeColor(g.a.a(getContext(), i10));
    }

    public void setStrokeWidth(float f10) {
        if (this.f15078u != f10) {
            this.f15078u = f10;
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
            android.content.Context r7 = th.a.c(r7, r8, r9, r0)
            r6.<init>(r7, r8, r9)
            qh.l r7 = qh.l.k()
            r6.f15069d = r7
            android.graphics.Path r7 = new android.graphics.Path
            r7.<init>()
            r6.f15074q = r7
            r7 = 0
            r6.C = r7
            android.content.Context r1 = r6.getContext()
            android.graphics.Paint r2 = new android.graphics.Paint
            r2.<init>()
            r6.f15073p = r2
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
            r6.f15070e = r2
            android.graphics.RectF r2 = new android.graphics.RectF
            r2.<init>()
            r6.f15071i = r2
            android.graphics.Path r2 = new android.graphics.Path
            r2.<init>()
            r6.f15079v = r2
            int[] r2 = ah.k.C5
            android.content.res.TypedArray r2 = r1.obtainStyledAttributes(r8, r2, r9, r0)
            r4 = 2
            r5 = 0
            r6.setLayerType(r4, r5)
            int r4 = ah.k.K5
            android.content.res.ColorStateList r4 = nh.c.a(r1, r2, r4)
            r6.f15075r = r4
            int r4 = ah.k.L5
            int r4 = r2.getDimensionPixelSize(r4, r7)
            float r4 = (float) r4
            r6.f15078u = r4
            int r4 = ah.k.D5
            int r7 = r2.getDimensionPixelSize(r4, r7)
            r6.f15080w = r7
            r6.f15081x = r7
            r6.f15082y = r7
            r6.f15083z = r7
            int r4 = ah.k.G5
            int r4 = r2.getDimensionPixelSize(r4, r7)
            r6.f15080w = r4
            int r4 = ah.k.J5
            int r4 = r2.getDimensionPixelSize(r4, r7)
            r6.f15081x = r4
            int r4 = ah.k.H5
            int r4 = r2.getDimensionPixelSize(r4, r7)
            r6.f15082y = r4
            int r4 = ah.k.E5
            int r7 = r2.getDimensionPixelSize(r4, r7)
            r6.f15083z = r7
            int r7 = ah.k.I5
            r4 = -2147483648(0xffffffff80000000, float:-0.0)
            int r7 = r2.getDimensionPixelSize(r7, r4)
            r6.A = r7
            int r7 = ah.k.F5
            int r7 = r2.getDimensionPixelSize(r7, r4)
            r6.B = r7
            r2.recycle()
            android.graphics.Paint r7 = new android.graphics.Paint
            r7.<init>()
            r6.f15072o = r7
            android.graphics.Paint$Style r2 = android.graphics.Paint.Style.STROKE
            r7.setStyle(r2)
            r7.setAntiAlias(r3)
            qh.k$b r7 = qh.k.e(r1, r8, r9, r0)
            qh.k r7 = r7.m()
            r6.f15077t = r7
            com.google.android.material.imageview.ShapeableImageView$a r7 = new com.google.android.material.imageview.ShapeableImageView$a
            r7.<init>()
            r6.setOutlineProvider(r7)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.material.imageview.ShapeableImageView.<init>(android.content.Context, android.util.AttributeSet, int):void");
    }
}
