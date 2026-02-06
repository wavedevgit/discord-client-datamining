package l1;

import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f implements d {

    /* renamed from: d  reason: collision with root package name */
    p f35656d;

    /* renamed from: f  reason: collision with root package name */
    int f35658f;

    /* renamed from: g  reason: collision with root package name */
    public int f35659g;

    /* renamed from: a  reason: collision with root package name */
    public d f35653a = null;

    /* renamed from: b  reason: collision with root package name */
    public boolean f35654b = false;

    /* renamed from: c  reason: collision with root package name */
    public boolean f35655c = false;

    /* renamed from: e  reason: collision with root package name */
    a f35657e = a.UNKNOWN;

    /* renamed from: h  reason: collision with root package name */
    int f35660h = 1;

    /* renamed from: i  reason: collision with root package name */
    g f35661i = null;

    /* renamed from: j  reason: collision with root package name */
    public boolean f35662j = false;

    /* renamed from: k  reason: collision with root package name */
    List f35663k = new ArrayList();

    /* renamed from: l  reason: collision with root package name */
    List f35664l = new ArrayList();

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
        this.f35656d = pVar;
    }

    @Override // l1.d
    public void a(d dVar) {
        for (f fVar : this.f35664l) {
            if (!fVar.f35662j) {
                return;
            }
        }
        this.f35655c = true;
        d dVar2 = this.f35653a;
        if (dVar2 != null) {
            dVar2.a(this);
        }
        if (this.f35654b) {
            this.f35656d.a(this);
            return;
        }
        f fVar2 = null;
        int i10 = 0;
        for (f fVar3 : this.f35664l) {
            if (!(fVar3 instanceof g)) {
                i10++;
                fVar2 = fVar3;
            }
        }
        if (fVar2 != null && i10 == 1 && fVar2.f35662j) {
            g gVar = this.f35661i;
            if (gVar != null) {
                if (gVar.f35662j) {
                    this.f35658f = this.f35660h * gVar.f35659g;
                } else {
                    return;
                }
            }
            d(fVar2.f35659g + this.f35658f);
        }
        d dVar3 = this.f35653a;
        if (dVar3 != null) {
            dVar3.a(this);
        }
    }

    public void b(d dVar) {
        this.f35663k.add(dVar);
        if (this.f35662j) {
            dVar.a(dVar);
        }
    }

    public void c() {
        this.f35664l.clear();
        this.f35663k.clear();
        this.f35662j = false;
        this.f35659g = 0;
        this.f35655c = false;
        this.f35654b = false;
    }

    public void d(int i10) {
        if (!this.f35662j) {
            this.f35662j = true;
            this.f35659g = i10;
            for (d dVar : this.f35663k) {
                dVar.a(dVar);
            }
        }
    }

    public String toString() {
        Object obj;
        StringBuilder sb2 = new StringBuilder();
        sb2.append(this.f35656d.f35706b.t());
        sb2.append(":");
        sb2.append(this.f35657e);
        sb2.append("(");
        if (this.f35662j) {
            obj = Integer.valueOf(this.f35659g);
        } else {
            obj = "unresolved";
        }
        sb2.append(obj);
        sb2.append(") <t=");
        sb2.append(this.f35664l.size());
        sb2.append(":d=");
        sb2.append(this.f35663k.size());
        sb2.append(">");
        return sb2.toString();
    }
}
