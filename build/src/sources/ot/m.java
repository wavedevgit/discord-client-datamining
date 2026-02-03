package ot;

import java.util.Locale;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class m implements h {

    /* renamed from: d  reason: collision with root package name */
    private final char f44714d;

    /* renamed from: e  reason: collision with root package name */
    private final char f44715e;

    /* renamed from: i  reason: collision with root package name */
    private final String f44716i;

    /* renamed from: o  reason: collision with root package name */
    private final mt.c f44717o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f44718p;

    /* renamed from: q  reason: collision with root package name */
    private final boolean f44719q;

    /* renamed from: r  reason: collision with root package name */
    private final boolean f44720r;

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(String str) {
        if (!str.isEmpty()) {
            char charAt = str.charAt(0);
            this.f44714d = charAt;
            this.f44715e = charAt;
            this.f44717o = null;
            this.f44716i = str;
            if (charAt >= ' ') {
                boolean z10 = true;
                this.f44718p = true;
                this.f44719q = (str.length() == 1 && i(charAt)) ? z10 : false;
                this.f44720r = false;
                return;
            }
            throw new IllegalArgumentException("Literal must not start with non-printable char.");
        }
        throw new IllegalArgumentException("Missing literal.");
    }

    private static boolean b(char c10, char c11) {
        if (c10 != c11 && Character.toUpperCase(c10) != Character.toUpperCase(c11) && Character.toLowerCase(c10) != Character.toLowerCase(c11)) {
            return false;
        }
        return true;
    }

    private static boolean h(char c10) {
        if (c10 != 8206 && c10 != 8207 && c10 != 1564) {
            return false;
        }
        return true;
    }

    private static boolean i(char c10) {
        if (!Character.isLetter(c10) && !Character.isDigit(c10) && !h(c10)) {
            return true;
        }
        return false;
    }

    private void j(CharSequence charSequence, s sVar) {
        int f10 = sVar.f();
        sVar.k(f10, "Cannot parse: \"" + charSequence + "\" (expected: [" + this.f44716i + "], found: [" + charSequence.subSequence(f10, Math.min(this.f44716i.length() + f10, charSequence.length())) + "])");
    }

    /* JADX WARN: Code restructure failed: missing block: B:35:0x0088, code lost:
        if (b(r2, r5) != false) goto L31;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void k(java.lang.CharSequence r9, ot.s r10, mt.d r11, boolean r12) {
        /*
            r8 = this;
            int r0 = r10.f()
            char r1 = r8.f44714d
            mt.c r2 = r8.f44717o
            r3 = 0
            if (r2 == 0) goto L19
            java.lang.Character r1 = java.lang.Character.valueOf(r3)
            java.lang.Object r1 = r11.b(r2, r1)
            java.lang.Character r1 = (java.lang.Character) r1
            char r1 = r1.charValue()
        L19:
            int r2 = r9.length()
            r4 = 1
            if (r0 >= r2) goto L8d
            if (r1 == 0) goto L8d
            boolean r2 = java.lang.Character.isDigit(r1)
            if (r2 == 0) goto L2a
            goto L8d
        L2a:
            char r2 = r9.charAt(r0)
            char r5 = r8.f44715e
            mt.c r6 = r8.f44717o
            if (r6 == 0) goto L60
            mt.c r6 = nt.a.f42040o
            java.lang.String r6 = r6.name()
            mt.c r7 = r8.f44717o
            java.lang.String r7 = r7.name()
            boolean r6 = r6.equals(r7)
            if (r6 == 0) goto L60
            java.util.Locale r6 = java.util.Locale.ROOT
            mt.c r7 = nt.a.f42028c
            java.lang.Object r7 = r11.b(r7, r6)
            boolean r6 = r6.equals(r7)
            if (r6 == 0) goto L60
            r5 = 46
            r6 = 44
            if (r1 != r6) goto L5b
            goto L60
        L5b:
            if (r1 != r5) goto L5f
            r5 = r6
            goto L60
        L5f:
            r5 = r1
        L60:
            if (r2 == r1) goto L66
            if (r2 == r5) goto L66
            r6 = r4
            goto L67
        L66:
            r6 = r3
        L67:
            if (r6 == 0) goto L8b
            if (r12 == 0) goto L6e
            boolean r11 = r8.f44718p
            goto L7c
        L6e:
            mt.c r12 = nt.a.f42034i
            java.lang.Boolean r7 = java.lang.Boolean.TRUE
            java.lang.Object r11 = r11.b(r12, r7)
            java.lang.Boolean r11 = (java.lang.Boolean) r11
            boolean r11 = r11.booleanValue()
        L7c:
            if (r11 == 0) goto L8b
            boolean r11 = b(r2, r1)
            if (r11 != 0) goto L8f
            boolean r11 = b(r2, r5)
            if (r11 == 0) goto L8b
            goto L8f
        L8b:
            r3 = r6
            goto L8f
        L8d:
            r2 = r3
            r3 = r4
        L8f:
            if (r3 == 0) goto Lba
            java.lang.StringBuilder r11 = new java.lang.StringBuilder
            java.lang.String r12 = "Cannot parse: \""
            r11.<init>(r12)
            r11.append(r9)
            java.lang.String r9 = "\" (expected: ["
            r11.append(r9)
            r11.append(r1)
            java.lang.String r9 = "], found: ["
            r11.append(r9)
            if (r2 == 0) goto Lad
            r11.append(r2)
        Lad:
            java.lang.String r9 = "])"
            r11.append(r9)
            java.lang.String r9 = r11.toString()
            r10.k(r0, r9)
            return
        Lba:
            int r0 = r0 + r4
            r10.l(r0)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: ot.m.k(java.lang.CharSequence, ot.s, mt.d, boolean):void");
    }

    private void l(CharSequence charSequence, s sVar, mt.d dVar, boolean z10) {
        boolean booleanValue;
        boolean q10;
        int f10 = sVar.f();
        if (z10) {
            booleanValue = this.f44718p;
        } else {
            booleanValue = ((Boolean) dVar.b(nt.a.f42034i, Boolean.TRUE)).booleanValue();
        }
        if (z10) {
            q10 = this.f44720r;
        } else {
            q10 = nt.b.q((Locale) dVar.b(nt.a.f42028c, Locale.ROOT));
        }
        int m10 = m(charSequence, f10, this.f44716i, booleanValue, q10);
        if (m10 == -1) {
            j(charSequence, sVar);
        } else {
            sVar.l(f10 + m10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int m(CharSequence charSequence, int i10, CharSequence charSequence2, boolean z10, boolean z11) {
        char c10;
        int length = charSequence.length();
        int length2 = charSequence2.length();
        int i11 = 0;
        for (int i12 = 0; i12 < length2; i12++) {
            char charAt = charSequence2.charAt(i12);
            if (!h(charAt)) {
                if (z11) {
                    c10 = 0;
                    while (true) {
                        int i13 = i11 + i10;
                        if (i13 >= length) {
                            break;
                        }
                        c10 = charSequence.charAt(i13);
                        if (!h(c10)) {
                            break;
                        }
                        i11++;
                    }
                } else {
                    int i14 = i11 + i10;
                    if (i14 < length) {
                        c10 = charSequence.charAt(i14);
                    } else {
                        c10 = 0;
                    }
                }
                if (i11 + i10 >= length) {
                    return -1;
                }
                i11++;
                if (z10) {
                    if (!b(c10, charAt)) {
                        return -1;
                    }
                } else if (c10 != charAt) {
                    return -1;
                }
            }
        }
        if (z11) {
            while (true) {
                int i15 = i11 + i10;
                if (i15 >= length || !h(charSequence.charAt(i15))) {
                    break;
                }
                i11++;
            }
        }
        return i11;
    }

    @Override // ot.h
    public int a(mt.o oVar, Appendable appendable, mt.d dVar, Set set, boolean z10) {
        mt.c cVar = this.f44717o;
        if (cVar != null) {
            appendable.append(((Character) dVar.b(cVar, null)).charValue());
            return 1;
        }
        String str = this.f44716i;
        if (str == null) {
            appendable.append(this.f44714d);
            return 1;
        }
        appendable.append(str);
        return this.f44716i.length();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int c() {
        String str = this.f44716i;
        if (str == null) {
            return 0;
        }
        int length = str.length();
        int i10 = 0;
        for (int i11 = 0; i11 < length && Character.isDigit(this.f44716i.charAt(i11)); i11++) {
            i10++;
        }
        return i10;
    }

    @Override // ot.h
    public h d(c cVar, mt.d dVar, int i10) {
        boolean z10;
        boolean q10 = nt.b.q((Locale) dVar.b(nt.a.f42028c, Locale.ROOT));
        char c10 = this.f44714d;
        char c11 = this.f44715e;
        String str = this.f44716i;
        mt.c cVar2 = this.f44717o;
        boolean booleanValue = ((Boolean) dVar.b(nt.a.f42034i, Boolean.TRUE)).booleanValue();
        if (this.f44719q && !q10) {
            z10 = true;
        } else {
            z10 = false;
        }
        return new m(c10, c11, str, cVar2, booleanValue, z10, q10);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof m) {
            m mVar = (m) obj;
            mt.c cVar = this.f44717o;
            if (cVar != null) {
                return cVar.equals(mVar.f44717o);
            }
            String str = this.f44716i;
            if (str == null) {
                if (mVar.f44716i == null && this.f44714d == mVar.f44714d && this.f44715e == mVar.f44715e) {
                    return true;
                }
                return false;
            } else if (str.equals(mVar.f44716i) && this.f44719q == mVar.f44719q) {
                return true;
            }
        }
        return false;
    }

    @Override // ot.h
    public boolean f() {
        if (this.f44716i == null || c() != this.f44716i.length()) {
            return false;
        }
        return true;
    }

    @Override // ot.h
    public void g(CharSequence charSequence, s sVar, mt.d dVar, t tVar, boolean z10) {
        if (z10 && this.f44719q) {
            int f10 = sVar.f();
            if (f10 < charSequence.length() && charSequence.charAt(f10) == this.f44714d) {
                sVar.l(f10 + 1);
            } else if (this.f44714d == '.' && ((Boolean) dVar.b(nt.a.f42036k, Boolean.TRUE)).booleanValue()) {
            } else {
                j(charSequence, sVar);
            }
        } else if (this.f44716i == null) {
            k(charSequence, sVar, dVar, z10);
        } else {
            l(charSequence, sVar, dVar, z10);
        }
    }

    @Override // ot.h
    public mt.p getElement() {
        return null;
    }

    public int hashCode() {
        String name;
        mt.c cVar = this.f44717o;
        if (cVar == null) {
            name = this.f44716i;
            if (name == null) {
                name = "";
            }
        } else {
            name = cVar.name();
        }
        return name.hashCode() ^ this.f44714d;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append(m.class.getName());
        sb2.append("[literal=");
        if (this.f44717o != null) {
            sb2.append('{');
            sb2.append(this.f44717o);
            sb2.append('}');
        } else {
            String str = this.f44716i;
            if (str == null) {
                sb2.append(this.f44714d);
                if (this.f44715e != this.f44714d) {
                    sb2.append(", alternative=");
                    sb2.append(this.f44715e);
                }
            } else {
                sb2.append(str);
            }
        }
        sb2.append(']');
        return sb2.toString();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(char c10, char c11) {
        this.f44714d = c10;
        this.f44715e = c11;
        this.f44717o = null;
        this.f44716i = null;
        if (c10 >= ' ' && c11 >= ' ') {
            if (!Character.isDigit(c10) && !Character.isDigit(c11)) {
                this.f44718p = true;
                this.f44719q = false;
                this.f44720r = false;
                return;
            }
            throw new IllegalArgumentException("Literal must not be a decimal digit.");
        }
        throw new IllegalArgumentException("Literal must not start with non-printable char.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(mt.c cVar) {
        if (cVar != null) {
            this.f44714d = (char) 0;
            this.f44715e = (char) 0;
            this.f44717o = cVar;
            this.f44716i = null;
            this.f44718p = true;
            this.f44719q = false;
            this.f44720r = false;
            return;
        }
        throw new NullPointerException("Missing format attribute.");
    }

    private m(char c10, char c11, String str, mt.c cVar, boolean z10, boolean z11, boolean z12) {
        this.f44714d = c10;
        this.f44715e = c11;
        this.f44716i = str;
        this.f44717o = cVar;
        this.f44718p = z10;
        this.f44719q = z11;
        this.f44720r = z12;
    }

    @Override // ot.h
    public h e(mt.p pVar) {
        return this;
    }
}
