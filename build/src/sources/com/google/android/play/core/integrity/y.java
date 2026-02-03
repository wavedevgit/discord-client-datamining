package com.google.android.play.core.integrity;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class y extends m0 {

    /* renamed from: a  reason: collision with root package name */
    private String f15848a;

    /* renamed from: b  reason: collision with root package name */
    private h1 f15849b;

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.integrity.m0
    public final m0 a(h1 h1Var) {
        this.f15849b = h1Var;
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.integrity.m0
    public final m0 b(String str) {
        if (str != null) {
            this.f15848a = str;
            return this;
        }
        throw new NullPointerException("Null token");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.integrity.m0
    public final n0 c() {
        h1 h1Var;
        String str = this.f15848a;
        if (str != null && (h1Var = this.f15849b) != null) {
            return new n0(str, h1Var);
        }
        StringBuilder sb2 = new StringBuilder();
        if (this.f15848a == null) {
            sb2.append(" token");
        }
        if (this.f15849b == null) {
            sb2.append(" integrityDialogWrapper");
        }
        throw new IllegalStateException("Missing required properties:".concat(sb2.toString()));
    }
}
