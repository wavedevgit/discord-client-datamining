package com.google.android.gms.internal.play_billing;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class h1 {

    /* renamed from: a  reason: collision with root package name */
    private static final f1 f13850a = new g1();

    /* renamed from: b  reason: collision with root package name */
    private static final f1 f13851b;

    static {
        f1 f1Var = null;
        try {
            f1Var = (f1) Class.forName("com.google.protobuf.ExtensionSchemaFull").getDeclaredConstructor(null).newInstance(null);
        } catch (Exception unused) {
        }
        f13851b = f1Var;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static f1 a() {
        f1 f1Var = f13851b;
        if (f1Var != null) {
            return f1Var;
        }
        throw new IllegalStateException("Protobuf runtime is not correctly loaded.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static f1 b() {
        return f13850a;
    }
}
