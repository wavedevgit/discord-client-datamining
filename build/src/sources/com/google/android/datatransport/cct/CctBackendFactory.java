package com.google.android.datatransport.cct;

import ac.h;
import ac.m;
import androidx.annotation.Keep;
@Keep
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class CctBackendFactory implements ac.d {
    @Override // ac.d
    public m create(h hVar) {
        return new d(hVar.b(), hVar.e(), hVar.d());
    }
}
