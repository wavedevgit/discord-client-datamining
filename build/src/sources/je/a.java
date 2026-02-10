package je;

import ae.b;
import java.util.ArrayList;
import java.util.Collections;
import oe.h0;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a extends ae.f {

    /* renamed from: o  reason: collision with root package name */
    private final h0 f30910o;

    public a() {
        super("Mp4WebvttDecoder");
        this.f30910o = new h0();
    }

    private static ae.b B(h0 h0Var, int i10) {
        CharSequence charSequence = null;
        b.C0009b c0009b = null;
        while (i10 > 0) {
            if (i10 >= 8) {
                int q10 = h0Var.q();
                int q11 = h0Var.q();
                int i11 = q10 - 8;
                String F = w0.F(h0Var.e(), h0Var.f(), i11);
                h0Var.V(i11);
                i10 = (i10 - 8) - i11;
                if (q11 == 1937011815) {
                    c0009b = f.o(F);
                } else if (q11 == 1885436268) {
                    charSequence = f.q(null, F.trim(), Collections.EMPTY_LIST);
                }
            } else {
                throw new ae.i("Incomplete vtt cue box header found.");
            }
        }
        if (charSequence == null) {
            charSequence = "";
        }
        if (c0009b != null) {
            return c0009b.o(charSequence).a();
        }
        return f.l(charSequence);
    }

    @Override // ae.f
    protected ae.g z(byte[] bArr, int i10, boolean z10) {
        this.f30910o.S(bArr, i10);
        ArrayList arrayList = new ArrayList();
        while (this.f30910o.a() > 0) {
            if (this.f30910o.a() >= 8) {
                int q10 = this.f30910o.q();
                if (this.f30910o.q() == 1987343459) {
                    arrayList.add(B(this.f30910o, q10 - 8));
                } else {
                    this.f30910o.V(q10 - 8);
                }
            } else {
                throw new ae.i("Incomplete Mp4Webvtt Top Level box header found.");
            }
        }
        return new b(arrayList);
    }
}
