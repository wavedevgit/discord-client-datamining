package ot;

import java.util.LinkedHashSet;
import java.util.Set;
import nt.a;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final h f44671a;

    /* renamed from: b  reason: collision with root package name */
    private final int f44672b;

    /* renamed from: c  reason: collision with root package name */
    private final int f44673c;

    /* renamed from: d  reason: collision with root package name */
    private final b f44674d;

    /* renamed from: e  reason: collision with root package name */
    private final mt.d f44675e;

    /* renamed from: f  reason: collision with root package name */
    private final int f44676f;

    /* renamed from: g  reason: collision with root package name */
    private final int f44677g;

    /* renamed from: h  reason: collision with root package name */
    private final int f44678h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f44679i;

    /* renamed from: j  reason: collision with root package name */
    private final int f44680j;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(h hVar, int i10, int i11, b bVar) {
        this(hVar, i10, i11, bVar, null, 0, 0, 0, false, -1);
    }

    private void a(CharSequence charSequence, s sVar, mt.d dVar, t tVar, boolean z10) {
        s sVar2;
        int f10 = sVar.f();
        try {
            sVar2 = sVar;
        } catch (RuntimeException e10) {
            e = e10;
            sVar2 = sVar;
        }
        try {
            this.f44671a.g(charSequence, sVar2, dVar, tVar, z10);
        } catch (RuntimeException e11) {
            e = e11;
            sVar2.k(f10, e.getMessage());
        }
    }

    private char c(mt.d dVar) {
        return ((Character) dVar.b(nt.a.f42041p, ' ')).charValue();
    }

    private mt.d e(mt.d dVar) {
        b bVar = this.f44674d;
        if (bVar == null) {
            return dVar;
        }
        return new p(bVar, dVar);
    }

    private static boolean h(Object obj, Object obj2) {
        if (obj == null) {
            if (obj2 == null) {
                return true;
            }
            return false;
        }
        return obj.equals(obj2);
    }

    private boolean k(mt.o oVar) {
        mt.n f10;
        b bVar = this.f44674d;
        if (bVar == null || (f10 = bVar.f()) == null || f10.test(oVar)) {
            return true;
        }
        return false;
    }

    private boolean l(mt.d dVar) {
        return ((nt.g) dVar.b(nt.a.f42031f, nt.g.SMART)).e();
    }

    private String o() {
        return "Pad width exceeded: " + this.f44671a.getElement().name();
    }

    private String p() {
        return "Pad width mismatched: " + this.f44671a.getElement().name();
    }

    private static h w(h hVar, mt.p pVar) {
        if (hVar.getElement() == null) {
            return hVar;
        }
        if (hVar.getElement().getType() != pVar.getType() && !(pVar instanceof pt.a)) {
            throw new IllegalArgumentException("Cannot change element value type: " + pVar.name());
        }
        return hVar.e(pVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int b() {
        return this.f44672b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public h d() {
        return this.f44671a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof i) {
            i iVar = (i) obj;
            if (this.f44671a.equals(iVar.f44671a) && this.f44672b == iVar.f44672b && this.f44673c == iVar.f44673c && h(this.f44674d, iVar.f44674d) && h(this.f44675e, iVar.f44675e) && this.f44676f == iVar.f44676f && this.f44677g == iVar.f44677g && this.f44678h == iVar.f44678h && this.f44679i == iVar.f44679i && this.f44680j == iVar.f44680j) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int f() {
        return this.f44673c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean g() {
        if (!(this.f44671a instanceof j)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = this.f44671a.hashCode() * 7;
        b bVar = this.f44674d;
        if (bVar == null) {
            hashCode = 0;
        } else {
            hashCode = bVar.hashCode();
        }
        return hashCode2 + (hashCode * 31);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean i() {
        return this.f44679i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean j() {
        return this.f44671a.f();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public i m(int i10) {
        if (this.f44679i) {
            return new i(this.f44671a, this.f44672b, this.f44673c, this.f44674d, this.f44675e, this.f44676f, this.f44677g, this.f44678h, true, i10);
        }
        throw new IllegalStateException("This step is not starting an or-block.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public i n(int i10, int i11) {
        return new i(this.f44671a, this.f44672b, this.f44673c, this.f44674d, null, this.f44676f, this.f44677g + i10, this.f44678h + i11, this.f44679i, this.f44680j);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: Code restructure failed: missing block: B:43:0x008a, code lost:
        r9 = r8.f44678h;
     */
    /* JADX WARN: Code restructure failed: missing block: B:44:0x008c, code lost:
        if (r9 <= 0) goto L47;
     */
    /* JADX WARN: Code restructure failed: missing block: B:46:0x008f, code lost:
        if ((r3 + r11) == r9) goto L47;
     */
    /* JADX WARN: Code restructure failed: missing block: B:47:0x0091, code lost:
        r10.k(r13 - r11, p());
     */
    /* JADX WARN: Code restructure failed: missing block: B:48:0x0099, code lost:
        return;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void q(java.lang.CharSequence r9, ot.s r10, mt.d r11, ot.t r12, boolean r13) {
        /*
            r8 = this;
            if (r13 == 0) goto L6
            mt.d r11 = r8.f44675e
        L4:
            r3 = r11
            goto Lb
        L6:
            mt.d r11 = r8.e(r11)
            goto L4
        Lb:
            int r11 = r8.f44677g
            if (r11 != 0) goto L1c
            int r11 = r8.f44678h
            if (r11 != 0) goto L1c
            r0 = r8
            r1 = r9
            r2 = r10
            r4 = r12
            r5 = r13
            r0.a(r1, r2, r3, r4, r5)
            return
        L1c:
            r0 = r8
            r1 = r9
            r2 = r10
            r4 = r12
            r5 = r13
            boolean r9 = r8.l(r3)
            char r10 = r8.c(r3)
            int r11 = r2.f()
            int r12 = r1.length()
            r13 = r11
        L32:
            if (r13 >= r12) goto L3d
            char r6 = r1.charAt(r13)
            if (r6 != r10) goto L3d
            int r13 = r13 + 1
            goto L32
        L3d:
            int r6 = r13 - r11
            if (r9 == 0) goto L4d
            int r7 = r0.f44677g
            if (r6 <= r7) goto L4d
            java.lang.String r9 = r8.o()
            r2.k(r11, r9)
            return
        L4d:
            r2.l(r13)
            r0.a(r1, r2, r3, r4, r5)
            boolean r13 = r2.i()
            if (r13 == 0) goto L5a
            return
        L5a:
            int r13 = r2.f()
            int r3 = r13 - r11
            int r3 = r3 - r6
            if (r9 == 0) goto L72
            int r4 = r0.f44677g
            if (r4 <= 0) goto L72
            int r6 = r6 + r3
            if (r6 == r4) goto L72
            java.lang.String r9 = r8.p()
            r2.k(r11, r9)
            return
        L72:
            r11 = 0
        L73:
            if (r13 >= r12) goto L88
            if (r9 == 0) goto L7d
            int r4 = r3 + r11
            int r5 = r0.f44678h
            if (r4 >= r5) goto L88
        L7d:
            char r4 = r1.charAt(r13)
            if (r4 != r10) goto L88
            int r13 = r13 + 1
            int r11 = r11 + 1
            goto L73
        L88:
            if (r9 == 0) goto L9a
            int r9 = r0.f44678h
            if (r9 <= 0) goto L9a
            int r3 = r3 + r11
            if (r3 == r9) goto L9a
            int r13 = r13 - r11
            java.lang.String r9 = r8.p()
            r2.k(r13, r9)
            return
        L9a:
            r2.l(r13)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: ot.i.q(java.lang.CharSequence, ot.s, mt.d, ot.t, boolean):void");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int r(mt.o oVar, Appendable appendable, mt.d dVar, Set set, boolean z10) {
        mt.d e10;
        StringBuilder sb2;
        int i10;
        LinkedHashSet linkedHashSet;
        int i11;
        int i12 = 0;
        if (!k(oVar)) {
            return 0;
        }
        if (z10) {
            e10 = this.f44675e;
        } else {
            e10 = e(dVar);
        }
        mt.d dVar2 = e10;
        if (this.f44677g == 0 && this.f44678h == 0) {
            return this.f44671a.a(oVar, appendable, dVar2, set, z10);
        }
        if (appendable instanceof StringBuilder) {
            sb2 = (StringBuilder) appendable;
            i10 = sb2.length();
        } else {
            sb2 = new StringBuilder();
            i10 = -1;
        }
        StringBuilder sb3 = sb2;
        if ((appendable instanceof CharSequence) && set != null) {
            if (sb3 == appendable) {
                h hVar = this.f44671a;
                if ((hVar instanceof f) || (hVar instanceof z)) {
                    i11 = 0;
                    linkedHashSet = new LinkedHashSet();
                }
            }
            i11 = ((CharSequence) appendable).length();
            linkedHashSet = new LinkedHashSet();
        } else {
            linkedHashSet = null;
            i11 = -1;
        }
        LinkedHashSet<g> linkedHashSet2 = linkedHashSet;
        boolean l10 = l(dVar2);
        char c10 = c(dVar2);
        int length = sb3.length();
        this.f44671a.a(oVar, sb3, dVar2, linkedHashSet2, z10);
        int length2 = sb3.length() - length;
        int i13 = this.f44677g;
        if (i13 > 0) {
            if (l10 && length2 > i13) {
                throw new IllegalArgumentException(o());
            }
            int i14 = length2;
            while (i14 < this.f44677g) {
                if (i10 == -1) {
                    appendable.append(c10);
                } else {
                    sb3.insert(i10, c10);
                }
                i14++;
                i12++;
            }
            if (i10 == -1) {
                appendable.append(sb3);
            }
            if (i11 != -1) {
                int i15 = i11 + i12;
                for (g gVar : linkedHashSet2) {
                    set.add(new g(gVar.a(), gVar.c() + i15, gVar.b() + i15));
                }
            }
            int i16 = this.f44678h;
            if (i16 > 0) {
                if (l10 && length2 > i16) {
                    throw new IllegalArgumentException(o());
                }
                while (length2 < this.f44678h) {
                    appendable.append(c10);
                    length2++;
                    i14++;
                }
            }
            return i14;
        } else if (l10 && length2 > this.f44678h) {
            throw new IllegalArgumentException(o());
        } else {
            if (i10 == -1) {
                appendable.append(sb3);
            }
            while (length2 < this.f44678h) {
                appendable.append(c10);
                length2++;
            }
            if (i11 != -1) {
                for (g gVar2 : linkedHashSet2) {
                    set.add(new g(gVar2.a(), gVar2.c() + i11, gVar2.b() + i11));
                }
            }
            return length2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public i s(c cVar) {
        b p10 = cVar.p();
        if (this.f44674d != null) {
            p10 = p10.l(new a.b().f(p10.e()).f(this.f44674d.e()).a());
        }
        b bVar = p10;
        return new i(this.f44671a.d(cVar, bVar, this.f44676f), this.f44672b, this.f44673c, this.f44674d, bVar, this.f44676f, this.f44677g, this.f44678h, this.f44679i, this.f44680j);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public i t(int i10) {
        return new i(this.f44671a, this.f44672b, this.f44673c, this.f44674d, null, this.f44676f + i10, this.f44677g, this.f44678h, this.f44679i, this.f44680j);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append("[processor=");
        sb2.append(this.f44671a);
        sb2.append(", level=");
        sb2.append(this.f44672b);
        sb2.append(", section=");
        sb2.append(this.f44673c);
        if (this.f44674d != null) {
            sb2.append(", attributes=");
            sb2.append(this.f44674d);
        }
        sb2.append(", reserved=");
        sb2.append(this.f44676f);
        sb2.append(", pad-left=");
        sb2.append(this.f44677g);
        sb2.append(", pad-right=");
        sb2.append(this.f44678h);
        if (this.f44679i) {
            sb2.append(", or-block-started");
        }
        sb2.append(']');
        return sb2.toString();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int u() {
        return this.f44680j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public i v() {
        if (!this.f44679i) {
            return new i(this.f44671a, this.f44672b, this.f44673c, this.f44674d, null, this.f44676f, this.f44677g, this.f44678h, true, -1);
        }
        throw new IllegalStateException("Cannot start or-block twice.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public i x(mt.p pVar) {
        h w10 = w(this.f44671a, pVar);
        if (this.f44671a == w10) {
            return this;
        }
        return new i(w10, this.f44672b, this.f44673c, this.f44674d, this.f44675e, this.f44676f, this.f44677g, this.f44678h, this.f44679i, this.f44680j);
    }

    private i(h hVar, int i10, int i11, b bVar, mt.d dVar, int i12, int i13, int i14, boolean z10, int i15) {
        if (hVar == null) {
            throw new NullPointerException("Missing format processor.");
        }
        if (i10 < 0) {
            throw new IllegalArgumentException("Invalid level: " + i10);
        } else if (i11 < 0) {
            throw new IllegalArgumentException("Invalid section: " + i11);
        } else if (i12 < 0) {
            throw new IllegalArgumentException("Reserved chars must not be negative: " + i12);
        } else if (i13 < 0) {
            throw new IllegalArgumentException("Invalid pad-width: " + i13);
        } else if (i14 < 0) {
            throw new IllegalArgumentException("Invalid pad-width: " + i14);
        } else {
            this.f44671a = hVar;
            this.f44672b = i10;
            this.f44673c = i11;
            this.f44674d = bVar;
            this.f44675e = dVar;
            this.f44676f = i12;
            this.f44677g = i13;
            this.f44678h = i14;
            this.f44679i = z10;
            this.f44680j = i15;
        }
    }
}
