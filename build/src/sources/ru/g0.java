package ru;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g0 {

    /* renamed from: h  reason: collision with root package name */
    public static final a f49389h = new a(null);

    /* renamed from: a  reason: collision with root package name */
    public final byte[] f49390a;

    /* renamed from: b  reason: collision with root package name */
    public int f49391b;

    /* renamed from: c  reason: collision with root package name */
    public int f49392c;

    /* renamed from: d  reason: collision with root package name */
    public boolean f49393d;

    /* renamed from: e  reason: collision with root package name */
    public boolean f49394e;

    /* renamed from: f  reason: collision with root package name */
    public g0 f49395f;

    /* renamed from: g  reason: collision with root package name */
    public g0 f49396g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public g0() {
        this.f49390a = new byte[8192];
        this.f49394e = true;
        this.f49393d = false;
    }

    public final void a() {
        int i10;
        g0 g0Var = this.f49396g;
        if (g0Var != this) {
            Intrinsics.checkNotNull(g0Var);
            if (g0Var.f49394e) {
                int i11 = this.f49392c - this.f49391b;
                g0 g0Var2 = this.f49396g;
                Intrinsics.checkNotNull(g0Var2);
                int i12 = 8192 - g0Var2.f49392c;
                g0 g0Var3 = this.f49396g;
                Intrinsics.checkNotNull(g0Var3);
                if (g0Var3.f49393d) {
                    i10 = 0;
                } else {
                    g0 g0Var4 = this.f49396g;
                    Intrinsics.checkNotNull(g0Var4);
                    i10 = g0Var4.f49391b;
                }
                if (i11 > i12 + i10) {
                    return;
                }
                g0 g0Var5 = this.f49396g;
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
        g0 g0Var = this.f49395f;
        if (g0Var == this) {
            g0Var = null;
        }
        g0 g0Var2 = this.f49396g;
        Intrinsics.checkNotNull(g0Var2);
        g0Var2.f49395f = this.f49395f;
        g0 g0Var3 = this.f49395f;
        Intrinsics.checkNotNull(g0Var3);
        g0Var3.f49396g = this.f49396g;
        this.f49395f = null;
        this.f49396g = null;
        return g0Var;
    }

    public final g0 c(g0 segment) {
        Intrinsics.checkNotNullParameter(segment, "segment");
        segment.f49396g = this;
        segment.f49395f = this.f49395f;
        g0 g0Var = this.f49395f;
        Intrinsics.checkNotNull(g0Var);
        g0Var.f49396g = segment;
        this.f49395f = segment;
        return segment;
    }

    public final g0 d() {
        this.f49393d = true;
        return new g0(this.f49390a, this.f49391b, this.f49392c, true, false);
    }

    public final g0 e(int i10) {
        g0 c10;
        if (i10 > 0 && i10 <= this.f49392c - this.f49391b) {
            if (i10 >= 1024) {
                c10 = d();
            } else {
                c10 = h0.c();
                byte[] bArr = this.f49390a;
                byte[] bArr2 = c10.f49390a;
                int i11 = this.f49391b;
                kotlin.collections.i.l(bArr, bArr2, 0, i11, i11 + i10, 2, null);
            }
            c10.f49392c = c10.f49391b + i10;
            this.f49391b += i10;
            g0 g0Var = this.f49396g;
            Intrinsics.checkNotNull(g0Var);
            g0Var.c(c10);
            return c10;
        }
        throw new IllegalArgumentException("byteCount out of range");
    }

    public final g0 f() {
        byte[] bArr = this.f49390a;
        byte[] copyOf = Arrays.copyOf(bArr, bArr.length);
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return new g0(copyOf, this.f49391b, this.f49392c, false, true);
    }

    public final void g(g0 sink, int i10) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        if (sink.f49394e) {
            int i11 = sink.f49392c;
            if (i11 + i10 > 8192) {
                if (!sink.f49393d) {
                    int i12 = sink.f49391b;
                    if ((i11 + i10) - i12 <= 8192) {
                        byte[] bArr = sink.f49390a;
                        kotlin.collections.i.l(bArr, bArr, 0, i12, i11, 2, null);
                        sink.f49392c -= sink.f49391b;
                        sink.f49391b = 0;
                    } else {
                        throw new IllegalArgumentException();
                    }
                } else {
                    throw new IllegalArgumentException();
                }
            }
            byte[] bArr2 = this.f49390a;
            byte[] bArr3 = sink.f49390a;
            int i13 = sink.f49392c;
            int i14 = this.f49391b;
            kotlin.collections.i.f(bArr2, bArr3, i13, i14, i14 + i10);
            sink.f49392c += i10;
            this.f49391b += i10;
            return;
        }
        throw new IllegalStateException("only owner can write");
    }

    public g0(byte[] data, int i10, int i11, boolean z10, boolean z11) {
        Intrinsics.checkNotNullParameter(data, "data");
        this.f49390a = data;
        this.f49391b = i10;
        this.f49392c = i11;
        this.f49393d = z10;
        this.f49394e = z11;
    }
}
