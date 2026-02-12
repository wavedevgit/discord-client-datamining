package xv;

import aw.u;
import aw.w;
import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import java.util.Arrays;
import java.util.BitSet;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class n implements bw.a {

    /* renamed from: i  reason: collision with root package name */
    private static final Pattern f55225i = Pattern.compile("^[!\"#\\$%&'\\(\\)\\*\\+,\\-\\./:;<=>\\?@\\[\\\\\\]\\^_`\\{\\|\\}~\\p{Pc}\\p{Pd}\\p{Pe}\\p{Pf}\\p{Pi}\\p{Po}\\p{Ps}]");

    /* renamed from: j  reason: collision with root package name */
    private static final Pattern f55226j = Pattern.compile("^(?:<[A-Za-z][A-Za-z0-9-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)*\\s*/?>|</[A-Za-z][A-Za-z0-9-]*\\s*[>]|<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->|[<][?].*?[?][>]|<![A-Z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)", 2);

    /* renamed from: k  reason: collision with root package name */
    private static final Pattern f55227k = Pattern.compile("^[!\"#$%&'()*+,./:;<=>?@\\[\\\\\\]^_`{|}~-]");

    /* renamed from: l  reason: collision with root package name */
    private static final Pattern f55228l = Pattern.compile("^&(?:#x[a-f0-9]{1,6}|#[0-9]{1,7}|[a-z][a-z0-9]{1,31});", 2);

    /* renamed from: m  reason: collision with root package name */
    private static final Pattern f55229m = Pattern.compile("`+");

    /* renamed from: n  reason: collision with root package name */
    private static final Pattern f55230n = Pattern.compile("^`+");

    /* renamed from: o  reason: collision with root package name */
    private static final Pattern f55231o = Pattern.compile("^<([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>");

    /* renamed from: p  reason: collision with root package name */
    private static final Pattern f55232p = Pattern.compile("^<[a-zA-Z][a-zA-Z0-9.+-]{1,31}:[^<>\u0000- ]*>");

    /* renamed from: q  reason: collision with root package name */
    private static final Pattern f55233q = Pattern.compile("^ *(?:\n *)?");

    /* renamed from: r  reason: collision with root package name */
    private static final Pattern f55234r = Pattern.compile("^[\\p{Zs}\t\r\n\f]");

    /* renamed from: s  reason: collision with root package name */
    private static final Pattern f55235s = Pattern.compile("\\s+");

    /* renamed from: t  reason: collision with root package name */
    private static final Pattern f55236t = Pattern.compile(" *$");

    /* renamed from: a  reason: collision with root package name */
    private final BitSet f55237a;

    /* renamed from: b  reason: collision with root package name */
    private final BitSet f55238b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f55239c;

    /* renamed from: d  reason: collision with root package name */
    private final bw.b f55240d;

    /* renamed from: e  reason: collision with root package name */
    private String f55241e;

    /* renamed from: f  reason: collision with root package name */
    private int f55242f;

    /* renamed from: g  reason: collision with root package name */
    private f f55243g;

    /* renamed from: h  reason: collision with root package name */
    private e f55244h;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        final int f55245a;

        /* renamed from: b  reason: collision with root package name */
        final boolean f55246b;

        /* renamed from: c  reason: collision with root package name */
        final boolean f55247c;

        a(int i10, boolean z10, boolean z11) {
            this.f55245a = i10;
            this.f55247c = z10;
            this.f55246b = z11;
        }
    }

    public n(bw.b bVar) {
        Map f10 = f(bVar.b());
        this.f55239c = f10;
        BitSet e10 = e(f10.keySet());
        this.f55238b = e10;
        this.f55237a = g(e10);
        this.f55240d = bVar;
    }

    private aw.r A() {
        int i10 = this.f55242f;
        int length = this.f55241e.length();
        while (true) {
            int i11 = this.f55242f;
            if (i11 == length || this.f55237a.get(this.f55241e.charAt(i11))) {
                break;
            }
            this.f55242f++;
        }
        int i12 = this.f55242f;
        if (i10 != i12) {
            return M(this.f55241e, i10, i12);
        }
        return null;
    }

    private char B() {
        if (this.f55242f < this.f55241e.length()) {
            return this.f55241e.charAt(this.f55242f);
        }
        return (char) 0;
    }

    private void C(f fVar) {
        boolean z10;
        HashMap hashMap = new HashMap();
        f fVar2 = this.f55243g;
        while (fVar2 != null) {
            f fVar3 = fVar2.f55188e;
            if (fVar3 == fVar) {
                break;
            }
            fVar2 = fVar3;
        }
        while (fVar2 != null) {
            char c10 = fVar2.f55185b;
            dw.a aVar = (dw.a) this.f55239c.get(Character.valueOf(c10));
            if (fVar2.f55187d && aVar != null) {
                char c11 = aVar.c();
                f fVar4 = fVar2.f55188e;
                int i10 = 0;
                boolean z11 = false;
                while (fVar4 != null && fVar4 != fVar && fVar4 != hashMap.get(Character.valueOf(c10))) {
                    if (fVar4.f55186c && fVar4.f55185b == c11) {
                        i10 = aVar.d(fVar4, fVar2);
                        z11 = true;
                        if (i10 > 0) {
                            z10 = true;
                            break;
                        }
                    }
                    fVar4 = fVar4.f55188e;
                }
                z10 = z11;
                z11 = false;
                if (!z11) {
                    if (!z10) {
                        hashMap.put(Character.valueOf(c10), fVar2.f55188e);
                        if (!fVar2.f55186c) {
                            F(fVar2);
                        }
                    }
                    fVar2 = fVar2.f55189f;
                } else {
                    w wVar = fVar4.f55184a;
                    w wVar2 = fVar2.f55184a;
                    fVar4.f55190g -= i10;
                    fVar2.f55190g -= i10;
                    wVar.n(wVar.m().substring(0, wVar.m().length() - i10));
                    wVar2.n(wVar2.m().substring(0, wVar2.m().length() - i10));
                    G(fVar4, fVar2);
                    k(wVar, wVar2);
                    aVar.e(wVar, wVar2, i10);
                    if (fVar4.f55190g == 0) {
                        E(fVar4);
                    }
                    if (fVar2.f55190g == 0) {
                        f fVar5 = fVar2.f55189f;
                        E(fVar2);
                        fVar2 = fVar5;
                    }
                }
            } else {
                fVar2 = fVar2.f55189f;
            }
        }
        while (true) {
            f fVar6 = this.f55243g;
            if (fVar6 != null && fVar6 != fVar) {
                F(fVar6);
            } else {
                return;
            }
        }
    }

    private void D(f fVar) {
        f fVar2 = fVar.f55188e;
        if (fVar2 != null) {
            fVar2.f55189f = fVar.f55189f;
        }
        f fVar3 = fVar.f55189f;
        if (fVar3 == null) {
            this.f55243g = fVar2;
        } else {
            fVar3.f55188e = fVar2;
        }
    }

    private void E(f fVar) {
        fVar.f55184a.l();
        D(fVar);
    }

    private void F(f fVar) {
        D(fVar);
    }

    private void G(f fVar, f fVar2) {
        f fVar3 = fVar2.f55188e;
        while (fVar3 != null && fVar3 != fVar) {
            f fVar4 = fVar3.f55188e;
            F(fVar3);
            fVar3 = fVar4;
        }
    }

    private void H() {
        this.f55244h = this.f55244h.f55180d;
    }

    private a J(dw.a aVar, char c10) {
        String substring;
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13;
        int i10 = this.f55242f;
        boolean z14 = false;
        int i11 = 0;
        while (B() == c10) {
            i11++;
            this.f55242f++;
        }
        if (i11 < aVar.b()) {
            this.f55242f = i10;
            return null;
        }
        String str = ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE;
        if (i10 == 0) {
            substring = ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE;
        } else {
            substring = this.f55241e.substring(i10 - 1, i10);
        }
        char B = B();
        if (B != 0) {
            str = String.valueOf(B);
        }
        Pattern pattern = f55225i;
        boolean matches = pattern.matcher(substring).matches();
        Pattern pattern2 = f55234r;
        boolean matches2 = pattern2.matcher(substring).matches();
        boolean matches3 = pattern.matcher(str).matches();
        boolean matches4 = pattern2.matcher(str).matches();
        if (!matches4 && (!matches3 || matches2 || matches)) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!matches2 && (!matches || matches4 || matches3)) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (c10 == '_') {
            if (z10 && (!z11 || matches)) {
                z13 = true;
            } else {
                z13 = false;
            }
            if (z11 && (!z10 || matches3)) {
                z14 = true;
            }
        } else {
            if (z10 && c10 == aVar.c()) {
                z12 = true;
            } else {
                z12 = false;
            }
            if (z11 && c10 == aVar.a()) {
                z14 = true;
            }
            z13 = z12;
        }
        this.f55242f = i10;
        return new a(i11, z13, z14);
    }

    private void K() {
        h(f55233q);
    }

    private w L(String str) {
        return new w(str);
    }

    private w M(String str, int i10, int i11) {
        return new w(str.substring(i10, i11));
    }

    private void b(e eVar) {
        e eVar2 = this.f55244h;
        if (eVar2 != null) {
            eVar2.f55183g = true;
        }
        this.f55244h = eVar;
    }

    private static void c(char c10, dw.a aVar, Map map) {
        if (((dw.a) map.put(Character.valueOf(c10), aVar)) == null) {
            return;
        }
        throw new IllegalArgumentException("Delimiter processor conflict with delimiter char '" + c10 + "'");
    }

    private static void d(Iterable iterable, Map map) {
        s sVar;
        Iterator it = iterable.iterator();
        while (it.hasNext()) {
            dw.a aVar = (dw.a) it.next();
            char c10 = aVar.c();
            char a10 = aVar.a();
            if (c10 == a10) {
                dw.a aVar2 = (dw.a) map.get(Character.valueOf(c10));
                if (aVar2 != null && aVar2.c() == aVar2.a()) {
                    if (aVar2 instanceof s) {
                        sVar = (s) aVar2;
                    } else {
                        s sVar2 = new s(c10);
                        sVar2.f(aVar2);
                        sVar = sVar2;
                    }
                    sVar.f(aVar);
                    map.put(Character.valueOf(c10), sVar);
                } else {
                    c(c10, aVar, map);
                }
            } else {
                c(c10, aVar, map);
                c(a10, aVar, map);
            }
        }
    }

    public static BitSet e(Set set) {
        BitSet bitSet = new BitSet();
        Iterator it = set.iterator();
        while (it.hasNext()) {
            bitSet.set(((Character) it.next()).charValue());
        }
        return bitSet;
    }

    public static Map f(List list) {
        HashMap hashMap = new HashMap();
        d(Arrays.asList(new yv.a(), new yv.c()), hashMap);
        d(list, hashMap);
        return hashMap;
    }

    public static BitSet g(BitSet bitSet) {
        BitSet bitSet2 = new BitSet();
        bitSet2.or(bitSet);
        bitSet2.set(10);
        bitSet2.set(96);
        bitSet2.set(91);
        bitSet2.set(93);
        bitSet2.set(92);
        bitSet2.set(33);
        bitSet2.set(60);
        bitSet2.set(38);
        return bitSet2;
    }

    private String h(Pattern pattern) {
        if (this.f55242f >= this.f55241e.length()) {
            return null;
        }
        Matcher matcher = pattern.matcher(this.f55241e);
        matcher.region(this.f55242f, this.f55241e.length());
        if (!matcher.find()) {
            return null;
        }
        this.f55242f = matcher.end();
        return matcher.group();
    }

    private void i(aw.r rVar) {
        if (rVar.c() == rVar.d()) {
            return;
        }
        l(rVar.c(), rVar.d());
    }

    private void j(w wVar, w wVar2, int i10) {
        if (wVar != null && wVar2 != null && wVar != wVar2) {
            StringBuilder sb2 = new StringBuilder(i10);
            sb2.append(wVar.m());
            aw.r e10 = wVar.e();
            aw.r e11 = wVar2.e();
            while (e10 != e11) {
                sb2.append(((w) e10).m());
                aw.r e12 = e10.e();
                e10.l();
                e10 = e12;
            }
            wVar.n(sb2.toString());
        }
    }

    private void k(aw.r rVar, aw.r rVar2) {
        if (rVar != rVar2 && rVar.e() != rVar2) {
            l(rVar.e(), rVar2.g());
        }
    }

    private void l(aw.r rVar, aw.r rVar2) {
        w wVar = null;
        w wVar2 = null;
        int i10 = 0;
        while (rVar != null) {
            if (rVar instanceof w) {
                wVar2 = (w) rVar;
                if (wVar == null) {
                    wVar = wVar2;
                }
                i10 += wVar2.m().length();
            } else {
                j(wVar, wVar2, i10);
                wVar = null;
                wVar2 = null;
                i10 = 0;
            }
            if (rVar == rVar2) {
                break;
            }
            rVar = rVar.e();
        }
        j(wVar, wVar2, i10);
    }

    private aw.r m() {
        String h10 = h(f55231o);
        if (h10 != null) {
            String substring = h10.substring(1, h10.length() - 1);
            aw.n nVar = new aw.n("mailto:" + substring, null);
            nVar.b(new w(substring));
            return nVar;
        }
        String h11 = h(f55232p);
        if (h11 == null) {
            return null;
        }
        String substring2 = h11.substring(1, h11.length() - 1);
        aw.n nVar2 = new aw.n(substring2, null);
        nVar2.b(new w(substring2));
        return nVar2;
    }

    private aw.r n() {
        this.f55242f++;
        if (B() == '\n') {
            aw.h hVar = new aw.h();
            this.f55242f++;
            return hVar;
        }
        if (this.f55242f < this.f55241e.length()) {
            Pattern pattern = f55227k;
            String str = this.f55241e;
            int i10 = this.f55242f;
            if (pattern.matcher(str.substring(i10, i10 + 1)).matches()) {
                String str2 = this.f55241e;
                int i11 = this.f55242f;
                w M = M(str2, i11, i11 + 1);
                this.f55242f++;
                return M;
            }
        }
        return L("\\");
    }

    private aw.r o() {
        String h10;
        String h11 = h(f55230n);
        if (h11 == null) {
            return null;
        }
        int i10 = this.f55242f;
        do {
            h10 = h(f55229m);
            if (h10 == null) {
                this.f55242f = i10;
                return L(h11);
            }
        } while (!h10.equals(h11));
        aw.d dVar = new aw.d();
        String replace = this.f55241e.substring(i10, this.f55242f - h11.length()).replace('\n', ' ');
        if (replace.length() >= 3 && replace.charAt(0) == ' ' && replace.charAt(replace.length() - 1) == ' ' && zv.d.e(replace)) {
            replace = replace.substring(1, replace.length() - 1);
        }
        dVar.n(replace);
        return dVar;
    }

    private aw.r p() {
        int i10 = this.f55242f;
        this.f55242f = i10 + 1;
        if (B() == '[') {
            this.f55242f++;
            w L = L("![");
            b(e.a(L, i10 + 1, this.f55244h, this.f55243g));
            return L;
        }
        return L("!");
    }

    /* JADX WARN: Removed duplicated region for block: B:37:0x00ab  */
    /* JADX WARN: Removed duplicated region for block: B:53:0x00ed  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private aw.r q() {
        /*
            Method dump skipped, instructions count: 247
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: xv.n.q():aw.r");
    }

    private aw.r r(dw.a aVar, char c10) {
        a J = J(aVar, c10);
        if (J == null) {
            return null;
        }
        int i10 = J.f55245a;
        int i11 = this.f55242f;
        int i12 = i11 + i10;
        this.f55242f = i12;
        w M = M(this.f55241e, i11, i12);
        f fVar = new f(M, c10, J.f55247c, J.f55246b, this.f55243g);
        this.f55243g = fVar;
        fVar.f55190g = i10;
        fVar.f55191h = i10;
        f fVar2 = fVar.f55188e;
        if (fVar2 != null) {
            fVar2.f55189f = fVar;
        }
        return M;
    }

    private aw.r s() {
        String h10 = h(f55228l);
        if (h10 != null) {
            return L(zv.b.a(h10));
        }
        return null;
    }

    private aw.r t() {
        String h10 = h(f55226j);
        if (h10 != null) {
            aw.k kVar = new aw.k();
            kVar.m(h10);
            return kVar;
        }
        return null;
    }

    private aw.r u(aw.r rVar) {
        aw.r y10;
        char B = B();
        if (B == 0) {
            return null;
        }
        if (B != '\n') {
            if (B != '!') {
                if (B != '&') {
                    if (B != '<') {
                        if (B != '`') {
                            switch (B) {
                                case '[':
                                    y10 = z();
                                    break;
                                case '\\':
                                    y10 = n();
                                    break;
                                case ']':
                                    y10 = q();
                                    break;
                                default:
                                    if (this.f55238b.get(B)) {
                                        y10 = r((dw.a) this.f55239c.get(Character.valueOf(B)), B);
                                        break;
                                    } else {
                                        y10 = A();
                                        break;
                                    }
                            }
                        } else {
                            y10 = o();
                        }
                    } else {
                        y10 = m();
                        if (y10 == null) {
                            y10 = t();
                        }
                    }
                } else {
                    y10 = s();
                }
            } else {
                y10 = p();
            }
        } else {
            y10 = y(rVar);
        }
        if (y10 != null) {
            return y10;
        }
        this.f55242f++;
        return L(String.valueOf(B));
    }

    private String v() {
        String substring;
        int a10 = zv.c.a(this.f55241e, this.f55242f);
        if (a10 == -1) {
            return null;
        }
        if (B() == '<') {
            substring = this.f55241e.substring(this.f55242f + 1, a10 - 1);
        } else {
            substring = this.f55241e.substring(this.f55242f, a10);
        }
        this.f55242f = a10;
        return zv.a.e(substring);
    }

    private String x() {
        int d10 = zv.c.d(this.f55241e, this.f55242f);
        if (d10 == -1) {
            return null;
        }
        String substring = this.f55241e.substring(this.f55242f + 1, d10 - 1);
        this.f55242f = d10;
        return zv.a.e(substring);
    }

    private aw.r y(aw.r rVar) {
        int i10;
        this.f55242f++;
        if (rVar instanceof w) {
            w wVar = (w) rVar;
            if (wVar.m().endsWith(" ")) {
                String m10 = wVar.m();
                Matcher matcher = f55236t.matcher(m10);
                if (matcher.find()) {
                    i10 = matcher.end() - matcher.start();
                } else {
                    i10 = 0;
                }
                if (i10 > 0) {
                    wVar.n(m10.substring(0, m10.length() - i10));
                }
                if (i10 >= 2) {
                    return new aw.h();
                }
                return new u();
            }
        }
        return new u();
    }

    private aw.r z() {
        int i10 = this.f55242f;
        this.f55242f = i10 + 1;
        w L = L("[");
        b(e.b(L, i10, this.f55244h, this.f55243g));
        return L;
    }

    void I(String str) {
        this.f55241e = str;
        this.f55242f = 0;
        this.f55243g = null;
        this.f55244h = null;
    }

    @Override // bw.a
    public void a(String str, aw.r rVar) {
        I(str.trim());
        aw.r rVar2 = null;
        while (true) {
            rVar2 = u(rVar2);
            if (rVar2 != null) {
                rVar.b(rVar2);
            } else {
                C(null);
                i(rVar);
                return;
            }
        }
    }

    int w() {
        if (this.f55242f < this.f55241e.length() && this.f55241e.charAt(this.f55242f) == '[') {
            int i10 = this.f55242f + 1;
            int c10 = zv.c.c(this.f55241e, i10);
            int i11 = c10 - i10;
            if (c10 != -1 && i11 <= 999 && c10 < this.f55241e.length() && this.f55241e.charAt(c10) == ']') {
                this.f55242f = c10 + 1;
                return i11 + 2;
            }
        }
        return 0;
    }
}
