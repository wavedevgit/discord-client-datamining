package com.google.android.gms.internal.play_billing;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d1 {

    /* renamed from: a  reason: collision with root package name */
    private final Object f14203a;

    /* renamed from: b  reason: collision with root package name */
    private final int f14204b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d1(Object obj, int i10) {
        this.f14203a = obj;
        this.f14204b = i10;
    }

    public final boolean equals(Object obj) {
        if (!(obj instanceof d1)) {
            return false;
        }
        d1 d1Var = (d1) obj;
        if (this.f14203a != d1Var.f14203a || this.f14204b != d1Var.f14204b) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return (System.identityHashCode(this.f14203a) * 65535) + this.f14204b;
    }
}
