package com.google.android.gms.internal.play_billing;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d1 {

    /* renamed from: a  reason: collision with root package name */
    private final Object f14166a;

    /* renamed from: b  reason: collision with root package name */
    private final int f14167b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d1(Object obj, int i10) {
        this.f14166a = obj;
        this.f14167b = i10;
    }

    public final boolean equals(Object obj) {
        if (!(obj instanceof d1)) {
            return false;
        }
        d1 d1Var = (d1) obj;
        if (this.f14166a != d1Var.f14166a || this.f14167b != d1Var.f14167b) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return (System.identityHashCode(this.f14166a) * 65535) + this.f14167b;
    }
}
