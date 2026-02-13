package uc;

import com.google.android.exoplayer2.Format;
import java.util.Arrays;
import oe.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface b0 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final int f51182a;

        /* renamed from: b  reason: collision with root package name */
        public final byte[] f51183b;

        /* renamed from: c  reason: collision with root package name */
        public final int f51184c;

        /* renamed from: d  reason: collision with root package name */
        public final int f51185d;

        public a(int i10, byte[] bArr, int i11, int i12) {
            this.f51182a = i10;
            this.f51183b = bArr;
            this.f51184c = i11;
            this.f51185d = i12;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && a.class == obj.getClass()) {
                a aVar = (a) obj;
                if (this.f51182a == aVar.f51182a && this.f51184c == aVar.f51184c && this.f51185d == aVar.f51185d && Arrays.equals(this.f51183b, aVar.f51183b)) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            return (((((this.f51182a * 31) + Arrays.hashCode(this.f51183b)) * 31) + this.f51184c) * 31) + this.f51185d;
        }
    }

    void a(long j10, int i10, int i11, int i12, a aVar);

    int b(me.j jVar, int i10, boolean z10, int i11);

    void c(Format format);

    void d(h0 h0Var, int i10, int i11);

    default void e(h0 h0Var, int i10) {
        d(h0Var, i10, 0);
    }

    default int f(me.j jVar, int i10, boolean z10) {
        return b(jVar, i10, z10, 0);
    }
}
