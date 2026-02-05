package com.facebook.imagepipeline.platform;

import android.annotation.TargetApi;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.nativecode.DalvikPurgeableDecoder;
import o8.d;
import o8.j;
import r8.h;
@TargetApi(ChatViewRecyclerTypes.INTERACTION_STATUS)
@d
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class KitKatPurgeableDecoder extends DalvikPurgeableDecoder {

    /* renamed from: c  reason: collision with root package name */
    private final com.facebook.imagepipeline.memory.d f10654c;

    @d
    public KitKatPurgeableDecoder(com.facebook.imagepipeline.memory.d dVar) {
        this.f10654c = dVar;
    }

    private static void h(byte[] bArr, int i10) {
        bArr[i10] = -1;
        bArr[i10 + 1] = -39;
    }

    @Override // com.facebook.imagepipeline.nativecode.DalvikPurgeableDecoder
    protected Bitmap c(CloseableReference closeableReference, BitmapFactory.Options options) {
        h hVar = (h) closeableReference.E0();
        int size = hVar.size();
        CloseableReference a10 = this.f10654c.a(size);
        try {
            byte[] bArr = (byte[]) a10.E0();
            hVar.p(0, bArr, 0, size);
            return (Bitmap) j.h(BitmapFactory.decodeByteArray(bArr, 0, size, options), "BitmapFactory returned null");
        } finally {
            CloseableReference.N(a10);
        }
    }

    @Override // com.facebook.imagepipeline.nativecode.DalvikPurgeableDecoder
    protected Bitmap d(CloseableReference closeableReference, int i10, BitmapFactory.Options options) {
        byte[] bArr;
        boolean z10;
        if (DalvikPurgeableDecoder.e(closeableReference, i10)) {
            bArr = null;
        } else {
            bArr = DalvikPurgeableDecoder.f10640b;
        }
        h hVar = (h) closeableReference.E0();
        if (i10 <= hVar.size()) {
            z10 = true;
        } else {
            z10 = false;
        }
        j.b(Boolean.valueOf(z10));
        int i11 = i10 + 2;
        CloseableReference a10 = this.f10654c.a(i11);
        try {
            byte[] bArr2 = (byte[]) a10.E0();
            hVar.p(0, bArr2, 0, i10);
            if (bArr != null) {
                h(bArr2, i10);
                i10 = i11;
            }
            Bitmap bitmap = (Bitmap) j.h(BitmapFactory.decodeByteArray(bArr2, 0, i10, options), "BitmapFactory returned null");
            CloseableReference.N(a10);
            return bitmap;
        } catch (Throwable th2) {
            CloseableReference.N(a10);
            throw th2;
        }
    }
}
