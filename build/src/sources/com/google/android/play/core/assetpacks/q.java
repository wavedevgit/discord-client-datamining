package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.ParcelFileDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class q extends o {
    /* JADX INFO: Access modifiers changed from: package-private */
    public q(x xVar, xg.k kVar) {
        super(xVar, kVar);
    }

    @Override // com.google.android.play.core.assetpacks.o, wh.d0
    public final void O0(Bundle bundle, Bundle bundle2) {
        super.O0(bundle, bundle2);
        this.f15936c.e((ParcelFileDescriptor) bundle.getParcelable("chunk_file_descriptor"));
    }
}
