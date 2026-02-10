package com.google.android.play.core.integrity;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class q extends IntegrityTokenResponse {

    /* renamed from: a  reason: collision with root package name */
    private final String f17092a;

    /* renamed from: b  reason: collision with root package name */
    private final h1 f17093b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public q(String str, h1 h1Var) {
        this.f17092a = str;
        this.f17093b = h1Var;
    }

    @Override // com.google.android.play.core.integrity.IntegrityTokenResponse
    public final String a() {
        return this.f17092a;
    }
}
