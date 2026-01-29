package io.sentry.util;

import java.util.UUID;
import kotlin.jvm.internal.ByteCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class k0 {
    public static long a() {
        byte[] bArr = new byte[8];
        d0.a().b(bArr);
        byte b10 = (byte) (bArr[6] & 15);
        bArr[6] = b10;
        bArr[6] = (byte) (b10 | 64);
        long j10 = 0;
        for (int i10 = 0; i10 < 8; i10++) {
            j10 = (j10 << 8) | (bArr[i10] & 255);
        }
        return j10;
    }

    public static UUID b() {
        byte[] bArr = new byte[16];
        d0.a().b(bArr);
        byte b10 = (byte) (bArr[6] & 15);
        bArr[6] = b10;
        bArr[6] = (byte) (b10 | 64);
        byte b11 = (byte) (bArr[8] & 63);
        bArr[8] = b11;
        bArr[8] = (byte) (b11 | ByteCompanionObject.MIN_VALUE);
        long j10 = 0;
        long j11 = 0;
        for (int i10 = 0; i10 < 8; i10++) {
            j11 = (j11 << 8) | (bArr[i10] & 255);
        }
        for (int i11 = 8; i11 < 16; i11++) {
            j10 = (j10 << 8) | (bArr[i11] & 255);
        }
        return new UUID(j11, j10);
    }
}
