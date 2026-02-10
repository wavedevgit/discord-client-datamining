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
    private final Rect f20984d;

    /* renamed from: e  reason: collision with root package name */
    private a f20985e;

    /* renamed from: i  reason: collision with root package name */
    private float f20986i;

    /* renamed from: o  reason: collision with root package name */
    private Paint f20987o;

    /* renamed from: p  reason: collision with root package name */
    private Paint f20988p;

    /* renamed from: q  reason: collision with root package name */
    private int f20989q;

    /* renamed from: r  reason: collision with root package name */
    private int f20990r;

    /* renamed from: s  reason: collision with root package name */
    private int f20991s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f20992t;

    /* renamed from: u  reason: collision with root package name */
    private float f20993u;

    /* renamed from: v  reason: collision with root package name */
    private int f20994v;

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
        this.f20994v = androidx.core.content.a.c(getContext(), fr.a.f24231l);
        this.f20989q = getContext().getResources().getDimensionPixelSize(b.f24241j);
        this.f20990r = getContext().getResources().getDimensionPixelSize(b.f24237f);
        this.f20991s = getContext().getResources().getDimensionPixelSize(b.f24239h);
        Paint paint = new Paint(1);
        this.f20987o = paint;
        paint.setStyle(Paint.Style.STROKE);
        this.f20987o.setStrokeWidth(this.f20989q);
        this.f20987o.setColor(getResources().getColor(fr.a.f24226g));
        Paint paint2 = new Paint(this.f20987o);
        this.f20988p = paint2;
        paint2.setColor(this.f20994v);
        this.f20988p.setStrokeCap(Paint.Cap.ROUND);
        this.f20988p.setStrokeWidth(getContext().getResources().getDimensionPixelSize(b.f24242k));
    }

    private void b(MotionEvent motionEvent, float f10) {
        this.f20993u -= f10;
        postInvalidate();
        this.f20986i = motionEvent.getX();
        a aVar = this.f20985e;
        if (aVar != null) {
            aVar.c(-f10, this.f20993u);
        }
    }

    @Override // android.view.View
    protected void onDraw(Canvas canvas) {
        int i10;
        int i11;
        super.onDraw(canvas);
        canvas.getClipBounds(this.f20984d);
        int width = this.f20984d.width() / (this.f20989q + this.f20991s);
        float f10 = this.f20993u % (i11 + i10);
        for (int i12 = 0; i12 < width; i12++) {
            int i13 = width / 4;
            if (i12 < i13) {
                this.f20987o.setAlpha((int) ((i12 / i13) * 255.0f));
            } else if (i12 > (width * 3) / 4) {
                this.f20987o.setAlpha((int) (((width - i12) / i13) * 255.0f));
            } else {
                this.f20987o.setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
            }
            float f11 = -f10;
            Rect rect = this.f20984d;
            Rect rect2 = this.f20984d;
            canvas.drawLine(rect.left + f11 + ((this.f20989q + this.f20991s) * i12), rect.centerY() - (this.f20990r / 4.0f), f11 + rect2.left + ((this.f20989q + this.f20991s) * i12), rect2.centerY() + (this.f20990r / 4.0f), this.f20987o);
        }
        canvas.drawLine(this.f20984d.centerX(), this.f20984d.centerY() - (this.f20990r / 2.0f), this.f20984d.centerX(), (this.f20990r / 2.0f) + this.f20984d.centerY(), this.f20988p);
    }

    @Override // android.view.View
    public boolean onTouchEvent(MotionEvent motionEvent) {
        int action = motionEvent.getAction();
        if (action != 0) {
            if (action != 1) {
                if (action == 2) {
                    float x10 = motionEvent.getX() - this.f20986i;
                    if (x10 != 0.0f) {
                        if (!this.f20992t) {
                            this.f20992t = true;
                            a aVar = this.f20985e;
                            if (aVar != null) {
                                aVar.b();
                            }
                        }
                        b(motionEvent, x10);
                    }
                }
            } else {
                a aVar2 = this.f20985e;
                if (aVar2 != null) {
                    this.f20992t = false;
                    aVar2.a();
                }
            }
        } else {
            this.f20986i = motionEvent.getX();
        }
        return true;
    }

    public void setMiddleLineColor(int i10) {
        this.f20994v = i10;
        this.f20988p.setColor(i10);
        invalidate();
    }

    public void setScrollingListener(a aVar) {
        this.f20985e = aVar;
    }

    public HorizontalProgressWheelView(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        this.f20984d = new Rect();
        a();
    }
}
