package nv;

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
import qv.u;
import qv.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class n implements rv.a {

    /* renamed from: i  reason: collision with root package name */
    private static final Pattern f41226i = Pattern.compile("^[!\"#\\$%&'\\(\\)\\*\\+,\\-\\./:;<=>\\?@\\[\\\\\\]\\^_`\\{\\|\\}~\\p{Pc}\\p{Pd}\\p{Pe}\\p{Pf}\\p{Pi}\\p{Po}\\p{Ps}]");

    /* renamed from: j  reason: collision with root package name */
    private static final Pattern f41227j = Pattern.compile("^(?:<[A-Za-z][A-Za-z0-9-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)*\\s*/?>|</[A-Za-z][A-Za-z0-9-]*\\s*[>]|<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->|[<][?].*?[?][>]|<![A-Z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)", 2);

    /* renamed from: k  reason: collision with root package name */
    private static final Pattern f41228k = Pattern.compile("^[!\"#$%&'()*+,./:;<=>?@\\[\\\\\\]^_`{|}~-]");

    /* renamed from: l  reason: collision with root package name */
    private static final Pattern f41229l = Pattern.compile("^&(?:#x[a-f0-9]{1,6}|#[0-9]{1,7}|[a-z][a-z0-9]{1,31});", 2);

    /* renamed from: m  reason: collision with root package name */
    private static final Pattern f41230m = Pattern.compile("`+");

    /* renamed from: n  reason: collision with root package name */
    private static final Pattern f41231n = Pattern.compile("^`+");

    /* renamed from: o  reason: collision with root package name */
    private static final Pattern f41232o = Pattern.compile("^<([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>");

    /* renamed from: p  reason: collision with root package name */
    private static final Pattern f41233p = Pattern.compile("^<[a-zA-Z][a-zA-Z0-9.+-]{1,31}:[^<>\u0000- ]*>");

    /* renamed from: q  reason: collision with root package name */
    private static final Pattern f41234q = Pattern.compile("^ *(?:\n *)?");

    /* renamed from: r  reason: collision with root package name */
    private static final Pattern f41235r = Pattern.compile("^[\\p{Zs}\t\r\n\f]");

    /* renamed from: s  reason: collision with root package name */
    private static final Pattern f41236s = Pattern.compile("\\s+");

    /* renamed from: t  reason: collision with root package name */
    private static final Pattern f41237t = Pattern.compile(" *$");

    /* renamed from: a  reason: collision with root package name */
    private final BitSet f41238a;

    /* renamed from: b  reason: collision with root package name */
    private final BitSet f41239b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f41240c;

    /* renamed from: d  reason: collision with root package name */
    private final rv.b f41241d;

    /* renamed from: e  reason: collision with root package name */
    private String f41242e;

    /* renamed from: f  reason: collision with root package name */
    private int f41243f;

    /* renamed from: g  reason: collision with root package name */
    private f f41244g;

    /* renamed from: h  reason: collision with root package name */
    private e f41245h;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        final int f41246a;

        /* renamed from: b  reason: collision with root package name */
        final boolean f41247b;

        /* renamed from: c  reason: collision with root package name */
        final boolean f41248c;

        a(int i10, boolean z10, boolean z11) {
            this.f41246a = i10;
            this.f41248c = z10;
            this.f41247b = z11;
        }
    }

    public n(rv.b bVar) {
        Map f10 = f(bVar.b());
        this.f41240c = f10;
        BitSet e10 = e(f10.keySet());
        this.f41239b = e10;
        this.f41238a = g(e10);
        this.f41241d = bVar;
    }

    private qv.r A() {
        int i10 = this.f41243f;
        int length = this.f41242e.length();
        while (true) {
            int i11 = this.f41243f;
            if (i11 == length || this.f41238a.get(this.f41242e.charAt(i11))) {
                break;
            }
            this.f41243f++;
        }
        int i12 = this.f41243f;
        if (i10 != i12) {
            return M(this.f41242e, i10, i12);
        }
        return null;
    }

    private char B() {
        if (this.f41243f < this.f41242e.length()) {
            return this.f41242e.charAt(this.f41243f);
        }
        return (char) 0;
    }

    private void C(f fVar) {
        boolean z10;
        HashMap hashMap = new HashMap();
        f fVar2 = this.f41244g;
        while (fVar2 != null) {
            f fVar3 = fVar2.f41189e;
            if (fVar3 == fVar) {
                break;
            }
            fVar2 = fVar3;
        }
        while (fVar2 != null) {
            char c10 = fVar2.f41186b;
            tv.a aVar = (tv.a) this.f41240c.get(Character.valueOf(c10));
            if (fVar2.f41188d && aVar != null) {
                char d10 = aVar.d();
                f fVar4 = fVar2.f41189e;
                int i10 = 0;
                boolean z11 = false;
                while (fVar4 != null && fVar4 != fVar && fVar4 != hashMap.get(Character.valueOf(c10))) {
                    if (fVar4.f41187c && fVar4.f41186b == d10) {
                        i10 = aVar.c(fVar4, fVar2);
                        z11 = true;
                        if (i10 > 0) {
                            z10 = true;
                            break;
                        }
                    }
                    fVar4 = fVar4.f41189e;
                }
                z10 = z11;
                z11 = false;
                if (!z11) {
                    if (!z10) {
                        hashMap.put(Character.valueOf(c10), fVar2.f41189e);
                        if (!fVar2.f41187c) {
                            F(fVar2);
                        }
                    }
                    fVar2 = fVar2.f41190f;
                } else {
                    w wVar = fVar4.f41185a;
                    w wVar2 = fVar2.f41185a;
                    fVar4.f41191g -= i10;
                    fVar2.f41191g -= i10;
                    wVar.n(wVar.m().substring(0, wVar.m().length() - i10));
                    wVar2.n(wVar2.m().substring(0, wVar2.m().length() - i10));
                    G(fVar4, fVar2);
                    k(wVar, wVar2);
                    aVar.e(wVar, wVar2, i10);
                    if (fVar4.f41191g == 0) {
                        E(fVar4);
                    }
                    if (fVar2.f41191g == 0) {
                        f fVar5 = fVar2.f41190f;
                        E(fVar2);
                        fVar2 = fVar5;
                    }
                }
            } else {
                fVar2 = fVar2.f41190f;
            }
        }
        while (true) {
            f fVar6 = this.f41244g;
            if (fVar6 != null && fVar6 != fVar) {
                F(fVar6);
            } else {
                return;
            }
        }
    }

    private void D(f fVar) {
        f fVar2 = fVar.f41189e;
        if (fVar2 != null) {
            fVar2.f41190f = fVar.f41190f;
        }
        f fVar3 = fVar.f41190f;
        if (fVar3 == null) {
            this.f41244g = fVar2;
        } else {
            fVar3.f41189e = fVar2;
        }
    }

    private void E(f fVar) {
        fVar.f41185a.l();
        D(fVar);
    }

    private void F(f fVar) {
        D(fVar);
    }

    private void G(f fVar, f fVar2) {
        f fVar3 = fVar2.f41189e;
        while (fVar3 != null && fVar3 != fVar) {
            f fVar4 = fVar3.f41189e;
            F(fVar3);
            fVar3 = fVar4;
        }
    }

    private void H() {
        this.f41245h = this.f41245h.f41181d;
    }

    private a J(tv.a aVar, char c10) {
        String substring;
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13;
        int i10 = this.f41243f;
        boolean z14 = false;
        int i11 = 0;
        while (B() == c10) {
            i11++;
            this.f41243f++;
        }
        if (i11 < aVar.b()) {
            this.f41243f = i10;
            return null;
        }
        String str = ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE;
        if (i10 == 0) {
            substring = ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE;
        } else {
            substring = this.f41242e.substring(i10 - 1, i10);
        }
        char B = B();
        if (B != 0) {
            str = String.valueOf(B);
        }
        Pattern pattern = f41226i;
        boolean matches = pattern.matcher(substring).matches();
        Pattern pattern2 = f41235r;
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
            if (z10 && c10 == aVar.d()) {
                z12 = true;
            } else {
                z12 = false;
            }
            if (z11 && c10 == aVar.a()) {
                z14 = true;
            }
            z13 = z12;
        }
        this.f41243f = i10;
        return new a(i11, z13, z14);
    }

    private void K() {
        h(f41234q);
    }

    private w L(String str) {
        return new w(str);
    }

    private w M(String str, int i10, int i11) {
        return new w(str.substring(i10, i11));
    }

    private void b(e eVar) {
        e eVar2 = this.f41245h;
        if (eVar2 != null) {
            eVar2.f41184g = true;
        }
        this.f41245h = eVar;
    }

    private static void c(char c10, tv.a aVar, Map map) {
        if (((tv.a) map.put(Character.valueOf(c10), aVar)) == null) {
            return;
        }
        throw new IllegalArgumentException("Delimiter processor conflict with delimiter char '" + c10 + "'");
    }

    private static void d(Iterable iterable, Map map) {
        s sVar;
        Iterator it = iterable.iterator();
        while (it.hasNext()) {
            tv.a aVar = (tv.a) it.next();
            char d10 = aVar.d();
            char a10 = aVar.a();
            if (d10 == a10) {
                tv.a aVar2 = (tv.a) map.get(Character.valueOf(d10));
                if (aVar2 != null && aVar2.d() == aVar2.a()) {
                    if (aVar2 instanceof s) {
                        sVar = (s) aVar2;
                    } else {
                        s sVar2 = new s(d10);
                        sVar2.f(aVar2);
                        sVar = sVar2;
                    }
                    sVar.f(aVar);
                    map.put(Character.valueOf(d10), sVar);
                } else {
                    c(d10, aVar, map);
                }
            } else {
                c(d10, aVar, map);
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
        d(Arrays.asList(new ov.a(), new ov.c()), hashMap);
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
        if (this.f41243f >= this.f41242e.length()) {
            return null;
        }
        Matcher matcher = pattern.matcher(this.f41242e);
        matcher.region(this.f41243f, this.f41242e.length());
        if (!matcher.find()) {
            return null;
        }
        this.f41243f = matcher.end();
        return matcher.group();
    }

    private void i(qv.r rVar) {
        if (rVar.c() == rVar.d()) {
            return;
        }
        l(rVar.c(), rVar.d());
    }

    private void j(w wVar, w wVar2, int i10) {
        if (wVar != null && wVar2 != null && wVar != wVar2) {
            StringBuilder sb2 = new StringBuilder(i10);
            sb2.append(wVar.m());
            qv.r e10 = wVar.e();
            qv.r e11 = wVar2.e();
            while (e10 != e11) {
                sb2.append(((w) e10).m());
                qv.r e12 = e10.e();
                e10.l();
                e10 = e12;
            }
            wVar.n(sb2.toString());
        }
    }

    private void k(qv.r rVar, qv.r rVar2) {
        if (rVar != rVar2 && rVar.e() != rVar2) {
            l(rVar.e(), rVar2.g());
        }
    }

    private void l(qv.r rVar, qv.r rVar2) {
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

    private qv.r m() {
        String h10 = h(f41232o);
        if (h10 != null) {
            String substring = h10.substring(1, h10.length() - 1);
            qv.n nVar = new qv.n("mailto:" + substring, null);
            nVar.b(new w(substring));
            return nVar;
        }
        String h11 = h(f41233p);
        if (h11 == null) {
            return null;
        }
        String substring2 = h11.substring(1, h11.length() - 1);
        qv.n nVar2 = new qv.n(substring2, null);
        nVar2.b(new w(substring2));
        return nVar2;
    }

    private qv.r n() {
        this.f41243f++;
        if (B() == '\n') {
            qv.h hVar = new qv.h();
            this.f41243f++;
            return hVar;
        }
        if (this.f41243f < this.f41242e.length()) {
            Pattern pattern = f41228k;
            String str = this.f41242e;
            int i10 = this.f41243f;
            if (pattern.matcher(str.substring(i10, i10 + 1)).matches()) {
                String str2 = this.f41242e;
                int i11 = this.f41243f;
                w M = M(str2, i11, i11 + 1);
                this.f41243f++;
                return M;
            }
        }
        return L("\\");
    }

    private qv.r o() {
        String h10;
        String h11 = h(f41231n);
        if (h11 == null) {
            return null;
        }
        int i10 = this.f41243f;
        do {
            h10 = h(f41230m);
            if (h10 == null) {
                this.f41243f = i10;
                return L(h11);
            }
        } while (!h10.equals(h11));
        qv.d dVar = new qv.d();
        String replace = this.f41242e.substring(i10, this.f41243f - h11.length()).replace('\n', ' ');
        if (replace.length() >= 3 && replace.charAt(0) == ' ' && replace.charAt(replace.length() - 1) == ' ' && pv.d.e(replace)) {
            replace = replace.substring(1, replace.length() - 1);
        }
        dVar.n(replace);
        return dVar;
    }

    private qv.r p() {
        int i10 = this.f41243f;
        this.f41243f = i10 + 1;
        if (B() == '[') {
            this.f41243f++;
            w L = L("![");
            b(e.a(L, i10 + 1, this.f41245h, this.f41244g));
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
    private qv.r q() {
        /*
            Method dump skipped, instructions count: 247
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: nv.n.q():qv.r");
    }

    private qv.r r(tv.a aVar, char c10) {
        a J = J(aVar, c10);
        if (J == null) {
            return null;
        }
        int i10 = J.f41246a;
        int i11 = this.f41243f;
        int i12 = i11 + i10;
        this.f41243f = i12;
        w M = M(this.f41242e, i11, i12);
        f fVar = new f(M, c10, J.f41248c, J.f41247b, this.f41244g);
        this.f41244g = fVar;
        fVar.f41191g = i10;
        fVar.f41192h = i10;
        f fVar2 = fVar.f41189e;
        if (fVar2 != null) {
            fVar2.f41190f = fVar;
        }
        return M;
    }

    private qv.r s() {
        String h10 = h(f41229l);
        if (h10 != null) {
            return L(pv.b.a(h10));
        }
        return null;
    }

    private qv.r t() {
        String h10 = h(f41227j);
        if (h10 != null) {
            qv.k kVar = new qv.k();
            kVar.m(h10);
            return kVar;
        }
        return null;
    }

    private qv.r u(qv.r rVar) {
        qv.r y10;
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
                                    if (this.f41239b.get(B)) {
                                        y10 = r((tv.a) this.f41240c.get(Character.valueOf(B)), B);
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
        this.f41243f++;
        return L(String.valueOf(B));
    }

    private String v() {
        String substring;
        int a10 = pv.c.a(this.f41242e, this.f41243f);
        if (a10 == -1) {
            return null;
        }
        if (B() == '<') {
            substring = this.f41242e.substring(this.f41243f + 1, a10 - 1);
        } else {
            substring = this.f41242e.substring(this.f41243f, a10);
        }
        this.f41243f = a10;
        return pv.a.e(substring);
    }

    private String x() {
        int d10 = pv.c.d(this.f41242e, this.f41243f);
        if (d10 == -1) {
            return null;
        }
        String substring = this.f41242e.substring(this.f41243f + 1, d10 - 1);
        this.f41243f = d10;
        return pv.a.e(substring);
    }

    private qv.r y(qv.r rVar) {
        int i10;
        this.f41243f++;
        if (rVar instanceof w) {
            w wVar = (w) rVar;
            if (wVar.m().endsWith(" ")) {
                String m10 = wVar.m();
                Matcher matcher = f41237t.matcher(m10);
                if (matcher.find()) {
                    i10 = matcher.end() - matcher.start();
                } else {
                    i10 = 0;
                }
                if (i10 > 0) {
                    wVar.n(m10.substring(0, m10.length() - i10));
                }
                if (i10 >= 2) {
                    return new qv.h();
                }
                return new u();
            }
        }
        return new u();
    }

    private qv.r z() {
        int i10 = this.f41243f;
        this.f41243f = i10 + 1;
        w L = L("[");
        b(e.b(L, i10, this.f41245h, this.f41244g));
        return L;
    }

    void I(String str) {
        this.f41242e = str;
        this.f41243f = 0;
        this.f41244g = null;
        this.f41245h = null;
    }

    @Override // rv.a
    public void a(String str, qv.r rVar) {
        I(str.trim());
        qv.r rVar2 = null;
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
        if (this.f41243f < this.f41242e.length() && this.f41242e.charAt(this.f41243f) == '[') {
            int i10 = this.f41243f + 1;
            int c10 = pv.c.c(this.f41242e, i10);
            int i11 = c10 - i10;
            if (c10 != -1 && i11 <= 999 && c10 < this.f41242e.length() && this.f41242e.charAt(c10) == ']') {
                this.f41243f = c10 + 1;
                return i11 + 2;
            }
        }
        return 0;
    }
}
