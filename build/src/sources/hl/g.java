package hl;

import fl.h;
import fl.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private h f27447a;

    /* renamed from: b  reason: collision with root package name */
    private fl.f f27448b;

    /* renamed from: c  reason: collision with root package name */
    private j f27449c;

    /* renamed from: d  reason: collision with root package name */
    private int f27450d = -1;

    /* renamed from: e  reason: collision with root package name */
    private b f27451e;

    public static boolean b(int i10) {
        if (i10 >= 0 && i10 < 8) {
            return true;
        }
        return false;
    }

    public b a() {
        return this.f27451e;
    }

    public void c(fl.f fVar) {
        this.f27448b = fVar;
    }

    public void d(int i10) {
        this.f27450d = i10;
    }

    public void e(b bVar) {
        this.f27451e = bVar;
    }

    public void f(h hVar) {
        this.f27447a = hVar;
    }

    public void g(j jVar) {
        this.f27449c = jVar;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) androidx.recyclerview.widget.h.DEFAULT_DRAG_ANIMATION_DURATION);
        sb2.append("<<\n");
        sb2.append(" mode: ");
        sb2.append(this.f27447a);
        sb2.append("\n ecLevel: ");
        sb2.append(this.f27448b);
        sb2.append("\n version: ");
        sb2.append(this.f27449c);
        sb2.append("\n maskPattern: ");
        sb2.append(this.f27450d);
        if (this.f27451e == null) {
            sb2.append("\n matrix: null\n");
        } else {
            sb2.append("\n matrix:\n");
            sb2.append(this.f27451e);
        }
        sb2.append(">>\n");
        return sb2.toString();
    }
}
