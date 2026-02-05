package jt;

import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b1 extends z0 {
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public b1(String source) {
        super(source);
        Intrinsics.checkNotNullParameter(source, "source");
    }

    @Override // jt.a
    public byte G() {
        String D = D();
        int K = K();
        if (K < D.length() && K != -1) {
            this.f31296a = K;
            return b.a(D.charAt(K));
        }
        return (byte) 10;
    }

    @Override // jt.z0, jt.a
    public int K() {
        int i10;
        int i11 = this.f31296a;
        if (i11 == -1) {
            return i11;
        }
        String D = D();
        while (i11 < D.length()) {
            char charAt = D.charAt(i11);
            if (charAt != ' ' && charAt != '\n' && charAt != '\r' && charAt != '\t') {
                if (charAt != '/' || (i10 = i11 + 1) >= D.length()) {
                    break;
                }
                char charAt2 = D.charAt(i10);
                if (charAt2 != '*') {
                    if (charAt2 != '/') {
                        break;
                    }
                    i11 = StringsKt.h0(D, '\n', i11 + 2, false, 4, null);
                    if (i11 == -1) {
                        i11 = D.length();
                    }
                } else {
                    int i02 = StringsKt.i0(D, "*/", i11 + 2, false, 4, null);
                    if (i02 != -1) {
                        i11 = i02 + 2;
                    } else {
                        this.f31296a = D.length();
                        a.x(this, "Expected end of the block comment: \"*/\", but had EOF instead", 0, null, 6, null);
                        throw new or.h();
                    }
                }
            }
            i11++;
        }
        this.f31296a = i11;
        return i11;
    }

    @Override // jt.z0, jt.a
    public boolean e() {
        int K = K();
        if (K < D().length() && K != -1) {
            return E(D().charAt(K));
        }
        return false;
    }

    @Override // jt.z0, jt.a
    public byte j() {
        String D = D();
        int K = K();
        if (K < D.length() && K != -1) {
            this.f31296a = K + 1;
            return b.a(D.charAt(K));
        }
        return (byte) 10;
    }

    @Override // jt.z0, jt.a
    public void l(char c10) {
        String D = D();
        int K = K();
        if (K >= D.length() || K == -1) {
            this.f31296a = -1;
            Q(c10);
        }
        char charAt = D.charAt(K);
        this.f31296a = K + 1;
        if (charAt == c10) {
            return;
        }
        Q(c10);
    }
}
