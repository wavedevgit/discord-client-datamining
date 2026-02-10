package o5;

import android.graphics.Path;
import android.graphics.PointF;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i extends z5.a {

    /* renamed from: q  reason: collision with root package name */
    private Path f38614q;

    /* renamed from: r  reason: collision with root package name */
    private final z5.a f38615r;

    public i(l5.i iVar, z5.a aVar) {
        super(iVar, (PointF) aVar.f56092b, (PointF) aVar.f56093c, aVar.f56094d, aVar.f56095e, aVar.f56096f, aVar.f56097g, aVar.f56098h);
        this.f38615r = aVar;
        j();
    }

    public void j() {
        boolean z10;
        Object obj;
        Object obj2;
        Object obj3 = this.f56093c;
        if (obj3 != null && (obj2 = this.f56092b) != null && ((PointF) obj2).equals(((PointF) obj3).x, ((PointF) obj3).y)) {
            z10 = true;
        } else {
            z10 = false;
        }
        Object obj4 = this.f56092b;
        if (obj4 != null && (obj = this.f56093c) != null && !z10) {
            z5.a aVar = this.f38615r;
            this.f38614q = y5.j.d((PointF) obj4, (PointF) obj, aVar.f56105o, aVar.f56106p);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Path k() {
        return this.f38614q;
    }
}
