package su;

import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import ru.c0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final c0 f50441a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f50442b;

    /* renamed from: c  reason: collision with root package name */
    private final String f50443c;

    /* renamed from: d  reason: collision with root package name */
    private final long f50444d;

    /* renamed from: e  reason: collision with root package name */
    private final long f50445e;

    /* renamed from: f  reason: collision with root package name */
    private final long f50446f;

    /* renamed from: g  reason: collision with root package name */
    private final int f50447g;

    /* renamed from: h  reason: collision with root package name */
    private final long f50448h;

    /* renamed from: i  reason: collision with root package name */
    private final int f50449i;

    /* renamed from: j  reason: collision with root package name */
    private final int f50450j;

    /* renamed from: k  reason: collision with root package name */
    private final Long f50451k;

    /* renamed from: l  reason: collision with root package name */
    private final Long f50452l;

    /* renamed from: m  reason: collision with root package name */
    private final Long f50453m;

    /* renamed from: n  reason: collision with root package name */
    private final Integer f50454n;

    /* renamed from: o  reason: collision with root package name */
    private final Integer f50455o;

    /* renamed from: p  reason: collision with root package name */
    private final Integer f50456p;

    /* renamed from: q  reason: collision with root package name */
    private final List f50457q;

    public i(c0 canonicalPath, boolean z10, String comment, long j10, long j11, long j12, int i10, long j13, int i11, int i12, Long l10, Long l11, Long l12, Integer num, Integer num2, Integer num3) {
        Intrinsics.checkNotNullParameter(canonicalPath, "canonicalPath");
        Intrinsics.checkNotNullParameter(comment, "comment");
        this.f50441a = canonicalPath;
        this.f50442b = z10;
        this.f50443c = comment;
        this.f50444d = j10;
        this.f50445e = j11;
        this.f50446f = j12;
        this.f50447g = i10;
        this.f50448h = j13;
        this.f50449i = i11;
        this.f50450j = i12;
        this.f50451k = l10;
        this.f50452l = l11;
        this.f50453m = l12;
        this.f50454n = num;
        this.f50455o = num2;
        this.f50456p = num3;
        this.f50457q = new ArrayList();
    }

    public final i a(Integer num, Integer num2, Integer num3) {
        return new i(this.f50441a, this.f50442b, this.f50443c, this.f50444d, this.f50445e, this.f50446f, this.f50447g, this.f50448h, this.f50449i, this.f50450j, this.f50451k, this.f50452l, this.f50453m, num, num2, num3);
    }

    public final c0 b() {
        return this.f50441a;
    }

    public final List c() {
        return this.f50457q;
    }

    public final long d() {
        return this.f50445e;
    }

    public final int e() {
        return this.f50447g;
    }

    public final Long f() {
        Long l10 = this.f50453m;
        if (l10 != null) {
            return Long.valueOf(j.d(l10.longValue()));
        }
        Integer num = this.f50456p;
        if (num != null) {
            return Long.valueOf(num.intValue() * 1000);
        }
        return null;
    }

    public final Long g() {
        Long l10 = this.f50452l;
        if (l10 != null) {
            return Long.valueOf(j.d(l10.longValue()));
        }
        Integer num = this.f50455o;
        if (num != null) {
            return Long.valueOf(num.intValue() * 1000);
        }
        return null;
    }

    public final Long h() {
        Long l10 = this.f50451k;
        if (l10 != null) {
            return Long.valueOf(j.d(l10.longValue()));
        }
        Integer num = this.f50454n;
        if (num != null) {
            return Long.valueOf(num.intValue() * 1000);
        }
        int i10 = this.f50450j;
        if (i10 != -1) {
            return j.c(this.f50449i, i10);
        }
        return null;
    }

    public final long i() {
        return this.f50448h;
    }

    public final long j() {
        return this.f50446f;
    }

    public final boolean k() {
        return this.f50442b;
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public /* synthetic */ i(ru.c0 r18, boolean r19, java.lang.String r20, long r21, long r23, long r25, int r27, long r28, int r30, int r31, java.lang.Long r32, java.lang.Long r33, java.lang.Long r34, java.lang.Integer r35, java.lang.Integer r36, java.lang.Integer r37, int r38, kotlin.jvm.internal.DefaultConstructorMarker r39) {
        /*
            Method dump skipped, instructions count: 177
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: su.i.<init>(ru.c0, boolean, java.lang.String, long, long, long, int, long, int, int, java.lang.Long, java.lang.Long, java.lang.Long, java.lang.Integer, java.lang.Integer, java.lang.Integer, int, kotlin.jvm.internal.DefaultConstructorMarker):void");
    }
}
