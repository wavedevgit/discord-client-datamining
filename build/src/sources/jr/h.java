package jr;

import android.view.MotionEvent;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private float f31877a;

    /* renamed from: b  reason: collision with root package name */
    private float f31878b;

    /* renamed from: c  reason: collision with root package name */
    private float f31879c;

    /* renamed from: d  reason: collision with root package name */
    private float f31880d;

    /* renamed from: e  reason: collision with root package name */
    private int f31881e = -1;

    /* renamed from: f  reason: collision with root package name */
    private int f31882f = -1;

    /* renamed from: g  reason: collision with root package name */
    private float f31883g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f31884h;

    /* renamed from: i  reason: collision with root package name */
    private a f31885i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        boolean a(h hVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b implements a {
    }

    public h(a aVar) {
        this.f31885i = aVar;
    }

    private float a(float f10, float f11, float f12, float f13, float f14, float f15, float f16, float f17) {
        return b((float) Math.toDegrees((float) Math.atan2(f11 - f13, f10 - f12)), (float) Math.toDegrees((float) Math.atan2(f15 - f17, f14 - f16)));
    }

    private float b(float f10, float f11) {
        float f12 = (f11 % 360.0f) - (f10 % 360.0f);
        this.f31883g = f12;
        if (f12 < -180.0f) {
            this.f31883g = f12 + 360.0f;
        } else if (f12 > 180.0f) {
            this.f31883g = f12 - 360.0f;
        }
        return this.f31883g;
    }

    public float c() {
        return this.f31883g;
    }

    public boolean d(MotionEvent motionEvent) {
        h hVar;
        int actionMasked = motionEvent.getActionMasked();
        if (actionMasked != 0) {
            if (actionMasked != 1) {
                if (actionMasked != 2) {
                    if (actionMasked != 5) {
                        if (actionMasked == 6) {
                            this.f31882f = -1;
                        }
                    } else {
                        this.f31877a = motionEvent.getX();
                        this.f31878b = motionEvent.getY();
                        this.f31882f = motionEvent.findPointerIndex(motionEvent.getPointerId(motionEvent.getActionIndex()));
                        this.f31883g = 0.0f;
                        this.f31884h = true;
                    }
                } else if (this.f31881e != -1 && this.f31882f != -1 && motionEvent.getPointerCount() > this.f31882f) {
                    float x10 = motionEvent.getX(this.f31881e);
                    float y10 = motionEvent.getY(this.f31881e);
                    float x11 = motionEvent.getX(this.f31882f);
                    float y11 = motionEvent.getY(this.f31882f);
                    if (this.f31884h) {
                        this.f31883g = 0.0f;
                        this.f31884h = false;
                        hVar = this;
                    } else {
                        a(this.f31877a, this.f31878b, this.f31879c, this.f31880d, x11, y11, x10, y10);
                        hVar = this;
                    }
                    a aVar = hVar.f31885i;
                    if (aVar != null) {
                        aVar.a(this);
                    }
                    hVar.f31877a = x11;
                    hVar.f31878b = y11;
                    hVar.f31879c = x10;
                    hVar.f31880d = y10;
                }
            } else {
                this.f31881e = -1;
            }
        } else {
            this.f31879c = motionEvent.getX();
            this.f31880d = motionEvent.getY();
            this.f31881e = motionEvent.findPointerIndex(motionEvent.getPointerId(0));
            this.f31883g = 0.0f;
            this.f31884h = true;
        }
        return true;
    }
}
