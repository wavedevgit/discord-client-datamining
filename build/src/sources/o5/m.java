package o5;

import android.graphics.Path;
import java.util.List;
import n5.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class m extends a {

    /* renamed from: i  reason: collision with root package name */
    private final t5.o f38623i;

    /* renamed from: j  reason: collision with root package name */
    private final Path f38624j;

    /* renamed from: k  reason: collision with root package name */
    private Path f38625k;

    /* renamed from: l  reason: collision with root package name */
    private Path f38626l;

    /* renamed from: m  reason: collision with root package name */
    private List f38627m;

    public m(List list) {
        super(list);
        this.f38623i = new t5.o();
        this.f38624j = new Path();
    }

    @Override // o5.a
    /* renamed from: q */
    public Path i(z5.a aVar, float f10) {
        t5.o oVar;
        Path path;
        t5.o oVar2 = (t5.o) aVar.f56092b;
        t5.o oVar3 = (t5.o) aVar.f56093c;
        t5.o oVar4 = this.f38623i;
        if (oVar3 == null) {
            oVar = oVar2;
        } else {
            oVar = oVar3;
        }
        oVar4.c(oVar2, oVar, f10);
        t5.o oVar5 = this.f38623i;
        List list = this.f38627m;
        if (list != null) {
            for (int size = list.size() - 1; size >= 0; size--) {
                oVar5 = ((s) this.f38627m.get(size)).c(oVar5);
            }
        }
        y5.i.h(oVar5, this.f38624j);
        if (this.f38586e != null) {
            if (this.f38625k == null) {
                this.f38625k = new Path();
                this.f38626l = new Path();
            }
            y5.i.h(oVar2, this.f38625k);
            if (oVar3 != null) {
                y5.i.h(oVar3, this.f38626l);
            }
            z5.c cVar = this.f38586e;
            float f11 = aVar.f56097g;
            float floatValue = aVar.f56098h.floatValue();
            Path path2 = this.f38625k;
            if (oVar3 == null) {
                path = path2;
            } else {
                path = this.f38626l;
            }
            return (Path) cVar.b(f11, floatValue, path2, path, f10, e(), f());
        }
        return this.f38624j;
    }

    public void r(List list) {
        this.f38627m = list;
    }
}
