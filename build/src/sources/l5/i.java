package l5;

import android.graphics.Rect;
import androidx.collection.SparseArrayCompat;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i {

    /* renamed from: c  reason: collision with root package name */
    private Map f35844c;

    /* renamed from: d  reason: collision with root package name */
    private Map f35845d;

    /* renamed from: e  reason: collision with root package name */
    private float f35846e;

    /* renamed from: f  reason: collision with root package name */
    private Map f35847f;

    /* renamed from: g  reason: collision with root package name */
    private List f35848g;

    /* renamed from: h  reason: collision with root package name */
    private SparseArrayCompat f35849h;

    /* renamed from: i  reason: collision with root package name */
    private u0.j f35850i;

    /* renamed from: j  reason: collision with root package name */
    private List f35851j;

    /* renamed from: k  reason: collision with root package name */
    private Rect f35852k;

    /* renamed from: l  reason: collision with root package name */
    private float f35853l;

    /* renamed from: m  reason: collision with root package name */
    private float f35854m;

    /* renamed from: n  reason: collision with root package name */
    private float f35855n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f35856o;

    /* renamed from: a  reason: collision with root package name */
    private final d0 f35842a = new d0();

    /* renamed from: b  reason: collision with root package name */
    private final HashSet f35843b = new HashSet();

    /* renamed from: p  reason: collision with root package name */
    private int f35857p = 0;

    public void a(String str) {
        x5.d.c(str);
        this.f35843b.add(str);
    }

    public Rect b() {
        return this.f35852k;
    }

    public SparseArrayCompat c() {
        return this.f35849h;
    }

    public float d() {
        return (e() / this.f35855n) * 1000.0f;
    }

    public float e() {
        return this.f35854m - this.f35853l;
    }

    public float f() {
        return this.f35854m;
    }

    public Map g() {
        return this.f35847f;
    }

    public float h(float f10) {
        return x5.i.i(this.f35853l, this.f35854m, f10);
    }

    public float i() {
        return this.f35855n;
    }

    public Map j() {
        float e10 = x5.j.e();
        if (e10 != this.f35846e) {
            for (Map.Entry entry : this.f35845d.entrySet()) {
                this.f35845d.put((String) entry.getKey(), ((w) entry.getValue()).a(this.f35846e / e10));
            }
        }
        this.f35846e = e10;
        return this.f35845d;
    }

    public List k() {
        return this.f35851j;
    }

    public q5.h l(String str) {
        int size = this.f35848g.size();
        for (int i10 = 0; i10 < size; i10++) {
            q5.h hVar = (q5.h) this.f35848g.get(i10);
            if (hVar.a(str)) {
                return hVar;
            }
        }
        return null;
    }

    public int m() {
        return this.f35857p;
    }

    public d0 n() {
        return this.f35842a;
    }

    public List o(String str) {
        return (List) this.f35844c.get(str);
    }

    public float p() {
        return this.f35853l;
    }

    public boolean q() {
        return this.f35856o;
    }

    public void r(int i10) {
        this.f35857p += i10;
    }

    public void s(Rect rect, float f10, float f11, float f12, List list, u0.j jVar, Map map, Map map2, float f13, SparseArrayCompat sparseArrayCompat, Map map3, List list2) {
        this.f35852k = rect;
        this.f35853l = f10;
        this.f35854m = f11;
        this.f35855n = f12;
        this.f35851j = list;
        this.f35850i = jVar;
        this.f35844c = map;
        this.f35845d = map2;
        this.f35846e = f13;
        this.f35849h = sparseArrayCompat;
        this.f35847f = map3;
        this.f35848g = list2;
    }

    public t5.e t(long j10) {
        return (t5.e) this.f35850i.d(j10);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder("LottieComposition:\n");
        for (t5.e eVar : this.f35851j) {
            sb2.append(eVar.z("\t"));
        }
        return sb2.toString();
    }

    public void u(boolean z10) {
        this.f35856o = z10;
    }

    public void v(boolean z10) {
        this.f35842a.b(z10);
    }
}
