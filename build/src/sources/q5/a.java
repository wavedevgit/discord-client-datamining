package q5;

import android.graphics.PointF;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final PointF f47394a;

    /* renamed from: b  reason: collision with root package name */
    private final PointF f47395b;

    /* renamed from: c  reason: collision with root package name */
    private final PointF f47396c;

    public a() {
        this.f47394a = new PointF();
        this.f47395b = new PointF();
        this.f47396c = new PointF();
    }

    public PointF a() {
        return this.f47394a;
    }

    public PointF b() {
        return this.f47395b;
    }

    public PointF c() {
        return this.f47396c;
    }

    public void d(float f10, float f11) {
        this.f47394a.set(f10, f11);
    }

    public void e(float f10, float f11) {
        this.f47395b.set(f10, f11);
    }

    public void f(float f10, float f11) {
        this.f47396c.set(f10, f11);
    }

    public String toString() {
        return String.format("v=%.2f,%.2f cp1=%.2f,%.2f cp2=%.2f,%.2f", Float.valueOf(this.f47396c.x), Float.valueOf(this.f47396c.y), Float.valueOf(this.f47394a.x), Float.valueOf(this.f47394a.y), Float.valueOf(this.f47395b.x), Float.valueOf(this.f47395b.y));
    }

    public a(PointF pointF, PointF pointF2, PointF pointF3) {
        this.f47394a = pointF;
        this.f47395b = pointF2;
        this.f47396c = pointF3;
    }
}
