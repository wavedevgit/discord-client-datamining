package l1;

import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f implements d {

    /* renamed from: d  reason: collision with root package name */
    p f35436d;

    /* renamed from: f  reason: collision with root package name */
    int f35438f;

    /* renamed from: g  reason: collision with root package name */
    public int f35439g;

    /* renamed from: a  reason: collision with root package name */
    public d f35433a = null;

    /* renamed from: b  reason: collision with root package name */
    public boolean f35434b = false;

    /* renamed from: c  reason: collision with root package name */
    public boolean f35435c = false;

    /* renamed from: e  reason: collision with root package name */
    a f35437e = a.UNKNOWN;

    /* renamed from: h  reason: collision with root package name */
    int f35440h = 1;

    /* renamed from: i  reason: collision with root package name */
    g f35441i = null;

    /* renamed from: j  reason: collision with root package name */
    public boolean f35442j = false;

    /* renamed from: k  reason: collision with root package name */
    List f35443k = new ArrayList();

    /* renamed from: l  reason: collision with root package name */
    List f35444l = new ArrayList();

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
        this.f35436d = pVar;
    }

    @Override // l1.d
    public void a(d dVar) {
        for (f fVar : this.f35444l) {
            if (!fVar.f35442j) {
                return;
            }
        }
        this.f35435c = true;
        d dVar2 = this.f35433a;
        if (dVar2 != null) {
            dVar2.a(this);
        }
        if (this.f35434b) {
            this.f35436d.a(this);
            return;
        }
        f fVar2 = null;
        int i10 = 0;
        for (f fVar3 : this.f35444l) {
            if (!(fVar3 instanceof g)) {
                i10++;
                fVar2 = fVar3;
            }
        }
        if (fVar2 != null && i10 == 1 && fVar2.f35442j) {
            g gVar = this.f35441i;
            if (gVar != null) {
                if (gVar.f35442j) {
                    this.f35438f = this.f35440h * gVar.f35439g;
                } else {
                    return;
                }
            }
            d(fVar2.f35439g + this.f35438f);
        }
        d dVar3 = this.f35433a;
        if (dVar3 != null) {
            dVar3.a(this);
        }
    }

    public void b(d dVar) {
        this.f35443k.add(dVar);
        if (this.f35442j) {
            dVar.a(dVar);
        }
    }

    public void c() {
        this.f35444l.clear();
        this.f35443k.clear();
        this.f35442j = false;
        this.f35439g = 0;
        this.f35435c = false;
        this.f35434b = false;
    }

    public void d(int i10) {
        if (!this.f35442j) {
            this.f35442j = true;
            this.f35439g = i10;
            for (d dVar : this.f35443k) {
                dVar.a(dVar);
            }
        }
    }

    public String toString() {
        Object obj;
        StringBuilder sb2 = new StringBuilder();
        sb2.append(this.f35436d.f35486b.t());
        sb2.append(":");
        sb2.append(this.f35437e);
        sb2.append("(");
        if (this.f35442j) {
            obj = Integer.valueOf(this.f35439g);
        } else {
            obj = "unresolved";
        }
        sb2.append(obj);
        sb2.append(") <t=");
        sb2.append(this.f35444l.size());
        sb2.append(":d=");
        sb2.append(this.f35443k.size());
        sb2.append(">");
        return sb2.toString();
    }
}
