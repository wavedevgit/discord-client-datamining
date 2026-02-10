package l5;

import android.graphics.Rect;
import androidx.collection.SparseArrayCompat;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i {

    /* renamed from: c  reason: collision with root package name */
    private Map f35728c;

    /* renamed from: d  reason: collision with root package name */
    private Map f35729d;

    /* renamed from: e  reason: collision with root package name */
    private float f35730e;

    /* renamed from: f  reason: collision with root package name */
    private Map f35731f;

    /* renamed from: g  reason: collision with root package name */
    private List f35732g;

    /* renamed from: h  reason: collision with root package name */
    private SparseArrayCompat f35733h;

    /* renamed from: i  reason: collision with root package name */
    private u0.j f35734i;

    /* renamed from: j  reason: collision with root package name */
    private List f35735j;

    /* renamed from: k  reason: collision with root package name */
    private Rect f35736k;

    /* renamed from: l  reason: collision with root package name */
    private float f35737l;

    /* renamed from: m  reason: collision with root package name */
    private float f35738m;

    /* renamed from: n  reason: collision with root package name */
    private float f35739n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f35740o;

    /* renamed from: q  reason: collision with root package name */
    private int f35742q;

    /* renamed from: r  reason: collision with root package name */
    private int f35743r;

    /* renamed from: a  reason: collision with root package name */
    private final e0 f35726a = new e0();

    /* renamed from: b  reason: collision with root package name */
    private final HashSet f35727b = new HashSet();

    /* renamed from: p  reason: collision with root package name */
    private int f35741p = 0;

    public void a(String str) {
        y5.d.c(str);
        this.f35727b.add(str);
    }

    public Rect b() {
        return this.f35736k;
    }

    public SparseArrayCompat c() {
        return this.f35733h;
    }

    public float d() {
        return (e() / this.f35739n) * 1000.0f;
    }

    public float e() {
        return this.f35738m - this.f35737l;
    }

    public float f() {
        return this.f35738m;
    }

    public Map g() {
        return this.f35731f;
    }

    public float h(float f10) {
        return y5.i.i(this.f35737l, this.f35738m, f10);
    }

    public float i() {
        return this.f35739n;
    }

    public Map j() {
        float e10 = y5.j.e();
        if (e10 != this.f35730e) {
            for (Map.Entry entry : this.f35729d.entrySet()) {
                this.f35729d.put((String) entry.getKey(), ((x) entry.getValue()).a(this.f35730e / e10));
            }
        }
        this.f35730e = e10;
        return this.f35729d;
    }

    public List k() {
        return this.f35735j;
    }

    public r5.h l(String str) {
        int size = this.f35732g.size();
        for (int i10 = 0; i10 < size; i10++) {
            r5.h hVar = (r5.h) this.f35732g.get(i10);
            if (hVar.a(str)) {
                return hVar;
            }
        }
        return null;
    }

    public int m() {
        return this.f35741p;
    }

    public e0 n() {
        return this.f35726a;
    }

    public List o(String str) {
        return (List) this.f35728c.get(str);
    }

    public float p() {
        return this.f35737l;
    }

    public boolean q() {
        return this.f35740o;
    }

    public void r(int i10) {
        this.f35741p += i10;
    }

    public void s(Rect rect, float f10, float f11, float f12, List list, u0.j jVar, Map map, Map map2, float f13, SparseArrayCompat sparseArrayCompat, Map map3, List list2, int i10, int i11) {
        this.f35736k = rect;
        this.f35737l = f10;
        this.f35738m = f11;
        this.f35739n = f12;
        this.f35735j = list;
        this.f35734i = jVar;
        this.f35728c = map;
        this.f35729d = map2;
        this.f35730e = f13;
        this.f35733h = sparseArrayCompat;
        this.f35731f = map3;
        this.f35732g = list2;
        this.f35742q = i10;
        this.f35743r = i11;
    }

    public u5.e t(long j10) {
        return (u5.e) this.f35734i.d(j10);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder("LottieComposition:\n");
        for (u5.e eVar : this.f35735j) {
            sb2.append(eVar.z("\t"));
        }
        return sb2.toString();
    }

    public void u(boolean z10) {
        this.f35740o = z10;
    }

    public void v(boolean z10) {
        this.f35726a.b(z10);
    }
}
