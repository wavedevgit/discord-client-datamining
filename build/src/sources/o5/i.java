package o5;

import android.graphics.Path;
import android.graphics.PointF;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i extends y5.a {

    /* renamed from: q  reason: collision with root package name */
    private Path f41553q;

    /* renamed from: r  reason: collision with root package name */
    private final y5.a f41554r;

    public i(l5.i iVar, y5.a aVar) {
        super(iVar, (PointF) aVar.f55028b, (PointF) aVar.f55029c, aVar.f55030d, aVar.f55031e, aVar.f55032f, aVar.f55033g, aVar.f55034h);
        this.f41554r = aVar;
        j();
    }

    public void j() {
        boolean z10;
        Object obj;
        Object obj2;
        Object obj3 = this.f55029c;
        if (obj3 != null && (obj2 = this.f55028b) != null && ((PointF) obj2).equals(((PointF) obj3).x, ((PointF) obj3).y)) {
            z10 = true;
        } else {
            z10 = false;
        }
        Object obj4 = this.f55028b;
        if (obj4 != null && (obj = this.f55029c) != null && !z10) {
            y5.a aVar = this.f41554r;
            this.f41553q = x5.j.d((PointF) obj4, (PointF) obj, aVar.f55041o, aVar.f55042p);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Path k() {
        return this.f41553q;
    }
}
