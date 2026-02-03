package l1;

import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f implements d {

    /* renamed from: d  reason: collision with root package name */
    p f36867d;

    /* renamed from: f  reason: collision with root package name */
    int f36869f;

    /* renamed from: g  reason: collision with root package name */
    public int f36870g;

    /* renamed from: a  reason: collision with root package name */
    public d f36864a = null;

    /* renamed from: b  reason: collision with root package name */
    public boolean f36865b = false;

    /* renamed from: c  reason: collision with root package name */
    public boolean f36866c = false;

    /* renamed from: e  reason: collision with root package name */
    a f36868e = a.UNKNOWN;

    /* renamed from: h  reason: collision with root package name */
    int f36871h = 1;

    /* renamed from: i  reason: collision with root package name */
    g f36872i = null;

    /* renamed from: j  reason: collision with root package name */
    public boolean f36873j = false;

    /* renamed from: k  reason: collision with root package name */
    List f36874k = new ArrayList();

    /* renamed from: l  reason: collision with root package name */
    List f36875l = new ArrayList();

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
        this.f36867d = pVar;
    }

    @Override // l1.d
    public void a(d dVar) {
        for (f fVar : this.f36875l) {
            if (!fVar.f36873j) {
                return;
            }
        }
        this.f36866c = true;
        d dVar2 = this.f36864a;
        if (dVar2 != null) {
            dVar2.a(this);
        }
        if (this.f36865b) {
            this.f36867d.a(this);
            return;
        }
        f fVar2 = null;
        int i10 = 0;
        for (f fVar3 : this.f36875l) {
            if (!(fVar3 instanceof g)) {
                i10++;
                fVar2 = fVar3;
            }
        }
        if (fVar2 != null && i10 == 1 && fVar2.f36873j) {
            g gVar = this.f36872i;
            if (gVar != null) {
                if (gVar.f36873j) {
                    this.f36869f = this.f36871h * gVar.f36870g;
                } else {
                    return;
                }
            }
            d(fVar2.f36870g + this.f36869f);
        }
        d dVar3 = this.f36864a;
        if (dVar3 != null) {
            dVar3.a(this);
        }
    }

    public void b(d dVar) {
        this.f36874k.add(dVar);
        if (this.f36873j) {
            dVar.a(dVar);
        }
    }

    public void c() {
        this.f36875l.clear();
        this.f36874k.clear();
        this.f36873j = false;
        this.f36870g = 0;
        this.f36866c = false;
        this.f36865b = false;
    }

    public void d(int i10) {
        if (!this.f36873j) {
            this.f36873j = true;
            this.f36870g = i10;
            for (d dVar : this.f36874k) {
                dVar.a(dVar);
            }
        }
    }

    public String toString() {
        Object obj;
        StringBuilder sb2 = new StringBuilder();
        sb2.append(this.f36867d.f36917b.t());
        sb2.append(":");
        sb2.append(this.f36868e);
        sb2.append("(");
        if (this.f36873j) {
            obj = Integer.valueOf(this.f36870g);
        } else {
            obj = "unresolved";
        }
        sb2.append(obj);
        sb2.append(") <t=");
        sb2.append(this.f36875l.size());
        sb2.append(":d=");
        sb2.append(this.f36874k.size());
        sb2.append(">");
        return sb2.toString();
    }
}
