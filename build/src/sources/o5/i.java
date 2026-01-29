package o5;

import android.graphics.Path;
import android.graphics.PointF;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i extends y5.a {

    /* renamed from: q  reason: collision with root package name */
    private Path f42432q;

    /* renamed from: r  reason: collision with root package name */
    private final y5.a f42433r;

    public i(l5.i iVar, y5.a aVar) {
        super(iVar, (PointF) aVar.f53994b, (PointF) aVar.f53995c, aVar.f53996d, aVar.f53997e, aVar.f53998f, aVar.f53999g, aVar.f54000h);
        this.f42433r = aVar;
        j();
    }

    public void j() {
        boolean z10;
        Object obj;
        Object obj2;
        Object obj3 = this.f53995c;
        if (obj3 != null && (obj2 = this.f53994b) != null && ((PointF) obj2).equals(((PointF) obj3).x, ((PointF) obj3).y)) {
            z10 = true;
        } else {
            z10 = false;
        }
        Object obj4 = this.f53994b;
        if (obj4 != null && (obj = this.f53995c) != null && !z10) {
            y5.a aVar = this.f42433r;
            this.f42432q = x5.j.d((PointF) obj4, (PointF) obj, aVar.f54007o, aVar.f54008p);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Path k() {
        return this.f42432q;
    }
}
