package net.time4j;

import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public enum z implements rt.n {
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
        return d(locale, st.v.WIDE, st.m.FORMAT);
    }

    public String d(Locale locale, st.v vVar, st.m mVar) {
        return st.b.d(locale).h(vVar, mVar).f(this);
    }

    @Override // rt.n
    /* renamed from: f */
    public boolean test(pt.g gVar) {
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
