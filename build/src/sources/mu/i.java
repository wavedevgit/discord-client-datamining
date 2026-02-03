package mu;

import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import lu.c0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final c0 f39470a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f39471b;

    /* renamed from: c  reason: collision with root package name */
    private final String f39472c;

    /* renamed from: d  reason: collision with root package name */
    private final long f39473d;

    /* renamed from: e  reason: collision with root package name */
    private final long f39474e;

    /* renamed from: f  reason: collision with root package name */
    private final long f39475f;

    /* renamed from: g  reason: collision with root package name */
    private final int f39476g;

    /* renamed from: h  reason: collision with root package name */
    private final long f39477h;

    /* renamed from: i  reason: collision with root package name */
    private final int f39478i;

    /* renamed from: j  reason: collision with root package name */
    private final int f39479j;

    /* renamed from: k  reason: collision with root package name */
    private final Long f39480k;

    /* renamed from: l  reason: collision with root package name */
    private final Long f39481l;

    /* renamed from: m  reason: collision with root package name */
    private final Long f39482m;

    /* renamed from: n  reason: collision with root package name */
    private final Integer f39483n;

    /* renamed from: o  reason: collision with root package name */
    private final Integer f39484o;

    /* renamed from: p  reason: collision with root package name */
    private final Integer f39485p;

    /* renamed from: q  reason: collision with root package name */
    private final List f39486q;

    public i(c0 canonicalPath, boolean z10, String comment, long j10, long j11, long j12, int i10, long j13, int i11, int i12, Long l10, Long l11, Long l12, Integer num, Integer num2, Integer num3) {
        Intrinsics.checkNotNullParameter(canonicalPath, "canonicalPath");
        Intrinsics.checkNotNullParameter(comment, "comment");
        this.f39470a = canonicalPath;
        this.f39471b = z10;
        this.f39472c = comment;
        this.f39473d = j10;
        this.f39474e = j11;
        this.f39475f = j12;
        this.f39476g = i10;
        this.f39477h = j13;
        this.f39478i = i11;
        this.f39479j = i12;
        this.f39480k = l10;
        this.f39481l = l11;
        this.f39482m = l12;
        this.f39483n = num;
        this.f39484o = num2;
        this.f39485p = num3;
        this.f39486q = new ArrayList();
    }

    public final i a(Integer num, Integer num2, Integer num3) {
        return new i(this.f39470a, this.f39471b, this.f39472c, this.f39473d, this.f39474e, this.f39475f, this.f39476g, this.f39477h, this.f39478i, this.f39479j, this.f39480k, this.f39481l, this.f39482m, num, num2, num3);
    }

    public final c0 b() {
        return this.f39470a;
    }

    public final List c() {
        return this.f39486q;
    }

    public final long d() {
        return this.f39474e;
    }

    public final int e() {
        return this.f39476g;
    }

    public final Long f() {
        Long l10 = this.f39482m;
        if (l10 != null) {
            return Long.valueOf(j.d(l10.longValue()));
        }
        Integer num = this.f39485p;
        if (num != null) {
            return Long.valueOf(num.intValue() * 1000);
        }
        return null;
    }

    public final Long g() {
        Long l10 = this.f39481l;
        if (l10 != null) {
            return Long.valueOf(j.d(l10.longValue()));
        }
        Integer num = this.f39484o;
        if (num != null) {
            return Long.valueOf(num.intValue() * 1000);
        }
        return null;
    }

    public final Long h() {
        Long l10 = this.f39480k;
        if (l10 != null) {
            return Long.valueOf(j.d(l10.longValue()));
        }
        Integer num = this.f39483n;
        if (num != null) {
            return Long.valueOf(num.intValue() * 1000);
        }
        int i10 = this.f39479j;
        if (i10 != -1) {
            return j.c(this.f39478i, i10);
        }
        return null;
    }

    public final long i() {
        return this.f39477h;
    }

    public final long j() {
        return this.f39475f;
    }

    public final boolean k() {
        return this.f39471b;
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public /* synthetic */ i(lu.c0 r18, boolean r19, java.lang.String r20, long r21, long r23, long r25, int r27, long r28, int r30, int r31, java.lang.Long r32, java.lang.Long r33, java.lang.Long r34, java.lang.Integer r35, java.lang.Integer r36, java.lang.Integer r37, int r38, kotlin.jvm.internal.DefaultConstructorMarker r39) {
        /*
            Method dump skipped, instructions count: 177
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: mu.i.<init>(lu.c0, boolean, java.lang.String, long, long, long, int, long, int, int, java.lang.Long, java.lang.Long, java.lang.Long, java.lang.Integer, java.lang.Integer, java.lang.Integer, int, kotlin.jvm.internal.DefaultConstructorMarker):void");
    }
}
