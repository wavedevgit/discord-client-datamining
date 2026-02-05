package com.google.android.play.core.integrity;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class d extends p {

    /* renamed from: a  reason: collision with root package name */
    private String f16146a;

    /* renamed from: b  reason: collision with root package name */
    private h1 f16147b;

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.integrity.p
    public final p a(h1 h1Var) {
        this.f16147b = h1Var;
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.integrity.p
    public final p b(String str) {
        this.f16146a = str;
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.integrity.p
    public final q c() {
        h1 h1Var;
        String str = this.f16146a;
        if (str != null && (h1Var = this.f16147b) != null) {
            return new q(str, h1Var);
        }
        StringBuilder sb2 = new StringBuilder();
        if (this.f16146a == null) {
            sb2.append(" token");
        }
        if (this.f16147b == null) {
            sb2.append(" integrityDialogWrapper");
        }
        throw new IllegalStateException("Missing required properties:".concat(sb2.toString()));
    }
}
