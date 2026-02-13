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
    private final List f51033a;

    /* renamed from: b  reason: collision with root package name */
    private final l5.i f51034b;

    /* renamed from: c  reason: collision with root package name */
    private final String f51035c;

    /* renamed from: d  reason: collision with root package name */
    private final long f51036d;

    /* renamed from: e  reason: collision with root package name */
    private final a f51037e;

    /* renamed from: f  reason: collision with root package name */
    private final long f51038f;

    /* renamed from: g  reason: collision with root package name */
    private final String f51039g;

    /* renamed from: h  reason: collision with root package name */
    private final List f51040h;

    /* renamed from: i  reason: collision with root package name */
    private final n f51041i;

    /* renamed from: j  reason: collision with root package name */
    private final int f51042j;

    /* renamed from: k  reason: collision with root package name */
    private final int f51043k;

    /* renamed from: l  reason: collision with root package name */
    private final int f51044l;

    /* renamed from: m  reason: collision with root package name */
    private final float f51045m;

    /* renamed from: n  reason: collision with root package name */
    private final float f51046n;

    /* renamed from: o  reason: collision with root package name */
    private final float f51047o;

    /* renamed from: p  reason: collision with root package name */
    private final float f51048p;

    /* renamed from: q  reason: collision with root package name */
    private final j f51049q;

    /* renamed from: r  reason: collision with root package name */
    private final k f51050r;

    /* renamed from: s  reason: collision with root package name */
    private final s5.b f51051s;

    /* renamed from: t  reason: collision with root package name */
    private final List f51052t;

    /* renamed from: u  reason: collision with root package name */
    private final b f51053u;

    /* renamed from: v  reason: collision with root package name */
    private final boolean f51054v;

    /* renamed from: w  reason: collision with root package name */
    private final t5.a f51055w;

    /* renamed from: x  reason: collision with root package name */
    private final w5.j f51056x;

    /* renamed from: y  reason: collision with root package name */
    private final t5.h f51057y;

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
        this.f51033a = list;
        this.f51034b = iVar;
        this.f51035c = str;
        this.f51036d = j10;
        this.f51037e = aVar;
        this.f51038f = j11;
        this.f51039g = str2;
        this.f51040h = list2;
        this.f51041i = nVar;
        this.f51042j = i10;
        this.f51043k = i11;
        this.f51044l = i12;
        this.f51045m = f10;
        this.f51046n = f11;
        this.f51047o = f12;
        this.f51048p = f13;
        this.f51049q = jVar;
        this.f51050r = kVar;
        this.f51052t = list3;
        this.f51053u = bVar;
        this.f51051s = bVar2;
        this.f51054v = z10;
        this.f51055w = aVar2;
        this.f51056x = jVar2;
        this.f51057y = hVar;
    }

    public t5.h a() {
        return this.f51057y;
    }

    public t5.a b() {
        return this.f51055w;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public l5.i c() {
        return this.f51034b;
    }

    public w5.j d() {
        return this.f51056x;
    }

    public long e() {
        return this.f51036d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List f() {
        return this.f51052t;
    }

    public a g() {
        return this.f51037e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List h() {
        return this.f51040h;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b i() {
        return this.f51053u;
    }

    public String j() {
        return this.f51035c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public long k() {
        return this.f51038f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float l() {
        return this.f51048p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float m() {
        return this.f51047o;
    }

    public String n() {
        return this.f51039g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List o() {
        return this.f51033a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int p() {
        return this.f51044l;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int q() {
        return this.f51043k;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int r() {
        return this.f51042j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float s() {
        return this.f51046n / this.f51034b.e();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public j t() {
        return this.f51049q;
    }

    public String toString() {
        return z("");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public k u() {
        return this.f51050r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public s5.b v() {
        return this.f51051s;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float w() {
        return this.f51045m;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public n x() {
        return this.f51041i;
    }

    public boolean y() {
        return this.f51054v;
    }

    public String z(String str) {
        StringBuilder sb2 = new StringBuilder();
        sb2.append(str);
        sb2.append(j());
        sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
        e t10 = this.f51034b.t(k());
        if (t10 != null) {
            sb2.append("\t\tParents: ");
            sb2.append(t10.j());
            e t11 = this.f51034b.t(t10.k());
            while (t11 != null) {
                sb2.append("->");
                sb2.append(t11.j());
                t11 = this.f51034b.t(t11.k());
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
        if (!this.f51033a.isEmpty()) {
            sb2.append(str);
            sb2.append("\tShapes:\n");
            for (Object obj : this.f51033a) {
                sb2.append(str);
                sb2.append("\t\t");
                sb2.append(obj);
                sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
            }
        }
        return sb2.toString();
    }
}
