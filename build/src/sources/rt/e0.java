package rt;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e0 implements h {

    /* renamed from: q  reason: collision with root package name */
    static final e0 f49091q = new e0();

    /* renamed from: d  reason: collision with root package name */
    private final qt.e f49092d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f49093e;

    /* renamed from: i  reason: collision with root package name */
    private final List f49094i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f49095o;

    /* renamed from: p  reason: collision with root package name */
    private final qt.g f49096p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e0(qt.e eVar, boolean z10, List list) {
        if (eVar != null) {
            if (!list.isEmpty()) {
                ArrayList<String> arrayList = new ArrayList(list);
                for (String str : arrayList) {
                    if (str.trim().isEmpty()) {
                        throw new IllegalArgumentException("Zero offset must not be white-space-only.");
                    }
                }
                this.f49092d = eVar;
                this.f49093e = z10;
                this.f49094i = Collections.unmodifiableList(arrayList);
                this.f49095o = true;
                this.f49096p = qt.g.SMART;
                return;
            }
            throw new IllegalArgumentException("Missing zero offsets.");
        }
        throw new NullPointerException("Missing display mode.");
    }

    private static net.time4j.tz.p b(pt.o oVar, pt.d dVar) {
        pt.c cVar = qt.a.f48089d;
        if (dVar.b(cVar)) {
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

    private static int c(CharSequence charSequence, int i10, qt.g gVar) {
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
    @Override // rt.h
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void d(java.lang.CharSequence r17, rt.s r18, pt.d r19, rt.t r20, boolean r21) {
        /*
            Method dump skipped, instructions count: 444
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: rt.e0.d(java.lang.CharSequence, rt.s, pt.d, rt.t, boolean):void");
    }

    @Override // rt.h
    public h e(c cVar, pt.d dVar, int i10) {
        return new e0(this.f49092d, this.f49093e, this.f49094i, ((Boolean) dVar.a(qt.a.f48094i, Boolean.TRUE)).booleanValue(), (qt.g) dVar.a(qt.a.f48091f, qt.g.SMART));
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof e0) {
            e0 e0Var = (e0) obj;
            if (this.f49092d == e0Var.f49092d && this.f49093e == e0Var.f49093e && this.f49094i.equals(e0Var.f49094i)) {
                return true;
            }
        }
        return false;
    }

    @Override // rt.h
    public int f(pt.o oVar, Appendable appendable, pt.d dVar, Set set, boolean z10) {
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
        } else if (oVar instanceof nt.f) {
            B = net.time4j.tz.l.N(kVar).B((nt.f) oVar);
        } else {
            throw new IllegalArgumentException("Cannot extract timezone offset from: " + oVar);
        }
        int m10 = B.m();
        int l10 = B.l();
        if ((m10 | l10) == 0) {
            String str = (String) this.f49094i.get(0);
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
            qt.e eVar = this.f49092d;
            qt.e eVar2 = qt.e.SHORT;
            if (eVar != eVar2 || i14 != 0) {
                if (this.f49093e) {
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
                qt.e eVar3 = this.f49092d;
                if (eVar3 != eVar2 && eVar3 != qt.e.MEDIUM && (eVar3 == qt.e.FULL || (i15 | l10) != 0)) {
                    if (this.f49093e) {
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

    @Override // rt.h
    public boolean g() {
        return false;
    }

    @Override // rt.h
    public pt.p getElement() {
        return b0.TIMEZONE_OFFSET;
    }

    public int hashCode() {
        return (this.f49092d.hashCode() * 7) + (this.f49094i.hashCode() * 31) + (this.f49093e ? 1 : 0);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(e0.class.getName());
        sb2.append("[precision=");
        sb2.append(this.f49092d);
        sb2.append(", extended=");
        sb2.append(this.f49093e);
        sb2.append(", zero-offsets=");
        sb2.append(this.f49094i);
        sb2.append(']');
        return sb2.toString();
    }

    private e0() {
        this.f49092d = qt.e.LONG;
        this.f49093e = true;
        this.f49094i = Collections.EMPTY_LIST;
        this.f49095o = true;
        this.f49096p = qt.g.SMART;
    }

    private e0(qt.e eVar, boolean z10, List list, boolean z11, qt.g gVar) {
        this.f49092d = eVar;
        this.f49093e = z10;
        this.f49094i = list;
        this.f49095o = z11;
        this.f49096p = gVar;
    }

    @Override // rt.h
    public h a(pt.p pVar) {
        return this;
    }
}
