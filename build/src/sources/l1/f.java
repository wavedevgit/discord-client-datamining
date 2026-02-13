package l1;

import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f implements d {

    /* renamed from: d  reason: collision with root package name */
    p f36005d;

    /* renamed from: f  reason: collision with root package name */
    int f36007f;

    /* renamed from: g  reason: collision with root package name */
    public int f36008g;

    /* renamed from: a  reason: collision with root package name */
    public d f36002a = null;

    /* renamed from: b  reason: collision with root package name */
    public boolean f36003b = false;

    /* renamed from: c  reason: collision with root package name */
    public boolean f36004c = false;

    /* renamed from: e  reason: collision with root package name */
    a f36006e = a.UNKNOWN;

    /* renamed from: h  reason: collision with root package name */
    int f36009h = 1;

    /* renamed from: i  reason: collision with root package name */
    g f36010i = null;

    /* renamed from: j  reason: collision with root package name */
    public boolean f36011j = false;

    /* renamed from: k  reason: collision with root package name */
    List f36012k = new ArrayList();

    /* renamed from: l  reason: collision with root package name */
    List f36013l = new ArrayList();

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
        this.f36005d = pVar;
    }

    @Override // l1.d
    public void a(d dVar) {
        for (f fVar : this.f36013l) {
            if (!fVar.f36011j) {
                return;
            }
        }
        this.f36004c = true;
        d dVar2 = this.f36002a;
        if (dVar2 != null) {
            dVar2.a(this);
        }
        if (this.f36003b) {
            this.f36005d.a(this);
            return;
        }
        f fVar2 = null;
        int i10 = 0;
        for (f fVar3 : this.f36013l) {
            if (!(fVar3 instanceof g)) {
                i10++;
                fVar2 = fVar3;
            }
        }
        if (fVar2 != null && i10 == 1 && fVar2.f36011j) {
            g gVar = this.f36010i;
            if (gVar != null) {
                if (gVar.f36011j) {
                    this.f36007f = this.f36009h * gVar.f36008g;
                } else {
                    return;
                }
            }
            d(fVar2.f36008g + this.f36007f);
        }
        d dVar3 = this.f36002a;
        if (dVar3 != null) {
            dVar3.a(this);
        }
    }

    public void b(d dVar) {
        this.f36012k.add(dVar);
        if (this.f36011j) {
            dVar.a(dVar);
        }
    }

    public void c() {
        this.f36013l.clear();
        this.f36012k.clear();
        this.f36011j = false;
        this.f36008g = 0;
        this.f36004c = false;
        this.f36003b = false;
    }

    public void d(int i10) {
        if (!this.f36011j) {
            this.f36011j = true;
            this.f36008g = i10;
            for (d dVar : this.f36012k) {
                dVar.a(dVar);
            }
        }
    }

    public String toString() {
        Object obj;
        StringBuilder sb2 = new StringBuilder();
        sb2.append(this.f36005d.f36055b.t());
        sb2.append(":");
        sb2.append(this.f36006e);
        sb2.append("(");
        if (this.f36011j) {
            obj = Integer.valueOf(this.f36008g);
        } else {
            obj = "unresolved";
        }
        sb2.append(obj);
        sb2.append(") <t=");
        sb2.append(this.f36013l.size());
        sb2.append(":d=");
        sb2.append(this.f36012k.size());
        sb2.append(">");
        return sb2.toString();
    }
}
