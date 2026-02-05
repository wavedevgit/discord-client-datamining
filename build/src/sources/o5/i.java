package o5;

import android.graphics.Path;
import android.graphics.PointF;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i extends y5.a {

    /* renamed from: q  reason: collision with root package name */
    private Path f42282q;

    /* renamed from: r  reason: collision with root package name */
    private final y5.a f42283r;

    public i(l5.i iVar, y5.a aVar) {
        super(iVar, (PointF) aVar.f54436b, (PointF) aVar.f54437c, aVar.f54438d, aVar.f54439e, aVar.f54440f, aVar.f54441g, aVar.f54442h);
        this.f42283r = aVar;
        j();
    }

    public void j() {
        boolean z10;
        Object obj;
        Object obj2;
        Object obj3 = this.f54437c;
        if (obj3 != null && (obj2 = this.f54436b) != null && ((PointF) obj2).equals(((PointF) obj3).x, ((PointF) obj3).y)) {
            z10 = true;
        } else {
            z10 = false;
        }
        Object obj4 = this.f54436b;
        if (obj4 != null && (obj = this.f54437c) != null && !z10) {
            y5.a aVar = this.f42283r;
            this.f42282q = x5.j.d((PointF) obj4, (PointF) obj, aVar.f54449o, aVar.f54450p);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Path k() {
        return this.f42282q;
    }
}
