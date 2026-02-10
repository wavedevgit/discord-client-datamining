package com.google.android.gms.internal.play_billing;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h0 extends j0 {

    /* renamed from: d  reason: collision with root package name */
    private int f14344d = 0;

    /* renamed from: e  reason: collision with root package name */
    private final int f14345e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ r0 f14346i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h0(r0 r0Var) {
        this.f14346i = r0Var;
        this.f14345e = r0Var.d();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f14344d < this.f14345e;
    }

    @Override // com.google.android.gms.internal.play_billing.l0
    public final byte zza() {
        int i10 = this.f14344d;
        if (i10 < this.f14345e) {
            this.f14344d = i10 + 1;
            return this.f14346i.c(i10);
        }
        throw new NoSuchElementException();
    }
}
