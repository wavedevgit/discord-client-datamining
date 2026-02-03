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
    private final List f49544a;

    /* renamed from: b  reason: collision with root package name */
    private final l5.i f49545b;

    /* renamed from: c  reason: collision with root package name */
    private final String f49546c;

    /* renamed from: d  reason: collision with root package name */
    private final long f49547d;

    /* renamed from: e  reason: collision with root package name */
    private final a f49548e;

    /* renamed from: f  reason: collision with root package name */
    private final long f49549f;

    /* renamed from: g  reason: collision with root package name */
    private final String f49550g;

    /* renamed from: h  reason: collision with root package name */
    private final List f49551h;

    /* renamed from: i  reason: collision with root package name */
    private final l f49552i;

    /* renamed from: j  reason: collision with root package name */
    private final int f49553j;

    /* renamed from: k  reason: collision with root package name */
    private final int f49554k;

    /* renamed from: l  reason: collision with root package name */
    private final int f49555l;

    /* renamed from: m  reason: collision with root package name */
    private final float f49556m;

    /* renamed from: n  reason: collision with root package name */
    private final float f49557n;

    /* renamed from: o  reason: collision with root package name */
    private final float f49558o;

    /* renamed from: p  reason: collision with root package name */
    private final float f49559p;

    /* renamed from: q  reason: collision with root package name */
    private final j f49560q;

    /* renamed from: r  reason: collision with root package name */
    private final k f49561r;

    /* renamed from: s  reason: collision with root package name */
    private final r5.b f49562s;

    /* renamed from: t  reason: collision with root package name */
    private final List f49563t;

    /* renamed from: u  reason: collision with root package name */
    private final b f49564u;

    /* renamed from: v  reason: collision with root package name */
    private final boolean f49565v;

    /* renamed from: w  reason: collision with root package name */
    private final s5.a f49566w;

    /* renamed from: x  reason: collision with root package name */
    private final v5.j f49567x;

    /* renamed from: y  reason: collision with root package name */
    private final s5.h f49568y;

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
        this.f49544a = list;
        this.f49545b = iVar;
        this.f49546c = str;
        this.f49547d = j10;
        this.f49548e = aVar;
        this.f49549f = j11;
        this.f49550g = str2;
        this.f49551h = list2;
        this.f49552i = lVar;
        this.f49553j = i10;
        this.f49554k = i11;
        this.f49555l = i12;
        this.f49556m = f10;
        this.f49557n = f11;
        this.f49558o = f12;
        this.f49559p = f13;
        this.f49560q = jVar;
        this.f49561r = kVar;
        this.f49563t = list3;
        this.f49564u = bVar;
        this.f49562s = bVar2;
        this.f49565v = z10;
        this.f49566w = aVar2;
        this.f49567x = jVar2;
        this.f49568y = hVar;
    }

    public s5.h a() {
        return this.f49568y;
    }

    public s5.a b() {
        return this.f49566w;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public l5.i c() {
        return this.f49545b;
    }

    public v5.j d() {
        return this.f49567x;
    }

    public long e() {
        return this.f49547d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List f() {
        return this.f49563t;
    }

    public a g() {
        return this.f49548e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List h() {
        return this.f49551h;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b i() {
        return this.f49564u;
    }

    public String j() {
        return this.f49546c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public long k() {
        return this.f49549f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float l() {
        return this.f49559p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float m() {
        return this.f49558o;
    }

    public String n() {
        return this.f49550g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List o() {
        return this.f49544a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int p() {
        return this.f49555l;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int q() {
        return this.f49554k;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int r() {
        return this.f49553j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float s() {
        return this.f49557n / this.f49545b.e();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public j t() {
        return this.f49560q;
    }

    public String toString() {
        return z("");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public k u() {
        return this.f49561r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public r5.b v() {
        return this.f49562s;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float w() {
        return this.f49556m;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public l x() {
        return this.f49552i;
    }

    public boolean y() {
        return this.f49565v;
    }

    public String z(String str) {
        StringBuilder sb2 = new StringBuilder();
        sb2.append(str);
        sb2.append(j());
        sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
        e t10 = this.f49545b.t(k());
        if (t10 != null) {
            sb2.append("\t\tParents: ");
            sb2.append(t10.j());
            e t11 = this.f49545b.t(t10.k());
            while (t11 != null) {
                sb2.append("->");
                sb2.append(t11.j());
                t11 = this.f49545b.t(t11.k());
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
        if (!this.f49544a.isEmpty()) {
            sb2.append(str);
            sb2.append("\tShapes:\n");
            for (Object obj : this.f49544a) {
                sb2.append(str);
                sb2.append("\t\t");
                sb2.append(obj);
                sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
            }
        }
        return sb2.toString();
    }
}
