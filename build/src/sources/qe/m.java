package qe;

import android.content.Context;
import android.graphics.PointF;
import android.view.GestureDetector;
import android.view.MotionEvent;
import android.view.View;
import qe.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class m extends GestureDetector.SimpleOnGestureListener implements View.OnTouchListener, d.a {

    /* renamed from: i  reason: collision with root package name */
    private final a f44682i;

    /* renamed from: o  reason: collision with root package name */
    private final float f44683o;

    /* renamed from: p  reason: collision with root package name */
    private final GestureDetector f44684p;

    /* renamed from: d  reason: collision with root package name */
    private final PointF f44680d = new PointF();

    /* renamed from: e  reason: collision with root package name */
    private final PointF f44681e = new PointF();

    /* renamed from: q  reason: collision with root package name */
    private volatile float f44685q = 3.1415927f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void b(PointF pointF);

        boolean onSingleTapUp(MotionEvent motionEvent);
    }

    public m(Context context, a aVar, float f10) {
        this.f44682i = aVar;
        this.f44683o = f10;
        this.f44684p = new GestureDetector(context, this);
    }

    @Override // qe.d.a
    public void a(float[] fArr, float f10) {
        this.f44685q = -f10;
    }

    @Override // android.view.GestureDetector.SimpleOnGestureListener, android.view.GestureDetector.OnGestureListener
    public boolean onDown(MotionEvent motionEvent) {
        this.f44680d.set(motionEvent.getX(), motionEvent.getY());
        return true;
    }

    @Override // android.view.GestureDetector.SimpleOnGestureListener, android.view.GestureDetector.OnGestureListener
    public boolean onScroll(MotionEvent motionEvent, MotionEvent motionEvent2, float f10, float f11) {
        float x10 = (motionEvent2.getX() - this.f44680d.x) / this.f44683o;
        float y10 = motionEvent2.getY();
        PointF pointF = this.f44680d;
        float f12 = (y10 - pointF.y) / this.f44683o;
        pointF.set(motionEvent2.getX(), motionEvent2.getY());
        double d10 = this.f44685q;
        float cos = (float) Math.cos(d10);
        float sin = (float) Math.sin(d10);
        PointF pointF2 = this.f44681e;
        pointF2.x -= (cos * x10) - (sin * f12);
        float f13 = pointF2.y + (sin * x10) + (cos * f12);
        pointF2.y = f13;
        pointF2.y = Math.max(-45.0f, Math.min(45.0f, f13));
        this.f44682i.b(this.f44681e);
        return true;
    }

    @Override // android.view.GestureDetector.SimpleOnGestureListener, android.view.GestureDetector.OnGestureListener
    public boolean onSingleTapUp(MotionEvent motionEvent) {
        return this.f44682i.onSingleTapUp(motionEvent);
    }

    @Override // android.view.View.OnTouchListener
    public boolean onTouch(View view, MotionEvent motionEvent) {
        return this.f44684p.onTouchEvent(motionEvent);
    }
}
