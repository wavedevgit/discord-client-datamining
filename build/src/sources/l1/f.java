package l1;

import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f implements d {

    /* renamed from: d  reason: collision with root package name */
    p f35539d;

    /* renamed from: f  reason: collision with root package name */
    int f35541f;

    /* renamed from: g  reason: collision with root package name */
    public int f35542g;

    /* renamed from: a  reason: collision with root package name */
    public d f35536a = null;

    /* renamed from: b  reason: collision with root package name */
    public boolean f35537b = false;

    /* renamed from: c  reason: collision with root package name */
    public boolean f35538c = false;

    /* renamed from: e  reason: collision with root package name */
    a f35540e = a.UNKNOWN;

    /* renamed from: h  reason: collision with root package name */
    int f35543h = 1;

    /* renamed from: i  reason: collision with root package name */
    g f35544i = null;

    /* renamed from: j  reason: collision with root package name */
    public boolean f35545j = false;

    /* renamed from: k  reason: collision with root package name */
    List f35546k = new ArrayList();

    /* renamed from: l  reason: collision with root package name */
    List f35547l = new ArrayList();

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
        this.f35539d = pVar;
    }

    @Override // l1.d
    public void a(d dVar) {
        for (f fVar : this.f35547l) {
            if (!fVar.f35545j) {
                return;
            }
        }
        this.f35538c = true;
        d dVar2 = this.f35536a;
        if (dVar2 != null) {
            dVar2.a(this);
        }
        if (this.f35537b) {
            this.f35539d.a(this);
            return;
        }
        f fVar2 = null;
        int i10 = 0;
        for (f fVar3 : this.f35547l) {
            if (!(fVar3 instanceof g)) {
                i10++;
                fVar2 = fVar3;
            }
        }
        if (fVar2 != null && i10 == 1 && fVar2.f35545j) {
            g gVar = this.f35544i;
            if (gVar != null) {
                if (gVar.f35545j) {
                    this.f35541f = this.f35543h * gVar.f35542g;
                } else {
                    return;
                }
            }
            d(fVar2.f35542g + this.f35541f);
        }
        d dVar3 = this.f35536a;
        if (dVar3 != null) {
            dVar3.a(this);
        }
    }

    public void b(d dVar) {
        this.f35546k.add(dVar);
        if (this.f35545j) {
            dVar.a(dVar);
        }
    }

    public void c() {
        this.f35547l.clear();
        this.f35546k.clear();
        this.f35545j = false;
        this.f35542g = 0;
        this.f35538c = false;
        this.f35537b = false;
    }

    public void d(int i10) {
        if (!this.f35545j) {
            this.f35545j = true;
            this.f35542g = i10;
            for (d dVar : this.f35546k) {
                dVar.a(dVar);
            }
        }
    }

    public String toString() {
        Object obj;
        StringBuilder sb2 = new StringBuilder();
        sb2.append(this.f35539d.f35589b.t());
        sb2.append(":");
        sb2.append(this.f35540e);
        sb2.append("(");
        if (this.f35545j) {
            obj = Integer.valueOf(this.f35542g);
        } else {
            obj = "unresolved";
        }
        sb2.append(obj);
        sb2.append(") <t=");
        sb2.append(this.f35547l.size());
        sb2.append(":d=");
        sb2.append(this.f35546k.size());
        sb2.append(">");
        return sb2.toString();
    }
}
