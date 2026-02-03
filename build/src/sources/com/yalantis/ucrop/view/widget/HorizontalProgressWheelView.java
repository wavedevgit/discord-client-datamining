package com.yalantis.ucrop.view.widget;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Rect;
import android.util.AttributeSet;
import android.view.MotionEvent;
import android.view.View;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import oq.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class HorizontalProgressWheelView extends View {

    /* renamed from: d  reason: collision with root package name */
    private final Rect f20596d;

    /* renamed from: e  reason: collision with root package name */
    private a f20597e;

    /* renamed from: i  reason: collision with root package name */
    private float f20598i;

    /* renamed from: o  reason: collision with root package name */
    private Paint f20599o;

    /* renamed from: p  reason: collision with root package name */
    private Paint f20600p;

    /* renamed from: q  reason: collision with root package name */
    private int f20601q;

    /* renamed from: r  reason: collision with root package name */
    private int f20602r;

    /* renamed from: s  reason: collision with root package name */
    private int f20603s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f20604t;

    /* renamed from: u  reason: collision with root package name */
    private float f20605u;

    /* renamed from: v  reason: collision with root package name */
    private int f20606v;

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
        this.f20606v = androidx.core.content.a.c(getContext(), oq.a.f44642l);
        this.f20601q = getContext().getResources().getDimensionPixelSize(b.f44652j);
        this.f20602r = getContext().getResources().getDimensionPixelSize(b.f44648f);
        this.f20603s = getContext().getResources().getDimensionPixelSize(b.f44650h);
        Paint paint = new Paint(1);
        this.f20599o = paint;
        paint.setStyle(Paint.Style.STROKE);
        this.f20599o.setStrokeWidth(this.f20601q);
        this.f20599o.setColor(getResources().getColor(oq.a.f44637g));
        Paint paint2 = new Paint(this.f20599o);
        this.f20600p = paint2;
        paint2.setColor(this.f20606v);
        this.f20600p.setStrokeCap(Paint.Cap.ROUND);
        this.f20600p.setStrokeWidth(getContext().getResources().getDimensionPixelSize(b.f44653k));
    }

    private void b(MotionEvent motionEvent, float f10) {
        this.f20605u -= f10;
        postInvalidate();
        this.f20598i = motionEvent.getX();
        a aVar = this.f20597e;
        if (aVar != null) {
            aVar.c(-f10, this.f20605u);
        }
    }

    @Override // android.view.View
    protected void onDraw(Canvas canvas) {
        int i10;
        int i11;
        super.onDraw(canvas);
        canvas.getClipBounds(this.f20596d);
        int width = this.f20596d.width() / (this.f20601q + this.f20603s);
        float f10 = this.f20605u % (i11 + i10);
        for (int i12 = 0; i12 < width; i12++) {
            int i13 = width / 4;
            if (i12 < i13) {
                this.f20599o.setAlpha((int) ((i12 / i13) * 255.0f));
            } else if (i12 > (width * 3) / 4) {
                this.f20599o.setAlpha((int) (((width - i12) / i13) * 255.0f));
            } else {
                this.f20599o.setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
            }
            float f11 = -f10;
            Rect rect = this.f20596d;
            Rect rect2 = this.f20596d;
            canvas.drawLine(rect.left + f11 + ((this.f20601q + this.f20603s) * i12), rect.centerY() - (this.f20602r / 4.0f), f11 + rect2.left + ((this.f20601q + this.f20603s) * i12), rect2.centerY() + (this.f20602r / 4.0f), this.f20599o);
        }
        canvas.drawLine(this.f20596d.centerX(), this.f20596d.centerY() - (this.f20602r / 2.0f), this.f20596d.centerX(), (this.f20602r / 2.0f) + this.f20596d.centerY(), this.f20600p);
    }

    @Override // android.view.View
    public boolean onTouchEvent(MotionEvent motionEvent) {
        int action = motionEvent.getAction();
        if (action != 0) {
            if (action != 1) {
                if (action == 2) {
                    float x10 = motionEvent.getX() - this.f20598i;
                    if (x10 != 0.0f) {
                        if (!this.f20604t) {
                            this.f20604t = true;
                            a aVar = this.f20597e;
                            if (aVar != null) {
                                aVar.b();
                            }
                        }
                        b(motionEvent, x10);
                    }
                }
            } else {
                a aVar2 = this.f20597e;
                if (aVar2 != null) {
                    this.f20604t = false;
                    aVar2.a();
                }
            }
        } else {
            this.f20598i = motionEvent.getX();
        }
        return true;
    }

    public void setMiddleLineColor(int i10) {
        this.f20606v = i10;
        this.f20600p.setColor(i10);
        invalidate();
    }

    public void setScrollingListener(a aVar) {
        this.f20597e = aVar;
    }

    public HorizontalProgressWheelView(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        this.f20596d = new Rect();
        a();
    }
}
