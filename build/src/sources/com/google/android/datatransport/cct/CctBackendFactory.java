package com.google.android.datatransport.cct;

import androidx.annotation.Keep;
import bc.h;
import bc.m;
@Keep
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class CctBackendFactory implements bc.d {
    @Override // bc.d
    public m create(h hVar) {
        return new d(hVar.b(), hVar.e(), hVar.d());
    }
}
