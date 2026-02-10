package ut;

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
import st.h0;
import st.n0;
import tt.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c implements ut.e, ut.d {

    /* renamed from: r  reason: collision with root package name */
    public static final c f51853r = L();

    /* renamed from: a  reason: collision with root package name */
    private final st.x f51854a;

    /* renamed from: b  reason: collision with root package name */
    private final e f51855b;

    /* renamed from: c  reason: collision with root package name */
    private final ut.b f51856c;

    /* renamed from: d  reason: collision with root package name */
    private final List f51857d;

    /* renamed from: e  reason: collision with root package name */
    private final Map f51858e;

    /* renamed from: f  reason: collision with root package name */
    private final j f51859f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f51860g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f51861h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f51862i;

    /* renamed from: j  reason: collision with root package name */
    private final int f51863j;

    /* renamed from: k  reason: collision with root package name */
    private final tt.g f51864k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f51865l;

    /* renamed from: m  reason: collision with root package name */
    private final boolean f51866m;

    /* renamed from: n  reason: collision with root package name */
    private final boolean f51867n;

    /* renamed from: o  reason: collision with root package name */
    private final st.x f51868o;

    /* renamed from: p  reason: collision with root package name */
    private final int f51869p;

    /* renamed from: q  reason: collision with root package name */
    private final boolean f51870q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a implements ut.e {
        a() {
        }

        @Override // ut.e
        /* renamed from: b */
        public Object a(net.time4j.tz.k kVar, Appendable appendable, st.d dVar, st.t tVar) {
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b implements ut.d {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Map f51871a;

        b(Map map) {
            this.f51871a = map;
        }

        @Override // ut.d
        /* renamed from: a */
        public net.time4j.tz.k b(CharSequence charSequence, s sVar, st.d dVar) {
            int f10 = sVar.f();
            int i10 = f10 + 3;
            if (i10 <= charSequence.length()) {
                net.time4j.tz.k kVar = (net.time4j.tz.k) this.f51871a.get(charSequence.subSequence(f10, i10).toString());
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
    /* renamed from: ut.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class C0719c {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f51872a;

        static {
            int[] iArr = new int[w.values().length];
            f51872a = iArr;
            try {
                iArr[w.CLDR.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f51872a[w.CLDR_24.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f51872a[w.CLDR_DATE.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f51872a[w.SIMPLE_DATE_FORMAT.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d {

        /* renamed from: n  reason: collision with root package name */
        private static final st.c f51873n = tt.a.e("CUSTOM_DAY_PERIOD", net.time4j.k.class);

        /* renamed from: a  reason: collision with root package name */
        private final st.x f51874a;

        /* renamed from: b  reason: collision with root package name */
        private final st.x f51875b;

        /* renamed from: c  reason: collision with root package name */
        private final Locale f51876c;

        /* renamed from: d  reason: collision with root package name */
        private List f51877d;

        /* renamed from: e  reason: collision with root package name */
        private LinkedList f51878e;

        /* renamed from: f  reason: collision with root package name */
        private int f51879f;

        /* renamed from: g  reason: collision with root package name */
        private int f51880g;

        /* renamed from: h  reason: collision with root package name */
        private int f51881h;

        /* renamed from: i  reason: collision with root package name */
        private String f51882i;

        /* renamed from: j  reason: collision with root package name */
        private net.time4j.k f51883j;

        /* renamed from: k  reason: collision with root package name */
        private Map f51884k;

        /* renamed from: l  reason: collision with root package name */
        private st.x f51885l;

        /* renamed from: m  reason: collision with root package name */
        private int f51886m;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class a implements st.n {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ st.n f51887d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ st.n f51888e;

            a(st.n nVar, st.n nVar2) {
                this.f51887d = nVar;
                this.f51888e = nVar2;
            }

            @Override // st.n
            /* renamed from: a */
            public boolean test(st.o oVar) {
                if (this.f51887d.test(oVar) && this.f51888e.test(oVar)) {
                    return true;
                }
                return false;
            }
        }

        /* synthetic */ d(st.x xVar, Locale locale, a aVar) {
            this(xVar, locale);
        }

        private i H(st.p pVar) {
            List list;
            i iVar;
            if (this.f51877d.isEmpty()) {
                iVar = null;
            } else {
                iVar = (i) this.f51877d.get(list.size() - 1);
            }
            if (iVar == null) {
                return null;
            }
            if (iVar.g() && !iVar.i()) {
                throw new IllegalStateException(pVar.name() + " can't be inserted after an element with decimal digits.");
            }
            return iVar;
        }

        private static void I(st.c cVar) {
            if (cVar.name().charAt(0) != '_') {
                return;
            }
            throw new IllegalArgumentException("Internal attribute not allowed: " + cVar.name());
        }

        private void J(st.p pVar) {
            st.x j10 = c.j(this.f51874a, this.f51875b, pVar);
            int s10 = c.s(j10, this.f51874a, this.f51875b);
            if (s10 >= this.f51886m) {
                this.f51885l = j10;
                this.f51886m = s10;
            }
        }

        private void K() {
            if (R(this.f51874a)) {
                return;
            }
            throw new IllegalStateException("Timezone names in specific non-location format can only be reliably combined with instant-like types, for example \"Moment\".");
        }

        private void M() {
            for (int size = this.f51877d.size() - 1; size >= 0; size--) {
                i iVar = (i) this.f51877d.get(size);
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
            if (!z10 && !z11 && this.f51880g != -1) {
                throw new IllegalArgumentException("Cannot add fractional element with variable width after another numerical element with variable width.");
            }
        }

        private tt.t O(boolean z10, net.time4j.k kVar) {
            ut.b bVar;
            tt.a a10 = new a.b(P()).a();
            ut.b bVar2 = a10;
            if (kVar != null) {
                if (this.f51878e.isEmpty()) {
                    bVar = new ut.b(a10, this.f51876c);
                } else {
                    bVar = (ut.b) this.f51878e.getLast();
                }
                bVar2 = bVar.m(f51873n, kVar);
            }
            for (st.s sVar : net.time4j.g0.i0().s()) {
                for (st.p pVar : sVar.b(this.f51876c, bVar2)) {
                    if (z10 && pVar.d() == 'b' && S(pVar)) {
                        return (tt.t) c.h(pVar);
                    }
                    if (!z10 && pVar.d() == 'B' && S(pVar)) {
                        return (tt.t) c.h(pVar);
                    }
                }
            }
            throw new IllegalStateException("Day periods are not supported: " + P().n());
        }

        private static int Q(ut.b bVar) {
            if (bVar == null) {
                return 0;
            }
            return bVar.g();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static boolean R(st.x xVar) {
            while (!qt.f.class.isAssignableFrom(xVar.n())) {
                xVar = xVar.b();
                if (xVar == null) {
                    return false;
                }
            }
            return true;
        }

        private boolean S(st.p pVar) {
            if (!pVar.name().endsWith("_DAY_PERIOD")) {
                return false;
            }
            if (this.f51875b != null || this.f51874a.F(pVar)) {
                return true;
            }
            st.x xVar = this.f51874a;
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
            this.f51881h = 0;
        }

        private void o(StringBuilder sb2) {
            if (sb2.length() > 0) {
                n(sb2.toString());
                sb2.setLength(0);
            }
        }

        private d s(st.p pVar, boolean z10, int i10, int i11, x xVar) {
            return t(pVar, z10, i10, i11, xVar, false);
        }

        private d t(st.p pVar, boolean z10, int i10, int i11, x xVar, boolean z11) {
            J(pVar);
            i H = H(pVar);
            r rVar = new r(pVar, z10, i10, i11, xVar, z11);
            if (z10) {
                int i12 = this.f51880g;
                if (i12 == -1) {
                    w(rVar);
                    return this;
                }
                i iVar = (i) this.f51877d.get(i12);
                w(rVar);
                List list = this.f51877d;
                if (iVar.f() == ((i) list.get(list.size() - 1)).f()) {
                    this.f51880g = i12;
                    this.f51877d.set(i12, iVar.t(i10));
                }
                return this;
            } else if (H != null && H.j() && !H.i()) {
                throw new IllegalStateException("Numerical element with variable width can't be inserted after another numerical element. Consider \"addFixedXXX()\" instead.");
            } else {
                w(rVar);
                this.f51880g = this.f51877d.size() - 1;
                return this;
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void w(h hVar) {
            ut.b bVar;
            int i10;
            int i11;
            this.f51880g = -1;
            if (!this.f51878e.isEmpty()) {
                bVar = (ut.b) this.f51878e.getLast();
                i10 = bVar.g();
                i11 = bVar.i();
            } else {
                bVar = null;
                i10 = 0;
                i11 = 0;
            }
            i iVar = new i(hVar, i10, i11, bVar);
            int i12 = this.f51881h;
            if (i12 > 0) {
                iVar = iVar.n(i12, 0);
                this.f51881h = 0;
            }
            this.f51877d.add(iVar);
        }

        public d A(tt.t tVar) {
            J(tVar);
            w(a0.b(tVar));
            return this;
        }

        public d B() {
            if (R(this.f51874a)) {
                w(c0.INSTANCE);
                return this;
            }
            throw new IllegalStateException("Only unix timestamps can have a timezone id.");
        }

        public d C(tt.e eVar, boolean z10, List list) {
            w(new e0(eVar, z10, list));
            return this;
        }

        public d D(st.p pVar) {
            J(pVar);
            H(pVar);
            f0 f0Var = new f0(pVar);
            int i10 = this.f51880g;
            if (i10 == -1) {
                w(f0Var);
                this.f51880g = this.f51877d.size() - 1;
                return this;
            }
            i iVar = (i) this.f51877d.get(i10);
            b0(tt.a.f51007f, tt.g.STRICT);
            w(f0Var);
            L();
            List list = this.f51877d;
            if (iVar.f() == ((i) list.get(list.size() - 1)).f()) {
                this.f51880g = i10;
                this.f51877d.set(i10, iVar.t(2));
            }
            return this;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public d E(st.p pVar, int i10, boolean z10) {
            i iVar;
            if (this.f51877d.isEmpty()) {
                iVar = null;
            } else {
                List list = this.f51877d;
                iVar = (i) list.get(list.size() - 1);
            }
            if (iVar != null && !iVar.i() && iVar.j() && i10 == 4) {
                return t(pVar, true, 4, 4, x.SHOW_NEVER, z10);
            }
            return t(pVar, false, i10, 10, x.SHOW_WHEN_NEGATIVE, z10);
        }

        public c F() {
            return G(tt.a.f());
        }

        public c G(tt.a aVar) {
            boolean z10;
            if (aVar != null) {
                int size = this.f51877d.size();
                HashMap hashMap = null;
                for (int i10 = 0; i10 < size; i10++) {
                    i iVar = (i) this.f51877d.get(i10);
                    if (iVar.i()) {
                        int f10 = iVar.f();
                        int i11 = size - 1;
                        while (true) {
                            if (i11 > i10) {
                                if (((i) this.f51877d.get(i11)).f() == f10) {
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
                        this.f51877d.set(num.intValue(), hashMap.get(num));
                    }
                }
                c cVar = new c(this.f51874a, this.f51875b, this.f51876c, this.f51877d, this.f51884k, aVar, this.f51885l, null);
                String str = this.f51882i;
                if (str == null) {
                    str = "";
                }
                if (this.f51883j != null || !str.isEmpty()) {
                    ut.b bVar = cVar.f51856c;
                    if (!str.isEmpty()) {
                        bVar = bVar.m(tt.a.f51025x, str);
                    }
                    net.time4j.k kVar = this.f51883j;
                    if (kVar != null) {
                        bVar = bVar.m(f51873n, kVar);
                    }
                    return new c(cVar, bVar, (a) null);
                }
                return cVar;
            }
            throw new NullPointerException("Missing format attributes.");
        }

        public d L() {
            this.f51878e.removeLast();
            V();
            return this;
        }

        public st.x P() {
            st.x xVar = this.f51875b;
            if (xVar == null) {
                return this.f51874a;
            }
            return xVar;
        }

        public d U() {
            int i10;
            i iVar;
            int i11;
            int i12;
            if (!this.f51878e.isEmpty()) {
                i10 = ((ut.b) this.f51878e.getLast()).i();
            } else {
                i10 = 0;
            }
            if (!this.f51877d.isEmpty()) {
                i11 = this.f51877d.size() - 1;
                iVar = (i) this.f51877d.get(i11);
                i12 = iVar.f();
            } else {
                iVar = null;
                i11 = -1;
                i12 = -1;
            }
            if (i10 == i12) {
                this.f51877d.set(i11, iVar.v());
                V();
                this.f51880g = -1;
                return this;
            }
            throw new IllegalStateException("Cannot start or-block without any previous step in current section.");
        }

        public d W(st.n nVar, int i10) {
            w(new y(nVar, i10));
            return this;
        }

        public d X() {
            return Y(null);
        }

        public d Y(st.n nVar) {
            ut.b bVar;
            st.n nVar2;
            a aVar;
            V();
            a.b bVar2 = new a.b();
            if (!this.f51878e.isEmpty()) {
                bVar = (ut.b) this.f51878e.getLast();
                bVar2.f(bVar.e());
                nVar2 = bVar.f();
            } else {
                bVar = null;
                nVar2 = null;
            }
            int Q = Q(bVar) + 1;
            int i10 = this.f51879f + 1;
            this.f51879f = i10;
            if (nVar != null) {
                if (nVar2 == null) {
                    aVar = nVar;
                } else {
                    aVar = new a(nVar2, nVar);
                }
            } else {
                aVar = nVar2;
            }
            this.f51878e.addLast(new ut.b(bVar2.a(), this.f51876c, Q, i10, aVar));
            return this;
        }

        public d Z(st.c cVar, char c10) {
            ut.b l10;
            I(cVar);
            V();
            if (this.f51878e.isEmpty()) {
                l10 = new ut.b(new a.b().b(cVar, c10).a(), this.f51876c);
            } else {
                ut.b bVar = (ut.b) this.f51878e.getLast();
                a.b bVar2 = new a.b();
                bVar2.f(bVar.e());
                bVar2.b(cVar, c10);
                l10 = bVar.l(bVar2.a());
            }
            this.f51878e.addLast(l10);
            return this;
        }

        public d a0(st.c cVar, int i10) {
            ut.b l10;
            I(cVar);
            V();
            if (this.f51878e.isEmpty()) {
                l10 = new ut.b(new a.b().c(cVar, i10).a(), this.f51876c);
            } else {
                ut.b bVar = (ut.b) this.f51878e.getLast();
                a.b bVar2 = new a.b();
                bVar2.f(bVar.e());
                bVar2.c(cVar, i10);
                l10 = bVar.l(bVar2.a());
            }
            this.f51878e.addLast(l10);
            return this;
        }

        public d b0(st.c cVar, Enum r52) {
            ut.b l10;
            I(cVar);
            V();
            if (this.f51878e.isEmpty()) {
                l10 = new ut.b(new a.b().d(cVar, r52).a(), this.f51876c);
            } else {
                ut.b bVar = (ut.b) this.f51878e.getLast();
                a.b bVar2 = new a.b();
                bVar2.f(bVar.e());
                bVar2.d(cVar, r52);
                l10 = bVar.l(bVar2.a());
            }
            this.f51878e.addLast(l10);
            return this;
        }

        public d d(st.p pVar, ut.e eVar, ut.d dVar) {
            J(pVar);
            w(new ut.f(pVar, eVar, dVar));
            return this;
        }

        public d e() {
            return A(O(false, null));
        }

        public d f() {
            return A(O(true, null));
        }

        public d g(st.p pVar, int i10) {
            return s(pVar, true, i10, i10, x.SHOW_NEVER);
        }

        public d h(st.p pVar, int i10) {
            return s(pVar, true, i10, i10, x.SHOW_NEVER);
        }

        public d i(st.p pVar, int i10, int i11, boolean z10) {
            boolean z11;
            J(pVar);
            if (!z10 && i10 == i11) {
                z11 = true;
            } else {
                z11 = false;
            }
            N(z11, z10);
            j jVar = new j(pVar, i10, i11, z10);
            int i12 = this.f51880g;
            if (i12 != -1 && z11) {
                i iVar = (i) this.f51877d.get(i12);
                w(jVar);
                List list = this.f51877d;
                if (iVar.f() == ((i) list.get(list.size() - 1)).f()) {
                    this.f51880g = i12;
                    this.f51877d.set(i12, iVar.t(i10));
                }
                return this;
            }
            w(jVar);
            return this;
        }

        public d j(st.p pVar, int i10, int i11) {
            return s(pVar, false, i10, i11, x.SHOW_NEVER);
        }

        public d k(st.p pVar, int i10, int i11, x xVar) {
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
                if (this.f51877d.isEmpty()) {
                    iVar = null;
                } else {
                    List list = this.f51877d;
                    iVar = (i) list.get(list.size() - 1);
                }
                if (iVar != null && iVar.g() && !iVar.i()) {
                    throw new IllegalStateException("Numerical literal can't be inserted after an element with decimal digits.");
                }
            }
            if (c10 != 0 && (i10 = this.f51880g) != -1) {
                i iVar2 = (i) this.f51877d.get(i10);
                w(mVar);
                int f10 = iVar2.f();
                List list2 = this.f51877d;
                if (f10 == ((i) list2.get(list2.size() - 1)).f()) {
                    this.f51880g = i10;
                    this.f51877d.set(i10, iVar2.t(c10));
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

        public d q(st.p pVar, int i10, int i11, x xVar) {
            return s(pVar, false, i10, i11, xVar);
        }

        public d r() {
            K();
            w(new d0(false));
            return this;
        }

        public d u(st.p pVar, int i10, int i11) {
            return s(pVar, false, i10, i11, x.SHOW_NEVER);
        }

        public d v(String str, w wVar) {
            if (wVar != null) {
                Map map = Collections.EMPTY_MAP;
                int length = str.length();
                Locale locale = this.f51876c;
                StringBuilder sb2 = new StringBuilder();
                if (!this.f51878e.isEmpty()) {
                    locale = ((ut.b) this.f51878e.getLast()).h();
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
                    int size = this.f51877d.size();
                    for (int i15 = 0; i15 < size; i15++) {
                        i iVar = (i) this.f51877d.get(i15);
                        st.p element = iVar.d().getElement();
                        if (map.containsKey(element)) {
                            this.f51877d.set(i15, iVar.x((st.p) map.get(element)));
                        }
                    }
                }
                if (this.f51882i != null) {
                    str = "";
                }
                this.f51882i = str;
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

        public d z(st.p pVar) {
            Enum[] enumArr;
            J(pVar);
            if (pVar instanceof tt.t) {
                w(a0.b((tt.t) tt.t.class.cast(pVar)));
                return this;
            }
            HashMap hashMap = new HashMap();
            for (Enum r42 : (Enum[]) pVar.getType().getEnumConstants()) {
                hashMap.put(r42, r42.toString());
            }
            w(new o(pVar, hashMap));
            return this;
        }

        private d(st.x xVar, Locale locale) {
            this(xVar, locale, (st.x) null);
        }

        private d(st.x xVar, Locale locale, st.x xVar2) {
            if (xVar == null) {
                throw new NullPointerException("Missing chronology.");
            }
            if (locale != null) {
                this.f51874a = xVar;
                this.f51875b = xVar2;
                this.f51876c = locale;
                this.f51877d = new ArrayList();
                this.f51878e = new LinkedList();
                this.f51879f = 0;
                this.f51880g = -1;
                this.f51881h = 0;
                this.f51882i = null;
                this.f51883j = null;
                this.f51884k = new HashMap();
                this.f51885l = xVar;
                this.f51886m = 0;
                return;
            }
            throw new NullPointerException("Missing locale.");
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class e implements st.u {

        /* renamed from: d  reason: collision with root package name */
        private final st.x f51890d;

        /* renamed from: e  reason: collision with root package name */
        private final List f51891e;

        private e(st.x xVar) {
            this.f51890d = xVar;
            ArrayList arrayList = new ArrayList();
            arrayList.addAll(xVar.s());
            arrayList.addAll(net.time4j.g0.i0().s());
            this.f51891e = Collections.unmodifiableList(arrayList);
        }

        static e j(st.x xVar) {
            if (xVar == null) {
                return null;
            }
            return new e(xVar);
        }

        @Override // st.u
        public st.f0 a() {
            return this.f51890d.a();
        }

        @Override // st.u
        public st.x b() {
            throw new UnsupportedOperationException("Not used.");
        }

        @Override // st.u
        public int c() {
            return this.f51890d.c();
        }

        @Override // st.u
        /* renamed from: d */
        public net.time4j.r i(st.q qVar, st.d dVar, boolean z10, boolean z11) {
            Object i10 = this.f51890d.i(qVar, dVar, z10, z11);
            net.time4j.g0 g0Var = (net.time4j.g0) net.time4j.g0.i0().i(qVar, dVar, z10, z11);
            if (i10 instanceof st.m) {
                return (net.time4j.r) c.h(net.time4j.r.b((st.m) st.m.class.cast(i10), g0Var));
            }
            throw new IllegalStateException("Cannot determine calendar type: " + i10);
        }

        public st.x e() {
            return this.f51890d;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof e) {
                return this.f51890d.equals(((e) obj).f51890d);
            }
            return false;
        }

        public List f() {
            return this.f51891e;
        }

        @Override // st.u
        public String g(st.y yVar, Locale locale) {
            throw new UnsupportedOperationException("Not used.");
        }

        public int hashCode() {
            return this.f51890d.hashCode();
        }

        @Override // st.u
        /* renamed from: k */
        public st.o h(net.time4j.r rVar, st.d dVar) {
            throw new UnsupportedOperationException("Not used.");
        }

        public String toString() {
            return this.f51890d.n().getName();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class f implements st.o, qt.f {

        /* renamed from: d  reason: collision with root package name */
        private final net.time4j.r f51892d;

        /* renamed from: e  reason: collision with root package name */
        private final String f51893e;

        /* renamed from: i  reason: collision with root package name */
        private final net.time4j.tz.k f51894i;

        /* synthetic */ f(net.time4j.r rVar, String str, net.time4j.tz.k kVar, a aVar) {
            this(rVar, str, kVar);
        }

        private qt.f b() {
            st.f0 f0Var;
            try {
                f0Var = st.x.G(this.f51892d.c().getClass()).a();
            } catch (RuntimeException unused) {
                f0Var = st.f0.f50375a;
            }
            return this.f51892d.a(net.time4j.tz.l.N(this.f51894i), f0Var);
        }

        @Override // qt.f
        public int a() {
            return b().a();
        }

        @Override // st.o
        public boolean k() {
            return true;
        }

        @Override // st.o
        public Object m(st.p pVar) {
            return this.f51892d.m(pVar);
        }

        @Override // st.o
        public Object n(st.p pVar) {
            return this.f51892d.n(pVar);
        }

        @Override // qt.f
        public long o() {
            return b().o();
        }

        @Override // st.o
        public boolean s(st.p pVar) {
            return this.f51892d.s(pVar);
        }

        @Override // st.o
        public Object t(st.p pVar) {
            return this.f51892d.t(pVar);
        }

        @Override // st.o
        public net.time4j.tz.k u() {
            return this.f51894i;
        }

        @Override // st.o
        public int v(st.p pVar) {
            return this.f51892d.v(pVar);
        }

        private f(net.time4j.r rVar, String str, net.time4j.tz.k kVar) {
            this.f51892d = rVar;
            this.f51893e = str;
            this.f51894i = kVar;
        }
    }

    /* synthetic */ c(st.x xVar, st.x xVar2, Locale locale, List list, Map map, tt.a aVar, st.x xVar3, a aVar2) {
        this(xVar, xVar2, locale, list, map, aVar, xVar3);
    }

    private static boolean A(st.x xVar, st.x xVar2, st.p pVar) {
        for (st.s sVar : xVar.s()) {
            if (sVar.d(pVar)) {
                return true;
            }
        }
        if (xVar2 != null) {
            if (pVar.A()) {
                for (st.s sVar2 : xVar2.s()) {
                    if (sVar2.d(pVar)) {
                        return true;
                    }
                }
                return false;
            } else if (pVar.D() && net.time4j.g0.i0().F(pVar)) {
                for (st.s sVar3 : net.time4j.g0.i0().s()) {
                    if (sVar3.d(pVar)) {
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
                for (st.s sVar4 : xVar.s()) {
                    if (sVar4.d(pVar)) {
                        return true;
                    }
                }
            } else {
                return false;
            }
        }
    }

    public static c B(tt.e eVar, tt.e eVar2, Locale locale, net.time4j.tz.k kVar) {
        d dVar = new d(net.time4j.a0.T(), locale, (a) null);
        dVar.w(new z(eVar, eVar2));
        return dVar.F().V(kVar);
    }

    public static c C(String str, w wVar, Locale locale, st.x xVar) {
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
    /* JADX WARN: Removed duplicated region for block: B:99:0x00df A[EXC_TOP_SPLITTER, SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static java.lang.Object F(ut.c r15, st.u r16, java.util.List r17, java.lang.CharSequence r18, ut.s r19, st.d r20, tt.g r21, boolean r22, boolean r23) {
        /*
            Method dump skipped, instructions count: 430
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: ut.c.F(ut.c, st.u, java.util.List, java.lang.CharSequence, ut.s, st.d, tt.g, boolean, boolean):java.lang.Object");
    }

    private static Object G(c cVar, st.x xVar, int i10, CharSequence charSequence, s sVar, st.d dVar, tt.g gVar, boolean z10) {
        boolean z11;
        st.x xVar2;
        CharSequence charSequence2;
        s sVar2;
        tt.g gVar2;
        boolean z12;
        c cVar2;
        st.x xVar3;
        Object G;
        st.x b10 = xVar.b();
        if (b10 != null && xVar != (xVar3 = cVar.f51868o)) {
            if (b10 == xVar3) {
                G = F(cVar, b10, b10.s(), charSequence, sVar, dVar, gVar, true, z10);
            } else {
                G = G(cVar, b10, i10 + 1, charSequence, sVar, dVar, gVar, z10);
            }
            if (sVar.i()) {
                return null;
            }
            if (G == null) {
                st.q g10 = sVar.g();
                sVar.k(charSequence.length(), v(g10) + t(g10));
                return null;
            }
            st.q h10 = sVar.h();
            try {
                if (b10 instanceof h0) {
                    Q(h10, ((h0) h0.class.cast(b10)).M(), G);
                    Object i11 = xVar.i(h10, dVar, gVar.a(), false);
                    if (i11 == null) {
                        if (!sVar.i()) {
                            sVar.k(charSequence.length(), v(h10) + t(h10));
                        }
                        return null;
                    } else if (gVar.e()) {
                        return i(h10, i11, charSequence, sVar);
                    } else {
                        return i11;
                    }
                }
                throw new IllegalStateException("Unsupported chronology or preparser: " + xVar);
            } catch (RuntimeException e10) {
                sVar.k(charSequence.length(), e10.getMessage() + t(h10));
                return null;
            }
        }
        List s10 = xVar.s();
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
        return F(cVar2, xVar2, s10, charSequence2, sVar2, dVar, gVar2, z11, z12);
    }

    private st.q H(CharSequence charSequence, s sVar, st.d dVar, boolean z10, int i10) {
        LinkedList linkedList;
        v vVar;
        v vVar2;
        int i11;
        st.p element;
        v vVar3 = new v(i10, this.f51865l);
        vVar3.d0(sVar.f());
        if (this.f51860g) {
            LinkedList linkedList2 = new LinkedList();
            linkedList2.push(vVar3);
            linkedList = linkedList2;
        } else {
            linkedList = null;
        }
        int size = this.f51857d.size();
        int i12 = 0;
        int i13 = 0;
        int i14 = 0;
        while (i14 < size) {
            i iVar = (i) this.f51857d.get(i14);
            if (linkedList == null) {
                vVar2 = vVar3;
                vVar = vVar2;
            } else {
                i12 = iVar.b();
                int i15 = i12;
                while (i15 > i13) {
                    vVar3 = new v(i10 >>> 1, this.f51865l);
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
            if (sVar.j() && (element = iVar.d().getElement()) != null && this.f51858e.containsKey(element)) {
                vVar2.I(element, this.f51858e.get(element));
                vVar2.E(n0.ERROR_MESSAGE, null);
                sVar.a();
                sVar.b();
            }
            if (sVar.i()) {
                int f10 = iVar.f();
                if (!iVar.i()) {
                    i11 = i14 + 1;
                    while (i11 < size) {
                        i iVar2 = (i) this.f51857d.get(i11);
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
                    for (int i18 = i14 + 1; i18 < size && ((i) this.f51857d.get(i18)).b() > b10; i18++) {
                        i17 = i18;
                    }
                    int i19 = size - 1;
                    while (true) {
                        if (i19 <= i17) {
                            break;
                        } else if (((i) this.f51857d.get(i19)).f() == f10) {
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
        N.C(tt.e.MEDIUM, false, Arrays.asList("GMT", "UT", "Z"));
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
        N.w(new ut.f(b0.TIMEZONE_OFFSET, new a(), new b(hashMap)));
        return N.F().V(net.time4j.tz.p.f38781v);
    }

    private static void M(d dVar) {
        d X = dVar.X();
        st.c cVar = tt.a.f51008g;
        tt.v vVar = tt.v.ABBREVIATED;
        X.b0(cVar, vVar).z(net.time4j.f0.G).L().n(", ").L().j(net.time4j.f0.F, 1, 2).l(' ').b0(cVar, vVar).z(net.time4j.f0.D).L().l(' ').g(net.time4j.f0.A, 4).l(' ').g(net.time4j.g0.F, 2).l(':').g(net.time4j.g0.H, 2).X().l(':').g(net.time4j.g0.J, 2).L().l(' ');
    }

    public static d N(Class cls, Locale locale) {
        if (cls != null) {
            st.x G = st.x.G(cls);
            if (G != null) {
                return new d(G, locale, (a) null);
            }
            throw new IllegalArgumentException("Not formattable: " + cls);
        }
        throw new NullPointerException("Missing chronological type.");
    }

    private static void O(st.q qVar, st.p pVar, Object obj) {
        qVar.E(pVar, pVar.getType().cast(obj));
    }

    private static String P(int i10, CharSequence charSequence) {
        int length = charSequence.length();
        if (length - i10 <= 10) {
            return charSequence.subSequence(i10, length).toString();
        }
        return charSequence.subSequence(i10, i10 + 10).toString() + "...";
    }

    private static void Q(st.q qVar, st.p pVar, Object obj) {
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
                            if (z10 && i11 == i10 + 2 && d.R(dVar.f51874a)) {
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
        int i13 = C0719c.f51872a[wVar.ordinal()];
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
        if (((net.time4j.g0) r10.t(r6)).h() == 24) goto L41;
     */
    /* JADX WARN: Removed duplicated region for block: B:44:0x012c  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static java.lang.Object i(st.q r10, java.lang.Object r11, java.lang.CharSequence r12, ut.s r13) {
        /*
            Method dump skipped, instructions count: 465
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: ut.c.i(st.q, java.lang.Object, java.lang.CharSequence, ut.s):java.lang.Object");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static st.x j(st.x xVar, st.x xVar2, st.p pVar) {
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
        } else if (pVar.A() && xVar2.F(pVar)) {
            return xVar2;
        } else {
            if (pVar.D() && net.time4j.g0.i0().F(pVar)) {
                return net.time4j.g0.i0();
            }
        }
        throw new IllegalArgumentException("Unsupported element: " + pVar.name());
    }

    private st.o k(Object obj, st.d dVar) {
        net.time4j.r q02;
        e eVar = this.f51855b;
        if (eVar == null) {
            return this.f51854a.h(obj, dVar);
        }
        try {
            Class n10 = eVar.e().n();
            st.f0 f0Var = (st.f0) dVar.b(tt.a.f51022u, this.f51855b.a());
            net.time4j.a0 a0Var = (net.time4j.a0) net.time4j.a0.class.cast(obj);
            net.time4j.tz.k kVar = (net.time4j.tz.k) dVar.a(tt.a.f51005d);
            String str = "";
            if (st.l.class.isAssignableFrom(n10)) {
                android.support.v4.media.session.b.a(h(this.f51855b.e()));
                str = (String) dVar.a(tt.a.f51021t);
                q02 = a0Var.p0(null, str, kVar, f0Var);
            } else if (st.m.class.isAssignableFrom(n10)) {
                q02 = a0Var.q0(this.f51855b.e(), kVar, f0Var);
            } else {
                throw new IllegalStateException("Unexpected calendar override: " + n10);
            }
            return new f(q02, str, kVar, null);
        } catch (ClassCastException e10) {
            throw new IllegalArgumentException("Not formattable: " + obj, e10);
        } catch (NoSuchElementException e11) {
            throw new IllegalArgumentException(e11.getMessage(), e11);
        }
    }

    private String m(st.o oVar) {
        StringBuilder sb2 = new StringBuilder(this.f51857d.size() * 8);
        try {
            K(oVar, sb2, this.f51856c, false);
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
    public static int s(st.x xVar, st.x xVar2, st.x xVar3) {
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

    private static String t(st.q qVar) {
        Set<st.p> y10 = qVar.y();
        StringBuilder sb2 = new StringBuilder(y10.size() * 16);
        sb2.append(" [parsed={");
        boolean z10 = true;
        for (st.p pVar : y10) {
            if (z10) {
                z10 = false;
            } else {
                sb2.append(", ");
            }
            sb2.append(pVar.name());
            sb2.append('=');
            sb2.append(qVar.t(pVar));
        }
        sb2.append("}]");
        return sb2.toString();
    }

    private static String v(st.q qVar) {
        n0 n0Var = n0.ERROR_MESSAGE;
        if (qVar.s(n0Var)) {
            String str = "Validation failed => " + ((String) qVar.t(n0Var));
            qVar.E(n0Var, null);
            return str;
        }
        return "Insufficient data:";
    }

    private boolean w() {
        boolean z10 = z();
        if (z10) {
            h d10 = ((i) this.f51857d.get(0)).d();
            if (d10 instanceof ut.f) {
                return ((ut.f) ut.f.class.cast(d10)).c();
            }
            if (!(d10 instanceof z)) {
                return false;
            }
        }
        return z10;
    }

    private boolean x() {
        if (this.f51854a.b() == null && this.f51855b == null) {
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
            if (!this.f51866m && f10 < charSequence.length()) {
                throw new ParseException("Unparsed trailing characters: " + P(f10, charSequence), f10);
            }
            return E;
        }
        throw new ParseException(sVar.d(), sVar.c());
    }

    public Object E(CharSequence charSequence, s sVar) {
        if (this.f51867n) {
            st.x xVar = this.f51854a;
            return F(this, xVar, xVar.s(), charSequence, sVar, this.f51856c, this.f51864k, false, true);
        }
        return b(charSequence, sVar, this.f51856c);
    }

    public String I(Object obj) {
        return m(k(obj, this.f51856c));
    }

    public Set J(Object obj, Appendable appendable, st.d dVar) {
        return K(k(obj, dVar), appendable, dVar, true);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Set K(st.o oVar, Appendable appendable, st.d dVar, boolean z10) {
        LinkedList linkedList;
        Throwable th2;
        int i10;
        int i11;
        Appendable appendable2 = appendable;
        if (appendable2 != null) {
            int size = this.f51857d.size();
            int i12 = 0;
            st.d dVar2 = dVar;
            boolean z11 = dVar2 == this.f51856c;
            LinkedHashSet linkedHashSet = z10 ? new LinkedHashSet(size) : null;
            if (this.f51861h) {
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
                    i iVar = (i) this.f51857d.get(i13);
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
                    } catch (IllegalArgumentException | st.r e10) {
                        th2 = e10;
                        i10 = -1;
                    }
                    if (i10 == -1) {
                        int f10 = iVar.f();
                        if (!iVar.i()) {
                            i11 = i13 + 1;
                            while (i11 < size) {
                                i iVar2 = (i) this.f51857d.get(i11);
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
                        i iVar3 = (i) this.f51857d.get(i15);
                        iVar3.r(oVar, appendable2, dVar, linkedHashSet, z11);
                        if (iVar3.i()) {
                            i15 = iVar3.u();
                        }
                        i15++;
                        appendable2 = appendable;
                    } catch (st.r e11) {
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
    public c R(Map map, ut.b bVar) {
        ut.b k10 = ut.b.k(bVar, this.f51856c);
        return new c(new c(this, map), k10, (net.time4j.history.d) k10.b(xt.a.f55323a, null));
    }

    public c S(net.time4j.tz.l lVar) {
        if (lVar != null) {
            return new c(this, this.f51856c.l(new a.b().f(this.f51856c.e()).i(lVar.z()).a()).m(tt.a.f51006e, lVar.E()));
        }
        throw new NullPointerException("Missing timezone id.");
    }

    public c T(st.c cVar, Enum r42) {
        return new c(this, new a.b().f(this.f51856c.e()).d(cVar, r42).a());
    }

    public c U(tt.g gVar) {
        return T(tt.a.f51007f, gVar);
    }

    public c V(net.time4j.tz.k kVar) {
        return S(net.time4j.tz.l.N(kVar));
    }

    @Override // ut.e
    public Object a(Object obj, Appendable appendable, st.d dVar, st.t tVar) {
        st.o k10 = k(obj, dVar);
        K(k10, appendable, dVar, false);
        return tVar.apply(k10);
    }

    @Override // ut.d
    public Object b(CharSequence charSequence, s sVar, st.d dVar) {
        boolean z10;
        p pVar;
        tt.g gVar;
        net.time4j.tz.k kVar;
        net.time4j.a0 a0Var;
        net.time4j.tz.g gVar2;
        tt.g gVar3 = this.f51864k;
        ut.b bVar = this.f51856c;
        if (dVar != bVar) {
            p pVar2 = new p(dVar, bVar);
            z10 = false;
            pVar = pVar2;
            gVar = (tt.g) pVar2.b(tt.a.f51007f, tt.g.SMART);
        } else {
            z10 = true;
            pVar = dVar;
            gVar = gVar3;
        }
        boolean z11 = z10;
        e eVar = this.f51855b;
        if (eVar != null) {
            List f10 = eVar.f();
            e eVar2 = this.f51855b;
            net.time4j.r rVar = (net.time4j.r) F(this, eVar2, f10, charSequence, sVar, pVar, gVar, true, z11);
            if (sVar.i()) {
                return null;
            }
            st.q h10 = sVar.h();
            if (h10.k()) {
                kVar = h10.u();
            } else {
                st.c cVar = tt.a.f51005d;
                if (pVar.c(cVar)) {
                    kVar = (net.time4j.tz.k) pVar.a(cVar);
                } else {
                    kVar = null;
                }
            }
            if (kVar != null) {
                st.f0 f0Var = (st.f0) dVar.b(tt.a.f51022u, eVar2.a());
                st.b0 b0Var = st.b0.DAYLIGHT_SAVING;
                if (h10.s(b0Var)) {
                    boolean booleanValue = ((Boolean) h10.t(b0Var)).booleanValue();
                    net.time4j.tz.o oVar = (net.time4j.tz.o) pVar.b(tt.a.f51006e, net.time4j.tz.l.f38719o);
                    if (booleanValue) {
                        gVar2 = net.time4j.tz.g.EARLIER_OFFSET;
                    } else {
                        gVar2 = net.time4j.tz.g.LATER_OFFSET;
                    }
                    a0Var = rVar.a(net.time4j.tz.l.N(kVar).Q(oVar.a(gVar2)), f0Var);
                } else {
                    st.c cVar2 = tt.a.f51006e;
                    if (pVar.c(cVar2)) {
                        a0Var = rVar.a(net.time4j.tz.l.N(kVar).Q((net.time4j.tz.o) pVar.a(cVar2)), f0Var);
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
        return G(this, this.f51854a, 0, charSequence, sVar, pVar, gVar, z11);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof c) {
            c cVar = (c) obj;
            if (this.f51854a.equals(cVar.f51854a) && y(this.f51855b, cVar.f51855b) && this.f51856c.equals(cVar.f51856c) && this.f51858e.equals(cVar.f51858e) && this.f51857d.equals(cVar.f51857d)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return (this.f51854a.hashCode() * 7) + (this.f51856c.hashCode() * 31) + (this.f51857d.hashCode() * 37);
    }

    public String l(Object obj) {
        return I(obj);
    }

    public st.d o() {
        return this.f51856c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ut.b p() {
        return this.f51856c;
    }

    public st.x q() {
        return this.f51854a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Map r() {
        return this.f51858e;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER);
        sb2.append("net.time4j.format.ChronoFormatter[chronology=");
        sb2.append(this.f51854a.n().getName());
        if (this.f51855b != null) {
            sb2.append(", override=");
            sb2.append(this.f51855b);
        }
        sb2.append(", default-attributes=");
        sb2.append(this.f51856c);
        sb2.append(", default-values=");
        sb2.append(this.f51858e);
        sb2.append(", processors=");
        boolean z10 = true;
        for (i iVar : this.f51857d) {
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
        return this.f51856c.h();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean z() {
        if (this.f51869p == 1 && !this.f51860g) {
            return true;
        }
        return false;
    }

    /* synthetic */ c(c cVar, ut.b bVar, a aVar) {
        this(cVar, bVar);
    }

    private c(st.x xVar, st.x xVar2, Locale locale, List list, Map map, tt.a aVar, st.x xVar3) {
        if (xVar != null) {
            if (!list.isEmpty()) {
                this.f51854a = xVar;
                this.f51855b = e.j(xVar2);
                this.f51868o = xVar3;
                ut.b d10 = ut.b.d(xVar2 == null ? xVar : xVar2, aVar, locale);
                this.f51856c = d10;
                this.f51864k = (tt.g) d10.b(tt.a.f51007f, tt.g.SMART);
                this.f51858e = Collections.unmodifiableMap(map);
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
                    st.p element = iVar.d().getElement();
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
                this.f51859f = jVar;
                this.f51860g = z11;
                this.f51861h = z12;
                this.f51862i = z13;
                this.f51863j = i10;
                this.f51865l = z10;
                this.f51866m = ((Boolean) this.f51856c.b(tt.a.f51019r, Boolean.FALSE)).booleanValue();
                this.f51867n = x();
                this.f51869p = list.size();
                this.f51857d = n(list);
                this.f51870q = w();
                return;
            }
            throw new IllegalStateException("No format processors defined.");
        }
        throw new NullPointerException("Missing chronology.");
    }

    private c(c cVar, tt.a aVar) {
        this(cVar, cVar.f51856c.l(aVar), (net.time4j.history.d) null);
    }

    private c(c cVar, ut.b bVar) {
        this(cVar, bVar, (net.time4j.history.d) null);
    }

    private c(c cVar, ut.b bVar, net.time4j.history.d dVar) {
        st.p C;
        if (bVar != null) {
            this.f51854a = cVar.f51854a;
            this.f51855b = cVar.f51855b;
            this.f51868o = cVar.f51868o;
            this.f51856c = bVar;
            this.f51864k = (tt.g) bVar.b(tt.a.f51007f, tt.g.SMART);
            this.f51858e = Collections.unmodifiableMap(new q(cVar.f51858e));
            this.f51859f = cVar.f51859f;
            this.f51860g = cVar.f51860g;
            this.f51861h = cVar.f51861h;
            this.f51862i = cVar.f51862i || dVar != null;
            this.f51863j = cVar.f51863j;
            int size = cVar.f51857d.size();
            ArrayList arrayList = new ArrayList(cVar.f51857d);
            boolean z10 = cVar.f51865l;
            for (int i10 = 0; i10 < size; i10++) {
                i iVar = (i) arrayList.get(i10);
                st.p element = iVar.d().getElement();
                st.x xVar = this.f51854a;
                xVar = xVar == net.time4j.a0.T() ? xVar.b() : xVar;
                if (element != null && !xVar.E(element)) {
                    Iterator it = xVar.s().iterator();
                    while (true) {
                        if (!it.hasNext()) {
                            break;
                        }
                        st.s sVar = (st.s) it.next();
                        if (sVar.b(cVar.u(), cVar.f51856c).contains(element)) {
                            Iterator it2 = sVar.b(bVar.h(), bVar).iterator();
                            while (true) {
                                if (!it2.hasNext()) {
                                    break;
                                }
                                st.p pVar = (st.p) it2.next();
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
            this.f51865l = z10;
            this.f51866m = ((Boolean) this.f51856c.b(tt.a.f51019r, Boolean.FALSE)).booleanValue();
            this.f51867n = x();
            this.f51869p = arrayList.size();
            this.f51857d = n(arrayList);
            this.f51870q = w();
            return;
        }
        throw new NullPointerException("Missing global format attributes.");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static Object h(Object obj) {
        return obj;
    }

    private c(c cVar, Map map) {
        e eVar = cVar.f51855b;
        st.x e10 = eVar == null ? null : eVar.e();
        for (st.p pVar : map.keySet()) {
            j(cVar.f51854a, e10, pVar);
        }
        this.f51854a = cVar.f51854a;
        this.f51855b = cVar.f51855b;
        this.f51868o = cVar.f51868o;
        this.f51856c = cVar.f51856c;
        this.f51864k = cVar.f51864k;
        this.f51859f = cVar.f51859f;
        this.f51860g = cVar.f51860g;
        this.f51861h = cVar.f51861h;
        this.f51862i = cVar.f51862i;
        this.f51863j = cVar.f51863j;
        this.f51866m = cVar.f51866m;
        HashMap hashMap = new HashMap(cVar.f51858e);
        boolean z10 = cVar.f51865l;
        for (st.p pVar2 : map.keySet()) {
            Object obj = map.get(pVar2);
            if (obj == null) {
                hashMap.remove(pVar2);
            } else {
                hashMap.put(pVar2, obj);
                z10 = z10 && v.T(pVar2);
            }
        }
        this.f51858e = Collections.unmodifiableMap(hashMap);
        this.f51865l = z10;
        this.f51867n = x();
        this.f51869p = cVar.f51869p;
        this.f51857d = n(cVar.f51857d);
        this.f51870q = w();
    }
}
