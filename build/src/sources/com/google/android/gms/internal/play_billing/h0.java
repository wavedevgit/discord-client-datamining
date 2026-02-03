package com.google.android.gms.internal.play_billing;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h0 extends j0 {

    /* renamed from: d  reason: collision with root package name */
    private int f14879d = 0;

    /* renamed from: e  reason: collision with root package name */
    private final int f14880e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ r0 f14881i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h0(r0 r0Var) {
        this.f14881i = r0Var;
        this.f14880e = r0Var.d();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f14879d < this.f14880e;
    }

    @Override // com.google.android.gms.internal.play_billing.l0
    public final byte zza() {
        int i10 = this.f14879d;
        if (i10 < this.f14880e) {
            this.f14879d = i10 + 1;
            return this.f14881i.c(i10);
        }
        throw new NoSuchElementException();
    }
}
