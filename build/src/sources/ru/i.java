package ru;

import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import qu.c0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final c0 f49616a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f49617b;

    /* renamed from: c  reason: collision with root package name */
    private final String f49618c;

    /* renamed from: d  reason: collision with root package name */
    private final long f49619d;

    /* renamed from: e  reason: collision with root package name */
    private final long f49620e;

    /* renamed from: f  reason: collision with root package name */
    private final long f49621f;

    /* renamed from: g  reason: collision with root package name */
    private final int f49622g;

    /* renamed from: h  reason: collision with root package name */
    private final long f49623h;

    /* renamed from: i  reason: collision with root package name */
    private final int f49624i;

    /* renamed from: j  reason: collision with root package name */
    private final int f49625j;

    /* renamed from: k  reason: collision with root package name */
    private final Long f49626k;

    /* renamed from: l  reason: collision with root package name */
    private final Long f49627l;

    /* renamed from: m  reason: collision with root package name */
    private final Long f49628m;

    /* renamed from: n  reason: collision with root package name */
    private final Integer f49629n;

    /* renamed from: o  reason: collision with root package name */
    private final Integer f49630o;

    /* renamed from: p  reason: collision with root package name */
    private final Integer f49631p;

    /* renamed from: q  reason: collision with root package name */
    private final List f49632q;

    public i(c0 canonicalPath, boolean z10, String comment, long j10, long j11, long j12, int i10, long j13, int i11, int i12, Long l10, Long l11, Long l12, Integer num, Integer num2, Integer num3) {
        Intrinsics.checkNotNullParameter(canonicalPath, "canonicalPath");
        Intrinsics.checkNotNullParameter(comment, "comment");
        this.f49616a = canonicalPath;
        this.f49617b = z10;
        this.f49618c = comment;
        this.f49619d = j10;
        this.f49620e = j11;
        this.f49621f = j12;
        this.f49622g = i10;
        this.f49623h = j13;
        this.f49624i = i11;
        this.f49625j = i12;
        this.f49626k = l10;
        this.f49627l = l11;
        this.f49628m = l12;
        this.f49629n = num;
        this.f49630o = num2;
        this.f49631p = num3;
        this.f49632q = new ArrayList();
    }

    public final i a(Integer num, Integer num2, Integer num3) {
        return new i(this.f49616a, this.f49617b, this.f49618c, this.f49619d, this.f49620e, this.f49621f, this.f49622g, this.f49623h, this.f49624i, this.f49625j, this.f49626k, this.f49627l, this.f49628m, num, num2, num3);
    }

    public final c0 b() {
        return this.f49616a;
    }

    public final List c() {
        return this.f49632q;
    }

    public final long d() {
        return this.f49620e;
    }

    public final int e() {
        return this.f49622g;
    }

    public final Long f() {
        Long l10 = this.f49628m;
        if (l10 != null) {
            return Long.valueOf(j.d(l10.longValue()));
        }
        Integer num = this.f49631p;
        if (num != null) {
            return Long.valueOf(num.intValue() * 1000);
        }
        return null;
    }

    public final Long g() {
        Long l10 = this.f49627l;
        if (l10 != null) {
            return Long.valueOf(j.d(l10.longValue()));
        }
        Integer num = this.f49630o;
        if (num != null) {
            return Long.valueOf(num.intValue() * 1000);
        }
        return null;
    }

    public final Long h() {
        Long l10 = this.f49626k;
        if (l10 != null) {
            return Long.valueOf(j.d(l10.longValue()));
        }
        Integer num = this.f49629n;
        if (num != null) {
            return Long.valueOf(num.intValue() * 1000);
        }
        int i10 = this.f49625j;
        if (i10 != -1) {
            return j.c(this.f49624i, i10);
        }
        return null;
    }

    public final long i() {
        return this.f49623h;
    }

    public final long j() {
        return this.f49621f;
    }

    public final boolean k() {
        return this.f49617b;
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public /* synthetic */ i(qu.c0 r18, boolean r19, java.lang.String r20, long r21, long r23, long r25, int r27, long r28, int r30, int r31, java.lang.Long r32, java.lang.Long r33, java.lang.Long r34, java.lang.Integer r35, java.lang.Integer r36, java.lang.Integer r37, int r38, kotlin.jvm.internal.DefaultConstructorMarker r39) {
        /*
            Method dump skipped, instructions count: 177
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: ru.i.<init>(qu.c0, boolean, java.lang.String, long, long, long, int, long, int, int, java.lang.Long, java.lang.Long, java.lang.Long, java.lang.Integer, java.lang.Integer, java.lang.Integer, int, kotlin.jvm.internal.DefaultConstructorMarker):void");
    }
}
