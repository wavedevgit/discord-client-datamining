package uq;

import android.view.MotionEvent;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private float f50848a;

    /* renamed from: b  reason: collision with root package name */
    private float f50849b;

    /* renamed from: c  reason: collision with root package name */
    private float f50850c;

    /* renamed from: d  reason: collision with root package name */
    private float f50851d;

    /* renamed from: e  reason: collision with root package name */
    private int f50852e = -1;

    /* renamed from: f  reason: collision with root package name */
    private int f50853f = -1;

    /* renamed from: g  reason: collision with root package name */
    private float f50854g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f50855h;

    /* renamed from: i  reason: collision with root package name */
    private a f50856i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        boolean a(h hVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b implements a {
    }

    public h(a aVar) {
        this.f50856i = aVar;
    }

    private float a(float f10, float f11, float f12, float f13, float f14, float f15, float f16, float f17) {
        return b((float) Math.toDegrees((float) Math.atan2(f11 - f13, f10 - f12)), (float) Math.toDegrees((float) Math.atan2(f15 - f17, f14 - f16)));
    }

    private float b(float f10, float f11) {
        float f12 = (f11 % 360.0f) - (f10 % 360.0f);
        this.f50854g = f12;
        if (f12 < -180.0f) {
            this.f50854g = f12 + 360.0f;
        } else if (f12 > 180.0f) {
            this.f50854g = f12 - 360.0f;
        }
        return this.f50854g;
    }

    public float c() {
        return this.f50854g;
    }

    public boolean d(MotionEvent motionEvent) {
        h hVar;
        int actionMasked = motionEvent.getActionMasked();
        if (actionMasked != 0) {
            if (actionMasked != 1) {
                if (actionMasked != 2) {
                    if (actionMasked != 5) {
                        if (actionMasked == 6) {
                            this.f50853f = -1;
                        }
                    } else {
                        this.f50848a = motionEvent.getX();
                        this.f50849b = motionEvent.getY();
                        this.f50853f = motionEvent.findPointerIndex(motionEvent.getPointerId(motionEvent.getActionIndex()));
                        this.f50854g = 0.0f;
                        this.f50855h = true;
                    }
                } else if (this.f50852e != -1 && this.f50853f != -1 && motionEvent.getPointerCount() > this.f50853f) {
                    float x10 = motionEvent.getX(this.f50852e);
                    float y10 = motionEvent.getY(this.f50852e);
                    float x11 = motionEvent.getX(this.f50853f);
                    float y11 = motionEvent.getY(this.f50853f);
                    if (this.f50855h) {
                        this.f50854g = 0.0f;
                        this.f50855h = false;
                        hVar = this;
                    } else {
                        a(this.f50848a, this.f50849b, this.f50850c, this.f50851d, x11, y11, x10, y10);
                        hVar = this;
                    }
                    a aVar = hVar.f50856i;
                    if (aVar != null) {
                        aVar.a(this);
                    }
                    hVar.f50848a = x11;
                    hVar.f50849b = y11;
                    hVar.f50850c = x10;
                    hVar.f50851d = y10;
                }
            } else {
                this.f50852e = -1;
            }
        } else {
            this.f50850c = motionEvent.getX();
            this.f50851d = motionEvent.getY();
            this.f50852e = motionEvent.findPointerIndex(motionEvent.getPointerId(0));
            this.f50854g = 0.0f;
            this.f50855h = true;
        }
        return true;
    }
}
