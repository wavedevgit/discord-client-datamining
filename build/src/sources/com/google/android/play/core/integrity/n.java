package com.google.android.play.core.integrity;

import com.google.android.play.core.integrity.IntegrityTokenRequest;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class n extends IntegrityTokenRequest.Builder {

    /* renamed from: a  reason: collision with root package name */
    private String f16332a;

    /* renamed from: b  reason: collision with root package name */
    private Long f16333b;

    @Override // com.google.android.play.core.integrity.IntegrityTokenRequest.Builder
    public final IntegrityTokenRequest build() {
        String str = this.f16332a;
        if (str != null) {
            return new o(str, this.f16333b, null, null);
        }
        throw new IllegalStateException("Missing required properties: nonce");
    }

    @Override // com.google.android.play.core.integrity.IntegrityTokenRequest.Builder
    public final IntegrityTokenRequest.Builder setCloudProjectNumber(long j10) {
        this.f16333b = Long.valueOf(j10);
        return this;
    }

    @Override // com.google.android.play.core.integrity.IntegrityTokenRequest.Builder
    public final IntegrityTokenRequest.Builder setNonce(String str) {
        if (str != null) {
            this.f16332a = str;
            return this;
        }
        throw new NullPointerException("Null nonce");
    }
}
