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
    private final List f49752a;

    /* renamed from: b  reason: collision with root package name */
    private final l5.i f49753b;

    /* renamed from: c  reason: collision with root package name */
    private final String f49754c;

    /* renamed from: d  reason: collision with root package name */
    private final long f49755d;

    /* renamed from: e  reason: collision with root package name */
    private final a f49756e;

    /* renamed from: f  reason: collision with root package name */
    private final long f49757f;

    /* renamed from: g  reason: collision with root package name */
    private final String f49758g;

    /* renamed from: h  reason: collision with root package name */
    private final List f49759h;

    /* renamed from: i  reason: collision with root package name */
    private final l f49760i;

    /* renamed from: j  reason: collision with root package name */
    private final int f49761j;

    /* renamed from: k  reason: collision with root package name */
    private final int f49762k;

    /* renamed from: l  reason: collision with root package name */
    private final int f49763l;

    /* renamed from: m  reason: collision with root package name */
    private final float f49764m;

    /* renamed from: n  reason: collision with root package name */
    private final float f49765n;

    /* renamed from: o  reason: collision with root package name */
    private final float f49766o;

    /* renamed from: p  reason: collision with root package name */
    private final float f49767p;

    /* renamed from: q  reason: collision with root package name */
    private final j f49768q;

    /* renamed from: r  reason: collision with root package name */
    private final k f49769r;

    /* renamed from: s  reason: collision with root package name */
    private final r5.b f49770s;

    /* renamed from: t  reason: collision with root package name */
    private final List f49771t;

    /* renamed from: u  reason: collision with root package name */
    private final b f49772u;

    /* renamed from: v  reason: collision with root package name */
    private final boolean f49773v;

    /* renamed from: w  reason: collision with root package name */
    private final s5.a f49774w;

    /* renamed from: x  reason: collision with root package name */
    private final v5.j f49775x;

    /* renamed from: y  reason: collision with root package name */
    private final s5.h f49776y;

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
        this.f49752a = list;
        this.f49753b = iVar;
        this.f49754c = str;
        this.f49755d = j10;
        this.f49756e = aVar;
        this.f49757f = j11;
        this.f49758g = str2;
        this.f49759h = list2;
        this.f49760i = lVar;
        this.f49761j = i10;
        this.f49762k = i11;
        this.f49763l = i12;
        this.f49764m = f10;
        this.f49765n = f11;
        this.f49766o = f12;
        this.f49767p = f13;
        this.f49768q = jVar;
        this.f49769r = kVar;
        this.f49771t = list3;
        this.f49772u = bVar;
        this.f49770s = bVar2;
        this.f49773v = z10;
        this.f49774w = aVar2;
        this.f49775x = jVar2;
        this.f49776y = hVar;
    }

    public s5.h a() {
        return this.f49776y;
    }

    public s5.a b() {
        return this.f49774w;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public l5.i c() {
        return this.f49753b;
    }

    public v5.j d() {
        return this.f49775x;
    }

    public long e() {
        return this.f49755d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List f() {
        return this.f49771t;
    }

    public a g() {
        return this.f49756e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List h() {
        return this.f49759h;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b i() {
        return this.f49772u;
    }

    public String j() {
        return this.f49754c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public long k() {
        return this.f49757f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float l() {
        return this.f49767p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float m() {
        return this.f49766o;
    }

    public String n() {
        return this.f49758g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List o() {
        return this.f49752a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int p() {
        return this.f49763l;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int q() {
        return this.f49762k;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int r() {
        return this.f49761j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float s() {
        return this.f49765n / this.f49753b.e();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public j t() {
        return this.f49768q;
    }

    public String toString() {
        return z("");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public k u() {
        return this.f49769r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public r5.b v() {
        return this.f49770s;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float w() {
        return this.f49764m;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public l x() {
        return this.f49760i;
    }

    public boolean y() {
        return this.f49773v;
    }

    public String z(String str) {
        StringBuilder sb2 = new StringBuilder();
        sb2.append(str);
        sb2.append(j());
        sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
        e t10 = this.f49753b.t(k());
        if (t10 != null) {
            sb2.append("\t\tParents: ");
            sb2.append(t10.j());
            e t11 = this.f49753b.t(t10.k());
            while (t11 != null) {
                sb2.append("->");
                sb2.append(t11.j());
                t11 = this.f49753b.t(t11.k());
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
        if (!this.f49752a.isEmpty()) {
            sb2.append(str);
            sb2.append("\tShapes:\n");
            for (Object obj : this.f49752a) {
                sb2.append(str);
                sb2.append("\t\t");
                sb2.append(obj);
                sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
            }
        }
        return sb2.toString();
    }
}
