package ie;

import android.text.TextUtils;
import java.util.ArrayList;
import lc.l0;
import ne.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h extends zd.f {

    /* renamed from: o  reason: collision with root package name */
    private final h0 f26708o;

    /* renamed from: p  reason: collision with root package name */
    private final c f26709p;

    public h() {
        super("WebvttDecoder");
        this.f26708o = new h0();
        this.f26709p = new c();
    }

    private static int B(h0 h0Var) {
        int i10 = -1;
        int i11 = 0;
        while (i10 == -1) {
            i11 = h0Var.f();
            String s10 = h0Var.s();
            if (s10 == null) {
                i10 = 0;
            } else if ("STYLE".equals(s10)) {
                i10 = 2;
            } else if (s10.startsWith("NOTE")) {
                i10 = 1;
            } else {
                i10 = 3;
            }
        }
        h0Var.U(i11);
        return i10;
    }

    private static void C(h0 h0Var) {
        do {
        } while (!TextUtils.isEmpty(h0Var.s()));
    }

    @Override // zd.f
    protected zd.g z(byte[] bArr, int i10, boolean z10) {
        e n10;
        this.f26708o.S(bArr, i10);
        ArrayList arrayList = new ArrayList();
        try {
            i.e(this.f26708o);
            do {
            } while (!TextUtils.isEmpty(this.f26708o.s()));
            ArrayList arrayList2 = new ArrayList();
            while (true) {
                int B = B(this.f26708o);
                if (B != 0) {
                    if (B == 1) {
                        C(this.f26708o);
                    } else if (B == 2) {
                        if (arrayList2.isEmpty()) {
                            this.f26708o.s();
                            arrayList.addAll(this.f26709p.d(this.f26708o));
                        } else {
                            throw new zd.i("A style block was found after the first cue.");
                        }
                    } else if (B == 3 && (n10 = f.n(this.f26708o, arrayList)) != null) {
                        arrayList2.add(n10);
                    }
                } else {
                    return new k(arrayList2);
                }
            }
        } catch (l0 e10) {
            throw new zd.i(e10);
        }
    }
}
