package com.google.android.gms.internal.play_billing;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class n1 implements t2 {

    /* renamed from: a  reason: collision with root package name */
    private static final n1 f15333a = new n1();

    private n1() {
    }

    public static n1 c() {
        return f15333a;
    }

    @Override // com.google.android.gms.internal.play_billing.t2
    public final s2 a(Class cls) {
        if (q1.class.isAssignableFrom(cls)) {
            try {
                return (s2) q1.i(cls.asSubclass(q1.class)).y(3, null, null);
            } catch (Exception e10) {
                throw new RuntimeException("Unable to get message info for ".concat(cls.getName()), e10);
            }
        }
        throw new IllegalArgumentException("Unsupported message type: ".concat(cls.getName()));
    }

    @Override // com.google.android.gms.internal.play_billing.t2
    public final boolean b(Class cls) {
        return q1.class.isAssignableFrom(cls);
    }
}
