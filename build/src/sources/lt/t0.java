package lt;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class t0 extends a {

    /* renamed from: e  reason: collision with root package name */
    private final y f36765e;

    /* renamed from: f  reason: collision with root package name */
    private final char[] f36766f;

    /* renamed from: g  reason: collision with root package name */
    protected int f36767g;

    /* renamed from: h  reason: collision with root package name */
    private final d f36768h;

    public t0(y reader, char[] buffer) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        Intrinsics.checkNotNullParameter(buffer, "buffer");
        this.f36765e = reader;
        this.f36766f = buffer;
        this.f36767g = IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        this.f36768h = new d(buffer);
        U(0);
    }

    private final void U(int i10) {
        char[] b10 = D().b();
        if (i10 != 0) {
            int i11 = this.f36680a;
            kotlin.collections.i.g(b10, b10, 0, i11, i11 + i10);
        }
        int length = D().length();
        while (true) {
            if (i10 == length) {
                break;
            }
            int a10 = this.f36765e.a(b10, i10, length - i10);
            if (a10 == -1) {
                D().f(i10);
                this.f36767g = -1;
                break;
            }
            i10 += a10;
        }
        this.f36680a = 0;
    }

    @Override // lt.a
    public String F(String keyToMatch, boolean z10) {
        Intrinsics.checkNotNullParameter(keyToMatch, "keyToMatch");
        return null;
    }

    @Override // lt.a
    public int I(int i10) {
        if (i10 < D().length()) {
            return i10;
        }
        this.f36680a = i10;
        u();
        if (this.f36680a == 0 && D().length() != 0) {
            return 0;
        }
        return -1;
    }

    @Override // lt.a
    public int K() {
        int I;
        char charAt;
        int i10 = this.f36680a;
        while (true) {
            I = I(i10);
            if (I == -1 || !((charAt = D().charAt(I)) == ' ' || charAt == '\n' || charAt == '\r' || charAt == '\t')) {
                break;
            }
            i10 = I + 1;
        }
        this.f36680a = I;
        return I;
    }

    @Override // lt.a
    public String L(int i10, int i11) {
        return D().e(i10, i11);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // lt.a
    /* renamed from: S */
    public d D() {
        return this.f36768h;
    }

    public int T(char c10, int i10) {
        d D = D();
        int length = D.length();
        while (i10 < length) {
            if (D.charAt(i10) == c10) {
                return i10;
            }
            i10++;
        }
        return -1;
    }

    public final void V() {
        j.f36716c.c(this.f36766f);
    }

    @Override // lt.a
    protected void d(int i10, int i11) {
        StringBuilder C = C();
        C.append(D().b(), i10, i11 - i10);
        Intrinsics.checkNotNullExpressionValue(C, "append(...)");
    }

    @Override // lt.a
    public boolean e() {
        u();
        int i10 = this.f36680a;
        while (true) {
            int I = I(i10);
            if (I != -1) {
                char charAt = D().charAt(I);
                if (charAt != ' ' && charAt != '\n' && charAt != '\r' && charAt != '\t') {
                    this.f36680a = I;
                    return E(charAt);
                }
                i10 = I + 1;
            } else {
                this.f36680a = I;
                return false;
            }
        }
    }

    @Override // lt.a
    public String i() {
        l('\"');
        int i10 = this.f36680a;
        int T = T('\"', i10);
        if (T == -1) {
            int I = I(i10);
            if (I != -1) {
                return p(D(), this.f36680a, I);
            }
            a.z(this, (byte) 1, false, 2, null);
            throw new qr.h();
        }
        for (int i11 = i10; i11 < T; i11++) {
            if (D().charAt(i11) == '\\') {
                return p(D(), this.f36680a, i11);
            }
        }
        this.f36680a = T + 1;
        return L(i10, T);
    }

    @Override // lt.a
    public byte j() {
        u();
        d D = D();
        int i10 = this.f36680a;
        while (true) {
            int I = I(i10);
            if (I != -1) {
                int i11 = I + 1;
                byte a10 = b.a(D.charAt(I));
                if (a10 != 3) {
                    this.f36680a = i11;
                    return a10;
                }
                i10 = i11;
            } else {
                this.f36680a = I;
                return (byte) 10;
            }
        }
    }

    @Override // lt.a
    public void l(char c10) {
        u();
        d D = D();
        int i10 = this.f36680a;
        while (true) {
            int I = I(i10);
            if (I != -1) {
                int i11 = I + 1;
                char charAt = D.charAt(I);
                if (charAt != ' ' && charAt != '\n' && charAt != '\r' && charAt != '\t') {
                    this.f36680a = i11;
                    if (charAt == c10) {
                        return;
                    }
                    Q(c10);
                }
                i10 = i11;
            } else {
                this.f36680a = I;
                Q(c10);
                return;
            }
        }
    }

    @Override // lt.a
    public void u() {
        int length = D().length() - this.f36680a;
        if (length > this.f36767g) {
            return;
        }
        U(length);
    }
}
