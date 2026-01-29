package iu;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g0 {

    /* renamed from: h  reason: collision with root package name */
    public static final a f31248h = new a(null);

    /* renamed from: a  reason: collision with root package name */
    public final byte[] f31249a;

    /* renamed from: b  reason: collision with root package name */
    public int f31250b;

    /* renamed from: c  reason: collision with root package name */
    public int f31251c;

    /* renamed from: d  reason: collision with root package name */
    public boolean f31252d;

    /* renamed from: e  reason: collision with root package name */
    public boolean f31253e;

    /* renamed from: f  reason: collision with root package name */
    public g0 f31254f;

    /* renamed from: g  reason: collision with root package name */
    public g0 f31255g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public g0() {
        this.f31249a = new byte[8192];
        this.f31253e = true;
        this.f31252d = false;
    }

    public final void a() {
        int i10;
        g0 g0Var = this.f31255g;
        if (g0Var != this) {
            Intrinsics.checkNotNull(g0Var);
            if (g0Var.f31253e) {
                int i11 = this.f31251c - this.f31250b;
                g0 g0Var2 = this.f31255g;
                Intrinsics.checkNotNull(g0Var2);
                int i12 = 8192 - g0Var2.f31251c;
                g0 g0Var3 = this.f31255g;
                Intrinsics.checkNotNull(g0Var3);
                if (g0Var3.f31252d) {
                    i10 = 0;
                } else {
                    g0 g0Var4 = this.f31255g;
                    Intrinsics.checkNotNull(g0Var4);
                    i10 = g0Var4.f31250b;
                }
                if (i11 > i12 + i10) {
                    return;
                }
                g0 g0Var5 = this.f31255g;
                Intrinsics.checkNotNull(g0Var5);
                g(g0Var5, i11);
                b();
                h0.b(this);
                return;
            }
            return;
        }
        throw new IllegalStateException("cannot compact");
    }

    public final g0 b() {
        g0 g0Var = this.f31254f;
        if (g0Var == this) {
            g0Var = null;
        }
        g0 g0Var2 = this.f31255g;
        Intrinsics.checkNotNull(g0Var2);
        g0Var2.f31254f = this.f31254f;
        g0 g0Var3 = this.f31254f;
        Intrinsics.checkNotNull(g0Var3);
        g0Var3.f31255g = this.f31255g;
        this.f31254f = null;
        this.f31255g = null;
        return g0Var;
    }

    public final g0 c(g0 segment) {
        Intrinsics.checkNotNullParameter(segment, "segment");
        segment.f31255g = this;
        segment.f31254f = this.f31254f;
        g0 g0Var = this.f31254f;
        Intrinsics.checkNotNull(g0Var);
        g0Var.f31255g = segment;
        this.f31254f = segment;
        return segment;
    }

    public final g0 d() {
        this.f31252d = true;
        return new g0(this.f31249a, this.f31250b, this.f31251c, true, false);
    }

    public final g0 e(int i10) {
        g0 c10;
        if (i10 > 0 && i10 <= this.f31251c - this.f31250b) {
            if (i10 >= 1024) {
                c10 = d();
            } else {
                c10 = h0.c();
                byte[] bArr = this.f31249a;
                byte[] bArr2 = c10.f31249a;
                int i11 = this.f31250b;
                kotlin.collections.i.l(bArr, bArr2, 0, i11, i11 + i10, 2, null);
            }
            c10.f31251c = c10.f31250b + i10;
            this.f31250b += i10;
            g0 g0Var = this.f31255g;
            Intrinsics.checkNotNull(g0Var);
            g0Var.c(c10);
            return c10;
        }
        throw new IllegalArgumentException("byteCount out of range");
    }

    public final g0 f() {
        byte[] bArr = this.f31249a;
        byte[] copyOf = Arrays.copyOf(bArr, bArr.length);
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return new g0(copyOf, this.f31250b, this.f31251c, false, true);
    }

    public final void g(g0 sink, int i10) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        if (sink.f31253e) {
            int i11 = sink.f31251c;
            if (i11 + i10 > 8192) {
                if (!sink.f31252d) {
                    int i12 = sink.f31250b;
                    if ((i11 + i10) - i12 <= 8192) {
                        byte[] bArr = sink.f31249a;
                        kotlin.collections.i.l(bArr, bArr, 0, i12, i11, 2, null);
                        sink.f31251c -= sink.f31250b;
                        sink.f31250b = 0;
                    } else {
                        throw new IllegalArgumentException();
                    }
                } else {
                    throw new IllegalArgumentException();
                }
            }
            byte[] bArr2 = this.f31249a;
            byte[] bArr3 = sink.f31249a;
            int i13 = sink.f31251c;
            int i14 = this.f31250b;
            kotlin.collections.i.f(bArr2, bArr3, i13, i14, i14 + i10);
            sink.f31251c += i10;
            this.f31250b += i10;
            return;
        }
        throw new IllegalStateException("only owner can write");
    }

    public g0(byte[] data, int i10, int i11, boolean z10, boolean z11) {
        Intrinsics.checkNotNullParameter(data, "data");
        this.f31249a = data;
        this.f31250b = i10;
        this.f31251c = i11;
        this.f31252d = z10;
        this.f31253e = z11;
    }
}
