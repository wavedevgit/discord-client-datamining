package q5;

import android.graphics.PointF;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final PointF f46989a;

    /* renamed from: b  reason: collision with root package name */
    private final PointF f46990b;

    /* renamed from: c  reason: collision with root package name */
    private final PointF f46991c;

    public a() {
        this.f46989a = new PointF();
        this.f46990b = new PointF();
        this.f46991c = new PointF();
    }

    public PointF a() {
        return this.f46989a;
    }

    public PointF b() {
        return this.f46990b;
    }

    public PointF c() {
        return this.f46991c;
    }

    public void d(float f10, float f11) {
        this.f46989a.set(f10, f11);
    }

    public void e(float f10, float f11) {
        this.f46990b.set(f10, f11);
    }

    public void f(float f10, float f11) {
        this.f46991c.set(f10, f11);
    }

    public String toString() {
        return String.format("v=%.2f,%.2f cp1=%.2f,%.2f cp2=%.2f,%.2f", Float.valueOf(this.f46991c.x), Float.valueOf(this.f46991c.y), Float.valueOf(this.f46989a.x), Float.valueOf(this.f46989a.y), Float.valueOf(this.f46990b.x), Float.valueOf(this.f46990b.y));
    }

    public a(PointF pointF, PointF pointF2, PointF pointF3) {
        this.f46989a = pointF;
        this.f46990b = pointF2;
        this.f46991c = pointF3;
    }
}
