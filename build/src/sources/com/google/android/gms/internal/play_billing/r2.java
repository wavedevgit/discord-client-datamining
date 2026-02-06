package com.google.android.gms.internal.play_billing;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class r2 {

    /* renamed from: a  reason: collision with root package name */
    private static final q2 f14329a;

    /* renamed from: b  reason: collision with root package name */
    private static final q2 f14330b;

    static {
        q2 q2Var = null;
        try {
            q2Var = (q2) Class.forName("com.google.protobuf.MapFieldSchemaFull").getDeclaredConstructor(null).newInstance(null);
        } catch (Exception unused) {
        }
        f14329a = q2Var;
        f14330b = new q2();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static q2 a() {
        return f14329a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static q2 b() {
        return f14330b;
    }
}
