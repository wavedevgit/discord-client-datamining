package com.google.android.gms.internal.play_billing;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h0 extends j0 {

    /* renamed from: d  reason: collision with root package name */
    private int f14922d = 0;

    /* renamed from: e  reason: collision with root package name */
    private final int f14923e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ r0 f14924i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h0(r0 r0Var) {
        this.f14924i = r0Var;
        this.f14923e = r0Var.d();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f14922d < this.f14923e;
    }

    @Override // com.google.android.gms.internal.play_billing.l0
    public final byte zza() {
        int i10 = this.f14922d;
        if (i10 < this.f14923e) {
            this.f14922d = i10 + 1;
            return this.f14924i.c(i10);
        }
        throw new NoSuchElementException();
    }
}
