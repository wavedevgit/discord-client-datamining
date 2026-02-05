package com.google.android.gms.internal.play_billing;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class b3 {

    /* renamed from: a  reason: collision with root package name */
    private static final a3 f14191a;

    /* renamed from: b  reason: collision with root package name */
    private static final a3 f14192b;

    static {
        a3 a3Var = null;
        try {
            a3Var = (a3) Class.forName("com.google.protobuf.NewInstanceSchemaFull").getDeclaredConstructor(null).newInstance(null);
        } catch (Exception unused) {
        }
        f14191a = a3Var;
        f14192b = new a3();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static a3 a() {
        return f14191a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static a3 b() {
        return f14192b;
    }
}
