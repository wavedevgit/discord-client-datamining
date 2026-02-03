package com.google.android.gms.internal.fido;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class r2 extends t2 {

    /* renamed from: e  reason: collision with root package name */
    final char[] f13709e;

    private r2(q2 q2Var) {
        super(q2Var, null);
        char[] cArr;
        this.f13709e = new char[IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING];
        cArr = q2Var.f13697b;
        k0.c(cArr.length == 16);
        for (int i10 = 0; i10 < 256; i10++) {
            this.f13709e[i10] = q2Var.a(i10 >>> 4);
            this.f13709e[i10 | IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER] = q2Var.a(i10 & 15);
        }
    }

    @Override // com.google.android.gms.internal.fido.t2, com.google.android.gms.internal.fido.u2
    final void a(Appendable appendable, byte[] bArr, int i10, int i11) {
        k0.e(0, i11, bArr.length);
        for (int i12 = 0; i12 < i11; i12++) {
            int i13 = bArr[i12] & 255;
            appendable.append(this.f13709e[i13]);
            appendable.append(this.f13709e[i13 | IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER]);
        }
    }

    @Override // com.google.android.gms.internal.fido.t2
    final u2 f(q2 q2Var, Character ch2) {
        return new r2(q2Var);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public r2(String str, String str2) {
        this(new q2("base16()", "0123456789ABCDEF".toCharArray()));
    }
}
