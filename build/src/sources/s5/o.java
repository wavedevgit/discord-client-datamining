package s5;

import android.graphics.PointF;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class o {

    /* renamed from: a  reason: collision with root package name */
    private final List f48815a;

    /* renamed from: b  reason: collision with root package name */
    private PointF f48816b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f48817c;

    public o(PointF pointF, boolean z10, List list) {
        this.f48816b = pointF;
        this.f48817c = z10;
        this.f48815a = new ArrayList(list);
    }

    public List a() {
        return this.f48815a;
    }

    public PointF b() {
        return this.f48816b;
    }

    public void c(o oVar, o oVar2, float f10) {
        boolean z10;
        if (this.f48816b == null) {
            this.f48816b = new PointF();
        }
        if (!oVar.d() && !oVar2.d()) {
            z10 = false;
        } else {
            z10 = true;
        }
        this.f48817c = z10;
        if (oVar.a().size() != oVar2.a().size()) {
            x5.d.c("Curves must have the same number of control points. Shape 1: " + oVar.a().size() + "\tShape 2: " + oVar2.a().size());
        }
        int min = Math.min(oVar.a().size(), oVar2.a().size());
        if (this.f48815a.size() < min) {
            for (int size = this.f48815a.size(); size < min; size++) {
                this.f48815a.add(new q5.a());
            }
        } else if (this.f48815a.size() > min) {
            for (int size2 = this.f48815a.size() - 1; size2 >= min; size2--) {
                List list = this.f48815a;
                list.remove(list.size() - 1);
            }
        }
        PointF b10 = oVar.b();
        PointF b11 = oVar2.b();
        f(x5.i.i(b10.x, b11.x, f10), x5.i.i(b10.y, b11.y, f10));
        for (int size3 = this.f48815a.size() - 1; size3 >= 0; size3--) {
            q5.a aVar = (q5.a) oVar.a().get(size3);
            q5.a aVar2 = (q5.a) oVar2.a().get(size3);
            PointF a10 = aVar.a();
            PointF b12 = aVar.b();
            PointF c10 = aVar.c();
            PointF a11 = aVar2.a();
            PointF b13 = aVar2.b();
            PointF c11 = aVar2.c();
            ((q5.a) this.f48815a.get(size3)).d(x5.i.i(a10.x, a11.x, f10), x5.i.i(a10.y, a11.y, f10));
            ((q5.a) this.f48815a.get(size3)).e(x5.i.i(b12.x, b13.x, f10), x5.i.i(b12.y, b13.y, f10));
            ((q5.a) this.f48815a.get(size3)).f(x5.i.i(c10.x, c11.x, f10), x5.i.i(c10.y, c11.y, f10));
        }
    }

    public boolean d() {
        return this.f48817c;
    }

    public void e(boolean z10) {
        this.f48817c = z10;
    }

    public void f(float f10, float f11) {
        if (this.f48816b == null) {
            this.f48816b = new PointF();
        }
        this.f48816b.set(f10, f11);
    }

    public String toString() {
        return "ShapeData{numCurves=" + this.f48815a.size() + "closed=" + this.f48817c + '}';
    }

    public o() {
        this.f48815a = new ArrayList();
    }
}
