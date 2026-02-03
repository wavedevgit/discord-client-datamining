package com.yalantis.ucrop.view.widget;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Rect;
import android.util.AttributeSet;
import android.view.MotionEvent;
import android.view.View;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import qq.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class HorizontalProgressWheelView extends View {

    /* renamed from: d  reason: collision with root package name */
    private final Rect f19578d;

    /* renamed from: e  reason: collision with root package name */
    private a f19579e;

    /* renamed from: i  reason: collision with root package name */
    private float f19580i;

    /* renamed from: o  reason: collision with root package name */
    private Paint f19581o;

    /* renamed from: p  reason: collision with root package name */
    private Paint f19582p;

    /* renamed from: q  reason: collision with root package name */
    private int f19583q;

    /* renamed from: r  reason: collision with root package name */
    private int f19584r;

    /* renamed from: s  reason: collision with root package name */
    private int f19585s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f19586t;

    /* renamed from: u  reason: collision with root package name */
    private float f19587u;

    /* renamed from: v  reason: collision with root package name */
    private int f19588v;

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
        this.f19588v = androidx.core.content.a.c(getContext(), qq.a.f48069l);
        this.f19583q = getContext().getResources().getDimensionPixelSize(b.f48079j);
        this.f19584r = getContext().getResources().getDimensionPixelSize(b.f48075f);
        this.f19585s = getContext().getResources().getDimensionPixelSize(b.f48077h);
        Paint paint = new Paint(1);
        this.f19581o = paint;
        paint.setStyle(Paint.Style.STROKE);
        this.f19581o.setStrokeWidth(this.f19583q);
        this.f19581o.setColor(getResources().getColor(qq.a.f48064g));
        Paint paint2 = new Paint(this.f19581o);
        this.f19582p = paint2;
        paint2.setColor(this.f19588v);
        this.f19582p.setStrokeCap(Paint.Cap.ROUND);
        this.f19582p.setStrokeWidth(getContext().getResources().getDimensionPixelSize(b.f48080k));
    }

    private void b(MotionEvent motionEvent, float f10) {
        this.f19587u -= f10;
        postInvalidate();
        this.f19580i = motionEvent.getX();
        a aVar = this.f19579e;
        if (aVar != null) {
            aVar.c(-f10, this.f19587u);
        }
    }

    @Override // android.view.View
    protected void onDraw(Canvas canvas) {
        int i10;
        int i11;
        super.onDraw(canvas);
        canvas.getClipBounds(this.f19578d);
        int width = this.f19578d.width() / (this.f19583q + this.f19585s);
        float f10 = this.f19587u % (i11 + i10);
        for (int i12 = 0; i12 < width; i12++) {
            int i13 = width / 4;
            if (i12 < i13) {
                this.f19581o.setAlpha((int) ((i12 / i13) * 255.0f));
            } else if (i12 > (width * 3) / 4) {
                this.f19581o.setAlpha((int) (((width - i12) / i13) * 255.0f));
            } else {
                this.f19581o.setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
            }
            float f11 = -f10;
            Rect rect = this.f19578d;
            Rect rect2 = this.f19578d;
            canvas.drawLine(rect.left + f11 + ((this.f19583q + this.f19585s) * i12), rect.centerY() - (this.f19584r / 4.0f), f11 + rect2.left + ((this.f19583q + this.f19585s) * i12), rect2.centerY() + (this.f19584r / 4.0f), this.f19581o);
        }
        canvas.drawLine(this.f19578d.centerX(), this.f19578d.centerY() - (this.f19584r / 2.0f), this.f19578d.centerX(), (this.f19584r / 2.0f) + this.f19578d.centerY(), this.f19582p);
    }

    @Override // android.view.View
    public boolean onTouchEvent(MotionEvent motionEvent) {
        int action = motionEvent.getAction();
        if (action != 0) {
            if (action != 1) {
                if (action == 2) {
                    float x10 = motionEvent.getX() - this.f19580i;
                    if (x10 != 0.0f) {
                        if (!this.f19586t) {
                            this.f19586t = true;
                            a aVar = this.f19579e;
                            if (aVar != null) {
                                aVar.b();
                            }
                        }
                        b(motionEvent, x10);
                    }
                }
            } else {
                a aVar2 = this.f19579e;
                if (aVar2 != null) {
                    this.f19586t = false;
                    aVar2.a();
                }
            }
        } else {
            this.f19580i = motionEvent.getX();
        }
        return true;
    }

    public void setMiddleLineColor(int i10) {
        this.f19588v = i10;
        this.f19582p.setColor(i10);
        invalidate();
    }

    public void setScrollingListener(a aVar) {
        this.f19579e = aVar;
    }

    public HorizontalProgressWheelView(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        this.f19578d = new Rect();
        a();
    }
}
