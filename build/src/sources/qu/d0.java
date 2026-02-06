package qu;

import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.BufferedSource;
import okio.Source;
import okio.Timeout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d0 implements Source {

    /* renamed from: d  reason: collision with root package name */
    private final BufferedSource f48191d;

    /* renamed from: e  reason: collision with root package name */
    private final Buffer f48192e;

    /* renamed from: i  reason: collision with root package name */
    private g0 f48193i;

    /* renamed from: o  reason: collision with root package name */
    private int f48194o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f48195p;

    /* renamed from: q  reason: collision with root package name */
    private long f48196q;

    public d0(BufferedSource upstream) {
        int i10;
        Intrinsics.checkNotNullParameter(upstream, "upstream");
        this.f48191d = upstream;
        Buffer e10 = upstream.e();
        this.f48192e = e10;
        g0 g0Var = e10.f43155d;
        this.f48193i = g0Var;
        if (g0Var != null) {
            i10 = g0Var.f48225b;
        } else {
            i10 = -1;
        }
        this.f48194o = i10;
    }

    @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f48195p = true;
    }

    /* JADX WARN: Code restructure failed: missing block: B:11:0x0020, code lost:
        if (r3 == r4.f48225b) goto L14;
     */
    @Override // okio.Source
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public long read(okio.Buffer r9, long r10) {
        /*
            r8 = this;
            java.lang.String r0 = "sink"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r9, r0)
            r0 = 0
            int r2 = (r10 > r0 ? 1 : (r10 == r0 ? 0 : -1))
            if (r2 < 0) goto L74
            boolean r3 = r8.f48195p
            if (r3 != 0) goto L6c
            qu.g0 r3 = r8.f48193i
            if (r3 == 0) goto L2b
            okio.Buffer r4 = r8.f48192e
            qu.g0 r4 = r4.f43155d
            if (r3 != r4) goto L23
            int r3 = r8.f48194o
            kotlin.jvm.internal.Intrinsics.checkNotNull(r4)
            int r4 = r4.f48225b
            if (r3 != r4) goto L23
            goto L2b
        L23:
            java.lang.IllegalStateException r9 = new java.lang.IllegalStateException
            java.lang.String r10 = "Peek source is invalid because upstream source was used"
            r9.<init>(r10)
            throw r9
        L2b:
            if (r2 != 0) goto L2e
            return r0
        L2e:
            okio.BufferedSource r0 = r8.f48191d
            long r1 = r8.f48196q
            r3 = 1
            long r1 = r1 + r3
            boolean r0 = r0.D0(r1)
            if (r0 != 0) goto L3e
            r9 = -1
            return r9
        L3e:
            qu.g0 r0 = r8.f48193i
            if (r0 != 0) goto L51
            okio.Buffer r0 = r8.f48192e
            qu.g0 r0 = r0.f43155d
            if (r0 == 0) goto L51
            r8.f48193i = r0
            kotlin.jvm.internal.Intrinsics.checkNotNull(r0)
            int r0 = r0.f48225b
            r8.f48194o = r0
        L51:
            okio.Buffer r0 = r8.f48192e
            long r0 = r0.size()
            long r2 = r8.f48196q
            long r0 = r0 - r2
            long r6 = java.lang.Math.min(r10, r0)
            okio.Buffer r2 = r8.f48192e
            long r4 = r8.f48196q
            r3 = r9
            r2.z(r3, r4, r6)
            long r9 = r8.f48196q
            long r9 = r9 + r6
            r8.f48196q = r9
            return r6
        L6c:
            java.lang.IllegalStateException r9 = new java.lang.IllegalStateException
            java.lang.String r10 = "closed"
            r9.<init>(r10)
            throw r9
        L74:
            java.lang.StringBuilder r9 = new java.lang.StringBuilder
            r9.<init>()
            java.lang.String r0 = "byteCount < 0: "
            r9.append(r0)
            r9.append(r10)
            java.lang.String r9 = r9.toString()
            java.lang.IllegalArgumentException r10 = new java.lang.IllegalArgumentException
            java.lang.String r9 = r9.toString()
            r10.<init>(r9)
            throw r10
        */
        throw new UnsupportedOperationException("Method not decompiled: qu.d0.read(okio.Buffer, long):long");
    }

    @Override // okio.Source
    public Timeout timeout() {
        return this.f48191d.timeout();
    }
}
