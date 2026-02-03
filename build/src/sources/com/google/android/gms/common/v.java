package com.google.android.gms.common;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class v extends u {

    /* renamed from: d  reason: collision with root package name */
    private final byte[] f13457d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public v(byte[] bArr) {
        super(Arrays.copyOfRange(bArr, 0, 25));
        this.f13457d = bArr;
    }

    @Override // com.google.android.gms.common.u
    final byte[] h() {
        return this.f13457d;
    }
}
