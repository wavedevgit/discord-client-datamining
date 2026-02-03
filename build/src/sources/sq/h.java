package sq;

import android.view.MotionEvent;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private float f49252a;

    /* renamed from: b  reason: collision with root package name */
    private float f49253b;

    /* renamed from: c  reason: collision with root package name */
    private float f49254c;

    /* renamed from: d  reason: collision with root package name */
    private float f49255d;

    /* renamed from: e  reason: collision with root package name */
    private int f49256e = -1;

    /* renamed from: f  reason: collision with root package name */
    private int f49257f = -1;

    /* renamed from: g  reason: collision with root package name */
    private float f49258g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f49259h;

    /* renamed from: i  reason: collision with root package name */
    private a f49260i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        boolean a(h hVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b implements a {
    }

    public h(a aVar) {
        this.f49260i = aVar;
    }

    private float a(float f10, float f11, float f12, float f13, float f14, float f15, float f16, float f17) {
        return b((float) Math.toDegrees((float) Math.atan2(f11 - f13, f10 - f12)), (float) Math.toDegrees((float) Math.atan2(f15 - f17, f14 - f16)));
    }

    private float b(float f10, float f11) {
        float f12 = (f11 % 360.0f) - (f10 % 360.0f);
        this.f49258g = f12;
        if (f12 < -180.0f) {
            this.f49258g = f12 + 360.0f;
        } else if (f12 > 180.0f) {
            this.f49258g = f12 - 360.0f;
        }
        return this.f49258g;
    }

    public float c() {
        return this.f49258g;
    }

    public boolean d(MotionEvent motionEvent) {
        h hVar;
        int actionMasked = motionEvent.getActionMasked();
        if (actionMasked != 0) {
            if (actionMasked != 1) {
                if (actionMasked != 2) {
                    if (actionMasked != 5) {
                        if (actionMasked == 6) {
                            this.f49257f = -1;
                        }
                    } else {
                        this.f49252a = motionEvent.getX();
                        this.f49253b = motionEvent.getY();
                        this.f49257f = motionEvent.findPointerIndex(motionEvent.getPointerId(motionEvent.getActionIndex()));
                        this.f49258g = 0.0f;
                        this.f49259h = true;
                    }
                } else if (this.f49256e != -1 && this.f49257f != -1 && motionEvent.getPointerCount() > this.f49257f) {
                    float x10 = motionEvent.getX(this.f49256e);
                    float y10 = motionEvent.getY(this.f49256e);
                    float x11 = motionEvent.getX(this.f49257f);
                    float y11 = motionEvent.getY(this.f49257f);
                    if (this.f49259h) {
                        this.f49258g = 0.0f;
                        this.f49259h = false;
                        hVar = this;
                    } else {
                        a(this.f49252a, this.f49253b, this.f49254c, this.f49255d, x11, y11, x10, y10);
                        hVar = this;
                    }
                    a aVar = hVar.f49260i;
                    if (aVar != null) {
                        aVar.a(this);
                    }
                    hVar.f49252a = x11;
                    hVar.f49253b = y11;
                    hVar.f49254c = x10;
                    hVar.f49255d = y10;
                }
            } else {
                this.f49256e = -1;
            }
        } else {
            this.f49254c = motionEvent.getX();
            this.f49255d = motionEvent.getY();
            this.f49256e = motionEvent.findPointerIndex(motionEvent.getPointerId(0));
            this.f49258g = 0.0f;
            this.f49259h = true;
        }
        return true;
    }
}
