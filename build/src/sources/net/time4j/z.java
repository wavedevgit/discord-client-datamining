package net.time4j;

import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public enum z implements jt.n {
    AM,
    PM;

    public static z e(int i10) {
        if (i10 >= 0 && i10 <= 24) {
            if (i10 >= 12 && i10 != 24) {
                return PM;
            }
            return AM;
        }
        throw new IllegalArgumentException("Hour of day out of range: " + i10);
    }

    public String a(Locale locale) {
        return d(locale, kt.v.WIDE, kt.m.FORMAT);
    }

    public String d(Locale locale, kt.v vVar, kt.m mVar) {
        return kt.b.d(locale).h(vVar, mVar).f(this);
    }

    @Override // jt.n
    /* renamed from: f */
    public boolean test(gt.g gVar) {
        int h10 = gVar.h();
        if (this == AM) {
            if (h10 < 12 || h10 == 24) {
                return true;
            }
            return false;
        } else if (h10 >= 12 && h10 < 24) {
            return true;
        } else {
            return false;
        }
    }
}
