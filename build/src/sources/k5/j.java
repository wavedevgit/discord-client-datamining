package k5;

import android.graphics.Bitmap;
import android.os.Build;
import h5.c;
import okio.BufferedSource;
import okio.ByteString;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class j {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f33016a;

        static {
            int[] iArr = new int[h5.h.values().length];
            try {
                iArr[h5.h.f27353d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[h5.h.f27354e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            f33016a = iArr;
        }
    }

    public static final long a(BufferedSource bufferedSource, ByteString byteString, long j10, long j11) {
        if (byteString.G() > 0) {
            byte j12 = byteString.j(0);
            long G = j11 - byteString.G();
            long j13 = j10;
            while (j13 < G) {
                BufferedSource bufferedSource2 = bufferedSource;
                long b02 = bufferedSource2.b0(j12, j13, G);
                if (b02 != -1 && !bufferedSource2.p0(b02, byteString)) {
                    j13 = b02 + 1;
                    bufferedSource = bufferedSource2;
                } else {
                    return b02;
                }
            }
            return -1L;
        }
        throw new IllegalArgumentException("bytes is empty");
    }

    public static final boolean b(Bitmap.Config config) {
        Bitmap.Config config2;
        if (Build.VERSION.SDK_INT >= 26) {
            config2 = Bitmap.Config.HARDWARE;
            if (config == config2) {
                return true;
            }
            return false;
        }
        return false;
    }

    public static final float c(h5.c cVar, h5.h hVar) {
        if (cVar instanceof c.a) {
            return ((c.a) cVar).f27342a;
        }
        int i10 = a.f33016a[hVar.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                return Float.MAX_VALUE;
            }
            throw new ir.p();
        }
        return Float.MIN_VALUE;
    }

    public static final Bitmap.Config d(Bitmap.Config config) {
        if (config != null && !b(config)) {
            return config;
        }
        return Bitmap.Config.ARGB_8888;
    }
}
