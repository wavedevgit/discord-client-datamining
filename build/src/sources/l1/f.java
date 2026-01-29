package l1;

import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f implements d {

    /* renamed from: d  reason: collision with root package name */
    p f36737d;

    /* renamed from: f  reason: collision with root package name */
    int f36739f;

    /* renamed from: g  reason: collision with root package name */
    public int f36740g;

    /* renamed from: a  reason: collision with root package name */
    public d f36734a = null;

    /* renamed from: b  reason: collision with root package name */
    public boolean f36735b = false;

    /* renamed from: c  reason: collision with root package name */
    public boolean f36736c = false;

    /* renamed from: e  reason: collision with root package name */
    a f36738e = a.UNKNOWN;

    /* renamed from: h  reason: collision with root package name */
    int f36741h = 1;

    /* renamed from: i  reason: collision with root package name */
    g f36742i = null;

    /* renamed from: j  reason: collision with root package name */
    public boolean f36743j = false;

    /* renamed from: k  reason: collision with root package name */
    List f36744k = new ArrayList();

    /* renamed from: l  reason: collision with root package name */
    List f36745l = new ArrayList();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    enum a {
        UNKNOWN,
        HORIZONTAL_DIMENSION,
        VERTICAL_DIMENSION,
        LEFT,
        RIGHT,
        TOP,
        BOTTOM,
        BASELINE
    }

    public f(p pVar) {
        this.f36737d = pVar;
    }

    @Override // l1.d
    public void a(d dVar) {
        for (f fVar : this.f36745l) {
            if (!fVar.f36743j) {
                return;
            }
        }
        this.f36736c = true;
        d dVar2 = this.f36734a;
        if (dVar2 != null) {
            dVar2.a(this);
        }
        if (this.f36735b) {
            this.f36737d.a(this);
            return;
        }
        f fVar2 = null;
        int i10 = 0;
        for (f fVar3 : this.f36745l) {
            if (!(fVar3 instanceof g)) {
                i10++;
                fVar2 = fVar3;
            }
        }
        if (fVar2 != null && i10 == 1 && fVar2.f36743j) {
            g gVar = this.f36742i;
            if (gVar != null) {
                if (gVar.f36743j) {
                    this.f36739f = this.f36741h * gVar.f36740g;
                } else {
                    return;
                }
            }
            d(fVar2.f36740g + this.f36739f);
        }
        d dVar3 = this.f36734a;
        if (dVar3 != null) {
            dVar3.a(this);
        }
    }

    public void b(d dVar) {
        this.f36744k.add(dVar);
        if (this.f36743j) {
            dVar.a(dVar);
        }
    }

    public void c() {
        this.f36745l.clear();
        this.f36744k.clear();
        this.f36743j = false;
        this.f36740g = 0;
        this.f36736c = false;
        this.f36735b = false;
    }

    public void d(int i10) {
        if (!this.f36743j) {
            this.f36743j = true;
            this.f36740g = i10;
            for (d dVar : this.f36744k) {
                dVar.a(dVar);
            }
        }
    }

    public String toString() {
        Object obj;
        StringBuilder sb2 = new StringBuilder();
        sb2.append(this.f36737d.f36787b.t());
        sb2.append(":");
        sb2.append(this.f36738e);
        sb2.append("(");
        if (this.f36743j) {
            obj = Integer.valueOf(this.f36740g);
        } else {
            obj = "unresolved";
        }
        sb2.append(obj);
        sb2.append(") <t=");
        sb2.append(this.f36745l.size());
        sb2.append(":d=");
        sb2.append(this.f36744k.size());
        sb2.append(">");
        return sb2.toString();
    }
}
