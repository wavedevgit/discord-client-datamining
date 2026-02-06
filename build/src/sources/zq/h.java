package zq;

import android.view.MotionEvent;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private float f56445a;

    /* renamed from: b  reason: collision with root package name */
    private float f56446b;

    /* renamed from: c  reason: collision with root package name */
    private float f56447c;

    /* renamed from: d  reason: collision with root package name */
    private float f56448d;

    /* renamed from: e  reason: collision with root package name */
    private int f56449e = -1;

    /* renamed from: f  reason: collision with root package name */
    private int f56450f = -1;

    /* renamed from: g  reason: collision with root package name */
    private float f56451g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f56452h;

    /* renamed from: i  reason: collision with root package name */
    private a f56453i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        boolean a(h hVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b implements a {
    }

    public h(a aVar) {
        this.f56453i = aVar;
    }

    private float a(float f10, float f11, float f12, float f13, float f14, float f15, float f16, float f17) {
        return b((float) Math.toDegrees((float) Math.atan2(f11 - f13, f10 - f12)), (float) Math.toDegrees((float) Math.atan2(f15 - f17, f14 - f16)));
    }

    private float b(float f10, float f11) {
        float f12 = (f11 % 360.0f) - (f10 % 360.0f);
        this.f56451g = f12;
        if (f12 < -180.0f) {
            this.f56451g = f12 + 360.0f;
        } else if (f12 > 180.0f) {
            this.f56451g = f12 - 360.0f;
        }
        return this.f56451g;
    }

    public float c() {
        return this.f56451g;
    }

    public boolean d(MotionEvent motionEvent) {
        h hVar;
        int actionMasked = motionEvent.getActionMasked();
        if (actionMasked != 0) {
            if (actionMasked != 1) {
                if (actionMasked != 2) {
                    if (actionMasked != 5) {
                        if (actionMasked == 6) {
                            this.f56450f = -1;
                        }
                    } else {
                        this.f56445a = motionEvent.getX();
                        this.f56446b = motionEvent.getY();
                        this.f56450f = motionEvent.findPointerIndex(motionEvent.getPointerId(motionEvent.getActionIndex()));
                        this.f56451g = 0.0f;
                        this.f56452h = true;
                    }
                } else if (this.f56449e != -1 && this.f56450f != -1 && motionEvent.getPointerCount() > this.f56450f) {
                    float x10 = motionEvent.getX(this.f56449e);
                    float y10 = motionEvent.getY(this.f56449e);
                    float x11 = motionEvent.getX(this.f56450f);
                    float y11 = motionEvent.getY(this.f56450f);
                    if (this.f56452h) {
                        this.f56451g = 0.0f;
                        this.f56452h = false;
                        hVar = this;
                    } else {
                        a(this.f56445a, this.f56446b, this.f56447c, this.f56448d, x11, y11, x10, y10);
                        hVar = this;
                    }
                    a aVar = hVar.f56453i;
                    if (aVar != null) {
                        aVar.a(this);
                    }
                    hVar.f56445a = x11;
                    hVar.f56446b = y11;
                    hVar.f56447c = x10;
                    hVar.f56448d = y10;
                }
            } else {
                this.f56449e = -1;
            }
        } else {
            this.f56447c = motionEvent.getX();
            this.f56448d = motionEvent.getY();
            this.f56449e = motionEvent.findPointerIndex(motionEvent.getPointerId(0));
            this.f56451g = 0.0f;
            this.f56452h = true;
        }
        return true;
    }
}
