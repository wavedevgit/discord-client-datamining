package ju;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g0 {

    /* renamed from: h  reason: collision with root package name */
    public static final a f32361h = new a(null);

    /* renamed from: a  reason: collision with root package name */
    public final byte[] f32362a;

    /* renamed from: b  reason: collision with root package name */
    public int f32363b;

    /* renamed from: c  reason: collision with root package name */
    public int f32364c;

    /* renamed from: d  reason: collision with root package name */
    public boolean f32365d;

    /* renamed from: e  reason: collision with root package name */
    public boolean f32366e;

    /* renamed from: f  reason: collision with root package name */
    public g0 f32367f;

    /* renamed from: g  reason: collision with root package name */
    public g0 f32368g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public g0() {
        this.f32362a = new byte[8192];
        this.f32366e = true;
        this.f32365d = false;
    }

    public final void a() {
        int i10;
        g0 g0Var = this.f32368g;
        if (g0Var != this) {
            Intrinsics.checkNotNull(g0Var);
            if (g0Var.f32366e) {
                int i11 = this.f32364c - this.f32363b;
                g0 g0Var2 = this.f32368g;
                Intrinsics.checkNotNull(g0Var2);
                int i12 = 8192 - g0Var2.f32364c;
                g0 g0Var3 = this.f32368g;
                Intrinsics.checkNotNull(g0Var3);
                if (g0Var3.f32365d) {
                    i10 = 0;
                } else {
                    g0 g0Var4 = this.f32368g;
                    Intrinsics.checkNotNull(g0Var4);
                    i10 = g0Var4.f32363b;
                }
                if (i11 > i12 + i10) {
                    return;
                }
                g0 g0Var5 = this.f32368g;
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
        g0 g0Var = this.f32367f;
        if (g0Var == this) {
            g0Var = null;
        }
        g0 g0Var2 = this.f32368g;
        Intrinsics.checkNotNull(g0Var2);
        g0Var2.f32367f = this.f32367f;
        g0 g0Var3 = this.f32367f;
        Intrinsics.checkNotNull(g0Var3);
        g0Var3.f32368g = this.f32368g;
        this.f32367f = null;
        this.f32368g = null;
        return g0Var;
    }

    public final g0 c(g0 segment) {
        Intrinsics.checkNotNullParameter(segment, "segment");
        segment.f32368g = this;
        segment.f32367f = this.f32367f;
        g0 g0Var = this.f32367f;
        Intrinsics.checkNotNull(g0Var);
        g0Var.f32368g = segment;
        this.f32367f = segment;
        return segment;
    }

    public final g0 d() {
        this.f32365d = true;
        return new g0(this.f32362a, this.f32363b, this.f32364c, true, false);
    }

    public final g0 e(int i10) {
        g0 c10;
        if (i10 > 0 && i10 <= this.f32364c - this.f32363b) {
            if (i10 >= 1024) {
                c10 = d();
            } else {
                c10 = h0.c();
                byte[] bArr = this.f32362a;
                byte[] bArr2 = c10.f32362a;
                int i11 = this.f32363b;
                kotlin.collections.i.l(bArr, bArr2, 0, i11, i11 + i10, 2, null);
            }
            c10.f32364c = c10.f32363b + i10;
            this.f32363b += i10;
            g0 g0Var = this.f32368g;
            Intrinsics.checkNotNull(g0Var);
            g0Var.c(c10);
            return c10;
        }
        throw new IllegalArgumentException("byteCount out of range");
    }

    public final g0 f() {
        byte[] bArr = this.f32362a;
        byte[] copyOf = Arrays.copyOf(bArr, bArr.length);
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return new g0(copyOf, this.f32363b, this.f32364c, false, true);
    }

    public final void g(g0 sink, int i10) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        if (sink.f32366e) {
            int i11 = sink.f32364c;
            if (i11 + i10 > 8192) {
                if (!sink.f32365d) {
                    int i12 = sink.f32363b;
                    if ((i11 + i10) - i12 <= 8192) {
                        byte[] bArr = sink.f32362a;
                        kotlin.collections.i.l(bArr, bArr, 0, i12, i11, 2, null);
                        sink.f32364c -= sink.f32363b;
                        sink.f32363b = 0;
                    } else {
                        throw new IllegalArgumentException();
                    }
                } else {
                    throw new IllegalArgumentException();
                }
            }
            byte[] bArr2 = this.f32362a;
            byte[] bArr3 = sink.f32362a;
            int i13 = sink.f32364c;
            int i14 = this.f32363b;
            kotlin.collections.i.f(bArr2, bArr3, i13, i14, i14 + i10);
            sink.f32364c += i10;
            this.f32363b += i10;
            return;
        }
        throw new IllegalStateException("only owner can write");
    }

    public g0(byte[] data, int i10, int i11, boolean z10, boolean z11) {
        Intrinsics.checkNotNullParameter(data, "data");
        this.f32362a = data;
        this.f32363b = i10;
        this.f32364c = i11;
        this.f32365d = z10;
        this.f32366e = z11;
    }
}
