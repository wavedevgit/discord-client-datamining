package el;

import cl.h;
import cl.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private h f21659a;

    /* renamed from: b  reason: collision with root package name */
    private cl.f f21660b;

    /* renamed from: c  reason: collision with root package name */
    private j f21661c;

    /* renamed from: d  reason: collision with root package name */
    private int f21662d = -1;

    /* renamed from: e  reason: collision with root package name */
    private b f21663e;

    public static boolean b(int i10) {
        if (i10 >= 0 && i10 < 8) {
            return true;
        }
        return false;
    }

    public b a() {
        return this.f21663e;
    }

    public void c(cl.f fVar) {
        this.f21660b = fVar;
    }

    public void d(int i10) {
        this.f21662d = i10;
    }

    public void e(b bVar) {
        this.f21663e = bVar;
    }

    public void f(h hVar) {
        this.f21659a = hVar;
    }

    public void g(j jVar) {
        this.f21661c = jVar;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) androidx.recyclerview.widget.h.DEFAULT_DRAG_ANIMATION_DURATION);
        sb2.append("<<\n");
        sb2.append(" mode: ");
        sb2.append(this.f21659a);
        sb2.append("\n ecLevel: ");
        sb2.append(this.f21660b);
        sb2.append("\n version: ");
        sb2.append(this.f21661c);
        sb2.append("\n maskPattern: ");
        sb2.append(this.f21662d);
        if (this.f21663e == null) {
            sb2.append("\n matrix: null\n");
        } else {
            sb2.append("\n matrix:\n");
            sb2.append(this.f21663e);
        }
        sb2.append(">>\n");
        return sb2.toString();
    }
}
