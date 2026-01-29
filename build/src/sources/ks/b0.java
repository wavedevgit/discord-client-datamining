package ks;

import js.j0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b0 extends js.b0 implements j0 {
    public b0(int i10) {
        super(1, Integer.MAX_VALUE, is.a.f31126e);
        b(Integer.valueOf(i10));
    }

    @Override // js.j0
    /* renamed from: Y */
    public Integer getValue() {
        Integer valueOf;
        synchronized (this) {
            valueOf = Integer.valueOf(((Number) L()).intValue());
        }
        return valueOf;
    }

    public final boolean Z(int i10) {
        boolean b10;
        synchronized (this) {
            b10 = b(Integer.valueOf(((Number) L()).intValue() + i10));
        }
        return b10;
    }
}
