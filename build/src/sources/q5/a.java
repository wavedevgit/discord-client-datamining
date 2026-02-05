package q5;

import android.graphics.PointF;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final PointF f47458a;

    /* renamed from: b  reason: collision with root package name */
    private final PointF f47459b;

    /* renamed from: c  reason: collision with root package name */
    private final PointF f47460c;

    public a() {
        this.f47458a = new PointF();
        this.f47459b = new PointF();
        this.f47460c = new PointF();
    }

    public PointF a() {
        return this.f47458a;
    }

    public PointF b() {
        return this.f47459b;
    }

    public PointF c() {
        return this.f47460c;
    }

    public void d(float f10, float f11) {
        this.f47458a.set(f10, f11);
    }

    public void e(float f10, float f11) {
        this.f47459b.set(f10, f11);
    }

    public void f(float f10, float f11) {
        this.f47460c.set(f10, f11);
    }

    public String toString() {
        return String.format("v=%.2f,%.2f cp1=%.2f,%.2f cp2=%.2f,%.2f", Float.valueOf(this.f47460c.x), Float.valueOf(this.f47460c.y), Float.valueOf(this.f47458a.x), Float.valueOf(this.f47458a.y), Float.valueOf(this.f47459b.x), Float.valueOf(this.f47459b.y));
    }

    public a(PointF pointF, PointF pointF2, PointF pointF3) {
        this.f47458a = pointF;
        this.f47459b = pointF2;
        this.f47460c = pointF3;
    }
}
