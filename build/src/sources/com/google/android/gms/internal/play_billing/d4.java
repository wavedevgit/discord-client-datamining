package com.google.android.gms.internal.play_billing;

import sun.misc.Unsafe;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d4 extends f4 {
    /* JADX INFO: Access modifiers changed from: package-private */
    public d4(Unsafe unsafe) {
        super(unsafe);
    }

    @Override // com.google.android.gms.internal.play_billing.f4
    public final double a(Object obj, long j10) {
        return Double.longBitsToDouble(this.f14222a.getLong(obj, j10));
    }

    @Override // com.google.android.gms.internal.play_billing.f4
    public final float b(Object obj, long j10) {
        return Float.intBitsToFloat(this.f14222a.getInt(obj, j10));
    }

    /*  JADX ERROR: JadxRuntimeException in pass: InlineMethods
        jadx.core.utils.exceptions.JadxRuntimeException: Failed to process method for inline: com.google.android.gms.internal.play_billing.g4.n(java.lang.Object, long, boolean):void
        	at jadx.core.dex.visitors.InlineMethods.processInvokeInsn(InlineMethods.java:76)
        	at jadx.core.dex.visitors.InlineMethods.visit(InlineMethods.java:51)
        Caused by: java.lang.ArrayIndexOutOfBoundsException: arraycopy: length -1 is negative
        	at java.base/java.lang.System.arraycopy(Native Method)
        	at java.base/java.util.ArrayList.shiftTailOverGap(ArrayList.java:746)
        	at java.base/java.util.ArrayList.removeIf(ArrayList.java:1691)
        	at java.base/java.util.ArrayList.removeIf(ArrayList.java:1660)
        	at jadx.core.dex.instructions.args.SSAVar.removeUse(SSAVar.java:130)
        	at jadx.core.dex.instructions.args.SSAVar.use(SSAVar.java:123)
        	at jadx.core.dex.nodes.InsnNode.rebindArgs(InsnNode.java:481)
        	at jadx.core.dex.instructions.mods.TernaryInsn.rebindArgs(TernaryInsn.java:92)
        	at jadx.core.dex.nodes.InsnNode.rebindArgs(InsnNode.java:484)
        	at jadx.core.utils.BlockUtils.replaceInsn(BlockUtils.java:1079)
        	at jadx.core.utils.BlockUtils.replaceInsn(BlockUtils.java:1088)
        	at jadx.core.dex.visitors.InlineMethods.inlineMethod(InlineMethods.java:115)
        	at jadx.core.dex.visitors.InlineMethods.processInvokeInsn(InlineMethods.java:74)
        	... 1 more
        */
    @Override // com.google.android.gms.internal.play_billing.f4
    public final void c(java.lang.Object r2, long r3, boolean r5) {
        /*
            r1 = this;
            boolean r0 = com.google.android.gms.internal.play_billing.g4.f14239h
            if (r0 == 0) goto L8
            com.google.android.gms.internal.play_billing.g4.n(r2, r3, r5)
            return
        L8:
            com.google.android.gms.internal.play_billing.g4.o(r2, r3, r5)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.gms.internal.play_billing.d4.c(java.lang.Object, long, boolean):void");
    }

    @Override // com.google.android.gms.internal.play_billing.f4
    public final void d(Object obj, long j10, byte b10) {
        if (g4.f14239h) {
            g4.d(obj, j10, b10);
        } else {
            g4.e(obj, j10, b10);
        }
    }

    @Override // com.google.android.gms.internal.play_billing.f4
    public final void e(Object obj, long j10, double d10) {
        this.f14222a.putLong(obj, j10, Double.doubleToLongBits(d10));
    }

    @Override // com.google.android.gms.internal.play_billing.f4
    public final void f(Object obj, long j10, float f10) {
        this.f14222a.putInt(obj, j10, Float.floatToIntBits(f10));
    }

    @Override // com.google.android.gms.internal.play_billing.f4
    public final boolean g(Object obj, long j10) {
        if (g4.f14239h) {
            return g4.y(obj, j10);
        }
        return g4.z(obj, j10);
    }
}
