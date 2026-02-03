package com.withpersona.sdk2.inquiry.steps.ui.view;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.PorterDuff;
import android.graphics.Rect;
import android.graphics.RectF;
import android.util.AttributeSet;
import android.view.MotionEvent;
import com.google.android.material.card.MaterialCardView;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kp.h;
@Metadata(d1 = {"\u0000j\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u0007\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\f\u0018\u00002\u00020\u0001B\u001d\b\u0016\u0012\b\u0010\u0003\u001a\u0004\u0018\u00010\u0002\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0004¢\u0006\u0004\b\u0006\u0010\u0007J#\u0010\t\u001a\u00020\b2\b\u0010\u0003\u001a\u0004\u0018\u00010\u00022\b\u0010\u0005\u001a\u0004\u0018\u00010\u0004H\u0002¢\u0006\u0004\b\t\u0010\u0007J\u001f\u0010\r\u001a\u00020\b2\u0006\u0010\u000b\u001a\u00020\n2\u0006\u0010\f\u001a\u00020\nH\u0002¢\u0006\u0004\b\r\u0010\u000eJ\u001f\u0010\u000f\u001a\u00020\b2\u0006\u0010\u000b\u001a\u00020\n2\u0006\u0010\f\u001a\u00020\nH\u0002¢\u0006\u0004\b\u000f\u0010\u000eJ\u000f\u0010\u0010\u001a\u00020\bH\u0002¢\u0006\u0004\b\u0010\u0010\u0011J\u000f\u0010\u0012\u001a\u00020\bH\u0002¢\u0006\u0004\b\u0012\u0010\u0011J\u000f\u0010\u0014\u001a\u00020\u0013H\u0002¢\u0006\u0004\b\u0014\u0010\u0015J\u0017\u0010\u0018\u001a\u00020\b2\u0006\u0010\u0017\u001a\u00020\u0016H\u0002¢\u0006\u0004\b\u0018\u0010\u0019J/\u0010\u001e\u001a\u00020\b2\u0006\u0010\u001b\u001a\u00020\u001a2\u0006\u0010\u0018\u001a\u00020\u001a2\u0006\u0010\u001c\u001a\u00020\u001a2\u0006\u0010\u001d\u001a\u00020\u001aH\u0014¢\u0006\u0004\b\u001e\u0010\u001fJ\u0017\u0010 \u001a\u00020\b2\u0006\u0010\u0017\u001a\u00020\u0016H\u0014¢\u0006\u0004\b \u0010\u0019J\u0017\u0010$\u001a\u00020#2\u0006\u0010\"\u001a\u00020!H\u0016¢\u0006\u0004\b$\u0010%J\r\u0010&\u001a\u00020\b¢\u0006\u0004\b&\u0010\u0011J\u000f\u0010(\u001a\u0004\u0018\u00010'¢\u0006\u0004\b(\u0010)R\u0018\u0010,\u001a\u0004\u0018\u00010'8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b*\u0010+R\u0018\u0010/\u001a\u0004\u0018\u00010\u00168\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b-\u0010.R\u0016\u00103\u001a\u0002008\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b1\u00102R\u0016\u00106\u001a\u0002048\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u001b\u00105R\u0014\u00109\u001a\u0002078\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u000b\u00108R\u0014\u0010:\u001a\u0002078\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\f\u00108R\u0016\u0010=\u001a\u00020\n8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b;\u0010<R\u0016\u0010?\u001a\u00020\n8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b>\u0010<R\u0014\u0010B\u001a\u00020#8BX\u0082\u0004¢\u0006\u0006\u001a\u0004\b@\u0010A¨\u0006C"}, d2 = {"Lcom/withpersona/sdk2/inquiry/steps/ui/view/SignatureView;", "Lcom/google/android/material/card/MaterialCardView;", "Landroid/content/Context;", "context", "Landroid/util/AttributeSet;", "attrs", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", "", "j", "", "x", "y", "m", "(FF)V", "l", "n", "()V", "o", "Landroid/graphics/Rect;", "g", "()Landroid/graphics/Rect;", "Landroid/graphics/Canvas;", "canvas", "h", "(Landroid/graphics/Canvas;)V", "", "w", "oldw", "oldh", "onSizeChanged", "(IIII)V", "onDraw", "Landroid/view/MotionEvent;", "e", "", "onTouchEvent", "(Landroid/view/MotionEvent;)Z", "f", "Landroid/graphics/Bitmap;", "i", "()Landroid/graphics/Bitmap;", "t", "Landroid/graphics/Bitmap;", "signatureBitmap", "u", "Landroid/graphics/Canvas;", "signatureCanvas", "Landroid/graphics/RectF;", "v", "Landroid/graphics/RectF;", "signatureRectF", "Landroid/graphics/Path;", "Landroid/graphics/Path;", "drawPath", "Landroid/graphics/Paint;", "Landroid/graphics/Paint;", "bitmapPaint", "paint", "z", "F", "penX", "A", "penY", "k", "()Z", "isEmpty", "ui-step-renderer_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class SignatureView extends MaterialCardView {
    private float A;

    /* renamed from: t  reason: collision with root package name */
    private Bitmap f20389t;

    /* renamed from: u  reason: collision with root package name */
    private Canvas f20390u;

    /* renamed from: v  reason: collision with root package name */
    private RectF f20391v;

    /* renamed from: w  reason: collision with root package name */
    private Path f20392w;

    /* renamed from: x  reason: collision with root package name */
    private final Paint f20393x;

    /* renamed from: y  reason: collision with root package name */
    private final Paint f20394y;

    /* renamed from: z  reason: collision with root package name */
    private float f20395z;

    public SignatureView(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f20391v = new RectF();
        this.f20392w = new Path();
        this.f20393x = new Paint(4);
        this.f20394y = new Paint();
        j(context, attributeSet);
    }

    private final Rect g() {
        RectF rectF = new RectF(this.f20391v.left - this.f20394y.getStrokeWidth(), this.f20391v.top - this.f20394y.getStrokeWidth(), this.f20391v.right + this.f20394y.getStrokeWidth(), this.f20391v.bottom + this.f20394y.getStrokeWidth());
        Rect rect = new Rect();
        rectF.roundOut(rect);
        return rect;
    }

    private final void h(Canvas canvas) {
        canvas.save();
        Paint paint = new Paint();
        paint.setColor(-3355444);
        paint.setStrokeWidth(4.0f);
        float a10 = (float) h.a(24.0d);
        float a11 = (float) h.a(20.0d);
        canvas.drawLine(a11, canvas.getHeight() - a10, canvas.getWidth() - a11, canvas.getHeight() - a10, paint);
        canvas.restore();
    }

    private final void j(Context context, AttributeSet attributeSet) {
        this.f20394y.setAntiAlias(true);
        this.f20394y.setDither(true);
        this.f20394y.setColor(-16777216);
        this.f20394y.setStyle(Paint.Style.STROKE);
        this.f20394y.setStrokeJoin(Paint.Join.ROUND);
        this.f20394y.setStrokeCap(Paint.Cap.ROUND);
        this.f20394y.setStrokeWidth(5.0f);
    }

    private final boolean k() {
        return this.f20391v.isEmpty();
    }

    private final void l(float f10, float f11) {
        this.f20392w.lineTo(f10, f11);
        this.f20395z = f10;
        this.A = f11;
    }

    private final void m(float f10, float f11) {
        this.f20392w.reset();
        this.f20392w.moveTo(f10, f11);
        this.f20395z = f10;
        this.A = f11;
    }

    private final void n() {
        Canvas canvas = this.f20390u;
        if (canvas == null) {
            return;
        }
        if (!this.f20392w.isEmpty()) {
            this.f20392w.lineTo(this.f20395z, this.A);
            canvas.drawPath(this.f20392w, this.f20394y);
        } else {
            this.f20392w.moveTo(this.f20395z - 0.5f, this.A - 0.5f);
            this.f20392w.lineTo(this.f20395z, this.A);
            canvas.drawPoint(this.f20395z, this.A, this.f20394y);
        }
        o();
        this.f20392w.reset();
    }

    private final void o() {
        RectF rectF = new RectF();
        this.f20392w.computeBounds(rectF, true);
        if (!this.f20392w.isEmpty()) {
            float f10 = 2;
            rectF.inset((-this.f20394y.getStrokeWidth()) / f10, (-this.f20394y.getStrokeWidth()) / f10);
        }
        rectF.sort();
        this.f20391v.union(rectF);
        this.f20391v.sort();
    }

    public final void f() {
        Canvas canvas = this.f20390u;
        if (canvas == null) {
            return;
        }
        this.f20392w.reset();
        this.f20391v = new RectF();
        canvas.drawColor(0, PorterDuff.Mode.CLEAR);
        invalidate();
    }

    public final Bitmap i() {
        Bitmap bitmap = this.f20389t;
        if (k() || bitmap == null) {
            return null;
        }
        o();
        Rect g10 = g();
        Rect rect = new Rect(0, 0, g10.width(), g10.height());
        Bitmap createBitmap = Bitmap.createBitmap(g10.width(), g10.height(), Bitmap.Config.ARGB_8888);
        Intrinsics.checkNotNullExpressionValue(createBitmap, "createBitmap(...)");
        Canvas canvas = new Canvas(createBitmap);
        canvas.drawColor(0);
        canvas.drawBitmap(bitmap, g10, rect, (Paint) null);
        return createBitmap;
    }

    @Override // android.view.View
    protected void onDraw(Canvas canvas) {
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        super.onDraw(canvas);
        canvas.drawColor(0);
        Bitmap bitmap = this.f20389t;
        if (bitmap != null) {
            canvas.drawBitmap(bitmap, 0.0f, 0.0f, this.f20393x);
        }
        h(canvas);
        canvas.drawPath(this.f20392w, this.f20394y);
    }

    @Override // android.view.View
    protected void onSizeChanged(int i10, int i11, int i12, int i13) {
        super.onSizeChanged(i10, i11, i12, i13);
        if (i10 > 0 && i11 > 0) {
            Bitmap createBitmap = Bitmap.createBitmap(i10, i11, Bitmap.Config.ARGB_8888);
            this.f20389t = createBitmap;
            Intrinsics.checkNotNullExpressionValue(createBitmap, "also(...)");
            this.f20390u = new Canvas(createBitmap);
        }
    }

    @Override // android.view.View
    public boolean onTouchEvent(MotionEvent e10) {
        Intrinsics.checkNotNullParameter(e10, "e");
        super.onTouchEvent(e10);
        float x10 = e10.getX();
        float y10 = e10.getY();
        int action = e10.getAction();
        if (action != 0) {
            if (action != 1) {
                if (action == 2) {
                    l(x10, y10);
                    invalidate();
                }
            } else {
                n();
                invalidate();
            }
        } else {
            m(x10, y10);
            invalidate();
        }
        return true;
    }
}
