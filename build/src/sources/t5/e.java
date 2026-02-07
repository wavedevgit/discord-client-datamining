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
    private final List f50381a;

    /* renamed from: b  reason: collision with root package name */
    private final l5.i f50382b;

    /* renamed from: c  reason: collision with root package name */
    private final String f50383c;

    /* renamed from: d  reason: collision with root package name */
    private final long f50384d;

    /* renamed from: e  reason: collision with root package name */
    private final a f50385e;

    /* renamed from: f  reason: collision with root package name */
    private final long f50386f;

    /* renamed from: g  reason: collision with root package name */
    private final String f50387g;

    /* renamed from: h  reason: collision with root package name */
    private final List f50388h;

    /* renamed from: i  reason: collision with root package name */
    private final l f50389i;

    /* renamed from: j  reason: collision with root package name */
    private final int f50390j;

    /* renamed from: k  reason: collision with root package name */
    private final int f50391k;

    /* renamed from: l  reason: collision with root package name */
    private final int f50392l;

    /* renamed from: m  reason: collision with root package name */
    private final float f50393m;

    /* renamed from: n  reason: collision with root package name */
    private final float f50394n;

    /* renamed from: o  reason: collision with root package name */
    private final float f50395o;

    /* renamed from: p  reason: collision with root package name */
    private final float f50396p;

    /* renamed from: q  reason: collision with root package name */
    private final j f50397q;

    /* renamed from: r  reason: collision with root package name */
    private final k f50398r;

    /* renamed from: s  reason: collision with root package name */
    private final r5.b f50399s;

    /* renamed from: t  reason: collision with root package name */
    private final List f50400t;

    /* renamed from: u  reason: collision with root package name */
    private final b f50401u;

    /* renamed from: v  reason: collision with root package name */
    private final boolean f50402v;

    /* renamed from: w  reason: collision with root package name */
    private final s5.a f50403w;

    /* renamed from: x  reason: collision with root package name */
    private final v5.j f50404x;

    /* renamed from: y  reason: collision with root package name */
    private final s5.h f50405y;

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
        this.f50381a = list;
        this.f50382b = iVar;
        this.f50383c = str;
        this.f50384d = j10;
        this.f50385e = aVar;
        this.f50386f = j11;
        this.f50387g = str2;
        this.f50388h = list2;
        this.f50389i = lVar;
        this.f50390j = i10;
        this.f50391k = i11;
        this.f50392l = i12;
        this.f50393m = f10;
        this.f50394n = f11;
        this.f50395o = f12;
        this.f50396p = f13;
        this.f50397q = jVar;
        this.f50398r = kVar;
        this.f50400t = list3;
        this.f50401u = bVar;
        this.f50399s = bVar2;
        this.f50402v = z10;
        this.f50403w = aVar2;
        this.f50404x = jVar2;
        this.f50405y = hVar;
    }

    public s5.h a() {
        return this.f50405y;
    }

    public s5.a b() {
        return this.f50403w;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public l5.i c() {
        return this.f50382b;
    }

    public v5.j d() {
        return this.f50404x;
    }

    public long e() {
        return this.f50384d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List f() {
        return this.f50400t;
    }

    public a g() {
        return this.f50385e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List h() {
        return this.f50388h;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b i() {
        return this.f50401u;
    }

    public String j() {
        return this.f50383c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public long k() {
        return this.f50386f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float l() {
        return this.f50396p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float m() {
        return this.f50395o;
    }

    public String n() {
        return this.f50387g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List o() {
        return this.f50381a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int p() {
        return this.f50392l;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int q() {
        return this.f50391k;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int r() {
        return this.f50390j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float s() {
        return this.f50394n / this.f50382b.e();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public j t() {
        return this.f50397q;
    }

    public String toString() {
        return z("");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public k u() {
        return this.f50398r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public r5.b v() {
        return this.f50399s;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float w() {
        return this.f50393m;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public l x() {
        return this.f50389i;
    }

    public boolean y() {
        return this.f50402v;
    }

    public String z(String str) {
        StringBuilder sb2 = new StringBuilder();
        sb2.append(str);
        sb2.append(j());
        sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
        e t10 = this.f50382b.t(k());
        if (t10 != null) {
            sb2.append("\t\tParents: ");
            sb2.append(t10.j());
            e t11 = this.f50382b.t(t10.k());
            while (t11 != null) {
                sb2.append("->");
                sb2.append(t11.j());
                t11 = this.f50382b.t(t11.k());
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
        if (!this.f50381a.isEmpty()) {
            sb2.append(str);
            sb2.append("\tShapes:\n");
            for (Object obj : this.f50381a) {
                sb2.append(str);
                sb2.append("\t\t");
                sb2.append(obj);
                sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
            }
        }
        return sb2.toString();
    }
}
