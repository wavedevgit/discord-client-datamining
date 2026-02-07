package l1;

import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f implements d {

    /* renamed from: d  reason: collision with root package name */
    p f35704d;

    /* renamed from: f  reason: collision with root package name */
    int f35706f;

    /* renamed from: g  reason: collision with root package name */
    public int f35707g;

    /* renamed from: a  reason: collision with root package name */
    public d f35701a = null;

    /* renamed from: b  reason: collision with root package name */
    public boolean f35702b = false;

    /* renamed from: c  reason: collision with root package name */
    public boolean f35703c = false;

    /* renamed from: e  reason: collision with root package name */
    a f35705e = a.UNKNOWN;

    /* renamed from: h  reason: collision with root package name */
    int f35708h = 1;

    /* renamed from: i  reason: collision with root package name */
    g f35709i = null;

    /* renamed from: j  reason: collision with root package name */
    public boolean f35710j = false;

    /* renamed from: k  reason: collision with root package name */
    List f35711k = new ArrayList();

    /* renamed from: l  reason: collision with root package name */
    List f35712l = new ArrayList();

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
        this.f35704d = pVar;
    }

    @Override // l1.d
    public void a(d dVar) {
        for (f fVar : this.f35712l) {
            if (!fVar.f35710j) {
                return;
            }
        }
        this.f35703c = true;
        d dVar2 = this.f35701a;
        if (dVar2 != null) {
            dVar2.a(this);
        }
        if (this.f35702b) {
            this.f35704d.a(this);
            return;
        }
        f fVar2 = null;
        int i10 = 0;
        for (f fVar3 : this.f35712l) {
            if (!(fVar3 instanceof g)) {
                i10++;
                fVar2 = fVar3;
            }
        }
        if (fVar2 != null && i10 == 1 && fVar2.f35710j) {
            g gVar = this.f35709i;
            if (gVar != null) {
                if (gVar.f35710j) {
                    this.f35706f = this.f35708h * gVar.f35707g;
                } else {
                    return;
                }
            }
            d(fVar2.f35707g + this.f35706f);
        }
        d dVar3 = this.f35701a;
        if (dVar3 != null) {
            dVar3.a(this);
        }
    }

    public void b(d dVar) {
        this.f35711k.add(dVar);
        if (this.f35710j) {
            dVar.a(dVar);
        }
    }

    public void c() {
        this.f35712l.clear();
        this.f35711k.clear();
        this.f35710j = false;
        this.f35707g = 0;
        this.f35703c = false;
        this.f35702b = false;
    }

    public void d(int i10) {
        if (!this.f35710j) {
            this.f35710j = true;
            this.f35707g = i10;
            for (d dVar : this.f35711k) {
                dVar.a(dVar);
            }
        }
    }

    public String toString() {
        Object obj;
        StringBuilder sb2 = new StringBuilder();
        sb2.append(this.f35704d.f35754b.t());
        sb2.append(":");
        sb2.append(this.f35705e);
        sb2.append("(");
        if (this.f35710j) {
            obj = Integer.valueOf(this.f35707g);
        } else {
            obj = "unresolved";
        }
        sb2.append(obj);
        sb2.append(") <t=");
        sb2.append(this.f35712l.size());
        sb2.append(":d=");
        sb2.append(this.f35711k.size());
        sb2.append(">");
        return sb2.toString();
    }
}
