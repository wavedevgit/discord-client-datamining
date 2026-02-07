package q5;

import android.graphics.PointF;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final PointF f46554a;

    /* renamed from: b  reason: collision with root package name */
    private final PointF f46555b;

    /* renamed from: c  reason: collision with root package name */
    private final PointF f46556c;

    public a() {
        this.f46554a = new PointF();
        this.f46555b = new PointF();
        this.f46556c = new PointF();
    }

    public PointF a() {
        return this.f46554a;
    }

    public PointF b() {
        return this.f46555b;
    }

    public PointF c() {
        return this.f46556c;
    }

    public void d(float f10, float f11) {
        this.f46554a.set(f10, f11);
    }

    public void e(float f10, float f11) {
        this.f46555b.set(f10, f11);
    }

    public void f(float f10, float f11) {
        this.f46556c.set(f10, f11);
    }

    public String toString() {
        return String.format("v=%.2f,%.2f cp1=%.2f,%.2f cp2=%.2f,%.2f", Float.valueOf(this.f46556c.x), Float.valueOf(this.f46556c.y), Float.valueOf(this.f46554a.x), Float.valueOf(this.f46554a.y), Float.valueOf(this.f46555b.x), Float.valueOf(this.f46555b.y));
    }

    public a(PointF pointF, PointF pointF2, PointF pointF3) {
        this.f46554a = pointF;
        this.f46555b = pointF2;
        this.f46556c = pointF3;
    }
}
