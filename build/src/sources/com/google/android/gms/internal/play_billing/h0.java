package com.google.android.gms.internal.play_billing;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h0 extends j0 {

    /* renamed from: d  reason: collision with root package name */
    private int f13847d = 0;

    /* renamed from: e  reason: collision with root package name */
    private final int f13848e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ r0 f13849i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h0(r0 r0Var) {
        this.f13849i = r0Var;
        this.f13848e = r0Var.d();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f13847d < this.f13848e;
    }

    @Override // com.google.android.gms.internal.play_billing.l0
    public final byte zza() {
        int i10 = this.f13847d;
        if (i10 < this.f13848e) {
            this.f13847d = i10 + 1;
            return this.f13849i.c(i10);
        }
        throw new NoSuchElementException();
    }
}
