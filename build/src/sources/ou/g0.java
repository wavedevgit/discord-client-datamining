package ou;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g0 {

    /* renamed from: h  reason: collision with root package name */
    public static final a f44507h = new a(null);

    /* renamed from: a  reason: collision with root package name */
    public final byte[] f44508a;

    /* renamed from: b  reason: collision with root package name */
    public int f44509b;

    /* renamed from: c  reason: collision with root package name */
    public int f44510c;

    /* renamed from: d  reason: collision with root package name */
    public boolean f44511d;

    /* renamed from: e  reason: collision with root package name */
    public boolean f44512e;

    /* renamed from: f  reason: collision with root package name */
    public g0 f44513f;

    /* renamed from: g  reason: collision with root package name */
    public g0 f44514g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public g0() {
        this.f44508a = new byte[8192];
        this.f44512e = true;
        this.f44511d = false;
    }

    public final void a() {
        int i10;
        g0 g0Var = this.f44514g;
        if (g0Var != this) {
            Intrinsics.checkNotNull(g0Var);
            if (g0Var.f44512e) {
                int i11 = this.f44510c - this.f44509b;
                g0 g0Var2 = this.f44514g;
                Intrinsics.checkNotNull(g0Var2);
                int i12 = 8192 - g0Var2.f44510c;
                g0 g0Var3 = this.f44514g;
                Intrinsics.checkNotNull(g0Var3);
                if (g0Var3.f44511d) {
                    i10 = 0;
                } else {
                    g0 g0Var4 = this.f44514g;
                    Intrinsics.checkNotNull(g0Var4);
                    i10 = g0Var4.f44509b;
                }
                if (i11 > i12 + i10) {
                    return;
                }
                g0 g0Var5 = this.f44514g;
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
        g0 g0Var = this.f44513f;
        if (g0Var == this) {
            g0Var = null;
        }
        g0 g0Var2 = this.f44514g;
        Intrinsics.checkNotNull(g0Var2);
        g0Var2.f44513f = this.f44513f;
        g0 g0Var3 = this.f44513f;
        Intrinsics.checkNotNull(g0Var3);
        g0Var3.f44514g = this.f44514g;
        this.f44513f = null;
        this.f44514g = null;
        return g0Var;
    }

    public final g0 c(g0 segment) {
        Intrinsics.checkNotNullParameter(segment, "segment");
        segment.f44514g = this;
        segment.f44513f = this.f44513f;
        g0 g0Var = this.f44513f;
        Intrinsics.checkNotNull(g0Var);
        g0Var.f44514g = segment;
        this.f44513f = segment;
        return segment;
    }

    public final g0 d() {
        this.f44511d = true;
        return new g0(this.f44508a, this.f44509b, this.f44510c, true, false);
    }

    public final g0 e(int i10) {
        g0 c10;
        if (i10 > 0 && i10 <= this.f44510c - this.f44509b) {
            if (i10 >= 1024) {
                c10 = d();
            } else {
                c10 = h0.c();
                byte[] bArr = this.f44508a;
                byte[] bArr2 = c10.f44508a;
                int i11 = this.f44509b;
                kotlin.collections.i.l(bArr, bArr2, 0, i11, i11 + i10, 2, null);
            }
            c10.f44510c = c10.f44509b + i10;
            this.f44509b += i10;
            g0 g0Var = this.f44514g;
            Intrinsics.checkNotNull(g0Var);
            g0Var.c(c10);
            return c10;
        }
        throw new IllegalArgumentException("byteCount out of range");
    }

    public final g0 f() {
        byte[] bArr = this.f44508a;
        byte[] copyOf = Arrays.copyOf(bArr, bArr.length);
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return new g0(copyOf, this.f44509b, this.f44510c, false, true);
    }

    public final void g(g0 sink, int i10) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        if (sink.f44512e) {
            int i11 = sink.f44510c;
            if (i11 + i10 > 8192) {
                if (!sink.f44511d) {
                    int i12 = sink.f44509b;
                    if ((i11 + i10) - i12 <= 8192) {
                        byte[] bArr = sink.f44508a;
                        kotlin.collections.i.l(bArr, bArr, 0, i12, i11, 2, null);
                        sink.f44510c -= sink.f44509b;
                        sink.f44509b = 0;
                    } else {
                        throw new IllegalArgumentException();
                    }
                } else {
                    throw new IllegalArgumentException();
                }
            }
            byte[] bArr2 = this.f44508a;
            byte[] bArr3 = sink.f44508a;
            int i13 = sink.f44510c;
            int i14 = this.f44509b;
            kotlin.collections.i.f(bArr2, bArr3, i13, i14, i14 + i10);
            sink.f44510c += i10;
            this.f44509b += i10;
            return;
        }
        throw new IllegalStateException("only owner can write");
    }

    public g0(byte[] data, int i10, int i11, boolean z10, boolean z11) {
        Intrinsics.checkNotNullParameter(data, "data");
        this.f44508a = data;
        this.f44509b = i10;
        this.f44510c = i11;
        this.f44511d = z10;
        this.f44512e = z11;
    }
}
