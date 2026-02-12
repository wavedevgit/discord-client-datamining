package l1;

import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f implements d {

    /* renamed from: d  reason: collision with root package name */
    p f35437d;

    /* renamed from: f  reason: collision with root package name */
    int f35439f;

    /* renamed from: g  reason: collision with root package name */
    public int f35440g;

    /* renamed from: a  reason: collision with root package name */
    public d f35434a = null;

    /* renamed from: b  reason: collision with root package name */
    public boolean f35435b = false;

    /* renamed from: c  reason: collision with root package name */
    public boolean f35436c = false;

    /* renamed from: e  reason: collision with root package name */
    a f35438e = a.UNKNOWN;

    /* renamed from: h  reason: collision with root package name */
    int f35441h = 1;

    /* renamed from: i  reason: collision with root package name */
    g f35442i = null;

    /* renamed from: j  reason: collision with root package name */
    public boolean f35443j = false;

    /* renamed from: k  reason: collision with root package name */
    List f35444k = new ArrayList();

    /* renamed from: l  reason: collision with root package name */
    List f35445l = new ArrayList();

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
        this.f35437d = pVar;
    }

    @Override // l1.d
    public void a(d dVar) {
        for (f fVar : this.f35445l) {
            if (!fVar.f35443j) {
                return;
            }
        }
        this.f35436c = true;
        d dVar2 = this.f35434a;
        if (dVar2 != null) {
            dVar2.a(this);
        }
        if (this.f35435b) {
            this.f35437d.a(this);
            return;
        }
        f fVar2 = null;
        int i10 = 0;
        for (f fVar3 : this.f35445l) {
            if (!(fVar3 instanceof g)) {
                i10++;
                fVar2 = fVar3;
            }
        }
        if (fVar2 != null && i10 == 1 && fVar2.f35443j) {
            g gVar = this.f35442i;
            if (gVar != null) {
                if (gVar.f35443j) {
                    this.f35439f = this.f35441h * gVar.f35440g;
                } else {
                    return;
                }
            }
            d(fVar2.f35440g + this.f35439f);
        }
        d dVar3 = this.f35434a;
        if (dVar3 != null) {
            dVar3.a(this);
        }
    }

    public void b(d dVar) {
        this.f35444k.add(dVar);
        if (this.f35443j) {
            dVar.a(dVar);
        }
    }

    public void c() {
        this.f35445l.clear();
        this.f35444k.clear();
        this.f35443j = false;
        this.f35440g = 0;
        this.f35436c = false;
        this.f35435b = false;
    }

    public void d(int i10) {
        if (!this.f35443j) {
            this.f35443j = true;
            this.f35440g = i10;
            for (d dVar : this.f35444k) {
                dVar.a(dVar);
            }
        }
    }

    public String toString() {
        Object obj;
        StringBuilder sb2 = new StringBuilder();
        sb2.append(this.f35437d.f35487b.t());
        sb2.append(":");
        sb2.append(this.f35438e);
        sb2.append("(");
        if (this.f35443j) {
            obj = Integer.valueOf(this.f35440g);
        } else {
            obj = "unresolved";
        }
        sb2.append(obj);
        sb2.append(") <t=");
        sb2.append(this.f35445l.size());
        sb2.append(":d=");
        sb2.append(this.f35444k.size());
        sb2.append(">");
        return sb2.toString();
    }
}
