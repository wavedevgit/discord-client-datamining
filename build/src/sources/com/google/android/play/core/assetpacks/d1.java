package com.google.android.play.core.assetpacks;

import android.os.ParcelFileDescriptor;
import java.io.InputStream;
import java.util.concurrent.ExecutionException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class d1 {

    /* renamed from: a  reason: collision with root package name */
    private final wh.r f15730a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d1(wh.r rVar) {
        this.f15730a = rVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final InputStream a(int i10, String str, String str2, int i11) {
        try {
            ParcelFileDescriptor parcelFileDescriptor = (ParcelFileDescriptor) xg.m.a(((t4) this.f15730a.a()).d(i10, str, str2, i11));
            if (parcelFileDescriptor != null && parcelFileDescriptor.getFileDescriptor() != null) {
                return new ParcelFileDescriptor.AutoCloseInputStream(parcelFileDescriptor);
            }
            throw new w1(String.format("Corrupted ParcelFileDescriptor, session %s packName %s sliceId %s, chunkNumber %s", Integer.valueOf(i10), str, str2, Integer.valueOf(i11)), i10);
        } catch (InterruptedException e10) {
            throw new w1("Extractor was interrupted while waiting for chunk file.", e10, i10);
        } catch (ExecutionException e11) {
            throw new w1(String.format("Error opening chunk file, session %s packName %s sliceId %s, chunkNumber %s", Integer.valueOf(i10), str, str2, Integer.valueOf(i11)), e11, i10);
        }
    }
}
