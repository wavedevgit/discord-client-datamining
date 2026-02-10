package com.google.android.gms.internal.fido;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class l0 extends j0 {

    /* renamed from: d  reason: collision with root package name */
    private final Object f14144d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public l0(Object obj) {
        this.f14144d = obj;
    }

    @Override // com.google.android.gms.internal.fido.j0
    public final Object a() {
        return this.f14144d;
    }

    @Override // com.google.android.gms.internal.fido.j0
    public final boolean b() {
        return true;
    }

    public final boolean equals(Object obj) {
        if (obj instanceof l0) {
            return this.f14144d.equals(((l0) obj).f14144d);
        }
        return false;
    }

    public final int hashCode() {
        return this.f14144d.hashCode() + 1502476572;
    }

    public final String toString() {
        String obj = this.f14144d.toString();
        return "Optional.of(" + obj + ")";
    }
}
