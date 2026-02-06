package pu;

import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    public static final f f45719a = new f();

    private f() {
    }

    public final String a(int i10) {
        if (i10 >= 1000 && i10 < 5000) {
            if ((1004 <= i10 && i10 < 1007) || (1015 <= i10 && i10 < 3000)) {
                return "Code " + i10 + " is reserved and may not be used.";
            }
            return null;
        }
        return "Code must be in range [1000,5000): " + i10;
    }

    public final void b(Buffer.a cursor, byte[] key) {
        Intrinsics.checkNotNullParameter(cursor, "cursor");
        Intrinsics.checkNotNullParameter(key, "key");
        int length = key.length;
        int i10 = 0;
        do {
            byte[] bArr = cursor.f43161p;
            int i11 = cursor.f43162q;
            int i12 = cursor.f43163r;
            if (bArr != null) {
                while (i11 < i12) {
                    int i13 = i10 % length;
                    bArr[i11] = (byte) (bArr[i11] ^ key[i13]);
                    i11++;
                    i10 = i13 + 1;
                }
            }
        } while (cursor.g() != -1);
    }

    public final void c(int i10) {
        String a10 = a(i10);
        if (a10 == null) {
            return;
        }
        Intrinsics.checkNotNull(a10);
        throw new IllegalArgumentException(a10.toString());
    }
}
