package o5;

import android.graphics.Path;
import android.graphics.PointF;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i extends y5.a {

    /* renamed from: q  reason: collision with root package name */
    private Path f42576q;

    /* renamed from: r  reason: collision with root package name */
    private final y5.a f42577r;

    public i(l5.i iVar, y5.a aVar) {
        super(iVar, (PointF) aVar.f53985b, (PointF) aVar.f53986c, aVar.f53987d, aVar.f53988e, aVar.f53989f, aVar.f53990g, aVar.f53991h);
        this.f42577r = aVar;
        j();
    }

    public void j() {
        boolean z10;
        Object obj;
        Object obj2;
        Object obj3 = this.f53986c;
        if (obj3 != null && (obj2 = this.f53985b) != null && ((PointF) obj2).equals(((PointF) obj3).x, ((PointF) obj3).y)) {
            z10 = true;
        } else {
            z10 = false;
        }
        Object obj4 = this.f53985b;
        if (obj4 != null && (obj = this.f53986c) != null && !z10) {
            y5.a aVar = this.f42577r;
            this.f42576q = x5.j.d((PointF) obj4, (PointF) obj, aVar.f53998o, aVar.f53999p);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Path k() {
        return this.f42576q;
    }
}
