package r5;

import android.graphics.PointF;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final PointF f46126a;

    /* renamed from: b  reason: collision with root package name */
    private final PointF f46127b;

    /* renamed from: c  reason: collision with root package name */
    private final PointF f46128c;

    public a() {
        this.f46126a = new PointF();
        this.f46127b = new PointF();
        this.f46128c = new PointF();
    }

    public PointF a() {
        return this.f46126a;
    }

    public PointF b() {
        return this.f46127b;
    }

    public PointF c() {
        return this.f46128c;
    }

    public void d(float f10, float f11) {
        this.f46126a.set(f10, f11);
    }

    public void e(float f10, float f11) {
        this.f46127b.set(f10, f11);
    }

    public void f(float f10, float f11) {
        this.f46128c.set(f10, f11);
    }

    public String toString() {
        return String.format("v=%.2f,%.2f cp1=%.2f,%.2f cp2=%.2f,%.2f", Float.valueOf(this.f46128c.x), Float.valueOf(this.f46128c.y), Float.valueOf(this.f46126a.x), Float.valueOf(this.f46126a.y), Float.valueOf(this.f46127b.x), Float.valueOf(this.f46127b.y));
    }

    public a(PointF pointF, PointF pointF2, PointF pointF3) {
        this.f46126a = pointF;
        this.f46127b = pointF2;
        this.f46128c = pointF3;
    }
}
