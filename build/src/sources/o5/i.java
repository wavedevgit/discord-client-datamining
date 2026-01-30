package o5;

import android.graphics.Path;
import android.graphics.PointF;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i extends y5.a {

    /* renamed from: q  reason: collision with root package name */
    private Path f42448q;

    /* renamed from: r  reason: collision with root package name */
    private final y5.a f42449r;

    public i(l5.i iVar, y5.a aVar) {
        super(iVar, (PointF) aVar.f54010b, (PointF) aVar.f54011c, aVar.f54012d, aVar.f54013e, aVar.f54014f, aVar.f54015g, aVar.f54016h);
        this.f42449r = aVar;
        j();
    }

    public void j() {
        boolean z10;
        Object obj;
        Object obj2;
        Object obj3 = this.f54011c;
        if (obj3 != null && (obj2 = this.f54010b) != null && ((PointF) obj2).equals(((PointF) obj3).x, ((PointF) obj3).y)) {
            z10 = true;
        } else {
            z10 = false;
        }
        Object obj4 = this.f54010b;
        if (obj4 != null && (obj = this.f54011c) != null && !z10) {
            y5.a aVar = this.f42449r;
            this.f42448q = x5.j.d((PointF) obj4, (PointF) obj, aVar.f54023o, aVar.f54024p);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Path k() {
        return this.f42448q;
    }
}
