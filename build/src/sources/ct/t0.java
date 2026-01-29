package ct;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class t0 extends a {

    /* renamed from: e  reason: collision with root package name */
    private final y f21406e;

    /* renamed from: f  reason: collision with root package name */
    private final char[] f21407f;

    /* renamed from: g  reason: collision with root package name */
    protected int f21408g;

    /* renamed from: h  reason: collision with root package name */
    private final d f21409h;

    public t0(y reader, char[] buffer) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        Intrinsics.checkNotNullParameter(buffer, "buffer");
        this.f21406e = reader;
        this.f21407f = buffer;
        this.f21408g = IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        this.f21409h = new d(buffer);
        U(0);
    }

    private final void U(int i10) {
        char[] b10 = D().b();
        if (i10 != 0) {
            int i11 = this.f21321a;
            kotlin.collections.i.g(b10, b10, 0, i11, i11 + i10);
        }
        int length = D().length();
        while (true) {
            if (i10 == length) {
                break;
            }
            int a10 = this.f21406e.a(b10, i10, length - i10);
            if (a10 == -1) {
                D().f(i10);
                this.f21408g = -1;
                break;
            }
            i10 += a10;
        }
        this.f21321a = 0;
    }

    @Override // ct.a
    public String F(String keyToMatch, boolean z10) {
        Intrinsics.checkNotNullParameter(keyToMatch, "keyToMatch");
        return null;
    }

    @Override // ct.a
    public int I(int i10) {
        if (i10 < D().length()) {
            return i10;
        }
        this.f21321a = i10;
        u();
        if (this.f21321a == 0 && D().length() != 0) {
            return 0;
        }
        return -1;
    }

    @Override // ct.a
    public int K() {
        int I;
        char charAt;
        int i10 = this.f21321a;
        while (true) {
            I = I(i10);
            if (I == -1 || !((charAt = D().charAt(I)) == ' ' || charAt == '\n' || charAt == '\r' || charAt == '\t')) {
                break;
            }
            i10 = I + 1;
        }
        this.f21321a = I;
        return I;
    }

    @Override // ct.a
    public String L(int i10, int i11) {
        return D().e(i10, i11);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // ct.a
    /* renamed from: S */
    public d D() {
        return this.f21409h;
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
        j.f21357c.c(this.f21407f);
    }

    @Override // ct.a
    protected void d(int i10, int i11) {
        StringBuilder C = C();
        C.append(D().b(), i10, i11 - i10);
        Intrinsics.checkNotNullExpressionValue(C, "append(...)");
    }

    @Override // ct.a
    public boolean e() {
        u();
        int i10 = this.f21321a;
        while (true) {
            int I = I(i10);
            if (I != -1) {
                char charAt = D().charAt(I);
                if (charAt != ' ' && charAt != '\n' && charAt != '\r' && charAt != '\t') {
                    this.f21321a = I;
                    return E(charAt);
                }
                i10 = I + 1;
            } else {
                this.f21321a = I;
                return false;
            }
        }
    }

    @Override // ct.a
    public String i() {
        l('\"');
        int i10 = this.f21321a;
        int T = T('\"', i10);
        if (T == -1) {
            int I = I(i10);
            if (I != -1) {
                return p(D(), this.f21321a, I);
            }
            a.z(this, (byte) 1, false, 2, null);
            throw new ir.h();
        }
        for (int i11 = i10; i11 < T; i11++) {
            if (D().charAt(i11) == '\\') {
                return p(D(), this.f21321a, i11);
            }
        }
        this.f21321a = T + 1;
        return L(i10, T);
    }

    @Override // ct.a
    public byte j() {
        u();
        d D = D();
        int i10 = this.f21321a;
        while (true) {
            int I = I(i10);
            if (I != -1) {
                int i11 = I + 1;
                byte a10 = b.a(D.charAt(I));
                if (a10 != 3) {
                    this.f21321a = i11;
                    return a10;
                }
                i10 = i11;
            } else {
                this.f21321a = I;
                return (byte) 10;
            }
        }
    }

    @Override // ct.a
    public void l(char c10) {
        u();
        d D = D();
        int i10 = this.f21321a;
        while (true) {
            int I = I(i10);
            if (I != -1) {
                int i11 = I + 1;
                char charAt = D.charAt(I);
                if (charAt != ' ' && charAt != '\n' && charAt != '\r' && charAt != '\t') {
                    this.f21321a = i11;
                    if (charAt == c10) {
                        return;
                    }
                    Q(c10);
                }
                i10 = i11;
            } else {
                this.f21321a = I;
                Q(c10);
                return;
            }
        }
    }

    @Override // ct.a
    public void u() {
        int length = D().length() - this.f21321a;
        if (length > this.f21408g) {
            return;
        }
        U(length);
    }
}
