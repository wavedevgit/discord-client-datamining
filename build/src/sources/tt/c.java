package tt;

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
import rt.h0;
import rt.n0;
import st.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c implements tt.e, tt.d {

    /* renamed from: r  reason: collision with root package name */
    public static final c f50900r = L();

    /* renamed from: a  reason: collision with root package name */
    private final rt.x f50901a;

    /* renamed from: b  reason: collision with root package name */
    private final e f50902b;

    /* renamed from: c  reason: collision with root package name */
    private final tt.b f50903c;

    /* renamed from: d  reason: collision with root package name */
    private final List f50904d;

    /* renamed from: e  reason: collision with root package name */
    private final Map f50905e;

    /* renamed from: f  reason: collision with root package name */
    private final j f50906f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f50907g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f50908h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f50909i;

    /* renamed from: j  reason: collision with root package name */
    private final int f50910j;

    /* renamed from: k  reason: collision with root package name */
    private final st.g f50911k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f50912l;

    /* renamed from: m  reason: collision with root package name */
    private final boolean f50913m;

    /* renamed from: n  reason: collision with root package name */
    private final boolean f50914n;

    /* renamed from: o  reason: collision with root package name */
    private final rt.x f50915o;

    /* renamed from: p  reason: collision with root package name */
    private final int f50916p;

    /* renamed from: q  reason: collision with root package name */
    private final boolean f50917q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a implements tt.e {
        a() {
        }

        @Override // tt.e
        /* renamed from: a */
        public Object b(net.time4j.tz.k kVar, Appendable appendable, rt.d dVar, rt.t tVar) {
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b implements tt.d {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Map f50918a;

        b(Map map) {
            this.f50918a = map;
        }

        @Override // tt.d
        /* renamed from: b */
        public net.time4j.tz.k a(CharSequence charSequence, s sVar, rt.d dVar) {
            int f10 = sVar.f();
            int i10 = f10 + 3;
            if (i10 <= charSequence.length()) {
                net.time4j.tz.k kVar = (net.time4j.tz.k) this.f50918a.get(charSequence.subSequence(f10, i10).toString());
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
    /* renamed from: tt.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class C0671c {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f50919a;

        static {
            int[] iArr = new int[w.values().length];
            f50919a = iArr;
            try {
                iArr[w.CLDR.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f50919a[w.CLDR_24.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f50919a[w.CLDR_DATE.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f50919a[w.SIMPLE_DATE_FORMAT.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d {

        /* renamed from: n  reason: collision with root package name */
        private static final rt.c f50920n = st.a.e("CUSTOM_DAY_PERIOD", net.time4j.k.class);

        /* renamed from: a  reason: collision with root package name */
        private final rt.x f50921a;

        /* renamed from: b  reason: collision with root package name */
        private final rt.x f50922b;

        /* renamed from: c  reason: collision with root package name */
        private final Locale f50923c;

        /* renamed from: d  reason: collision with root package name */
        private List f50924d;

        /* renamed from: e  reason: collision with root package name */
        private LinkedList f50925e;

        /* renamed from: f  reason: collision with root package name */
        private int f50926f;

        /* renamed from: g  reason: collision with root package name */
        private int f50927g;

        /* renamed from: h  reason: collision with root package name */
        private int f50928h;

        /* renamed from: i  reason: collision with root package name */
        private String f50929i;

        /* renamed from: j  reason: collision with root package name */
        private net.time4j.k f50930j;

        /* renamed from: k  reason: collision with root package name */
        private Map f50931k;

        /* renamed from: l  reason: collision with root package name */
        private rt.x f50932l;

        /* renamed from: m  reason: collision with root package name */
        private int f50933m;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class a implements rt.n {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ rt.n f50934d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ rt.n f50935e;

            a(rt.n nVar, rt.n nVar2) {
                this.f50934d = nVar;
                this.f50935e = nVar2;
            }

            @Override // rt.n
            /* renamed from: a */
            public boolean test(rt.o oVar) {
                if (this.f50934d.test(oVar) && this.f50935e.test(oVar)) {
                    return true;
                }
                return false;
            }
        }

        /* synthetic */ d(rt.x xVar, Locale locale, a aVar) {
            this(xVar, locale);
        }

        private i H(rt.p pVar) {
            List list;
            i iVar;
            if (this.f50924d.isEmpty()) {
                iVar = null;
            } else {
                iVar = (i) this.f50924d.get(list.size() - 1);
            }
            if (iVar == null) {
                return null;
            }
            if (iVar.g() && !iVar.i()) {
                throw new IllegalStateException(pVar.name() + " can't be inserted after an element with decimal digits.");
            }
            return iVar;
        }

        private static void I(rt.c cVar) {
            if (cVar.name().charAt(0) != '_') {
                return;
            }
            throw new IllegalArgumentException("Internal attribute not allowed: " + cVar.name());
        }

        private void J(rt.p pVar) {
            rt.x j10 = c.j(this.f50921a, this.f50922b, pVar);
            int s10 = c.s(j10, this.f50921a, this.f50922b);
            if (s10 >= this.f50933m) {
                this.f50932l = j10;
                this.f50933m = s10;
            }
        }

        private void K() {
            if (R(this.f50921a)) {
                return;
            }
            throw new IllegalStateException("Timezone names in specific non-location format can only be reliably combined with instant-like types, for example \"Moment\".");
        }

        private void M() {
            for (int size = this.f50924d.size() - 1; size >= 0; size--) {
                i iVar = (i) this.f50924d.get(size);
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
            if (!z10 && !z11 && this.f50927g != -1) {
                throw new IllegalArgumentException("Cannot add fractional element with variable width after another numerical element with variable width.");
            }
        }

        private st.t O(boolean z10, net.time4j.k kVar) {
            tt.b bVar;
            st.a a10 = new a.b(P()).a();
            tt.b bVar2 = a10;
            if (kVar != null) {
                if (this.f50925e.isEmpty()) {
                    bVar = new tt.b(a10, this.f50923c);
                } else {
                    bVar = (tt.b) this.f50925e.getLast();
                }
                bVar2 = bVar.m(f50920n, kVar);
            }
            for (rt.s sVar : net.time4j.g0.i0().u()) {
                for (rt.p pVar : sVar.d(this.f50923c, bVar2)) {
                    if (z10 && pVar.d() == 'b' && S(pVar)) {
                        return (st.t) c.h(pVar);
                    }
                    if (!z10 && pVar.d() == 'B' && S(pVar)) {
                        return (st.t) c.h(pVar);
                    }
                }
            }
            throw new IllegalStateException("Day periods are not supported: " + P().p());
        }

        private static int Q(tt.b bVar) {
            if (bVar == null) {
                return 0;
            }
            return bVar.g();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static boolean R(rt.x xVar) {
            while (!pt.f.class.isAssignableFrom(xVar.p())) {
                xVar = xVar.c();
                if (xVar == null) {
                    return false;
                }
            }
            return true;
        }

        private boolean S(rt.p pVar) {
            if (!pVar.name().endsWith("_DAY_PERIOD")) {
                return false;
            }
            if (this.f50922b != null || this.f50921a.F(pVar)) {
                return true;
            }
            rt.x xVar = this.f50921a;
            do {
                xVar = xVar.c();
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
            this.f50928h = 0;
        }

        private void o(StringBuilder sb2) {
            if (sb2.length() > 0) {
                n(sb2.toString());
                sb2.setLength(0);
            }
        }

        private d s(rt.p pVar, boolean z10, int i10, int i11, x xVar) {
            return t(pVar, z10, i10, i11, xVar, false);
        }

        private d t(rt.p pVar, boolean z10, int i10, int i11, x xVar, boolean z11) {
            J(pVar);
            i H = H(pVar);
            r rVar = new r(pVar, z10, i10, i11, xVar, z11);
            if (z10) {
                int i12 = this.f50927g;
                if (i12 == -1) {
                    w(rVar);
                    return this;
                }
                i iVar = (i) this.f50924d.get(i12);
                w(rVar);
                List list = this.f50924d;
                if (iVar.f() == ((i) list.get(list.size() - 1)).f()) {
                    this.f50927g = i12;
                    this.f50924d.set(i12, iVar.t(i10));
                }
                return this;
            } else if (H != null && H.j() && !H.i()) {
                throw new IllegalStateException("Numerical element with variable width can't be inserted after another numerical element. Consider \"addFixedXXX()\" instead.");
            } else {
                w(rVar);
                this.f50927g = this.f50924d.size() - 1;
                return this;
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void w(h hVar) {
            tt.b bVar;
            int i10;
            int i11;
            this.f50927g = -1;
            if (!this.f50925e.isEmpty()) {
                bVar = (tt.b) this.f50925e.getLast();
                i10 = bVar.g();
                i11 = bVar.i();
            } else {
                bVar = null;
                i10 = 0;
                i11 = 0;
            }
            i iVar = new i(hVar, i10, i11, bVar);
            int i12 = this.f50928h;
            if (i12 > 0) {
                iVar = iVar.n(i12, 0);
                this.f50928h = 0;
            }
            this.f50924d.add(iVar);
        }

        public d A(st.t tVar) {
            J(tVar);
            w(a0.b(tVar));
            return this;
        }

        public d B() {
            if (R(this.f50921a)) {
                w(c0.INSTANCE);
                return this;
            }
            throw new IllegalStateException("Only unix timestamps can have a timezone id.");
        }

        public d C(st.e eVar, boolean z10, List list) {
            w(new e0(eVar, z10, list));
            return this;
        }

        public d D(rt.p pVar) {
            J(pVar);
            H(pVar);
            f0 f0Var = new f0(pVar);
            int i10 = this.f50927g;
            if (i10 == -1) {
                w(f0Var);
                this.f50927g = this.f50924d.size() - 1;
                return this;
            }
            i iVar = (i) this.f50924d.get(i10);
            b0(st.a.f50115f, st.g.STRICT);
            w(f0Var);
            L();
            List list = this.f50924d;
            if (iVar.f() == ((i) list.get(list.size() - 1)).f()) {
                this.f50927g = i10;
                this.f50924d.set(i10, iVar.t(2));
            }
            return this;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public d E(rt.p pVar, int i10, boolean z10) {
            i iVar;
            if (this.f50924d.isEmpty()) {
                iVar = null;
            } else {
                List list = this.f50924d;
                iVar = (i) list.get(list.size() - 1);
            }
            if (iVar != null && !iVar.i() && iVar.j() && i10 == 4) {
                return t(pVar, true, 4, 4, x.SHOW_NEVER, z10);
            }
            return t(pVar, false, i10, 10, x.SHOW_WHEN_NEGATIVE, z10);
        }

        public c F() {
            return G(st.a.f());
        }

        public c G(st.a aVar) {
            boolean z10;
            if (aVar != null) {
                int size = this.f50924d.size();
                HashMap hashMap = null;
                for (int i10 = 0; i10 < size; i10++) {
                    i iVar = (i) this.f50924d.get(i10);
                    if (iVar.i()) {
                        int f10 = iVar.f();
                        int i11 = size - 1;
                        while (true) {
                            if (i11 > i10) {
                                if (((i) this.f50924d.get(i11)).f() == f10) {
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
                        this.f50924d.set(num.intValue(), hashMap.get(num));
                    }
                }
                c cVar = new c(this.f50921a, this.f50922b, this.f50923c, this.f50924d, this.f50931k, aVar, this.f50932l, null);
                String str = this.f50929i;
                if (str == null) {
                    str = "";
                }
                if (this.f50930j != null || !str.isEmpty()) {
                    tt.b bVar = cVar.f50903c;
                    if (!str.isEmpty()) {
                        bVar = bVar.m(st.a.f50133x, str);
                    }
                    net.time4j.k kVar = this.f50930j;
                    if (kVar != null) {
                        bVar = bVar.m(f50920n, kVar);
                    }
                    return new c(cVar, bVar, (a) null);
                }
                return cVar;
            }
            throw new NullPointerException("Missing format attributes.");
        }

        public d L() {
            this.f50925e.removeLast();
            V();
            return this;
        }

        public rt.x P() {
            rt.x xVar = this.f50922b;
            if (xVar == null) {
                return this.f50921a;
            }
            return xVar;
        }

        public d U() {
            int i10;
            i iVar;
            int i11;
            int i12;
            if (!this.f50925e.isEmpty()) {
                i10 = ((tt.b) this.f50925e.getLast()).i();
            } else {
                i10 = 0;
            }
            if (!this.f50924d.isEmpty()) {
                i11 = this.f50924d.size() - 1;
                iVar = (i) this.f50924d.get(i11);
                i12 = iVar.f();
            } else {
                iVar = null;
                i11 = -1;
                i12 = -1;
            }
            if (i10 == i12) {
                this.f50924d.set(i11, iVar.v());
                V();
                this.f50927g = -1;
                return this;
            }
            throw new IllegalStateException("Cannot start or-block without any previous step in current section.");
        }

        public d W(rt.n nVar, int i10) {
            w(new y(nVar, i10));
            return this;
        }

        public d X() {
            return Y(null);
        }

        public d Y(rt.n nVar) {
            tt.b bVar;
            rt.n nVar2;
            a aVar;
            V();
            a.b bVar2 = new a.b();
            if (!this.f50925e.isEmpty()) {
                bVar = (tt.b) this.f50925e.getLast();
                bVar2.f(bVar.e());
                nVar2 = bVar.f();
            } else {
                bVar = null;
                nVar2 = null;
            }
            int Q = Q(bVar) + 1;
            int i10 = this.f50926f + 1;
            this.f50926f = i10;
            if (nVar != null) {
                if (nVar2 == null) {
                    aVar = nVar;
                } else {
                    aVar = new a(nVar2, nVar);
                }
            } else {
                aVar = nVar2;
            }
            this.f50925e.addLast(new tt.b(bVar2.a(), this.f50923c, Q, i10, aVar));
            return this;
        }

        public d Z(rt.c cVar, char c10) {
            tt.b l10;
            I(cVar);
            V();
            if (this.f50925e.isEmpty()) {
                l10 = new tt.b(new a.b().b(cVar, c10).a(), this.f50923c);
            } else {
                tt.b bVar = (tt.b) this.f50925e.getLast();
                a.b bVar2 = new a.b();
                bVar2.f(bVar.e());
                bVar2.b(cVar, c10);
                l10 = bVar.l(bVar2.a());
            }
            this.f50925e.addLast(l10);
            return this;
        }

        public d a0(rt.c cVar, int i10) {
            tt.b l10;
            I(cVar);
            V();
            if (this.f50925e.isEmpty()) {
                l10 = new tt.b(new a.b().c(cVar, i10).a(), this.f50923c);
            } else {
                tt.b bVar = (tt.b) this.f50925e.getLast();
                a.b bVar2 = new a.b();
                bVar2.f(bVar.e());
                bVar2.c(cVar, i10);
                l10 = bVar.l(bVar2.a());
            }
            this.f50925e.addLast(l10);
            return this;
        }

        public d b0(rt.c cVar, Enum r52) {
            tt.b l10;
            I(cVar);
            V();
            if (this.f50925e.isEmpty()) {
                l10 = new tt.b(new a.b().d(cVar, r52).a(), this.f50923c);
            } else {
                tt.b bVar = (tt.b) this.f50925e.getLast();
                a.b bVar2 = new a.b();
                bVar2.f(bVar.e());
                bVar2.d(cVar, r52);
                l10 = bVar.l(bVar2.a());
            }
            this.f50925e.addLast(l10);
            return this;
        }

        public d d(rt.p pVar, tt.e eVar, tt.d dVar) {
            J(pVar);
            w(new tt.f(pVar, eVar, dVar));
            return this;
        }

        public d e() {
            return A(O(false, null));
        }

        public d f() {
            return A(O(true, null));
        }

        public d g(rt.p pVar, int i10) {
            return s(pVar, true, i10, i10, x.SHOW_NEVER);
        }

        public d h(rt.p pVar, int i10) {
            return s(pVar, true, i10, i10, x.SHOW_NEVER);
        }

        public d i(rt.p pVar, int i10, int i11, boolean z10) {
            boolean z11;
            J(pVar);
            if (!z10 && i10 == i11) {
                z11 = true;
            } else {
                z11 = false;
            }
            N(z11, z10);
            j jVar = new j(pVar, i10, i11, z10);
            int i12 = this.f50927g;
            if (i12 != -1 && z11) {
                i iVar = (i) this.f50924d.get(i12);
                w(jVar);
                List list = this.f50924d;
                if (iVar.f() == ((i) list.get(list.size() - 1)).f()) {
                    this.f50927g = i12;
                    this.f50924d.set(i12, iVar.t(i10));
                }
                return this;
            }
            w(jVar);
            return this;
        }

        public d j(rt.p pVar, int i10, int i11) {
            return s(pVar, false, i10, i11, x.SHOW_NEVER);
        }

        public d k(rt.p pVar, int i10, int i11, x xVar) {
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
                if (this.f50924d.isEmpty()) {
                    iVar = null;
                } else {
                    List list = this.f50924d;
                    iVar = (i) list.get(list.size() - 1);
                }
                if (iVar != null && iVar.g() && !iVar.i()) {
                    throw new IllegalStateException("Numerical literal can't be inserted after an element with decimal digits.");
                }
            }
            if (c10 != 0 && (i10 = this.f50927g) != -1) {
                i iVar2 = (i) this.f50924d.get(i10);
                w(mVar);
                int f10 = iVar2.f();
                List list2 = this.f50924d;
                if (f10 == ((i) list2.get(list2.size() - 1)).f()) {
                    this.f50927g = i10;
                    this.f50924d.set(i10, iVar2.t(c10));
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

        public d q(rt.p pVar, int i10, int i11, x xVar) {
            return s(pVar, false, i10, i11, xVar);
        }

        public d r() {
            K();
            w(new d0(false));
            return this;
        }

        public d u(rt.p pVar, int i10, int i11) {
            return s(pVar, false, i10, i11, x.SHOW_NEVER);
        }

        public d v(String str, w wVar) {
            if (wVar != null) {
                Map map = Collections.EMPTY_MAP;
                int length = str.length();
                Locale locale = this.f50923c;
                StringBuilder sb2 = new StringBuilder();
                if (!this.f50925e.isEmpty()) {
                    locale = ((tt.b) this.f50925e.getLast()).h();
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
                    int size = this.f50924d.size();
                    for (int i15 = 0; i15 < size; i15++) {
                        i iVar = (i) this.f50924d.get(i15);
                        rt.p element = iVar.d().getElement();
                        if (map.containsKey(element)) {
                            this.f50924d.set(i15, iVar.x((rt.p) map.get(element)));
                        }
                    }
                }
                if (this.f50929i != null) {
                    str = "";
                }
                this.f50929i = str;
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

        public d z(rt.p pVar) {
            Enum[] enumArr;
            J(pVar);
            if (pVar instanceof st.t) {
                w(a0.b((st.t) st.t.class.cast(pVar)));
                return this;
            }
            HashMap hashMap = new HashMap();
            for (Enum r42 : (Enum[]) pVar.getType().getEnumConstants()) {
                hashMap.put(r42, r42.toString());
            }
            w(new o(pVar, hashMap));
            return this;
        }

        private d(rt.x xVar, Locale locale) {
            this(xVar, locale, (rt.x) null);
        }

        private d(rt.x xVar, Locale locale, rt.x xVar2) {
            if (xVar == null) {
                throw new NullPointerException("Missing chronology.");
            }
            if (locale != null) {
                this.f50921a = xVar;
                this.f50922b = xVar2;
                this.f50923c = locale;
                this.f50924d = new ArrayList();
                this.f50925e = new LinkedList();
                this.f50926f = 0;
                this.f50927g = -1;
                this.f50928h = 0;
                this.f50929i = null;
                this.f50930j = null;
                this.f50931k = new HashMap();
                this.f50932l = xVar;
                this.f50933m = 0;
                return;
            }
            throw new NullPointerException("Missing locale.");
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class e implements rt.u {

        /* renamed from: d  reason: collision with root package name */
        private final rt.x f50937d;

        /* renamed from: e  reason: collision with root package name */
        private final List f50938e;

        private e(rt.x xVar) {
            this.f50937d = xVar;
            ArrayList arrayList = new ArrayList();
            arrayList.addAll(xVar.u());
            arrayList.addAll(net.time4j.g0.i0().u());
            this.f50938e = Collections.unmodifiableList(arrayList);
        }

        static e h(rt.x xVar) {
            if (xVar == null) {
                return null;
            }
            return new e(xVar);
        }

        @Override // rt.u
        public rt.f0 a() {
            return this.f50937d.a();
        }

        @Override // rt.u
        public String b(rt.y yVar, Locale locale) {
            throw new UnsupportedOperationException("Not used.");
        }

        @Override // rt.u
        public rt.x c() {
            throw new UnsupportedOperationException("Not used.");
        }

        @Override // rt.u
        /* renamed from: d */
        public net.time4j.r l(rt.q qVar, rt.d dVar, boolean z10, boolean z11) {
            Object l10 = this.f50937d.l(qVar, dVar, z10, z11);
            net.time4j.g0 g0Var = (net.time4j.g0) net.time4j.g0.i0().l(qVar, dVar, z10, z11);
            if (l10 instanceof rt.m) {
                return (net.time4j.r) c.h(net.time4j.r.b((rt.m) rt.m.class.cast(l10), g0Var));
            }
            throw new IllegalStateException("Cannot determine calendar type: " + l10);
        }

        public rt.x e() {
            return this.f50937d;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof e) {
                return this.f50937d.equals(((e) obj).f50937d);
            }
            return false;
        }

        public List f() {
            return this.f50938e;
        }

        @Override // rt.u
        public int g() {
            return this.f50937d.g();
        }

        public int hashCode() {
            return this.f50937d.hashCode();
        }

        @Override // rt.u
        /* renamed from: i */
        public rt.o k(net.time4j.r rVar, rt.d dVar) {
            throw new UnsupportedOperationException("Not used.");
        }

        public String toString() {
            return this.f50937d.p().getName();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class f implements rt.o, pt.f {

        /* renamed from: d  reason: collision with root package name */
        private final net.time4j.r f50939d;

        /* renamed from: e  reason: collision with root package name */
        private final String f50940e;

        /* renamed from: i  reason: collision with root package name */
        private final net.time4j.tz.k f50941i;

        /* synthetic */ f(net.time4j.r rVar, String str, net.time4j.tz.k kVar, a aVar) {
            this(rVar, str, kVar);
        }

        private pt.f b() {
            rt.f0 f0Var;
            try {
                f0Var = rt.x.G(this.f50939d.c().getClass()).a();
            } catch (RuntimeException unused) {
                f0Var = rt.f0.f49502a;
            }
            return this.f50939d.a(net.time4j.tz.l.N(this.f50941i), f0Var);
        }

        @Override // pt.f
        public int a() {
            return b().a();
        }

        @Override // rt.o
        public boolean k() {
            return true;
        }

        @Override // pt.f
        public long m() {
            return b().m();
        }

        @Override // rt.o
        public boolean n(rt.p pVar) {
            return this.f50939d.n(pVar);
        }

        @Override // rt.o
        public int q(rt.p pVar) {
            return this.f50939d.q(pVar);
        }

        @Override // rt.o
        public Object s(rt.p pVar) {
            return this.f50939d.s(pVar);
        }

        @Override // rt.o
        public Object t(rt.p pVar) {
            return this.f50939d.t(pVar);
        }

        @Override // rt.o
        public net.time4j.tz.k u() {
            return this.f50941i;
        }

        @Override // rt.o
        public Object v(rt.p pVar) {
            return this.f50939d.v(pVar);
        }

        private f(net.time4j.r rVar, String str, net.time4j.tz.k kVar) {
            this.f50939d = rVar;
            this.f50940e = str;
            this.f50941i = kVar;
        }
    }

    /* synthetic */ c(rt.x xVar, rt.x xVar2, Locale locale, List list, Map map, st.a aVar, rt.x xVar3, a aVar2) {
        this(xVar, xVar2, locale, list, map, aVar, xVar3);
    }

    private static boolean A(rt.x xVar, rt.x xVar2, rt.p pVar) {
        for (rt.s sVar : xVar.u()) {
            if (sVar.a(pVar)) {
                return true;
            }
        }
        if (xVar2 != null) {
            if (pVar.A()) {
                for (rt.s sVar2 : xVar2.u()) {
                    if (sVar2.a(pVar)) {
                        return true;
                    }
                }
                return false;
            } else if (pVar.D() && net.time4j.g0.i0().F(pVar)) {
                for (rt.s sVar3 : net.time4j.g0.i0().u()) {
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
            xVar = xVar.c();
            if (xVar != null) {
                for (rt.s sVar4 : xVar.u()) {
                    if (sVar4.a(pVar)) {
                        return true;
                    }
                }
            } else {
                return false;
            }
        }
    }

    public static c B(st.e eVar, st.e eVar2, Locale locale, net.time4j.tz.k kVar) {
        d dVar = new d(net.time4j.a0.T(), locale, (a) null);
        dVar.w(new z(eVar, eVar2));
        return dVar.F().V(kVar);
    }

    public static c C(String str, w wVar, Locale locale, rt.x xVar) {
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
    /* JADX WARN: Removed duplicated region for block: B:98:0x00df A[EXC_TOP_SPLITTER, SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static java.lang.Object F(tt.c r15, rt.u r16, java.util.List r17, java.lang.CharSequence r18, tt.s r19, rt.d r20, st.g r21, boolean r22, boolean r23) {
        /*
            Method dump skipped, instructions count: 430
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: tt.c.F(tt.c, rt.u, java.util.List, java.lang.CharSequence, tt.s, rt.d, st.g, boolean, boolean):java.lang.Object");
    }

    private static Object G(c cVar, rt.x xVar, int i10, CharSequence charSequence, s sVar, rt.d dVar, st.g gVar, boolean z10) {
        boolean z11;
        rt.x xVar2;
        CharSequence charSequence2;
        s sVar2;
        st.g gVar2;
        boolean z12;
        c cVar2;
        rt.x xVar3;
        Object G;
        rt.x c10 = xVar.c();
        if (c10 != null && xVar != (xVar3 = cVar.f50915o)) {
            if (c10 == xVar3) {
                G = F(cVar, c10, c10.u(), charSequence, sVar, dVar, gVar, true, z10);
            } else {
                G = G(cVar, c10, i10 + 1, charSequence, sVar, dVar, gVar, z10);
            }
            if (sVar.i()) {
                return null;
            }
            if (G == null) {
                rt.q g10 = sVar.g();
                sVar.k(charSequence.length(), v(g10) + t(g10));
                return null;
            }
            rt.q h10 = sVar.h();
            try {
                if (c10 instanceof h0) {
                    Q(h10, ((h0) h0.class.cast(c10)).M(), G);
                    Object l10 = xVar.l(h10, dVar, gVar.a(), false);
                    if (l10 == null) {
                        if (!sVar.i()) {
                            sVar.k(charSequence.length(), v(h10) + t(h10));
                        }
                        return null;
                    } else if (gVar.e()) {
                        return i(h10, l10, charSequence, sVar);
                    } else {
                        return l10;
                    }
                }
                throw new IllegalStateException("Unsupported chronology or preparser: " + xVar);
            } catch (RuntimeException e10) {
                sVar.k(charSequence.length(), e10.getMessage() + t(h10));
                return null;
            }
        }
        List u10 = xVar.u();
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
        return F(cVar2, xVar2, u10, charSequence2, sVar2, dVar, gVar2, z11, z12);
    }

    private rt.q H(CharSequence charSequence, s sVar, rt.d dVar, boolean z10, int i10) {
        LinkedList linkedList;
        v vVar;
        v vVar2;
        int i11;
        rt.p element;
        v vVar3 = new v(i10, this.f50912l);
        vVar3.d0(sVar.f());
        if (this.f50907g) {
            LinkedList linkedList2 = new LinkedList();
            linkedList2.push(vVar3);
            linkedList = linkedList2;
        } else {
            linkedList = null;
        }
        int size = this.f50904d.size();
        int i12 = 0;
        int i13 = 0;
        int i14 = 0;
        while (i14 < size) {
            i iVar = (i) this.f50904d.get(i14);
            if (linkedList == null) {
                vVar2 = vVar3;
                vVar = vVar2;
            } else {
                i12 = iVar.b();
                int i15 = i12;
                while (i15 > i13) {
                    vVar3 = new v(i10 >>> 1, this.f50912l);
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
            if (sVar.j() && (element = iVar.d().getElement()) != null && this.f50905e.containsKey(element)) {
                vVar2.I(element, this.f50905e.get(element));
                vVar2.E(n0.ERROR_MESSAGE, null);
                sVar.a();
                sVar.b();
            }
            if (sVar.i()) {
                int f10 = iVar.f();
                if (!iVar.i()) {
                    i11 = i14 + 1;
                    while (i11 < size) {
                        i iVar2 = (i) this.f50904d.get(i11);
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
                    for (int i18 = i14 + 1; i18 < size && ((i) this.f50904d.get(i18)).b() > b10; i18++) {
                        i17 = i18;
                    }
                    int i19 = size - 1;
                    while (true) {
                        if (i19 <= i17) {
                            break;
                        } else if (((i) this.f50904d.get(i19)).f() == f10) {
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
        N.C(st.e.MEDIUM, false, Arrays.asList("GMT", "UT", "Z"));
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
        N.w(new tt.f(b0.TIMEZONE_OFFSET, new a(), new b(hashMap)));
        return N.F().V(net.time4j.tz.p.f39641v);
    }

    private static void M(d dVar) {
        d X = dVar.X();
        rt.c cVar = st.a.f50116g;
        st.v vVar = st.v.ABBREVIATED;
        X.b0(cVar, vVar).z(net.time4j.f0.G).L().n(", ").L().j(net.time4j.f0.F, 1, 2).l(' ').b0(cVar, vVar).z(net.time4j.f0.D).L().l(' ').g(net.time4j.f0.A, 4).l(' ').g(net.time4j.g0.F, 2).l(':').g(net.time4j.g0.H, 2).X().l(':').g(net.time4j.g0.J, 2).L().l(' ');
    }

    public static d N(Class cls, Locale locale) {
        if (cls != null) {
            rt.x G = rt.x.G(cls);
            if (G != null) {
                return new d(G, locale, (a) null);
            }
            throw new IllegalArgumentException("Not formattable: " + cls);
        }
        throw new NullPointerException("Missing chronological type.");
    }

    private static void O(rt.q qVar, rt.p pVar, Object obj) {
        qVar.E(pVar, pVar.getType().cast(obj));
    }

    private static String P(int i10, CharSequence charSequence) {
        int length = charSequence.length();
        if (length - i10 <= 10) {
            return charSequence.subSequence(i10, length).toString();
        }
        return charSequence.subSequence(i10, i10 + 10).toString() + "...";
    }

    private static void Q(rt.q qVar, rt.p pVar, Object obj) {
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
                            if (z10 && i11 == i10 + 2 && d.R(dVar.f50921a)) {
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
        int i13 = C0671c.f50919a[wVar.ordinal()];
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
        if (((net.time4j.g0) r10.s(r6)).h() == 24) goto L41;
     */
    /* JADX WARN: Removed duplicated region for block: B:44:0x012c  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static java.lang.Object i(rt.q r10, java.lang.Object r11, java.lang.CharSequence r12, tt.s r13) {
        /*
            Method dump skipped, instructions count: 465
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: tt.c.i(rt.q, java.lang.Object, java.lang.CharSequence, tt.s):java.lang.Object");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static rt.x j(rt.x xVar, rt.x xVar2, rt.p pVar) {
        if (xVar.F(pVar)) {
            return xVar;
        }
        if (xVar2 == null) {
            do {
                xVar = xVar.c();
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

    private rt.o k(Object obj, rt.d dVar) {
        net.time4j.r q02;
        e eVar = this.f50902b;
        if (eVar == null) {
            return this.f50901a.k(obj, dVar);
        }
        try {
            Class p10 = eVar.e().p();
            rt.f0 f0Var = (rt.f0) dVar.b(st.a.f50130u, this.f50902b.a());
            net.time4j.a0 a0Var = (net.time4j.a0) net.time4j.a0.class.cast(obj);
            net.time4j.tz.k kVar = (net.time4j.tz.k) dVar.a(st.a.f50113d);
            String str = "";
            if (rt.l.class.isAssignableFrom(p10)) {
                android.support.v4.media.session.b.a(h(this.f50902b.e()));
                str = (String) dVar.a(st.a.f50129t);
                q02 = a0Var.p0(null, str, kVar, f0Var);
            } else if (rt.m.class.isAssignableFrom(p10)) {
                q02 = a0Var.q0(this.f50902b.e(), kVar, f0Var);
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

    private String m(rt.o oVar) {
        StringBuilder sb2 = new StringBuilder(this.f50904d.size() * 8);
        try {
            K(oVar, sb2, this.f50903c, false);
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
    public static int s(rt.x xVar, rt.x xVar2, rt.x xVar3) {
        if (xVar3 != null) {
            return -1;
        }
        int i10 = 0;
        if (xVar.equals(xVar2)) {
            return 0;
        }
        do {
            xVar2 = xVar2.c();
            if (xVar2 != null) {
                i10++;
            } else {
                return Integer.MAX_VALUE;
            }
        } while (!xVar.equals(xVar2));
        return i10;
    }

    private static String t(rt.q qVar) {
        Set<rt.p> y10 = qVar.y();
        StringBuilder sb2 = new StringBuilder(y10.size() * 16);
        sb2.append(" [parsed={");
        boolean z10 = true;
        for (rt.p pVar : y10) {
            if (z10) {
                z10 = false;
            } else {
                sb2.append(", ");
            }
            sb2.append(pVar.name());
            sb2.append('=');
            sb2.append(qVar.s(pVar));
        }
        sb2.append("}]");
        return sb2.toString();
    }

    private static String v(rt.q qVar) {
        n0 n0Var = n0.ERROR_MESSAGE;
        if (qVar.n(n0Var)) {
            String str = "Validation failed => " + ((String) qVar.s(n0Var));
            qVar.E(n0Var, null);
            return str;
        }
        return "Insufficient data:";
    }

    private boolean w() {
        boolean z10 = z();
        if (z10) {
            h d10 = ((i) this.f50904d.get(0)).d();
            if (d10 instanceof tt.f) {
                return ((tt.f) tt.f.class.cast(d10)).c();
            }
            if (!(d10 instanceof z)) {
                return false;
            }
        }
        return z10;
    }

    private boolean x() {
        if (this.f50901a.c() == null && this.f50902b == null) {
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
            if (!this.f50913m && f10 < charSequence.length()) {
                throw new ParseException("Unparsed trailing characters: " + P(f10, charSequence), f10);
            }
            return E;
        }
        throw new ParseException(sVar.d(), sVar.c());
    }

    public Object E(CharSequence charSequence, s sVar) {
        if (this.f50914n) {
            rt.x xVar = this.f50901a;
            return F(this, xVar, xVar.u(), charSequence, sVar, this.f50903c, this.f50911k, false, true);
        }
        return a(charSequence, sVar, this.f50903c);
    }

    public String I(Object obj) {
        return m(k(obj, this.f50903c));
    }

    public Set J(Object obj, Appendable appendable, rt.d dVar) {
        return K(k(obj, dVar), appendable, dVar, true);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Set K(rt.o oVar, Appendable appendable, rt.d dVar, boolean z10) {
        LinkedList linkedList;
        Throwable th2;
        int i10;
        int i11;
        Appendable appendable2 = appendable;
        if (appendable2 != null) {
            int size = this.f50904d.size();
            int i12 = 0;
            rt.d dVar2 = dVar;
            boolean z11 = dVar2 == this.f50903c;
            LinkedHashSet linkedHashSet = z10 ? new LinkedHashSet(size) : null;
            if (this.f50908h) {
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
                    i iVar = (i) this.f50904d.get(i13);
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
                    } catch (IllegalArgumentException | rt.r e10) {
                        th2 = e10;
                        i10 = -1;
                    }
                    if (i10 == -1) {
                        int f10 = iVar.f();
                        if (!iVar.i()) {
                            i11 = i13 + 1;
                            while (i11 < size) {
                                i iVar2 = (i) this.f50904d.get(i11);
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
                        i iVar3 = (i) this.f50904d.get(i15);
                        iVar3.r(oVar, appendable2, dVar, linkedHashSet, z11);
                        if (iVar3.i()) {
                            i15 = iVar3.u();
                        }
                        i15++;
                        appendable2 = appendable;
                    } catch (rt.r e11) {
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
    public c R(Map map, tt.b bVar) {
        tt.b k10 = tt.b.k(bVar, this.f50903c);
        return new c(new c(this, map), k10, (net.time4j.history.d) k10.b(wt.a.f54112a, null));
    }

    public c S(net.time4j.tz.l lVar) {
        if (lVar != null) {
            return new c(this, this.f50903c.l(new a.b().f(this.f50903c.e()).i(lVar.z()).a()).m(st.a.f50114e, lVar.E()));
        }
        throw new NullPointerException("Missing timezone id.");
    }

    public c T(rt.c cVar, Enum r42) {
        return new c(this, new a.b().f(this.f50903c.e()).d(cVar, r42).a());
    }

    public c U(st.g gVar) {
        return T(st.a.f50115f, gVar);
    }

    public c V(net.time4j.tz.k kVar) {
        return S(net.time4j.tz.l.N(kVar));
    }

    @Override // tt.d
    public Object a(CharSequence charSequence, s sVar, rt.d dVar) {
        boolean z10;
        p pVar;
        st.g gVar;
        net.time4j.tz.k kVar;
        net.time4j.a0 a0Var;
        net.time4j.tz.g gVar2;
        st.g gVar3 = this.f50911k;
        tt.b bVar = this.f50903c;
        if (dVar != bVar) {
            p pVar2 = new p(dVar, bVar);
            z10 = false;
            pVar = pVar2;
            gVar = (st.g) pVar2.b(st.a.f50115f, st.g.SMART);
        } else {
            z10 = true;
            pVar = dVar;
            gVar = gVar3;
        }
        boolean z11 = z10;
        e eVar = this.f50902b;
        if (eVar != null) {
            List f10 = eVar.f();
            e eVar2 = this.f50902b;
            net.time4j.r rVar = (net.time4j.r) F(this, eVar2, f10, charSequence, sVar, pVar, gVar, true, z11);
            if (sVar.i()) {
                return null;
            }
            rt.q h10 = sVar.h();
            if (h10.k()) {
                kVar = h10.u();
            } else {
                rt.c cVar = st.a.f50113d;
                if (pVar.c(cVar)) {
                    kVar = (net.time4j.tz.k) pVar.a(cVar);
                } else {
                    kVar = null;
                }
            }
            if (kVar != null) {
                rt.f0 f0Var = (rt.f0) dVar.b(st.a.f50130u, eVar2.a());
                rt.b0 b0Var = rt.b0.DAYLIGHT_SAVING;
                if (h10.n(b0Var)) {
                    boolean booleanValue = ((Boolean) h10.s(b0Var)).booleanValue();
                    net.time4j.tz.o oVar = (net.time4j.tz.o) pVar.b(st.a.f50114e, net.time4j.tz.l.f39579o);
                    if (booleanValue) {
                        gVar2 = net.time4j.tz.g.EARLIER_OFFSET;
                    } else {
                        gVar2 = net.time4j.tz.g.LATER_OFFSET;
                    }
                    a0Var = rVar.a(net.time4j.tz.l.N(kVar).Q(oVar.a(gVar2)), f0Var);
                } else {
                    rt.c cVar2 = st.a.f50114e;
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
        return G(this, this.f50901a, 0, charSequence, sVar, pVar, gVar, z11);
    }

    @Override // tt.e
    public Object b(Object obj, Appendable appendable, rt.d dVar, rt.t tVar) {
        rt.o k10 = k(obj, dVar);
        K(k10, appendable, dVar, false);
        return tVar.apply(k10);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof c) {
            c cVar = (c) obj;
            if (this.f50901a.equals(cVar.f50901a) && y(this.f50902b, cVar.f50902b) && this.f50903c.equals(cVar.f50903c) && this.f50905e.equals(cVar.f50905e) && this.f50904d.equals(cVar.f50904d)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return (this.f50901a.hashCode() * 7) + (this.f50903c.hashCode() * 31) + (this.f50904d.hashCode() * 37);
    }

    public String l(Object obj) {
        return I(obj);
    }

    public rt.d o() {
        return this.f50903c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public tt.b p() {
        return this.f50903c;
    }

    public rt.x q() {
        return this.f50901a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Map r() {
        return this.f50905e;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER);
        sb2.append("net.time4j.format.ChronoFormatter[chronology=");
        sb2.append(this.f50901a.p().getName());
        if (this.f50902b != null) {
            sb2.append(", override=");
            sb2.append(this.f50902b);
        }
        sb2.append(", default-attributes=");
        sb2.append(this.f50903c);
        sb2.append(", default-values=");
        sb2.append(this.f50905e);
        sb2.append(", processors=");
        boolean z10 = true;
        for (i iVar : this.f50904d) {
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
        return this.f50903c.h();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean z() {
        if (this.f50916p == 1 && !this.f50907g) {
            return true;
        }
        return false;
    }

    /* synthetic */ c(c cVar, tt.b bVar, a aVar) {
        this(cVar, bVar);
    }

    private c(rt.x xVar, rt.x xVar2, Locale locale, List list, Map map, st.a aVar, rt.x xVar3) {
        if (xVar != null) {
            if (!list.isEmpty()) {
                this.f50901a = xVar;
                this.f50902b = e.h(xVar2);
                this.f50915o = xVar3;
                tt.b d10 = tt.b.d(xVar2 == null ? xVar : xVar2, aVar, locale);
                this.f50903c = d10;
                this.f50911k = (st.g) d10.b(st.a.f50115f, st.g.SMART);
                this.f50905e = Collections.unmodifiableMap(map);
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
                    rt.p element = iVar.d().getElement();
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
                this.f50906f = jVar;
                this.f50907g = z11;
                this.f50908h = z12;
                this.f50909i = z13;
                this.f50910j = i10;
                this.f50912l = z10;
                this.f50913m = ((Boolean) this.f50903c.b(st.a.f50127r, Boolean.FALSE)).booleanValue();
                this.f50914n = x();
                this.f50916p = list.size();
                this.f50904d = n(list);
                this.f50917q = w();
                return;
            }
            throw new IllegalStateException("No format processors defined.");
        }
        throw new NullPointerException("Missing chronology.");
    }

    private c(c cVar, st.a aVar) {
        this(cVar, cVar.f50903c.l(aVar), (net.time4j.history.d) null);
    }

    private c(c cVar, tt.b bVar) {
        this(cVar, bVar, (net.time4j.history.d) null);
    }

    private c(c cVar, tt.b bVar, net.time4j.history.d dVar) {
        rt.p C;
        if (bVar != null) {
            this.f50901a = cVar.f50901a;
            this.f50902b = cVar.f50902b;
            this.f50915o = cVar.f50915o;
            this.f50903c = bVar;
            this.f50911k = (st.g) bVar.b(st.a.f50115f, st.g.SMART);
            this.f50905e = Collections.unmodifiableMap(new q(cVar.f50905e));
            this.f50906f = cVar.f50906f;
            this.f50907g = cVar.f50907g;
            this.f50908h = cVar.f50908h;
            this.f50909i = cVar.f50909i || dVar != null;
            this.f50910j = cVar.f50910j;
            int size = cVar.f50904d.size();
            ArrayList arrayList = new ArrayList(cVar.f50904d);
            boolean z10 = cVar.f50912l;
            for (int i10 = 0; i10 < size; i10++) {
                i iVar = (i) arrayList.get(i10);
                rt.p element = iVar.d().getElement();
                rt.x xVar = this.f50901a;
                xVar = xVar == net.time4j.a0.T() ? xVar.c() : xVar;
                if (element != null && !xVar.E(element)) {
                    Iterator it = xVar.u().iterator();
                    while (true) {
                        if (!it.hasNext()) {
                            break;
                        }
                        rt.s sVar = (rt.s) it.next();
                        if (sVar.d(cVar.u(), cVar.f50903c).contains(element)) {
                            Iterator it2 = sVar.d(bVar.h(), bVar).iterator();
                            while (true) {
                                if (!it2.hasNext()) {
                                    break;
                                }
                                rt.p pVar = (rt.p) it2.next();
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
            this.f50912l = z10;
            this.f50913m = ((Boolean) this.f50903c.b(st.a.f50127r, Boolean.FALSE)).booleanValue();
            this.f50914n = x();
            this.f50916p = arrayList.size();
            this.f50904d = n(arrayList);
            this.f50917q = w();
            return;
        }
        throw new NullPointerException("Missing global format attributes.");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static Object h(Object obj) {
        return obj;
    }

    private c(c cVar, Map map) {
        e eVar = cVar.f50902b;
        rt.x e10 = eVar == null ? null : eVar.e();
        for (rt.p pVar : map.keySet()) {
            j(cVar.f50901a, e10, pVar);
        }
        this.f50901a = cVar.f50901a;
        this.f50902b = cVar.f50902b;
        this.f50915o = cVar.f50915o;
        this.f50903c = cVar.f50903c;
        this.f50911k = cVar.f50911k;
        this.f50906f = cVar.f50906f;
        this.f50907g = cVar.f50907g;
        this.f50908h = cVar.f50908h;
        this.f50909i = cVar.f50909i;
        this.f50910j = cVar.f50910j;
        this.f50913m = cVar.f50913m;
        HashMap hashMap = new HashMap(cVar.f50905e);
        boolean z10 = cVar.f50912l;
        for (rt.p pVar2 : map.keySet()) {
            Object obj = map.get(pVar2);
            if (obj == null) {
                hashMap.remove(pVar2);
            } else {
                hashMap.put(pVar2, obj);
                z10 = z10 && v.T(pVar2);
            }
        }
        this.f50905e = Collections.unmodifiableMap(hashMap);
        this.f50912l = z10;
        this.f50914n = x();
        this.f50916p = cVar.f50916p;
        this.f50904d = n(cVar.f50904d);
        this.f50917q = w();
    }
}
