package fl;

import dl.h;
import dl.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private h f22735a;

    /* renamed from: b  reason: collision with root package name */
    private dl.f f22736b;

    /* renamed from: c  reason: collision with root package name */
    private j f22737c;

    /* renamed from: d  reason: collision with root package name */
    private int f22738d = -1;

    /* renamed from: e  reason: collision with root package name */
    private b f22739e;

    public static boolean b(int i10) {
        if (i10 >= 0 && i10 < 8) {
            return true;
        }
        return false;
    }

    public b a() {
        return this.f22739e;
    }

    public void c(dl.f fVar) {
        this.f22736b = fVar;
    }

    public void d(int i10) {
        this.f22738d = i10;
    }

    public void e(b bVar) {
        this.f22739e = bVar;
    }

    public void f(h hVar) {
        this.f22735a = hVar;
    }

    public void g(j jVar) {
        this.f22737c = jVar;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) androidx.recyclerview.widget.h.DEFAULT_DRAG_ANIMATION_DURATION);
        sb2.append("<<\n");
        sb2.append(" mode: ");
        sb2.append(this.f22735a);
        sb2.append("\n ecLevel: ");
        sb2.append(this.f22736b);
        sb2.append("\n version: ");
        sb2.append(this.f22737c);
        sb2.append("\n maskPattern: ");
        sb2.append(this.f22738d);
        if (this.f22739e == null) {
            sb2.append("\n matrix: null\n");
        } else {
            sb2.append("\n matrix:\n");
            sb2.append(this.f22739e);
        }
        sb2.append(">>\n");
        return sb2.toString();
    }
}
