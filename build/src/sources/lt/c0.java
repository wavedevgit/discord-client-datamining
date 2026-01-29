package lt;

import java.util.List;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public enum c0 implements h {
    INSTANCE;

    @Override // lt.h
    public h a(c cVar, jt.d dVar, int i10) {
        return INSTANCE;
    }

    @Override // lt.h
    public int d(jt.o oVar, Appendable appendable, jt.d dVar, Set set, boolean z10) {
        int i10;
        if (oVar.l()) {
            if (appendable instanceof CharSequence) {
                i10 = ((CharSequence) appendable).length();
            } else {
                i10 = -1;
            }
            String a10 = oVar.v().a();
            appendable.append(a10);
            int length = a10.length();
            if (i10 != -1 && length > 0 && set != null) {
                set.add(new g(b0.TIMEZONE_ID, i10, i10 + length));
            }
            return length;
        }
        throw new IllegalArgumentException("Cannot extract timezone id from: " + oVar);
    }

    @Override // lt.h
    public void e(CharSequence charSequence, s sVar, jt.d dVar, t tVar, boolean z10) {
        char charAt;
        char charAt2;
        int length = charSequence.length();
        int f10 = sVar.f();
        if (f10 >= length) {
            sVar.k(f10, "Missing timezone name.");
            return;
        }
        StringBuilder sb2 = new StringBuilder();
        int i10 = f10;
        while (i10 < length && (((charAt2 = charSequence.charAt(i10)) >= 'a' && charAt2 <= 'z') || ((charAt2 >= 'A' && charAt2 <= 'Z') || charAt2 == '-' || charAt2 == '_' || charAt2 == '/'))) {
            sb2.append(charAt2);
            i10++;
        }
        if (!Character.isLetter(sb2.charAt(sb2.length() - 1))) {
            sb2.deleteCharAt(sb2.length() - 1);
            i10--;
        }
        String sb3 = sb2.toString();
        if (sb3.isEmpty()) {
            sVar.k(f10, "Missing valid timezone id.");
        } else if (sb3.startsWith("Etc/GMT")) {
            sVar.k(f10, "Inverse Etc/GMT-Offsets are not supported, use UTC-Offsets instead.");
        } else if (sb3.equals("Z")) {
            tVar.I(b0.TIMEZONE_OFFSET, net.time4j.tz.p.f40908v);
            sVar.l(i10);
        } else if (!sb3.equals("UTC") && !sb3.equals("GMT") && !sb3.equals("UT")) {
            List u10 = net.time4j.tz.l.u("INCLUDE_ALIAS");
            int size = u10.size() - 1;
            int i11 = 0;
            while (i11 <= size) {
                int i12 = (i11 + size) >>> 1;
                net.time4j.tz.k kVar = (net.time4j.tz.k) u10.get(i12);
                int compareTo = kVar.a().compareTo(sb3);
                if (compareTo < 0) {
                    i11 = i12 + 1;
                } else if (compareTo > 0) {
                    size = i12 - 1;
                } else {
                    tVar.I(b0.TIMEZONE_ID, kVar);
                    sVar.l(i10);
                    return;
                }
            }
            sVar.k(f10, "Cannot parse to timezone id: " + sb3);
        } else if (length > i10 && ((charAt = charSequence.charAt(i10)) == '+' || charAt == '-')) {
            sVar.l(i10);
            e0.f37571q.e(charSequence, sVar, dVar, tVar, z10);
        } else {
            tVar.I(b0.TIMEZONE_OFFSET, net.time4j.tz.p.f40908v);
            sVar.l(i10);
        }
    }

    @Override // lt.h
    public boolean f() {
        return false;
    }

    @Override // lt.h
    public h g(jt.p pVar) {
        return INSTANCE;
    }

    @Override // lt.h
    public jt.p getElement() {
        return b0.TIMEZONE_ID;
    }
}
