package bd;

import java.util.ArrayList;
import java.util.List;
import lc.l0;
import md.c;
import ne.h0;
import tc.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class m {

    /* renamed from: d  reason: collision with root package name */
    private static final ii.p f6497d = ii.p.d(':');

    /* renamed from: e  reason: collision with root package name */
    private static final ii.p f6498e = ii.p.d('*');

    /* renamed from: a  reason: collision with root package name */
    private final List f6499a = new ArrayList();

    /* renamed from: b  reason: collision with root package name */
    private int f6500b = 0;

    /* renamed from: c  reason: collision with root package name */
    private int f6501c;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final int f6502a;

        /* renamed from: b  reason: collision with root package name */
        public final long f6503b;

        /* renamed from: c  reason: collision with root package name */
        public final int f6504c;

        public a(int i10, long j10, int i11) {
            this.f6502a = i10;
            this.f6503b = j10;
            this.f6504c = i11;
        }
    }

    private void a(tc.l lVar, y yVar) {
        h0 h0Var = new h0(8);
        lVar.readFully(h0Var.e(), 0, 8);
        this.f6501c = h0Var.u() + 8;
        if (h0Var.q() != 1397048916) {
            yVar.f49998a = 0L;
            return;
        }
        yVar.f49998a = lVar.getPosition() - (this.f6501c - 12);
        this.f6500b = 2;
    }

    private static int b(String str) {
        str.getClass();
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1711564334:
                if (str.equals("SlowMotion_Data")) {
                    c10 = 0;
                    break;
                }
                break;
            case -1332107749:
                if (str.equals("Super_SlowMotion_Edit_Data")) {
                    c10 = 1;
                    break;
                }
                break;
            case -1251387154:
                if (str.equals("Super_SlowMotion_Data")) {
                    c10 = 2;
                    break;
                }
                break;
            case -830665521:
                if (str.equals("Super_SlowMotion_Deflickering_On")) {
                    c10 = 3;
                    break;
                }
                break;
            case 1760745220:
                if (str.equals("Super_SlowMotion_BGM")) {
                    c10 = 4;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                return 2192;
            case 1:
                return 2819;
            case 2:
                return 2816;
            case 3:
                return 2820;
            case 4:
                return 2817;
            default:
                throw l0.a("Invalid SEF name", null);
        }
    }

    private void d(tc.l lVar, y yVar) {
        long length = lVar.getLength();
        int i10 = this.f6501c - 20;
        h0 h0Var = new h0(i10);
        lVar.readFully(h0Var.e(), 0, i10);
        for (int i11 = 0; i11 < i10 / 12; i11++) {
            h0Var.V(2);
            short w10 = h0Var.w();
            if (w10 != 2192 && w10 != 2816 && w10 != 2817 && w10 != 2819 && w10 != 2820) {
                h0Var.V(8);
            } else {
                this.f6499a.add(new a(w10, (length - this.f6501c) - h0Var.u(), h0Var.u()));
            }
        }
        if (this.f6499a.isEmpty()) {
            yVar.f49998a = 0L;
            return;
        }
        this.f6500b = 3;
        yVar.f49998a = ((a) this.f6499a.get(0)).f6503b;
    }

    private void e(tc.l lVar, List list) {
        long position = lVar.getPosition();
        int length = (int) ((lVar.getLength() - lVar.getPosition()) - this.f6501c);
        h0 h0Var = new h0(length);
        lVar.readFully(h0Var.e(), 0, length);
        for (int i10 = 0; i10 < this.f6499a.size(); i10++) {
            a aVar = (a) this.f6499a.get(i10);
            h0Var.U((int) (aVar.f6503b - position));
            h0Var.V(4);
            int u10 = h0Var.u();
            int b10 = b(h0Var.E(u10));
            int i11 = aVar.f6504c - (u10 + 8);
            if (b10 != 2192) {
                if (b10 != 2816 && b10 != 2817 && b10 != 2819 && b10 != 2820) {
                    throw new IllegalStateException();
                }
            } else {
                list.add(f(h0Var, i11));
            }
        }
    }

    private static md.c f(h0 h0Var, int i10) {
        ArrayList arrayList = new ArrayList();
        List f10 = f6498e.f(h0Var.E(i10));
        for (int i11 = 0; i11 < f10.size(); i11++) {
            List f11 = f6497d.f((CharSequence) f10.get(i11));
            if (f11.size() == 3) {
                try {
                    arrayList.add(new c.b(Long.parseLong((String) f11.get(0)), Long.parseLong((String) f11.get(1)), 1 << (Integer.parseInt((String) f11.get(2)) - 1)));
                } catch (NumberFormatException e10) {
                    throw l0.a(null, e10);
                }
            } else {
                throw l0.a(null, null);
            }
        }
        return new md.c(arrayList);
    }

    public int c(tc.l lVar, y yVar, List list) {
        int i10 = this.f6500b;
        long j10 = 0;
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        e(lVar, list);
                        yVar.f49998a = 0L;
                    } else {
                        throw new IllegalStateException();
                    }
                } else {
                    d(lVar, yVar);
                }
            } else {
                a(lVar, yVar);
            }
        } else {
            long length = lVar.getLength();
            if (length != -1 && length >= 8) {
                j10 = length - 8;
            }
            yVar.f49998a = j10;
            this.f6500b = 1;
        }
        return 1;
    }

    public void g() {
        this.f6499a.clear();
        this.f6500b = 0;
    }
}
