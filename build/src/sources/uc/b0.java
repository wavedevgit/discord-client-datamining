package uc;

import com.google.android.exoplayer2.Format;
import java.util.Arrays;
import oe.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface b0 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final int f50614a;

        /* renamed from: b  reason: collision with root package name */
        public final byte[] f50615b;

        /* renamed from: c  reason: collision with root package name */
        public final int f50616c;

        /* renamed from: d  reason: collision with root package name */
        public final int f50617d;

        public a(int i10, byte[] bArr, int i11, int i12) {
            this.f50614a = i10;
            this.f50615b = bArr;
            this.f50616c = i11;
            this.f50617d = i12;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && a.class == obj.getClass()) {
                a aVar = (a) obj;
                if (this.f50614a == aVar.f50614a && this.f50616c == aVar.f50616c && this.f50617d == aVar.f50617d && Arrays.equals(this.f50615b, aVar.f50615b)) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            return (((((this.f50614a * 31) + Arrays.hashCode(this.f50615b)) * 31) + this.f50616c) * 31) + this.f50617d;
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
