package com.google.android.play.core.assetpacks;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k1 {

    /* renamed from: a  reason: collision with root package name */
    private m4 f16484a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ k1(sh.c cVar) {
    }

    public final e a() {
        m4 m4Var = this.f16484a;
        if (m4Var != null) {
            return new j1(m4Var, null);
        }
        throw new IllegalStateException(String.valueOf(m4.class.getCanonicalName()).concat(" must be set"));
    }

    public final k1 b(m4 m4Var) {
        this.f16484a = m4Var;
        return this;
    }
}
