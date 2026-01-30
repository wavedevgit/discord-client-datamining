package com.yalantis.ucrop.view.widget;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Rect;
import android.util.AttributeSet;
import android.view.MotionEvent;
import android.view.View;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import nq.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class HorizontalProgressWheelView extends View {

    /* renamed from: d  reason: collision with root package name */
    private final Rect f20963d;

    /* renamed from: e  reason: collision with root package name */
    private a f20964e;

    /* renamed from: i  reason: collision with root package name */
    private float f20965i;

    /* renamed from: o  reason: collision with root package name */
    private Paint f20966o;

    /* renamed from: p  reason: collision with root package name */
    private Paint f20967p;

    /* renamed from: q  reason: collision with root package name */
    private int f20968q;

    /* renamed from: r  reason: collision with root package name */
    private int f20969r;

    /* renamed from: s  reason: collision with root package name */
    private int f20970s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f20971t;

    /* renamed from: u  reason: collision with root package name */
    private float f20972u;

    /* renamed from: v  reason: collision with root package name */
    private int f20973v;

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
        this.f20973v = androidx.core.content.a.c(getContext(), nq.a.f42088l);
        this.f20968q = getContext().getResources().getDimensionPixelSize(b.f42098j);
        this.f20969r = getContext().getResources().getDimensionPixelSize(b.f42094f);
        this.f20970s = getContext().getResources().getDimensionPixelSize(b.f42096h);
        Paint paint = new Paint(1);
        this.f20966o = paint;
        paint.setStyle(Paint.Style.STROKE);
        this.f20966o.setStrokeWidth(this.f20968q);
        this.f20966o.setColor(getResources().getColor(nq.a.f42083g));
        Paint paint2 = new Paint(this.f20966o);
        this.f20967p = paint2;
        paint2.setColor(this.f20973v);
        this.f20967p.setStrokeCap(Paint.Cap.ROUND);
        this.f20967p.setStrokeWidth(getContext().getResources().getDimensionPixelSize(b.f42099k));
    }

    private void b(MotionEvent motionEvent, float f10) {
        this.f20972u -= f10;
        postInvalidate();
        this.f20965i = motionEvent.getX();
        a aVar = this.f20964e;
        if (aVar != null) {
            aVar.c(-f10, this.f20972u);
        }
    }

    @Override // android.view.View
    protected void onDraw(Canvas canvas) {
        int i10;
        int i11;
        super.onDraw(canvas);
        canvas.getClipBounds(this.f20963d);
        int width = this.f20963d.width() / (this.f20968q + this.f20970s);
        float f10 = this.f20972u % (i11 + i10);
        for (int i12 = 0; i12 < width; i12++) {
            int i13 = width / 4;
            if (i12 < i13) {
                this.f20966o.setAlpha((int) ((i12 / i13) * 255.0f));
            } else if (i12 > (width * 3) / 4) {
                this.f20966o.setAlpha((int) (((width - i12) / i13) * 255.0f));
            } else {
                this.f20966o.setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
            }
            float f11 = -f10;
            Rect rect = this.f20963d;
            Rect rect2 = this.f20963d;
            canvas.drawLine(rect.left + f11 + ((this.f20968q + this.f20970s) * i12), rect.centerY() - (this.f20969r / 4.0f), f11 + rect2.left + ((this.f20968q + this.f20970s) * i12), rect2.centerY() + (this.f20969r / 4.0f), this.f20966o);
        }
        canvas.drawLine(this.f20963d.centerX(), this.f20963d.centerY() - (this.f20969r / 2.0f), this.f20963d.centerX(), (this.f20969r / 2.0f) + this.f20963d.centerY(), this.f20967p);
    }

    @Override // android.view.View
    public boolean onTouchEvent(MotionEvent motionEvent) {
        int action = motionEvent.getAction();
        if (action != 0) {
            if (action != 1) {
                if (action == 2) {
                    float x10 = motionEvent.getX() - this.f20965i;
                    if (x10 != 0.0f) {
                        if (!this.f20971t) {
                            this.f20971t = true;
                            a aVar = this.f20964e;
                            if (aVar != null) {
                                aVar.b();
                            }
                        }
                        b(motionEvent, x10);
                    }
                }
            } else {
                a aVar2 = this.f20964e;
                if (aVar2 != null) {
                    this.f20971t = false;
                    aVar2.a();
                }
            }
        } else {
            this.f20965i = motionEvent.getX();
        }
        return true;
    }

    public void setMiddleLineColor(int i10) {
        this.f20973v = i10;
        this.f20967p.setColor(i10);
        invalidate();
    }

    public void setScrollingListener(a aVar) {
        this.f20964e = aVar;
    }

    public HorizontalProgressWheelView(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        this.f20963d = new Rect();
        a();
    }
}
