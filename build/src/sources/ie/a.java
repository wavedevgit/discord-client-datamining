package ie;

import java.util.ArrayList;
import java.util.Collections;
import ne.h0;
import ne.w0;
import zd.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a extends zd.f {

    /* renamed from: o  reason: collision with root package name */
    private final h0 f26658o;

    public a() {
        super("Mp4WebvttDecoder");
        this.f26658o = new h0();
    }

    private static zd.b B(h0 h0Var, int i10) {
        CharSequence charSequence = null;
        b.C0770b c0770b = null;
        while (i10 > 0) {
            if (i10 >= 8) {
                int q10 = h0Var.q();
                int q11 = h0Var.q();
                int i11 = q10 - 8;
                String F = w0.F(h0Var.e(), h0Var.f(), i11);
                h0Var.V(i11);
                i10 = (i10 - 8) - i11;
                if (q11 == 1937011815) {
                    c0770b = f.o(F);
                } else if (q11 == 1885436268) {
                    charSequence = f.q(null, F.trim(), Collections.EMPTY_LIST);
                }
            } else {
                throw new zd.i("Incomplete vtt cue box header found.");
            }
        }
        if (charSequence == null) {
            charSequence = "";
        }
        if (c0770b != null) {
            return c0770b.o(charSequence).a();
        }
        return f.l(charSequence);
    }

    @Override // zd.f
    protected zd.g z(byte[] bArr, int i10, boolean z10) {
        this.f26658o.S(bArr, i10);
        ArrayList arrayList = new ArrayList();
        while (this.f26658o.a() > 0) {
            if (this.f26658o.a() >= 8) {
                int q10 = this.f26658o.q();
                if (this.f26658o.q() == 1987343459) {
                    arrayList.add(B(this.f26658o, q10 - 8));
                } else {
                    this.f26658o.V(q10 - 8);
                }
            } else {
                throw new zd.i("Incomplete Mp4Webvtt Top Level box header found.");
            }
        }
        return new b(arrayList);
    }
}
