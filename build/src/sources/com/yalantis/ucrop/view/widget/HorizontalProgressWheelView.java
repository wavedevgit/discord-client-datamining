package com.yalantis.ucrop.view.widget;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Rect;
import android.util.AttributeSet;
import android.view.MotionEvent;
import android.view.View;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import tq.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class HorizontalProgressWheelView extends View {

    /* renamed from: d  reason: collision with root package name */
    private final Rect f19984d;

    /* renamed from: e  reason: collision with root package name */
    private a f19985e;

    /* renamed from: i  reason: collision with root package name */
    private float f19986i;

    /* renamed from: o  reason: collision with root package name */
    private Paint f19987o;

    /* renamed from: p  reason: collision with root package name */
    private Paint f19988p;

    /* renamed from: q  reason: collision with root package name */
    private int f19989q;

    /* renamed from: r  reason: collision with root package name */
    private int f19990r;

    /* renamed from: s  reason: collision with root package name */
    private int f19991s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f19992t;

    /* renamed from: u  reason: collision with root package name */
    private float f19993u;

    /* renamed from: v  reason: collision with root package name */
    private int f19994v;

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
        this.f19994v = androidx.core.content.a.c(getContext(), tq.a.f50933l);
        this.f19989q = getContext().getResources().getDimensionPixelSize(b.f50943j);
        this.f19990r = getContext().getResources().getDimensionPixelSize(b.f50939f);
        this.f19991s = getContext().getResources().getDimensionPixelSize(b.f50941h);
        Paint paint = new Paint(1);
        this.f19987o = paint;
        paint.setStyle(Paint.Style.STROKE);
        this.f19987o.setStrokeWidth(this.f19989q);
        this.f19987o.setColor(getResources().getColor(tq.a.f50928g));
        Paint paint2 = new Paint(this.f19987o);
        this.f19988p = paint2;
        paint2.setColor(this.f19994v);
        this.f19988p.setStrokeCap(Paint.Cap.ROUND);
        this.f19988p.setStrokeWidth(getContext().getResources().getDimensionPixelSize(b.f50944k));
    }

    private void b(MotionEvent motionEvent, float f10) {
        this.f19993u -= f10;
        postInvalidate();
        this.f19986i = motionEvent.getX();
        a aVar = this.f19985e;
        if (aVar != null) {
            aVar.c(-f10, this.f19993u);
        }
    }

    @Override // android.view.View
    protected void onDraw(Canvas canvas) {
        int i10;
        int i11;
        super.onDraw(canvas);
        canvas.getClipBounds(this.f19984d);
        int width = this.f19984d.width() / (this.f19989q + this.f19991s);
        float f10 = this.f19993u % (i11 + i10);
        for (int i12 = 0; i12 < width; i12++) {
            int i13 = width / 4;
            if (i12 < i13) {
                this.f19987o.setAlpha((int) ((i12 / i13) * 255.0f));
            } else if (i12 > (width * 3) / 4) {
                this.f19987o.setAlpha((int) (((width - i12) / i13) * 255.0f));
            } else {
                this.f19987o.setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
            }
            float f11 = -f10;
            Rect rect = this.f19984d;
            Rect rect2 = this.f19984d;
            canvas.drawLine(rect.left + f11 + ((this.f19989q + this.f19991s) * i12), rect.centerY() - (this.f19990r / 4.0f), f11 + rect2.left + ((this.f19989q + this.f19991s) * i12), rect2.centerY() + (this.f19990r / 4.0f), this.f19987o);
        }
        canvas.drawLine(this.f19984d.centerX(), this.f19984d.centerY() - (this.f19990r / 2.0f), this.f19984d.centerX(), (this.f19990r / 2.0f) + this.f19984d.centerY(), this.f19988p);
    }

    @Override // android.view.View
    public boolean onTouchEvent(MotionEvent motionEvent) {
        int action = motionEvent.getAction();
        if (action != 0) {
            if (action != 1) {
                if (action == 2) {
                    float x10 = motionEvent.getX() - this.f19986i;
                    if (x10 != 0.0f) {
                        if (!this.f19992t) {
                            this.f19992t = true;
                            a aVar = this.f19985e;
                            if (aVar != null) {
                                aVar.b();
                            }
                        }
                        b(motionEvent, x10);
                    }
                }
            } else {
                a aVar2 = this.f19985e;
                if (aVar2 != null) {
                    this.f19992t = false;
                    aVar2.a();
                }
            }
        } else {
            this.f19986i = motionEvent.getX();
        }
        return true;
    }

    public void setMiddleLineColor(int i10) {
        this.f19994v = i10;
        this.f19988p.setColor(i10);
        invalidate();
    }

    public void setScrollingListener(a aVar) {
        this.f19985e = aVar;
    }

    public HorizontalProgressWheelView(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        this.f19984d = new Rect();
        a();
    }
}
