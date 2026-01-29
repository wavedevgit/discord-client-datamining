package l5;

import android.graphics.Rect;
import androidx.collection.SparseArrayCompat;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i {

    /* renamed from: c  reason: collision with root package name */
    private Map f36925c;

    /* renamed from: d  reason: collision with root package name */
    private Map f36926d;

    /* renamed from: e  reason: collision with root package name */
    private float f36927e;

    /* renamed from: f  reason: collision with root package name */
    private Map f36928f;

    /* renamed from: g  reason: collision with root package name */
    private List f36929g;

    /* renamed from: h  reason: collision with root package name */
    private SparseArrayCompat f36930h;

    /* renamed from: i  reason: collision with root package name */
    private u0.j f36931i;

    /* renamed from: j  reason: collision with root package name */
    private List f36932j;

    /* renamed from: k  reason: collision with root package name */
    private Rect f36933k;

    /* renamed from: l  reason: collision with root package name */
    private float f36934l;

    /* renamed from: m  reason: collision with root package name */
    private float f36935m;

    /* renamed from: n  reason: collision with root package name */
    private float f36936n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f36937o;

    /* renamed from: a  reason: collision with root package name */
    private final d0 f36923a = new d0();

    /* renamed from: b  reason: collision with root package name */
    private final HashSet f36924b = new HashSet();

    /* renamed from: p  reason: collision with root package name */
    private int f36938p = 0;

    public void a(String str) {
        x5.d.c(str);
        this.f36924b.add(str);
    }

    public Rect b() {
        return this.f36933k;
    }

    public SparseArrayCompat c() {
        return this.f36930h;
    }

    public float d() {
        return (e() / this.f36936n) * 1000.0f;
    }

    public float e() {
        return this.f36935m - this.f36934l;
    }

    public float f() {
        return this.f36935m;
    }

    public Map g() {
        return this.f36928f;
    }

    public float h(float f10) {
        return x5.i.i(this.f36934l, this.f36935m, f10);
    }

    public float i() {
        return this.f36936n;
    }

    public Map j() {
        float e10 = x5.j.e();
        if (e10 != this.f36927e) {
            for (Map.Entry entry : this.f36926d.entrySet()) {
                this.f36926d.put((String) entry.getKey(), ((w) entry.getValue()).a(this.f36927e / e10));
            }
        }
        this.f36927e = e10;
        return this.f36926d;
    }

    public List k() {
        return this.f36932j;
    }

    public q5.h l(String str) {
        int size = this.f36929g.size();
        for (int i10 = 0; i10 < size; i10++) {
            q5.h hVar = (q5.h) this.f36929g.get(i10);
            if (hVar.a(str)) {
                return hVar;
            }
        }
        return null;
    }

    public int m() {
        return this.f36938p;
    }

    public d0 n() {
        return this.f36923a;
    }

    public List o(String str) {
        return (List) this.f36925c.get(str);
    }

    public float p() {
        return this.f36934l;
    }

    public boolean q() {
        return this.f36937o;
    }

    public void r(int i10) {
        this.f36938p += i10;
    }

    public void s(Rect rect, float f10, float f11, float f12, List list, u0.j jVar, Map map, Map map2, float f13, SparseArrayCompat sparseArrayCompat, Map map3, List list2) {
        this.f36933k = rect;
        this.f36934l = f10;
        this.f36935m = f11;
        this.f36936n = f12;
        this.f36932j = list;
        this.f36931i = jVar;
        this.f36925c = map;
        this.f36926d = map2;
        this.f36927e = f13;
        this.f36930h = sparseArrayCompat;
        this.f36928f = map3;
        this.f36929g = list2;
    }

    public t5.e t(long j10) {
        return (t5.e) this.f36931i.d(j10);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder("LottieComposition:\n");
        for (t5.e eVar : this.f36932j) {
            sb2.append(eVar.z("\t"));
        }
        return sb2.toString();
    }

    public void u(boolean z10) {
        this.f36937o = z10;
    }

    public void v(boolean z10) {
        this.f36923a.b(z10);
    }
}
