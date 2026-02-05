package com.google.android.gms.internal.play_billing;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h extends d {

    /* renamed from: i  reason: collision with root package name */
    private final j f14240i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(j jVar, int i10) {
        super(jVar.size(), i10);
        this.f14240i = jVar;
    }

    @Override // com.google.android.gms.internal.play_billing.d
    protected final Object a(int i10) {
        return this.f14240i.get(i10);
    }
}
