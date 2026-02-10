package o5;

import android.graphics.Path;
import java.util.List;
import n5.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class m extends a {

    /* renamed from: i  reason: collision with root package name */
    private final t5.o f40297i;

    /* renamed from: j  reason: collision with root package name */
    private final Path f40298j;

    /* renamed from: k  reason: collision with root package name */
    private Path f40299k;

    /* renamed from: l  reason: collision with root package name */
    private Path f40300l;

    /* renamed from: m  reason: collision with root package name */
    private List f40301m;

    public m(List list) {
        super(list);
        this.f40297i = new t5.o();
        this.f40298j = new Path();
    }

    @Override // o5.a
    /* renamed from: q */
    public Path i(z5.a aVar, float f10) {
        t5.o oVar;
        Path path;
        t5.o oVar2 = (t5.o) aVar.f56053b;
        t5.o oVar3 = (t5.o) aVar.f56054c;
        t5.o oVar4 = this.f40297i;
        if (oVar3 == null) {
            oVar = oVar2;
        } else {
            oVar = oVar3;
        }
        oVar4.c(oVar2, oVar, f10);
        t5.o oVar5 = this.f40297i;
        List list = this.f40301m;
        if (list != null) {
            for (int size = list.size() - 1; size >= 0; size--) {
                oVar5 = ((s) this.f40301m.get(size)).c(oVar5);
            }
        }
        y5.i.h(oVar5, this.f40298j);
        if (this.f40260e != null) {
            if (this.f40299k == null) {
                this.f40299k = new Path();
                this.f40300l = new Path();
            }
            y5.i.h(oVar2, this.f40299k);
            if (oVar3 != null) {
                y5.i.h(oVar3, this.f40300l);
            }
            z5.c cVar = this.f40260e;
            float f11 = aVar.f56058g;
            float floatValue = aVar.f56059h.floatValue();
            Path path2 = this.f40299k;
            if (oVar3 == null) {
                path = path2;
            } else {
                path = this.f40300l;
            }
            return (Path) cVar.b(f11, floatValue, path2, path, f10, e(), f());
        }
        return this.f40298j;
    }

    public void r(List list) {
        this.f40301m = list;
    }
}
