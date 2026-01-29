package rq;

import android.view.MotionEvent;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private float f48455a;

    /* renamed from: b  reason: collision with root package name */
    private float f48456b;

    /* renamed from: c  reason: collision with root package name */
    private float f48457c;

    /* renamed from: d  reason: collision with root package name */
    private float f48458d;

    /* renamed from: e  reason: collision with root package name */
    private int f48459e = -1;

    /* renamed from: f  reason: collision with root package name */
    private int f48460f = -1;

    /* renamed from: g  reason: collision with root package name */
    private float f48461g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f48462h;

    /* renamed from: i  reason: collision with root package name */
    private a f48463i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        boolean a(h hVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b implements a {
    }

    public h(a aVar) {
        this.f48463i = aVar;
    }

    private float a(float f10, float f11, float f12, float f13, float f14, float f15, float f16, float f17) {
        return b((float) Math.toDegrees((float) Math.atan2(f11 - f13, f10 - f12)), (float) Math.toDegrees((float) Math.atan2(f15 - f17, f14 - f16)));
    }

    private float b(float f10, float f11) {
        float f12 = (f11 % 360.0f) - (f10 % 360.0f);
        this.f48461g = f12;
        if (f12 < -180.0f) {
            this.f48461g = f12 + 360.0f;
        } else if (f12 > 180.0f) {
            this.f48461g = f12 - 360.0f;
        }
        return this.f48461g;
    }

    public float c() {
        return this.f48461g;
    }

    public boolean d(MotionEvent motionEvent) {
        h hVar;
        int actionMasked = motionEvent.getActionMasked();
        if (actionMasked != 0) {
            if (actionMasked != 1) {
                if (actionMasked != 2) {
                    if (actionMasked != 5) {
                        if (actionMasked == 6) {
                            this.f48460f = -1;
                        }
                    } else {
                        this.f48455a = motionEvent.getX();
                        this.f48456b = motionEvent.getY();
                        this.f48460f = motionEvent.findPointerIndex(motionEvent.getPointerId(motionEvent.getActionIndex()));
                        this.f48461g = 0.0f;
                        this.f48462h = true;
                    }
                } else if (this.f48459e != -1 && this.f48460f != -1 && motionEvent.getPointerCount() > this.f48460f) {
                    float x10 = motionEvent.getX(this.f48459e);
                    float y10 = motionEvent.getY(this.f48459e);
                    float x11 = motionEvent.getX(this.f48460f);
                    float y11 = motionEvent.getY(this.f48460f);
                    if (this.f48462h) {
                        this.f48461g = 0.0f;
                        this.f48462h = false;
                        hVar = this;
                    } else {
                        a(this.f48455a, this.f48456b, this.f48457c, this.f48458d, x11, y11, x10, y10);
                        hVar = this;
                    }
                    a aVar = hVar.f48463i;
                    if (aVar != null) {
                        aVar.a(this);
                    }
                    hVar.f48455a = x11;
                    hVar.f48456b = y11;
                    hVar.f48457c = x10;
                    hVar.f48458d = y10;
                }
            } else {
                this.f48459e = -1;
            }
        } else {
            this.f48457c = motionEvent.getX();
            this.f48458d = motionEvent.getY();
            this.f48459e = motionEvent.findPointerIndex(motionEvent.getPointerId(0));
            this.f48461g = 0.0f;
            this.f48462h = true;
        }
        return true;
    }
}
