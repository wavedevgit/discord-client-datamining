package o5;

import android.graphics.Path;
import java.util.List;
import n5.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class m extends a {

    /* renamed from: i  reason: collision with root package name */
    private final t5.o f38624i;

    /* renamed from: j  reason: collision with root package name */
    private final Path f38625j;

    /* renamed from: k  reason: collision with root package name */
    private Path f38626k;

    /* renamed from: l  reason: collision with root package name */
    private Path f38627l;

    /* renamed from: m  reason: collision with root package name */
    private List f38628m;

    public m(List list) {
        super(list);
        this.f38624i = new t5.o();
        this.f38625j = new Path();
    }

    @Override // o5.a
    /* renamed from: q */
    public Path i(z5.a aVar, float f10) {
        t5.o oVar;
        Path path;
        t5.o oVar2 = (t5.o) aVar.f56093b;
        t5.o oVar3 = (t5.o) aVar.f56094c;
        t5.o oVar4 = this.f38624i;
        if (oVar3 == null) {
            oVar = oVar2;
        } else {
            oVar = oVar3;
        }
        oVar4.c(oVar2, oVar, f10);
        t5.o oVar5 = this.f38624i;
        List list = this.f38628m;
        if (list != null) {
            for (int size = list.size() - 1; size >= 0; size--) {
                oVar5 = ((s) this.f38628m.get(size)).c(oVar5);
            }
        }
        y5.i.h(oVar5, this.f38625j);
        if (this.f38587e != null) {
            if (this.f38626k == null) {
                this.f38626k = new Path();
                this.f38627l = new Path();
            }
            y5.i.h(oVar2, this.f38626k);
            if (oVar3 != null) {
                y5.i.h(oVar3, this.f38627l);
            }
            z5.c cVar = this.f38587e;
            float f11 = aVar.f56098g;
            float floatValue = aVar.f56099h.floatValue();
            Path path2 = this.f38626k;
            if (oVar3 == null) {
                path = path2;
            } else {
                path = this.f38627l;
            }
            return (Path) cVar.b(f11, floatValue, path2, path, f10, e(), f());
        }
        return this.f38625j;
    }

    public void r(List list) {
        this.f38628m = list;
    }
}
