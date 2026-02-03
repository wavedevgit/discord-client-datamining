package l1;

import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f implements d {

    /* renamed from: d  reason: collision with root package name */
    p f36336d;

    /* renamed from: f  reason: collision with root package name */
    int f36338f;

    /* renamed from: g  reason: collision with root package name */
    public int f36339g;

    /* renamed from: a  reason: collision with root package name */
    public d f36333a = null;

    /* renamed from: b  reason: collision with root package name */
    public boolean f36334b = false;

    /* renamed from: c  reason: collision with root package name */
    public boolean f36335c = false;

    /* renamed from: e  reason: collision with root package name */
    a f36337e = a.UNKNOWN;

    /* renamed from: h  reason: collision with root package name */
    int f36340h = 1;

    /* renamed from: i  reason: collision with root package name */
    g f36341i = null;

    /* renamed from: j  reason: collision with root package name */
    public boolean f36342j = false;

    /* renamed from: k  reason: collision with root package name */
    List f36343k = new ArrayList();

    /* renamed from: l  reason: collision with root package name */
    List f36344l = new ArrayList();

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
        this.f36336d = pVar;
    }

    @Override // l1.d
    public void a(d dVar) {
        for (f fVar : this.f36344l) {
            if (!fVar.f36342j) {
                return;
            }
        }
        this.f36335c = true;
        d dVar2 = this.f36333a;
        if (dVar2 != null) {
            dVar2.a(this);
        }
        if (this.f36334b) {
            this.f36336d.a(this);
            return;
        }
        f fVar2 = null;
        int i10 = 0;
        for (f fVar3 : this.f36344l) {
            if (!(fVar3 instanceof g)) {
                i10++;
                fVar2 = fVar3;
            }
        }
        if (fVar2 != null && i10 == 1 && fVar2.f36342j) {
            g gVar = this.f36341i;
            if (gVar != null) {
                if (gVar.f36342j) {
                    this.f36338f = this.f36340h * gVar.f36339g;
                } else {
                    return;
                }
            }
            d(fVar2.f36339g + this.f36338f);
        }
        d dVar3 = this.f36333a;
        if (dVar3 != null) {
            dVar3.a(this);
        }
    }

    public void b(d dVar) {
        this.f36343k.add(dVar);
        if (this.f36342j) {
            dVar.a(dVar);
        }
    }

    public void c() {
        this.f36344l.clear();
        this.f36343k.clear();
        this.f36342j = false;
        this.f36339g = 0;
        this.f36335c = false;
        this.f36334b = false;
    }

    public void d(int i10) {
        if (!this.f36342j) {
            this.f36342j = true;
            this.f36339g = i10;
            for (d dVar : this.f36343k) {
                dVar.a(dVar);
            }
        }
    }

    public String toString() {
        Object obj;
        StringBuilder sb2 = new StringBuilder();
        sb2.append(this.f36336d.f36386b.t());
        sb2.append(":");
        sb2.append(this.f36337e);
        sb2.append("(");
        if (this.f36342j) {
            obj = Integer.valueOf(this.f36339g);
        } else {
            obj = "unresolved";
        }
        sb2.append(obj);
        sb2.append(") <t=");
        sb2.append(this.f36344l.size());
        sb2.append(":d=");
        sb2.append(this.f36343k.size());
        sb2.append(">");
        return sb2.toString();
    }
}
