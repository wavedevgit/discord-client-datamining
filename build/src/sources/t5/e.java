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
    private final List f50333a;

    /* renamed from: b  reason: collision with root package name */
    private final l5.i f50334b;

    /* renamed from: c  reason: collision with root package name */
    private final String f50335c;

    /* renamed from: d  reason: collision with root package name */
    private final long f50336d;

    /* renamed from: e  reason: collision with root package name */
    private final a f50337e;

    /* renamed from: f  reason: collision with root package name */
    private final long f50338f;

    /* renamed from: g  reason: collision with root package name */
    private final String f50339g;

    /* renamed from: h  reason: collision with root package name */
    private final List f50340h;

    /* renamed from: i  reason: collision with root package name */
    private final l f50341i;

    /* renamed from: j  reason: collision with root package name */
    private final int f50342j;

    /* renamed from: k  reason: collision with root package name */
    private final int f50343k;

    /* renamed from: l  reason: collision with root package name */
    private final int f50344l;

    /* renamed from: m  reason: collision with root package name */
    private final float f50345m;

    /* renamed from: n  reason: collision with root package name */
    private final float f50346n;

    /* renamed from: o  reason: collision with root package name */
    private final float f50347o;

    /* renamed from: p  reason: collision with root package name */
    private final float f50348p;

    /* renamed from: q  reason: collision with root package name */
    private final j f50349q;

    /* renamed from: r  reason: collision with root package name */
    private final k f50350r;

    /* renamed from: s  reason: collision with root package name */
    private final r5.b f50351s;

    /* renamed from: t  reason: collision with root package name */
    private final List f50352t;

    /* renamed from: u  reason: collision with root package name */
    private final b f50353u;

    /* renamed from: v  reason: collision with root package name */
    private final boolean f50354v;

    /* renamed from: w  reason: collision with root package name */
    private final s5.a f50355w;

    /* renamed from: x  reason: collision with root package name */
    private final v5.j f50356x;

    /* renamed from: y  reason: collision with root package name */
    private final s5.h f50357y;

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
        this.f50333a = list;
        this.f50334b = iVar;
        this.f50335c = str;
        this.f50336d = j10;
        this.f50337e = aVar;
        this.f50338f = j11;
        this.f50339g = str2;
        this.f50340h = list2;
        this.f50341i = lVar;
        this.f50342j = i10;
        this.f50343k = i11;
        this.f50344l = i12;
        this.f50345m = f10;
        this.f50346n = f11;
        this.f50347o = f12;
        this.f50348p = f13;
        this.f50349q = jVar;
        this.f50350r = kVar;
        this.f50352t = list3;
        this.f50353u = bVar;
        this.f50351s = bVar2;
        this.f50354v = z10;
        this.f50355w = aVar2;
        this.f50356x = jVar2;
        this.f50357y = hVar;
    }

    public s5.h a() {
        return this.f50357y;
    }

    public s5.a b() {
        return this.f50355w;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public l5.i c() {
        return this.f50334b;
    }

    public v5.j d() {
        return this.f50356x;
    }

    public long e() {
        return this.f50336d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List f() {
        return this.f50352t;
    }

    public a g() {
        return this.f50337e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List h() {
        return this.f50340h;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b i() {
        return this.f50353u;
    }

    public String j() {
        return this.f50335c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public long k() {
        return this.f50338f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float l() {
        return this.f50348p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float m() {
        return this.f50347o;
    }

    public String n() {
        return this.f50339g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List o() {
        return this.f50333a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int p() {
        return this.f50344l;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int q() {
        return this.f50343k;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int r() {
        return this.f50342j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float s() {
        return this.f50346n / this.f50334b.e();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public j t() {
        return this.f50349q;
    }

    public String toString() {
        return z("");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public k u() {
        return this.f50350r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public r5.b v() {
        return this.f50351s;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float w() {
        return this.f50345m;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public l x() {
        return this.f50341i;
    }

    public boolean y() {
        return this.f50354v;
    }

    public String z(String str) {
        StringBuilder sb2 = new StringBuilder();
        sb2.append(str);
        sb2.append(j());
        sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
        e t10 = this.f50334b.t(k());
        if (t10 != null) {
            sb2.append("\t\tParents: ");
            sb2.append(t10.j());
            e t11 = this.f50334b.t(t10.k());
            while (t11 != null) {
                sb2.append("->");
                sb2.append(t11.j());
                t11 = this.f50334b.t(t11.k());
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
        if (!this.f50333a.isEmpty()) {
            sb2.append(str);
            sb2.append("\tShapes:\n");
            for (Object obj : this.f50333a) {
                sb2.append(str);
                sb2.append("\t\t");
                sb2.append(obj);
                sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
            }
        }
        return sb2.toString();
    }
}
