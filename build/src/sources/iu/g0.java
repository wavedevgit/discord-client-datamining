package iu;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g0 {

    /* renamed from: h  reason: collision with root package name */
    public static final a f31264h = new a(null);

    /* renamed from: a  reason: collision with root package name */
    public final byte[] f31265a;

    /* renamed from: b  reason: collision with root package name */
    public int f31266b;

    /* renamed from: c  reason: collision with root package name */
    public int f31267c;

    /* renamed from: d  reason: collision with root package name */
    public boolean f31268d;

    /* renamed from: e  reason: collision with root package name */
    public boolean f31269e;

    /* renamed from: f  reason: collision with root package name */
    public g0 f31270f;

    /* renamed from: g  reason: collision with root package name */
    public g0 f31271g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public g0() {
        this.f31265a = new byte[8192];
        this.f31269e = true;
        this.f31268d = false;
    }

    public final void a() {
        int i10;
        g0 g0Var = this.f31271g;
        if (g0Var != this) {
            Intrinsics.checkNotNull(g0Var);
            if (g0Var.f31269e) {
                int i11 = this.f31267c - this.f31266b;
                g0 g0Var2 = this.f31271g;
                Intrinsics.checkNotNull(g0Var2);
                int i12 = 8192 - g0Var2.f31267c;
                g0 g0Var3 = this.f31271g;
                Intrinsics.checkNotNull(g0Var3);
                if (g0Var3.f31268d) {
                    i10 = 0;
                } else {
                    g0 g0Var4 = this.f31271g;
                    Intrinsics.checkNotNull(g0Var4);
                    i10 = g0Var4.f31266b;
                }
                if (i11 > i12 + i10) {
                    return;
                }
                g0 g0Var5 = this.f31271g;
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
        g0 g0Var = this.f31270f;
        if (g0Var == this) {
            g0Var = null;
        }
        g0 g0Var2 = this.f31271g;
        Intrinsics.checkNotNull(g0Var2);
        g0Var2.f31270f = this.f31270f;
        g0 g0Var3 = this.f31270f;
        Intrinsics.checkNotNull(g0Var3);
        g0Var3.f31271g = this.f31271g;
        this.f31270f = null;
        this.f31271g = null;
        return g0Var;
    }

    public final g0 c(g0 segment) {
        Intrinsics.checkNotNullParameter(segment, "segment");
        segment.f31271g = this;
        segment.f31270f = this.f31270f;
        g0 g0Var = this.f31270f;
        Intrinsics.checkNotNull(g0Var);
        g0Var.f31271g = segment;
        this.f31270f = segment;
        return segment;
    }

    public final g0 d() {
        this.f31268d = true;
        return new g0(this.f31265a, this.f31266b, this.f31267c, true, false);
    }

    public final g0 e(int i10) {
        g0 c10;
        if (i10 > 0 && i10 <= this.f31267c - this.f31266b) {
            if (i10 >= 1024) {
                c10 = d();
            } else {
                c10 = h0.c();
                byte[] bArr = this.f31265a;
                byte[] bArr2 = c10.f31265a;
                int i11 = this.f31266b;
                kotlin.collections.i.l(bArr, bArr2, 0, i11, i11 + i10, 2, null);
            }
            c10.f31267c = c10.f31266b + i10;
            this.f31266b += i10;
            g0 g0Var = this.f31271g;
            Intrinsics.checkNotNull(g0Var);
            g0Var.c(c10);
            return c10;
        }
        throw new IllegalArgumentException("byteCount out of range");
    }

    public final g0 f() {
        byte[] bArr = this.f31265a;
        byte[] copyOf = Arrays.copyOf(bArr, bArr.length);
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return new g0(copyOf, this.f31266b, this.f31267c, false, true);
    }

    public final void g(g0 sink, int i10) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        if (sink.f31269e) {
            int i11 = sink.f31267c;
            if (i11 + i10 > 8192) {
                if (!sink.f31268d) {
                    int i12 = sink.f31266b;
                    if ((i11 + i10) - i12 <= 8192) {
                        byte[] bArr = sink.f31265a;
                        kotlin.collections.i.l(bArr, bArr, 0, i12, i11, 2, null);
                        sink.f31267c -= sink.f31266b;
                        sink.f31266b = 0;
                    } else {
                        throw new IllegalArgumentException();
                    }
                } else {
                    throw new IllegalArgumentException();
                }
            }
            byte[] bArr2 = this.f31265a;
            byte[] bArr3 = sink.f31265a;
            int i13 = sink.f31267c;
            int i14 = this.f31266b;
            kotlin.collections.i.f(bArr2, bArr3, i13, i14, i14 + i10);
            sink.f31267c += i10;
            this.f31266b += i10;
            return;
        }
        throw new IllegalStateException("only owner can write");
    }

    public g0(byte[] data, int i10, int i11, boolean z10, boolean z11) {
        Intrinsics.checkNotNullParameter(data, "data");
        this.f31265a = data;
        this.f31266b = i10;
        this.f31267c = i11;
        this.f31268d = z10;
        this.f31269e = z11;
    }
}
