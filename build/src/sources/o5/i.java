package o5;

import android.graphics.Path;
import android.graphics.PointF;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i extends z5.a {

    /* renamed from: q  reason: collision with root package name */
    private Path f40288q;

    /* renamed from: r  reason: collision with root package name */
    private final z5.a f40289r;

    public i(l5.i iVar, z5.a aVar) {
        super(iVar, (PointF) aVar.f56053b, (PointF) aVar.f56054c, aVar.f56055d, aVar.f56056e, aVar.f56057f, aVar.f56058g, aVar.f56059h);
        this.f40289r = aVar;
        j();
    }

    public void j() {
        boolean z10;
        Object obj;
        Object obj2;
        Object obj3 = this.f56054c;
        if (obj3 != null && (obj2 = this.f56053b) != null && ((PointF) obj2).equals(((PointF) obj3).x, ((PointF) obj3).y)) {
            z10 = true;
        } else {
            z10 = false;
        }
        Object obj4 = this.f56053b;
        if (obj4 != null && (obj = this.f56054c) != null && !z10) {
            z5.a aVar = this.f40289r;
            this.f40288q = y5.j.d((PointF) obj4, (PointF) obj, aVar.f56066o, aVar.f56067p);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Path k() {
        return this.f40288q;
    }
}
