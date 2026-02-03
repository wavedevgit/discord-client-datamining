package com.google.android.play.core.integrity;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class y extends m0 {

    /* renamed from: a  reason: collision with root package name */
    private String f16880a;

    /* renamed from: b  reason: collision with root package name */
    private h1 f16881b;

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.integrity.m0
    public final m0 a(h1 h1Var) {
        this.f16881b = h1Var;
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.integrity.m0
    public final m0 b(String str) {
        if (str != null) {
            this.f16880a = str;
            return this;
        }
        throw new NullPointerException("Null token");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.integrity.m0
    public final n0 c() {
        h1 h1Var;
        String str = this.f16880a;
        if (str != null && (h1Var = this.f16881b) != null) {
            return new n0(str, h1Var);
        }
        StringBuilder sb2 = new StringBuilder();
        if (this.f16880a == null) {
            sb2.append(" token");
        }
        if (this.f16881b == null) {
            sb2.append(" integrityDialogWrapper");
        }
        throw new IllegalStateException("Missing required properties:".concat(sb2.toString()));
    }
}
