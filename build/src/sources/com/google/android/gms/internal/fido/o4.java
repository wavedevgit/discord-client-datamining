package com.google.android.gms.internal.fido;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class o4 extends p4 {

    /* renamed from: d  reason: collision with root package name */
    private int f14752d = 0;

    /* renamed from: e  reason: collision with root package name */
    private final int f14753e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ v4 f14754i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o4(v4 v4Var) {
        this.f14754i = v4Var;
        this.f14753e = v4Var.d();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f14752d < this.f14753e;
    }

    @Override // com.google.android.gms.internal.fido.r4
    public final byte zza() {
        int i10 = this.f14752d;
        if (i10 < this.f14753e) {
            this.f14752d = i10 + 1;
            return this.f14754i.c(i10);
        }
        throw new NoSuchElementException();
    }
}
