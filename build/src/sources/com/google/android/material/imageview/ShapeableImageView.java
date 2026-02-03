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
import oh.g;
import oh.k;
import oh.l;
import oh.n;
import yg.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class ShapeableImageView extends m implements n {
    private static final int D = j.f54271y;
    private int A;
    private int B;
    private boolean C;

    /* renamed from: d  reason: collision with root package name */
    private final l f14695d;

    /* renamed from: e  reason: collision with root package name */
    private final RectF f14696e;

    /* renamed from: i  reason: collision with root package name */
    private final RectF f14697i;

    /* renamed from: o  reason: collision with root package name */
    private final Paint f14698o;

    /* renamed from: p  reason: collision with root package name */
    private final Paint f14699p;

    /* renamed from: q  reason: collision with root package name */
    private final Path f14700q;

    /* renamed from: r  reason: collision with root package name */
    private ColorStateList f14701r;

    /* renamed from: s  reason: collision with root package name */
    private g f14702s;

    /* renamed from: t  reason: collision with root package name */
    private k f14703t;

    /* renamed from: u  reason: collision with root package name */
    private float f14704u;

    /* renamed from: v  reason: collision with root package name */
    private Path f14705v;

    /* renamed from: w  reason: collision with root package name */
    private int f14706w;

    /* renamed from: x  reason: collision with root package name */
    private int f14707x;

    /* renamed from: y  reason: collision with root package name */
    private int f14708y;

    /* renamed from: z  reason: collision with root package name */
    private int f14709z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends ViewOutlineProvider {

        /* renamed from: a  reason: collision with root package name */
        private final Rect f14710a = new Rect();

        a() {
        }

        @Override // android.view.ViewOutlineProvider
        public void getOutline(View view, Outline outline) {
            if (ShapeableImageView.this.f14703t == null) {
                return;
            }
            if (ShapeableImageView.this.f14702s == null) {
                ShapeableImageView.this.f14702s = new g(ShapeableImageView.this.f14703t);
            }
            ShapeableImageView.this.f14696e.round(this.f14710a);
            ShapeableImageView.this.f14702s.setBounds(this.f14710a);
            ShapeableImageView.this.f14702s.getOutline(outline);
        }
    }

    public ShapeableImageView(Context context) {
        this(context, null, 0);
    }

    private void g(Canvas canvas) {
        if (this.f14701r != null) {
            this.f14698o.setStrokeWidth(this.f14704u);
            int colorForState = this.f14701r.getColorForState(getDrawableState(), this.f14701r.getDefaultColor());
            if (this.f14704u > 0.0f && colorForState != 0) {
                this.f14698o.setColor(colorForState);
                canvas.drawPath(this.f14700q, this.f14698o);
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
        this.f14696e.set(getPaddingLeft(), getPaddingTop(), i10 - getPaddingRight(), i11 - getPaddingBottom());
        this.f14695d.d(this.f14703t, 1.0f, this.f14696e, this.f14700q);
        this.f14705v.rewind();
        this.f14705v.addPath(this.f14700q);
        this.f14697i.set(0.0f, 0.0f, i10, i11);
        this.f14705v.addRect(this.f14697i, Path.Direction.CCW);
    }

    public int getContentPaddingBottom() {
        return this.f14709z;
    }

    public final int getContentPaddingEnd() {
        int i10 = this.B;
        if (i10 != Integer.MIN_VALUE) {
            return i10;
        }
        if (i()) {
            return this.f14706w;
        }
        return this.f14708y;
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
        return this.f14706w;
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
        return this.f14708y;
    }

    public final int getContentPaddingStart() {
        int i10 = this.A;
        if (i10 != Integer.MIN_VALUE) {
            return i10;
        }
        if (i()) {
            return this.f14708y;
        }
        return this.f14706w;
    }

    public int getContentPaddingTop() {
        return this.f14707x;
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
        return this.f14703t;
    }

    public ColorStateList getStrokeColor() {
        return this.f14701r;
    }

    public float getStrokeWidth() {
        return this.f14704u;
    }

    @Override // android.widget.ImageView, android.view.View
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        canvas.drawPath(this.f14705v, this.f14699p);
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

    @Override // oh.n
    public void setShapeAppearanceModel(@NonNull k kVar) {
        this.f14703t = kVar;
        g gVar = this.f14702s;
        if (gVar != null) {
            gVar.setShapeAppearanceModel(kVar);
        }
        j(getWidth(), getHeight());
        invalidate();
        invalidateOutline();
    }

    public void setStrokeColor(ColorStateList colorStateList) {
        this.f14701r = colorStateList;
        invalidate();
    }

    public void setStrokeColorResource(int i10) {
        setStrokeColor(g.a.a(getContext(), i10));
    }

    public void setStrokeWidth(float f10) {
        if (this.f14704u != f10) {
            this.f14704u = f10;
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
            android.content.Context r7 = rh.a.c(r7, r8, r9, r0)
            r6.<init>(r7, r8, r9)
            oh.l r7 = oh.l.k()
            r6.f14695d = r7
            android.graphics.Path r7 = new android.graphics.Path
            r7.<init>()
            r6.f14700q = r7
            r7 = 0
            r6.C = r7
            android.content.Context r1 = r6.getContext()
            android.graphics.Paint r2 = new android.graphics.Paint
            r2.<init>()
            r6.f14699p = r2
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
            r6.f14696e = r2
            android.graphics.RectF r2 = new android.graphics.RectF
            r2.<init>()
            r6.f14697i = r2
            android.graphics.Path r2 = new android.graphics.Path
            r2.<init>()
            r6.f14705v = r2
            int[] r2 = yg.k.C5
            android.content.res.TypedArray r2 = r1.obtainStyledAttributes(r8, r2, r9, r0)
            r4 = 2
            r5 = 0
            r6.setLayerType(r4, r5)
            int r4 = yg.k.K5
            android.content.res.ColorStateList r4 = lh.c.a(r1, r2, r4)
            r6.f14701r = r4
            int r4 = yg.k.L5
            int r4 = r2.getDimensionPixelSize(r4, r7)
            float r4 = (float) r4
            r6.f14704u = r4
            int r4 = yg.k.D5
            int r7 = r2.getDimensionPixelSize(r4, r7)
            r6.f14706w = r7
            r6.f14707x = r7
            r6.f14708y = r7
            r6.f14709z = r7
            int r4 = yg.k.G5
            int r4 = r2.getDimensionPixelSize(r4, r7)
            r6.f14706w = r4
            int r4 = yg.k.J5
            int r4 = r2.getDimensionPixelSize(r4, r7)
            r6.f14707x = r4
            int r4 = yg.k.H5
            int r4 = r2.getDimensionPixelSize(r4, r7)
            r6.f14708y = r4
            int r4 = yg.k.E5
            int r7 = r2.getDimensionPixelSize(r4, r7)
            r6.f14709z = r7
            int r7 = yg.k.I5
            r4 = -2147483648(0xffffffff80000000, float:-0.0)
            int r7 = r2.getDimensionPixelSize(r7, r4)
            r6.A = r7
            int r7 = yg.k.F5
            int r7 = r2.getDimensionPixelSize(r7, r4)
            r6.B = r7
            r2.recycle()
            android.graphics.Paint r7 = new android.graphics.Paint
            r7.<init>()
            r6.f14698o = r7
            android.graphics.Paint$Style r2 = android.graphics.Paint.Style.STROKE
            r7.setStyle(r2)
            r7.setAntiAlias(r3)
            oh.k$b r7 = oh.k.e(r1, r8, r9, r0)
            oh.k r7 = r7.m()
            r6.f14703t = r7
            com.google.android.material.imageview.ShapeableImageView$a r7 = new com.google.android.material.imageview.ShapeableImageView$a
            r7.<init>()
            r6.setOutlineProvider(r7)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.material.imageview.ShapeableImageView.<init>(android.content.Context, android.util.AttributeSet, int):void");
    }
}
