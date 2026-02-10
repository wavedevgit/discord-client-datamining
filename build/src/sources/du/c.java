package du;

import bu.h0;
import bu.n0;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import cu.a;
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
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c implements du.e, du.d {

    /* renamed from: r  reason: collision with root package name */
    public static final c f21955r = L();

    /* renamed from: a  reason: collision with root package name */
    private final bu.x f21956a;

    /* renamed from: b  reason: collision with root package name */
    private final e f21957b;

    /* renamed from: c  reason: collision with root package name */
    private final du.b f21958c;

    /* renamed from: d  reason: collision with root package name */
    private final List f21959d;

    /* renamed from: e  reason: collision with root package name */
    private final Map f21960e;

    /* renamed from: f  reason: collision with root package name */
    private final j f21961f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f21962g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f21963h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f21964i;

    /* renamed from: j  reason: collision with root package name */
    private final int f21965j;

    /* renamed from: k  reason: collision with root package name */
    private final cu.g f21966k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f21967l;

    /* renamed from: m  reason: collision with root package name */
    private final boolean f21968m;

    /* renamed from: n  reason: collision with root package name */
    private final boolean f21969n;

    /* renamed from: o  reason: collision with root package name */
    private final bu.x f21970o;

    /* renamed from: p  reason: collision with root package name */
    private final int f21971p;

    /* renamed from: q  reason: collision with root package name */
    private final boolean f21972q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a implements du.e {
        a() {
        }

        @Override // du.e
        /* renamed from: a */
        public Object b(net.time4j.tz.k kVar, Appendable appendable, bu.d dVar, bu.t tVar) {
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b implements du.d {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Map f21973a;

        b(Map map) {
            this.f21973a = map;
        }

        @Override // du.d
        /* renamed from: b */
        public net.time4j.tz.k a(CharSequence charSequence, s sVar, bu.d dVar) {
            int f10 = sVar.f();
            int i10 = f10 + 3;
            if (i10 <= charSequence.length()) {
                net.time4j.tz.k kVar = (net.time4j.tz.k) this.f21973a.get(charSequence.subSequence(f10, i10).toString());
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
    /* renamed from: du.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class C0297c {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f21974a;

        static {
            int[] iArr = new int[w.values().length];
            f21974a = iArr;
            try {
                iArr[w.CLDR.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f21974a[w.CLDR_24.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f21974a[w.CLDR_DATE.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f21974a[w.SIMPLE_DATE_FORMAT.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d {

        /* renamed from: n  reason: collision with root package name */
        private static final bu.c f21975n = cu.a.e("CUSTOM_DAY_PERIOD", net.time4j.k.class);

        /* renamed from: a  reason: collision with root package name */
        private final bu.x f21976a;

        /* renamed from: b  reason: collision with root package name */
        private final bu.x f21977b;

        /* renamed from: c  reason: collision with root package name */
        private final Locale f21978c;

        /* renamed from: d  reason: collision with root package name */
        private List f21979d;

        /* renamed from: e  reason: collision with root package name */
        private LinkedList f21980e;

        /* renamed from: f  reason: collision with root package name */
        private int f21981f;

        /* renamed from: g  reason: collision with root package name */
        private int f21982g;

        /* renamed from: h  reason: collision with root package name */
        private int f21983h;

        /* renamed from: i  reason: collision with root package name */
        private String f21984i;

        /* renamed from: j  reason: collision with root package name */
        private net.time4j.k f21985j;

        /* renamed from: k  reason: collision with root package name */
        private Map f21986k;

        /* renamed from: l  reason: collision with root package name */
        private bu.x f21987l;

        /* renamed from: m  reason: collision with root package name */
        private int f21988m;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class a implements bu.n {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ bu.n f21989d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ bu.n f21990e;

            a(bu.n nVar, bu.n nVar2) {
                this.f21989d = nVar;
                this.f21990e = nVar2;
            }

            @Override // bu.n
            /* renamed from: a */
            public boolean test(bu.o oVar) {
                if (this.f21989d.test(oVar) && this.f21990e.test(oVar)) {
                    return true;
                }
                return false;
            }
        }

        /* synthetic */ d(bu.x xVar, Locale locale, a aVar) {
            this(xVar, locale);
        }

        private i H(bu.p pVar) {
            List list;
            i iVar;
            if (this.f21979d.isEmpty()) {
                iVar = null;
            } else {
                iVar = (i) this.f21979d.get(list.size() - 1);
            }
            if (iVar == null) {
                return null;
            }
            if (iVar.g() && !iVar.i()) {
                throw new IllegalStateException(pVar.name() + " can't be inserted after an element with decimal digits.");
            }
            return iVar;
        }

        private static void I(bu.c cVar) {
            if (cVar.name().charAt(0) != '_') {
                return;
            }
            throw new IllegalArgumentException("Internal attribute not allowed: " + cVar.name());
        }

        private void J(bu.p pVar) {
            bu.x j10 = c.j(this.f21976a, this.f21977b, pVar);
            int s10 = c.s(j10, this.f21976a, this.f21977b);
            if (s10 >= this.f21988m) {
                this.f21987l = j10;
                this.f21988m = s10;
            }
        }

        private void K() {
            if (R(this.f21976a)) {
                return;
            }
            throw new IllegalStateException("Timezone names in specific non-location format can only be reliably combined with instant-like types, for example \"Moment\".");
        }

        private void M() {
            for (int size = this.f21979d.size() - 1; size >= 0; size--) {
                i iVar = (i) this.f21979d.get(size);
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
            if (!z10 && !z11 && this.f21982g != -1) {
                throw new IllegalArgumentException("Cannot add fractional element with variable width after another numerical element with variable width.");
            }
        }

        private cu.t O(boolean z10, net.time4j.k kVar) {
            du.b bVar;
            cu.a a10 = new a.b(P()).a();
            du.b bVar2 = a10;
            if (kVar != null) {
                if (this.f21980e.isEmpty()) {
                    bVar = new du.b(a10, this.f21978c);
                } else {
                    bVar = (du.b) this.f21980e.getLast();
                }
                bVar2 = bVar.m(f21975n, kVar);
            }
            for (bu.s sVar : net.time4j.g0.i0().x()) {
                for (bu.p pVar : sVar.a(this.f21978c, bVar2)) {
                    if (z10 && pVar.d() == 'b' && S(pVar)) {
                        return (cu.t) c.h(pVar);
                    }
                    if (!z10 && pVar.d() == 'B' && S(pVar)) {
                        return (cu.t) c.h(pVar);
                    }
                }
            }
            throw new IllegalStateException("Day periods are not supported: " + P().q());
        }

        private static int Q(du.b bVar) {
            if (bVar == null) {
                return 0;
            }
            return bVar.g();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static boolean R(bu.x xVar) {
            while (!zt.f.class.isAssignableFrom(xVar.q())) {
                xVar = xVar.b();
                if (xVar == null) {
                    return false;
                }
            }
            return true;
        }

        private boolean S(bu.p pVar) {
            if (!pVar.name().endsWith("_DAY_PERIOD")) {
                return false;
            }
            if (this.f21977b != null || this.f21976a.F(pVar)) {
                return true;
            }
            bu.x xVar = this.f21976a;
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
            this.f21983h = 0;
        }

        private void o(StringBuilder sb2) {
            if (sb2.length() > 0) {
                n(sb2.toString());
                sb2.setLength(0);
            }
        }

        private d s(bu.p pVar, boolean z10, int i10, int i11, x xVar) {
            return t(pVar, z10, i10, i11, xVar, false);
        }

        private d t(bu.p pVar, boolean z10, int i10, int i11, x xVar, boolean z11) {
            J(pVar);
            i H = H(pVar);
            r rVar = new r(pVar, z10, i10, i11, xVar, z11);
            if (z10) {
                int i12 = this.f21982g;
                if (i12 == -1) {
                    w(rVar);
                    return this;
                }
                i iVar = (i) this.f21979d.get(i12);
                w(rVar);
                List list = this.f21979d;
                if (iVar.f() == ((i) list.get(list.size() - 1)).f()) {
                    this.f21982g = i12;
                    this.f21979d.set(i12, iVar.t(i10));
                }
                return this;
            } else if (H != null && H.j() && !H.i()) {
                throw new IllegalStateException("Numerical element with variable width can't be inserted after another numerical element. Consider \"addFixedXXX()\" instead.");
            } else {
                w(rVar);
                this.f21982g = this.f21979d.size() - 1;
                return this;
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void w(h hVar) {
            du.b bVar;
            int i10;
            int i11;
            this.f21982g = -1;
            if (!this.f21980e.isEmpty()) {
                bVar = (du.b) this.f21980e.getLast();
                i10 = bVar.g();
                i11 = bVar.i();
            } else {
                bVar = null;
                i10 = 0;
                i11 = 0;
            }
            i iVar = new i(hVar, i10, i11, bVar);
            int i12 = this.f21983h;
            if (i12 > 0) {
                iVar = iVar.n(i12, 0);
                this.f21983h = 0;
            }
            this.f21979d.add(iVar);
        }

        public d A(cu.t tVar) {
            J(tVar);
            w(a0.b(tVar));
            return this;
        }

        public d B() {
            if (R(this.f21976a)) {
                w(c0.INSTANCE);
                return this;
            }
            throw new IllegalStateException("Only unix timestamps can have a timezone id.");
        }

        public d C(cu.e eVar, boolean z10, List list) {
            w(new e0(eVar, z10, list));
            return this;
        }

        public d D(bu.p pVar) {
            J(pVar);
            H(pVar);
            f0 f0Var = new f0(pVar);
            int i10 = this.f21982g;
            if (i10 == -1) {
                w(f0Var);
                this.f21982g = this.f21979d.size() - 1;
                return this;
            }
            i iVar = (i) this.f21979d.get(i10);
            b0(cu.a.f21113f, cu.g.STRICT);
            w(f0Var);
            L();
            List list = this.f21979d;
            if (iVar.f() == ((i) list.get(list.size() - 1)).f()) {
                this.f21982g = i10;
                this.f21979d.set(i10, iVar.t(2));
            }
            return this;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public d E(bu.p pVar, int i10, boolean z10) {
            i iVar;
            if (this.f21979d.isEmpty()) {
                iVar = null;
            } else {
                List list = this.f21979d;
                iVar = (i) list.get(list.size() - 1);
            }
            if (iVar != null && !iVar.i() && iVar.j() && i10 == 4) {
                return t(pVar, true, 4, 4, x.SHOW_NEVER, z10);
            }
            return t(pVar, false, i10, 10, x.SHOW_WHEN_NEGATIVE, z10);
        }

        public c F() {
            return G(cu.a.f());
        }

        public c G(cu.a aVar) {
            boolean z10;
            if (aVar != null) {
                int size = this.f21979d.size();
                HashMap hashMap = null;
                for (int i10 = 0; i10 < size; i10++) {
                    i iVar = (i) this.f21979d.get(i10);
                    if (iVar.i()) {
                        int f10 = iVar.f();
                        int i11 = size - 1;
                        while (true) {
                            if (i11 > i10) {
                                if (((i) this.f21979d.get(i11)).f() == f10) {
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
                        this.f21979d.set(num.intValue(), hashMap.get(num));
                    }
                }
                c cVar = new c(this.f21976a, this.f21977b, this.f21978c, this.f21979d, this.f21986k, aVar, this.f21987l, null);
                String str = this.f21984i;
                if (str == null) {
                    str = "";
                }
                if (this.f21985j != null || !str.isEmpty()) {
                    du.b bVar = cVar.f21958c;
                    if (!str.isEmpty()) {
                        bVar = bVar.m(cu.a.f21131x, str);
                    }
                    net.time4j.k kVar = this.f21985j;
                    if (kVar != null) {
                        bVar = bVar.m(f21975n, kVar);
                    }
                    return new c(cVar, bVar, (a) null);
                }
                return cVar;
            }
            throw new NullPointerException("Missing format attributes.");
        }

        public d L() {
            this.f21980e.removeLast();
            V();
            return this;
        }

        public bu.x P() {
            bu.x xVar = this.f21977b;
            if (xVar == null) {
                return this.f21976a;
            }
            return xVar;
        }

        public d U() {
            int i10;
            i iVar;
            int i11;
            int i12;
            if (!this.f21980e.isEmpty()) {
                i10 = ((du.b) this.f21980e.getLast()).i();
            } else {
                i10 = 0;
            }
            if (!this.f21979d.isEmpty()) {
                i11 = this.f21979d.size() - 1;
                iVar = (i) this.f21979d.get(i11);
                i12 = iVar.f();
            } else {
                iVar = null;
                i11 = -1;
                i12 = -1;
            }
            if (i10 == i12) {
                this.f21979d.set(i11, iVar.v());
                V();
                this.f21982g = -1;
                return this;
            }
            throw new IllegalStateException("Cannot start or-block without any previous step in current section.");
        }

        public d W(bu.n nVar, int i10) {
            w(new y(nVar, i10));
            return this;
        }

        public d X() {
            return Y(null);
        }

        public d Y(bu.n nVar) {
            du.b bVar;
            bu.n nVar2;
            a aVar;
            V();
            a.b bVar2 = new a.b();
            if (!this.f21980e.isEmpty()) {
                bVar = (du.b) this.f21980e.getLast();
                bVar2.f(bVar.e());
                nVar2 = bVar.f();
            } else {
                bVar = null;
                nVar2 = null;
            }
            int Q = Q(bVar) + 1;
            int i10 = this.f21981f + 1;
            this.f21981f = i10;
            if (nVar != null) {
                if (nVar2 == null) {
                    aVar = nVar;
                } else {
                    aVar = new a(nVar2, nVar);
                }
            } else {
                aVar = nVar2;
            }
            this.f21980e.addLast(new du.b(bVar2.a(), this.f21978c, Q, i10, aVar));
            return this;
        }

        public d Z(bu.c cVar, char c10) {
            du.b l10;
            I(cVar);
            V();
            if (this.f21980e.isEmpty()) {
                l10 = new du.b(new a.b().b(cVar, c10).a(), this.f21978c);
            } else {
                du.b bVar = (du.b) this.f21980e.getLast();
                a.b bVar2 = new a.b();
                bVar2.f(bVar.e());
                bVar2.b(cVar, c10);
                l10 = bVar.l(bVar2.a());
            }
            this.f21980e.addLast(l10);
            return this;
        }

        public d a0(bu.c cVar, int i10) {
            du.b l10;
            I(cVar);
            V();
            if (this.f21980e.isEmpty()) {
                l10 = new du.b(new a.b().c(cVar, i10).a(), this.f21978c);
            } else {
                du.b bVar = (du.b) this.f21980e.getLast();
                a.b bVar2 = new a.b();
                bVar2.f(bVar.e());
                bVar2.c(cVar, i10);
                l10 = bVar.l(bVar2.a());
            }
            this.f21980e.addLast(l10);
            return this;
        }

        public d b0(bu.c cVar, Enum r52) {
            du.b l10;
            I(cVar);
            V();
            if (this.f21980e.isEmpty()) {
                l10 = new du.b(new a.b().d(cVar, r52).a(), this.f21978c);
            } else {
                du.b bVar = (du.b) this.f21980e.getLast();
                a.b bVar2 = new a.b();
                bVar2.f(bVar.e());
                bVar2.d(cVar, r52);
                l10 = bVar.l(bVar2.a());
            }
            this.f21980e.addLast(l10);
            return this;
        }

        public d d(bu.p pVar, du.e eVar, du.d dVar) {
            J(pVar);
            w(new du.f(pVar, eVar, dVar));
            return this;
        }

        public d e() {
            return A(O(false, null));
        }

        public d f() {
            return A(O(true, null));
        }

        public d g(bu.p pVar, int i10) {
            return s(pVar, true, i10, i10, x.SHOW_NEVER);
        }

        public d h(bu.p pVar, int i10) {
            return s(pVar, true, i10, i10, x.SHOW_NEVER);
        }

        public d i(bu.p pVar, int i10, int i11, boolean z10) {
            boolean z11;
            J(pVar);
            if (!z10 && i10 == i11) {
                z11 = true;
            } else {
                z11 = false;
            }
            N(z11, z10);
            j jVar = new j(pVar, i10, i11, z10);
            int i12 = this.f21982g;
            if (i12 != -1 && z11) {
                i iVar = (i) this.f21979d.get(i12);
                w(jVar);
                List list = this.f21979d;
                if (iVar.f() == ((i) list.get(list.size() - 1)).f()) {
                    this.f21982g = i12;
                    this.f21979d.set(i12, iVar.t(i10));
                }
                return this;
            }
            w(jVar);
            return this;
        }

        public d j(bu.p pVar, int i10, int i11) {
            return s(pVar, false, i10, i11, x.SHOW_NEVER);
        }

        public d k(bu.p pVar, int i10, int i11, x xVar) {
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
                if (this.f21979d.isEmpty()) {
                    iVar = null;
                } else {
                    List list = this.f21979d;
                    iVar = (i) list.get(list.size() - 1);
                }
                if (iVar != null && iVar.g() && !iVar.i()) {
                    throw new IllegalStateException("Numerical literal can't be inserted after an element with decimal digits.");
                }
            }
            if (c10 != 0 && (i10 = this.f21982g) != -1) {
                i iVar2 = (i) this.f21979d.get(i10);
                w(mVar);
                int f10 = iVar2.f();
                List list2 = this.f21979d;
                if (f10 == ((i) list2.get(list2.size() - 1)).f()) {
                    this.f21982g = i10;
                    this.f21979d.set(i10, iVar2.t(c10));
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

        public d q(bu.p pVar, int i10, int i11, x xVar) {
            return s(pVar, false, i10, i11, xVar);
        }

        public d r() {
            K();
            w(new d0(false));
            return this;
        }

        public d u(bu.p pVar, int i10, int i11) {
            return s(pVar, false, i10, i11, x.SHOW_NEVER);
        }

        public d v(String str, w wVar) {
            if (wVar != null) {
                Map map = Collections.EMPTY_MAP;
                int length = str.length();
                Locale locale = this.f21978c;
                StringBuilder sb2 = new StringBuilder();
                if (!this.f21980e.isEmpty()) {
                    locale = ((du.b) this.f21980e.getLast()).h();
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
                    int size = this.f21979d.size();
                    for (int i15 = 0; i15 < size; i15++) {
                        i iVar = (i) this.f21979d.get(i15);
                        bu.p element = iVar.d().getElement();
                        if (map.containsKey(element)) {
                            this.f21979d.set(i15, iVar.x((bu.p) map.get(element)));
                        }
                    }
                }
                if (this.f21984i != null) {
                    str = "";
                }
                this.f21984i = str;
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

        public d z(bu.p pVar) {
            Enum[] enumArr;
            J(pVar);
            if (pVar instanceof cu.t) {
                w(a0.b((cu.t) cu.t.class.cast(pVar)));
                return this;
            }
            HashMap hashMap = new HashMap();
            for (Enum r42 : (Enum[]) pVar.getType().getEnumConstants()) {
                hashMap.put(r42, r42.toString());
            }
            w(new o(pVar, hashMap));
            return this;
        }

        private d(bu.x xVar, Locale locale) {
            this(xVar, locale, (bu.x) null);
        }

        private d(bu.x xVar, Locale locale, bu.x xVar2) {
            if (xVar == null) {
                throw new NullPointerException("Missing chronology.");
            }
            if (locale != null) {
                this.f21976a = xVar;
                this.f21977b = xVar2;
                this.f21978c = locale;
                this.f21979d = new ArrayList();
                this.f21980e = new LinkedList();
                this.f21981f = 0;
                this.f21982g = -1;
                this.f21983h = 0;
                this.f21984i = null;
                this.f21985j = null;
                this.f21986k = new HashMap();
                this.f21987l = xVar;
                this.f21988m = 0;
                return;
            }
            throw new NullPointerException("Missing locale.");
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class e implements bu.u {

        /* renamed from: d  reason: collision with root package name */
        private final bu.x f21992d;

        /* renamed from: e  reason: collision with root package name */
        private final List f21993e;

        private e(bu.x xVar) {
            this.f21992d = xVar;
            ArrayList arrayList = new ArrayList();
            arrayList.addAll(xVar.x());
            arrayList.addAll(net.time4j.g0.i0().x());
            this.f21993e = Collections.unmodifiableList(arrayList);
        }

        static e g(bu.x xVar) {
            if (xVar == null) {
                return null;
            }
            return new e(xVar);
        }

        @Override // bu.u
        public bu.f0 a() {
            return this.f21992d.a();
        }

        @Override // bu.u
        public bu.x b() {
            throw new UnsupportedOperationException("Not used.");
        }

        @Override // bu.u
        public int c() {
            return this.f21992d.c();
        }

        @Override // bu.u
        /* renamed from: d */
        public net.time4j.r h(bu.q qVar, bu.d dVar, boolean z10, boolean z11) {
            Object h10 = this.f21992d.h(qVar, dVar, z10, z11);
            net.time4j.g0 g0Var = (net.time4j.g0) net.time4j.g0.i0().h(qVar, dVar, z10, z11);
            if (h10 instanceof bu.m) {
                return (net.time4j.r) c.h(net.time4j.r.b((bu.m) bu.m.class.cast(h10), g0Var));
            }
            throw new IllegalStateException("Cannot determine calendar type: " + h10);
        }

        public bu.x e() {
            return this.f21992d;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof e) {
                return this.f21992d.equals(((e) obj).f21992d);
            }
            return false;
        }

        public List f() {
            return this.f21993e;
        }

        public int hashCode() {
            return this.f21992d.hashCode();
        }

        @Override // bu.u
        /* renamed from: i */
        public bu.o m(net.time4j.r rVar, bu.d dVar) {
            throw new UnsupportedOperationException("Not used.");
        }

        @Override // bu.u
        public String j(bu.y yVar, Locale locale) {
            throw new UnsupportedOperationException("Not used.");
        }

        public String toString() {
            return this.f21992d.q().getName();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class f implements bu.o, zt.f {

        /* renamed from: d  reason: collision with root package name */
        private final net.time4j.r f21994d;

        /* renamed from: e  reason: collision with root package name */
        private final String f21995e;

        /* renamed from: i  reason: collision with root package name */
        private final net.time4j.tz.k f21996i;

        /* synthetic */ f(net.time4j.r rVar, String str, net.time4j.tz.k kVar, a aVar) {
            this(rVar, str, kVar);
        }

        private zt.f b() {
            bu.f0 f0Var;
            try {
                f0Var = bu.x.G(this.f21994d.c().getClass()).a();
            } catch (RuntimeException unused) {
                f0Var = bu.f0.f7804a;
            }
            return this.f21994d.a(net.time4j.tz.l.N(this.f21996i), f0Var);
        }

        @Override // zt.f
        public int a() {
            return b().a();
        }

        @Override // bu.o
        public Object k(bu.p pVar) {
            return this.f21994d.k(pVar);
        }

        @Override // bu.o
        public boolean l() {
            return true;
        }

        @Override // bu.o
        public int m(bu.p pVar) {
            return this.f21994d.m(pVar);
        }

        @Override // bu.o
        public boolean n(bu.p pVar) {
            return this.f21994d.n(pVar);
        }

        @Override // zt.f
        public long o() {
            return b().o();
        }

        @Override // bu.o
        public net.time4j.tz.k r() {
            return this.f21996i;
        }

        @Override // bu.o
        public Object t(bu.p pVar) {
            return this.f21994d.t(pVar);
        }

        @Override // bu.o
        public Object v(bu.p pVar) {
            return this.f21994d.v(pVar);
        }

        private f(net.time4j.r rVar, String str, net.time4j.tz.k kVar) {
            this.f21994d = rVar;
            this.f21995e = str;
            this.f21996i = kVar;
        }
    }

    /* synthetic */ c(bu.x xVar, bu.x xVar2, Locale locale, List list, Map map, cu.a aVar, bu.x xVar3, a aVar2) {
        this(xVar, xVar2, locale, list, map, aVar, xVar3);
    }

    private static boolean A(bu.x xVar, bu.x xVar2, bu.p pVar) {
        for (bu.s sVar : xVar.x()) {
            if (sVar.b(pVar)) {
                return true;
            }
        }
        if (xVar2 != null) {
            if (pVar.A()) {
                for (bu.s sVar2 : xVar2.x()) {
                    if (sVar2.b(pVar)) {
                        return true;
                    }
                }
                return false;
            } else if (pVar.C() && net.time4j.g0.i0().F(pVar)) {
                for (bu.s sVar3 : net.time4j.g0.i0().x()) {
                    if (sVar3.b(pVar)) {
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
                for (bu.s sVar4 : xVar.x()) {
                    if (sVar4.b(pVar)) {
                        return true;
                    }
                }
            } else {
                return false;
            }
        }
    }

    public static c B(cu.e eVar, cu.e eVar2, Locale locale, net.time4j.tz.k kVar) {
        d dVar = new d(net.time4j.a0.T(), locale, (a) null);
        dVar.w(new z(eVar, eVar2));
        return dVar.F().V(kVar);
    }

    public static c C(String str, w wVar, Locale locale, bu.x xVar) {
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
    private static java.lang.Object D(du.c r15, bu.u r16, java.util.List r17, java.lang.CharSequence r18, du.s r19, bu.d r20, cu.g r21, boolean r22, boolean r23) {
        /*
            Method dump skipped, instructions count: 430
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: du.c.D(du.c, bu.u, java.util.List, java.lang.CharSequence, du.s, bu.d, cu.g, boolean, boolean):java.lang.Object");
    }

    private static Object E(c cVar, bu.x xVar, int i10, CharSequence charSequence, s sVar, bu.d dVar, cu.g gVar, boolean z10) {
        boolean z11;
        bu.x xVar2;
        CharSequence charSequence2;
        s sVar2;
        cu.g gVar2;
        boolean z12;
        c cVar2;
        bu.x xVar3;
        Object E;
        bu.x b10 = xVar.b();
        if (b10 != null && xVar != (xVar3 = cVar.f21970o)) {
            if (b10 == xVar3) {
                E = D(cVar, b10, b10.x(), charSequence, sVar, dVar, gVar, true, z10);
            } else {
                E = E(cVar, b10, i10 + 1, charSequence, sVar, dVar, gVar, z10);
            }
            if (sVar.i()) {
                return null;
            }
            if (E == null) {
                bu.q g10 = sVar.g();
                sVar.k(charSequence.length(), v(g10) + t(g10));
                return null;
            }
            bu.q h10 = sVar.h();
            try {
                if (b10 instanceof h0) {
                    Q(h10, ((h0) h0.class.cast(b10)).M(), E);
                    Object h11 = xVar.h(h10, dVar, gVar.a(), false);
                    if (h11 == null) {
                        if (!sVar.i()) {
                            sVar.k(charSequence.length(), v(h10) + t(h10));
                        }
                        return null;
                    } else if (gVar.e()) {
                        return i(h10, h11, charSequence, sVar);
                    } else {
                        return h11;
                    }
                }
                throw new IllegalStateException("Unsupported chronology or preparser: " + xVar);
            } catch (RuntimeException e10) {
                sVar.k(charSequence.length(), e10.getMessage() + t(h10));
                return null;
            }
        }
        List x10 = xVar.x();
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
        return D(cVar2, xVar2, x10, charSequence2, sVar2, dVar, gVar2, z11, z12);
    }

    private bu.q H(CharSequence charSequence, s sVar, bu.d dVar, boolean z10, int i10) {
        LinkedList linkedList;
        v vVar;
        v vVar2;
        int i11;
        bu.p element;
        v vVar3 = new v(i10, this.f21967l);
        vVar3.d0(sVar.f());
        if (this.f21962g) {
            LinkedList linkedList2 = new LinkedList();
            linkedList2.push(vVar3);
            linkedList = linkedList2;
        } else {
            linkedList = null;
        }
        int size = this.f21959d.size();
        int i12 = 0;
        int i13 = 0;
        int i14 = 0;
        while (i14 < size) {
            i iVar = (i) this.f21959d.get(i14);
            if (linkedList == null) {
                vVar2 = vVar3;
                vVar = vVar2;
            } else {
                i12 = iVar.b();
                int i15 = i12;
                while (i15 > i13) {
                    vVar3 = new v(i10 >>> 1, this.f21967l);
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
            if (sVar.j() && (element = iVar.d().getElement()) != null && this.f21960e.containsKey(element)) {
                vVar2.I(element, this.f21960e.get(element));
                vVar2.E(n0.ERROR_MESSAGE, null);
                sVar.a();
                sVar.b();
            }
            if (sVar.i()) {
                int f10 = iVar.f();
                if (!iVar.i()) {
                    i11 = i14 + 1;
                    while (i11 < size) {
                        i iVar2 = (i) this.f21959d.get(i11);
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
                    for (int i18 = i14 + 1; i18 < size && ((i) this.f21959d.get(i18)).b() > b10; i18++) {
                        i17 = i18;
                    }
                    int i19 = size - 1;
                    while (true) {
                        if (i19 <= i17) {
                            break;
                        } else if (((i) this.f21959d.get(i19)).f() == f10) {
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
        N.C(cu.e.MEDIUM, false, Arrays.asList("GMT", "UT", "Z"));
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
        N.w(new du.f(b0.TIMEZONE_OFFSET, new a(), new b(hashMap)));
        return N.F().V(net.time4j.tz.p.f37785v);
    }

    private static void M(d dVar) {
        d X = dVar.X();
        bu.c cVar = cu.a.f21114g;
        cu.v vVar = cu.v.ABBREVIATED;
        X.b0(cVar, vVar).z(net.time4j.f0.G).L().n(", ").L().j(net.time4j.f0.F, 1, 2).l(' ').b0(cVar, vVar).z(net.time4j.f0.D).L().l(' ').g(net.time4j.f0.A, 4).l(' ').g(net.time4j.g0.F, 2).l(':').g(net.time4j.g0.H, 2).X().l(':').g(net.time4j.g0.J, 2).L().l(' ');
    }

    public static d N(Class cls, Locale locale) {
        if (cls != null) {
            bu.x G = bu.x.G(cls);
            if (G != null) {
                return new d(G, locale, (a) null);
            }
            throw new IllegalArgumentException("Not formattable: " + cls);
        }
        throw new NullPointerException("Missing chronological type.");
    }

    private static void O(bu.q qVar, bu.p pVar, Object obj) {
        qVar.E(pVar, pVar.getType().cast(obj));
    }

    private static String P(int i10, CharSequence charSequence) {
        int length = charSequence.length();
        if (length - i10 <= 10) {
            return charSequence.subSequence(i10, length).toString();
        }
        return charSequence.subSequence(i10, i10 + 10).toString() + "...";
    }

    private static void Q(bu.q qVar, bu.p pVar, Object obj) {
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
                            if (z10 && i11 == i10 + 2 && d.R(dVar.f21976a)) {
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
        int i13 = C0297c.f21974a[wVar.ordinal()];
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
        if (((net.time4j.g0) r10.k(r6)).h() == 24) goto L41;
     */
    /* JADX WARN: Removed duplicated region for block: B:44:0x012c  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static java.lang.Object i(bu.q r10, java.lang.Object r11, java.lang.CharSequence r12, du.s r13) {
        /*
            Method dump skipped, instructions count: 465
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: du.c.i(bu.q, java.lang.Object, java.lang.CharSequence, du.s):java.lang.Object");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static bu.x j(bu.x xVar, bu.x xVar2, bu.p pVar) {
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
            if (pVar.C() && net.time4j.g0.i0().F(pVar)) {
                return net.time4j.g0.i0();
            }
        }
        throw new IllegalArgumentException("Unsupported element: " + pVar.name());
    }

    private bu.o k(Object obj, bu.d dVar) {
        net.time4j.r q02;
        e eVar = this.f21957b;
        if (eVar == null) {
            return this.f21956a.m(obj, dVar);
        }
        try {
            Class q10 = eVar.e().q();
            bu.f0 f0Var = (bu.f0) dVar.b(cu.a.f21128u, this.f21957b.a());
            net.time4j.a0 a0Var = (net.time4j.a0) net.time4j.a0.class.cast(obj);
            net.time4j.tz.k kVar = (net.time4j.tz.k) dVar.c(cu.a.f21111d);
            String str = "";
            if (bu.l.class.isAssignableFrom(q10)) {
                android.support.v4.media.session.b.a(h(this.f21957b.e()));
                str = (String) dVar.c(cu.a.f21127t);
                q02 = a0Var.p0(null, str, kVar, f0Var);
            } else if (bu.m.class.isAssignableFrom(q10)) {
                q02 = a0Var.q0(this.f21957b.e(), kVar, f0Var);
            } else {
                throw new IllegalStateException("Unexpected calendar override: " + q10);
            }
            return new f(q02, str, kVar, null);
        } catch (ClassCastException e10) {
            throw new IllegalArgumentException("Not formattable: " + obj, e10);
        } catch (NoSuchElementException e11) {
            throw new IllegalArgumentException(e11.getMessage(), e11);
        }
    }

    private String m(bu.o oVar) {
        StringBuilder sb2 = new StringBuilder(this.f21959d.size() * 8);
        try {
            J(oVar, sb2, this.f21958c, false);
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
    public static int s(bu.x xVar, bu.x xVar2, bu.x xVar3) {
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

    private static String t(bu.q qVar) {
        Set<bu.p> y10 = qVar.y();
        StringBuilder sb2 = new StringBuilder(y10.size() * 16);
        sb2.append(" [parsed={");
        boolean z10 = true;
        for (bu.p pVar : y10) {
            if (z10) {
                z10 = false;
            } else {
                sb2.append(", ");
            }
            sb2.append(pVar.name());
            sb2.append('=');
            sb2.append(qVar.k(pVar));
        }
        sb2.append("}]");
        return sb2.toString();
    }

    private static String v(bu.q qVar) {
        n0 n0Var = n0.ERROR_MESSAGE;
        if (qVar.n(n0Var)) {
            String str = "Validation failed => " + ((String) qVar.k(n0Var));
            qVar.E(n0Var, null);
            return str;
        }
        return "Insufficient data:";
    }

    private boolean w() {
        boolean z10 = z();
        if (z10) {
            h d10 = ((i) this.f21959d.get(0)).d();
            if (d10 instanceof du.f) {
                return ((du.f) du.f.class.cast(d10)).c();
            }
            if (!(d10 instanceof z)) {
                return false;
            }
        }
        return z10;
    }

    private boolean x() {
        if (this.f21956a.b() == null && this.f21957b == null) {
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

    public Object F(CharSequence charSequence) {
        s sVar = new s();
        Object G = G(charSequence, sVar);
        if (G != null) {
            int f10 = sVar.f();
            if (!this.f21968m && f10 < charSequence.length()) {
                throw new ParseException("Unparsed trailing characters: " + P(f10, charSequence), f10);
            }
            return G;
        }
        throw new ParseException(sVar.d(), sVar.c());
    }

    public Object G(CharSequence charSequence, s sVar) {
        if (this.f21969n) {
            bu.x xVar = this.f21956a;
            return D(this, xVar, xVar.x(), charSequence, sVar, this.f21958c, this.f21966k, false, true);
        }
        return a(charSequence, sVar, this.f21958c);
    }

    public String I(Object obj) {
        return m(k(obj, this.f21958c));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Set J(bu.o oVar, Appendable appendable, bu.d dVar, boolean z10) {
        LinkedList linkedList;
        Throwable th2;
        int i10;
        int i11;
        Appendable appendable2 = appendable;
        if (appendable2 != null) {
            int size = this.f21959d.size();
            int i12 = 0;
            bu.d dVar2 = dVar;
            boolean z11 = dVar2 == this.f21958c;
            LinkedHashSet linkedHashSet = z10 ? new LinkedHashSet(size) : null;
            if (this.f21963h) {
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
                    i iVar = (i) this.f21959d.get(i13);
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
                    } catch (bu.r | IllegalArgumentException e10) {
                        th2 = e10;
                        i10 = -1;
                    }
                    if (i10 == -1) {
                        int f10 = iVar.f();
                        if (!iVar.i()) {
                            i11 = i13 + 1;
                            while (i11 < size) {
                                i iVar2 = (i) this.f21959d.get(i11);
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
                        i iVar3 = (i) this.f21959d.get(i15);
                        iVar3.r(oVar, appendable2, dVar, linkedHashSet, z11);
                        if (iVar3.i()) {
                            i15 = iVar3.u();
                        }
                        i15++;
                        appendable2 = appendable;
                    } catch (bu.r e11) {
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

    public Set K(Object obj, Appendable appendable, bu.d dVar) {
        return J(k(obj, dVar), appendable, dVar, true);
    }

    public c R(bu.c cVar, Enum r42) {
        return new c(this, new a.b().f(this.f21958c.e()).d(cVar, r42).a());
    }

    public c S(cu.g gVar) {
        return R(cu.a.f21113f, gVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c T(Map map, du.b bVar) {
        du.b k10 = du.b.k(bVar, this.f21958c);
        return new c(new c(this, map), k10, (net.time4j.history.d) k10.b(gu.a.f26025a, null));
    }

    public c U(net.time4j.tz.l lVar) {
        if (lVar != null) {
            return new c(this, this.f21958c.l(new a.b().f(this.f21958c.e()).i(lVar.z()).a()).m(cu.a.f21112e, lVar.E()));
        }
        throw new NullPointerException("Missing timezone id.");
    }

    public c V(net.time4j.tz.k kVar) {
        return U(net.time4j.tz.l.N(kVar));
    }

    @Override // du.d
    public Object a(CharSequence charSequence, s sVar, bu.d dVar) {
        boolean z10;
        p pVar;
        cu.g gVar;
        net.time4j.tz.k kVar;
        net.time4j.a0 a0Var;
        net.time4j.tz.g gVar2;
        cu.g gVar3 = this.f21966k;
        du.b bVar = this.f21958c;
        if (dVar != bVar) {
            p pVar2 = new p(dVar, bVar);
            z10 = false;
            pVar = pVar2;
            gVar = (cu.g) pVar2.b(cu.a.f21113f, cu.g.SMART);
        } else {
            z10 = true;
            pVar = dVar;
            gVar = gVar3;
        }
        boolean z11 = z10;
        e eVar = this.f21957b;
        if (eVar != null) {
            List f10 = eVar.f();
            e eVar2 = this.f21957b;
            net.time4j.r rVar = (net.time4j.r) D(this, eVar2, f10, charSequence, sVar, pVar, gVar, true, z11);
            if (sVar.i()) {
                return null;
            }
            bu.q h10 = sVar.h();
            if (h10.l()) {
                kVar = h10.r();
            } else {
                bu.c cVar = cu.a.f21111d;
                if (pVar.a(cVar)) {
                    kVar = (net.time4j.tz.k) pVar.c(cVar);
                } else {
                    kVar = null;
                }
            }
            if (kVar != null) {
                bu.f0 f0Var = (bu.f0) dVar.b(cu.a.f21128u, eVar2.a());
                bu.b0 b0Var = bu.b0.DAYLIGHT_SAVING;
                if (h10.n(b0Var)) {
                    boolean booleanValue = ((Boolean) h10.k(b0Var)).booleanValue();
                    net.time4j.tz.o oVar = (net.time4j.tz.o) pVar.b(cu.a.f21112e, net.time4j.tz.l.f37723o);
                    if (booleanValue) {
                        gVar2 = net.time4j.tz.g.EARLIER_OFFSET;
                    } else {
                        gVar2 = net.time4j.tz.g.LATER_OFFSET;
                    }
                    a0Var = rVar.a(net.time4j.tz.l.N(kVar).Q(oVar.a(gVar2)), f0Var);
                } else {
                    bu.c cVar2 = cu.a.f21112e;
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
        return E(this, this.f21956a, 0, charSequence, sVar, pVar, gVar, z11);
    }

    @Override // du.e
    public Object b(Object obj, Appendable appendable, bu.d dVar, bu.t tVar) {
        bu.o k10 = k(obj, dVar);
        J(k10, appendable, dVar, false);
        return tVar.apply(k10);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof c) {
            c cVar = (c) obj;
            if (this.f21956a.equals(cVar.f21956a) && y(this.f21957b, cVar.f21957b) && this.f21958c.equals(cVar.f21958c) && this.f21960e.equals(cVar.f21960e) && this.f21959d.equals(cVar.f21959d)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return (this.f21956a.hashCode() * 7) + (this.f21958c.hashCode() * 31) + (this.f21959d.hashCode() * 37);
    }

    public String l(Object obj) {
        return I(obj);
    }

    public bu.d o() {
        return this.f21958c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public du.b p() {
        return this.f21958c;
    }

    public bu.x q() {
        return this.f21956a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Map r() {
        return this.f21960e;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER);
        sb2.append("net.time4j.format.ChronoFormatter[chronology=");
        sb2.append(this.f21956a.q().getName());
        if (this.f21957b != null) {
            sb2.append(", override=");
            sb2.append(this.f21957b);
        }
        sb2.append(", default-attributes=");
        sb2.append(this.f21958c);
        sb2.append(", default-values=");
        sb2.append(this.f21960e);
        sb2.append(", processors=");
        boolean z10 = true;
        for (i iVar : this.f21959d) {
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
        return this.f21958c.h();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean z() {
        if (this.f21971p == 1 && !this.f21962g) {
            return true;
        }
        return false;
    }

    /* synthetic */ c(c cVar, du.b bVar, a aVar) {
        this(cVar, bVar);
    }

    private c(bu.x xVar, bu.x xVar2, Locale locale, List list, Map map, cu.a aVar, bu.x xVar3) {
        if (xVar != null) {
            if (!list.isEmpty()) {
                this.f21956a = xVar;
                this.f21957b = e.g(xVar2);
                this.f21970o = xVar3;
                du.b d10 = du.b.d(xVar2 == null ? xVar : xVar2, aVar, locale);
                this.f21958c = d10;
                this.f21966k = (cu.g) d10.b(cu.a.f21113f, cu.g.SMART);
                this.f21960e = Collections.unmodifiableMap(map);
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
                    bu.p element = iVar.d().getElement();
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
                this.f21961f = jVar;
                this.f21962g = z11;
                this.f21963h = z12;
                this.f21964i = z13;
                this.f21965j = i10;
                this.f21967l = z10;
                this.f21968m = ((Boolean) this.f21958c.b(cu.a.f21125r, Boolean.FALSE)).booleanValue();
                this.f21969n = x();
                this.f21971p = list.size();
                this.f21959d = n(list);
                this.f21972q = w();
                return;
            }
            throw new IllegalStateException("No format processors defined.");
        }
        throw new NullPointerException("Missing chronology.");
    }

    private c(c cVar, cu.a aVar) {
        this(cVar, cVar.f21958c.l(aVar), (net.time4j.history.d) null);
    }

    private c(c cVar, du.b bVar) {
        this(cVar, bVar, (net.time4j.history.d) null);
    }

    private c(c cVar, du.b bVar, net.time4j.history.d dVar) {
        bu.p C;
        if (bVar != null) {
            this.f21956a = cVar.f21956a;
            this.f21957b = cVar.f21957b;
            this.f21970o = cVar.f21970o;
            this.f21958c = bVar;
            this.f21966k = (cu.g) bVar.b(cu.a.f21113f, cu.g.SMART);
            this.f21960e = Collections.unmodifiableMap(new q(cVar.f21960e));
            this.f21961f = cVar.f21961f;
            this.f21962g = cVar.f21962g;
            this.f21963h = cVar.f21963h;
            this.f21964i = cVar.f21964i || dVar != null;
            this.f21965j = cVar.f21965j;
            int size = cVar.f21959d.size();
            ArrayList arrayList = new ArrayList(cVar.f21959d);
            boolean z10 = cVar.f21967l;
            for (int i10 = 0; i10 < size; i10++) {
                i iVar = (i) arrayList.get(i10);
                bu.p element = iVar.d().getElement();
                bu.x xVar = this.f21956a;
                xVar = xVar == net.time4j.a0.T() ? xVar.b() : xVar;
                if (element != null && !xVar.E(element)) {
                    Iterator it = xVar.x().iterator();
                    while (true) {
                        if (!it.hasNext()) {
                            break;
                        }
                        bu.s sVar = (bu.s) it.next();
                        if (sVar.a(cVar.u(), cVar.f21958c).contains(element)) {
                            Iterator it2 = sVar.a(bVar.h(), bVar).iterator();
                            while (true) {
                                if (!it2.hasNext()) {
                                    break;
                                }
                                bu.p pVar = (bu.p) it2.next();
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
            this.f21967l = z10;
            this.f21968m = ((Boolean) this.f21958c.b(cu.a.f21125r, Boolean.FALSE)).booleanValue();
            this.f21969n = x();
            this.f21971p = arrayList.size();
            this.f21959d = n(arrayList);
            this.f21972q = w();
            return;
        }
        throw new NullPointerException("Missing global format attributes.");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static Object h(Object obj) {
        return obj;
    }

    private c(c cVar, Map map) {
        e eVar = cVar.f21957b;
        bu.x e10 = eVar == null ? null : eVar.e();
        for (bu.p pVar : map.keySet()) {
            j(cVar.f21956a, e10, pVar);
        }
        this.f21956a = cVar.f21956a;
        this.f21957b = cVar.f21957b;
        this.f21970o = cVar.f21970o;
        this.f21958c = cVar.f21958c;
        this.f21966k = cVar.f21966k;
        this.f21961f = cVar.f21961f;
        this.f21962g = cVar.f21962g;
        this.f21963h = cVar.f21963h;
        this.f21964i = cVar.f21964i;
        this.f21965j = cVar.f21965j;
        this.f21968m = cVar.f21968m;
        HashMap hashMap = new HashMap(cVar.f21960e);
        boolean z10 = cVar.f21967l;
        for (bu.p pVar2 : map.keySet()) {
            Object obj = map.get(pVar2);
            if (obj == null) {
                hashMap.remove(pVar2);
            } else {
                hashMap.put(pVar2, obj);
                z10 = z10 && v.T(pVar2);
            }
        }
        this.f21960e = Collections.unmodifiableMap(hashMap);
        this.f21967l = z10;
        this.f21969n = x();
        this.f21971p = cVar.f21971p;
        this.f21959d = n(cVar.f21959d);
        this.f21972q = w();
    }
}
