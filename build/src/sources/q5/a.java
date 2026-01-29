package q5;

import android.graphics.PointF;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final PointF f46973a;

    /* renamed from: b  reason: collision with root package name */
    private final PointF f46974b;

    /* renamed from: c  reason: collision with root package name */
    private final PointF f46975c;

    public a() {
        this.f46973a = new PointF();
        this.f46974b = new PointF();
        this.f46975c = new PointF();
    }

    public PointF a() {
        return this.f46973a;
    }

    public PointF b() {
        return this.f46974b;
    }

    public PointF c() {
        return this.f46975c;
    }

    public void d(float f10, float f11) {
        this.f46973a.set(f10, f11);
    }

    public void e(float f10, float f11) {
        this.f46974b.set(f10, f11);
    }

    public void f(float f10, float f11) {
        this.f46975c.set(f10, f11);
    }

    public String toString() {
        return String.format("v=%.2f,%.2f cp1=%.2f,%.2f cp2=%.2f,%.2f", Float.valueOf(this.f46975c.x), Float.valueOf(this.f46975c.y), Float.valueOf(this.f46973a.x), Float.valueOf(this.f46973a.y), Float.valueOf(this.f46974b.x), Float.valueOf(this.f46974b.y));
    }

    public a(PointF pointF, PointF pointF2, PointF pointF3) {
        this.f46973a = pointF;
        this.f46974b = pointF2;
        this.f46975c = pointF3;
    }
}
