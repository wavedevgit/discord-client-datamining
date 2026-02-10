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
        return sv.a.b(file);
    }

    public static UploadDataProvider create(ParcelFileDescriptor parcelFileDescriptor) {
        return sv.a.a(parcelFileDescriptor);
    }

    public static UploadDataProvider create(ByteBuffer byteBuffer) {
        return sv.a.c(byteBuffer);
    }

    public static UploadDataProvider create(byte[] bArr, int i10, int i11) {
        return sv.a.e(bArr, i10, i11);
    }

    public static UploadDataProvider create(byte[] bArr) {
        return sv.a.d(bArr);
    }
}
