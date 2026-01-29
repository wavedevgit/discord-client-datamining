package com.facebook.imagepipeline.memory;

import android.graphics.Bitmap;
import o8.j;
import va.a0;
import va.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class c extends a implements va.d {
    public c(r8.d dVar, z zVar, a0 a0Var, boolean z10) {
        super(dVar, zVar, a0Var, z10);
        s();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.imagepipeline.memory.a
    /* renamed from: A */
    public Bitmap g(int i10) {
        return Bitmap.createBitmap(1, (int) Math.ceil(i10 / 2.0d), Bitmap.Config.RGB_565);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.imagepipeline.memory.a
    /* renamed from: B */
    public void k(Bitmap bitmap) {
        j.g(bitmap);
        bitmap.recycle();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.imagepipeline.memory.a
    /* renamed from: C */
    public int o(Bitmap bitmap) {
        j.g(bitmap);
        return bitmap.getAllocationByteCount();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.imagepipeline.memory.a
    /* renamed from: D */
    public Bitmap q(b bVar) {
        Bitmap bitmap = (Bitmap) super.q(bVar);
        if (bitmap != null) {
            bitmap.eraseColor(0);
        }
        return bitmap;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.imagepipeline.memory.a
    /* renamed from: E */
    public boolean u(Bitmap bitmap) {
        j.g(bitmap);
        if (!bitmap.isRecycled() && bitmap.isMutable()) {
            return true;
        }
        return false;
    }

    @Override // com.facebook.imagepipeline.memory.a
    protected int n(int i10) {
        return i10;
    }

    @Override // com.facebook.imagepipeline.memory.a
    protected int p(int i10) {
        return i10;
    }
}
