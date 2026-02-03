package l5;

import android.graphics.Rect;
import androidx.collection.SparseArrayCompat;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i {

    /* renamed from: c  reason: collision with root package name */
    private Map f37055c;

    /* renamed from: d  reason: collision with root package name */
    private Map f37056d;

    /* renamed from: e  reason: collision with root package name */
    private float f37057e;

    /* renamed from: f  reason: collision with root package name */
    private Map f37058f;

    /* renamed from: g  reason: collision with root package name */
    private List f37059g;

    /* renamed from: h  reason: collision with root package name */
    private SparseArrayCompat f37060h;

    /* renamed from: i  reason: collision with root package name */
    private u0.j f37061i;

    /* renamed from: j  reason: collision with root package name */
    private List f37062j;

    /* renamed from: k  reason: collision with root package name */
    private Rect f37063k;

    /* renamed from: l  reason: collision with root package name */
    private float f37064l;

    /* renamed from: m  reason: collision with root package name */
    private float f37065m;

    /* renamed from: n  reason: collision with root package name */
    private float f37066n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f37067o;

    /* renamed from: a  reason: collision with root package name */
    private final d0 f37053a = new d0();

    /* renamed from: b  reason: collision with root package name */
    private final HashSet f37054b = new HashSet();

    /* renamed from: p  reason: collision with root package name */
    private int f37068p = 0;

    public void a(String str) {
        x5.d.c(str);
        this.f37054b.add(str);
    }

    public Rect b() {
        return this.f37063k;
    }

    public SparseArrayCompat c() {
        return this.f37060h;
    }

    public float d() {
        return (e() / this.f37066n) * 1000.0f;
    }

    public float e() {
        return this.f37065m - this.f37064l;
    }

    public float f() {
        return this.f37065m;
    }

    public Map g() {
        return this.f37058f;
    }

    public float h(float f10) {
        return x5.i.i(this.f37064l, this.f37065m, f10);
    }

    public float i() {
        return this.f37066n;
    }

    public Map j() {
        float e10 = x5.j.e();
        if (e10 != this.f37057e) {
            for (Map.Entry entry : this.f37056d.entrySet()) {
                this.f37056d.put((String) entry.getKey(), ((w) entry.getValue()).a(this.f37057e / e10));
            }
        }
        this.f37057e = e10;
        return this.f37056d;
    }

    public List k() {
        return this.f37062j;
    }

    public q5.h l(String str) {
        int size = this.f37059g.size();
        for (int i10 = 0; i10 < size; i10++) {
            q5.h hVar = (q5.h) this.f37059g.get(i10);
            if (hVar.a(str)) {
                return hVar;
            }
        }
        return null;
    }

    public int m() {
        return this.f37068p;
    }

    public d0 n() {
        return this.f37053a;
    }

    public List o(String str) {
        return (List) this.f37055c.get(str);
    }

    public float p() {
        return this.f37064l;
    }

    public boolean q() {
        return this.f37067o;
    }

    public void r(int i10) {
        this.f37068p += i10;
    }

    public void s(Rect rect, float f10, float f11, float f12, List list, u0.j jVar, Map map, Map map2, float f13, SparseArrayCompat sparseArrayCompat, Map map3, List list2) {
        this.f37063k = rect;
        this.f37064l = f10;
        this.f37065m = f11;
        this.f37066n = f12;
        this.f37062j = list;
        this.f37061i = jVar;
        this.f37055c = map;
        this.f37056d = map2;
        this.f37057e = f13;
        this.f37060h = sparseArrayCompat;
        this.f37058f = map3;
        this.f37059g = list2;
    }

    public t5.e t(long j10) {
        return (t5.e) this.f37061i.d(j10);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder("LottieComposition:\n");
        for (t5.e eVar : this.f37062j) {
            sb2.append(eVar.z("\t"));
        }
        return sb2.toString();
    }

    public void u(boolean z10) {
        this.f37067o = z10;
    }

    public void v(boolean z10) {
        this.f37053a.b(z10);
    }
}
