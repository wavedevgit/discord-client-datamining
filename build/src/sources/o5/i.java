package o5;

import android.graphics.Path;
import android.graphics.PointF;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i extends z5.a {

    /* renamed from: q  reason: collision with root package name */
    private Path f39183q;

    /* renamed from: r  reason: collision with root package name */
    private final z5.a f39184r;

    public i(l5.i iVar, z5.a aVar) {
        super(iVar, (PointF) aVar.f56661b, (PointF) aVar.f56662c, aVar.f56663d, aVar.f56664e, aVar.f56665f, aVar.f56666g, aVar.f56667h);
        this.f39184r = aVar;
        j();
    }

    public void j() {
        boolean z10;
        Object obj;
        Object obj2;
        Object obj3 = this.f56662c;
        if (obj3 != null && (obj2 = this.f56661b) != null && ((PointF) obj2).equals(((PointF) obj3).x, ((PointF) obj3).y)) {
            z10 = true;
        } else {
            z10 = false;
        }
        Object obj4 = this.f56661b;
        if (obj4 != null && (obj = this.f56662c) != null && !z10) {
            z5.a aVar = this.f39184r;
            this.f39183q = y5.j.d((PointF) obj4, (PointF) obj, aVar.f56674o, aVar.f56675p);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Path k() {
        return this.f39183q;
    }
}
