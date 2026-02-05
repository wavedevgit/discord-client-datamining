package com.google.android.play.core.integrity;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class q extends IntegrityTokenResponse {

    /* renamed from: a  reason: collision with root package name */
    private final String f16223a;

    /* renamed from: b  reason: collision with root package name */
    private final h1 f16224b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public q(String str, h1 h1Var) {
        this.f16223a = str;
        this.f16224b = h1Var;
    }

    @Override // com.google.android.play.core.integrity.IntegrityTokenResponse
    public final String a() {
        return this.f16223a;
    }
}
