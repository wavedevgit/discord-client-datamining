package cl;

import al.h;
import al.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private h f7715a;

    /* renamed from: b  reason: collision with root package name */
    private al.f f7716b;

    /* renamed from: c  reason: collision with root package name */
    private j f7717c;

    /* renamed from: d  reason: collision with root package name */
    private int f7718d = -1;

    /* renamed from: e  reason: collision with root package name */
    private b f7719e;

    public static boolean b(int i10) {
        if (i10 >= 0 && i10 < 8) {
            return true;
        }
        return false;
    }

    public b a() {
        return this.f7719e;
    }

    public void c(al.f fVar) {
        this.f7716b = fVar;
    }

    public void d(int i10) {
        this.f7718d = i10;
    }

    public void e(b bVar) {
        this.f7719e = bVar;
    }

    public void f(h hVar) {
        this.f7715a = hVar;
    }

    public void g(j jVar) {
        this.f7717c = jVar;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) androidx.recyclerview.widget.h.DEFAULT_DRAG_ANIMATION_DURATION);
        sb2.append("<<\n");
        sb2.append(" mode: ");
        sb2.append(this.f7715a);
        sb2.append("\n ecLevel: ");
        sb2.append(this.f7716b);
        sb2.append("\n version: ");
        sb2.append(this.f7717c);
        sb2.append("\n maskPattern: ");
        sb2.append(this.f7718d);
        if (this.f7719e == null) {
            sb2.append("\n matrix: null\n");
        } else {
            sb2.append("\n matrix:\n");
            sb2.append(this.f7719e);
        }
        sb2.append(">>\n");
        return sb2.toString();
    }
}
