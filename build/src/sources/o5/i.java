package o5;

import android.graphics.Path;
import android.graphics.PointF;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i extends y5.a {

    /* renamed from: q  reason: collision with root package name */
    private Path f41505q;

    /* renamed from: r  reason: collision with root package name */
    private final y5.a f41506r;

    public i(l5.i iVar, y5.a aVar) {
        super(iVar, (PointF) aVar.f54980b, (PointF) aVar.f54981c, aVar.f54982d, aVar.f54983e, aVar.f54984f, aVar.f54985g, aVar.f54986h);
        this.f41506r = aVar;
        j();
    }

    public void j() {
        boolean z10;
        Object obj;
        Object obj2;
        Object obj3 = this.f54981c;
        if (obj3 != null && (obj2 = this.f54980b) != null && ((PointF) obj2).equals(((PointF) obj3).x, ((PointF) obj3).y)) {
            z10 = true;
        } else {
            z10 = false;
        }
        Object obj4 = this.f54980b;
        if (obj4 != null && (obj = this.f54981c) != null && !z10) {
            y5.a aVar = this.f41506r;
            this.f41505q = x5.j.d((PointF) obj4, (PointF) obj, aVar.f54993o, aVar.f54994p);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Path k() {
        return this.f41505q;
    }
}
