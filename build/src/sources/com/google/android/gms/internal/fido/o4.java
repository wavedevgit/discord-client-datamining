package com.google.android.gms.internal.fido;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class o4 extends p4 {

    /* renamed from: d  reason: collision with root package name */
    private int f14710d = 0;

    /* renamed from: e  reason: collision with root package name */
    private final int f14711e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ v4 f14712i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o4(v4 v4Var) {
        this.f14712i = v4Var;
        this.f14711e = v4Var.d();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f14710d < this.f14711e;
    }

    @Override // com.google.android.gms.internal.fido.r4
    public final byte zza() {
        int i10 = this.f14710d;
        if (i10 < this.f14711e) {
            this.f14710d = i10 + 1;
            return this.f14712i.c(i10);
        }
        throw new NoSuchElementException();
    }
}
