package r5;

import android.graphics.PointF;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final PointF f46695a;

    /* renamed from: b  reason: collision with root package name */
    private final PointF f46696b;

    /* renamed from: c  reason: collision with root package name */
    private final PointF f46697c;

    public a() {
        this.f46695a = new PointF();
        this.f46696b = new PointF();
        this.f46697c = new PointF();
    }

    public PointF a() {
        return this.f46695a;
    }

    public PointF b() {
        return this.f46696b;
    }

    public PointF c() {
        return this.f46697c;
    }

    public void d(float f10, float f11) {
        this.f46695a.set(f10, f11);
    }

    public void e(float f10, float f11) {
        this.f46696b.set(f10, f11);
    }

    public void f(float f10, float f11) {
        this.f46697c.set(f10, f11);
    }

    public String toString() {
        return String.format("v=%.2f,%.2f cp1=%.2f,%.2f cp2=%.2f,%.2f", Float.valueOf(this.f46697c.x), Float.valueOf(this.f46697c.y), Float.valueOf(this.f46695a.x), Float.valueOf(this.f46695a.y), Float.valueOf(this.f46696b.x), Float.valueOf(this.f46696b.y));
    }

    public a(PointF pointF, PointF pointF2, PointF pointF3) {
        this.f46695a = pointF;
        this.f46696b = pointF2;
        this.f46697c = pointF3;
    }
}
