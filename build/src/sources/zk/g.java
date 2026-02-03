package zk;

import xk.h;
import xk.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private h f55921a;

    /* renamed from: b  reason: collision with root package name */
    private xk.f f55922b;

    /* renamed from: c  reason: collision with root package name */
    private j f55923c;

    /* renamed from: d  reason: collision with root package name */
    private int f55924d = -1;

    /* renamed from: e  reason: collision with root package name */
    private b f55925e;

    public static boolean b(int i10) {
        if (i10 >= 0 && i10 < 8) {
            return true;
        }
        return false;
    }

    public b a() {
        return this.f55925e;
    }

    public void c(xk.f fVar) {
        this.f55922b = fVar;
    }

    public void d(int i10) {
        this.f55924d = i10;
    }

    public void e(b bVar) {
        this.f55925e = bVar;
    }

    public void f(h hVar) {
        this.f55921a = hVar;
    }

    public void g(j jVar) {
        this.f55923c = jVar;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) androidx.recyclerview.widget.h.DEFAULT_DRAG_ANIMATION_DURATION);
        sb2.append("<<\n");
        sb2.append(" mode: ");
        sb2.append(this.f55921a);
        sb2.append("\n ecLevel: ");
        sb2.append(this.f55922b);
        sb2.append("\n version: ");
        sb2.append(this.f55923c);
        sb2.append("\n maskPattern: ");
        sb2.append(this.f55924d);
        if (this.f55925e == null) {
            sb2.append("\n matrix: null\n");
        } else {
            sb2.append("\n matrix:\n");
            sb2.append(this.f55925e);
        }
        sb2.append(">>\n");
        return sb2.toString();
    }
}
