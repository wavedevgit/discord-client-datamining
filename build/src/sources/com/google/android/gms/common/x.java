package com.google.android.gms.common;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class x extends w {

    /* renamed from: d  reason: collision with root package name */
    private final byte[] f13854d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public x(byte[] bArr) {
        super(Arrays.copyOfRange(bArr, 0, 25));
        this.f13854d = bArr;
    }

    @Override // com.google.android.gms.common.w
    final byte[] f() {
        return this.f13854d;
    }
}
