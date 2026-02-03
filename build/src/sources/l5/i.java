package l5;

import android.graphics.Rect;
import androidx.collection.SparseArrayCompat;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i {

    /* renamed from: c  reason: collision with root package name */
    private Map f36524c;

    /* renamed from: d  reason: collision with root package name */
    private Map f36525d;

    /* renamed from: e  reason: collision with root package name */
    private float f36526e;

    /* renamed from: f  reason: collision with root package name */
    private Map f36527f;

    /* renamed from: g  reason: collision with root package name */
    private List f36528g;

    /* renamed from: h  reason: collision with root package name */
    private SparseArrayCompat f36529h;

    /* renamed from: i  reason: collision with root package name */
    private u0.j f36530i;

    /* renamed from: j  reason: collision with root package name */
    private List f36531j;

    /* renamed from: k  reason: collision with root package name */
    private Rect f36532k;

    /* renamed from: l  reason: collision with root package name */
    private float f36533l;

    /* renamed from: m  reason: collision with root package name */
    private float f36534m;

    /* renamed from: n  reason: collision with root package name */
    private float f36535n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f36536o;

    /* renamed from: a  reason: collision with root package name */
    private final d0 f36522a = new d0();

    /* renamed from: b  reason: collision with root package name */
    private final HashSet f36523b = new HashSet();

    /* renamed from: p  reason: collision with root package name */
    private int f36537p = 0;

    public void a(String str) {
        x5.d.c(str);
        this.f36523b.add(str);
    }

    public Rect b() {
        return this.f36532k;
    }

    public SparseArrayCompat c() {
        return this.f36529h;
    }

    public float d() {
        return (e() / this.f36535n) * 1000.0f;
    }

    public float e() {
        return this.f36534m - this.f36533l;
    }

    public float f() {
        return this.f36534m;
    }

    public Map g() {
        return this.f36527f;
    }

    public float h(float f10) {
        return x5.i.i(this.f36533l, this.f36534m, f10);
    }

    public float i() {
        return this.f36535n;
    }

    public Map j() {
        float e10 = x5.j.e();
        if (e10 != this.f36526e) {
            for (Map.Entry entry : this.f36525d.entrySet()) {
                this.f36525d.put((String) entry.getKey(), ((w) entry.getValue()).a(this.f36526e / e10));
            }
        }
        this.f36526e = e10;
        return this.f36525d;
    }

    public List k() {
        return this.f36531j;
    }

    public q5.h l(String str) {
        int size = this.f36528g.size();
        for (int i10 = 0; i10 < size; i10++) {
            q5.h hVar = (q5.h) this.f36528g.get(i10);
            if (hVar.a(str)) {
                return hVar;
            }
        }
        return null;
    }

    public int m() {
        return this.f36537p;
    }

    public d0 n() {
        return this.f36522a;
    }

    public List o(String str) {
        return (List) this.f36524c.get(str);
    }

    public float p() {
        return this.f36533l;
    }

    public boolean q() {
        return this.f36536o;
    }

    public void r(int i10) {
        this.f36537p += i10;
    }

    public void s(Rect rect, float f10, float f11, float f12, List list, u0.j jVar, Map map, Map map2, float f13, SparseArrayCompat sparseArrayCompat, Map map3, List list2) {
        this.f36532k = rect;
        this.f36533l = f10;
        this.f36534m = f11;
        this.f36535n = f12;
        this.f36531j = list;
        this.f36530i = jVar;
        this.f36524c = map;
        this.f36525d = map2;
        this.f36526e = f13;
        this.f36529h = sparseArrayCompat;
        this.f36527f = map3;
        this.f36528g = list2;
    }

    public t5.e t(long j10) {
        return (t5.e) this.f36530i.d(j10);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder("LottieComposition:\n");
        for (t5.e eVar : this.f36531j) {
            sb2.append(eVar.z("\t"));
        }
        return sb2.toString();
    }

    public void u(boolean z10) {
        this.f36536o = z10;
    }

    public void v(boolean z10) {
        this.f36522a.b(z10);
    }
}
