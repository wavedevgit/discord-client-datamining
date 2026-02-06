package o5;

import android.graphics.Path;
import java.util.List;
import n5.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class m extends a {

    /* renamed from: i  reason: collision with root package name */
    private final s5.o f41514i;

    /* renamed from: j  reason: collision with root package name */
    private final Path f41515j;

    /* renamed from: k  reason: collision with root package name */
    private Path f41516k;

    /* renamed from: l  reason: collision with root package name */
    private Path f41517l;

    /* renamed from: m  reason: collision with root package name */
    private List f41518m;

    public m(List list) {
        super(list);
        this.f41514i = new s5.o();
        this.f41515j = new Path();
    }

    @Override // o5.a
    /* renamed from: q */
    public Path i(y5.a aVar, float f10) {
        s5.o oVar;
        Path path;
        s5.o oVar2 = (s5.o) aVar.f54980b;
        s5.o oVar3 = (s5.o) aVar.f54981c;
        s5.o oVar4 = this.f41514i;
        if (oVar3 == null) {
            oVar = oVar2;
        } else {
            oVar = oVar3;
        }
        oVar4.c(oVar2, oVar, f10);
        s5.o oVar5 = this.f41514i;
        List list = this.f41518m;
        if (list != null) {
            for (int size = list.size() - 1; size >= 0; size--) {
                oVar5 = ((s) this.f41518m.get(size)).h(oVar5);
            }
        }
        x5.i.h(oVar5, this.f41515j);
        if (this.f41482e != null) {
            if (this.f41516k == null) {
                this.f41516k = new Path();
                this.f41517l = new Path();
            }
            x5.i.h(oVar2, this.f41516k);
            if (oVar3 != null) {
                x5.i.h(oVar3, this.f41517l);
            }
            y5.c cVar = this.f41482e;
            float f11 = aVar.f54985g;
            float floatValue = aVar.f54986h.floatValue();
            Path path2 = this.f41516k;
            if (oVar3 == null) {
                path = path2;
            } else {
                path = this.f41517l;
            }
            return (Path) cVar.b(f11, floatValue, path2, path, f10, e(), f());
        }
        return this.f41515j;
    }

    public void r(List list) {
        this.f41518m = list;
    }
}
