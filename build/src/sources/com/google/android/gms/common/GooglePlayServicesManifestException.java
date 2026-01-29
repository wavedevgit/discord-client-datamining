package com.google.android.gms.common;

import com.google.android.gms.common.annotation.KeepName;
@KeepName
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class GooglePlayServicesManifestException extends IllegalStateException {

    /* renamed from: d  reason: collision with root package name */
    private final int f14782d;

    public GooglePlayServicesManifestException(int i10, String str) {
        super(str);
        this.f14782d = i10;
    }
}
