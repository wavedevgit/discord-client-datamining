package org.chromium.net;

import android.os.ParcelFileDescriptor;
import java.io.File;
import java.nio.ByteBuffer;
@Deprecated
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class UploadDataProviders {
    private UploadDataProviders() {
    }

    public static UploadDataProvider create(File file) {
        return jv.a.b(file);
    }

    public static UploadDataProvider create(ParcelFileDescriptor parcelFileDescriptor) {
        return jv.a.a(parcelFileDescriptor);
    }

    public static UploadDataProvider create(ByteBuffer byteBuffer) {
        return jv.a.c(byteBuffer);
    }

    public static UploadDataProvider create(byte[] bArr, int i10, int i11) {
        return jv.a.e(bArr, i10, i11);
    }

    public static UploadDataProvider create(byte[] bArr) {
        return jv.a.d(bArr);
    }
}
