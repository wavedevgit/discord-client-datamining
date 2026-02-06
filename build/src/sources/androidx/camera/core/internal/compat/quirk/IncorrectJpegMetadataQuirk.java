package androidx.camera.core.internal.compat.quirk;

import a0.y1;
import android.os.Build;
import androidx.camera.core.n;
import java.nio.ByteBuffer;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Locale;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class IncorrectJpegMetadataQuirk implements y1 {

    /* renamed from: a  reason: collision with root package name */
    private static final Set f2451a = new HashSet(Arrays.asList("A24"));

    private boolean c(byte[] bArr) {
        byte b10;
        int i10 = 2;
        while (i10 + 4 <= bArr.length && (b10 = bArr[i10]) == -1) {
            if (b10 == -1 && bArr[i10 + 1] == -38) {
                return true;
            }
            i10 += (((bArr[i10 + 2] & 255) << 8) | (bArr[i10 + 3] & 255)) + 2;
        }
        return false;
    }

    private int d(byte[] bArr) {
        int i10 = 2;
        while (true) {
            int i11 = i10 + 1;
            if (i11 > bArr.length) {
                return -1;
            }
            if (bArr[i10] == -1 && bArr[i11] == -40) {
                return i10;
            }
            i10 = i11;
        }
    }

    private static boolean e() {
        if ("Samsung".equalsIgnoreCase(Build.BRAND) && f2451a.contains(Build.DEVICE.toUpperCase(Locale.US))) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean g() {
        return e();
    }

    public byte[] f(n nVar) {
        int i10 = 0;
        ByteBuffer e10 = nVar.c1()[0].e();
        byte[] bArr = new byte[e10.capacity()];
        e10.rewind();
        e10.get(bArr);
        if (!c(bArr) && (i10 = d(bArr)) == -1) {
            return bArr;
        }
        return Arrays.copyOfRange(bArr, i10, e10.limit());
    }
}
