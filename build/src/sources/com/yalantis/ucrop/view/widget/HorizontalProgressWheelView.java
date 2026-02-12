package com.yalantis.ucrop.view.widget;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Rect;
import android.util.AttributeSet;
import android.view.MotionEvent;
import android.view.View;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import fr.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class HorizontalProgressWheelView extends View {

    /* renamed from: d  reason: collision with root package name */
    private final Rect f20985d;

    /* renamed from: e  reason: collision with root package name */
    private a f20986e;

    /* renamed from: i  reason: collision with root package name */
    private float f20987i;

    /* renamed from: o  reason: collision with root package name */
    private Paint f20988o;

    /* renamed from: p  reason: collision with root package name */
    private Paint f20989p;

    /* renamed from: q  reason: collision with root package name */
    private int f20990q;

    /* renamed from: r  reason: collision with root package name */
    private int f20991r;

    /* renamed from: s  reason: collision with root package name */
    private int f20992s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f20993t;

    /* renamed from: u  reason: collision with root package name */
    private float f20994u;

    /* renamed from: v  reason: collision with root package name */
    private int f20995v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        void a();

        void b();

        void c(float f10, float f11);
    }

    public HorizontalProgressWheelView(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0);
    }

    private void a() {
        this.f20995v = androidx.core.content.a.c(getContext(), fr.a.f24232l);
        this.f20990q = getContext().getResources().getDimensionPixelSize(b.f24242j);
        this.f20991r = getContext().getResources().getDimensionPixelSize(b.f24238f);
        this.f20992s = getContext().getResources().getDimensionPixelSize(b.f24240h);
        Paint paint = new Paint(1);
        this.f20988o = paint;
        paint.setStyle(Paint.Style.STROKE);
        this.f20988o.setStrokeWidth(this.f20990q);
        this.f20988o.setColor(getResources().getColor(fr.a.f24227g));
        Paint paint2 = new Paint(this.f20988o);
        this.f20989p = paint2;
        paint2.setColor(this.f20995v);
        this.f20989p.setStrokeCap(Paint.Cap.ROUND);
        this.f20989p.setStrokeWidth(getContext().getResources().getDimensionPixelSize(b.f24243k));
    }

    private void b(MotionEvent motionEvent, float f10) {
        this.f20994u -= f10;
        postInvalidate();
        this.f20987i = motionEvent.getX();
        a aVar = this.f20986e;
        if (aVar != null) {
            aVar.c(-f10, this.f20994u);
        }
    }

    @Override // android.view.View
    protected void onDraw(Canvas canvas) {
        int i10;
        int i11;
        super.onDraw(canvas);
        canvas.getClipBounds(this.f20985d);
        int width = this.f20985d.width() / (this.f20990q + this.f20992s);
        float f10 = this.f20994u % (i11 + i10);
        for (int i12 = 0; i12 < width; i12++) {
            int i13 = width / 4;
            if (i12 < i13) {
                this.f20988o.setAlpha((int) ((i12 / i13) * 255.0f));
            } else if (i12 > (width * 3) / 4) {
                this.f20988o.setAlpha((int) (((width - i12) / i13) * 255.0f));
            } else {
                this.f20988o.setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
            }
            float f11 = -f10;
            Rect rect = this.f20985d;
            Rect rect2 = this.f20985d;
            canvas.drawLine(rect.left + f11 + ((this.f20990q + this.f20992s) * i12), rect.centerY() - (this.f20991r / 4.0f), f11 + rect2.left + ((this.f20990q + this.f20992s) * i12), rect2.centerY() + (this.f20991r / 4.0f), this.f20988o);
        }
        canvas.drawLine(this.f20985d.centerX(), this.f20985d.centerY() - (this.f20991r / 2.0f), this.f20985d.centerX(), (this.f20991r / 2.0f) + this.f20985d.centerY(), this.f20989p);
    }

    @Override // android.view.View
    public boolean onTouchEvent(MotionEvent motionEvent) {
        int action = motionEvent.getAction();
        if (action != 0) {
            if (action != 1) {
                if (action == 2) {
                    float x10 = motionEvent.getX() - this.f20987i;
                    if (x10 != 0.0f) {
                        if (!this.f20993t) {
                            this.f20993t = true;
                            a aVar = this.f20986e;
                            if (aVar != null) {
                                aVar.b();
                            }
                        }
                        b(motionEvent, x10);
                    }
                }
            } else {
                a aVar2 = this.f20986e;
                if (aVar2 != null) {
                    this.f20993t = false;
                    aVar2.a();
                }
            }
        } else {
            this.f20987i = motionEvent.getX();
        }
        return true;
    }

    public void setMiddleLineColor(int i10) {
        this.f20995v = i10;
        this.f20989p.setColor(i10);
        invalidate();
    }

    public void setScrollingListener(a aVar) {
        this.f20986e = aVar;
    }

    public HorizontalProgressWheelView(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        this.f20985d = new Rect();
        a();
    }
}
