package q5;

import android.graphics.PointF;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final PointF f46506a;

    /* renamed from: b  reason: collision with root package name */
    private final PointF f46507b;

    /* renamed from: c  reason: collision with root package name */
    private final PointF f46508c;

    public a() {
        this.f46506a = new PointF();
        this.f46507b = new PointF();
        this.f46508c = new PointF();
    }

    public PointF a() {
        return this.f46506a;
    }

    public PointF b() {
        return this.f46507b;
    }

    public PointF c() {
        return this.f46508c;
    }

    public void d(float f10, float f11) {
        this.f46506a.set(f10, f11);
    }

    public void e(float f10, float f11) {
        this.f46507b.set(f10, f11);
    }

    public void f(float f10, float f11) {
        this.f46508c.set(f10, f11);
    }

    public String toString() {
        return String.format("v=%.2f,%.2f cp1=%.2f,%.2f cp2=%.2f,%.2f", Float.valueOf(this.f46508c.x), Float.valueOf(this.f46508c.y), Float.valueOf(this.f46506a.x), Float.valueOf(this.f46506a.y), Float.valueOf(this.f46507b.x), Float.valueOf(this.f46507b.y));
    }

    public a(PointF pointF, PointF pointF2, PointF pointF3) {
        this.f46506a = pointF;
        this.f46507b = pointF2;
        this.f46508c = pointF3;
    }
}
