package av;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g0 {

    /* renamed from: h  reason: collision with root package name */
    public static final a f6261h = new a(null);

    /* renamed from: a  reason: collision with root package name */
    public final byte[] f6262a;

    /* renamed from: b  reason: collision with root package name */
    public int f6263b;

    /* renamed from: c  reason: collision with root package name */
    public int f6264c;

    /* renamed from: d  reason: collision with root package name */
    public boolean f6265d;

    /* renamed from: e  reason: collision with root package name */
    public boolean f6266e;

    /* renamed from: f  reason: collision with root package name */
    public g0 f6267f;

    /* renamed from: g  reason: collision with root package name */
    public g0 f6268g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public g0() {
        this.f6262a = new byte[8192];
        this.f6266e = true;
        this.f6265d = false;
    }

    public final void a() {
        int i10;
        g0 g0Var = this.f6268g;
        if (g0Var != this) {
            Intrinsics.checkNotNull(g0Var);
            if (g0Var.f6266e) {
                int i11 = this.f6264c - this.f6263b;
                g0 g0Var2 = this.f6268g;
                Intrinsics.checkNotNull(g0Var2);
                int i12 = 8192 - g0Var2.f6264c;
                g0 g0Var3 = this.f6268g;
                Intrinsics.checkNotNull(g0Var3);
                if (g0Var3.f6265d) {
                    i10 = 0;
                } else {
                    g0 g0Var4 = this.f6268g;
                    Intrinsics.checkNotNull(g0Var4);
                    i10 = g0Var4.f6263b;
                }
                if (i11 > i12 + i10) {
                    return;
                }
                g0 g0Var5 = this.f6268g;
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
        g0 g0Var = this.f6267f;
        if (g0Var == this) {
            g0Var = null;
        }
        g0 g0Var2 = this.f6268g;
        Intrinsics.checkNotNull(g0Var2);
        g0Var2.f6267f = this.f6267f;
        g0 g0Var3 = this.f6267f;
        Intrinsics.checkNotNull(g0Var3);
        g0Var3.f6268g = this.f6268g;
        this.f6267f = null;
        this.f6268g = null;
        return g0Var;
    }

    public final g0 c(g0 segment) {
        Intrinsics.checkNotNullParameter(segment, "segment");
        segment.f6268g = this;
        segment.f6267f = this.f6267f;
        g0 g0Var = this.f6267f;
        Intrinsics.checkNotNull(g0Var);
        g0Var.f6268g = segment;
        this.f6267f = segment;
        return segment;
    }

    public final g0 d() {
        this.f6265d = true;
        return new g0(this.f6262a, this.f6263b, this.f6264c, true, false);
    }

    public final g0 e(int i10) {
        g0 c10;
        if (i10 > 0 && i10 <= this.f6264c - this.f6263b) {
            if (i10 >= 1024) {
                c10 = d();
            } else {
                c10 = h0.c();
                byte[] bArr = this.f6262a;
                byte[] bArr2 = c10.f6262a;
                int i11 = this.f6263b;
                kotlin.collections.i.l(bArr, bArr2, 0, i11, i11 + i10, 2, null);
            }
            c10.f6264c = c10.f6263b + i10;
            this.f6263b += i10;
            g0 g0Var = this.f6268g;
            Intrinsics.checkNotNull(g0Var);
            g0Var.c(c10);
            return c10;
        }
        throw new IllegalArgumentException("byteCount out of range");
    }

    public final g0 f() {
        byte[] bArr = this.f6262a;
        byte[] copyOf = Arrays.copyOf(bArr, bArr.length);
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return new g0(copyOf, this.f6263b, this.f6264c, false, true);
    }

    public final void g(g0 sink, int i10) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        if (sink.f6266e) {
            int i11 = sink.f6264c;
            if (i11 + i10 > 8192) {
                if (!sink.f6265d) {
                    int i12 = sink.f6263b;
                    if ((i11 + i10) - i12 <= 8192) {
                        byte[] bArr = sink.f6262a;
                        kotlin.collections.i.l(bArr, bArr, 0, i12, i11, 2, null);
                        sink.f6264c -= sink.f6263b;
                        sink.f6263b = 0;
                    } else {
                        throw new IllegalArgumentException();
                    }
                } else {
                    throw new IllegalArgumentException();
                }
            }
            byte[] bArr2 = this.f6262a;
            byte[] bArr3 = sink.f6262a;
            int i13 = sink.f6264c;
            int i14 = this.f6263b;
            kotlin.collections.i.f(bArr2, bArr3, i13, i14, i14 + i10);
            sink.f6264c += i10;
            this.f6263b += i10;
            return;
        }
        throw new IllegalStateException("only owner can write");
    }

    public g0(byte[] data, int i10, int i11, boolean z10, boolean z11) {
        Intrinsics.checkNotNullParameter(data, "data");
        this.f6262a = data;
        this.f6263b = i10;
        this.f6264c = i11;
        this.f6265d = z10;
        this.f6266e = z11;
    }
}
