package o5;

import android.graphics.Path;
import android.graphics.PointF;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i extends z5.a {

    /* renamed from: q  reason: collision with root package name */
    private Path f38615q;

    /* renamed from: r  reason: collision with root package name */
    private final z5.a f38616r;

    public i(l5.i iVar, z5.a aVar) {
        super(iVar, (PointF) aVar.f56093b, (PointF) aVar.f56094c, aVar.f56095d, aVar.f56096e, aVar.f56097f, aVar.f56098g, aVar.f56099h);
        this.f38616r = aVar;
        j();
    }

    public void j() {
        boolean z10;
        Object obj;
        Object obj2;
        Object obj3 = this.f56094c;
        if (obj3 != null && (obj2 = this.f56093b) != null && ((PointF) obj2).equals(((PointF) obj3).x, ((PointF) obj3).y)) {
            z10 = true;
        } else {
            z10 = false;
        }
        Object obj4 = this.f56093b;
        if (obj4 != null && (obj = this.f56094c) != null && !z10) {
            z5.a aVar = this.f38616r;
            this.f38615q = y5.j.d((PointF) obj4, (PointF) obj, aVar.f56106o, aVar.f56107p);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Path k() {
        return this.f38615q;
    }
}
