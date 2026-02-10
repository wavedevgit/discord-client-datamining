package u5;

import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import java.util.List;
import java.util.Locale;
import s5.j;
import s5.k;
import s5.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e {

    /* renamed from: a  reason: collision with root package name */
    private final List f51285a;

    /* renamed from: b  reason: collision with root package name */
    private final l5.i f51286b;

    /* renamed from: c  reason: collision with root package name */
    private final String f51287c;

    /* renamed from: d  reason: collision with root package name */
    private final long f51288d;

    /* renamed from: e  reason: collision with root package name */
    private final a f51289e;

    /* renamed from: f  reason: collision with root package name */
    private final long f51290f;

    /* renamed from: g  reason: collision with root package name */
    private final String f51291g;

    /* renamed from: h  reason: collision with root package name */
    private final List f51292h;

    /* renamed from: i  reason: collision with root package name */
    private final n f51293i;

    /* renamed from: j  reason: collision with root package name */
    private final int f51294j;

    /* renamed from: k  reason: collision with root package name */
    private final int f51295k;

    /* renamed from: l  reason: collision with root package name */
    private final int f51296l;

    /* renamed from: m  reason: collision with root package name */
    private final float f51297m;

    /* renamed from: n  reason: collision with root package name */
    private final float f51298n;

    /* renamed from: o  reason: collision with root package name */
    private final float f51299o;

    /* renamed from: p  reason: collision with root package name */
    private final float f51300p;

    /* renamed from: q  reason: collision with root package name */
    private final j f51301q;

    /* renamed from: r  reason: collision with root package name */
    private final k f51302r;

    /* renamed from: s  reason: collision with root package name */
    private final s5.b f51303s;

    /* renamed from: t  reason: collision with root package name */
    private final List f51304t;

    /* renamed from: u  reason: collision with root package name */
    private final b f51305u;

    /* renamed from: v  reason: collision with root package name */
    private final boolean f51306v;

    /* renamed from: w  reason: collision with root package name */
    private final t5.a f51307w;

    /* renamed from: x  reason: collision with root package name */
    private final w5.j f51308x;

    /* renamed from: y  reason: collision with root package name */
    private final t5.h f51309y;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum a {
        PRE_COMP,
        SOLID,
        IMAGE,
        NULL,
        SHAPE,
        TEXT,
        UNKNOWN
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum b {
        NONE,
        ADD,
        INVERT,
        LUMA,
        LUMA_INVERTED,
        UNKNOWN
    }

    public e(List list, l5.i iVar, String str, long j10, a aVar, long j11, String str2, List list2, n nVar, int i10, int i11, int i12, float f10, float f11, float f12, float f13, j jVar, k kVar, List list3, b bVar, s5.b bVar2, boolean z10, t5.a aVar2, w5.j jVar2, t5.h hVar) {
        this.f51285a = list;
        this.f51286b = iVar;
        this.f51287c = str;
        this.f51288d = j10;
        this.f51289e = aVar;
        this.f51290f = j11;
        this.f51291g = str2;
        this.f51292h = list2;
        this.f51293i = nVar;
        this.f51294j = i10;
        this.f51295k = i11;
        this.f51296l = i12;
        this.f51297m = f10;
        this.f51298n = f11;
        this.f51299o = f12;
        this.f51300p = f13;
        this.f51301q = jVar;
        this.f51302r = kVar;
        this.f51304t = list3;
        this.f51305u = bVar;
        this.f51303s = bVar2;
        this.f51306v = z10;
        this.f51307w = aVar2;
        this.f51308x = jVar2;
        this.f51309y = hVar;
    }

    public t5.h a() {
        return this.f51309y;
    }

    public t5.a b() {
        return this.f51307w;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public l5.i c() {
        return this.f51286b;
    }

    public w5.j d() {
        return this.f51308x;
    }

    public long e() {
        return this.f51288d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List f() {
        return this.f51304t;
    }

    public a g() {
        return this.f51289e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List h() {
        return this.f51292h;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b i() {
        return this.f51305u;
    }

    public String j() {
        return this.f51287c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public long k() {
        return this.f51290f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float l() {
        return this.f51300p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float m() {
        return this.f51299o;
    }

    public String n() {
        return this.f51291g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List o() {
        return this.f51285a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int p() {
        return this.f51296l;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int q() {
        return this.f51295k;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int r() {
        return this.f51294j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float s() {
        return this.f51298n / this.f51286b.e();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public j t() {
        return this.f51301q;
    }

    public String toString() {
        return z("");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public k u() {
        return this.f51302r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public s5.b v() {
        return this.f51303s;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float w() {
        return this.f51297m;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public n x() {
        return this.f51293i;
    }

    public boolean y() {
        return this.f51306v;
    }

    public String z(String str) {
        StringBuilder sb2 = new StringBuilder();
        sb2.append(str);
        sb2.append(j());
        sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
        e t10 = this.f51286b.t(k());
        if (t10 != null) {
            sb2.append("\t\tParents: ");
            sb2.append(t10.j());
            e t11 = this.f51286b.t(t10.k());
            while (t11 != null) {
                sb2.append("->");
                sb2.append(t11.j());
                t11 = this.f51286b.t(t11.k());
            }
            sb2.append(str);
            sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
        }
        if (!h().isEmpty()) {
            sb2.append(str);
            sb2.append("\tMasks: ");
            sb2.append(h().size());
            sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
        }
        if (r() != 0 && q() != 0) {
            sb2.append(str);
            sb2.append("\tBackground: ");
            sb2.append(String.format(Locale.US, "%dx%d %X\n", Integer.valueOf(r()), Integer.valueOf(q()), Integer.valueOf(p())));
        }
        if (!this.f51285a.isEmpty()) {
            sb2.append(str);
            sb2.append("\tShapes:\n");
            for (Object obj : this.f51285a) {
                sb2.append(str);
                sb2.append("\t\t");
                sb2.append(obj);
                sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
            }
        }
        return sb2.toString();
    }
}
