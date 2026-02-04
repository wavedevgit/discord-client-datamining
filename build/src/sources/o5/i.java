package o5;

import android.graphics.Path;
import android.graphics.PointF;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i extends y5.a {

    /* renamed from: q  reason: collision with root package name */
    private Path f42376q;

    /* renamed from: r  reason: collision with root package name */
    private final y5.a f42377r;

    public i(l5.i iVar, y5.a aVar) {
        super(iVar, (PointF) aVar.f53740b, (PointF) aVar.f53741c, aVar.f53742d, aVar.f53743e, aVar.f53744f, aVar.f53745g, aVar.f53746h);
        this.f42377r = aVar;
        j();
    }

    public void j() {
        boolean z10;
        Object obj;
        Object obj2;
        Object obj3 = this.f53741c;
        if (obj3 != null && (obj2 = this.f53740b) != null && ((PointF) obj2).equals(((PointF) obj3).x, ((PointF) obj3).y)) {
            z10 = true;
        } else {
            z10 = false;
        }
        Object obj4 = this.f53740b;
        if (obj4 != null && (obj = this.f53741c) != null && !z10) {
            y5.a aVar = this.f42377r;
            this.f42376q = x5.j.d((PointF) obj4, (PointF) obj, aVar.f53753o, aVar.f53754p);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Path k() {
        return this.f42376q;
    }
}
