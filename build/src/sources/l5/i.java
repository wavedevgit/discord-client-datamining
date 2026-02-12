package l5;

import android.graphics.Rect;
import androidx.collection.SparseArrayCompat;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i {

    /* renamed from: c  reason: collision with root package name */
    private Map f35626c;

    /* renamed from: d  reason: collision with root package name */
    private Map f35627d;

    /* renamed from: e  reason: collision with root package name */
    private float f35628e;

    /* renamed from: f  reason: collision with root package name */
    private Map f35629f;

    /* renamed from: g  reason: collision with root package name */
    private List f35630g;

    /* renamed from: h  reason: collision with root package name */
    private SparseArrayCompat f35631h;

    /* renamed from: i  reason: collision with root package name */
    private u0.j f35632i;

    /* renamed from: j  reason: collision with root package name */
    private List f35633j;

    /* renamed from: k  reason: collision with root package name */
    private Rect f35634k;

    /* renamed from: l  reason: collision with root package name */
    private float f35635l;

    /* renamed from: m  reason: collision with root package name */
    private float f35636m;

    /* renamed from: n  reason: collision with root package name */
    private float f35637n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f35638o;

    /* renamed from: q  reason: collision with root package name */
    private int f35640q;

    /* renamed from: r  reason: collision with root package name */
    private int f35641r;

    /* renamed from: a  reason: collision with root package name */
    private final e0 f35624a = new e0();

    /* renamed from: b  reason: collision with root package name */
    private final HashSet f35625b = new HashSet();

    /* renamed from: p  reason: collision with root package name */
    private int f35639p = 0;

    public void a(String str) {
        y5.d.c(str);
        this.f35625b.add(str);
    }

    public Rect b() {
        return this.f35634k;
    }

    public SparseArrayCompat c() {
        return this.f35631h;
    }

    public float d() {
        return (e() / this.f35637n) * 1000.0f;
    }

    public float e() {
        return this.f35636m - this.f35635l;
    }

    public float f() {
        return this.f35636m;
    }

    public Map g() {
        return this.f35629f;
    }

    public float h(float f10) {
        return y5.i.i(this.f35635l, this.f35636m, f10);
    }

    public float i() {
        return this.f35637n;
    }

    public Map j() {
        float e10 = y5.j.e();
        if (e10 != this.f35628e) {
            for (Map.Entry entry : this.f35627d.entrySet()) {
                this.f35627d.put((String) entry.getKey(), ((x) entry.getValue()).a(this.f35628e / e10));
            }
        }
        this.f35628e = e10;
        return this.f35627d;
    }

    public List k() {
        return this.f35633j;
    }

    public r5.h l(String str) {
        int size = this.f35630g.size();
        for (int i10 = 0; i10 < size; i10++) {
            r5.h hVar = (r5.h) this.f35630g.get(i10);
            if (hVar.a(str)) {
                return hVar;
            }
        }
        return null;
    }

    public int m() {
        return this.f35639p;
    }

    public e0 n() {
        return this.f35624a;
    }

    public List o(String str) {
        return (List) this.f35626c.get(str);
    }

    public float p() {
        return this.f35635l;
    }

    public boolean q() {
        return this.f35638o;
    }

    public void r(int i10) {
        this.f35639p += i10;
    }

    public void s(Rect rect, float f10, float f11, float f12, List list, u0.j jVar, Map map, Map map2, float f13, SparseArrayCompat sparseArrayCompat, Map map3, List list2, int i10, int i11) {
        this.f35634k = rect;
        this.f35635l = f10;
        this.f35636m = f11;
        this.f35637n = f12;
        this.f35633j = list;
        this.f35632i = jVar;
        this.f35626c = map;
        this.f35627d = map2;
        this.f35628e = f13;
        this.f35631h = sparseArrayCompat;
        this.f35629f = map3;
        this.f35630g = list2;
        this.f35640q = i10;
        this.f35641r = i11;
    }

    public u5.e t(long j10) {
        return (u5.e) this.f35632i.d(j10);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder("LottieComposition:\n");
        for (u5.e eVar : this.f35633j) {
            sb2.append(eVar.z("\t"));
        }
        return sb2.toString();
    }

    public void u(boolean z10) {
        this.f35638o = z10;
    }

    public void v(boolean z10) {
        this.f35624a.b(z10);
    }
}
