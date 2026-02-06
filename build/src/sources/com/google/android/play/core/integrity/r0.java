package com.google.android.play.core.integrity;

import com.google.android.play.core.integrity.c;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r0 extends c.a.AbstractC0182a {

    /* renamed from: a  reason: collision with root package name */
    private long f16208a;

    /* renamed from: b  reason: collision with root package name */
    private byte f16209b;

    @Override // com.google.android.play.core.integrity.c.a.AbstractC0182a
    public final c.a a() {
        if (this.f16209b != 3) {
            StringBuilder sb2 = new StringBuilder();
            if ((this.f16209b & 1) == 0) {
                sb2.append(" cloudProjectNumber");
            }
            if ((this.f16209b & 2) == 0) {
                sb2.append(" webViewRequestMode");
            }
            throw new IllegalStateException("Missing required properties:".concat(sb2.toString()));
        }
        return new s0(this.f16208a, 0, null);
    }

    @Override // com.google.android.play.core.integrity.c.a.AbstractC0182a
    public final c.a.AbstractC0182a b(long j10) {
        this.f16208a = j10;
        this.f16209b = (byte) (this.f16209b | 1);
        return this;
    }

    public final c.a.AbstractC0182a c(int i10) {
        this.f16209b = (byte) (this.f16209b | 2);
        return this;
    }
}
