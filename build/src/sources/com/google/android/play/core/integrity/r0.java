package com.google.android.play.core.integrity;

import com.google.android.play.core.integrity.c;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r0 extends c.a.AbstractC0193a {

    /* renamed from: a  reason: collision with root package name */
    private long f16866a;

    /* renamed from: b  reason: collision with root package name */
    private byte f16867b;

    @Override // com.google.android.play.core.integrity.c.a.AbstractC0193a
    public final c.a a() {
        if (this.f16867b != 3) {
            StringBuilder sb2 = new StringBuilder();
            if ((this.f16867b & 1) == 0) {
                sb2.append(" cloudProjectNumber");
            }
            if ((this.f16867b & 2) == 0) {
                sb2.append(" webViewRequestMode");
            }
            throw new IllegalStateException("Missing required properties:".concat(sb2.toString()));
        }
        return new s0(this.f16866a, 0, null);
    }

    @Override // com.google.android.play.core.integrity.c.a.AbstractC0193a
    public final c.a.AbstractC0193a b(long j10) {
        this.f16866a = j10;
        this.f16867b = (byte) (this.f16867b | 1);
        return this;
    }

    public final c.a.AbstractC0193a c(int i10) {
        this.f16867b = (byte) (this.f16867b | 2);
        return this;
    }
}
