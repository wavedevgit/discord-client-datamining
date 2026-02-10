package com.yalantis.ucrop.view.widget;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Rect;
import android.util.AttributeSet;
import android.view.MotionEvent;
import android.view.View;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import wq.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class HorizontalProgressWheelView extends View {

    /* renamed from: d  reason: collision with root package name */
    private final Rect f20104d;

    /* renamed from: e  reason: collision with root package name */
    private a f20105e;

    /* renamed from: i  reason: collision with root package name */
    private float f20106i;

    /* renamed from: o  reason: collision with root package name */
    private Paint f20107o;

    /* renamed from: p  reason: collision with root package name */
    private Paint f20108p;

    /* renamed from: q  reason: collision with root package name */
    private int f20109q;

    /* renamed from: r  reason: collision with root package name */
    private int f20110r;

    /* renamed from: s  reason: collision with root package name */
    private int f20111s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f20112t;

    /* renamed from: u  reason: collision with root package name */
    private float f20113u;

    /* renamed from: v  reason: collision with root package name */
    private int f20114v;

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
        this.f20114v = androidx.core.content.a.c(getContext(), wq.a.f53936l);
        this.f20109q = getContext().getResources().getDimensionPixelSize(b.f53946j);
        this.f20110r = getContext().getResources().getDimensionPixelSize(b.f53942f);
        this.f20111s = getContext().getResources().getDimensionPixelSize(b.f53944h);
        Paint paint = new Paint(1);
        this.f20107o = paint;
        paint.setStyle(Paint.Style.STROKE);
        this.f20107o.setStrokeWidth(this.f20109q);
        this.f20107o.setColor(getResources().getColor(wq.a.f53931g));
        Paint paint2 = new Paint(this.f20107o);
        this.f20108p = paint2;
        paint2.setColor(this.f20114v);
        this.f20108p.setStrokeCap(Paint.Cap.ROUND);
        this.f20108p.setStrokeWidth(getContext().getResources().getDimensionPixelSize(b.f53947k));
    }

    private void b(MotionEvent motionEvent, float f10) {
        this.f20113u -= f10;
        postInvalidate();
        this.f20106i = motionEvent.getX();
        a aVar = this.f20105e;
        if (aVar != null) {
            aVar.c(-f10, this.f20113u);
        }
    }

    @Override // android.view.View
    protected void onDraw(Canvas canvas) {
        int i10;
        int i11;
        super.onDraw(canvas);
        canvas.getClipBounds(this.f20104d);
        int width = this.f20104d.width() / (this.f20109q + this.f20111s);
        float f10 = this.f20113u % (i11 + i10);
        for (int i12 = 0; i12 < width; i12++) {
            int i13 = width / 4;
            if (i12 < i13) {
                this.f20107o.setAlpha((int) ((i12 / i13) * 255.0f));
            } else if (i12 > (width * 3) / 4) {
                this.f20107o.setAlpha((int) (((width - i12) / i13) * 255.0f));
            } else {
                this.f20107o.setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
            }
            float f11 = -f10;
            Rect rect = this.f20104d;
            Rect rect2 = this.f20104d;
            canvas.drawLine(rect.left + f11 + ((this.f20109q + this.f20111s) * i12), rect.centerY() - (this.f20110r / 4.0f), f11 + rect2.left + ((this.f20109q + this.f20111s) * i12), rect2.centerY() + (this.f20110r / 4.0f), this.f20107o);
        }
        canvas.drawLine(this.f20104d.centerX(), this.f20104d.centerY() - (this.f20110r / 2.0f), this.f20104d.centerX(), (this.f20110r / 2.0f) + this.f20104d.centerY(), this.f20108p);
    }

    @Override // android.view.View
    public boolean onTouchEvent(MotionEvent motionEvent) {
        int action = motionEvent.getAction();
        if (action != 0) {
            if (action != 1) {
                if (action == 2) {
                    float x10 = motionEvent.getX() - this.f20106i;
                    if (x10 != 0.0f) {
                        if (!this.f20112t) {
                            this.f20112t = true;
                            a aVar = this.f20105e;
                            if (aVar != null) {
                                aVar.b();
                            }
                        }
                        b(motionEvent, x10);
                    }
                }
            } else {
                a aVar2 = this.f20105e;
                if (aVar2 != null) {
                    this.f20112t = false;
                    aVar2.a();
                }
            }
        } else {
            this.f20106i = motionEvent.getX();
        }
        return true;
    }

    public void setMiddleLineColor(int i10) {
        this.f20114v = i10;
        this.f20108p.setColor(i10);
        invalidate();
    }

    public void setScrollingListener(a aVar) {
        this.f20105e = aVar;
    }

    public HorizontalProgressWheelView(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        this.f20104d = new Rect();
        a();
    }
}
