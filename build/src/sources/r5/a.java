package r5;

import android.graphics.PointF;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final PointF f46127a;

    /* renamed from: b  reason: collision with root package name */
    private final PointF f46128b;

    /* renamed from: c  reason: collision with root package name */
    private final PointF f46129c;

    public a() {
        this.f46127a = new PointF();
        this.f46128b = new PointF();
        this.f46129c = new PointF();
    }

    public PointF a() {
        return this.f46127a;
    }

    public PointF b() {
        return this.f46128b;
    }

    public PointF c() {
        return this.f46129c;
    }

    public void d(float f10, float f11) {
        this.f46127a.set(f10, f11);
    }

    public void e(float f10, float f11) {
        this.f46128b.set(f10, f11);
    }

    public void f(float f10, float f11) {
        this.f46129c.set(f10, f11);
    }

    public String toString() {
        return String.format("v=%.2f,%.2f cp1=%.2f,%.2f cp2=%.2f,%.2f", Float.valueOf(this.f46129c.x), Float.valueOf(this.f46129c.y), Float.valueOf(this.f46127a.x), Float.valueOf(this.f46127a.y), Float.valueOf(this.f46128b.x), Float.valueOf(this.f46128b.y));
    }

    public a(PointF pointF, PointF pointF2, PointF pointF3) {
        this.f46127a = pointF;
        this.f46128b = pointF2;
        this.f46129c = pointF3;
    }
}
