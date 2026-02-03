package com.google.android.gms.internal.play_billing;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class h1 {

    /* renamed from: a  reason: collision with root package name */
    private static final f1 f14882a = new g1();

    /* renamed from: b  reason: collision with root package name */
    private static final f1 f14883b;

    static {
        f1 f1Var = null;
        try {
            f1Var = (f1) Class.forName("com.google.protobuf.ExtensionSchemaFull").getDeclaredConstructor(null).newInstance(null);
        } catch (Exception unused) {
        }
        f14883b = f1Var;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static f1 a() {
        f1 f1Var = f14883b;
        if (f1Var != null) {
            return f1Var;
        }
        throw new IllegalStateException("Protobuf runtime is not correctly loaded.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static f1 b() {
        return f14882a;
    }
}
