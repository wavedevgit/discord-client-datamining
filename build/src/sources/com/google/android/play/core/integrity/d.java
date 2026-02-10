package com.google.android.play.core.integrity;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class d extends p {

    /* renamed from: a  reason: collision with root package name */
    private String f17015a;

    /* renamed from: b  reason: collision with root package name */
    private h1 f17016b;

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.integrity.p
    public final p a(h1 h1Var) {
        this.f17016b = h1Var;
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.integrity.p
    public final p b(String str) {
        this.f17015a = str;
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.integrity.p
    public final q c() {
        h1 h1Var;
        String str = this.f17015a;
        if (str != null && (h1Var = this.f17016b) != null) {
            return new q(str, h1Var);
        }
        StringBuilder sb2 = new StringBuilder();
        if (this.f17015a == null) {
            sb2.append(" token");
        }
        if (this.f17016b == null) {
            sb2.append(" integrityDialogWrapper");
        }
        throw new IllegalStateException("Missing required properties:".concat(sb2.toString()));
    }
}
