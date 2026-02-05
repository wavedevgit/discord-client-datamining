package xq;

import android.view.MotionEvent;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private float f54084a;

    /* renamed from: b  reason: collision with root package name */
    private float f54085b;

    /* renamed from: c  reason: collision with root package name */
    private float f54086c;

    /* renamed from: d  reason: collision with root package name */
    private float f54087d;

    /* renamed from: e  reason: collision with root package name */
    private int f54088e = -1;

    /* renamed from: f  reason: collision with root package name */
    private int f54089f = -1;

    /* renamed from: g  reason: collision with root package name */
    private float f54090g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f54091h;

    /* renamed from: i  reason: collision with root package name */
    private a f54092i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        boolean a(h hVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b implements a {
    }

    public h(a aVar) {
        this.f54092i = aVar;
    }

    private float a(float f10, float f11, float f12, float f13, float f14, float f15, float f16, float f17) {
        return b((float) Math.toDegrees((float) Math.atan2(f11 - f13, f10 - f12)), (float) Math.toDegrees((float) Math.atan2(f15 - f17, f14 - f16)));
    }

    private float b(float f10, float f11) {
        float f12 = (f11 % 360.0f) - (f10 % 360.0f);
        this.f54090g = f12;
        if (f12 < -180.0f) {
            this.f54090g = f12 + 360.0f;
        } else if (f12 > 180.0f) {
            this.f54090g = f12 - 360.0f;
        }
        return this.f54090g;
    }

    public float c() {
        return this.f54090g;
    }

    public boolean d(MotionEvent motionEvent) {
        h hVar;
        int actionMasked = motionEvent.getActionMasked();
        if (actionMasked != 0) {
            if (actionMasked != 1) {
                if (actionMasked != 2) {
                    if (actionMasked != 5) {
                        if (actionMasked == 6) {
                            this.f54089f = -1;
                        }
                    } else {
                        this.f54084a = motionEvent.getX();
                        this.f54085b = motionEvent.getY();
                        this.f54089f = motionEvent.findPointerIndex(motionEvent.getPointerId(motionEvent.getActionIndex()));
                        this.f54090g = 0.0f;
                        this.f54091h = true;
                    }
                } else if (this.f54088e != -1 && this.f54089f != -1 && motionEvent.getPointerCount() > this.f54089f) {
                    float x10 = motionEvent.getX(this.f54088e);
                    float y10 = motionEvent.getY(this.f54088e);
                    float x11 = motionEvent.getX(this.f54089f);
                    float y11 = motionEvent.getY(this.f54089f);
                    if (this.f54091h) {
                        this.f54090g = 0.0f;
                        this.f54091h = false;
                        hVar = this;
                    } else {
                        a(this.f54084a, this.f54085b, this.f54086c, this.f54087d, x11, y11, x10, y10);
                        hVar = this;
                    }
                    a aVar = hVar.f54092i;
                    if (aVar != null) {
                        aVar.a(this);
                    }
                    hVar.f54084a = x11;
                    hVar.f54085b = y11;
                    hVar.f54086c = x10;
                    hVar.f54087d = y10;
                }
            } else {
                this.f54088e = -1;
            }
        } else {
            this.f54086c = motionEvent.getX();
            this.f54087d = motionEvent.getY();
            this.f54088e = motionEvent.findPointerIndex(motionEvent.getPointerId(0));
            this.f54090g = 0.0f;
            this.f54091h = true;
        }
        return true;
    }
}
