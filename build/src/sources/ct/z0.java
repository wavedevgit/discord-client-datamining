package ct;

import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class z0 extends a {

    /* renamed from: e  reason: collision with root package name */
    private final String f21435e;

    public z0(String source) {
        Intrinsics.checkNotNullParameter(source, "source");
        this.f21435e = source;
    }

    @Override // ct.a
    public String F(String keyToMatch, boolean z10) {
        Intrinsics.checkNotNullParameter(keyToMatch, "keyToMatch");
        int i10 = this.f21321a;
        try {
            if (j() == 6 && Intrinsics.areEqual(H(z10), keyToMatch)) {
                t();
                if (j() == 5) {
                    return H(z10);
                }
            }
            return null;
        } finally {
            this.f21321a = i10;
            t();
        }
    }

    @Override // ct.a
    public int I(int i10) {
        if (i10 < D().length()) {
            return i10;
        }
        return -1;
    }

    @Override // ct.a
    public int K() {
        char charAt;
        int i10 = this.f21321a;
        if (i10 == -1) {
            return i10;
        }
        String D = D();
        while (i10 < D.length() && ((charAt = D.charAt(i10)) == ' ' || charAt == '\n' || charAt == '\r' || charAt == '\t')) {
            i10++;
        }
        this.f21321a = i10;
        return i10;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // ct.a
    /* renamed from: S */
    public String D() {
        return this.f21435e;
    }

    @Override // ct.a
    public boolean e() {
        int i10 = this.f21321a;
        if (i10 == -1) {
            return false;
        }
        String D = D();
        while (i10 < D.length()) {
            char charAt = D.charAt(i10);
            if (charAt != ' ' && charAt != '\n' && charAt != '\r' && charAt != '\t') {
                this.f21321a = i10;
                return E(charAt);
            }
            i10++;
        }
        this.f21321a = i10;
        return false;
    }

    @Override // ct.a
    public String i() {
        l('\"');
        int i10 = this.f21321a;
        int h02 = StringsKt.h0(D(), '\"', i10, false, 4, null);
        if (h02 != -1) {
            for (int i11 = i10; i11 < h02; i11++) {
                if (D().charAt(i11) == '\\') {
                    return p(D(), this.f21321a, i11);
                }
            }
            this.f21321a = h02 + 1;
            String substring = D().substring(i10, h02);
            Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
            return substring;
        }
        q();
        y((byte) 1, false);
        throw new ir.h();
    }

    @Override // ct.a
    public byte j() {
        String D = D();
        int i10 = this.f21321a;
        while (i10 != -1 && i10 < D.length()) {
            int i11 = i10 + 1;
            char charAt = D.charAt(i10);
            if (charAt != ' ' && charAt != '\n' && charAt != '\r' && charAt != '\t') {
                this.f21321a = i11;
                return b.a(charAt);
            }
            i10 = i11;
        }
        this.f21321a = D.length();
        return (byte) 10;
    }

    @Override // ct.a
    public void l(char c10) {
        if (this.f21321a == -1) {
            Q(c10);
        }
        String D = D();
        int i10 = this.f21321a;
        while (i10 < D.length()) {
            int i11 = i10 + 1;
            char charAt = D.charAt(i10);
            if (charAt != ' ' && charAt != '\n' && charAt != '\r' && charAt != '\t') {
                this.f21321a = i11;
                if (charAt == c10) {
                    return;
                }
                Q(c10);
            }
            i10 = i11;
        }
        this.f21321a = -1;
        Q(c10);
    }
}
