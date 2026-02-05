package com.google.android.gms.internal.fido;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class o4 extends p4 {

    /* renamed from: d  reason: collision with root package name */
    private int f14072d = 0;

    /* renamed from: e  reason: collision with root package name */
    private final int f14073e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ v4 f14074i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o4(v4 v4Var) {
        this.f14074i = v4Var;
        this.f14073e = v4Var.d();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f14072d < this.f14073e;
    }

    @Override // com.google.android.gms.internal.fido.r4
    public final byte zza() {
        int i10 = this.f14072d;
        if (i10 < this.f14073e) {
            this.f14072d = i10 + 1;
            return this.f14074i.c(i10);
        }
        throw new NoSuchElementException();
    }
}
