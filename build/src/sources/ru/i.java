package ru;

import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import qu.c0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final c0 f49568a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f49569b;

    /* renamed from: c  reason: collision with root package name */
    private final String f49570c;

    /* renamed from: d  reason: collision with root package name */
    private final long f49571d;

    /* renamed from: e  reason: collision with root package name */
    private final long f49572e;

    /* renamed from: f  reason: collision with root package name */
    private final long f49573f;

    /* renamed from: g  reason: collision with root package name */
    private final int f49574g;

    /* renamed from: h  reason: collision with root package name */
    private final long f49575h;

    /* renamed from: i  reason: collision with root package name */
    private final int f49576i;

    /* renamed from: j  reason: collision with root package name */
    private final int f49577j;

    /* renamed from: k  reason: collision with root package name */
    private final Long f49578k;

    /* renamed from: l  reason: collision with root package name */
    private final Long f49579l;

    /* renamed from: m  reason: collision with root package name */
    private final Long f49580m;

    /* renamed from: n  reason: collision with root package name */
    private final Integer f49581n;

    /* renamed from: o  reason: collision with root package name */
    private final Integer f49582o;

    /* renamed from: p  reason: collision with root package name */
    private final Integer f49583p;

    /* renamed from: q  reason: collision with root package name */
    private final List f49584q;

    public i(c0 canonicalPath, boolean z10, String comment, long j10, long j11, long j12, int i10, long j13, int i11, int i12, Long l10, Long l11, Long l12, Integer num, Integer num2, Integer num3) {
        Intrinsics.checkNotNullParameter(canonicalPath, "canonicalPath");
        Intrinsics.checkNotNullParameter(comment, "comment");
        this.f49568a = canonicalPath;
        this.f49569b = z10;
        this.f49570c = comment;
        this.f49571d = j10;
        this.f49572e = j11;
        this.f49573f = j12;
        this.f49574g = i10;
        this.f49575h = j13;
        this.f49576i = i11;
        this.f49577j = i12;
        this.f49578k = l10;
        this.f49579l = l11;
        this.f49580m = l12;
        this.f49581n = num;
        this.f49582o = num2;
        this.f49583p = num3;
        this.f49584q = new ArrayList();
    }

    public final i a(Integer num, Integer num2, Integer num3) {
        return new i(this.f49568a, this.f49569b, this.f49570c, this.f49571d, this.f49572e, this.f49573f, this.f49574g, this.f49575h, this.f49576i, this.f49577j, this.f49578k, this.f49579l, this.f49580m, num, num2, num3);
    }

    public final c0 b() {
        return this.f49568a;
    }

    public final List c() {
        return this.f49584q;
    }

    public final long d() {
        return this.f49572e;
    }

    public final int e() {
        return this.f49574g;
    }

    public final Long f() {
        Long l10 = this.f49580m;
        if (l10 != null) {
            return Long.valueOf(j.d(l10.longValue()));
        }
        Integer num = this.f49583p;
        if (num != null) {
            return Long.valueOf(num.intValue() * 1000);
        }
        return null;
    }

    public final Long g() {
        Long l10 = this.f49579l;
        if (l10 != null) {
            return Long.valueOf(j.d(l10.longValue()));
        }
        Integer num = this.f49582o;
        if (num != null) {
            return Long.valueOf(num.intValue() * 1000);
        }
        return null;
    }

    public final Long h() {
        Long l10 = this.f49578k;
        if (l10 != null) {
            return Long.valueOf(j.d(l10.longValue()));
        }
        Integer num = this.f49581n;
        if (num != null) {
            return Long.valueOf(num.intValue() * 1000);
        }
        int i10 = this.f49577j;
        if (i10 != -1) {
            return j.c(this.f49576i, i10);
        }
        return null;
    }

    public final long i() {
        return this.f49575h;
    }

    public final long j() {
        return this.f49573f;
    }

    public final boolean k() {
        return this.f49569b;
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
