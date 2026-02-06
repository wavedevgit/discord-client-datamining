package com.google.android.gms.internal.play_billing;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h0 extends j0 {

    /* renamed from: d  reason: collision with root package name */
    private int f14204d = 0;

    /* renamed from: e  reason: collision with root package name */
    private final int f14205e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ r0 f14206i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h0(r0 r0Var) {
        this.f14206i = r0Var;
        this.f14205e = r0Var.d();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f14204d < this.f14205e;
    }

    @Override // com.google.android.gms.internal.play_billing.l0
    public final byte zza() {
        int i10 = this.f14204d;
        if (i10 < this.f14205e) {
            this.f14204d = i10 + 1;
            return this.f14206i.c(i10);
        }
        throw new NoSuchElementException();
    }
}
