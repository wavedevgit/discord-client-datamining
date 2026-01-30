package rq;

import android.view.MotionEvent;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private float f48471a;

    /* renamed from: b  reason: collision with root package name */
    private float f48472b;

    /* renamed from: c  reason: collision with root package name */
    private float f48473c;

    /* renamed from: d  reason: collision with root package name */
    private float f48474d;

    /* renamed from: e  reason: collision with root package name */
    private int f48475e = -1;

    /* renamed from: f  reason: collision with root package name */
    private int f48476f = -1;

    /* renamed from: g  reason: collision with root package name */
    private float f48477g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f48478h;

    /* renamed from: i  reason: collision with root package name */
    private a f48479i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        boolean a(h hVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b implements a {
    }

    public h(a aVar) {
        this.f48479i = aVar;
    }

    private float a(float f10, float f11, float f12, float f13, float f14, float f15, float f16, float f17) {
        return b((float) Math.toDegrees((float) Math.atan2(f11 - f13, f10 - f12)), (float) Math.toDegrees((float) Math.atan2(f15 - f17, f14 - f16)));
    }

    private float b(float f10, float f11) {
        float f12 = (f11 % 360.0f) - (f10 % 360.0f);
        this.f48477g = f12;
        if (f12 < -180.0f) {
            this.f48477g = f12 + 360.0f;
        } else if (f12 > 180.0f) {
            this.f48477g = f12 - 360.0f;
        }
        return this.f48477g;
    }

    public float c() {
        return this.f48477g;
    }

    public boolean d(MotionEvent motionEvent) {
        h hVar;
        int actionMasked = motionEvent.getActionMasked();
        if (actionMasked != 0) {
            if (actionMasked != 1) {
                if (actionMasked != 2) {
                    if (actionMasked != 5) {
                        if (actionMasked == 6) {
                            this.f48476f = -1;
                        }
                    } else {
                        this.f48471a = motionEvent.getX();
                        this.f48472b = motionEvent.getY();
                        this.f48476f = motionEvent.findPointerIndex(motionEvent.getPointerId(motionEvent.getActionIndex()));
                        this.f48477g = 0.0f;
                        this.f48478h = true;
                    }
                } else if (this.f48475e != -1 && this.f48476f != -1 && motionEvent.getPointerCount() > this.f48476f) {
                    float x10 = motionEvent.getX(this.f48475e);
                    float y10 = motionEvent.getY(this.f48475e);
                    float x11 = motionEvent.getX(this.f48476f);
                    float y11 = motionEvent.getY(this.f48476f);
                    if (this.f48478h) {
                        this.f48477g = 0.0f;
                        this.f48478h = false;
                        hVar = this;
                    } else {
                        a(this.f48471a, this.f48472b, this.f48473c, this.f48474d, x11, y11, x10, y10);
                        hVar = this;
                    }
                    a aVar = hVar.f48479i;
                    if (aVar != null) {
                        aVar.a(this);
                    }
                    hVar.f48471a = x11;
                    hVar.f48472b = y11;
                    hVar.f48473c = x10;
                    hVar.f48474d = y10;
                }
            } else {
                this.f48475e = -1;
            }
        } else {
            this.f48473c = motionEvent.getX();
            this.f48474d = motionEvent.getY();
            this.f48475e = motionEvent.findPointerIndex(motionEvent.getPointerId(0));
            this.f48477g = 0.0f;
            this.f48478h = true;
        }
        return true;
    }
}
