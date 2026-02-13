package l5;

import android.graphics.Rect;
import androidx.collection.SparseArrayCompat;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i {

    /* renamed from: c  reason: collision with root package name */
    private Map f36194c;

    /* renamed from: d  reason: collision with root package name */
    private Map f36195d;

    /* renamed from: e  reason: collision with root package name */
    private float f36196e;

    /* renamed from: f  reason: collision with root package name */
    private Map f36197f;

    /* renamed from: g  reason: collision with root package name */
    private List f36198g;

    /* renamed from: h  reason: collision with root package name */
    private SparseArrayCompat f36199h;

    /* renamed from: i  reason: collision with root package name */
    private u0.j f36200i;

    /* renamed from: j  reason: collision with root package name */
    private List f36201j;

    /* renamed from: k  reason: collision with root package name */
    private Rect f36202k;

    /* renamed from: l  reason: collision with root package name */
    private float f36203l;

    /* renamed from: m  reason: collision with root package name */
    private float f36204m;

    /* renamed from: n  reason: collision with root package name */
    private float f36205n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f36206o;

    /* renamed from: q  reason: collision with root package name */
    private int f36208q;

    /* renamed from: r  reason: collision with root package name */
    private int f36209r;

    /* renamed from: a  reason: collision with root package name */
    private final e0 f36192a = new e0();

    /* renamed from: b  reason: collision with root package name */
    private final HashSet f36193b = new HashSet();

    /* renamed from: p  reason: collision with root package name */
    private int f36207p = 0;

    public void a(String str) {
        y5.d.c(str);
        this.f36193b.add(str);
    }

    public Rect b() {
        return this.f36202k;
    }

    public SparseArrayCompat c() {
        return this.f36199h;
    }

    public float d() {
        return (e() / this.f36205n) * 1000.0f;
    }

    public float e() {
        return this.f36204m - this.f36203l;
    }

    public float f() {
        return this.f36204m;
    }

    public Map g() {
        return this.f36197f;
    }

    public float h(float f10) {
        return y5.i.i(this.f36203l, this.f36204m, f10);
    }

    public float i() {
        return this.f36205n;
    }

    public Map j() {
        float e10 = y5.j.e();
        if (e10 != this.f36196e) {
            for (Map.Entry entry : this.f36195d.entrySet()) {
                this.f36195d.put((String) entry.getKey(), ((x) entry.getValue()).a(this.f36196e / e10));
            }
        }
        this.f36196e = e10;
        return this.f36195d;
    }

    public List k() {
        return this.f36201j;
    }

    public r5.h l(String str) {
        int size = this.f36198g.size();
        for (int i10 = 0; i10 < size; i10++) {
            r5.h hVar = (r5.h) this.f36198g.get(i10);
            if (hVar.a(str)) {
                return hVar;
            }
        }
        return null;
    }

    public int m() {
        return this.f36207p;
    }

    public e0 n() {
        return this.f36192a;
    }

    public List o(String str) {
        return (List) this.f36194c.get(str);
    }

    public float p() {
        return this.f36203l;
    }

    public boolean q() {
        return this.f36206o;
    }

    public void r(int i10) {
        this.f36207p += i10;
    }

    public void s(Rect rect, float f10, float f11, float f12, List list, u0.j jVar, Map map, Map map2, float f13, SparseArrayCompat sparseArrayCompat, Map map3, List list2, int i10, int i11) {
        this.f36202k = rect;
        this.f36203l = f10;
        this.f36204m = f11;
        this.f36205n = f12;
        this.f36201j = list;
        this.f36200i = jVar;
        this.f36194c = map;
        this.f36195d = map2;
        this.f36196e = f13;
        this.f36199h = sparseArrayCompat;
        this.f36197f = map3;
        this.f36198g = list2;
        this.f36208q = i10;
        this.f36209r = i11;
    }

    public u5.e t(long j10) {
        return (u5.e) this.f36200i.d(j10);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder("LottieComposition:\n");
        for (u5.e eVar : this.f36201j) {
            sb2.append(eVar.z("\t"));
        }
        return sb2.toString();
    }

    public void u(boolean z10) {
        this.f36206o = z10;
    }

    public void v(boolean z10) {
        this.f36192a.b(z10);
    }
}
