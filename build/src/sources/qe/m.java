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
    private final a f44114i;

    /* renamed from: o  reason: collision with root package name */
    private final float f44115o;

    /* renamed from: p  reason: collision with root package name */
    private final GestureDetector f44116p;

    /* renamed from: d  reason: collision with root package name */
    private final PointF f44112d = new PointF();

    /* renamed from: e  reason: collision with root package name */
    private final PointF f44113e = new PointF();

    /* renamed from: q  reason: collision with root package name */
    private volatile float f44117q = 3.1415927f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void b(PointF pointF);

        boolean onSingleTapUp(MotionEvent motionEvent);
    }

    public m(Context context, a aVar, float f10) {
        this.f44114i = aVar;
        this.f44115o = f10;
        this.f44116p = new GestureDetector(context, this);
    }

    @Override // qe.d.a
    public void a(float[] fArr, float f10) {
        this.f44117q = -f10;
    }

    @Override // android.view.GestureDetector.SimpleOnGestureListener, android.view.GestureDetector.OnGestureListener
    public boolean onDown(MotionEvent motionEvent) {
        this.f44112d.set(motionEvent.getX(), motionEvent.getY());
        return true;
    }

    @Override // android.view.GestureDetector.SimpleOnGestureListener, android.view.GestureDetector.OnGestureListener
    public boolean onScroll(MotionEvent motionEvent, MotionEvent motionEvent2, float f10, float f11) {
        float x10 = (motionEvent2.getX() - this.f44112d.x) / this.f44115o;
        float y10 = motionEvent2.getY();
        PointF pointF = this.f44112d;
        float f12 = (y10 - pointF.y) / this.f44115o;
        pointF.set(motionEvent2.getX(), motionEvent2.getY());
        double d10 = this.f44117q;
        float cos = (float) Math.cos(d10);
        float sin = (float) Math.sin(d10);
        PointF pointF2 = this.f44113e;
        pointF2.x -= (cos * x10) - (sin * f12);
        float f13 = pointF2.y + (sin * x10) + (cos * f12);
        pointF2.y = f13;
        pointF2.y = Math.max(-45.0f, Math.min(45.0f, f13));
        this.f44114i.b(this.f44113e);
        return true;
    }

    @Override // android.view.GestureDetector.SimpleOnGestureListener, android.view.GestureDetector.OnGestureListener
    public boolean onSingleTapUp(MotionEvent motionEvent) {
        return this.f44114i.onSingleTapUp(motionEvent);
    }

    @Override // android.view.View.OnTouchListener
    public boolean onTouch(View view, MotionEvent motionEvent) {
        return this.f44116p.onTouchEvent(motionEvent);
    }
}
