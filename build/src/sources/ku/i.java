package ku;

import java.util.ArrayList;
import java.util.List;
import ju.c0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final c0 f36743a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f36744b;

    /* renamed from: c  reason: collision with root package name */
    private final String f36745c;

    /* renamed from: d  reason: collision with root package name */
    private final long f36746d;

    /* renamed from: e  reason: collision with root package name */
    private final long f36747e;

    /* renamed from: f  reason: collision with root package name */
    private final long f36748f;

    /* renamed from: g  reason: collision with root package name */
    private final int f36749g;

    /* renamed from: h  reason: collision with root package name */
    private final long f36750h;

    /* renamed from: i  reason: collision with root package name */
    private final int f36751i;

    /* renamed from: j  reason: collision with root package name */
    private final int f36752j;

    /* renamed from: k  reason: collision with root package name */
    private final Long f36753k;

    /* renamed from: l  reason: collision with root package name */
    private final Long f36754l;

    /* renamed from: m  reason: collision with root package name */
    private final Long f36755m;

    /* renamed from: n  reason: collision with root package name */
    private final Integer f36756n;

    /* renamed from: o  reason: collision with root package name */
    private final Integer f36757o;

    /* renamed from: p  reason: collision with root package name */
    private final Integer f36758p;

    /* renamed from: q  reason: collision with root package name */
    private final List f36759q;

    public i(c0 canonicalPath, boolean z10, String comment, long j10, long j11, long j12, int i10, long j13, int i11, int i12, Long l10, Long l11, Long l12, Integer num, Integer num2, Integer num3) {
        Intrinsics.checkNotNullParameter(canonicalPath, "canonicalPath");
        Intrinsics.checkNotNullParameter(comment, "comment");
        this.f36743a = canonicalPath;
        this.f36744b = z10;
        this.f36745c = comment;
        this.f36746d = j10;
        this.f36747e = j11;
        this.f36748f = j12;
        this.f36749g = i10;
        this.f36750h = j13;
        this.f36751i = i11;
        this.f36752j = i12;
        this.f36753k = l10;
        this.f36754l = l11;
        this.f36755m = l12;
        this.f36756n = num;
        this.f36757o = num2;
        this.f36758p = num3;
        this.f36759q = new ArrayList();
    }

    public final i a(Integer num, Integer num2, Integer num3) {
        return new i(this.f36743a, this.f36744b, this.f36745c, this.f36746d, this.f36747e, this.f36748f, this.f36749g, this.f36750h, this.f36751i, this.f36752j, this.f36753k, this.f36754l, this.f36755m, num, num2, num3);
    }

    public final c0 b() {
        return this.f36743a;
    }

    public final List c() {
        return this.f36759q;
    }

    public final long d() {
        return this.f36747e;
    }

    public final int e() {
        return this.f36749g;
    }

    public final Long f() {
        Long l10 = this.f36755m;
        if (l10 != null) {
            return Long.valueOf(j.d(l10.longValue()));
        }
        Integer num = this.f36758p;
        if (num != null) {
            return Long.valueOf(num.intValue() * 1000);
        }
        return null;
    }

    public final Long g() {
        Long l10 = this.f36754l;
        if (l10 != null) {
            return Long.valueOf(j.d(l10.longValue()));
        }
        Integer num = this.f36757o;
        if (num != null) {
            return Long.valueOf(num.intValue() * 1000);
        }
        return null;
    }

    public final Long h() {
        Long l10 = this.f36753k;
        if (l10 != null) {
            return Long.valueOf(j.d(l10.longValue()));
        }
        Integer num = this.f36756n;
        if (num != null) {
            return Long.valueOf(num.intValue() * 1000);
        }
        int i10 = this.f36752j;
        if (i10 != -1) {
            return j.c(this.f36751i, i10);
        }
        return null;
    }

    public final long i() {
        return this.f36750h;
    }

    public final long j() {
        return this.f36748f;
    }

    public final boolean k() {
        return this.f36744b;
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public /* synthetic */ i(ju.c0 r18, boolean r19, java.lang.String r20, long r21, long r23, long r25, int r27, long r28, int r30, int r31, java.lang.Long r32, java.lang.Long r33, java.lang.Long r34, java.lang.Integer r35, java.lang.Integer r36, java.lang.Integer r37, int r38, kotlin.jvm.internal.DefaultConstructorMarker r39) {
        /*
            Method dump skipped, instructions count: 177
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: ku.i.<init>(ju.c0, boolean, java.lang.String, long, long, long, int, long, int, int, java.lang.Long, java.lang.Long, java.lang.Long, java.lang.Integer, java.lang.Integer, java.lang.Integer, int, kotlin.jvm.internal.DefaultConstructorMarker):void");
    }
}
