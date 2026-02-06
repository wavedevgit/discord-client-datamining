package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.ParcelFileDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class q extends o {
    /* JADX INFO: Access modifiers changed from: package-private */
    public q(x xVar, yg.k kVar) {
        super(xVar, kVar);
    }

    @Override // com.google.android.play.core.assetpacks.o, xh.d0
    public final void P0(Bundle bundle, Bundle bundle2) {
        super.P0(bundle, bundle2);
        this.f15916c.e((ParcelFileDescriptor) bundle.getParcelable("chunk_file_descriptor"));
    }
}
