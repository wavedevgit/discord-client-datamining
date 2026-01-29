package t5;

import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import java.util.List;
import java.util.Locale;
import r5.j;
import r5.k;
import r5.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e {

    /* renamed from: a  reason: collision with root package name */
    private final List f49256a;

    /* renamed from: b  reason: collision with root package name */
    private final l5.i f49257b;

    /* renamed from: c  reason: collision with root package name */
    private final String f49258c;

    /* renamed from: d  reason: collision with root package name */
    private final long f49259d;

    /* renamed from: e  reason: collision with root package name */
    private final a f49260e;

    /* renamed from: f  reason: collision with root package name */
    private final long f49261f;

    /* renamed from: g  reason: collision with root package name */
    private final String f49262g;

    /* renamed from: h  reason: collision with root package name */
    private final List f49263h;

    /* renamed from: i  reason: collision with root package name */
    private final l f49264i;

    /* renamed from: j  reason: collision with root package name */
    private final int f49265j;

    /* renamed from: k  reason: collision with root package name */
    private final int f49266k;

    /* renamed from: l  reason: collision with root package name */
    private final int f49267l;

    /* renamed from: m  reason: collision with root package name */
    private final float f49268m;

    /* renamed from: n  reason: collision with root package name */
    private final float f49269n;

    /* renamed from: o  reason: collision with root package name */
    private final float f49270o;

    /* renamed from: p  reason: collision with root package name */
    private final float f49271p;

    /* renamed from: q  reason: collision with root package name */
    private final j f49272q;

    /* renamed from: r  reason: collision with root package name */
    private final k f49273r;

    /* renamed from: s  reason: collision with root package name */
    private final r5.b f49274s;

    /* renamed from: t  reason: collision with root package name */
    private final List f49275t;

    /* renamed from: u  reason: collision with root package name */
    private final b f49276u;

    /* renamed from: v  reason: collision with root package name */
    private final boolean f49277v;

    /* renamed from: w  reason: collision with root package name */
    private final s5.a f49278w;

    /* renamed from: x  reason: collision with root package name */
    private final v5.j f49279x;

    /* renamed from: y  reason: collision with root package name */
    private final s5.h f49280y;

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

    public e(List list, l5.i iVar, String str, long j10, a aVar, long j11, String str2, List list2, l lVar, int i10, int i11, int i12, float f10, float f11, float f12, float f13, j jVar, k kVar, List list3, b bVar, r5.b bVar2, boolean z10, s5.a aVar2, v5.j jVar2, s5.h hVar) {
        this.f49256a = list;
        this.f49257b = iVar;
        this.f49258c = str;
        this.f49259d = j10;
        this.f49260e = aVar;
        this.f49261f = j11;
        this.f49262g = str2;
        this.f49263h = list2;
        this.f49264i = lVar;
        this.f49265j = i10;
        this.f49266k = i11;
        this.f49267l = i12;
        this.f49268m = f10;
        this.f49269n = f11;
        this.f49270o = f12;
        this.f49271p = f13;
        this.f49272q = jVar;
        this.f49273r = kVar;
        this.f49275t = list3;
        this.f49276u = bVar;
        this.f49274s = bVar2;
        this.f49277v = z10;
        this.f49278w = aVar2;
        this.f49279x = jVar2;
        this.f49280y = hVar;
    }

    public s5.h a() {
        return this.f49280y;
    }

    public s5.a b() {
        return this.f49278w;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public l5.i c() {
        return this.f49257b;
    }

    public v5.j d() {
        return this.f49279x;
    }

    public long e() {
        return this.f49259d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List f() {
        return this.f49275t;
    }

    public a g() {
        return this.f49260e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List h() {
        return this.f49263h;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b i() {
        return this.f49276u;
    }

    public String j() {
        return this.f49258c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public long k() {
        return this.f49261f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float l() {
        return this.f49271p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float m() {
        return this.f49270o;
    }

    public String n() {
        return this.f49262g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List o() {
        return this.f49256a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int p() {
        return this.f49267l;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int q() {
        return this.f49266k;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int r() {
        return this.f49265j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float s() {
        return this.f49269n / this.f49257b.e();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public j t() {
        return this.f49272q;
    }

    public String toString() {
        return z("");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public k u() {
        return this.f49273r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public r5.b v() {
        return this.f49274s;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float w() {
        return this.f49268m;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public l x() {
        return this.f49264i;
    }

    public boolean y() {
        return this.f49277v;
    }

    public String z(String str) {
        StringBuilder sb2 = new StringBuilder();
        sb2.append(str);
        sb2.append(j());
        sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
        e t10 = this.f49257b.t(k());
        if (t10 != null) {
            sb2.append("\t\tParents: ");
            sb2.append(t10.j());
            e t11 = this.f49257b.t(t10.k());
            while (t11 != null) {
                sb2.append("->");
                sb2.append(t11.j());
                t11 = this.f49257b.t(t11.k());
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
        if (!this.f49256a.isEmpty()) {
            sb2.append(str);
            sb2.append("\tShapes:\n");
            for (Object obj : this.f49256a) {
                sb2.append(str);
                sb2.append("\t\t");
                sb2.append(obj);
                sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
            }
        }
        return sb2.toString();
    }
}
