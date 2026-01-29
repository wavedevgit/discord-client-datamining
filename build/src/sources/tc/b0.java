package tc;

import com.google.android.exoplayer2.Format;
import java.util.Arrays;
import ne.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface b0 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final int f49401a;

        /* renamed from: b  reason: collision with root package name */
        public final byte[] f49402b;

        /* renamed from: c  reason: collision with root package name */
        public final int f49403c;

        /* renamed from: d  reason: collision with root package name */
        public final int f49404d;

        public a(int i10, byte[] bArr, int i11, int i12) {
            this.f49401a = i10;
            this.f49402b = bArr;
            this.f49403c = i11;
            this.f49404d = i12;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && a.class == obj.getClass()) {
                a aVar = (a) obj;
                if (this.f49401a == aVar.f49401a && this.f49403c == aVar.f49403c && this.f49404d == aVar.f49404d && Arrays.equals(this.f49402b, aVar.f49402b)) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            return (((((this.f49401a * 31) + Arrays.hashCode(this.f49402b)) * 31) + this.f49403c) * 31) + this.f49404d;
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
