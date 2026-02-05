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
import ph.g;
import ph.k;
import ph.l;
import ph.n;
import zg.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class ShapeableImageView extends m implements n {
    private static final int D = j.f55726y;
    private int A;
    private int B;
    private boolean C;

    /* renamed from: d  reason: collision with root package name */
    private final l f15089d;

    /* renamed from: e  reason: collision with root package name */
    private final RectF f15090e;

    /* renamed from: i  reason: collision with root package name */
    private final RectF f15091i;

    /* renamed from: o  reason: collision with root package name */
    private final Paint f15092o;

    /* renamed from: p  reason: collision with root package name */
    private final Paint f15093p;

    /* renamed from: q  reason: collision with root package name */
    private final Path f15094q;

    /* renamed from: r  reason: collision with root package name */
    private ColorStateList f15095r;

    /* renamed from: s  reason: collision with root package name */
    private g f15096s;

    /* renamed from: t  reason: collision with root package name */
    private k f15097t;

    /* renamed from: u  reason: collision with root package name */
    private float f15098u;

    /* renamed from: v  reason: collision with root package name */
    private Path f15099v;

    /* renamed from: w  reason: collision with root package name */
    private int f15100w;

    /* renamed from: x  reason: collision with root package name */
    private int f15101x;

    /* renamed from: y  reason: collision with root package name */
    private int f15102y;

    /* renamed from: z  reason: collision with root package name */
    private int f15103z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends ViewOutlineProvider {

        /* renamed from: a  reason: collision with root package name */
        private final Rect f15104a = new Rect();

        a() {
        }

        @Override // android.view.ViewOutlineProvider
        public void getOutline(View view, Outline outline) {
            if (ShapeableImageView.this.f15097t == null) {
                return;
            }
            if (ShapeableImageView.this.f15096s == null) {
                ShapeableImageView.this.f15096s = new g(ShapeableImageView.this.f15097t);
            }
            ShapeableImageView.this.f15090e.round(this.f15104a);
            ShapeableImageView.this.f15096s.setBounds(this.f15104a);
            ShapeableImageView.this.f15096s.getOutline(outline);
        }
    }

    public ShapeableImageView(Context context) {
        this(context, null, 0);
    }

    private void g(Canvas canvas) {
        if (this.f15095r != null) {
            this.f15092o.setStrokeWidth(this.f15098u);
            int colorForState = this.f15095r.getColorForState(getDrawableState(), this.f15095r.getDefaultColor());
            if (this.f15098u > 0.0f && colorForState != 0) {
                this.f15092o.setColor(colorForState);
                canvas.drawPath(this.f15094q, this.f15092o);
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
        this.f15090e.set(getPaddingLeft(), getPaddingTop(), i10 - getPaddingRight(), i11 - getPaddingBottom());
        this.f15089d.d(this.f15097t, 1.0f, this.f15090e, this.f15094q);
        this.f15099v.rewind();
        this.f15099v.addPath(this.f15094q);
        this.f15091i.set(0.0f, 0.0f, i10, i11);
        this.f15099v.addRect(this.f15091i, Path.Direction.CCW);
    }

    public int getContentPaddingBottom() {
        return this.f15103z;
    }

    public final int getContentPaddingEnd() {
        int i10 = this.B;
        if (i10 != Integer.MIN_VALUE) {
            return i10;
        }
        if (i()) {
            return this.f15100w;
        }
        return this.f15102y;
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
        return this.f15100w;
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
        return this.f15102y;
    }

    public final int getContentPaddingStart() {
        int i10 = this.A;
        if (i10 != Integer.MIN_VALUE) {
            return i10;
        }
        if (i()) {
            return this.f15102y;
        }
        return this.f15100w;
    }

    public int getContentPaddingTop() {
        return this.f15101x;
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
        return this.f15097t;
    }

    public ColorStateList getStrokeColor() {
        return this.f15095r;
    }

    public float getStrokeWidth() {
        return this.f15098u;
    }

    @Override // android.widget.ImageView, android.view.View
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        canvas.drawPath(this.f15099v, this.f15093p);
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

    @Override // ph.n
    public void setShapeAppearanceModel(@NonNull k kVar) {
        this.f15097t = kVar;
        g gVar = this.f15096s;
        if (gVar != null) {
            gVar.setShapeAppearanceModel(kVar);
        }
        j(getWidth(), getHeight());
        invalidate();
        invalidateOutline();
    }

    public void setStrokeColor(ColorStateList colorStateList) {
        this.f15095r = colorStateList;
        invalidate();
    }

    public void setStrokeColorResource(int i10) {
        setStrokeColor(g.a.a(getContext(), i10));
    }

    public void setStrokeWidth(float f10) {
        if (this.f15098u != f10) {
            this.f15098u = f10;
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
            android.content.Context r7 = sh.a.c(r7, r8, r9, r0)
            r6.<init>(r7, r8, r9)
            ph.l r7 = ph.l.k()
            r6.f15089d = r7
            android.graphics.Path r7 = new android.graphics.Path
            r7.<init>()
            r6.f15094q = r7
            r7 = 0
            r6.C = r7
            android.content.Context r1 = r6.getContext()
            android.graphics.Paint r2 = new android.graphics.Paint
            r2.<init>()
            r6.f15093p = r2
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
            r6.f15090e = r2
            android.graphics.RectF r2 = new android.graphics.RectF
            r2.<init>()
            r6.f15091i = r2
            android.graphics.Path r2 = new android.graphics.Path
            r2.<init>()
            r6.f15099v = r2
            int[] r2 = zg.k.C5
            android.content.res.TypedArray r2 = r1.obtainStyledAttributes(r8, r2, r9, r0)
            r4 = 2
            r5 = 0
            r6.setLayerType(r4, r5)
            int r4 = zg.k.K5
            android.content.res.ColorStateList r4 = mh.c.a(r1, r2, r4)
            r6.f15095r = r4
            int r4 = zg.k.L5
            int r4 = r2.getDimensionPixelSize(r4, r7)
            float r4 = (float) r4
            r6.f15098u = r4
            int r4 = zg.k.D5
            int r7 = r2.getDimensionPixelSize(r4, r7)
            r6.f15100w = r7
            r6.f15101x = r7
            r6.f15102y = r7
            r6.f15103z = r7
            int r4 = zg.k.G5
            int r4 = r2.getDimensionPixelSize(r4, r7)
            r6.f15100w = r4
            int r4 = zg.k.J5
            int r4 = r2.getDimensionPixelSize(r4, r7)
            r6.f15101x = r4
            int r4 = zg.k.H5
            int r4 = r2.getDimensionPixelSize(r4, r7)
            r6.f15102y = r4
            int r4 = zg.k.E5
            int r7 = r2.getDimensionPixelSize(r4, r7)
            r6.f15103z = r7
            int r7 = zg.k.I5
            r4 = -2147483648(0xffffffff80000000, float:-0.0)
            int r7 = r2.getDimensionPixelSize(r7, r4)
            r6.A = r7
            int r7 = zg.k.F5
            int r7 = r2.getDimensionPixelSize(r7, r4)
            r6.B = r7
            r2.recycle()
            android.graphics.Paint r7 = new android.graphics.Paint
            r7.<init>()
            r6.f15092o = r7
            android.graphics.Paint$Style r2 = android.graphics.Paint.Style.STROKE
            r7.setStyle(r2)
            r7.setAntiAlias(r3)
            ph.k$b r7 = ph.k.e(r1, r8, r9, r0)
            ph.k r7 = r7.m()
            r6.f15097t = r7
            com.google.android.material.imageview.ShapeableImageView$a r7 = new com.google.android.material.imageview.ShapeableImageView$a
            r7.<init>()
            r6.setOutlineProvider(r7)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.material.imageview.ShapeableImageView.<init>(android.content.Context, android.util.AttributeSet, int):void");
    }
}
