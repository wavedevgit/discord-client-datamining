package qd;

import android.net.Uri;
import com.google.android.exoplayer2.MediaItem;
import com.google.android.exoplayer2.Timeline;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p0 extends Timeline {
    private static final Object D = new Object();
    private static final MediaItem E = new MediaItem.c().b("SinglePeriodTimeline").e(Uri.EMPTY).a();
    private final Object A;
    private final MediaItem B;
    private final MediaItem.g C;

    /* renamed from: q  reason: collision with root package name */
    private final long f46807q;

    /* renamed from: r  reason: collision with root package name */
    private final long f46808r;

    /* renamed from: s  reason: collision with root package name */
    private final long f46809s;

    /* renamed from: t  reason: collision with root package name */
    private final long f46810t;

    /* renamed from: u  reason: collision with root package name */
    private final long f46811u;

    /* renamed from: v  reason: collision with root package name */
    private final long f46812v;

    /* renamed from: w  reason: collision with root package name */
    private final long f46813w;

    /* renamed from: x  reason: collision with root package name */
    private final boolean f46814x;

    /* renamed from: y  reason: collision with root package name */
    private final boolean f46815y;

    /* renamed from: z  reason: collision with root package name */
    private final boolean f46816z;

    public p0(long j10, boolean z10, boolean z11, boolean z12, Object obj, MediaItem mediaItem) {
        this(j10, j10, 0L, 0L, z10, z11, z12, obj, mediaItem);
    }

    @Override // com.google.android.exoplayer2.Timeline
    public int f(Object obj) {
        if (D.equals(obj)) {
            return 0;
        }
        return -1;
    }

    @Override // com.google.android.exoplayer2.Timeline
    public Timeline.b k(int i10, Timeline.b bVar, boolean z10) {
        Object obj;
        ne.a.c(i10, 0, 1);
        if (z10) {
            obj = D;
        } else {
            obj = null;
        }
        return bVar.v(null, obj, 0, this.f46810t, -this.f46812v);
    }

    @Override // com.google.android.exoplayer2.Timeline
    public int m() {
        return 1;
    }

    @Override // com.google.android.exoplayer2.Timeline
    public Object q(int i10) {
        ne.a.c(i10, 0, 1);
        return D;
    }

    /* JADX WARN: Code restructure failed: missing block: B:12:0x002b, code lost:
        if (r1 > r3) goto L9;
     */
    @Override // com.google.android.exoplayer2.Timeline
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public com.google.android.exoplayer2.Timeline.d s(int r25, com.google.android.exoplayer2.Timeline.d r26, long r27) {
        /*
            r24 = this;
            r0 = r24
            r1 = 0
            r2 = 1
            r3 = r25
            ne.a.c(r3, r1, r2)
            long r1 = r0.f46813w
            boolean r14 = r0.f46815y
            if (r14 == 0) goto L2e
            boolean r3 = r0.f46816z
            if (r3 != 0) goto L2e
            r3 = 0
            int r3 = (r27 > r3 ? 1 : (r27 == r3 ? 0 : -1))
            if (r3 == 0) goto L2e
            long r3 = r0.f46811u
            r5 = -9223372036854775807(0x8000000000000001, double:-4.9E-324)
            int r7 = (r3 > r5 ? 1 : (r3 == r5 ? 0 : -1))
            if (r7 != 0) goto L27
        L24:
            r16 = r5
            goto L30
        L27:
            long r1 = r1 + r27
            int r3 = (r1 > r3 ? 1 : (r1 == r3 ? 0 : -1))
            if (r3 <= 0) goto L2e
            goto L24
        L2e:
            r16 = r1
        L30:
            java.lang.Object r4 = com.google.android.exoplayer2.Timeline.d.C
            com.google.android.exoplayer2.MediaItem r5 = r0.B
            java.lang.Object r6 = r0.A
            long r7 = r0.f46807q
            long r9 = r0.f46808r
            long r11 = r0.f46809s
            boolean r13 = r0.f46814x
            com.google.android.exoplayer2.MediaItem$g r15 = r0.C
            long r1 = r0.f46811u
            r21 = 0
            r18 = r1
            long r1 = r0.f46812v
            r20 = 0
            r3 = r26
            r22 = r1
            com.google.android.exoplayer2.Timeline$d r1 = r3.h(r4, r5, r6, r7, r9, r11, r13, r14, r15, r16, r18, r20, r21, r22)
            return r1
        */
        throw new UnsupportedOperationException("Method not decompiled: qd.p0.s(int, com.google.android.exoplayer2.Timeline$d, long):com.google.android.exoplayer2.Timeline$d");
    }

    @Override // com.google.android.exoplayer2.Timeline
    public int t() {
        return 1;
    }

    public p0(long j10, long j11, long j12, long j13, boolean z10, boolean z11, boolean z12, Object obj, MediaItem mediaItem) {
        this(-9223372036854775807L, -9223372036854775807L, -9223372036854775807L, j10, j11, j12, j13, z10, z11, false, obj, mediaItem, z12 ? mediaItem.f11627o : null);
    }

    public p0(long j10, long j11, long j12, long j13, long j14, long j15, long j16, boolean z10, boolean z11, boolean z12, Object obj, MediaItem mediaItem, MediaItem.g gVar) {
        this.f46807q = j10;
        this.f46808r = j11;
        this.f46809s = j12;
        this.f46810t = j13;
        this.f46811u = j14;
        this.f46812v = j15;
        this.f46813w = j16;
        this.f46814x = z10;
        this.f46815y = z11;
        this.f46816z = z12;
        this.A = obj;
        this.B = (MediaItem) ne.a.e(mediaItem);
        this.C = gVar;
    }
}
