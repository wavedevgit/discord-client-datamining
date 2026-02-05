package l5;

import android.graphics.Rect;
import androidx.collection.SparseArrayCompat;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i {

    /* renamed from: c  reason: collision with root package name */
    private Map f36451c;

    /* renamed from: d  reason: collision with root package name */
    private Map f36452d;

    /* renamed from: e  reason: collision with root package name */
    private float f36453e;

    /* renamed from: f  reason: collision with root package name */
    private Map f36454f;

    /* renamed from: g  reason: collision with root package name */
    private List f36455g;

    /* renamed from: h  reason: collision with root package name */
    private SparseArrayCompat f36456h;

    /* renamed from: i  reason: collision with root package name */
    private u0.j f36457i;

    /* renamed from: j  reason: collision with root package name */
    private List f36458j;

    /* renamed from: k  reason: collision with root package name */
    private Rect f36459k;

    /* renamed from: l  reason: collision with root package name */
    private float f36460l;

    /* renamed from: m  reason: collision with root package name */
    private float f36461m;

    /* renamed from: n  reason: collision with root package name */
    private float f36462n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f36463o;

    /* renamed from: a  reason: collision with root package name */
    private final d0 f36449a = new d0();

    /* renamed from: b  reason: collision with root package name */
    private final HashSet f36450b = new HashSet();

    /* renamed from: p  reason: collision with root package name */
    private int f36464p = 0;

    public void a(String str) {
        x5.d.c(str);
        this.f36450b.add(str);
    }

    public Rect b() {
        return this.f36459k;
    }

    public SparseArrayCompat c() {
        return this.f36456h;
    }

    public float d() {
        return (e() / this.f36462n) * 1000.0f;
    }

    public float e() {
        return this.f36461m - this.f36460l;
    }

    public float f() {
        return this.f36461m;
    }

    public Map g() {
        return this.f36454f;
    }

    public float h(float f10) {
        return x5.i.i(this.f36460l, this.f36461m, f10);
    }

    public float i() {
        return this.f36462n;
    }

    public Map j() {
        float e10 = x5.j.e();
        if (e10 != this.f36453e) {
            for (Map.Entry entry : this.f36452d.entrySet()) {
                this.f36452d.put((String) entry.getKey(), ((w) entry.getValue()).a(this.f36453e / e10));
            }
        }
        this.f36453e = e10;
        return this.f36452d;
    }

    public List k() {
        return this.f36458j;
    }

    public q5.h l(String str) {
        int size = this.f36455g.size();
        for (int i10 = 0; i10 < size; i10++) {
            q5.h hVar = (q5.h) this.f36455g.get(i10);
            if (hVar.a(str)) {
                return hVar;
            }
        }
        return null;
    }

    public int m() {
        return this.f36464p;
    }

    public d0 n() {
        return this.f36449a;
    }

    public List o(String str) {
        return (List) this.f36451c.get(str);
    }

    public float p() {
        return this.f36460l;
    }

    public boolean q() {
        return this.f36463o;
    }

    public void r(int i10) {
        this.f36464p += i10;
    }

    public void s(Rect rect, float f10, float f11, float f12, List list, u0.j jVar, Map map, Map map2, float f13, SparseArrayCompat sparseArrayCompat, Map map3, List list2) {
        this.f36459k = rect;
        this.f36460l = f10;
        this.f36461m = f11;
        this.f36462n = f12;
        this.f36458j = list;
        this.f36457i = jVar;
        this.f36451c = map;
        this.f36452d = map2;
        this.f36453e = f13;
        this.f36456h = sparseArrayCompat;
        this.f36454f = map3;
        this.f36455g = list2;
    }

    public t5.e t(long j10) {
        return (t5.e) this.f36457i.d(j10);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder("LottieComposition:\n");
        for (t5.e eVar : this.f36458j) {
            sb2.append(eVar.z("\t"));
        }
        return sb2.toString();
    }

    public void u(boolean z10) {
        this.f36463o = z10;
    }

    public void v(boolean z10) {
        this.f36449a.b(z10);
    }
}
