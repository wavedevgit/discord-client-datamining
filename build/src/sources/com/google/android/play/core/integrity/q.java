package com.google.android.play.core.integrity;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class q extends IntegrityTokenResponse {

    /* renamed from: a  reason: collision with root package name */
    private final String f17232a;

    /* renamed from: b  reason: collision with root package name */
    private final h1 f17233b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public q(String str, h1 h1Var) {
        this.f17232a = str;
        this.f17233b = h1Var;
    }

    @Override // com.google.android.play.core.integrity.IntegrityTokenResponse
    public final String a() {
        return this.f17232a;
    }
}
