package com.google.android.gms.internal.play_billing;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o2 implements h3 {

    /* renamed from: b  reason: collision with root package name */
    private static final t2 f14344b = new m2();

    /* renamed from: a  reason: collision with root package name */
    private final t2 f14345a;

    public o2() {
        t2 t2Var;
        n1 c10 = n1.c();
        try {
            t2Var = (t2) Class.forName("com.google.protobuf.DescriptorMessageInfoFactory").getDeclaredMethod("getInstance", null).invoke(null, null);
        } catch (Exception unused) {
            t2Var = f14344b;
        }
        n2 n2Var = new n2(c10, t2Var);
        byte[] bArr = y1.f14404d;
        this.f14345a = n2Var;
    }

    private static boolean b(s2 s2Var) {
        if (s2Var.a() - 1 != 1) {
            return true;
        }
        return false;
    }

    @Override // com.google.android.gms.internal.play_billing.h3
    public final g3 a(Class cls) {
        i3.y(cls);
        s2 a10 = this.f14345a.a(cls);
        if (a10.zzb()) {
            if (q1.class.isAssignableFrom(cls)) {
                return z2.i(i3.u(), h1.b(), a10.zza());
            }
            return z2.i(i3.t(), h1.a(), a10.zza());
        } else if (q1.class.isAssignableFrom(cls)) {
            if (b(a10)) {
                return y2.A(cls, a10, b3.b(), k2.d(), i3.u(), h1.b(), r2.b());
            }
            return y2.A(cls, a10, b3.b(), k2.d(), i3.u(), null, r2.b());
        } else if (b(a10)) {
            return y2.A(cls, a10, b3.a(), k2.c(), i3.t(), h1.a(), r2.a());
        } else {
            return y2.A(cls, a10, b3.a(), k2.c(), i3.t(), null, r2.a());
        }
    }
}
