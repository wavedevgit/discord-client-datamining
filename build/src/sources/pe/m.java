package pe;

import android.content.Context;
import android.graphics.PointF;
import android.view.GestureDetector;
import android.view.MotionEvent;
import android.view.View;
import pe.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class m extends GestureDetector.SimpleOnGestureListener implements View.OnTouchListener, d.a {

    /* renamed from: i  reason: collision with root package name */
    private final a f45124i;

    /* renamed from: o  reason: collision with root package name */
    private final float f45125o;

    /* renamed from: p  reason: collision with root package name */
    private final GestureDetector f45126p;

    /* renamed from: d  reason: collision with root package name */
    private final PointF f45122d = new PointF();

    /* renamed from: e  reason: collision with root package name */
    private final PointF f45123e = new PointF();

    /* renamed from: q  reason: collision with root package name */
    private volatile float f45127q = 3.1415927f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void b(PointF pointF);

        boolean onSingleTapUp(MotionEvent motionEvent);
    }

    public m(Context context, a aVar, float f10) {
        this.f45124i = aVar;
        this.f45125o = f10;
        this.f45126p = new GestureDetector(context, this);
    }

    @Override // pe.d.a
    public void a(float[] fArr, float f10) {
        this.f45127q = -f10;
    }

    @Override // android.view.GestureDetector.SimpleOnGestureListener, android.view.GestureDetector.OnGestureListener
    public boolean onDown(MotionEvent motionEvent) {
        this.f45122d.set(motionEvent.getX(), motionEvent.getY());
        return true;
    }

    @Override // android.view.GestureDetector.SimpleOnGestureListener, android.view.GestureDetector.OnGestureListener
    public boolean onScroll(MotionEvent motionEvent, MotionEvent motionEvent2, float f10, float f11) {
        float x10 = (motionEvent2.getX() - this.f45122d.x) / this.f45125o;
        float y10 = motionEvent2.getY();
        PointF pointF = this.f45122d;
        float f12 = (y10 - pointF.y) / this.f45125o;
        pointF.set(motionEvent2.getX(), motionEvent2.getY());
        double d10 = this.f45127q;
        float cos = (float) Math.cos(d10);
        float sin = (float) Math.sin(d10);
        PointF pointF2 = this.f45123e;
        pointF2.x -= (cos * x10) - (sin * f12);
        float f13 = pointF2.y + (sin * x10) + (cos * f12);
        pointF2.y = f13;
        pointF2.y = Math.max(-45.0f, Math.min(45.0f, f13));
        this.f45124i.b(this.f45123e);
        return true;
    }

    @Override // android.view.GestureDetector.SimpleOnGestureListener, android.view.GestureDetector.OnGestureListener
    public boolean onSingleTapUp(MotionEvent motionEvent) {
        return this.f45124i.onSingleTapUp(motionEvent);
    }

    @Override // android.view.View.OnTouchListener
    public boolean onTouch(View view, MotionEvent motionEvent) {
        return this.f45126p.onTouchEvent(motionEvent);
    }
}
