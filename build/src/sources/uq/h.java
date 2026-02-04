package uq;

import android.view.MotionEvent;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private float f50845a;

    /* renamed from: b  reason: collision with root package name */
    private float f50846b;

    /* renamed from: c  reason: collision with root package name */
    private float f50847c;

    /* renamed from: d  reason: collision with root package name */
    private float f50848d;

    /* renamed from: e  reason: collision with root package name */
    private int f50849e = -1;

    /* renamed from: f  reason: collision with root package name */
    private int f50850f = -1;

    /* renamed from: g  reason: collision with root package name */
    private float f50851g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f50852h;

    /* renamed from: i  reason: collision with root package name */
    private a f50853i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        boolean a(h hVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b implements a {
    }

    public h(a aVar) {
        this.f50853i = aVar;
    }

    private float a(float f10, float f11, float f12, float f13, float f14, float f15, float f16, float f17) {
        return b((float) Math.toDegrees((float) Math.atan2(f11 - f13, f10 - f12)), (float) Math.toDegrees((float) Math.atan2(f15 - f17, f14 - f16)));
    }

    private float b(float f10, float f11) {
        float f12 = (f11 % 360.0f) - (f10 % 360.0f);
        this.f50851g = f12;
        if (f12 < -180.0f) {
            this.f50851g = f12 + 360.0f;
        } else if (f12 > 180.0f) {
            this.f50851g = f12 - 360.0f;
        }
        return this.f50851g;
    }

    public float c() {
        return this.f50851g;
    }

    public boolean d(MotionEvent motionEvent) {
        h hVar;
        int actionMasked = motionEvent.getActionMasked();
        if (actionMasked != 0) {
            if (actionMasked != 1) {
                if (actionMasked != 2) {
                    if (actionMasked != 5) {
                        if (actionMasked == 6) {
                            this.f50850f = -1;
                        }
                    } else {
                        this.f50845a = motionEvent.getX();
                        this.f50846b = motionEvent.getY();
                        this.f50850f = motionEvent.findPointerIndex(motionEvent.getPointerId(motionEvent.getActionIndex()));
                        this.f50851g = 0.0f;
                        this.f50852h = true;
                    }
                } else if (this.f50849e != -1 && this.f50850f != -1 && motionEvent.getPointerCount() > this.f50850f) {
                    float x10 = motionEvent.getX(this.f50849e);
                    float y10 = motionEvent.getY(this.f50849e);
                    float x11 = motionEvent.getX(this.f50850f);
                    float y11 = motionEvent.getY(this.f50850f);
                    if (this.f50852h) {
                        this.f50851g = 0.0f;
                        this.f50852h = false;
                        hVar = this;
                    } else {
                        a(this.f50845a, this.f50846b, this.f50847c, this.f50848d, x11, y11, x10, y10);
                        hVar = this;
                    }
                    a aVar = hVar.f50853i;
                    if (aVar != null) {
                        aVar.a(this);
                    }
                    hVar.f50845a = x11;
                    hVar.f50846b = y11;
                    hVar.f50847c = x10;
                    hVar.f50848d = y10;
                }
            } else {
                this.f50849e = -1;
            }
        } else {
            this.f50847c = motionEvent.getX();
            this.f50848d = motionEvent.getY();
            this.f50849e = motionEvent.findPointerIndex(motionEvent.getPointerId(0));
            this.f50851g = 0.0f;
            this.f50852h = true;
        }
        return true;
    }
}
