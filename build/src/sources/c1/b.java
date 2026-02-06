package c1;

import d1.g;
import kotlin.jvm.internal.Intrinsics;
import qr.b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {
    public static final long a(float f10, float f11, float f12, float f13, d1.c colorSpace) {
        Intrinsics.checkNotNullParameter(colorSpace, "colorSpace");
        float d10 = colorSpace.d(0);
        if (f10 <= colorSpace.c(0) && d10 <= f10) {
            float d11 = colorSpace.d(1);
            if (f11 <= colorSpace.c(1) && d11 <= f11) {
                float d12 = colorSpace.d(2);
                if (f12 <= colorSpace.c(2) && d12 <= f12 && 0.0f <= f13 && f13 <= 1.0f) {
                    if (colorSpace.g()) {
                        return a.b(b0.d(b0.d(b0.d((((((int) ((f10 * 255.0f) + 0.5f)) << 16) | (((int) ((f13 * 255.0f) + 0.5f)) << 24)) | (((int) ((f11 * 255.0f) + 0.5f)) << 8)) | ((int) ((f12 * 255.0f) + 0.5f))) & 4294967295L) << 32));
                    } else if (colorSpace.a() == 3) {
                        int b10 = colorSpace.b();
                        if (b10 != -1) {
                            short a10 = c.a(f10);
                            short a11 = c.a(f11);
                            short a12 = c.a(f12);
                            return a.b(b0.d(b0.d(b0.d(b0.d(b0.d(b0.d(b0.d(a11) & 65535) << 32) | b0.d(b0.d(b0.d(a10) & 65535) << 48)) | b0.d(b0.d(b0.d(a12) & 65535) << 16)) | b0.d(b0.d(b0.d((int) ((Math.max(0.0f, Math.min(f13, 1.0f)) * 1023.0f) + 0.5f)) & 1023) << 6)) | b0.d(b0.d(b10) & 63)));
                        }
                        throw new IllegalArgumentException("Unknown color space, please use a color space in ColorSpaces");
                    } else {
                        throw new IllegalArgumentException("Color only works with ColorSpaces with 3 components");
                    }
                }
            }
        }
        throw new IllegalArgumentException(("red = " + f10 + ", green = " + f11 + ", blue = " + f12 + ", alpha = " + f13 + " outside the range for " + colorSpace).toString());
    }

    public static final long b(int i10) {
        return a.b(b0.d(b0.d(i10) << 32));
    }

    public static final long c(long j10) {
        return a.b(b0.d(b0.d(b0.d(j10) & 4294967295L) << 32));
    }

    public static final int d(long j10) {
        return (int) b0.d(a.c(j10, g.f20151a.h()) >>> 32);
    }
}
