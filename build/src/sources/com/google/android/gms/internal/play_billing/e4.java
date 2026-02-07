package com.google.android.gms.internal.play_billing;

import sun.misc.Unsafe;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e4 extends f4 {
    /* JADX INFO: Access modifiers changed from: package-private */
    public e4(Unsafe unsafe) {
        super(unsafe);
    }

    @Override // com.google.android.gms.internal.play_billing.f4
    public final double a(Object obj, long j10) {
        return Double.longBitsToDouble(this.f14185a.getLong(obj, j10));
    }

    @Override // com.google.android.gms.internal.play_billing.f4
    public final float b(Object obj, long j10) {
        return Float.intBitsToFloat(this.f14185a.getInt(obj, j10));
    }

    @Override // com.google.android.gms.internal.play_billing.f4
    public final void c(Object obj, long j10, boolean z10) {
        if (g4.f14202h) {
            g4.d(obj, j10, r3 ? (byte) 1 : (byte) 0);
        } else {
            g4.e(obj, j10, r3 ? (byte) 1 : (byte) 0);
        }
    }

    @Override // com.google.android.gms.internal.play_billing.f4
    public final void d(Object obj, long j10, byte b10) {
        if (g4.f14202h) {
            g4.d(obj, j10, b10);
        } else {
            g4.e(obj, j10, b10);
        }
    }

    @Override // com.google.android.gms.internal.play_billing.f4
    public final void e(Object obj, long j10, double d10) {
        this.f14185a.putLong(obj, j10, Double.doubleToLongBits(d10));
    }

    @Override // com.google.android.gms.internal.play_billing.f4
    public final void f(Object obj, long j10, float f10) {
        this.f14185a.putInt(obj, j10, Float.floatToIntBits(f10));
    }

    @Override // com.google.android.gms.internal.play_billing.f4
    public final boolean g(Object obj, long j10) {
        if (g4.f14202h) {
            return g4.y(obj, j10);
        }
        return g4.z(obj, j10);
    }
}
