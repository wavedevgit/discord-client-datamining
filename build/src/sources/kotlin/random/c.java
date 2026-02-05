package kotlin.random;

import java.io.Serializable;
import kotlin.jvm.internal.DefaultConstructorMarker;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {
    @NotNull

    /* renamed from: d  reason: collision with root package name */
    public static final a f32078d = new a(null);

    /* renamed from: e  reason: collision with root package name */
    private static final c f32079e = wr.b.f53253a.b();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends c implements Serializable {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // kotlin.random.c
        public int b(int i10) {
            return c.f32079e.b(i10);
        }

        @Override // kotlin.random.c
        public float c() {
            return c.f32079e.c();
        }

        @Override // kotlin.random.c
        public int d() {
            return c.f32079e.d();
        }

        @Override // kotlin.random.c
        public int e(int i10) {
            return c.f32079e.e(i10);
        }

        @Override // kotlin.random.c
        public int f(int i10, int i11) {
            return c.f32079e.f(i10, i11);
        }

        private a() {
        }
    }

    public abstract int b(int i10);

    public float c() {
        return b(24) / 1.6777216E7f;
    }

    public int d() {
        return b(32);
    }

    public int e(int i10) {
        return f(0, i10);
    }

    public int f(int i10, int i11) {
        int d10;
        int i12;
        int i13;
        d.b(i10, i11);
        int i14 = i11 - i10;
        if (i14 > 0 || i14 == Integer.MIN_VALUE) {
            if (((-i14) & i14) == i14) {
                i13 = b(d.c(i14));
            } else {
                do {
                    d10 = d() >>> 1;
                    i12 = d10 % i14;
                } while ((d10 - i12) + (i14 - 1) < 0);
                i13 = i12;
            }
            return i10 + i13;
        }
        while (true) {
            int d11 = d();
            if (i10 <= d11 && d11 < i11) {
                return d11;
            }
        }
    }
}
