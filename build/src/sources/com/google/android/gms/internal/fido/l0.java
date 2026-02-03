package com.google.android.gms.internal.fido;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class l0 extends j0 {

    /* renamed from: d  reason: collision with root package name */
    private final Object f14679d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public l0(Object obj) {
        this.f14679d = obj;
    }

    @Override // com.google.android.gms.internal.fido.j0
    public final Object a() {
        return this.f14679d;
    }

    @Override // com.google.android.gms.internal.fido.j0
    public final boolean b() {
        return true;
    }

    public final boolean equals(Object obj) {
        if (obj instanceof l0) {
            return this.f14679d.equals(((l0) obj).f14679d);
        }
        return false;
    }

    public final int hashCode() {
        return this.f14679d.hashCode() + 1502476572;
    }

    public final String toString() {
        String obj = this.f14679d.toString();
        return "Optional.of(" + obj + ")";
    }
}
