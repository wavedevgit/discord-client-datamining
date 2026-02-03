package tc;

import com.google.android.exoplayer2.Format;
import java.util.Arrays;
import ne.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface b0 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final int f49689a;

        /* renamed from: b  reason: collision with root package name */
        public final byte[] f49690b;

        /* renamed from: c  reason: collision with root package name */
        public final int f49691c;

        /* renamed from: d  reason: collision with root package name */
        public final int f49692d;

        public a(int i10, byte[] bArr, int i11, int i12) {
            this.f49689a = i10;
            this.f49690b = bArr;
            this.f49691c = i11;
            this.f49692d = i12;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && a.class == obj.getClass()) {
                a aVar = (a) obj;
                if (this.f49689a == aVar.f49689a && this.f49691c == aVar.f49691c && this.f49692d == aVar.f49692d && Arrays.equals(this.f49690b, aVar.f49690b)) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            return (((((this.f49689a * 31) + Arrays.hashCode(this.f49690b)) * 31) + this.f49691c) * 31) + this.f49692d;
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
