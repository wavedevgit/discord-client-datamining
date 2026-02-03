package os;

import kotlin.jvm.internal.LongCompanionObject;
import kotlin.text.StringsKt;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract /* synthetic */ class h0 {
    public static final int a(String str, int i10, int i11, int i12) {
        return (int) f0.c(str, i10, i11, i12);
    }

    public static final long b(String str, long j10, long j11, long j12) {
        String d10 = f0.d(str);
        if (d10 == null) {
            return j10;
        }
        Long t10 = StringsKt.t(d10);
        if (t10 != null) {
            long longValue = t10.longValue();
            if (j11 <= longValue && longValue <= j12) {
                return longValue;
            }
            throw new IllegalStateException(("System property '" + str + "' should be in range " + j11 + ".." + j12 + ", but is '" + longValue + '\'').toString());
        }
        throw new IllegalStateException(("System property '" + str + "' has unrecognized value '" + d10 + '\'').toString());
    }

    public static final String c(String str, String str2) {
        String d10 = f0.d(str);
        if (d10 == null) {
            return str2;
        }
        return d10;
    }

    public static final boolean d(String str, boolean z10) {
        String d10 = f0.d(str);
        if (d10 != null) {
            return Boolean.parseBoolean(d10);
        }
        return z10;
    }

    public static /* synthetic */ int e(String str, int i10, int i11, int i12, int i13, Object obj) {
        if ((i13 & 4) != 0) {
            i11 = 1;
        }
        if ((i13 & 8) != 0) {
            i12 = Integer.MAX_VALUE;
        }
        return f0.b(str, i10, i11, i12);
    }

    public static /* synthetic */ long f(String str, long j10, long j11, long j12, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            j11 = 1;
        }
        long j13 = j11;
        if ((i10 & 8) != 0) {
            j12 = LongCompanionObject.MAX_VALUE;
        }
        return f0.c(str, j10, j13, j12);
    }
}
