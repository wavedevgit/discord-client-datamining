package hd;

import com.google.android.exoplayer2.metadata.Metadata;
import gd.c;
import gd.e;
import ii.d;
import java.nio.ByteBuffer;
import java.util.ArrayList;
import ne.g0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b extends e {
    private static Metadata c(g0 g0Var) {
        g0Var.r(12);
        int d10 = (g0Var.d() + g0Var.h(12)) - 4;
        g0Var.r(44);
        g0Var.s(g0Var.h(12));
        g0Var.r(16);
        ArrayList arrayList = new ArrayList();
        while (true) {
            String str = null;
            if (g0Var.d() >= d10) {
                break;
            }
            g0Var.r(48);
            int h10 = g0Var.h(8);
            g0Var.r(4);
            int d11 = g0Var.d() + g0Var.h(12);
            String str2 = null;
            while (g0Var.d() < d11) {
                int h11 = g0Var.h(8);
                int h12 = g0Var.h(8);
                int d12 = g0Var.d() + h12;
                if (h11 == 2) {
                    int h13 = g0Var.h(16);
                    g0Var.r(8);
                    if (h13 != 3) {
                    }
                    while (g0Var.d() < d12) {
                        str = g0Var.l(g0Var.h(8), d.f28405a);
                        int h14 = g0Var.h(8);
                        for (int i10 = 0; i10 < h14; i10++) {
                            g0Var.s(g0Var.h(8));
                        }
                    }
                } else if (h11 == 21) {
                    str2 = g0Var.l(h12, d.f28405a);
                }
                g0Var.p(d12 * 8);
            }
            g0Var.p(d11 * 8);
            if (str != null && str2 != null) {
                arrayList.add(new a(h10, str + str2));
            }
        }
        if (arrayList.isEmpty()) {
            return null;
        }
        return new Metadata(arrayList);
    }

    @Override // gd.e
    protected Metadata b(c cVar, ByteBuffer byteBuffer) {
        if (byteBuffer.get() == 116) {
            return c(new g0(byteBuffer.array(), byteBuffer.limit()));
        }
        return null;
    }
}
