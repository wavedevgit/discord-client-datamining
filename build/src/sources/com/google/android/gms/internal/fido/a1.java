package com.google.android.gms.internal.fido;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a1 extends u0 {

    /* renamed from: i  reason: collision with root package name */
    private final e1 f13960i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a1(e1 e1Var, int i10) {
        super(e1Var.size(), i10);
        this.f13960i = e1Var;
    }

    @Override // com.google.android.gms.internal.fido.u0
    protected final Object a(int i10) {
        return this.f13960i.get(i10);
    }
}
