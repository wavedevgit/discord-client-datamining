package jr;

import android.view.MotionEvent;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private float f31309a;

    /* renamed from: b  reason: collision with root package name */
    private float f31310b;

    /* renamed from: c  reason: collision with root package name */
    private float f31311c;

    /* renamed from: d  reason: collision with root package name */
    private float f31312d;

    /* renamed from: e  reason: collision with root package name */
    private int f31313e = -1;

    /* renamed from: f  reason: collision with root package name */
    private int f31314f = -1;

    /* renamed from: g  reason: collision with root package name */
    private float f31315g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f31316h;

    /* renamed from: i  reason: collision with root package name */
    private a f31317i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        boolean a(h hVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b implements a {
    }

    public h(a aVar) {
        this.f31317i = aVar;
    }

    private float a(float f10, float f11, float f12, float f13, float f14, float f15, float f16, float f17) {
        return b((float) Math.toDegrees((float) Math.atan2(f11 - f13, f10 - f12)), (float) Math.toDegrees((float) Math.atan2(f15 - f17, f14 - f16)));
    }

    private float b(float f10, float f11) {
        float f12 = (f11 % 360.0f) - (f10 % 360.0f);
        this.f31315g = f12;
        if (f12 < -180.0f) {
            this.f31315g = f12 + 360.0f;
        } else if (f12 > 180.0f) {
            this.f31315g = f12 - 360.0f;
        }
        return this.f31315g;
    }

    public float c() {
        return this.f31315g;
    }

    public boolean d(MotionEvent motionEvent) {
        h hVar;
        int actionMasked = motionEvent.getActionMasked();
        if (actionMasked != 0) {
            if (actionMasked != 1) {
                if (actionMasked != 2) {
                    if (actionMasked != 5) {
                        if (actionMasked == 6) {
                            this.f31314f = -1;
                        }
                    } else {
                        this.f31309a = motionEvent.getX();
                        this.f31310b = motionEvent.getY();
                        this.f31314f = motionEvent.findPointerIndex(motionEvent.getPointerId(motionEvent.getActionIndex()));
                        this.f31315g = 0.0f;
                        this.f31316h = true;
                    }
                } else if (this.f31313e != -1 && this.f31314f != -1 && motionEvent.getPointerCount() > this.f31314f) {
                    float x10 = motionEvent.getX(this.f31313e);
                    float y10 = motionEvent.getY(this.f31313e);
                    float x11 = motionEvent.getX(this.f31314f);
                    float y11 = motionEvent.getY(this.f31314f);
                    if (this.f31316h) {
                        this.f31315g = 0.0f;
                        this.f31316h = false;
                        hVar = this;
                    } else {
                        a(this.f31309a, this.f31310b, this.f31311c, this.f31312d, x11, y11, x10, y10);
                        hVar = this;
                    }
                    a aVar = hVar.f31317i;
                    if (aVar != null) {
                        aVar.a(this);
                    }
                    hVar.f31309a = x11;
                    hVar.f31310b = y11;
                    hVar.f31311c = x10;
                    hVar.f31312d = y10;
                }
            } else {
                this.f31313e = -1;
            }
        } else {
            this.f31311c = motionEvent.getX();
            this.f31312d = motionEvent.getY();
            this.f31313e = motionEvent.findPointerIndex(motionEvent.getPointerId(0));
            this.f31315g = 0.0f;
            this.f31316h = true;
        }
        return true;
    }
}
