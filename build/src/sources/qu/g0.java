package qu;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g0 {

    /* renamed from: h  reason: collision with root package name */
    public static final a f48223h = new a(null);

    /* renamed from: a  reason: collision with root package name */
    public final byte[] f48224a;

    /* renamed from: b  reason: collision with root package name */
    public int f48225b;

    /* renamed from: c  reason: collision with root package name */
    public int f48226c;

    /* renamed from: d  reason: collision with root package name */
    public boolean f48227d;

    /* renamed from: e  reason: collision with root package name */
    public boolean f48228e;

    /* renamed from: f  reason: collision with root package name */
    public g0 f48229f;

    /* renamed from: g  reason: collision with root package name */
    public g0 f48230g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public g0() {
        this.f48224a = new byte[8192];
        this.f48228e = true;
        this.f48227d = false;
    }

    public final void a() {
        int i10;
        g0 g0Var = this.f48230g;
        if (g0Var != this) {
            Intrinsics.checkNotNull(g0Var);
            if (g0Var.f48228e) {
                int i11 = this.f48226c - this.f48225b;
                g0 g0Var2 = this.f48230g;
                Intrinsics.checkNotNull(g0Var2);
                int i12 = 8192 - g0Var2.f48226c;
                g0 g0Var3 = this.f48230g;
                Intrinsics.checkNotNull(g0Var3);
                if (g0Var3.f48227d) {
                    i10 = 0;
                } else {
                    g0 g0Var4 = this.f48230g;
                    Intrinsics.checkNotNull(g0Var4);
                    i10 = g0Var4.f48225b;
                }
                if (i11 > i12 + i10) {
                    return;
                }
                g0 g0Var5 = this.f48230g;
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
        g0 g0Var = this.f48229f;
        if (g0Var == this) {
            g0Var = null;
        }
        g0 g0Var2 = this.f48230g;
        Intrinsics.checkNotNull(g0Var2);
        g0Var2.f48229f = this.f48229f;
        g0 g0Var3 = this.f48229f;
        Intrinsics.checkNotNull(g0Var3);
        g0Var3.f48230g = this.f48230g;
        this.f48229f = null;
        this.f48230g = null;
        return g0Var;
    }

    public final g0 c(g0 segment) {
        Intrinsics.checkNotNullParameter(segment, "segment");
        segment.f48230g = this;
        segment.f48229f = this.f48229f;
        g0 g0Var = this.f48229f;
        Intrinsics.checkNotNull(g0Var);
        g0Var.f48230g = segment;
        this.f48229f = segment;
        return segment;
    }

    public final g0 d() {
        this.f48227d = true;
        return new g0(this.f48224a, this.f48225b, this.f48226c, true, false);
    }

    public final g0 e(int i10) {
        g0 c10;
        if (i10 > 0 && i10 <= this.f48226c - this.f48225b) {
            if (i10 >= 1024) {
                c10 = d();
            } else {
                c10 = h0.c();
                byte[] bArr = this.f48224a;
                byte[] bArr2 = c10.f48224a;
                int i11 = this.f48225b;
                kotlin.collections.i.l(bArr, bArr2, 0, i11, i11 + i10, 2, null);
            }
            c10.f48226c = c10.f48225b + i10;
            this.f48225b += i10;
            g0 g0Var = this.f48230g;
            Intrinsics.checkNotNull(g0Var);
            g0Var.c(c10);
            return c10;
        }
        throw new IllegalArgumentException("byteCount out of range");
    }

    public final g0 f() {
        byte[] bArr = this.f48224a;
        byte[] copyOf = Arrays.copyOf(bArr, bArr.length);
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return new g0(copyOf, this.f48225b, this.f48226c, false, true);
    }

    public final void g(g0 sink, int i10) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        if (sink.f48228e) {
            int i11 = sink.f48226c;
            if (i11 + i10 > 8192) {
                if (!sink.f48227d) {
                    int i12 = sink.f48225b;
                    if ((i11 + i10) - i12 <= 8192) {
                        byte[] bArr = sink.f48224a;
                        kotlin.collections.i.l(bArr, bArr, 0, i12, i11, 2, null);
                        sink.f48226c -= sink.f48225b;
                        sink.f48225b = 0;
                    } else {
                        throw new IllegalArgumentException();
                    }
                } else {
                    throw new IllegalArgumentException();
                }
            }
            byte[] bArr2 = this.f48224a;
            byte[] bArr3 = sink.f48224a;
            int i13 = sink.f48226c;
            int i14 = this.f48225b;
            kotlin.collections.i.f(bArr2, bArr3, i13, i14, i14 + i10);
            sink.f48226c += i10;
            this.f48225b += i10;
            return;
        }
        throw new IllegalStateException("only owner can write");
    }

    public g0(byte[] data, int i10, int i11, boolean z10, boolean z11) {
        Intrinsics.checkNotNullParameter(data, "data");
        this.f48224a = data;
        this.f48225b = i10;
        this.f48226c = i11;
        this.f48227d = z10;
        this.f48228e = z11;
    }
}
