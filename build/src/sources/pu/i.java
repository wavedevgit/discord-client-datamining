package pu;

import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import ou.c0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final c0 f46667a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f46668b;

    /* renamed from: c  reason: collision with root package name */
    private final String f46669c;

    /* renamed from: d  reason: collision with root package name */
    private final long f46670d;

    /* renamed from: e  reason: collision with root package name */
    private final long f46671e;

    /* renamed from: f  reason: collision with root package name */
    private final long f46672f;

    /* renamed from: g  reason: collision with root package name */
    private final int f46673g;

    /* renamed from: h  reason: collision with root package name */
    private final long f46674h;

    /* renamed from: i  reason: collision with root package name */
    private final int f46675i;

    /* renamed from: j  reason: collision with root package name */
    private final int f46676j;

    /* renamed from: k  reason: collision with root package name */
    private final Long f46677k;

    /* renamed from: l  reason: collision with root package name */
    private final Long f46678l;

    /* renamed from: m  reason: collision with root package name */
    private final Long f46679m;

    /* renamed from: n  reason: collision with root package name */
    private final Integer f46680n;

    /* renamed from: o  reason: collision with root package name */
    private final Integer f46681o;

    /* renamed from: p  reason: collision with root package name */
    private final Integer f46682p;

    /* renamed from: q  reason: collision with root package name */
    private final List f46683q;

    public i(c0 canonicalPath, boolean z10, String comment, long j10, long j11, long j12, int i10, long j13, int i11, int i12, Long l10, Long l11, Long l12, Integer num, Integer num2, Integer num3) {
        Intrinsics.checkNotNullParameter(canonicalPath, "canonicalPath");
        Intrinsics.checkNotNullParameter(comment, "comment");
        this.f46667a = canonicalPath;
        this.f46668b = z10;
        this.f46669c = comment;
        this.f46670d = j10;
        this.f46671e = j11;
        this.f46672f = j12;
        this.f46673g = i10;
        this.f46674h = j13;
        this.f46675i = i11;
        this.f46676j = i12;
        this.f46677k = l10;
        this.f46678l = l11;
        this.f46679m = l12;
        this.f46680n = num;
        this.f46681o = num2;
        this.f46682p = num3;
        this.f46683q = new ArrayList();
    }

    public final i a(Integer num, Integer num2, Integer num3) {
        return new i(this.f46667a, this.f46668b, this.f46669c, this.f46670d, this.f46671e, this.f46672f, this.f46673g, this.f46674h, this.f46675i, this.f46676j, this.f46677k, this.f46678l, this.f46679m, num, num2, num3);
    }

    public final c0 b() {
        return this.f46667a;
    }

    public final List c() {
        return this.f46683q;
    }

    public final long d() {
        return this.f46671e;
    }

    public final int e() {
        return this.f46673g;
    }

    public final Long f() {
        Long l10 = this.f46679m;
        if (l10 != null) {
            return Long.valueOf(j.d(l10.longValue()));
        }
        Integer num = this.f46682p;
        if (num != null) {
            return Long.valueOf(num.intValue() * 1000);
        }
        return null;
    }

    public final Long g() {
        Long l10 = this.f46678l;
        if (l10 != null) {
            return Long.valueOf(j.d(l10.longValue()));
        }
        Integer num = this.f46681o;
        if (num != null) {
            return Long.valueOf(num.intValue() * 1000);
        }
        return null;
    }

    public final Long h() {
        Long l10 = this.f46677k;
        if (l10 != null) {
            return Long.valueOf(j.d(l10.longValue()));
        }
        Integer num = this.f46680n;
        if (num != null) {
            return Long.valueOf(num.intValue() * 1000);
        }
        int i10 = this.f46676j;
        if (i10 != -1) {
            return j.c(this.f46675i, i10);
        }
        return null;
    }

    public final long i() {
        return this.f46674h;
    }

    public final long j() {
        return this.f46672f;
    }

    public final boolean k() {
        return this.f46668b;
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public /* synthetic */ i(ou.c0 r18, boolean r19, java.lang.String r20, long r21, long r23, long r25, int r27, long r28, int r30, int r31, java.lang.Long r32, java.lang.Long r33, java.lang.Long r34, java.lang.Integer r35, java.lang.Integer r36, java.lang.Integer r37, int r38, kotlin.jvm.internal.DefaultConstructorMarker r39) {
        /*
            Method dump skipped, instructions count: 177
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: pu.i.<init>(ou.c0, boolean, java.lang.String, long, long, long, int, long, int, int, java.lang.Long, java.lang.Long, java.lang.Long, java.lang.Integer, java.lang.Integer, java.lang.Integer, int, kotlin.jvm.internal.DefaultConstructorMarker):void");
    }
}
