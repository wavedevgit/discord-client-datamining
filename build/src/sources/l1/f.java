package l1;

import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f implements d {

    /* renamed from: d  reason: collision with root package name */
    p f36753d;

    /* renamed from: f  reason: collision with root package name */
    int f36755f;

    /* renamed from: g  reason: collision with root package name */
    public int f36756g;

    /* renamed from: a  reason: collision with root package name */
    public d f36750a = null;

    /* renamed from: b  reason: collision with root package name */
    public boolean f36751b = false;

    /* renamed from: c  reason: collision with root package name */
    public boolean f36752c = false;

    /* renamed from: e  reason: collision with root package name */
    a f36754e = a.UNKNOWN;

    /* renamed from: h  reason: collision with root package name */
    int f36757h = 1;

    /* renamed from: i  reason: collision with root package name */
    g f36758i = null;

    /* renamed from: j  reason: collision with root package name */
    public boolean f36759j = false;

    /* renamed from: k  reason: collision with root package name */
    List f36760k = new ArrayList();

    /* renamed from: l  reason: collision with root package name */
    List f36761l = new ArrayList();

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
        this.f36753d = pVar;
    }

    @Override // l1.d
    public void a(d dVar) {
        for (f fVar : this.f36761l) {
            if (!fVar.f36759j) {
                return;
            }
        }
        this.f36752c = true;
        d dVar2 = this.f36750a;
        if (dVar2 != null) {
            dVar2.a(this);
        }
        if (this.f36751b) {
            this.f36753d.a(this);
            return;
        }
        f fVar2 = null;
        int i10 = 0;
        for (f fVar3 : this.f36761l) {
            if (!(fVar3 instanceof g)) {
                i10++;
                fVar2 = fVar3;
            }
        }
        if (fVar2 != null && i10 == 1 && fVar2.f36759j) {
            g gVar = this.f36758i;
            if (gVar != null) {
                if (gVar.f36759j) {
                    this.f36755f = this.f36757h * gVar.f36756g;
                } else {
                    return;
                }
            }
            d(fVar2.f36756g + this.f36755f);
        }
        d dVar3 = this.f36750a;
        if (dVar3 != null) {
            dVar3.a(this);
        }
    }

    public void b(d dVar) {
        this.f36760k.add(dVar);
        if (this.f36759j) {
            dVar.a(dVar);
        }
    }

    public void c() {
        this.f36761l.clear();
        this.f36760k.clear();
        this.f36759j = false;
        this.f36756g = 0;
        this.f36752c = false;
        this.f36751b = false;
    }

    public void d(int i10) {
        if (!this.f36759j) {
            this.f36759j = true;
            this.f36756g = i10;
            for (d dVar : this.f36760k) {
                dVar.a(dVar);
            }
        }
    }

    public String toString() {
        Object obj;
        StringBuilder sb2 = new StringBuilder();
        sb2.append(this.f36753d.f36803b.t());
        sb2.append(":");
        sb2.append(this.f36754e);
        sb2.append("(");
        if (this.f36759j) {
            obj = Integer.valueOf(this.f36756g);
        } else {
            obj = "unresolved";
        }
        sb2.append(obj);
        sb2.append(") <t=");
        sb2.append(this.f36761l.size());
        sb2.append(":d=");
        sb2.append(this.f36760k.size());
        sb2.append(">");
        return sb2.toString();
    }
}
