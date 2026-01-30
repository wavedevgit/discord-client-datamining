package lt;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.IOException;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.Set;
import jt.h0;
import jt.n0;
import kt.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c implements lt.e, lt.d {

    /* renamed from: r  reason: collision with root package name */
    public static final c f37533r = L();

    /* renamed from: a  reason: collision with root package name */
    private final jt.x f37534a;

    /* renamed from: b  reason: collision with root package name */
    private final e f37535b;

    /* renamed from: c  reason: collision with root package name */
    private final lt.b f37536c;

    /* renamed from: d  reason: collision with root package name */
    private final List f37537d;

    /* renamed from: e  reason: collision with root package name */
    private final Map f37538e;

    /* renamed from: f  reason: collision with root package name */
    private final j f37539f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f37540g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f37541h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f37542i;

    /* renamed from: j  reason: collision with root package name */
    private final int f37543j;

    /* renamed from: k  reason: collision with root package name */
    private final kt.g f37544k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f37545l;

    /* renamed from: m  reason: collision with root package name */
    private final boolean f37546m;

    /* renamed from: n  reason: collision with root package name */
    private final boolean f37547n;

    /* renamed from: o  reason: collision with root package name */
    private final jt.x f37548o;

    /* renamed from: p  reason: collision with root package name */
    private final int f37549p;

    /* renamed from: q  reason: collision with root package name */
    private final boolean f37550q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a implements lt.e {
        a() {
        }

        @Override // lt.e
        /* renamed from: a */
        public Object b(net.time4j.tz.k kVar, Appendable appendable, jt.d dVar, jt.t tVar) {
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b implements lt.d {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Map f37551a;

        b(Map map) {
            this.f37551a = map;
        }

        @Override // lt.d
        /* renamed from: b */
        public net.time4j.tz.k a(CharSequence charSequence, s sVar, jt.d dVar) {
            int f10 = sVar.f();
            int i10 = f10 + 3;
            if (i10 <= charSequence.length()) {
                net.time4j.tz.k kVar = (net.time4j.tz.k) this.f37551a.get(charSequence.subSequence(f10, i10).toString());
                if (kVar != null) {
                    sVar.l(i10);
                    return kVar;
                }
                sVar.k(f10, "No time zone information found.");
                return null;
            }
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: lt.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class C0483c {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f37552a;

        static {
            int[] iArr = new int[w.values().length];
            f37552a = iArr;
            try {
                iArr[w.CLDR.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f37552a[w.CLDR_24.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f37552a[w.CLDR_DATE.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f37552a[w.SIMPLE_DATE_FORMAT.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d {

        /* renamed from: n  reason: collision with root package name */
        private static final jt.c f37553n = kt.a.e("CUSTOM_DAY_PERIOD", net.time4j.k.class);

        /* renamed from: a  reason: collision with root package name */
        private final jt.x f37554a;

        /* renamed from: b  reason: collision with root package name */
        private final jt.x f37555b;

        /* renamed from: c  reason: collision with root package name */
        private final Locale f37556c;

        /* renamed from: d  reason: collision with root package name */
        private List f37557d;

        /* renamed from: e  reason: collision with root package name */
        private LinkedList f37558e;

        /* renamed from: f  reason: collision with root package name */
        private int f37559f;

        /* renamed from: g  reason: collision with root package name */
        private int f37560g;

        /* renamed from: h  reason: collision with root package name */
        private int f37561h;

        /* renamed from: i  reason: collision with root package name */
        private String f37562i;

        /* renamed from: j  reason: collision with root package name */
        private net.time4j.k f37563j;

        /* renamed from: k  reason: collision with root package name */
        private Map f37564k;

        /* renamed from: l  reason: collision with root package name */
        private jt.x f37565l;

        /* renamed from: m  reason: collision with root package name */
        private int f37566m;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class a implements jt.n {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ jt.n f37567d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ jt.n f37568e;

            a(jt.n nVar, jt.n nVar2) {
                this.f37567d = nVar;
                this.f37568e = nVar2;
            }

            @Override // jt.n
            /* renamed from: a */
            public boolean test(jt.o oVar) {
                if (this.f37567d.test(oVar) && this.f37568e.test(oVar)) {
                    return true;
                }
                return false;
            }
        }

        /* synthetic */ d(jt.x xVar, Locale locale, a aVar) {
            this(xVar, locale);
        }

        private i H(jt.p pVar) {
            List list;
            i iVar;
            if (this.f37557d.isEmpty()) {
                iVar = null;
            } else {
                iVar = (i) this.f37557d.get(list.size() - 1);
            }
            if (iVar == null) {
                return null;
            }
            if (iVar.g() && !iVar.i()) {
                throw new IllegalStateException(pVar.name() + " can't be inserted after an element with decimal digits.");
            }
            return iVar;
        }

        private static void I(jt.c cVar) {
            if (cVar.name().charAt(0) != '_') {
                return;
            }
            throw new IllegalArgumentException("Internal attribute not allowed: " + cVar.name());
        }

        private void J(jt.p pVar) {
            jt.x j10 = c.j(this.f37554a, this.f37555b, pVar);
            int s10 = c.s(j10, this.f37554a, this.f37555b);
            if (s10 >= this.f37566m) {
                this.f37565l = j10;
                this.f37566m = s10;
            }
        }

        private void K() {
            if (R(this.f37554a)) {
                return;
            }
            throw new IllegalStateException("Timezone names in specific non-location format can only be reliably combined with instant-like types, for example \"Moment\".");
        }

        private void M() {
            for (int size = this.f37557d.size() - 1; size >= 0; size--) {
                i iVar = (i) this.f37557d.get(size);
                if (!iVar.i()) {
                    if (iVar.g()) {
                        throw new IllegalArgumentException("Cannot define more than one element with decimal digits.");
                    }
                } else {
                    return;
                }
            }
        }

        private void N(boolean z10, boolean z11) {
            M();
            if (!z10 && !z11 && this.f37560g != -1) {
                throw new IllegalArgumentException("Cannot add fractional element with variable width after another numerical element with variable width.");
            }
        }

        private kt.t O(boolean z10, net.time4j.k kVar) {
            lt.b bVar;
            kt.a a10 = new a.b(P()).a();
            lt.b bVar2 = a10;
            if (kVar != null) {
                if (this.f37558e.isEmpty()) {
                    bVar = new lt.b(a10, this.f37556c);
                } else {
                    bVar = (lt.b) this.f37558e.getLast();
                }
                bVar2 = bVar.m(f37553n, kVar);
            }
            for (jt.s sVar : net.time4j.g0.i0().w()) {
                for (jt.p pVar : sVar.c(this.f37556c, bVar2)) {
                    if (z10 && pVar.d() == 'b' && S(pVar)) {
                        return (kt.t) c.h(pVar);
                    }
                    if (!z10 && pVar.d() == 'B' && S(pVar)) {
                        return (kt.t) c.h(pVar);
                    }
                }
            }
            throw new IllegalStateException("Day periods are not supported: " + P().p());
        }

        private static int Q(lt.b bVar) {
            if (bVar == null) {
                return 0;
            }
            return bVar.g();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static boolean R(jt.x xVar) {
            while (!gt.f.class.isAssignableFrom(xVar.p())) {
                xVar = xVar.b();
                if (xVar == null) {
                    return false;
                }
            }
            return true;
        }

        private boolean S(jt.p pVar) {
            if (!pVar.name().endsWith("_DAY_PERIOD")) {
                return false;
            }
            if (this.f37555b != null || this.f37554a.F(pVar)) {
                return true;
            }
            jt.x xVar = this.f37554a;
            do {
                xVar = xVar.b();
                if (xVar == null) {
                    return false;
                }
            } while (!xVar.F(pVar));
            return true;
        }

        private static boolean T(char c10) {
            if (c10 < 'A' || c10 > 'Z') {
                if (c10 >= 'a' && c10 <= 'z') {
                    return true;
                }
                return false;
            }
            return true;
        }

        private void V() {
            this.f37561h = 0;
        }

        private void o(StringBuilder sb2) {
            if (sb2.length() > 0) {
                n(sb2.toString());
                sb2.setLength(0);
            }
        }

        private d s(jt.p pVar, boolean z10, int i10, int i11, x xVar) {
            return t(pVar, z10, i10, i11, xVar, false);
        }

        private d t(jt.p pVar, boolean z10, int i10, int i11, x xVar, boolean z11) {
            J(pVar);
            i H = H(pVar);
            r rVar = new r(pVar, z10, i10, i11, xVar, z11);
            if (z10) {
                int i12 = this.f37560g;
                if (i12 == -1) {
                    w(rVar);
                    return this;
                }
                i iVar = (i) this.f37557d.get(i12);
                w(rVar);
                List list = this.f37557d;
                if (iVar.f() == ((i) list.get(list.size() - 1)).f()) {
                    this.f37560g = i12;
                    this.f37557d.set(i12, iVar.t(i10));
                }
                return this;
            } else if (H != null && H.j() && !H.i()) {
                throw new IllegalStateException("Numerical element with variable width can't be inserted after another numerical element. Consider \"addFixedXXX()\" instead.");
            } else {
                w(rVar);
                this.f37560g = this.f37557d.size() - 1;
                return this;
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void w(h hVar) {
            lt.b bVar;
            int i10;
            int i11;
            this.f37560g = -1;
            if (!this.f37558e.isEmpty()) {
                bVar = (lt.b) this.f37558e.getLast();
                i10 = bVar.g();
                i11 = bVar.i();
            } else {
                bVar = null;
                i10 = 0;
                i11 = 0;
            }
            i iVar = new i(hVar, i10, i11, bVar);
            int i12 = this.f37561h;
            if (i12 > 0) {
                iVar = iVar.n(i12, 0);
                this.f37561h = 0;
            }
            this.f37557d.add(iVar);
        }

        public d A(kt.t tVar) {
            J(tVar);
            w(a0.b(tVar));
            return this;
        }

        public d B() {
            if (R(this.f37554a)) {
                w(c0.INSTANCE);
                return this;
            }
            throw new IllegalStateException("Only unix timestamps can have a timezone id.");
        }

        public d C(kt.e eVar, boolean z10, List list) {
            w(new e0(eVar, z10, list));
            return this;
        }

        public d D(jt.p pVar) {
            J(pVar);
            H(pVar);
            f0 f0Var = new f0(pVar);
            int i10 = this.f37560g;
            if (i10 == -1) {
                w(f0Var);
                this.f37560g = this.f37557d.size() - 1;
                return this;
            }
            i iVar = (i) this.f37557d.get(i10);
            b0(kt.a.f36549f, kt.g.STRICT);
            w(f0Var);
            L();
            List list = this.f37557d;
            if (iVar.f() == ((i) list.get(list.size() - 1)).f()) {
                this.f37560g = i10;
                this.f37557d.set(i10, iVar.t(2));
            }
            return this;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public d E(jt.p pVar, int i10, boolean z10) {
            i iVar;
            if (this.f37557d.isEmpty()) {
                iVar = null;
            } else {
                List list = this.f37557d;
                iVar = (i) list.get(list.size() - 1);
            }
            if (iVar != null && !iVar.i() && iVar.j() && i10 == 4) {
                return t(pVar, true, 4, 4, x.SHOW_NEVER, z10);
            }
            return t(pVar, false, i10, 10, x.SHOW_WHEN_NEGATIVE, z10);
        }

        public c F() {
            return G(kt.a.f());
        }

        public c G(kt.a aVar) {
            boolean z10;
            if (aVar != null) {
                int size = this.f37557d.size();
                HashMap hashMap = null;
                for (int i10 = 0; i10 < size; i10++) {
                    i iVar = (i) this.f37557d.get(i10);
                    if (iVar.i()) {
                        int f10 = iVar.f();
                        int i11 = size - 1;
                        while (true) {
                            if (i11 > i10) {
                                if (((i) this.f37557d.get(i11)).f() == f10) {
                                    if (hashMap == null) {
                                        hashMap = new HashMap();
                                    }
                                    hashMap.put(Integer.valueOf(i10), iVar.m(i11));
                                    z10 = true;
                                } else {
                                    i11--;
                                }
                            } else {
                                z10 = false;
                                break;
                            }
                        }
                        if (!z10) {
                            throw new IllegalStateException("Missing format processor after or-operator.");
                        }
                    }
                }
                if (hashMap != null) {
                    for (Integer num : hashMap.keySet()) {
                        this.f37557d.set(num.intValue(), hashMap.get(num));
                    }
                }
                c cVar = new c(this.f37554a, this.f37555b, this.f37556c, this.f37557d, this.f37564k, aVar, this.f37565l, null);
                String str = this.f37562i;
                if (str == null) {
                    str = "";
                }
                if (this.f37563j != null || !str.isEmpty()) {
                    lt.b bVar = cVar.f37536c;
                    if (!str.isEmpty()) {
                        bVar = bVar.m(kt.a.f36567x, str);
                    }
                    net.time4j.k kVar = this.f37563j;
                    if (kVar != null) {
                        bVar = bVar.m(f37553n, kVar);
                    }
                    return new c(cVar, bVar, (a) null);
                }
                return cVar;
            }
            throw new NullPointerException("Missing format attributes.");
        }

        public d L() {
            this.f37558e.removeLast();
            V();
            return this;
        }

        public jt.x P() {
            jt.x xVar = this.f37555b;
            if (xVar == null) {
                return this.f37554a;
            }
            return xVar;
        }

        public d U() {
            int i10;
            i iVar;
            int i11;
            int i12;
            if (!this.f37558e.isEmpty()) {
                i10 = ((lt.b) this.f37558e.getLast()).i();
            } else {
                i10 = 0;
            }
            if (!this.f37557d.isEmpty()) {
                i11 = this.f37557d.size() - 1;
                iVar = (i) this.f37557d.get(i11);
                i12 = iVar.f();
            } else {
                iVar = null;
                i11 = -1;
                i12 = -1;
            }
            if (i10 == i12) {
                this.f37557d.set(i11, iVar.v());
                V();
                this.f37560g = -1;
                return this;
            }
            throw new IllegalStateException("Cannot start or-block without any previous step in current section.");
        }

        public d W(jt.n nVar, int i10) {
            w(new y(nVar, i10));
            return this;
        }

        public d X() {
            return Y(null);
        }

        public d Y(jt.n nVar) {
            lt.b bVar;
            jt.n nVar2;
            a aVar;
            V();
            a.b bVar2 = new a.b();
            if (!this.f37558e.isEmpty()) {
                bVar = (lt.b) this.f37558e.getLast();
                bVar2.f(bVar.e());
                nVar2 = bVar.f();
            } else {
                bVar = null;
                nVar2 = null;
            }
            int Q = Q(bVar) + 1;
            int i10 = this.f37559f + 1;
            this.f37559f = i10;
            if (nVar != null) {
                if (nVar2 == null) {
                    aVar = nVar;
                } else {
                    aVar = new a(nVar2, nVar);
                }
            } else {
                aVar = nVar2;
            }
            this.f37558e.addLast(new lt.b(bVar2.a(), this.f37556c, Q, i10, aVar));
            return this;
        }

        public d Z(jt.c cVar, char c10) {
            lt.b l10;
            I(cVar);
            V();
            if (this.f37558e.isEmpty()) {
                l10 = new lt.b(new a.b().b(cVar, c10).a(), this.f37556c);
            } else {
                lt.b bVar = (lt.b) this.f37558e.getLast();
                a.b bVar2 = new a.b();
                bVar2.f(bVar.e());
                bVar2.b(cVar, c10);
                l10 = bVar.l(bVar2.a());
            }
            this.f37558e.addLast(l10);
            return this;
        }

        public d a0(jt.c cVar, int i10) {
            lt.b l10;
            I(cVar);
            V();
            if (this.f37558e.isEmpty()) {
                l10 = new lt.b(new a.b().c(cVar, i10).a(), this.f37556c);
            } else {
                lt.b bVar = (lt.b) this.f37558e.getLast();
                a.b bVar2 = new a.b();
                bVar2.f(bVar.e());
                bVar2.c(cVar, i10);
                l10 = bVar.l(bVar2.a());
            }
            this.f37558e.addLast(l10);
            return this;
        }

        public d b0(jt.c cVar, Enum r52) {
            lt.b l10;
            I(cVar);
            V();
            if (this.f37558e.isEmpty()) {
                l10 = new lt.b(new a.b().d(cVar, r52).a(), this.f37556c);
            } else {
                lt.b bVar = (lt.b) this.f37558e.getLast();
                a.b bVar2 = new a.b();
                bVar2.f(bVar.e());
                bVar2.d(cVar, r52);
                l10 = bVar.l(bVar2.a());
            }
            this.f37558e.addLast(l10);
            return this;
        }

        public d d(jt.p pVar, lt.e eVar, lt.d dVar) {
            J(pVar);
            w(new lt.f(pVar, eVar, dVar));
            return this;
        }

        public d e() {
            return A(O(false, null));
        }

        public d f() {
            return A(O(true, null));
        }

        public d g(jt.p pVar, int i10) {
            return s(pVar, true, i10, i10, x.SHOW_NEVER);
        }

        public d h(jt.p pVar, int i10) {
            return s(pVar, true, i10, i10, x.SHOW_NEVER);
        }

        public d i(jt.p pVar, int i10, int i11, boolean z10) {
            boolean z11;
            J(pVar);
            if (!z10 && i10 == i11) {
                z11 = true;
            } else {
                z11 = false;
            }
            N(z11, z10);
            j jVar = new j(pVar, i10, i11, z10);
            int i12 = this.f37560g;
            if (i12 != -1 && z11) {
                i iVar = (i) this.f37557d.get(i12);
                w(jVar);
                List list = this.f37557d;
                if (iVar.f() == ((i) list.get(list.size() - 1)).f()) {
                    this.f37560g = i12;
                    this.f37557d.set(i12, iVar.t(i10));
                }
                return this;
            }
            w(jVar);
            return this;
        }

        public d j(jt.p pVar, int i10, int i11) {
            return s(pVar, false, i10, i11, x.SHOW_NEVER);
        }

        public d k(jt.p pVar, int i10, int i11, x xVar) {
            return s(pVar, false, i10, i11, xVar);
        }

        public d l(char c10) {
            return n(String.valueOf(c10));
        }

        public d m(char c10, char c11) {
            w(new m(c10, c11));
            return this;
        }

        public d n(String str) {
            int i10;
            i iVar;
            m mVar = new m(str);
            int c10 = mVar.c();
            if (c10 > 0) {
                if (this.f37557d.isEmpty()) {
                    iVar = null;
                } else {
                    List list = this.f37557d;
                    iVar = (i) list.get(list.size() - 1);
                }
                if (iVar != null && iVar.g() && !iVar.i()) {
                    throw new IllegalStateException("Numerical literal can't be inserted after an element with decimal digits.");
                }
            }
            if (c10 != 0 && (i10 = this.f37560g) != -1) {
                i iVar2 = (i) this.f37557d.get(i10);
                w(mVar);
                int f10 = iVar2.f();
                List list2 = this.f37557d;
                if (f10 == ((i) list2.get(list2.size() - 1)).f()) {
                    this.f37560g = i10;
                    this.f37557d.set(i10, iVar2.t(c10));
                }
                return this;
            }
            w(mVar);
            return this;
        }

        public d p() {
            w(new n(false));
            return this;
        }

        public d q(jt.p pVar, int i10, int i11, x xVar) {
            return s(pVar, false, i10, i11, xVar);
        }

        public d r() {
            K();
            w(new d0(false));
            return this;
        }

        public d u(jt.p pVar, int i10, int i11) {
            return s(pVar, false, i10, i11, x.SHOW_NEVER);
        }

        public d v(String str, w wVar) {
            if (wVar != null) {
                Map map = Collections.EMPTY_MAP;
                int length = str.length();
                Locale locale = this.f37556c;
                StringBuilder sb2 = new StringBuilder();
                if (!this.f37558e.isEmpty()) {
                    locale = ((lt.b) this.f37558e.getLast()).h();
                }
                int i10 = 0;
                while (i10 < length) {
                    char charAt = str.charAt(i10);
                    if (T(charAt)) {
                        o(sb2);
                        int i11 = i10 + 1;
                        while (i11 < length && str.charAt(i11) == charAt) {
                            i11++;
                        }
                        Map C = wVar.C(this, locale, charAt, i11 - i10);
                        if (!C.isEmpty()) {
                            if (map.isEmpty()) {
                                map = C;
                            } else {
                                HashMap hashMap = new HashMap(map);
                                hashMap.putAll(C);
                                map = hashMap;
                            }
                        }
                        i10 = i11 - 1;
                    } else if (charAt == '\'') {
                        o(sb2);
                        int i12 = i10 + 1;
                        int i13 = i12;
                        while (i13 < length) {
                            if (str.charAt(i13) == '\'') {
                                int i14 = i13 + 1;
                                if (i14 >= length || str.charAt(i14) != '\'') {
                                    break;
                                }
                                i13 = i14;
                            }
                            i13++;
                        }
                        if (i13 < length) {
                            if (i12 == i13) {
                                l('\'');
                            } else {
                                n(str.substring(i12, i13).replace("''", "'"));
                            }
                            i10 = i13;
                        } else {
                            throw new IllegalArgumentException("String literal in pattern not closed: " + str);
                        }
                    } else if (charAt == '[') {
                        o(sb2);
                        X();
                    } else if (charAt == ']') {
                        o(sb2);
                        L();
                    } else if (charAt == '|') {
                        try {
                            o(sb2);
                            U();
                        } catch (IllegalStateException e10) {
                            throw new IllegalArgumentException(e10);
                        }
                    } else if (charAt != '#' && charAt != '{' && charAt != '}') {
                        sb2.append(charAt);
                    } else {
                        throw new IllegalArgumentException("Pattern contains reserved character: '" + charAt + "'");
                    }
                    i10++;
                }
                o(sb2);
                if (!map.isEmpty()) {
                    int size = this.f37557d.size();
                    for (int i15 = 0; i15 < size; i15++) {
                        i iVar = (i) this.f37557d.get(i15);
                        jt.p element = iVar.d().getElement();
                        if (map.containsKey(element)) {
                            this.f37557d.set(i15, iVar.x((jt.p) map.get(element)));
                        }
                    }
                }
                if (this.f37562i != null) {
                    str = "";
                }
                this.f37562i = str;
                return this;
            }
            throw new NullPointerException("Missing pattern type.");
        }

        public d x() {
            w(new n(true));
            return this;
        }

        public d y() {
            K();
            w(new d0(true));
            return this;
        }

        public d z(jt.p pVar) {
            Enum[] enumArr;
            J(pVar);
            if (pVar instanceof kt.t) {
                w(a0.b((kt.t) kt.t.class.cast(pVar)));
                return this;
            }
            HashMap hashMap = new HashMap();
            for (Enum r42 : (Enum[]) pVar.getType().getEnumConstants()) {
                hashMap.put(r42, r42.toString());
            }
            w(new o(pVar, hashMap));
            return this;
        }

        private d(jt.x xVar, Locale locale) {
            this(xVar, locale, (jt.x) null);
        }

        private d(jt.x xVar, Locale locale, jt.x xVar2) {
            if (xVar == null) {
                throw new NullPointerException("Missing chronology.");
            }
            if (locale != null) {
                this.f37554a = xVar;
                this.f37555b = xVar2;
                this.f37556c = locale;
                this.f37557d = new ArrayList();
                this.f37558e = new LinkedList();
                this.f37559f = 0;
                this.f37560g = -1;
                this.f37561h = 0;
                this.f37562i = null;
                this.f37563j = null;
                this.f37564k = new HashMap();
                this.f37565l = xVar;
                this.f37566m = 0;
                return;
            }
            throw new NullPointerException("Missing locale.");
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class e implements jt.u {

        /* renamed from: d  reason: collision with root package name */
        private final jt.x f37570d;

        /* renamed from: e  reason: collision with root package name */
        private final List f37571e;

        private e(jt.x xVar) {
            this.f37570d = xVar;
            ArrayList arrayList = new ArrayList();
            arrayList.addAll(xVar.w());
            arrayList.addAll(net.time4j.g0.i0().w());
            this.f37571e = Collections.unmodifiableList(arrayList);
        }

        static e g(jt.x xVar) {
            if (xVar == null) {
                return null;
            }
            return new e(xVar);
        }

        @Override // jt.u
        public jt.f0 a() {
            return this.f37570d.a();
        }

        @Override // jt.u
        public jt.x b() {
            throw new UnsupportedOperationException("Not used.");
        }

        @Override // jt.u
        /* renamed from: d */
        public net.time4j.r j(jt.q qVar, jt.d dVar, boolean z10, boolean z11) {
            Object j10 = this.f37570d.j(qVar, dVar, z10, z11);
            net.time4j.g0 g0Var = (net.time4j.g0) net.time4j.g0.i0().j(qVar, dVar, z10, z11);
            if (j10 instanceof jt.m) {
                return (net.time4j.r) c.h(net.time4j.r.b((jt.m) jt.m.class.cast(j10), g0Var));
            }
            throw new IllegalStateException("Cannot determine calendar type: " + j10);
        }

        public jt.x e() {
            return this.f37570d;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof e) {
                return this.f37570d.equals(((e) obj).f37570d);
            }
            return false;
        }

        public List f() {
            return this.f37571e;
        }

        @Override // jt.u
        public int h() {
            return this.f37570d.h();
        }

        public int hashCode() {
            return this.f37570d.hashCode();
        }

        @Override // jt.u
        /* renamed from: i */
        public jt.o c(net.time4j.r rVar, jt.d dVar) {
            throw new UnsupportedOperationException("Not used.");
        }

        @Override // jt.u
        public String k(jt.y yVar, Locale locale) {
            throw new UnsupportedOperationException("Not used.");
        }

        public String toString() {
            return this.f37570d.p().getName();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class f implements jt.o, gt.f {

        /* renamed from: d  reason: collision with root package name */
        private final net.time4j.r f37572d;

        /* renamed from: e  reason: collision with root package name */
        private final String f37573e;

        /* renamed from: i  reason: collision with root package name */
        private final net.time4j.tz.k f37574i;

        /* synthetic */ f(net.time4j.r rVar, String str, net.time4j.tz.k kVar, a aVar) {
            this(rVar, str, kVar);
        }

        private gt.f b() {
            jt.f0 f0Var;
            try {
                f0Var = jt.x.G(this.f37572d.c().getClass()).a();
            } catch (RuntimeException unused) {
                f0Var = jt.f0.f32758a;
            }
            return this.f37572d.a(net.time4j.tz.l.N(this.f37574i), f0Var);
        }

        @Override // gt.f
        public int a() {
            return b().a();
        }

        @Override // jt.o
        public Object i(jt.p pVar) {
            return this.f37572d.i(pVar);
        }

        @Override // jt.o
        public boolean l() {
            return true;
        }

        @Override // jt.o
        public boolean o(jt.p pVar) {
            return this.f37572d.o(pVar);
        }

        @Override // jt.o
        public Object p(jt.p pVar) {
            return this.f37572d.p(pVar);
        }

        @Override // jt.o
        public int q(jt.p pVar) {
            return this.f37572d.q(pVar);
        }

        @Override // gt.f
        public long r() {
            return b().r();
        }

        @Override // jt.o
        public Object t(jt.p pVar) {
            return this.f37572d.t(pVar);
        }

        @Override // jt.o
        public net.time4j.tz.k v() {
            return this.f37574i;
        }

        private f(net.time4j.r rVar, String str, net.time4j.tz.k kVar) {
            this.f37572d = rVar;
            this.f37573e = str;
            this.f37574i = kVar;
        }
    }

    /* synthetic */ c(jt.x xVar, jt.x xVar2, Locale locale, List list, Map map, kt.a aVar, jt.x xVar3, a aVar2) {
        this(xVar, xVar2, locale, list, map, aVar, xVar3);
    }

    private static boolean A(jt.x xVar, jt.x xVar2, jt.p pVar) {
        for (jt.s sVar : xVar.w()) {
            if (sVar.a(pVar)) {
                return true;
            }
        }
        if (xVar2 != null) {
            if (pVar.y()) {
                for (jt.s sVar2 : xVar2.w()) {
                    if (sVar2.a(pVar)) {
                        return true;
                    }
                }
                return false;
            } else if (pVar.C() && net.time4j.g0.i0().F(pVar)) {
                for (jt.s sVar3 : net.time4j.g0.i0().w()) {
                    if (sVar3.a(pVar)) {
                        return true;
                    }
                }
                return false;
            } else {
                return false;
            }
        }
        while (true) {
            xVar = xVar.b();
            if (xVar != null) {
                for (jt.s sVar4 : xVar.w()) {
                    if (sVar4.a(pVar)) {
                        return true;
                    }
                }
            } else {
                return false;
            }
        }
    }

    public static c B(kt.e eVar, kt.e eVar2, Locale locale, net.time4j.tz.k kVar) {
        d dVar = new d(net.time4j.a0.T(), locale, (a) null);
        dVar.w(new z(eVar, eVar2));
        return dVar.F().V(kVar);
    }

    public static c C(String str, w wVar, Locale locale, jt.x xVar) {
        d dVar = new d(xVar, locale, (a) null);
        g(dVar, str, wVar);
        try {
            return dVar.F();
        } catch (IllegalStateException e10) {
            throw new IllegalArgumentException(e10);
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:38:0x0071  */
    /* JADX WARN: Removed duplicated region for block: B:40:0x007e  */
    /* JADX WARN: Removed duplicated region for block: B:45:0x008e  */
    /* JADX WARN: Removed duplicated region for block: B:75:0x0123  */
    /* JADX WARN: Removed duplicated region for block: B:79:0x013b  */
    /* JADX WARN: Removed duplicated region for block: B:82:0x0158  */
    /* JADX WARN: Removed duplicated region for block: B:95:0x00df A[EXC_TOP_SPLITTER, SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static java.lang.Object F(lt.c r15, jt.u r16, java.util.List r17, java.lang.CharSequence r18, lt.s r19, jt.d r20, kt.g r21, boolean r22, boolean r23) {
        /*
            Method dump skipped, instructions count: 430
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: lt.c.F(lt.c, jt.u, java.util.List, java.lang.CharSequence, lt.s, jt.d, kt.g, boolean, boolean):java.lang.Object");
    }

    private static Object G(c cVar, jt.x xVar, int i10, CharSequence charSequence, s sVar, jt.d dVar, kt.g gVar, boolean z10) {
        boolean z11;
        jt.x xVar2;
        CharSequence charSequence2;
        s sVar2;
        kt.g gVar2;
        boolean z12;
        c cVar2;
        jt.x xVar3;
        Object G;
        jt.x b10 = xVar.b();
        if (b10 != null && xVar != (xVar3 = cVar.f37548o)) {
            if (b10 == xVar3) {
                G = F(cVar, b10, b10.w(), charSequence, sVar, dVar, gVar, true, z10);
            } else {
                G = G(cVar, b10, i10 + 1, charSequence, sVar, dVar, gVar, z10);
            }
            if (sVar.i()) {
                return null;
            }
            if (G == null) {
                jt.q g10 = sVar.g();
                sVar.k(charSequence.length(), v(g10) + t(g10));
                return null;
            }
            jt.q h10 = sVar.h();
            try {
                if (b10 instanceof h0) {
                    Q(h10, ((h0) h0.class.cast(b10)).M(), G);
                    Object j10 = xVar.j(h10, dVar, gVar.a(), false);
                    if (j10 == null) {
                        if (!sVar.i()) {
                            sVar.k(charSequence.length(), v(h10) + t(h10));
                        }
                        return null;
                    } else if (gVar.e()) {
                        return i(h10, j10, charSequence, sVar);
                    } else {
                        return j10;
                    }
                }
                throw new IllegalStateException("Unsupported chronology or preparser: " + xVar);
            } catch (RuntimeException e10) {
                sVar.k(charSequence.length(), e10.getMessage() + t(h10));
                return null;
            }
        }
        List w10 = xVar.w();
        if (i10 > 0) {
            z11 = true;
            cVar2 = cVar;
            xVar2 = xVar;
            charSequence2 = charSequence;
            gVar2 = gVar;
            z12 = z10;
            sVar2 = sVar;
        } else {
            z11 = false;
            xVar2 = xVar;
            charSequence2 = charSequence;
            sVar2 = sVar;
            gVar2 = gVar;
            z12 = z10;
            cVar2 = cVar;
        }
        return F(cVar2, xVar2, w10, charSequence2, sVar2, dVar, gVar2, z11, z12);
    }

    private jt.q H(CharSequence charSequence, s sVar, jt.d dVar, boolean z10, int i10) {
        LinkedList linkedList;
        v vVar;
        v vVar2;
        int i11;
        jt.p element;
        v vVar3 = new v(i10, this.f37545l);
        vVar3.d0(sVar.f());
        if (this.f37540g) {
            LinkedList linkedList2 = new LinkedList();
            linkedList2.push(vVar3);
            linkedList = linkedList2;
        } else {
            linkedList = null;
        }
        int size = this.f37537d.size();
        int i12 = 0;
        int i13 = 0;
        int i14 = 0;
        while (i14 < size) {
            i iVar = (i) this.f37537d.get(i14);
            if (linkedList == null) {
                vVar2 = vVar3;
                vVar = vVar2;
            } else {
                i12 = iVar.b();
                int i15 = i12;
                while (i15 > i13) {
                    vVar3 = new v(i10 >>> 1, this.f37545l);
                    vVar3.d0(sVar.f());
                    linkedList.push(vVar3);
                    i15--;
                }
                while (i15 < i13) {
                    vVar3 = (v) linkedList.pop();
                    ((v) linkedList.peek()).X(vVar3);
                    i15++;
                }
                vVar = vVar3;
                vVar2 = (v) linkedList.peek();
            }
            int i16 = i12;
            sVar.b();
            iVar.q(charSequence, sVar, dVar, vVar2, z10);
            if (sVar.j() && (element = iVar.d().getElement()) != null && this.f37538e.containsKey(element)) {
                vVar2.I(element, this.f37538e.get(element));
                vVar2.E(n0.ERROR_MESSAGE, null);
                sVar.a();
                sVar.b();
            }
            if (sVar.i()) {
                int f10 = iVar.f();
                if (!iVar.i()) {
                    i11 = i14 + 1;
                    while (i11 < size) {
                        i iVar2 = (i) this.f37537d.get(i11);
                        if (iVar2.i() && iVar2.f() == f10) {
                            break;
                        }
                        i11++;
                    }
                }
                i11 = i14;
                if (i11 <= i14 && !iVar.i()) {
                    if (i16 == 0) {
                        if (linkedList != null) {
                            vVar = (v) linkedList.peek();
                        }
                        vVar.c0();
                        return vVar;
                    }
                    int b10 = iVar.b();
                    int i17 = i11;
                    for (int i18 = i14 + 1; i18 < size && ((i) this.f37537d.get(i18)).b() > b10; i18++) {
                        i17 = i18;
                    }
                    int i19 = size - 1;
                    while (true) {
                        if (i19 <= i17) {
                            break;
                        } else if (((i) this.f37537d.get(i19)).f() == f10) {
                            i17 = i19;
                            break;
                        } else {
                            i19--;
                        }
                    }
                    i16--;
                    vVar3 = (v) linkedList.pop();
                    sVar.a();
                    sVar.l(vVar3.S());
                    i14 = i17;
                    i14++;
                    i12 = i16;
                    i13 = i12;
                } else {
                    if (linkedList != null) {
                        vVar = (v) linkedList.pop();
                    }
                    sVar.a();
                    sVar.l(vVar.S());
                    vVar.b0();
                    if (linkedList != null) {
                        linkedList.push(vVar);
                    }
                    i14 = i11;
                }
            } else if (iVar.i()) {
                i14 = iVar.u();
            }
            vVar3 = vVar;
            i14++;
            i12 = i16;
            i13 = i12;
        }
        while (i12 > 0) {
            vVar3 = (v) linkedList.pop();
            ((v) linkedList.peek()).X(vVar3);
            i12--;
        }
        if (linkedList != null) {
            vVar3 = (v) linkedList.peek();
        }
        vVar3.c0();
        return vVar3;
    }

    private static c L() {
        d N = N(net.time4j.a0.class, Locale.ENGLISH);
        M(N);
        N.C(kt.e.MEDIUM, false, Arrays.asList("GMT", "UT", "Z"));
        N.U();
        M(N);
        HashMap hashMap = new HashMap();
        net.time4j.tz.f fVar = net.time4j.tz.f.BEHIND_UTC;
        hashMap.put("EST", net.time4j.tz.p.r(fVar, 5));
        hashMap.put("EDT", net.time4j.tz.p.r(fVar, 4));
        hashMap.put("CST", net.time4j.tz.p.r(fVar, 6));
        hashMap.put("CDT", net.time4j.tz.p.r(fVar, 5));
        hashMap.put("MST", net.time4j.tz.p.r(fVar, 7));
        hashMap.put("MDT", net.time4j.tz.p.r(fVar, 6));
        hashMap.put("PST", net.time4j.tz.p.r(fVar, 8));
        hashMap.put("PDT", net.time4j.tz.p.r(fVar, 7));
        N.w(new lt.f(b0.TIMEZONE_OFFSET, new a(), new b(hashMap)));
        return N.F().V(net.time4j.tz.p.f40924v);
    }

    private static void M(d dVar) {
        d X = dVar.X();
        jt.c cVar = kt.a.f36550g;
        kt.v vVar = kt.v.ABBREVIATED;
        X.b0(cVar, vVar).z(net.time4j.f0.G).L().n(", ").L().j(net.time4j.f0.F, 1, 2).l(' ').b0(cVar, vVar).z(net.time4j.f0.D).L().l(' ').g(net.time4j.f0.A, 4).l(' ').g(net.time4j.g0.F, 2).l(':').g(net.time4j.g0.H, 2).X().l(':').g(net.time4j.g0.J, 2).L().l(' ');
    }

    public static d N(Class cls, Locale locale) {
        if (cls != null) {
            jt.x G = jt.x.G(cls);
            if (G != null) {
                return new d(G, locale, (a) null);
            }
            throw new IllegalArgumentException("Not formattable: " + cls);
        }
        throw new NullPointerException("Missing chronological type.");
    }

    private static void O(jt.q qVar, jt.p pVar, Object obj) {
        qVar.E(pVar, pVar.getType().cast(obj));
    }

    private static String P(int i10, CharSequence charSequence) {
        int length = charSequence.length();
        if (length - i10 <= 10) {
            return charSequence.subSequence(i10, length).toString();
        }
        return charSequence.subSequence(i10, i10 + 10).toString() + "...";
    }

    private static void Q(jt.q qVar, jt.p pVar, Object obj) {
        qVar.E(pVar, pVar.getType().cast(obj));
    }

    private static void g(d dVar, String str, w wVar) {
        boolean z10;
        int length = str.length();
        StringBuilder sb2 = new StringBuilder(length);
        int i10 = 0;
        while (i10 < length) {
            char charAt = str.charAt(i10);
            if (charAt == '\'') {
                int i11 = i10 + 1;
                if (str.charAt(i11) == 'Z') {
                    z10 = true;
                } else {
                    z10 = false;
                }
                while (i11 < length) {
                    if (str.charAt(i11) == '\'') {
                        int i12 = i11 + 1;
                        if (i12 < length && str.charAt(i12) == '\'') {
                            i11 = i12;
                        } else {
                            if (z10 && i11 == i10 + 2 && d.R(dVar.f37554a)) {
                                throw new IllegalArgumentException("Z-literal (=UTC+00) should not be escaped: " + str);
                            }
                            i10 = i11;
                        }
                    }
                    i11++;
                }
                i10 = i11;
            } else {
                sb2.append(charAt);
            }
            i10++;
        }
        String sb3 = sb2.toString();
        int i13 = C0483c.f37552a[wVar.ordinal()];
        if (i13 == 1 || i13 == 2 || i13 == 3 || i13 == 4) {
            if ((sb3.contains("h") || sb3.contains("K")) && !sb3.contains("a") && !sb3.contains("b") && !sb3.contains("B")) {
                throw new IllegalArgumentException("12-hour-clock requires am/pm-marker or dayperiod: " + str);
            } else if (sb3.contains("Y") && ((sb3.contains("M") || sb3.contains("L")) && !sb3.contains("w"))) {
                throw new IllegalArgumentException("Y as week-based-year requires a week-date-format: " + str);
            } else if (sb3.contains("D") && ((sb3.contains("M") || sb3.contains("L")) && !sb3.contains("d"))) {
                throw new IllegalArgumentException("D is the day of year but not the day of month: " + str);
            }
        }
        dVar.v(str, wVar);
    }

    /* JADX WARN: Code restructure failed: missing block: B:38:0x0108, code lost:
        if (((net.time4j.g0) r10.p(r6)).h() == 24) goto L41;
     */
    /* JADX WARN: Removed duplicated region for block: B:44:0x012c  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static java.lang.Object i(jt.q r10, java.lang.Object r11, java.lang.CharSequence r12, lt.s r13) {
        /*
            Method dump skipped, instructions count: 465
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: lt.c.i(jt.q, java.lang.Object, java.lang.CharSequence, lt.s):java.lang.Object");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static jt.x j(jt.x xVar, jt.x xVar2, jt.p pVar) {
        if (xVar.F(pVar)) {
            return xVar;
        }
        if (xVar2 == null) {
            do {
                xVar = xVar.b();
                if (xVar != null) {
                }
            } while (!xVar.F(pVar));
            return xVar;
        } else if (pVar.y() && xVar2.F(pVar)) {
            return xVar2;
        } else {
            if (pVar.C() && net.time4j.g0.i0().F(pVar)) {
                return net.time4j.g0.i0();
            }
        }
        throw new IllegalArgumentException("Unsupported element: " + pVar.name());
    }

    private jt.o k(Object obj, jt.d dVar) {
        net.time4j.r q02;
        e eVar = this.f37535b;
        if (eVar == null) {
            return this.f37534a.c(obj, dVar);
        }
        try {
            Class p10 = eVar.e().p();
            jt.f0 f0Var = (jt.f0) dVar.b(kt.a.f36564u, this.f37535b.a());
            net.time4j.a0 a0Var = (net.time4j.a0) net.time4j.a0.class.cast(obj);
            net.time4j.tz.k kVar = (net.time4j.tz.k) dVar.c(kt.a.f36547d);
            String str = "";
            if (jt.l.class.isAssignableFrom(p10)) {
                android.support.v4.media.session.b.a(h(this.f37535b.e()));
                str = (String) dVar.c(kt.a.f36563t);
                q02 = a0Var.p0(null, str, kVar, f0Var);
            } else if (jt.m.class.isAssignableFrom(p10)) {
                q02 = a0Var.q0(this.f37535b.e(), kVar, f0Var);
            } else {
                throw new IllegalStateException("Unexpected calendar override: " + p10);
            }
            return new f(q02, str, kVar, null);
        } catch (ClassCastException e10) {
            throw new IllegalArgumentException("Not formattable: " + obj, e10);
        } catch (NoSuchElementException e11) {
            throw new IllegalArgumentException(e11.getMessage(), e11);
        }
    }

    private String m(jt.o oVar) {
        StringBuilder sb2 = new StringBuilder(this.f37537d.size() * 8);
        try {
            K(oVar, sb2, this.f37536c, false);
            return sb2.toString();
        } catch (IOException e10) {
            throw new IllegalStateException(e10);
        }
    }

    private List n(List list) {
        ArrayList arrayList = new ArrayList(list.size());
        Iterator it = list.iterator();
        while (it.hasNext()) {
            arrayList.add(((i) it.next()).s(this));
        }
        return Collections.unmodifiableList(arrayList);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int s(jt.x xVar, jt.x xVar2, jt.x xVar3) {
        if (xVar3 != null) {
            return -1;
        }
        int i10 = 0;
        if (xVar.equals(xVar2)) {
            return 0;
        }
        do {
            xVar2 = xVar2.b();
            if (xVar2 != null) {
                i10++;
            } else {
                return Integer.MAX_VALUE;
            }
        } while (!xVar.equals(xVar2));
        return i10;
    }

    private static String t(jt.q qVar) {
        Set<jt.p> y10 = qVar.y();
        StringBuilder sb2 = new StringBuilder(y10.size() * 16);
        sb2.append(" [parsed={");
        boolean z10 = true;
        for (jt.p pVar : y10) {
            if (z10) {
                z10 = false;
            } else {
                sb2.append(", ");
            }
            sb2.append(pVar.name());
            sb2.append('=');
            sb2.append(qVar.p(pVar));
        }
        sb2.append("}]");
        return sb2.toString();
    }

    private static String v(jt.q qVar) {
        n0 n0Var = n0.ERROR_MESSAGE;
        if (qVar.o(n0Var)) {
            String str = "Validation failed => " + ((String) qVar.p(n0Var));
            qVar.E(n0Var, null);
            return str;
        }
        return "Insufficient data:";
    }

    private boolean w() {
        boolean z10 = z();
        if (z10) {
            h d10 = ((i) this.f37537d.get(0)).d();
            if (d10 instanceof lt.f) {
                return ((lt.f) lt.f.class.cast(d10)).c();
            }
            if (!(d10 instanceof z)) {
                return false;
            }
        }
        return z10;
    }

    private boolean x() {
        if (this.f37534a.b() == null && this.f37535b == null) {
            return true;
        }
        return false;
    }

    private static boolean y(Object obj, Object obj2) {
        if (obj == null) {
            if (obj2 == null) {
                return true;
            }
            return false;
        }
        return obj.equals(obj2);
    }

    public Object D(CharSequence charSequence) {
        s sVar = new s();
        Object E = E(charSequence, sVar);
        if (E != null) {
            int f10 = sVar.f();
            if (!this.f37546m && f10 < charSequence.length()) {
                throw new ParseException("Unparsed trailing characters: " + P(f10, charSequence), f10);
            }
            return E;
        }
        throw new ParseException(sVar.d(), sVar.c());
    }

    public Object E(CharSequence charSequence, s sVar) {
        if (this.f37547n) {
            jt.x xVar = this.f37534a;
            return F(this, xVar, xVar.w(), charSequence, sVar, this.f37536c, this.f37544k, false, true);
        }
        return a(charSequence, sVar, this.f37536c);
    }

    public String I(Object obj) {
        return m(k(obj, this.f37536c));
    }

    public Set J(Object obj, Appendable appendable, jt.d dVar) {
        return K(k(obj, dVar), appendable, dVar, true);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Set K(jt.o oVar, Appendable appendable, jt.d dVar, boolean z10) {
        LinkedList linkedList;
        Throwable th2;
        int i10;
        int i11;
        Appendable appendable2 = appendable;
        if (appendable2 != null) {
            int size = this.f37537d.size();
            int i12 = 0;
            jt.d dVar2 = dVar;
            boolean z11 = dVar2 == this.f37536c;
            LinkedHashSet linkedHashSet = z10 ? new LinkedHashSet(size) : null;
            if (this.f37541h) {
                LinkedList linkedList2 = new LinkedList();
                linkedList2.push(new StringBuilder(size << 2));
                if (z10) {
                    LinkedList linkedList3 = new LinkedList();
                    linkedList3.push(linkedHashSet);
                    linkedList = linkedList3;
                } else {
                    linkedList = null;
                }
                int i13 = 0;
                while (i13 < size) {
                    i iVar = (i) this.f37537d.get(i13);
                    int b10 = iVar.b();
                    int i14 = b10;
                    while (i14 > i12) {
                        StringBuilder sb2 = new StringBuilder();
                        sb2.append((CharSequence) linkedList2.peek());
                        linkedList2.push(sb2);
                        if (z10) {
                            LinkedHashSet linkedHashSet2 = new LinkedHashSet();
                            linkedHashSet2.addAll((Collection) linkedList.peek());
                            linkedList.push(linkedHashSet2);
                            linkedHashSet = linkedHashSet2;
                        }
                        i14--;
                    }
                    while (i14 < i12) {
                        linkedList2.pop();
                        linkedList2.push((StringBuilder) linkedList2.pop());
                        if (z10) {
                            Set set = (Set) linkedList.pop();
                            linkedList.pop();
                            linkedList.push(set);
                            linkedHashSet = set;
                        }
                        i14++;
                    }
                    StringBuilder sb3 = (StringBuilder) linkedList2.peek();
                    if (z10) {
                        linkedHashSet = (Set) linkedList.peek();
                    }
                    try {
                        i10 = iVar.r(oVar, sb3, dVar2, linkedHashSet, z11);
                        th2 = null;
                    } catch (IllegalArgumentException | jt.r e10) {
                        th2 = e10;
                        i10 = -1;
                    }
                    if (i10 == -1) {
                        int f10 = iVar.f();
                        if (!iVar.i()) {
                            i11 = i13 + 1;
                            while (i11 < size) {
                                i iVar2 = (i) this.f37537d.get(i11);
                                if (iVar2.i() && iVar2.f() == f10) {
                                    break;
                                }
                                i11++;
                            }
                        }
                        i11 = i13;
                        if (i11 <= i13 && !iVar.i()) {
                            if (th2 == null) {
                                throw new IllegalArgumentException("Not formattable: " + oVar);
                            }
                            throw new IllegalArgumentException("Not formattable: " + oVar, th2);
                        }
                        linkedList2.pop();
                        StringBuilder sb4 = new StringBuilder();
                        if (!linkedList2.isEmpty()) {
                            sb4.append((CharSequence) linkedList2.peek());
                        }
                        linkedList2.push(sb4);
                        if (z10) {
                            linkedList.pop();
                            LinkedHashSet linkedHashSet3 = new LinkedHashSet();
                            if (!linkedList.isEmpty()) {
                                linkedHashSet3.addAll((Collection) linkedList.peek());
                            }
                            linkedList.push(linkedHashSet3);
                        }
                        i13 = i11;
                    } else if (iVar.i()) {
                        i13 = iVar.u();
                    }
                    i13++;
                    dVar2 = dVar;
                    i12 = b10;
                }
                linkedList2.clear();
                appendable2.append((StringBuilder) linkedList2.peek());
                if (z10) {
                    linkedList.clear();
                    linkedHashSet = (Set) linkedList.peek();
                }
            } else {
                int i15 = 0;
                while (i15 < size) {
                    try {
                        i iVar3 = (i) this.f37537d.get(i15);
                        iVar3.r(oVar, appendable2, dVar, linkedHashSet, z11);
                        if (iVar3.i()) {
                            i15 = iVar3.u();
                        }
                        i15++;
                        appendable2 = appendable;
                    } catch (jt.r e11) {
                        throw new IllegalArgumentException("Not formattable: " + oVar, e11);
                    }
                }
            }
            if (z10) {
                return Collections.unmodifiableSet(linkedHashSet);
            }
            return null;
        }
        throw new NullPointerException("Missing text result buffer.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c R(Map map, lt.b bVar) {
        lt.b k10 = lt.b.k(bVar, this.f37536c);
        return new c(new c(this, map), k10, (net.time4j.history.d) k10.b(ot.a.f44778a, null));
    }

    public c S(jt.c cVar, Enum r42) {
        return new c(this, new a.b().f(this.f37536c.e()).d(cVar, r42).a());
    }

    public c T(kt.g gVar) {
        return S(kt.a.f36549f, gVar);
    }

    public c U(net.time4j.tz.l lVar) {
        if (lVar != null) {
            return new c(this, this.f37536c.l(new a.b().f(this.f37536c.e()).i(lVar.z()).a()).m(kt.a.f36548e, lVar.E()));
        }
        throw new NullPointerException("Missing timezone id.");
    }

    public c V(net.time4j.tz.k kVar) {
        return U(net.time4j.tz.l.N(kVar));
    }

    @Override // lt.d
    public Object a(CharSequence charSequence, s sVar, jt.d dVar) {
        boolean z10;
        p pVar;
        kt.g gVar;
        net.time4j.tz.k kVar;
        net.time4j.a0 a0Var;
        net.time4j.tz.g gVar2;
        kt.g gVar3 = this.f37544k;
        lt.b bVar = this.f37536c;
        if (dVar != bVar) {
            p pVar2 = new p(dVar, bVar);
            z10 = false;
            pVar = pVar2;
            gVar = (kt.g) pVar2.b(kt.a.f36549f, kt.g.SMART);
        } else {
            z10 = true;
            pVar = dVar;
            gVar = gVar3;
        }
        boolean z11 = z10;
        e eVar = this.f37535b;
        if (eVar != null) {
            List f10 = eVar.f();
            e eVar2 = this.f37535b;
            net.time4j.r rVar = (net.time4j.r) F(this, eVar2, f10, charSequence, sVar, pVar, gVar, true, z11);
            if (sVar.i()) {
                return null;
            }
            jt.q h10 = sVar.h();
            if (h10.l()) {
                kVar = h10.v();
            } else {
                jt.c cVar = kt.a.f36547d;
                if (pVar.a(cVar)) {
                    kVar = (net.time4j.tz.k) pVar.c(cVar);
                } else {
                    kVar = null;
                }
            }
            if (kVar != null) {
                jt.f0 f0Var = (jt.f0) dVar.b(kt.a.f36564u, eVar2.a());
                jt.b0 b0Var = jt.b0.DAYLIGHT_SAVING;
                if (h10.o(b0Var)) {
                    boolean booleanValue = ((Boolean) h10.p(b0Var)).booleanValue();
                    net.time4j.tz.o oVar = (net.time4j.tz.o) pVar.b(kt.a.f36548e, net.time4j.tz.l.f40862o);
                    if (booleanValue) {
                        gVar2 = net.time4j.tz.g.EARLIER_OFFSET;
                    } else {
                        gVar2 = net.time4j.tz.g.LATER_OFFSET;
                    }
                    a0Var = rVar.a(net.time4j.tz.l.N(kVar).Q(oVar.a(gVar2)), f0Var);
                } else {
                    jt.c cVar2 = kt.a.f36548e;
                    if (pVar.a(cVar2)) {
                        a0Var = rVar.a(net.time4j.tz.l.N(kVar).Q((net.time4j.tz.o) pVar.c(cVar2)), f0Var);
                    } else {
                        a0Var = rVar.a(net.time4j.tz.l.N(kVar), f0Var);
                    }
                }
            } else {
                a0Var = null;
            }
            if (a0Var == null) {
                sVar.k(charSequence.length(), "Missing timezone or offset.");
                return null;
            }
            h10.E(net.time4j.a0.T().M(), a0Var);
            Object h11 = h(a0Var);
            if (gVar.e()) {
                i(h10, h11, charSequence, sVar);
            }
            return h11;
        }
        return G(this, this.f37534a, 0, charSequence, sVar, pVar, gVar, z11);
    }

    @Override // lt.e
    public Object b(Object obj, Appendable appendable, jt.d dVar, jt.t tVar) {
        jt.o k10 = k(obj, dVar);
        K(k10, appendable, dVar, false);
        return tVar.apply(k10);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof c) {
            c cVar = (c) obj;
            if (this.f37534a.equals(cVar.f37534a) && y(this.f37535b, cVar.f37535b) && this.f37536c.equals(cVar.f37536c) && this.f37538e.equals(cVar.f37538e) && this.f37537d.equals(cVar.f37537d)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return (this.f37534a.hashCode() * 7) + (this.f37536c.hashCode() * 31) + (this.f37537d.hashCode() * 37);
    }

    public String l(Object obj) {
        return I(obj);
    }

    public jt.d o() {
        return this.f37536c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public lt.b p() {
        return this.f37536c;
    }

    public jt.x q() {
        return this.f37534a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Map r() {
        return this.f37538e;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER);
        sb2.append("net.time4j.format.ChronoFormatter[chronology=");
        sb2.append(this.f37534a.p().getName());
        if (this.f37535b != null) {
            sb2.append(", override=");
            sb2.append(this.f37535b);
        }
        sb2.append(", default-attributes=");
        sb2.append(this.f37536c);
        sb2.append(", default-values=");
        sb2.append(this.f37538e);
        sb2.append(", processors=");
        boolean z10 = true;
        for (i iVar : this.f37537d) {
            if (z10) {
                sb2.append('{');
                z10 = false;
            } else {
                sb2.append('|');
            }
            sb2.append(iVar);
        }
        sb2.append("}]");
        return sb2.toString();
    }

    public Locale u() {
        return this.f37536c.h();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean z() {
        if (this.f37549p == 1 && !this.f37540g) {
            return true;
        }
        return false;
    }

    /* synthetic */ c(c cVar, lt.b bVar, a aVar) {
        this(cVar, bVar);
    }

    private c(jt.x xVar, jt.x xVar2, Locale locale, List list, Map map, kt.a aVar, jt.x xVar3) {
        if (xVar != null) {
            if (!list.isEmpty()) {
                this.f37534a = xVar;
                this.f37535b = e.g(xVar2);
                this.f37548o = xVar3;
                lt.b d10 = lt.b.d(xVar2 == null ? xVar : xVar2, aVar, locale);
                this.f37536c = d10;
                this.f37544k = (kt.g) d10.b(kt.a.f36549f, kt.g.SMART);
                this.f37538e = Collections.unmodifiableMap(map);
                Iterator it = list.iterator();
                j jVar = null;
                boolean z10 = true;
                boolean z11 = false;
                boolean z12 = false;
                boolean z13 = false;
                int i10 = 0;
                while (it.hasNext()) {
                    i iVar = (i) it.next();
                    z12 = iVar.i() ? true : z12;
                    if (jVar == null && (iVar.d() instanceof j)) {
                        jVar = (j) j.class.cast(iVar.d());
                    }
                    if (!z11 && iVar.b() > 0) {
                        z11 = true;
                    }
                    jt.p element = iVar.d().getElement();
                    if (element != null) {
                        i10++;
                        if (z10 && !v.T(element)) {
                            z10 = false;
                        }
                        if (!z13) {
                            z13 = A(xVar, xVar2, element);
                        }
                    }
                }
                this.f37539f = jVar;
                this.f37540g = z11;
                this.f37541h = z12;
                this.f37542i = z13;
                this.f37543j = i10;
                this.f37545l = z10;
                this.f37546m = ((Boolean) this.f37536c.b(kt.a.f36561r, Boolean.FALSE)).booleanValue();
                this.f37547n = x();
                this.f37549p = list.size();
                this.f37537d = n(list);
                this.f37550q = w();
                return;
            }
            throw new IllegalStateException("No format processors defined.");
        }
        throw new NullPointerException("Missing chronology.");
    }

    private c(c cVar, kt.a aVar) {
        this(cVar, cVar.f37536c.l(aVar), (net.time4j.history.d) null);
    }

    private c(c cVar, lt.b bVar) {
        this(cVar, bVar, (net.time4j.history.d) null);
    }

    private c(c cVar, lt.b bVar, net.time4j.history.d dVar) {
        jt.p C;
        if (bVar != null) {
            this.f37534a = cVar.f37534a;
            this.f37535b = cVar.f37535b;
            this.f37548o = cVar.f37548o;
            this.f37536c = bVar;
            this.f37544k = (kt.g) bVar.b(kt.a.f36549f, kt.g.SMART);
            this.f37538e = Collections.unmodifiableMap(new q(cVar.f37538e));
            this.f37539f = cVar.f37539f;
            this.f37540g = cVar.f37540g;
            this.f37541h = cVar.f37541h;
            this.f37542i = cVar.f37542i || dVar != null;
            this.f37543j = cVar.f37543j;
            int size = cVar.f37537d.size();
            ArrayList arrayList = new ArrayList(cVar.f37537d);
            boolean z10 = cVar.f37545l;
            for (int i10 = 0; i10 < size; i10++) {
                i iVar = (i) arrayList.get(i10);
                jt.p element = iVar.d().getElement();
                jt.x xVar = this.f37534a;
                xVar = xVar == net.time4j.a0.T() ? xVar.b() : xVar;
                if (element != null && !xVar.E(element)) {
                    Iterator it = xVar.w().iterator();
                    while (true) {
                        if (!it.hasNext()) {
                            break;
                        }
                        jt.s sVar = (jt.s) it.next();
                        if (sVar.c(cVar.u(), cVar.f37536c).contains(element)) {
                            Iterator it2 = sVar.c(bVar.h(), bVar).iterator();
                            while (true) {
                                if (!it2.hasNext()) {
                                    break;
                                }
                                jt.p pVar = (jt.p) it2.next();
                                if (pVar.name().equals(element.name())) {
                                    if (pVar != element) {
                                        arrayList.set(i10, iVar.x(pVar));
                                        z10 = false;
                                    }
                                }
                            }
                        }
                    }
                }
                if (dVar != null) {
                    if (element == net.time4j.f0.A) {
                        C = dVar.M();
                    } else if (element != net.time4j.f0.D && element != net.time4j.f0.E) {
                        if (element == net.time4j.f0.F) {
                            C = dVar.g();
                        } else {
                            C = element == net.time4j.f0.H ? dVar.h() : null;
                        }
                    } else {
                        C = dVar.C();
                    }
                    if (C != null) {
                        arrayList.set(i10, iVar.x(C));
                    }
                    z10 = false;
                }
            }
            this.f37545l = z10;
            this.f37546m = ((Boolean) this.f37536c.b(kt.a.f36561r, Boolean.FALSE)).booleanValue();
            this.f37547n = x();
            this.f37549p = arrayList.size();
            this.f37537d = n(arrayList);
            this.f37550q = w();
            return;
        }
        throw new NullPointerException("Missing global format attributes.");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static Object h(Object obj) {
        return obj;
    }

    private c(c cVar, Map map) {
        e eVar = cVar.f37535b;
        jt.x e10 = eVar == null ? null : eVar.e();
        for (jt.p pVar : map.keySet()) {
            j(cVar.f37534a, e10, pVar);
        }
        this.f37534a = cVar.f37534a;
        this.f37535b = cVar.f37535b;
        this.f37548o = cVar.f37548o;
        this.f37536c = cVar.f37536c;
        this.f37544k = cVar.f37544k;
        this.f37539f = cVar.f37539f;
        this.f37540g = cVar.f37540g;
        this.f37541h = cVar.f37541h;
        this.f37542i = cVar.f37542i;
        this.f37543j = cVar.f37543j;
        this.f37546m = cVar.f37546m;
        HashMap hashMap = new HashMap(cVar.f37538e);
        boolean z10 = cVar.f37545l;
        for (jt.p pVar2 : map.keySet()) {
            Object obj = map.get(pVar2);
            if (obj == null) {
                hashMap.remove(pVar2);
            } else {
                hashMap.put(pVar2, obj);
                z10 = z10 && v.T(pVar2);
            }
        }
        this.f37538e = Collections.unmodifiableMap(hashMap);
        this.f37545l = z10;
        this.f37547n = x();
        this.f37549p = cVar.f37549p;
        this.f37537d = n(cVar.f37537d);
        this.f37550q = w();
    }
}
