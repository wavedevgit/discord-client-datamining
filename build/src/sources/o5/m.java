package o5;

import android.graphics.Path;
import java.util.List;
import n5.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class m extends a {

    /* renamed from: i  reason: collision with root package name */
    private final s5.o f42585i;

    /* renamed from: j  reason: collision with root package name */
    private final Path f42586j;

    /* renamed from: k  reason: collision with root package name */
    private Path f42587k;

    /* renamed from: l  reason: collision with root package name */
    private Path f42588l;

    /* renamed from: m  reason: collision with root package name */
    private List f42589m;

    public m(List list) {
        super(list);
        this.f42585i = new s5.o();
        this.f42586j = new Path();
    }

    @Override // o5.a
    /* renamed from: q */
    public Path i(y5.a aVar, float f10) {
        s5.o oVar;
        Path path;
        s5.o oVar2 = (s5.o) aVar.f53985b;
        s5.o oVar3 = (s5.o) aVar.f53986c;
        s5.o oVar4 = this.f42585i;
        if (oVar3 == null) {
            oVar = oVar2;
        } else {
            oVar = oVar3;
        }
        oVar4.c(oVar2, oVar, f10);
        s5.o oVar5 = this.f42585i;
        List list = this.f42589m;
        if (list != null) {
            for (int size = list.size() - 1; size >= 0; size--) {
                oVar5 = ((s) this.f42589m.get(size)).h(oVar5);
            }
        }
        x5.i.h(oVar5, this.f42586j);
        if (this.f42553e != null) {
            if (this.f42587k == null) {
                this.f42587k = new Path();
                this.f42588l = new Path();
            }
            x5.i.h(oVar2, this.f42587k);
            if (oVar3 != null) {
                x5.i.h(oVar3, this.f42588l);
            }
            y5.c cVar = this.f42553e;
            float f11 = aVar.f53990g;
            float floatValue = aVar.f53991h.floatValue();
            Path path2 = this.f42587k;
            if (oVar3 == null) {
                path = path2;
            } else {
                path = this.f42588l;
            }
            return (Path) cVar.b(f11, floatValue, path2, path, f10, e(), f());
        }
        return this.f42586j;
    }

    public void r(List list) {
        this.f42589m = list;
    }
}
