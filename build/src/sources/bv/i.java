package bv;

import av.c0;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final c0 f7870a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f7871b;

    /* renamed from: c  reason: collision with root package name */
    private final String f7872c;

    /* renamed from: d  reason: collision with root package name */
    private final long f7873d;

    /* renamed from: e  reason: collision with root package name */
    private final long f7874e;

    /* renamed from: f  reason: collision with root package name */
    private final long f7875f;

    /* renamed from: g  reason: collision with root package name */
    private final int f7876g;

    /* renamed from: h  reason: collision with root package name */
    private final long f7877h;

    /* renamed from: i  reason: collision with root package name */
    private final int f7878i;

    /* renamed from: j  reason: collision with root package name */
    private final int f7879j;

    /* renamed from: k  reason: collision with root package name */
    private final Long f7880k;

    /* renamed from: l  reason: collision with root package name */
    private final Long f7881l;

    /* renamed from: m  reason: collision with root package name */
    private final Long f7882m;

    /* renamed from: n  reason: collision with root package name */
    private final Integer f7883n;

    /* renamed from: o  reason: collision with root package name */
    private final Integer f7884o;

    /* renamed from: p  reason: collision with root package name */
    private final Integer f7885p;

    /* renamed from: q  reason: collision with root package name */
    private final List f7886q;

    public i(c0 canonicalPath, boolean z10, String comment, long j10, long j11, long j12, int i10, long j13, int i11, int i12, Long l10, Long l11, Long l12, Integer num, Integer num2, Integer num3) {
        Intrinsics.checkNotNullParameter(canonicalPath, "canonicalPath");
        Intrinsics.checkNotNullParameter(comment, "comment");
        this.f7870a = canonicalPath;
        this.f7871b = z10;
        this.f7872c = comment;
        this.f7873d = j10;
        this.f7874e = j11;
        this.f7875f = j12;
        this.f7876g = i10;
        this.f7877h = j13;
        this.f7878i = i11;
        this.f7879j = i12;
        this.f7880k = l10;
        this.f7881l = l11;
        this.f7882m = l12;
        this.f7883n = num;
        this.f7884o = num2;
        this.f7885p = num3;
        this.f7886q = new ArrayList();
    }

    public final i a(Integer num, Integer num2, Integer num3) {
        return new i(this.f7870a, this.f7871b, this.f7872c, this.f7873d, this.f7874e, this.f7875f, this.f7876g, this.f7877h, this.f7878i, this.f7879j, this.f7880k, this.f7881l, this.f7882m, num, num2, num3);
    }

    public final c0 b() {
        return this.f7870a;
    }

    public final List c() {
        return this.f7886q;
    }

    public final long d() {
        return this.f7874e;
    }

    public final int e() {
        return this.f7876g;
    }

    public final Long f() {
        Long l10 = this.f7882m;
        if (l10 != null) {
            return Long.valueOf(j.d(l10.longValue()));
        }
        Integer num = this.f7885p;
        if (num != null) {
            return Long.valueOf(num.intValue() * 1000);
        }
        return null;
    }

    public final Long g() {
        Long l10 = this.f7881l;
        if (l10 != null) {
            return Long.valueOf(j.d(l10.longValue()));
        }
        Integer num = this.f7884o;
        if (num != null) {
            return Long.valueOf(num.intValue() * 1000);
        }
        return null;
    }

    public final Long h() {
        Long l10 = this.f7880k;
        if (l10 != null) {
            return Long.valueOf(j.d(l10.longValue()));
        }
        Integer num = this.f7883n;
        if (num != null) {
            return Long.valueOf(num.intValue() * 1000);
        }
        int i10 = this.f7879j;
        if (i10 != -1) {
            return j.c(this.f7878i, i10);
        }
        return null;
    }

    public final long i() {
        return this.f7877h;
    }

    public final long j() {
        return this.f7875f;
    }

    public final boolean k() {
        return this.f7871b;
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public /* synthetic */ i(av.c0 r18, boolean r19, java.lang.String r20, long r21, long r23, long r25, int r27, long r28, int r30, int r31, java.lang.Long r32, java.lang.Long r33, java.lang.Long r34, java.lang.Integer r35, java.lang.Integer r36, java.lang.Integer r37, int r38, kotlin.jvm.internal.DefaultConstructorMarker r39) {
        /*
            Method dump skipped, instructions count: 177
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: bv.i.<init>(av.c0, boolean, java.lang.String, long, long, long, int, long, int, int, java.lang.Long, java.lang.Long, java.lang.Long, java.lang.Integer, java.lang.Integer, java.lang.Integer, int, kotlin.jvm.internal.DefaultConstructorMarker):void");
    }
}
