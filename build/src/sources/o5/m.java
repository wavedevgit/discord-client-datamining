package o5;

import android.graphics.Path;
import java.util.List;
import n5.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class m extends a {

    /* renamed from: i  reason: collision with root package name */
    private final t5.o f39192i;

    /* renamed from: j  reason: collision with root package name */
    private final Path f39193j;

    /* renamed from: k  reason: collision with root package name */
    private Path f39194k;

    /* renamed from: l  reason: collision with root package name */
    private Path f39195l;

    /* renamed from: m  reason: collision with root package name */
    private List f39196m;

    public m(List list) {
        super(list);
        this.f39192i = new t5.o();
        this.f39193j = new Path();
    }

    @Override // o5.a
    /* renamed from: q */
    public Path i(z5.a aVar, float f10) {
        t5.o oVar;
        Path path;
        t5.o oVar2 = (t5.o) aVar.f56661b;
        t5.o oVar3 = (t5.o) aVar.f56662c;
        t5.o oVar4 = this.f39192i;
        if (oVar3 == null) {
            oVar = oVar2;
        } else {
            oVar = oVar3;
        }
        oVar4.c(oVar2, oVar, f10);
        t5.o oVar5 = this.f39192i;
        List list = this.f39196m;
        if (list != null) {
            for (int size = list.size() - 1; size >= 0; size--) {
                oVar5 = ((s) this.f39196m.get(size)).c(oVar5);
            }
        }
        y5.i.h(oVar5, this.f39193j);
        if (this.f39155e != null) {
            if (this.f39194k == null) {
                this.f39194k = new Path();
                this.f39195l = new Path();
            }
            y5.i.h(oVar2, this.f39194k);
            if (oVar3 != null) {
                y5.i.h(oVar3, this.f39195l);
            }
            z5.c cVar = this.f39155e;
            float f11 = aVar.f56666g;
            float floatValue = aVar.f56667h.floatValue();
            Path path2 = this.f39194k;
            if (oVar3 == null) {
                path = path2;
            } else {
                path = this.f39195l;
            }
            return (Path) cVar.b(f11, floatValue, path2, path, f10, e(), f());
        }
        return this.f39193j;
    }

    public void r(List list) {
        this.f39196m = list;
    }
}
