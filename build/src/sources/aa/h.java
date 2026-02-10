package aa;

import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class h {

    /* renamed from: a  reason: collision with root package name */
    private final k f486a;

    /* renamed from: b  reason: collision with root package name */
    private final List f487b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f488c;

    /* renamed from: d  reason: collision with root package name */
    private Long f489d;

    /* renamed from: e  reason: collision with root package name */
    private Long f490e;

    /* renamed from: f  reason: collision with root package name */
    private String f491f;

    /* renamed from: g  reason: collision with root package name */
    private String f492g;

    /* renamed from: h  reason: collision with root package name */
    private String[] f493h;

    /* renamed from: i  reason: collision with root package name */
    private String f494i;

    /* renamed from: j  reason: collision with root package name */
    private String f495j;

    /* renamed from: k  reason: collision with root package name */
    private String f496k;

    /* renamed from: l  reason: collision with root package name */
    private String f497l;

    /* renamed from: m  reason: collision with root package name */
    private Long f498m;

    /* renamed from: n  reason: collision with root package name */
    private String f499n;

    /* renamed from: o  reason: collision with root package name */
    private String f500o;

    /* renamed from: p  reason: collision with root package name */
    private String f501p;

    /* renamed from: q  reason: collision with root package name */
    private Integer f502q;

    /* renamed from: r  reason: collision with root package name */
    private Integer f503r;

    public h(k infra) {
        Intrinsics.checkNotNullParameter(infra, "infra");
        this.f486a = infra;
        this.f487b = new ArrayList();
    }

    public final String a() {
        return this.f491f;
    }

    public final String b() {
        return this.f495j;
    }

    public final String[] c() {
        return this.f493h;
    }

    public final String d() {
        return this.f494i;
    }

    public final Integer e() {
        return this.f503r;
    }

    public final Long f() {
        return this.f489d;
    }

    public final Integer g() {
        return this.f502q;
    }

    public final String h() {
        return this.f500o;
    }

    public final String i() {
        return this.f501p;
    }

    public final k j() {
        return this.f486a;
    }

    public final List k() {
        return this.f487b;
    }

    public final Long l() {
        return this.f498m;
    }

    public final boolean m() {
        return this.f488c;
    }

    public final Long n() {
        return this.f490e;
    }

    public final String o() {
        return this.f492g;
    }

    public final String p() {
        return this.f499n;
    }

    public final String q() {
        return this.f497l;
    }

    public final String r() {
        return this.f496k;
    }

    public final void s() {
        this.f487b.clear();
        this.f488c = false;
        this.f489d = null;
        this.f490e = null;
        this.f491f = null;
        this.f492g = null;
        this.f493h = null;
        this.f494i = null;
        this.f495j = null;
        this.f496k = null;
        this.f497l = null;
        this.f498m = null;
        this.f499n = null;
        this.f500o = null;
        this.f501p = null;
        this.f502q = null;
        this.f503r = null;
    }

    public final void t(Long l10) {
        this.f489d = l10;
    }

    public final void u(boolean z10) {
        this.f488c = z10;
    }

    public final void v(Long l10) {
        this.f490e = l10;
    }
}
