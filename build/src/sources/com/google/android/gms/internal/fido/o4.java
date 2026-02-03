package com.google.android.gms.internal.fido;

import java.util.NoSuchElementException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class o4 extends p4 {

    /* renamed from: d  reason: collision with root package name */
    private int f13678d = 0;

    /* renamed from: e  reason: collision with root package name */
    private final int f13679e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ v4 f13680i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o4(v4 v4Var) {
        this.f13680i = v4Var;
        this.f13679e = v4Var.d();
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f13678d < this.f13679e;
    }

    @Override // com.google.android.gms.internal.fido.r4
    public final byte zza() {
        int i10 = this.f13678d;
        if (i10 < this.f13679e) {
            this.f13678d = i10 + 1;
            return this.f13680i.c(i10);
        }
        throw new NoSuchElementException();
    }
}
