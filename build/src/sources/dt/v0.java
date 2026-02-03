package dt;

import kotlin.Pair;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class v0 extends t0 {
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public v0(y reader, char[] buffer) {
        super(reader, buffer);
        Intrinsics.checkNotNullParameter(reader, "reader");
        Intrinsics.checkNotNullParameter(buffer, "buffer");
    }

    private final Pair W(int i10) {
        int i11 = i10 + 2;
        char charAt = D().charAt(i10 + 1);
        if (charAt != '*') {
            if (charAt != '/') {
                return jr.v.a(Integer.valueOf(i10), Boolean.FALSE);
            }
            int i12 = i11;
            while (i10 != -1) {
                int h02 = StringsKt.h0(D(), '\n', i12, false, 4, null);
                if (h02 == -1) {
                    i12 = I(D().length());
                    i10 = i12;
                } else {
                    return jr.v.a(Integer.valueOf(h02 + 1), Boolean.TRUE);
                }
            }
            return jr.v.a(-1, Boolean.TRUE);
        }
        boolean z10 = false;
        int i13 = i11;
        while (i10 != -1) {
            int i02 = StringsKt.i0(D(), "*/", i13, false, 4, null);
            if (i02 != -1) {
                return jr.v.a(Integer.valueOf(i02 + 2), Boolean.TRUE);
            }
            if (D().charAt(D().length() - 1) != '*') {
                i13 = I(D().length());
            } else {
                i13 = X(D().length() - 1);
                if (z10) {
                    break;
                }
                z10 = true;
            }
            i10 = i13;
        }
        this.f22380a = D().length();
        a.x(this, "Expected end of the block comment: \"*/\", but had EOF instead", 0, null, 6, null);
        throw new jr.h();
    }

    private final int X(int i10) {
        if (D().length() - i10 > this.f22467g) {
            return i10;
        }
        this.f22380a = i10;
        u();
        if (this.f22380a == 0 && D().length() != 0) {
            return 0;
        }
        return -1;
    }

    @Override // dt.a
    public byte G() {
        u();
        d D = D();
        int K = K();
        if (K < D.length() && K != -1) {
            this.f22380a = K;
            return b.a(D.charAt(K));
        }
        return (byte) 10;
    }

    @Override // dt.t0, dt.a
    public int K() {
        int I;
        int i10 = this.f22380a;
        while (true) {
            I = I(i10);
            if (I != -1) {
                char charAt = D().charAt(I);
                if (charAt != ' ' && charAt != '\n' && charAt != '\r' && charAt != '\t') {
                    if (charAt != '/' || I + 1 >= D().length()) {
                        break;
                    }
                    Pair W = W(I);
                    int intValue = ((Number) W.a()).intValue();
                    if (!((Boolean) W.b()).booleanValue()) {
                        I = intValue;
                        break;
                    }
                    i10 = intValue;
                } else {
                    i10 = I + 1;
                }
            } else {
                break;
            }
        }
        this.f22380a = I;
        return I;
    }

    @Override // dt.t0, dt.a
    public boolean e() {
        u();
        int K = K();
        if (K < D().length() && K != -1) {
            return E(D().charAt(K));
        }
        return false;
    }

    @Override // dt.t0, dt.a
    public byte j() {
        u();
        d D = D();
        int K = K();
        if (K < D.length() && K != -1) {
            this.f22380a = K + 1;
            return b.a(D.charAt(K));
        }
        return (byte) 10;
    }

    @Override // dt.t0, dt.a
    public void l(char c10) {
        u();
        d D = D();
        int K = K();
        if (K >= D.length() || K == -1) {
            this.f22380a = -1;
            Q(c10);
        }
        char charAt = D.charAt(K);
        this.f22380a = K + 1;
        if (charAt == c10) {
            return;
        }
        Q(c10);
    }
}
