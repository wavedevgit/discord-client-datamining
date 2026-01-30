package ju;

import iu.c0;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final c0 f32824a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f32825b;

    /* renamed from: c  reason: collision with root package name */
    private final String f32826c;

    /* renamed from: d  reason: collision with root package name */
    private final long f32827d;

    /* renamed from: e  reason: collision with root package name */
    private final long f32828e;

    /* renamed from: f  reason: collision with root package name */
    private final long f32829f;

    /* renamed from: g  reason: collision with root package name */
    private final int f32830g;

    /* renamed from: h  reason: collision with root package name */
    private final long f32831h;

    /* renamed from: i  reason: collision with root package name */
    private final int f32832i;

    /* renamed from: j  reason: collision with root package name */
    private final int f32833j;

    /* renamed from: k  reason: collision with root package name */
    private final Long f32834k;

    /* renamed from: l  reason: collision with root package name */
    private final Long f32835l;

    /* renamed from: m  reason: collision with root package name */
    private final Long f32836m;

    /* renamed from: n  reason: collision with root package name */
    private final Integer f32837n;

    /* renamed from: o  reason: collision with root package name */
    private final Integer f32838o;

    /* renamed from: p  reason: collision with root package name */
    private final Integer f32839p;

    /* renamed from: q  reason: collision with root package name */
    private final List f32840q;

    public i(c0 canonicalPath, boolean z10, String comment, long j10, long j11, long j12, int i10, long j13, int i11, int i12, Long l10, Long l11, Long l12, Integer num, Integer num2, Integer num3) {
        Intrinsics.checkNotNullParameter(canonicalPath, "canonicalPath");
        Intrinsics.checkNotNullParameter(comment, "comment");
        this.f32824a = canonicalPath;
        this.f32825b = z10;
        this.f32826c = comment;
        this.f32827d = j10;
        this.f32828e = j11;
        this.f32829f = j12;
        this.f32830g = i10;
        this.f32831h = j13;
        this.f32832i = i11;
        this.f32833j = i12;
        this.f32834k = l10;
        this.f32835l = l11;
        this.f32836m = l12;
        this.f32837n = num;
        this.f32838o = num2;
        this.f32839p = num3;
        this.f32840q = new ArrayList();
    }

    public final i a(Integer num, Integer num2, Integer num3) {
        return new i(this.f32824a, this.f32825b, this.f32826c, this.f32827d, this.f32828e, this.f32829f, this.f32830g, this.f32831h, this.f32832i, this.f32833j, this.f32834k, this.f32835l, this.f32836m, num, num2, num3);
    }

    public final c0 b() {
        return this.f32824a;
    }

    public final List c() {
        return this.f32840q;
    }

    public final long d() {
        return this.f32828e;
    }

    public final int e() {
        return this.f32830g;
    }

    public final Long f() {
        Long l10 = this.f32836m;
        if (l10 != null) {
            return Long.valueOf(j.d(l10.longValue()));
        }
        Integer num = this.f32839p;
        if (num != null) {
            return Long.valueOf(num.intValue() * 1000);
        }
        return null;
    }

    public final Long g() {
        Long l10 = this.f32835l;
        if (l10 != null) {
            return Long.valueOf(j.d(l10.longValue()));
        }
        Integer num = this.f32838o;
        if (num != null) {
            return Long.valueOf(num.intValue() * 1000);
        }
        return null;
    }

    public final Long h() {
        Long l10 = this.f32834k;
        if (l10 != null) {
            return Long.valueOf(j.d(l10.longValue()));
        }
        Integer num = this.f32837n;
        if (num != null) {
            return Long.valueOf(num.intValue() * 1000);
        }
        int i10 = this.f32833j;
        if (i10 != -1) {
            return j.c(this.f32832i, i10);
        }
        return null;
    }

    public final long i() {
        return this.f32831h;
    }

    public final long j() {
        return this.f32829f;
    }

    public final boolean k() {
        return this.f32825b;
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
