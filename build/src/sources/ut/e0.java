package ut;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e0 implements h {

    /* renamed from: q  reason: collision with root package name */
    static final e0 f51907q = new e0();

    /* renamed from: d  reason: collision with root package name */
    private final tt.e f51908d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f51909e;

    /* renamed from: i  reason: collision with root package name */
    private final List f51910i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f51911o;

    /* renamed from: p  reason: collision with root package name */
    private final tt.g f51912p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e0(tt.e eVar, boolean z10, List list) {
        if (eVar != null) {
            if (!list.isEmpty()) {
                ArrayList<String> arrayList = new ArrayList(list);
                for (String str : arrayList) {
                    if (str.trim().isEmpty()) {
                        throw new IllegalArgumentException("Zero offset must not be white-space-only.");
                    }
                }
                this.f51908d = eVar;
                this.f51909e = z10;
                this.f51910i = Collections.unmodifiableList(arrayList);
                this.f51911o = true;
                this.f51912p = tt.g.SMART;
                return;
            }
            throw new IllegalArgumentException("Missing zero offsets.");
        }
        throw new NullPointerException("Missing display mode.");
    }

    private static net.time4j.tz.p b(st.o oVar, st.d dVar) {
        st.c cVar = tt.a.f51005d;
        if (dVar.c(cVar)) {
            net.time4j.tz.k kVar = (net.time4j.tz.k) dVar.a(cVar);
            if (kVar instanceof net.time4j.tz.p) {
                return (net.time4j.tz.p) kVar;
            }
            if (kVar != null) {
                throw new IllegalArgumentException("Use a timezone offset instead of [" + kVar.a() + "] when formatting [" + oVar + "].");
            }
        }
        throw new IllegalArgumentException("Cannot extract timezone offset from format attributes for: " + oVar);
    }

    private static int c(CharSequence charSequence, int i10, tt.g gVar) {
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

    /* JADX WARN: Removed duplicated region for block: B:117:0x01a7  */
    /* JADX WARN: Removed duplicated region for block: B:40:0x00a4  */
    /* JADX WARN: Removed duplicated region for block: B:42:0x00aa  */
    /* JADX WARN: Removed duplicated region for block: B:92:0x014b  */
    /* JADX WARN: Removed duplicated region for block: B:97:0x015a  */
    @Override // ut.h
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void a(java.lang.CharSequence r17, ut.s r18, st.d r19, ut.t r20, boolean r21) {
        /*
            Method dump skipped, instructions count: 444
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: ut.e0.a(java.lang.CharSequence, ut.s, st.d, ut.t, boolean):void");
    }

    @Override // ut.h
    public h d(c cVar, st.d dVar, int i10) {
        return new e0(this.f51908d, this.f51909e, this.f51910i, ((Boolean) dVar.b(tt.a.f51010i, Boolean.TRUE)).booleanValue(), (tt.g) dVar.b(tt.a.f51007f, tt.g.SMART));
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof e0) {
            e0 e0Var = (e0) obj;
            if (this.f51908d == e0Var.f51908d && this.f51909e == e0Var.f51909e && this.f51910i.equals(e0Var.f51910i)) {
                return true;
            }
        }
        return false;
    }

    @Override // ut.h
    public int f(st.o oVar, Appendable appendable, st.d dVar, Set set, boolean z10) {
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
        if (oVar.k()) {
            kVar = oVar.u();
        } else {
            kVar = null;
        }
        if (kVar == null) {
            B = b(oVar, dVar);
        } else if (kVar instanceof net.time4j.tz.p) {
            B = (net.time4j.tz.p) kVar;
        } else if (oVar instanceof qt.f) {
            B = net.time4j.tz.l.N(kVar).B((qt.f) oVar);
        } else {
            throw new IllegalArgumentException("Cannot extract timezone offset from: " + oVar);
        }
        int m10 = B.m();
        int l10 = B.l();
        if ((m10 | l10) == 0) {
            String str = (String) this.f51910i.get(0);
            appendable.append(str);
            i12 = str.length();
        } else {
            if (m10 >= 0 && l10 >= 0) {
                c10 = '+';
            } else {
                c10 = '-';
            }
            appendable.append(c10);
            int abs = Math.abs(m10);
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
            tt.e eVar = this.f51908d;
            tt.e eVar2 = tt.e.SHORT;
            if (eVar != eVar2 || i14 != 0) {
                if (this.f51909e) {
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
                tt.e eVar3 = this.f51908d;
                if (eVar3 != eVar2 && eVar3 != tt.e.MEDIUM && (eVar3 == tt.e.FULL || (i15 | l10) != 0)) {
                    if (this.f51909e) {
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
                    if (l10 != 0) {
                        appendable.append('.');
                        int i16 = length2 + 1;
                        String valueOf4 = String.valueOf(Math.abs(l10));
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

    @Override // ut.h
    public boolean g() {
        return false;
    }

    @Override // ut.h
    public st.p getElement() {
        return b0.TIMEZONE_OFFSET;
    }

    public int hashCode() {
        return (this.f51908d.hashCode() * 7) + (this.f51910i.hashCode() * 31) + (this.f51909e ? 1 : 0);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(e0.class.getName());
        sb2.append("[precision=");
        sb2.append(this.f51908d);
        sb2.append(", extended=");
        sb2.append(this.f51909e);
        sb2.append(", zero-offsets=");
        sb2.append(this.f51910i);
        sb2.append(']');
        return sb2.toString();
    }

    private e0() {
        this.f51908d = tt.e.LONG;
        this.f51909e = true;
        this.f51910i = Collections.EMPTY_LIST;
        this.f51911o = true;
        this.f51912p = tt.g.SMART;
    }

    private e0(tt.e eVar, boolean z10, List list, boolean z11, tt.g gVar) {
        this.f51908d = eVar;
        this.f51909e = z10;
        this.f51910i = list;
        this.f51911o = z11;
        this.f51912p = gVar;
    }

    @Override // ut.h
    public h e(st.p pVar) {
        return this;
    }
}
