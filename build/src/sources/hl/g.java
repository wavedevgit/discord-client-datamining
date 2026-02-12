package hl;

import fl.h;
import fl.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private h f27448a;

    /* renamed from: b  reason: collision with root package name */
    private fl.f f27449b;

    /* renamed from: c  reason: collision with root package name */
    private j f27450c;

    /* renamed from: d  reason: collision with root package name */
    private int f27451d = -1;

    /* renamed from: e  reason: collision with root package name */
    private b f27452e;

    public static boolean b(int i10) {
        if (i10 >= 0 && i10 < 8) {
            return true;
        }
        return false;
    }

    public b a() {
        return this.f27452e;
    }

    public void c(fl.f fVar) {
        this.f27449b = fVar;
    }

    public void d(int i10) {
        this.f27451d = i10;
    }

    public void e(b bVar) {
        this.f27452e = bVar;
    }

    public void f(h hVar) {
        this.f27448a = hVar;
    }

    public void g(j jVar) {
        this.f27450c = jVar;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) androidx.recyclerview.widget.h.DEFAULT_DRAG_ANIMATION_DURATION);
        sb2.append("<<\n");
        sb2.append(" mode: ");
        sb2.append(this.f27448a);
        sb2.append("\n ecLevel: ");
        sb2.append(this.f27449b);
        sb2.append("\n version: ");
        sb2.append(this.f27450c);
        sb2.append("\n maskPattern: ");
        sb2.append(this.f27451d);
        if (this.f27452e == null) {
            sb2.append("\n matrix: null\n");
        } else {
            sb2.append("\n matrix:\n");
            sb2.append(this.f27452e);
        }
        sb2.append(">>\n");
        return sb2.toString();
    }
}
