package r5;

import android.graphics.PointF;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final PointF f47672a;

    /* renamed from: b  reason: collision with root package name */
    private final PointF f47673b;

    /* renamed from: c  reason: collision with root package name */
    private final PointF f47674c;

    public a() {
        this.f47672a = new PointF();
        this.f47673b = new PointF();
        this.f47674c = new PointF();
    }

    public PointF a() {
        return this.f47672a;
    }

    public PointF b() {
        return this.f47673b;
    }

    public PointF c() {
        return this.f47674c;
    }

    public void d(float f10, float f11) {
        this.f47672a.set(f10, f11);
    }

    public void e(float f10, float f11) {
        this.f47673b.set(f10, f11);
    }

    public void f(float f10, float f11) {
        this.f47674c.set(f10, f11);
    }

    public String toString() {
        return String.format("v=%.2f,%.2f cp1=%.2f,%.2f cp2=%.2f,%.2f", Float.valueOf(this.f47674c.x), Float.valueOf(this.f47674c.y), Float.valueOf(this.f47672a.x), Float.valueOf(this.f47672a.y), Float.valueOf(this.f47673b.x), Float.valueOf(this.f47673b.y));
    }

    public a(PointF pointF, PointF pointF2, PointF pointF3) {
        this.f47672a = pointF;
        this.f47673b = pointF2;
        this.f47674c = pointF3;
    }
}
