package ju;

import iu.c0;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final c0 f32808a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f32809b;

    /* renamed from: c  reason: collision with root package name */
    private final String f32810c;

    /* renamed from: d  reason: collision with root package name */
    private final long f32811d;

    /* renamed from: e  reason: collision with root package name */
    private final long f32812e;

    /* renamed from: f  reason: collision with root package name */
    private final long f32813f;

    /* renamed from: g  reason: collision with root package name */
    private final int f32814g;

    /* renamed from: h  reason: collision with root package name */
    private final long f32815h;

    /* renamed from: i  reason: collision with root package name */
    private final int f32816i;

    /* renamed from: j  reason: collision with root package name */
    private final int f32817j;

    /* renamed from: k  reason: collision with root package name */
    private final Long f32818k;

    /* renamed from: l  reason: collision with root package name */
    private final Long f32819l;

    /* renamed from: m  reason: collision with root package name */
    private final Long f32820m;

    /* renamed from: n  reason: collision with root package name */
    private final Integer f32821n;

    /* renamed from: o  reason: collision with root package name */
    private final Integer f32822o;

    /* renamed from: p  reason: collision with root package name */
    private final Integer f32823p;

    /* renamed from: q  reason: collision with root package name */
    private final List f32824q;

    public i(c0 canonicalPath, boolean z10, String comment, long j10, long j11, long j12, int i10, long j13, int i11, int i12, Long l10, Long l11, Long l12, Integer num, Integer num2, Integer num3) {
        Intrinsics.checkNotNullParameter(canonicalPath, "canonicalPath");
        Intrinsics.checkNotNullParameter(comment, "comment");
        this.f32808a = canonicalPath;
        this.f32809b = z10;
        this.f32810c = comment;
        this.f32811d = j10;
        this.f32812e = j11;
        this.f32813f = j12;
        this.f32814g = i10;
        this.f32815h = j13;
        this.f32816i = i11;
        this.f32817j = i12;
        this.f32818k = l10;
        this.f32819l = l11;
        this.f32820m = l12;
        this.f32821n = num;
        this.f32822o = num2;
        this.f32823p = num3;
        this.f32824q = new ArrayList();
    }

    public final i a(Integer num, Integer num2, Integer num3) {
        return new i(this.f32808a, this.f32809b, this.f32810c, this.f32811d, this.f32812e, this.f32813f, this.f32814g, this.f32815h, this.f32816i, this.f32817j, this.f32818k, this.f32819l, this.f32820m, num, num2, num3);
    }

    public final c0 b() {
        return this.f32808a;
    }

    public final List c() {
        return this.f32824q;
    }

    public final long d() {
        return this.f32812e;
    }

    public final int e() {
        return this.f32814g;
    }

    public final Long f() {
        Long l10 = this.f32820m;
        if (l10 != null) {
            return Long.valueOf(j.d(l10.longValue()));
        }
        Integer num = this.f32823p;
        if (num != null) {
            return Long.valueOf(num.intValue() * 1000);
        }
        return null;
    }

    public final Long g() {
        Long l10 = this.f32819l;
        if (l10 != null) {
            return Long.valueOf(j.d(l10.longValue()));
        }
        Integer num = this.f32822o;
        if (num != null) {
            return Long.valueOf(num.intValue() * 1000);
        }
        return null;
    }

    public final Long h() {
        Long l10 = this.f32818k;
        if (l10 != null) {
            return Long.valueOf(j.d(l10.longValue()));
        }
        Integer num = this.f32821n;
        if (num != null) {
            return Long.valueOf(num.intValue() * 1000);
        }
        int i10 = this.f32817j;
        if (i10 != -1) {
            return j.c(this.f32816i, i10);
        }
        return null;
    }

    public final long i() {
        return this.f32815h;
    }

    public final long j() {
        return this.f32813f;
    }

    public final boolean k() {
        return this.f32809b;
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public /* synthetic */ i(iu.c0 r18, boolean r19, java.lang.String r20, long r21, long r23, long r25, int r27, long r28, int r30, int r31, java.lang.Long r32, java.lang.Long r33, java.lang.Long r34, java.lang.Integer r35, java.lang.Integer r36, java.lang.Integer r37, int r38, kotlin.jvm.internal.DefaultConstructorMarker r39) {
        /*
            Method dump skipped, instructions count: 177
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: ju.i.<init>(iu.c0, boolean, java.lang.String, long, long, long, int, long, int, int, java.lang.Long, java.lang.Long, java.lang.Long, java.lang.Integer, java.lang.Integer, java.lang.Integer, int, kotlin.jvm.internal.DefaultConstructorMarker):void");
    }
}
