package zq;

import android.view.MotionEvent;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private float f56493a;

    /* renamed from: b  reason: collision with root package name */
    private float f56494b;

    /* renamed from: c  reason: collision with root package name */
    private float f56495c;

    /* renamed from: d  reason: collision with root package name */
    private float f56496d;

    /* renamed from: e  reason: collision with root package name */
    private int f56497e = -1;

    /* renamed from: f  reason: collision with root package name */
    private int f56498f = -1;

    /* renamed from: g  reason: collision with root package name */
    private float f56499g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f56500h;

    /* renamed from: i  reason: collision with root package name */
    private a f56501i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        boolean a(h hVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b implements a {
    }

    public h(a aVar) {
        this.f56501i = aVar;
    }

    private float a(float f10, float f11, float f12, float f13, float f14, float f15, float f16, float f17) {
        return b((float) Math.toDegrees((float) Math.atan2(f11 - f13, f10 - f12)), (float) Math.toDegrees((float) Math.atan2(f15 - f17, f14 - f16)));
    }

    private float b(float f10, float f11) {
        float f12 = (f11 % 360.0f) - (f10 % 360.0f);
        this.f56499g = f12;
        if (f12 < -180.0f) {
            this.f56499g = f12 + 360.0f;
        } else if (f12 > 180.0f) {
            this.f56499g = f12 - 360.0f;
        }
        return this.f56499g;
    }

    public float c() {
        return this.f56499g;
    }

    public boolean d(MotionEvent motionEvent) {
        h hVar;
        int actionMasked = motionEvent.getActionMasked();
        if (actionMasked != 0) {
            if (actionMasked != 1) {
                if (actionMasked != 2) {
                    if (actionMasked != 5) {
                        if (actionMasked == 6) {
                            this.f56498f = -1;
                        }
                    } else {
                        this.f56493a = motionEvent.getX();
                        this.f56494b = motionEvent.getY();
                        this.f56498f = motionEvent.findPointerIndex(motionEvent.getPointerId(motionEvent.getActionIndex()));
                        this.f56499g = 0.0f;
                        this.f56500h = true;
                    }
                } else if (this.f56497e != -1 && this.f56498f != -1 && motionEvent.getPointerCount() > this.f56498f) {
                    float x10 = motionEvent.getX(this.f56497e);
                    float y10 = motionEvent.getY(this.f56497e);
                    float x11 = motionEvent.getX(this.f56498f);
                    float y11 = motionEvent.getY(this.f56498f);
                    if (this.f56500h) {
                        this.f56499g = 0.0f;
                        this.f56500h = false;
                        hVar = this;
                    } else {
                        a(this.f56493a, this.f56494b, this.f56495c, this.f56496d, x11, y11, x10, y10);
                        hVar = this;
                    }
                    a aVar = hVar.f56501i;
                    if (aVar != null) {
                        aVar.a(this);
                    }
                    hVar.f56493a = x11;
                    hVar.f56494b = y11;
                    hVar.f56495c = x10;
                    hVar.f56496d = y10;
                }
            } else {
                this.f56497e = -1;
            }
        } else {
            this.f56495c = motionEvent.getX();
            this.f56496d = motionEvent.getY();
            this.f56497e = motionEvent.findPointerIndex(motionEvent.getPointerId(0));
            this.f56499g = 0.0f;
            this.f56500h = true;
        }
        return true;
    }
}
