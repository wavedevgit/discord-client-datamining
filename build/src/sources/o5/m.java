package o5;

import android.graphics.Path;
import java.util.List;
import n5.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class m extends a {

    /* renamed from: i  reason: collision with root package name */
    private final s5.o f42385i;

    /* renamed from: j  reason: collision with root package name */
    private final Path f42386j;

    /* renamed from: k  reason: collision with root package name */
    private Path f42387k;

    /* renamed from: l  reason: collision with root package name */
    private Path f42388l;

    /* renamed from: m  reason: collision with root package name */
    private List f42389m;

    public m(List list) {
        super(list);
        this.f42385i = new s5.o();
        this.f42386j = new Path();
    }

    @Override // o5.a
    /* renamed from: q */
    public Path i(y5.a aVar, float f10) {
        s5.o oVar;
        Path path;
        s5.o oVar2 = (s5.o) aVar.f53740b;
        s5.o oVar3 = (s5.o) aVar.f53741c;
        s5.o oVar4 = this.f42385i;
        if (oVar3 == null) {
            oVar = oVar2;
        } else {
            oVar = oVar3;
        }
        oVar4.c(oVar2, oVar, f10);
        s5.o oVar5 = this.f42385i;
        List list = this.f42389m;
        if (list != null) {
            for (int size = list.size() - 1; size >= 0; size--) {
                oVar5 = ((s) this.f42389m.get(size)).h(oVar5);
            }
        }
        x5.i.h(oVar5, this.f42386j);
        if (this.f42353e != null) {
            if (this.f42387k == null) {
                this.f42387k = new Path();
                this.f42388l = new Path();
            }
            x5.i.h(oVar2, this.f42387k);
            if (oVar3 != null) {
                x5.i.h(oVar3, this.f42388l);
            }
            y5.c cVar = this.f42353e;
            float f11 = aVar.f53745g;
            float floatValue = aVar.f53746h.floatValue();
            Path path2 = this.f42387k;
            if (oVar3 == null) {
                path = path2;
            } else {
                path = this.f42388l;
            }
            return (Path) cVar.b(f11, floatValue, path2, path, f10, e(), f());
        }
        return this.f42386j;
    }

    public void r(List list) {
        this.f42389m = list;
    }
}
