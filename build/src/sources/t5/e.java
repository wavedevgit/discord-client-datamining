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
    private final List f50357a;

    /* renamed from: b  reason: collision with root package name */
    private final l5.i f50358b;

    /* renamed from: c  reason: collision with root package name */
    private final String f50359c;

    /* renamed from: d  reason: collision with root package name */
    private final long f50360d;

    /* renamed from: e  reason: collision with root package name */
    private final a f50361e;

    /* renamed from: f  reason: collision with root package name */
    private final long f50362f;

    /* renamed from: g  reason: collision with root package name */
    private final String f50363g;

    /* renamed from: h  reason: collision with root package name */
    private final List f50364h;

    /* renamed from: i  reason: collision with root package name */
    private final l f50365i;

    /* renamed from: j  reason: collision with root package name */
    private final int f50366j;

    /* renamed from: k  reason: collision with root package name */
    private final int f50367k;

    /* renamed from: l  reason: collision with root package name */
    private final int f50368l;

    /* renamed from: m  reason: collision with root package name */
    private final float f50369m;

    /* renamed from: n  reason: collision with root package name */
    private final float f50370n;

    /* renamed from: o  reason: collision with root package name */
    private final float f50371o;

    /* renamed from: p  reason: collision with root package name */
    private final float f50372p;

    /* renamed from: q  reason: collision with root package name */
    private final j f50373q;

    /* renamed from: r  reason: collision with root package name */
    private final k f50374r;

    /* renamed from: s  reason: collision with root package name */
    private final r5.b f50375s;

    /* renamed from: t  reason: collision with root package name */
    private final List f50376t;

    /* renamed from: u  reason: collision with root package name */
    private final b f50377u;

    /* renamed from: v  reason: collision with root package name */
    private final boolean f50378v;

    /* renamed from: w  reason: collision with root package name */
    private final s5.a f50379w;

    /* renamed from: x  reason: collision with root package name */
    private final v5.j f50380x;

    /* renamed from: y  reason: collision with root package name */
    private final s5.h f50381y;

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
        this.f50357a = list;
        this.f50358b = iVar;
        this.f50359c = str;
        this.f50360d = j10;
        this.f50361e = aVar;
        this.f50362f = j11;
        this.f50363g = str2;
        this.f50364h = list2;
        this.f50365i = lVar;
        this.f50366j = i10;
        this.f50367k = i11;
        this.f50368l = i12;
        this.f50369m = f10;
        this.f50370n = f11;
        this.f50371o = f12;
        this.f50372p = f13;
        this.f50373q = jVar;
        this.f50374r = kVar;
        this.f50376t = list3;
        this.f50377u = bVar;
        this.f50375s = bVar2;
        this.f50378v = z10;
        this.f50379w = aVar2;
        this.f50380x = jVar2;
        this.f50381y = hVar;
    }

    public s5.h a() {
        return this.f50381y;
    }

    public s5.a b() {
        return this.f50379w;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public l5.i c() {
        return this.f50358b;
    }

    public v5.j d() {
        return this.f50380x;
    }

    public long e() {
        return this.f50360d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List f() {
        return this.f50376t;
    }

    public a g() {
        return this.f50361e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List h() {
        return this.f50364h;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b i() {
        return this.f50377u;
    }

    public String j() {
        return this.f50359c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public long k() {
        return this.f50362f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float l() {
        return this.f50372p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float m() {
        return this.f50371o;
    }

    public String n() {
        return this.f50363g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List o() {
        return this.f50357a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int p() {
        return this.f50368l;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int q() {
        return this.f50367k;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int r() {
        return this.f50366j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float s() {
        return this.f50370n / this.f50358b.e();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public j t() {
        return this.f50373q;
    }

    public String toString() {
        return z("");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public k u() {
        return this.f50374r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public r5.b v() {
        return this.f50375s;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float w() {
        return this.f50369m;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public l x() {
        return this.f50365i;
    }

    public boolean y() {
        return this.f50378v;
    }

    public String z(String str) {
        StringBuilder sb2 = new StringBuilder();
        sb2.append(str);
        sb2.append(j());
        sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
        e t10 = this.f50358b.t(k());
        if (t10 != null) {
            sb2.append("\t\tParents: ");
            sb2.append(t10.j());
            e t11 = this.f50358b.t(t10.k());
            while (t11 != null) {
                sb2.append("->");
                sb2.append(t11.j());
                t11 = this.f50358b.t(t11.k());
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
        if (!this.f50357a.isEmpty()) {
            sb2.append(str);
            sb2.append("\tShapes:\n");
            for (Object obj : this.f50357a) {
                sb2.append(str);
                sb2.append("\t\t");
                sb2.append(obj);
                sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
            }
        }
        return sb2.toString();
    }
}
