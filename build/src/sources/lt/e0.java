package lt;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e0 implements h {

    /* renamed from: q  reason: collision with root package name */
    static final e0 f37571q = new e0();

    /* renamed from: d  reason: collision with root package name */
    private final kt.e f37572d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f37573e;

    /* renamed from: i  reason: collision with root package name */
    private final List f37574i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f37575o;

    /* renamed from: p  reason: collision with root package name */
    private final kt.g f37576p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e0(kt.e eVar, boolean z10, List list) {
        if (eVar != null) {
            if (!list.isEmpty()) {
                ArrayList<String> arrayList = new ArrayList(list);
                for (String str : arrayList) {
                    if (str.trim().isEmpty()) {
                        throw new IllegalArgumentException("Zero offset must not be white-space-only.");
                    }
                }
                this.f37572d = eVar;
                this.f37573e = z10;
                this.f37574i = Collections.unmodifiableList(arrayList);
                this.f37575o = true;
                this.f37576p = kt.g.SMART;
                return;
            }
            throw new IllegalArgumentException("Missing zero offsets.");
        }
        throw new NullPointerException("Missing display mode.");
    }

    private static net.time4j.tz.p b(jt.o oVar, jt.d dVar) {
        jt.c cVar = kt.a.f36531d;
        if (dVar.a(cVar)) {
            net.time4j.tz.k kVar = (net.time4j.tz.k) dVar.c(cVar);
            if (kVar instanceof net.time4j.tz.p) {
                return (net.time4j.tz.p) kVar;
            }
            if (kVar != null) {
                throw new IllegalArgumentException("Use a timezone offset instead of [" + kVar.a() + "] when formatting [" + oVar + "].");
            }
        }
        throw new IllegalArgumentException("Cannot extract timezone offset from format attributes for: " + oVar);
    }

    private static int c(CharSequence charSequence, int i10, kt.g gVar) {
        char charAt;
        int i11 = 0;
        for (int i12 = 0; i12 < 2; i12++) {
            int i13 = i10 + i12;
            if (i13 >= charSequence.length()) {
                charAt = 0;
            } else {
                charAt = charSequence.charAt(i13);
            }
            if (charAt >= '0' && charAt <= '9') {
                i11 = (i11 * 10) + (charAt - '0');
            } else if (i12 != 0 && !gVar.e()) {
                return ~i11;
            } else {
                return -1000;
            }
        }
        return i11;
    }

    @Override // lt.h
    public h a(c cVar, jt.d dVar, int i10) {
        return new e0(this.f37572d, this.f37573e, this.f37574i, ((Boolean) dVar.b(kt.a.f36536i, Boolean.TRUE)).booleanValue(), (kt.g) dVar.b(kt.a.f36533f, kt.g.SMART));
    }

    @Override // lt.h
    public int d(jt.o oVar, Appendable appendable, jt.d dVar, Set set, boolean z10) {
        int i10;
        net.time4j.tz.k kVar;
        net.time4j.tz.p B;
        char c10;
        int i11;
        int i12;
        if (appendable instanceof CharSequence) {
            i10 = ((CharSequence) appendable).length();
        } else {
            i10 = -1;
        }
        if (oVar.l()) {
            kVar = oVar.v();
        } else {
            kVar = null;
        }
        if (kVar == null) {
            B = b(oVar, dVar);
        } else if (kVar instanceof net.time4j.tz.p) {
            B = (net.time4j.tz.p) kVar;
        } else if (oVar instanceof gt.f) {
            B = net.time4j.tz.l.N(kVar).B((gt.f) oVar);
        } else {
            throw new IllegalArgumentException("Cannot extract timezone offset from: " + oVar);
        }
        int l10 = B.l();
        int k10 = B.k();
        if ((l10 | k10) == 0) {
            String str = (String) this.f37574i.get(0);
            appendable.append(str);
            i12 = str.length();
        } else {
            if (l10 >= 0 && k10 >= 0) {
                c10 = '+';
            } else {
                c10 = '-';
            }
            appendable.append(c10);
            int abs = Math.abs(l10);
            int i13 = abs / 3600;
            int i14 = (abs / 60) % 60;
            int i15 = abs % 60;
            if (i13 < 10) {
                appendable.append('0');
                i11 = 2;
            } else {
                i11 = 1;
            }
            String valueOf = String.valueOf(i13);
            appendable.append(valueOf);
            int length = valueOf.length() + i11;
            kt.e eVar = this.f37572d;
            kt.e eVar2 = kt.e.SHORT;
            if (eVar != eVar2 || i14 != 0) {
                if (this.f37573e) {
                    appendable.append(':');
                    length++;
                }
                if (i14 < 10) {
                    appendable.append('0');
                    length++;
                }
                String valueOf2 = String.valueOf(i14);
                appendable.append(valueOf2);
                length += valueOf2.length();
                kt.e eVar3 = this.f37572d;
                if (eVar3 != eVar2 && eVar3 != kt.e.MEDIUM && (eVar3 == kt.e.FULL || (i15 | k10) != 0)) {
                    if (this.f37573e) {
                        appendable.append(':');
                        length++;
                    }
                    if (i15 < 10) {
                        appendable.append('0');
                        length++;
                    }
                    String valueOf3 = String.valueOf(i15);
                    appendable.append(valueOf3);
                    int length2 = valueOf3.length() + length;
                    if (k10 != 0) {
                        appendable.append('.');
                        int i16 = length2 + 1;
                        String valueOf4 = String.valueOf(Math.abs(k10));
                        int length3 = 9 - valueOf4.length();
                        for (int i17 = 0; i17 < length3; i17++) {
                            appendable.append('0');
                            i16++;
                        }
                        appendable.append(valueOf4);
                        i12 = valueOf4.length() + i16;
                    } else {
                        i12 = length2;
                    }
                }
            }
            i12 = length;
        }
        if (i10 != -1 && i12 > 0 && set != null) {
            set.add(new g(b0.TIMEZONE_ID, i10, i10 + i12));
        }
        return i12;
    }

    /* JADX WARN: Removed duplicated region for block: B:117:0x01a7  */
    /* JADX WARN: Removed duplicated region for block: B:40:0x00a4  */
    /* JADX WARN: Removed duplicated region for block: B:42:0x00aa  */
    /* JADX WARN: Removed duplicated region for block: B:92:0x014b  */
    /* JADX WARN: Removed duplicated region for block: B:97:0x015a  */
    @Override // lt.h
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void e(java.lang.CharSequence r17, lt.s r18, jt.d r19, lt.t r20, boolean r21) {
        /*
            Method dump skipped, instructions count: 444
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: lt.e0.e(java.lang.CharSequence, lt.s, jt.d, lt.t, boolean):void");
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof e0) {
            e0 e0Var = (e0) obj;
            if (this.f37572d == e0Var.f37572d && this.f37573e == e0Var.f37573e && this.f37574i.equals(e0Var.f37574i)) {
                return true;
            }
        }
        return false;
    }

    @Override // lt.h
    public boolean f() {
        return false;
    }

    @Override // lt.h
    public jt.p getElement() {
        return b0.TIMEZONE_OFFSET;
    }

    public int hashCode() {
        return (this.f37572d.hashCode() * 7) + (this.f37574i.hashCode() * 31) + (this.f37573e ? 1 : 0);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(e0.class.getName());
        sb2.append("[precision=");
        sb2.append(this.f37572d);
        sb2.append(", extended=");
        sb2.append(this.f37573e);
        sb2.append(", zero-offsets=");
        sb2.append(this.f37574i);
        sb2.append(']');
        return sb2.toString();
    }

    private e0() {
        this.f37572d = kt.e.LONG;
        this.f37573e = true;
        this.f37574i = Collections.EMPTY_LIST;
        this.f37575o = true;
        this.f37576p = kt.g.SMART;
    }

    private e0(kt.e eVar, boolean z10, List list, boolean z11, kt.g gVar) {
        this.f37572d = eVar;
        this.f37573e = z10;
        this.f37574i = list;
        this.f37575o = z11;
        this.f37576p = gVar;
    }

    @Override // lt.h
    public h g(jt.p pVar) {
        return this;
    }
}
