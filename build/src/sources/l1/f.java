package l1;

import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f implements d {

    /* renamed from: d  reason: collision with root package name */
    p f36263d;

    /* renamed from: f  reason: collision with root package name */
    int f36265f;

    /* renamed from: g  reason: collision with root package name */
    public int f36266g;

    /* renamed from: a  reason: collision with root package name */
    public d f36260a = null;

    /* renamed from: b  reason: collision with root package name */
    public boolean f36261b = false;

    /* renamed from: c  reason: collision with root package name */
    public boolean f36262c = false;

    /* renamed from: e  reason: collision with root package name */
    a f36264e = a.UNKNOWN;

    /* renamed from: h  reason: collision with root package name */
    int f36267h = 1;

    /* renamed from: i  reason: collision with root package name */
    g f36268i = null;

    /* renamed from: j  reason: collision with root package name */
    public boolean f36269j = false;

    /* renamed from: k  reason: collision with root package name */
    List f36270k = new ArrayList();

    /* renamed from: l  reason: collision with root package name */
    List f36271l = new ArrayList();

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
        this.f36263d = pVar;
    }

    @Override // l1.d
    public void a(d dVar) {
        for (f fVar : this.f36271l) {
            if (!fVar.f36269j) {
                return;
            }
        }
        this.f36262c = true;
        d dVar2 = this.f36260a;
        if (dVar2 != null) {
            dVar2.a(this);
        }
        if (this.f36261b) {
            this.f36263d.a(this);
            return;
        }
        f fVar2 = null;
        int i10 = 0;
        for (f fVar3 : this.f36271l) {
            if (!(fVar3 instanceof g)) {
                i10++;
                fVar2 = fVar3;
            }
        }
        if (fVar2 != null && i10 == 1 && fVar2.f36269j) {
            g gVar = this.f36268i;
            if (gVar != null) {
                if (gVar.f36269j) {
                    this.f36265f = this.f36267h * gVar.f36266g;
                } else {
                    return;
                }
            }
            d(fVar2.f36266g + this.f36265f);
        }
        d dVar3 = this.f36260a;
        if (dVar3 != null) {
            dVar3.a(this);
        }
    }

    public void b(d dVar) {
        this.f36270k.add(dVar);
        if (this.f36269j) {
            dVar.a(dVar);
        }
    }

    public void c() {
        this.f36271l.clear();
        this.f36270k.clear();
        this.f36269j = false;
        this.f36266g = 0;
        this.f36262c = false;
        this.f36261b = false;
    }

    public void d(int i10) {
        if (!this.f36269j) {
            this.f36269j = true;
            this.f36266g = i10;
            for (d dVar : this.f36270k) {
                dVar.a(dVar);
            }
        }
    }

    public String toString() {
        Object obj;
        StringBuilder sb2 = new StringBuilder();
        sb2.append(this.f36263d.f36313b.t());
        sb2.append(":");
        sb2.append(this.f36264e);
        sb2.append("(");
        if (this.f36269j) {
            obj = Integer.valueOf(this.f36266g);
        } else {
            obj = "unresolved";
        }
        sb2.append(obj);
        sb2.append(") <t=");
        sb2.append(this.f36271l.size());
        sb2.append(":d=");
        sb2.append(this.f36270k.size());
        sb2.append(">");
        return sb2.toString();
    }
}
