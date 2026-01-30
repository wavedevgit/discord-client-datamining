package l5;

import android.graphics.Rect;
import androidx.collection.SparseArrayCompat;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i {

    /* renamed from: c  reason: collision with root package name */
    private Map f36941c;

    /* renamed from: d  reason: collision with root package name */
    private Map f36942d;

    /* renamed from: e  reason: collision with root package name */
    private float f36943e;

    /* renamed from: f  reason: collision with root package name */
    private Map f36944f;

    /* renamed from: g  reason: collision with root package name */
    private List f36945g;

    /* renamed from: h  reason: collision with root package name */
    private SparseArrayCompat f36946h;

    /* renamed from: i  reason: collision with root package name */
    private u0.j f36947i;

    /* renamed from: j  reason: collision with root package name */
    private List f36948j;

    /* renamed from: k  reason: collision with root package name */
    private Rect f36949k;

    /* renamed from: l  reason: collision with root package name */
    private float f36950l;

    /* renamed from: m  reason: collision with root package name */
    private float f36951m;

    /* renamed from: n  reason: collision with root package name */
    private float f36952n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f36953o;

    /* renamed from: a  reason: collision with root package name */
    private final d0 f36939a = new d0();

    /* renamed from: b  reason: collision with root package name */
    private final HashSet f36940b = new HashSet();

    /* renamed from: p  reason: collision with root package name */
    private int f36954p = 0;

    public void a(String str) {
        x5.d.c(str);
        this.f36940b.add(str);
    }

    public Rect b() {
        return this.f36949k;
    }

    public SparseArrayCompat c() {
        return this.f36946h;
    }

    public float d() {
        return (e() / this.f36952n) * 1000.0f;
    }

    public float e() {
        return this.f36951m - this.f36950l;
    }

    public float f() {
        return this.f36951m;
    }

    public Map g() {
        return this.f36944f;
    }

    public float h(float f10) {
        return x5.i.i(this.f36950l, this.f36951m, f10);
    }

    public float i() {
        return this.f36952n;
    }

    public Map j() {
        float e10 = x5.j.e();
        if (e10 != this.f36943e) {
            for (Map.Entry entry : this.f36942d.entrySet()) {
                this.f36942d.put((String) entry.getKey(), ((w) entry.getValue()).a(this.f36943e / e10));
            }
        }
        this.f36943e = e10;
        return this.f36942d;
    }

    public List k() {
        return this.f36948j;
    }

    public q5.h l(String str) {
        int size = this.f36945g.size();
        for (int i10 = 0; i10 < size; i10++) {
            q5.h hVar = (q5.h) this.f36945g.get(i10);
            if (hVar.a(str)) {
                return hVar;
            }
        }
        return null;
    }

    public int m() {
        return this.f36954p;
    }

    public d0 n() {
        return this.f36939a;
    }

    public List o(String str) {
        return (List) this.f36941c.get(str);
    }

    public float p() {
        return this.f36950l;
    }

    public boolean q() {
        return this.f36953o;
    }

    public void r(int i10) {
        this.f36954p += i10;
    }

    public void s(Rect rect, float f10, float f11, float f12, List list, u0.j jVar, Map map, Map map2, float f13, SparseArrayCompat sparseArrayCompat, Map map3, List list2) {
        this.f36949k = rect;
        this.f36950l = f10;
        this.f36951m = f11;
        this.f36952n = f12;
        this.f36948j = list;
        this.f36947i = jVar;
        this.f36941c = map;
        this.f36942d = map2;
        this.f36943e = f13;
        this.f36946h = sparseArrayCompat;
        this.f36944f = map3;
        this.f36945g = list2;
    }

    public t5.e t(long j10) {
        return (t5.e) this.f36947i.d(j10);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder("LottieComposition:\n");
        for (t5.e eVar : this.f36948j) {
            sb2.append(eVar.z("\t"));
        }
        return sb2.toString();
    }

    public void u(boolean z10) {
        this.f36953o = z10;
    }

    public void v(boolean z10) {
        this.f36939a.b(z10);
    }
}
