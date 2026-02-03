package lu;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g0 {

    /* renamed from: h  reason: collision with root package name */
    public static final a f37299h = new a(null);

    /* renamed from: a  reason: collision with root package name */
    public final byte[] f37300a;

    /* renamed from: b  reason: collision with root package name */
    public int f37301b;

    /* renamed from: c  reason: collision with root package name */
    public int f37302c;

    /* renamed from: d  reason: collision with root package name */
    public boolean f37303d;

    /* renamed from: e  reason: collision with root package name */
    public boolean f37304e;

    /* renamed from: f  reason: collision with root package name */
    public g0 f37305f;

    /* renamed from: g  reason: collision with root package name */
    public g0 f37306g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public g0() {
        this.f37300a = new byte[8192];
        this.f37304e = true;
        this.f37303d = false;
    }

    public final void a() {
        int i10;
        g0 g0Var = this.f37306g;
        if (g0Var != this) {
            Intrinsics.checkNotNull(g0Var);
            if (g0Var.f37304e) {
                int i11 = this.f37302c - this.f37301b;
                g0 g0Var2 = this.f37306g;
                Intrinsics.checkNotNull(g0Var2);
                int i12 = 8192 - g0Var2.f37302c;
                g0 g0Var3 = this.f37306g;
                Intrinsics.checkNotNull(g0Var3);
                if (g0Var3.f37303d) {
                    i10 = 0;
                } else {
                    g0 g0Var4 = this.f37306g;
                    Intrinsics.checkNotNull(g0Var4);
                    i10 = g0Var4.f37301b;
                }
                if (i11 > i12 + i10) {
                    return;
                }
                g0 g0Var5 = this.f37306g;
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
        g0 g0Var = this.f37305f;
        if (g0Var == this) {
            g0Var = null;
        }
        g0 g0Var2 = this.f37306g;
        Intrinsics.checkNotNull(g0Var2);
        g0Var2.f37305f = this.f37305f;
        g0 g0Var3 = this.f37305f;
        Intrinsics.checkNotNull(g0Var3);
        g0Var3.f37306g = this.f37306g;
        this.f37305f = null;
        this.f37306g = null;
        return g0Var;
    }

    public final g0 c(g0 segment) {
        Intrinsics.checkNotNullParameter(segment, "segment");
        segment.f37306g = this;
        segment.f37305f = this.f37305f;
        g0 g0Var = this.f37305f;
        Intrinsics.checkNotNull(g0Var);
        g0Var.f37306g = segment;
        this.f37305f = segment;
        return segment;
    }

    public final g0 d() {
        this.f37303d = true;
        return new g0(this.f37300a, this.f37301b, this.f37302c, true, false);
    }

    public final g0 e(int i10) {
        g0 c10;
        if (i10 > 0 && i10 <= this.f37302c - this.f37301b) {
            if (i10 >= 1024) {
                c10 = d();
            } else {
                c10 = h0.c();
                byte[] bArr = this.f37300a;
                byte[] bArr2 = c10.f37300a;
                int i11 = this.f37301b;
                kotlin.collections.i.l(bArr, bArr2, 0, i11, i11 + i10, 2, null);
            }
            c10.f37302c = c10.f37301b + i10;
            this.f37301b += i10;
            g0 g0Var = this.f37306g;
            Intrinsics.checkNotNull(g0Var);
            g0Var.c(c10);
            return c10;
        }
        throw new IllegalArgumentException("byteCount out of range");
    }

    public final g0 f() {
        byte[] bArr = this.f37300a;
        byte[] copyOf = Arrays.copyOf(bArr, bArr.length);
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return new g0(copyOf, this.f37301b, this.f37302c, false, true);
    }

    public final void g(g0 sink, int i10) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        if (sink.f37304e) {
            int i11 = sink.f37302c;
            if (i11 + i10 > 8192) {
                if (!sink.f37303d) {
                    int i12 = sink.f37301b;
                    if ((i11 + i10) - i12 <= 8192) {
                        byte[] bArr = sink.f37300a;
                        kotlin.collections.i.l(bArr, bArr, 0, i12, i11, 2, null);
                        sink.f37302c -= sink.f37301b;
                        sink.f37301b = 0;
                    } else {
                        throw new IllegalArgumentException();
                    }
                } else {
                    throw new IllegalArgumentException();
                }
            }
            byte[] bArr2 = this.f37300a;
            byte[] bArr3 = sink.f37300a;
            int i13 = sink.f37302c;
            int i14 = this.f37301b;
            kotlin.collections.i.f(bArr2, bArr3, i13, i14, i14 + i10);
            sink.f37302c += i10;
            this.f37301b += i10;
            return;
        }
        throw new IllegalStateException("only owner can write");
    }

    public g0(byte[] data, int i10, int i11, boolean z10, boolean z11) {
        Intrinsics.checkNotNullParameter(data, "data");
        this.f37300a = data;
        this.f37301b = i10;
        this.f37302c = i11;
        this.f37303d = z10;
        this.f37304e = z11;
    }
}
