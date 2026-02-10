package ar;

import android.view.MotionEvent;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private float f6023a;

    /* renamed from: b  reason: collision with root package name */
    private float f6024b;

    /* renamed from: c  reason: collision with root package name */
    private float f6025c;

    /* renamed from: d  reason: collision with root package name */
    private float f6026d;

    /* renamed from: e  reason: collision with root package name */
    private int f6027e = -1;

    /* renamed from: f  reason: collision with root package name */
    private int f6028f = -1;

    /* renamed from: g  reason: collision with root package name */
    private float f6029g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f6030h;

    /* renamed from: i  reason: collision with root package name */
    private a f6031i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        boolean a(h hVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b implements a {
    }

    public h(a aVar) {
        this.f6031i = aVar;
    }

    private float a(float f10, float f11, float f12, float f13, float f14, float f15, float f16, float f17) {
        return b((float) Math.toDegrees((float) Math.atan2(f11 - f13, f10 - f12)), (float) Math.toDegrees((float) Math.atan2(f15 - f17, f14 - f16)));
    }

    private float b(float f10, float f11) {
        float f12 = (f11 % 360.0f) - (f10 % 360.0f);
        this.f6029g = f12;
        if (f12 < -180.0f) {
            this.f6029g = f12 + 360.0f;
        } else if (f12 > 180.0f) {
            this.f6029g = f12 - 360.0f;
        }
        return this.f6029g;
    }

    public float c() {
        return this.f6029g;
    }

    public boolean d(MotionEvent motionEvent) {
        h hVar;
        int actionMasked = motionEvent.getActionMasked();
        if (actionMasked != 0) {
            if (actionMasked != 1) {
                if (actionMasked != 2) {
                    if (actionMasked != 5) {
                        if (actionMasked == 6) {
                            this.f6028f = -1;
                        }
                    } else {
                        this.f6023a = motionEvent.getX();
                        this.f6024b = motionEvent.getY();
                        this.f6028f = motionEvent.findPointerIndex(motionEvent.getPointerId(motionEvent.getActionIndex()));
                        this.f6029g = 0.0f;
                        this.f6030h = true;
                    }
                } else if (this.f6027e != -1 && this.f6028f != -1 && motionEvent.getPointerCount() > this.f6028f) {
                    float x10 = motionEvent.getX(this.f6027e);
                    float y10 = motionEvent.getY(this.f6027e);
                    float x11 = motionEvent.getX(this.f6028f);
                    float y11 = motionEvent.getY(this.f6028f);
                    if (this.f6030h) {
                        this.f6029g = 0.0f;
                        this.f6030h = false;
                        hVar = this;
                    } else {
                        a(this.f6023a, this.f6024b, this.f6025c, this.f6026d, x11, y11, x10, y10);
                        hVar = this;
                    }
                    a aVar = hVar.f6031i;
                    if (aVar != null) {
                        aVar.a(this);
                    }
                    hVar.f6023a = x11;
                    hVar.f6024b = y11;
                    hVar.f6025c = x10;
                    hVar.f6026d = y10;
                }
            } else {
                this.f6027e = -1;
            }
        } else {
            this.f6025c = motionEvent.getX();
            this.f6026d = motionEvent.getY();
            this.f6027e = motionEvent.findPointerIndex(motionEvent.getPointerId(0));
            this.f6029g = 0.0f;
            this.f6030h = true;
        }
        return true;
    }
}
