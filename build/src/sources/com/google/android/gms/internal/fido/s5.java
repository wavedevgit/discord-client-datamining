package com.google.android.gms.internal.fido;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class s5 implements r5 {

    /* renamed from: a  reason: collision with root package name */
    public static final s f14113a;

    /* renamed from: b  reason: collision with root package name */
    public static final s f14114b;

    static {
        w b10 = new w("com.google.android.gms.fido").c(h1.o("FIDO")).b();
        f14113a = b10.a("Passkeys__json_for_parcelables", false);
        f14114b = b10.a("Passkeys__use_result_receiver", true);
    }

    @Override // com.google.android.gms.internal.fido.r5
    public final boolean zza() {
        return ((Boolean) f14113a.zza()).booleanValue();
    }
}
