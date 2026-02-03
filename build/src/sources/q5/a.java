package q5;

import android.graphics.PointF;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final PointF f47244a;

    /* renamed from: b  reason: collision with root package name */
    private final PointF f47245b;

    /* renamed from: c  reason: collision with root package name */
    private final PointF f47246c;

    public a() {
        this.f47244a = new PointF();
        this.f47245b = new PointF();
        this.f47246c = new PointF();
    }

    public PointF a() {
        return this.f47244a;
    }

    public PointF b() {
        return this.f47245b;
    }

    public PointF c() {
        return this.f47246c;
    }

    public void d(float f10, float f11) {
        this.f47244a.set(f10, f11);
    }

    public void e(float f10, float f11) {
        this.f47245b.set(f10, f11);
    }

    public void f(float f10, float f11) {
        this.f47246c.set(f10, f11);
    }

    public String toString() {
        return String.format("v=%.2f,%.2f cp1=%.2f,%.2f cp2=%.2f,%.2f", Float.valueOf(this.f47246c.x), Float.valueOf(this.f47246c.y), Float.valueOf(this.f47244a.x), Float.valueOf(this.f47244a.y), Float.valueOf(this.f47245b.x), Float.valueOf(this.f47245b.y));
    }

    public a(PointF pointF, PointF pointF2, PointF pointF3) {
        this.f47244a = pointF;
        this.f47245b = pointF2;
        this.f47246c = pointF3;
    }
}
