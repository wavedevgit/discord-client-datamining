package tc;

import com.google.android.exoplayer2.Format;
import java.util.Arrays;
import ne.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface b0 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final int f50478a;

        /* renamed from: b  reason: collision with root package name */
        public final byte[] f50479b;

        /* renamed from: c  reason: collision with root package name */
        public final int f50480c;

        /* renamed from: d  reason: collision with root package name */
        public final int f50481d;

        public a(int i10, byte[] bArr, int i11, int i12) {
            this.f50478a = i10;
            this.f50479b = bArr;
            this.f50480c = i11;
            this.f50481d = i12;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && a.class == obj.getClass()) {
                a aVar = (a) obj;
                if (this.f50478a == aVar.f50478a && this.f50480c == aVar.f50480c && this.f50481d == aVar.f50481d && Arrays.equals(this.f50479b, aVar.f50479b)) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            return (((((this.f50478a * 31) + Arrays.hashCode(this.f50479b)) * 31) + this.f50480c) * 31) + this.f50481d;
        }
    }

    default int a(le.j jVar, int i10, boolean z10) {
        return c(jVar, i10, z10, 0);
    }

    void b(Format format);

    int c(le.j jVar, int i10, boolean z10, int i11);

    void d(long j10, int i10, int i11, int i12, a aVar);

    void e(h0 h0Var, int i10, int i11);

    default void f(h0 h0Var, int i10) {
        e(h0Var, i10, 0);
    }
}
