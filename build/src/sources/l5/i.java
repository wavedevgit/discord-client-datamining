package l5;

import android.graphics.Rect;
import androidx.collection.SparseArrayCompat;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i {

    /* renamed from: c  reason: collision with root package name */
    private Map f35892c;

    /* renamed from: d  reason: collision with root package name */
    private Map f35893d;

    /* renamed from: e  reason: collision with root package name */
    private float f35894e;

    /* renamed from: f  reason: collision with root package name */
    private Map f35895f;

    /* renamed from: g  reason: collision with root package name */
    private List f35896g;

    /* renamed from: h  reason: collision with root package name */
    private SparseArrayCompat f35897h;

    /* renamed from: i  reason: collision with root package name */
    private u0.j f35898i;

    /* renamed from: j  reason: collision with root package name */
    private List f35899j;

    /* renamed from: k  reason: collision with root package name */
    private Rect f35900k;

    /* renamed from: l  reason: collision with root package name */
    private float f35901l;

    /* renamed from: m  reason: collision with root package name */
    private float f35902m;

    /* renamed from: n  reason: collision with root package name */
    private float f35903n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f35904o;

    /* renamed from: a  reason: collision with root package name */
    private final d0 f35890a = new d0();

    /* renamed from: b  reason: collision with root package name */
    private final HashSet f35891b = new HashSet();

    /* renamed from: p  reason: collision with root package name */
    private int f35905p = 0;

    public void a(String str) {
        x5.d.c(str);
        this.f35891b.add(str);
    }

    public Rect b() {
        return this.f35900k;
    }

    public SparseArrayCompat c() {
        return this.f35897h;
    }

    public float d() {
        return (e() / this.f35903n) * 1000.0f;
    }

    public float e() {
        return this.f35902m - this.f35901l;
    }

    public float f() {
        return this.f35902m;
    }

    public Map g() {
        return this.f35895f;
    }

    public float h(float f10) {
        return x5.i.i(this.f35901l, this.f35902m, f10);
    }

    public float i() {
        return this.f35903n;
    }

    public Map j() {
        float e10 = x5.j.e();
        if (e10 != this.f35894e) {
            for (Map.Entry entry : this.f35893d.entrySet()) {
                this.f35893d.put((String) entry.getKey(), ((w) entry.getValue()).a(this.f35894e / e10));
            }
        }
        this.f35894e = e10;
        return this.f35893d;
    }

    public List k() {
        return this.f35899j;
    }

    public q5.h l(String str) {
        int size = this.f35896g.size();
        for (int i10 = 0; i10 < size; i10++) {
            q5.h hVar = (q5.h) this.f35896g.get(i10);
            if (hVar.a(str)) {
                return hVar;
            }
        }
        return null;
    }

    public int m() {
        return this.f35905p;
    }

    public d0 n() {
        return this.f35890a;
    }

    public List o(String str) {
        return (List) this.f35892c.get(str);
    }

    public float p() {
        return this.f35901l;
    }

    public boolean q() {
        return this.f35904o;
    }

    public void r(int i10) {
        this.f35905p += i10;
    }

    public void s(Rect rect, float f10, float f11, float f12, List list, u0.j jVar, Map map, Map map2, float f13, SparseArrayCompat sparseArrayCompat, Map map3, List list2) {
        this.f35900k = rect;
        this.f35901l = f10;
        this.f35902m = f11;
        this.f35903n = f12;
        this.f35899j = list;
        this.f35898i = jVar;
        this.f35892c = map;
        this.f35893d = map2;
        this.f35894e = f13;
        this.f35897h = sparseArrayCompat;
        this.f35895f = map3;
        this.f35896g = list2;
    }

    public t5.e t(long j10) {
        return (t5.e) this.f35898i.d(j10);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder("LottieComposition:\n");
        for (t5.e eVar : this.f35899j) {
            sb2.append(eVar.z("\t"));
        }
        return sb2.toString();
    }

    public void u(boolean z10) {
        this.f35904o = z10;
    }

    public void v(boolean z10) {
        this.f35890a.b(z10);
    }
}
