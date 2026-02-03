package dd;

import android.util.SparseArray;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.android.exoplayer2.Format;
import dd.i0;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class j implements i0.c {

    /* renamed from: a  reason: collision with root package name */
    private final int f21465a;

    /* renamed from: b  reason: collision with root package name */
    private final List f21466b;

    public j(int i10) {
        this(i10, ji.s.r());
    }

    private d0 c(i0.b bVar) {
        return new d0(e(bVar));
    }

    private k0 d(i0.b bVar) {
        return new k0(e(bVar));
    }

    private List e(i0.b bVar) {
        boolean z10;
        String str;
        int i10;
        List list;
        if (f(32)) {
            return this.f21466b;
        }
        ne.h0 h0Var = new ne.h0(bVar.f21459d);
        List list2 = this.f21466b;
        while (h0Var.a() > 0) {
            int H = h0Var.H();
            int f10 = h0Var.f() + h0Var.H();
            if (H == 134) {
                list2 = new ArrayList();
                int H2 = h0Var.H() & 31;
                for (int i11 = 0; i11 < H2; i11++) {
                    String E = h0Var.E(3);
                    int H3 = h0Var.H();
                    boolean z11 = true;
                    if ((H3 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    if (z10) {
                        i10 = H3 & 63;
                        str = "application/cea-708";
                    } else {
                        str = "application/cea-608";
                        i10 = 1;
                    }
                    byte H4 = (byte) h0Var.H();
                    h0Var.V(1);
                    if (z10) {
                        if ((H4 & 64) == 0) {
                            z11 = false;
                        }
                        list = ne.f.b(z11);
                    } else {
                        list = null;
                    }
                    list2.add(new Format.b().g0(str).X(E).H(i10).V(list).G());
                }
            }
            h0Var.U(f10);
        }
        return list2;
    }

    private boolean f(int i10) {
        if ((i10 & this.f21465a) != 0) {
            return true;
        }
        return false;
    }

    @Override // dd.i0.c
    public SparseArray a() {
        return new SparseArray();
    }

    @Override // dd.i0.c
    public i0 b(int i10, i0.b bVar) {
        if (i10 != 2) {
            if (i10 != 3 && i10 != 4) {
                if (i10 != 21) {
                    if (i10 != 27) {
                        if (i10 != 36) {
                            if (i10 != 89) {
                                if (i10 != 138) {
                                    if (i10 != 172) {
                                        if (i10 != 257) {
                                            if (i10 != 134) {
                                                if (i10 != 135) {
                                                    switch (i10) {
                                                        case 15:
                                                            if (f(2)) {
                                                                return null;
                                                            }
                                                            return new w(new i(false, bVar.f21457b));
                                                        case 16:
                                                            return new w(new o(d(bVar)));
                                                        case 17:
                                                            if (f(2)) {
                                                                return null;
                                                            }
                                                            return new w(new s(bVar.f21457b));
                                                        default:
                                                            switch (i10) {
                                                                case IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT /* 128 */:
                                                                    break;
                                                                case 129:
                                                                    break;
                                                                case 130:
                                                                    if (!f(64)) {
                                                                        return null;
                                                                    }
                                                                    break;
                                                                default:
                                                                    return null;
                                                            }
                                                    }
                                                }
                                                return new w(new c(bVar.f21457b));
                                            } else if (f(16)) {
                                                return null;
                                            } else {
                                                return new c0(new v("application/x-scte35"));
                                            }
                                        }
                                        return new c0(new v("application/vnd.dvb.ait"));
                                    }
                                    return new w(new f(bVar.f21457b));
                                }
                                return new w(new k(bVar.f21457b));
                            }
                            return new w(new l(bVar.f21458c));
                        }
                        return new w(new q(c(bVar)));
                    } else if (f(4)) {
                        return null;
                    } else {
                        return new w(new p(c(bVar), f(1), f(8)));
                    }
                }
                return new w(new r());
            }
            return new w(new t(bVar.f21457b));
        }
        return new w(new n(d(bVar)));
    }

    public j(int i10, List list) {
        this.f21465a = i10;
        this.f21466b = list;
    }
}
