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
    private final List f50465a;

    /* renamed from: b  reason: collision with root package name */
    private final l5.i f50466b;

    /* renamed from: c  reason: collision with root package name */
    private final String f50467c;

    /* renamed from: d  reason: collision with root package name */
    private final long f50468d;

    /* renamed from: e  reason: collision with root package name */
    private final a f50469e;

    /* renamed from: f  reason: collision with root package name */
    private final long f50470f;

    /* renamed from: g  reason: collision with root package name */
    private final String f50471g;

    /* renamed from: h  reason: collision with root package name */
    private final List f50472h;

    /* renamed from: i  reason: collision with root package name */
    private final n f50473i;

    /* renamed from: j  reason: collision with root package name */
    private final int f50474j;

    /* renamed from: k  reason: collision with root package name */
    private final int f50475k;

    /* renamed from: l  reason: collision with root package name */
    private final int f50476l;

    /* renamed from: m  reason: collision with root package name */
    private final float f50477m;

    /* renamed from: n  reason: collision with root package name */
    private final float f50478n;

    /* renamed from: o  reason: collision with root package name */
    private final float f50479o;

    /* renamed from: p  reason: collision with root package name */
    private final float f50480p;

    /* renamed from: q  reason: collision with root package name */
    private final j f50481q;

    /* renamed from: r  reason: collision with root package name */
    private final k f50482r;

    /* renamed from: s  reason: collision with root package name */
    private final s5.b f50483s;

    /* renamed from: t  reason: collision with root package name */
    private final List f50484t;

    /* renamed from: u  reason: collision with root package name */
    private final b f50485u;

    /* renamed from: v  reason: collision with root package name */
    private final boolean f50486v;

    /* renamed from: w  reason: collision with root package name */
    private final t5.a f50487w;

    /* renamed from: x  reason: collision with root package name */
    private final w5.j f50488x;

    /* renamed from: y  reason: collision with root package name */
    private final t5.h f50489y;

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
        this.f50465a = list;
        this.f50466b = iVar;
        this.f50467c = str;
        this.f50468d = j10;
        this.f50469e = aVar;
        this.f50470f = j11;
        this.f50471g = str2;
        this.f50472h = list2;
        this.f50473i = nVar;
        this.f50474j = i10;
        this.f50475k = i11;
        this.f50476l = i12;
        this.f50477m = f10;
        this.f50478n = f11;
        this.f50479o = f12;
        this.f50480p = f13;
        this.f50481q = jVar;
        this.f50482r = kVar;
        this.f50484t = list3;
        this.f50485u = bVar;
        this.f50483s = bVar2;
        this.f50486v = z10;
        this.f50487w = aVar2;
        this.f50488x = jVar2;
        this.f50489y = hVar;
    }

    public t5.h a() {
        return this.f50489y;
    }

    public t5.a b() {
        return this.f50487w;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public l5.i c() {
        return this.f50466b;
    }

    public w5.j d() {
        return this.f50488x;
    }

    public long e() {
        return this.f50468d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List f() {
        return this.f50484t;
    }

    public a g() {
        return this.f50469e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List h() {
        return this.f50472h;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b i() {
        return this.f50485u;
    }

    public String j() {
        return this.f50467c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public long k() {
        return this.f50470f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float l() {
        return this.f50480p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float m() {
        return this.f50479o;
    }

    public String n() {
        return this.f50471g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List o() {
        return this.f50465a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int p() {
        return this.f50476l;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int q() {
        return this.f50475k;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int r() {
        return this.f50474j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float s() {
        return this.f50478n / this.f50466b.e();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public j t() {
        return this.f50481q;
    }

    public String toString() {
        return z("");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public k u() {
        return this.f50482r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public s5.b v() {
        return this.f50483s;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float w() {
        return this.f50477m;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public n x() {
        return this.f50473i;
    }

    public boolean y() {
        return this.f50486v;
    }

    public String z(String str) {
        StringBuilder sb2 = new StringBuilder();
        sb2.append(str);
        sb2.append(j());
        sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
        e t10 = this.f50466b.t(k());
        if (t10 != null) {
            sb2.append("\t\tParents: ");
            sb2.append(t10.j());
            e t11 = this.f50466b.t(t10.k());
            while (t11 != null) {
                sb2.append("->");
                sb2.append(t11.j());
                t11 = this.f50466b.t(t11.k());
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
        if (!this.f50465a.isEmpty()) {
            sb2.append(str);
            sb2.append("\tShapes:\n");
            for (Object obj : this.f50465a) {
                sb2.append(str);
                sb2.append("\t\t");
                sb2.append(obj);
                sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
            }
        }
        return sb2.toString();
    }
}
