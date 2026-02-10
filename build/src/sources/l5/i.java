package l5;

import android.graphics.Rect;
import androidx.collection.SparseArrayCompat;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i {

    /* renamed from: c  reason: collision with root package name */
    private Map f35625c;

    /* renamed from: d  reason: collision with root package name */
    private Map f35626d;

    /* renamed from: e  reason: collision with root package name */
    private float f35627e;

    /* renamed from: f  reason: collision with root package name */
    private Map f35628f;

    /* renamed from: g  reason: collision with root package name */
    private List f35629g;

    /* renamed from: h  reason: collision with root package name */
    private SparseArrayCompat f35630h;

    /* renamed from: i  reason: collision with root package name */
    private u0.j f35631i;

    /* renamed from: j  reason: collision with root package name */
    private List f35632j;

    /* renamed from: k  reason: collision with root package name */
    private Rect f35633k;

    /* renamed from: l  reason: collision with root package name */
    private float f35634l;

    /* renamed from: m  reason: collision with root package name */
    private float f35635m;

    /* renamed from: n  reason: collision with root package name */
    private float f35636n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f35637o;

    /* renamed from: q  reason: collision with root package name */
    private int f35639q;

    /* renamed from: r  reason: collision with root package name */
    private int f35640r;

    /* renamed from: a  reason: collision with root package name */
    private final e0 f35623a = new e0();

    /* renamed from: b  reason: collision with root package name */
    private final HashSet f35624b = new HashSet();

    /* renamed from: p  reason: collision with root package name */
    private int f35638p = 0;

    public void a(String str) {
        y5.d.c(str);
        this.f35624b.add(str);
    }

    public Rect b() {
        return this.f35633k;
    }

    public SparseArrayCompat c() {
        return this.f35630h;
    }

    public float d() {
        return (e() / this.f35636n) * 1000.0f;
    }

    public float e() {
        return this.f35635m - this.f35634l;
    }

    public float f() {
        return this.f35635m;
    }

    public Map g() {
        return this.f35628f;
    }

    public float h(float f10) {
        return y5.i.i(this.f35634l, this.f35635m, f10);
    }

    public float i() {
        return this.f35636n;
    }

    public Map j() {
        float e10 = y5.j.e();
        if (e10 != this.f35627e) {
            for (Map.Entry entry : this.f35626d.entrySet()) {
                this.f35626d.put((String) entry.getKey(), ((x) entry.getValue()).a(this.f35627e / e10));
            }
        }
        this.f35627e = e10;
        return this.f35626d;
    }

    public List k() {
        return this.f35632j;
    }

    public r5.h l(String str) {
        int size = this.f35629g.size();
        for (int i10 = 0; i10 < size; i10++) {
            r5.h hVar = (r5.h) this.f35629g.get(i10);
            if (hVar.a(str)) {
                return hVar;
            }
        }
        return null;
    }

    public int m() {
        return this.f35638p;
    }

    public e0 n() {
        return this.f35623a;
    }

    public List o(String str) {
        return (List) this.f35625c.get(str);
    }

    public float p() {
        return this.f35634l;
    }

    public boolean q() {
        return this.f35637o;
    }

    public void r(int i10) {
        this.f35638p += i10;
    }

    public void s(Rect rect, float f10, float f11, float f12, List list, u0.j jVar, Map map, Map map2, float f13, SparseArrayCompat sparseArrayCompat, Map map3, List list2, int i10, int i11) {
        this.f35633k = rect;
        this.f35634l = f10;
        this.f35635m = f11;
        this.f35636n = f12;
        this.f35632j = list;
        this.f35631i = jVar;
        this.f35625c = map;
        this.f35626d = map2;
        this.f35627e = f13;
        this.f35630h = sparseArrayCompat;
        this.f35628f = map3;
        this.f35629g = list2;
        this.f35639q = i10;
        this.f35640r = i11;
    }

    public u5.e t(long j10) {
        return (u5.e) this.f35631i.d(j10);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder("LottieComposition:\n");
        for (u5.e eVar : this.f35632j) {
            sb2.append(eVar.z("\t"));
        }
        return sb2.toString();
    }

    public void u(boolean z10) {
        this.f35637o = z10;
    }

    public void v(boolean z10) {
        this.f35623a.b(z10);
    }
}
