package com.google.android.gms.common;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class z extends y {

    /* renamed from: d  reason: collision with root package name */
    private final byte[] f14540d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public z(byte[] bArr) {
        super(Arrays.copyOfRange(bArr, 0, 25));
        this.f14540d = bArr;
    }

    @Override // com.google.android.gms.common.y
    final byte[] f() {
        return this.f14540d;
    }
}
