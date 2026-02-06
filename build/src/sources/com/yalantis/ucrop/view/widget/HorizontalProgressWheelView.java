package com.yalantis.ucrop.view.widget;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Rect;
import android.util.AttributeSet;
import android.view.MotionEvent;
import android.view.View;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import vq.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class HorizontalProgressWheelView extends View {

    /* renamed from: d  reason: collision with root package name */
    private final Rect f19964d;

    /* renamed from: e  reason: collision with root package name */
    private a f19965e;

    /* renamed from: i  reason: collision with root package name */
    private float f19966i;

    /* renamed from: o  reason: collision with root package name */
    private Paint f19967o;

    /* renamed from: p  reason: collision with root package name */
    private Paint f19968p;

    /* renamed from: q  reason: collision with root package name */
    private int f19969q;

    /* renamed from: r  reason: collision with root package name */
    private int f19970r;

    /* renamed from: s  reason: collision with root package name */
    private int f19971s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f19972t;

    /* renamed from: u  reason: collision with root package name */
    private float f19973u;

    /* renamed from: v  reason: collision with root package name */
    private int f19974v;

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
        this.f19974v = androidx.core.content.a.c(getContext(), vq.a.f52861l);
        this.f19969q = getContext().getResources().getDimensionPixelSize(b.f52871j);
        this.f19970r = getContext().getResources().getDimensionPixelSize(b.f52867f);
        this.f19971s = getContext().getResources().getDimensionPixelSize(b.f52869h);
        Paint paint = new Paint(1);
        this.f19967o = paint;
        paint.setStyle(Paint.Style.STROKE);
        this.f19967o.setStrokeWidth(this.f19969q);
        this.f19967o.setColor(getResources().getColor(vq.a.f52856g));
        Paint paint2 = new Paint(this.f19967o);
        this.f19968p = paint2;
        paint2.setColor(this.f19974v);
        this.f19968p.setStrokeCap(Paint.Cap.ROUND);
        this.f19968p.setStrokeWidth(getContext().getResources().getDimensionPixelSize(b.f52872k));
    }

    private void b(MotionEvent motionEvent, float f10) {
        this.f19973u -= f10;
        postInvalidate();
        this.f19966i = motionEvent.getX();
        a aVar = this.f19965e;
        if (aVar != null) {
            aVar.c(-f10, this.f19973u);
        }
    }

    @Override // android.view.View
    protected void onDraw(Canvas canvas) {
        int i10;
        int i11;
        super.onDraw(canvas);
        canvas.getClipBounds(this.f19964d);
        int width = this.f19964d.width() / (this.f19969q + this.f19971s);
        float f10 = this.f19973u % (i11 + i10);
        for (int i12 = 0; i12 < width; i12++) {
            int i13 = width / 4;
            if (i12 < i13) {
                this.f19967o.setAlpha((int) ((i12 / i13) * 255.0f));
            } else if (i12 > (width * 3) / 4) {
                this.f19967o.setAlpha((int) (((width - i12) / i13) * 255.0f));
            } else {
                this.f19967o.setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
            }
            float f11 = -f10;
            Rect rect = this.f19964d;
            Rect rect2 = this.f19964d;
            canvas.drawLine(rect.left + f11 + ((this.f19969q + this.f19971s) * i12), rect.centerY() - (this.f19970r / 4.0f), f11 + rect2.left + ((this.f19969q + this.f19971s) * i12), rect2.centerY() + (this.f19970r / 4.0f), this.f19967o);
        }
        canvas.drawLine(this.f19964d.centerX(), this.f19964d.centerY() - (this.f19970r / 2.0f), this.f19964d.centerX(), (this.f19970r / 2.0f) + this.f19964d.centerY(), this.f19968p);
    }

    @Override // android.view.View
    public boolean onTouchEvent(MotionEvent motionEvent) {
        int action = motionEvent.getAction();
        if (action != 0) {
            if (action != 1) {
                if (action == 2) {
                    float x10 = motionEvent.getX() - this.f19966i;
                    if (x10 != 0.0f) {
                        if (!this.f19972t) {
                            this.f19972t = true;
                            a aVar = this.f19965e;
                            if (aVar != null) {
                                aVar.b();
                            }
                        }
                        b(motionEvent, x10);
                    }
                }
            } else {
                a aVar2 = this.f19965e;
                if (aVar2 != null) {
                    this.f19972t = false;
                    aVar2.a();
                }
            }
        } else {
            this.f19966i = motionEvent.getX();
        }
        return true;
    }

    public void setMiddleLineColor(int i10) {
        this.f19974v = i10;
        this.f19968p.setColor(i10);
        invalidate();
    }

    public void setScrollingListener(a aVar) {
        this.f19965e = aVar;
    }

    public HorizontalProgressWheelView(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        this.f19964d = new Rect();
        a();
    }
}
