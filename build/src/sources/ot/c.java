package ot;

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
import mt.h0;
import mt.n0;
import nt.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c implements ot.e, ot.d {

    /* renamed from: r  reason: collision with root package name */
    public static final c f44588r = L();

    /* renamed from: a  reason: collision with root package name */
    private final mt.x f44589a;

    /* renamed from: b  reason: collision with root package name */
    private final e f44590b;

    /* renamed from: c  reason: collision with root package name */
    private final ot.b f44591c;

    /* renamed from: d  reason: collision with root package name */
    private final List f44592d;

    /* renamed from: e  reason: collision with root package name */
    private final Map f44593e;

    /* renamed from: f  reason: collision with root package name */
    private final j f44594f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f44595g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f44596h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f44597i;

    /* renamed from: j  reason: collision with root package name */
    private final int f44598j;

    /* renamed from: k  reason: collision with root package name */
    private final nt.g f44599k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f44600l;

    /* renamed from: m  reason: collision with root package name */
    private final boolean f44601m;

    /* renamed from: n  reason: collision with root package name */
    private final boolean f44602n;

    /* renamed from: o  reason: collision with root package name */
    private final mt.x f44603o;

    /* renamed from: p  reason: collision with root package name */
    private final int f44604p;

    /* renamed from: q  reason: collision with root package name */
    private final boolean f44605q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a implements ot.e {
        a() {
        }

        @Override // ot.e
        /* renamed from: b */
        public Object a(net.time4j.tz.k kVar, Appendable appendable, mt.d dVar, mt.t tVar) {
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b implements ot.d {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Map f44606a;

        b(Map map) {
            this.f44606a = map;
        }

        @Override // ot.d
        /* renamed from: a */
        public net.time4j.tz.k b(CharSequence charSequence, s sVar, mt.d dVar) {
            int f10 = sVar.f();
            int i10 = f10 + 3;
            if (i10 <= charSequence.length()) {
                net.time4j.tz.k kVar = (net.time4j.tz.k) this.f44606a.get(charSequence.subSequence(f10, i10).toString());
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
    /* renamed from: ot.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class C0552c {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f44607a;

        static {
            int[] iArr = new int[w.values().length];
            f44607a = iArr;
            try {
                iArr[w.CLDR.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f44607a[w.CLDR_24.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f44607a[w.CLDR_DATE.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f44607a[w.SIMPLE_DATE_FORMAT.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d {

        /* renamed from: n  reason: collision with root package name */
        private static final mt.c f44608n = nt.a.e("CUSTOM_DAY_PERIOD", net.time4j.k.class);

        /* renamed from: a  reason: collision with root package name */
        private final mt.x f44609a;

        /* renamed from: b  reason: collision with root package name */
        private final mt.x f44610b;

        /* renamed from: c  reason: collision with root package name */
        private final Locale f44611c;

        /* renamed from: d  reason: collision with root package name */
        private List f44612d;

        /* renamed from: e  reason: collision with root package name */
        private LinkedList f44613e;

        /* renamed from: f  reason: collision with root package name */
        private int f44614f;

        /* renamed from: g  reason: collision with root package name */
        private int f44615g;

        /* renamed from: h  reason: collision with root package name */
        private int f44616h;

        /* renamed from: i  reason: collision with root package name */
        private String f44617i;

        /* renamed from: j  reason: collision with root package name */
        private net.time4j.k f44618j;

        /* renamed from: k  reason: collision with root package name */
        private Map f44619k;

        /* renamed from: l  reason: collision with root package name */
        private mt.x f44620l;

        /* renamed from: m  reason: collision with root package name */
        private int f44621m;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class a implements mt.n {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ mt.n f44622d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ mt.n f44623e;

            a(mt.n nVar, mt.n nVar2) {
                this.f44622d = nVar;
                this.f44623e = nVar2;
            }

            @Override // mt.n
            /* renamed from: a */
            public boolean test(mt.o oVar) {
                if (this.f44622d.test(oVar) && this.f44623e.test(oVar)) {
                    return true;
                }
                return false;
            }
        }

        /* synthetic */ d(mt.x xVar, Locale locale, a aVar) {
            this(xVar, locale);
        }

        private i H(mt.p pVar) {
            List list;
            i iVar;
            if (this.f44612d.isEmpty()) {
                iVar = null;
            } else {
                iVar = (i) this.f44612d.get(list.size() - 1);
            }
            if (iVar == null) {
                return null;
            }
            if (iVar.g() && !iVar.i()) {
                throw new IllegalStateException(pVar.name() + " can't be inserted after an element with decimal digits.");
            }
            return iVar;
        }

        private static void I(mt.c cVar) {
            if (cVar.name().charAt(0) != '_') {
                return;
            }
            throw new IllegalArgumentException("Internal attribute not allowed: " + cVar.name());
        }

        private void J(mt.p pVar) {
            mt.x j10 = c.j(this.f44609a, this.f44610b, pVar);
            int s10 = c.s(j10, this.f44609a, this.f44610b);
            if (s10 >= this.f44621m) {
                this.f44620l = j10;
                this.f44621m = s10;
            }
        }

        private void K() {
            if (R(this.f44609a)) {
                return;
            }
            throw new IllegalStateException("Timezone names in specific non-location format can only be reliably combined with instant-like types, for example \"Moment\".");
        }

        private void M() {
            for (int size = this.f44612d.size() - 1; size >= 0; size--) {
                i iVar = (i) this.f44612d.get(size);
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
            if (!z10 && !z11 && this.f44615g != -1) {
                throw new IllegalArgumentException("Cannot add fractional element with variable width after another numerical element with variable width.");
            }
        }

        private nt.t O(boolean z10, net.time4j.k kVar) {
            ot.b bVar;
            nt.a a10 = new a.b(P()).a();
            ot.b bVar2 = a10;
            if (kVar != null) {
                if (this.f44613e.isEmpty()) {
                    bVar = new ot.b(a10, this.f44611c);
                } else {
                    bVar = (ot.b) this.f44613e.getLast();
                }
                bVar2 = bVar.m(f44608n, kVar);
            }
            for (mt.s sVar : net.time4j.g0.i0().x()) {
                for (mt.p pVar : sVar.b(this.f44611c, bVar2)) {
                    if (z10 && pVar.d() == 'b' && S(pVar)) {
                        return (nt.t) c.h(pVar);
                    }
                    if (!z10 && pVar.d() == 'B' && S(pVar)) {
                        return (nt.t) c.h(pVar);
                    }
                }
            }
            throw new IllegalStateException("Day periods are not supported: " + P().r());
        }

        private static int Q(ot.b bVar) {
            if (bVar == null) {
                return 0;
            }
            return bVar.g();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static boolean R(mt.x xVar) {
            while (!kt.f.class.isAssignableFrom(xVar.r())) {
                xVar = xVar.b();
                if (xVar == null) {
                    return false;
                }
            }
            return true;
        }

        private boolean S(mt.p pVar) {
            if (!pVar.name().endsWith("_DAY_PERIOD")) {
                return false;
            }
            if (this.f44610b != null || this.f44609a.F(pVar)) {
                return true;
            }
            mt.x xVar = this.f44609a;
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
            this.f44616h = 0;
        }

        private void o(StringBuilder sb2) {
            if (sb2.length() > 0) {
                n(sb2.toString());
                sb2.setLength(0);
            }
        }

        private d s(mt.p pVar, boolean z10, int i10, int i11, x xVar) {
            return t(pVar, z10, i10, i11, xVar, false);
        }

        private d t(mt.p pVar, boolean z10, int i10, int i11, x xVar, boolean z11) {
            J(pVar);
            i H = H(pVar);
            r rVar = new r(pVar, z10, i10, i11, xVar, z11);
            if (z10) {
                int i12 = this.f44615g;
                if (i12 == -1) {
                    w(rVar);
                    return this;
                }
                i iVar = (i) this.f44612d.get(i12);
                w(rVar);
                List list = this.f44612d;
                if (iVar.f() == ((i) list.get(list.size() - 1)).f()) {
                    this.f44615g = i12;
                    this.f44612d.set(i12, iVar.t(i10));
                }
                return this;
            } else if (H != null && H.j() && !H.i()) {
                throw new IllegalStateException("Numerical element with variable width can't be inserted after another numerical element. Consider \"addFixedXXX()\" instead.");
            } else {
                w(rVar);
                this.f44615g = this.f44612d.size() - 1;
                return this;
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void w(h hVar) {
            ot.b bVar;
            int i10;
            int i11;
            this.f44615g = -1;
            if (!this.f44613e.isEmpty()) {
                bVar = (ot.b) this.f44613e.getLast();
                i10 = bVar.g();
                i11 = bVar.i();
            } else {
                bVar = null;
                i10 = 0;
                i11 = 0;
            }
            i iVar = new i(hVar, i10, i11, bVar);
            int i12 = this.f44616h;
            if (i12 > 0) {
                iVar = iVar.n(i12, 0);
                this.f44616h = 0;
            }
            this.f44612d.add(iVar);
        }

        public d A(nt.t tVar) {
            J(tVar);
            w(a0.b(tVar));
            return this;
        }

        public d B() {
            if (R(this.f44609a)) {
                w(c0.INSTANCE);
                return this;
            }
            throw new IllegalStateException("Only unix timestamps can have a timezone id.");
        }

        public d C(nt.e eVar, boolean z10, List list) {
            w(new e0(eVar, z10, list));
            return this;
        }

        public d D(mt.p pVar) {
            J(pVar);
            H(pVar);
            f0 f0Var = new f0(pVar);
            int i10 = this.f44615g;
            if (i10 == -1) {
                w(f0Var);
                this.f44615g = this.f44612d.size() - 1;
                return this;
            }
            i iVar = (i) this.f44612d.get(i10);
            b0(nt.a.f42031f, nt.g.STRICT);
            w(f0Var);
            L();
            List list = this.f44612d;
            if (iVar.f() == ((i) list.get(list.size() - 1)).f()) {
                this.f44615g = i10;
                this.f44612d.set(i10, iVar.t(2));
            }
            return this;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public d E(mt.p pVar, int i10, boolean z10) {
            i iVar;
            if (this.f44612d.isEmpty()) {
                iVar = null;
            } else {
                List list = this.f44612d;
                iVar = (i) list.get(list.size() - 1);
            }
            if (iVar != null && !iVar.i() && iVar.j() && i10 == 4) {
                return t(pVar, true, 4, 4, x.SHOW_NEVER, z10);
            }
            return t(pVar, false, i10, 10, x.SHOW_WHEN_NEGATIVE, z10);
        }

        public c F() {
            return G(nt.a.f());
        }

        public c G(nt.a aVar) {
            boolean z10;
            if (aVar != null) {
                int size = this.f44612d.size();
                HashMap hashMap = null;
                for (int i10 = 0; i10 < size; i10++) {
                    i iVar = (i) this.f44612d.get(i10);
                    if (iVar.i()) {
                        int f10 = iVar.f();
                        int i11 = size - 1;
                        while (true) {
                            if (i11 > i10) {
                                if (((i) this.f44612d.get(i11)).f() == f10) {
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
                        this.f44612d.set(num.intValue(), hashMap.get(num));
                    }
                }
                c cVar = new c(this.f44609a, this.f44610b, this.f44611c, this.f44612d, this.f44619k, aVar, this.f44620l, null);
                String str = this.f44617i;
                if (str == null) {
                    str = "";
                }
                if (this.f44618j != null || !str.isEmpty()) {
                    ot.b bVar = cVar.f44591c;
                    if (!str.isEmpty()) {
                        bVar = bVar.m(nt.a.f42049x, str);
                    }
                    net.time4j.k kVar = this.f44618j;
                    if (kVar != null) {
                        bVar = bVar.m(f44608n, kVar);
                    }
                    return new c(cVar, bVar, (a) null);
                }
                return cVar;
            }
            throw new NullPointerException("Missing format attributes.");
        }

        public d L() {
            this.f44613e.removeLast();
            V();
            return this;
        }

        public mt.x P() {
            mt.x xVar = this.f44610b;
            if (xVar == null) {
                return this.f44609a;
            }
            return xVar;
        }

        public d U() {
            int i10;
            i iVar;
            int i11;
            int i12;
            if (!this.f44613e.isEmpty()) {
                i10 = ((ot.b) this.f44613e.getLast()).i();
            } else {
                i10 = 0;
            }
            if (!this.f44612d.isEmpty()) {
                i11 = this.f44612d.size() - 1;
                iVar = (i) this.f44612d.get(i11);
                i12 = iVar.f();
            } else {
                iVar = null;
                i11 = -1;
                i12 = -1;
            }
            if (i10 == i12) {
                this.f44612d.set(i11, iVar.v());
                V();
                this.f44615g = -1;
                return this;
            }
            throw new IllegalStateException("Cannot start or-block without any previous step in current section.");
        }

        public d W(mt.n nVar, int i10) {
            w(new y(nVar, i10));
            return this;
        }

        public d X() {
            return Y(null);
        }

        public d Y(mt.n nVar) {
            ot.b bVar;
            mt.n nVar2;
            a aVar;
            V();
            a.b bVar2 = new a.b();
            if (!this.f44613e.isEmpty()) {
                bVar = (ot.b) this.f44613e.getLast();
                bVar2.f(bVar.e());
                nVar2 = bVar.f();
            } else {
                bVar = null;
                nVar2 = null;
            }
            int Q = Q(bVar) + 1;
            int i10 = this.f44614f + 1;
            this.f44614f = i10;
            if (nVar != null) {
                if (nVar2 == null) {
                    aVar = nVar;
                } else {
                    aVar = new a(nVar2, nVar);
                }
            } else {
                aVar = nVar2;
            }
            this.f44613e.addLast(new ot.b(bVar2.a(), this.f44611c, Q, i10, aVar));
            return this;
        }

        public d Z(mt.c cVar, char c10) {
            ot.b l10;
            I(cVar);
            V();
            if (this.f44613e.isEmpty()) {
                l10 = new ot.b(new a.b().b(cVar, c10).a(), this.f44611c);
            } else {
                ot.b bVar = (ot.b) this.f44613e.getLast();
                a.b bVar2 = new a.b();
                bVar2.f(bVar.e());
                bVar2.b(cVar, c10);
                l10 = bVar.l(bVar2.a());
            }
            this.f44613e.addLast(l10);
            return this;
        }

        public d a0(mt.c cVar, int i10) {
            ot.b l10;
            I(cVar);
            V();
            if (this.f44613e.isEmpty()) {
                l10 = new ot.b(new a.b().c(cVar, i10).a(), this.f44611c);
            } else {
                ot.b bVar = (ot.b) this.f44613e.getLast();
                a.b bVar2 = new a.b();
                bVar2.f(bVar.e());
                bVar2.c(cVar, i10);
                l10 = bVar.l(bVar2.a());
            }
            this.f44613e.addLast(l10);
            return this;
        }

        public d b0(mt.c cVar, Enum r52) {
            ot.b l10;
            I(cVar);
            V();
            if (this.f44613e.isEmpty()) {
                l10 = new ot.b(new a.b().d(cVar, r52).a(), this.f44611c);
            } else {
                ot.b bVar = (ot.b) this.f44613e.getLast();
                a.b bVar2 = new a.b();
                bVar2.f(bVar.e());
                bVar2.d(cVar, r52);
                l10 = bVar.l(bVar2.a());
            }
            this.f44613e.addLast(l10);
            return this;
        }

        public d d(mt.p pVar, ot.e eVar, ot.d dVar) {
            J(pVar);
            w(new ot.f(pVar, eVar, dVar));
            return this;
        }

        public d e() {
            return A(O(false, null));
        }

        public d f() {
            return A(O(true, null));
        }

        public d g(mt.p pVar, int i10) {
            return s(pVar, true, i10, i10, x.SHOW_NEVER);
        }

        public d h(mt.p pVar, int i10) {
            return s(pVar, true, i10, i10, x.SHOW_NEVER);
        }

        public d i(mt.p pVar, int i10, int i11, boolean z10) {
            boolean z11;
            J(pVar);
            if (!z10 && i10 == i11) {
                z11 = true;
            } else {
                z11 = false;
            }
            N(z11, z10);
            j jVar = new j(pVar, i10, i11, z10);
            int i12 = this.f44615g;
            if (i12 != -1 && z11) {
                i iVar = (i) this.f44612d.get(i12);
                w(jVar);
                List list = this.f44612d;
                if (iVar.f() == ((i) list.get(list.size() - 1)).f()) {
                    this.f44615g = i12;
                    this.f44612d.set(i12, iVar.t(i10));
                }
                return this;
            }
            w(jVar);
            return this;
        }

        public d j(mt.p pVar, int i10, int i11) {
            return s(pVar, false, i10, i11, x.SHOW_NEVER);
        }

        public d k(mt.p pVar, int i10, int i11, x xVar) {
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
                if (this.f44612d.isEmpty()) {
                    iVar = null;
                } else {
                    List list = this.f44612d;
                    iVar = (i) list.get(list.size() - 1);
                }
                if (iVar != null && iVar.g() && !iVar.i()) {
                    throw new IllegalStateException("Numerical literal can't be inserted after an element with decimal digits.");
                }
            }
            if (c10 != 0 && (i10 = this.f44615g) != -1) {
                i iVar2 = (i) this.f44612d.get(i10);
                w(mVar);
                int f10 = iVar2.f();
                List list2 = this.f44612d;
                if (f10 == ((i) list2.get(list2.size() - 1)).f()) {
                    this.f44615g = i10;
                    this.f44612d.set(i10, iVar2.t(c10));
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

        public d q(mt.p pVar, int i10, int i11, x xVar) {
            return s(pVar, false, i10, i11, xVar);
        }

        public d r() {
            K();
            w(new d0(false));
            return this;
        }

        public d u(mt.p pVar, int i10, int i11) {
            return s(pVar, false, i10, i11, x.SHOW_NEVER);
        }

        public d v(String str, w wVar) {
            if (wVar != null) {
                Map map = Collections.EMPTY_MAP;
                int length = str.length();
                Locale locale = this.f44611c;
                StringBuilder sb2 = new StringBuilder();
                if (!this.f44613e.isEmpty()) {
                    locale = ((ot.b) this.f44613e.getLast()).h();
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
                    int size = this.f44612d.size();
                    for (int i15 = 0; i15 < size; i15++) {
                        i iVar = (i) this.f44612d.get(i15);
                        mt.p element = iVar.d().getElement();
                        if (map.containsKey(element)) {
                            this.f44612d.set(i15, iVar.x((mt.p) map.get(element)));
                        }
                    }
                }
                if (this.f44617i != null) {
                    str = "";
                }
                this.f44617i = str;
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

        public d z(mt.p pVar) {
            Enum[] enumArr;
            J(pVar);
            if (pVar instanceof nt.t) {
                w(a0.b((nt.t) nt.t.class.cast(pVar)));
                return this;
            }
            HashMap hashMap = new HashMap();
            for (Enum r42 : (Enum[]) pVar.getType().getEnumConstants()) {
                hashMap.put(r42, r42.toString());
            }
            w(new o(pVar, hashMap));
            return this;
        }

        private d(mt.x xVar, Locale locale) {
            this(xVar, locale, (mt.x) null);
        }

        private d(mt.x xVar, Locale locale, mt.x xVar2) {
            if (xVar == null) {
                throw new NullPointerException("Missing chronology.");
            }
            if (locale != null) {
                this.f44609a = xVar;
                this.f44610b = xVar2;
                this.f44611c = locale;
                this.f44612d = new ArrayList();
                this.f44613e = new LinkedList();
                this.f44614f = 0;
                this.f44615g = -1;
                this.f44616h = 0;
                this.f44617i = null;
                this.f44618j = null;
                this.f44619k = new HashMap();
                this.f44620l = xVar;
                this.f44621m = 0;
                return;
            }
            throw new NullPointerException("Missing locale.");
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class e implements mt.u {

        /* renamed from: d  reason: collision with root package name */
        private final mt.x f44625d;

        /* renamed from: e  reason: collision with root package name */
        private final List f44626e;

        private e(mt.x xVar) {
            this.f44625d = xVar;
            ArrayList arrayList = new ArrayList();
            arrayList.addAll(xVar.x());
            arrayList.addAll(net.time4j.g0.i0().x());
            this.f44626e = Collections.unmodifiableList(arrayList);
        }

        static e g(mt.x xVar) {
            if (xVar == null) {
                return null;
            }
            return new e(xVar);
        }

        @Override // mt.u
        public mt.f0 a() {
            return this.f44625d.a();
        }

        @Override // mt.u
        public mt.x b() {
            throw new UnsupportedOperationException("Not used.");
        }

        @Override // mt.u
        public int c() {
            return this.f44625d.c();
        }

        @Override // mt.u
        /* renamed from: d */
        public net.time4j.r m(mt.q qVar, mt.d dVar, boolean z10, boolean z11) {
            Object m10 = this.f44625d.m(qVar, dVar, z10, z11);
            net.time4j.g0 g0Var = (net.time4j.g0) net.time4j.g0.i0().m(qVar, dVar, z10, z11);
            if (m10 instanceof mt.m) {
                return (net.time4j.r) c.h(net.time4j.r.b((mt.m) mt.m.class.cast(m10), g0Var));
            }
            throw new IllegalStateException("Cannot determine calendar type: " + m10);
        }

        public mt.x e() {
            return this.f44625d;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof e) {
                return this.f44625d.equals(((e) obj).f44625d);
            }
            return false;
        }

        public List f() {
            return this.f44626e;
        }

        public int hashCode() {
            return this.f44625d.hashCode();
        }

        @Override // mt.u
        /* renamed from: i */
        public mt.o h(net.time4j.r rVar, mt.d dVar) {
            throw new UnsupportedOperationException("Not used.");
        }

        @Override // mt.u
        public String l(mt.y yVar, Locale locale) {
            throw new UnsupportedOperationException("Not used.");
        }

        public String toString() {
            return this.f44625d.r().getName();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class f implements mt.o, kt.f {

        /* renamed from: d  reason: collision with root package name */
        private final net.time4j.r f44627d;

        /* renamed from: e  reason: collision with root package name */
        private final String f44628e;

        /* renamed from: i  reason: collision with root package name */
        private final net.time4j.tz.k f44629i;

        /* synthetic */ f(net.time4j.r rVar, String str, net.time4j.tz.k kVar, a aVar) {
            this(rVar, str, kVar);
        }

        private kt.f b() {
            mt.f0 f0Var;
            try {
                f0Var = mt.x.G(this.f44627d.c().getClass()).a();
            } catch (RuntimeException unused) {
                f0Var = mt.f0.f39404a;
            }
            return this.f44627d.a(net.time4j.tz.l.N(this.f44629i), f0Var);
        }

        @Override // kt.f
        public int a() {
            return b().a();
        }

        @Override // mt.o
        public int j(mt.p pVar) {
            return this.f44627d.j(pVar);
        }

        @Override // mt.o
        public boolean l() {
            return true;
        }

        @Override // mt.o
        public Object o(mt.p pVar) {
            return this.f44627d.o(pVar);
        }

        @Override // kt.f
        public long p() {
            return b().p();
        }

        @Override // mt.o
        public boolean q(mt.p pVar) {
            return this.f44627d.q(pVar);
        }

        @Override // mt.o
        public net.time4j.tz.k t() {
            return this.f44629i;
        }

        @Override // mt.o
        public Object u(mt.p pVar) {
            return this.f44627d.u(pVar);
        }

        @Override // mt.o
        public Object v(mt.p pVar) {
            return this.f44627d.v(pVar);
        }

        private f(net.time4j.r rVar, String str, net.time4j.tz.k kVar) {
            this.f44627d = rVar;
            this.f44628e = str;
            this.f44629i = kVar;
        }
    }

    /* synthetic */ c(mt.x xVar, mt.x xVar2, Locale locale, List list, Map map, nt.a aVar, mt.x xVar3, a aVar2) {
        this(xVar, xVar2, locale, list, map, aVar, xVar3);
    }

    private static boolean A(mt.x xVar, mt.x xVar2, mt.p pVar) {
        for (mt.s sVar : xVar.x()) {
            if (sVar.a(pVar)) {
                return true;
            }
        }
        if (xVar2 != null) {
            if (pVar.y()) {
                for (mt.s sVar2 : xVar2.x()) {
                    if (sVar2.a(pVar)) {
                        return true;
                    }
                }
                return false;
            } else if (pVar.C() && net.time4j.g0.i0().F(pVar)) {
                for (mt.s sVar3 : net.time4j.g0.i0().x()) {
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
                for (mt.s sVar4 : xVar.x()) {
                    if (sVar4.a(pVar)) {
                        return true;
                    }
                }
            } else {
                return false;
            }
        }
    }

    public static c B(nt.e eVar, nt.e eVar2, Locale locale, net.time4j.tz.k kVar) {
        d dVar = new d(net.time4j.a0.T(), locale, (a) null);
        dVar.w(new z(eVar, eVar2));
        return dVar.F().V(kVar);
    }

    public static c C(String str, w wVar, Locale locale, mt.x xVar) {
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
    /* JADX WARN: Removed duplicated region for block: B:97:0x00df A[EXC_TOP_SPLITTER, SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static java.lang.Object F(ot.c r15, mt.u r16, java.util.List r17, java.lang.CharSequence r18, ot.s r19, mt.d r20, nt.g r21, boolean r22, boolean r23) {
        /*
            Method dump skipped, instructions count: 430
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: ot.c.F(ot.c, mt.u, java.util.List, java.lang.CharSequence, ot.s, mt.d, nt.g, boolean, boolean):java.lang.Object");
    }

    private static Object G(c cVar, mt.x xVar, int i10, CharSequence charSequence, s sVar, mt.d dVar, nt.g gVar, boolean z10) {
        boolean z11;
        mt.x xVar2;
        CharSequence charSequence2;
        s sVar2;
        nt.g gVar2;
        boolean z12;
        c cVar2;
        mt.x xVar3;
        Object G;
        mt.x b10 = xVar.b();
        if (b10 != null && xVar != (xVar3 = cVar.f44603o)) {
            if (b10 == xVar3) {
                G = F(cVar, b10, b10.x(), charSequence, sVar, dVar, gVar, true, z10);
            } else {
                G = G(cVar, b10, i10 + 1, charSequence, sVar, dVar, gVar, z10);
            }
            if (sVar.i()) {
                return null;
            }
            if (G == null) {
                mt.q g10 = sVar.g();
                sVar.k(charSequence.length(), v(g10) + t(g10));
                return null;
            }
            mt.q h10 = sVar.h();
            try {
                if (b10 instanceof h0) {
                    Q(h10, ((h0) h0.class.cast(b10)).M(), G);
                    Object m10 = xVar.m(h10, dVar, gVar.a(), false);
                    if (m10 == null) {
                        if (!sVar.i()) {
                            sVar.k(charSequence.length(), v(h10) + t(h10));
                        }
                        return null;
                    } else if (gVar.e()) {
                        return i(h10, m10, charSequence, sVar);
                    } else {
                        return m10;
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
        return F(cVar2, xVar2, x10, charSequence2, sVar2, dVar, gVar2, z11, z12);
    }

    private mt.q H(CharSequence charSequence, s sVar, mt.d dVar, boolean z10, int i10) {
        LinkedList linkedList;
        v vVar;
        v vVar2;
        int i11;
        mt.p element;
        v vVar3 = new v(i10, this.f44600l);
        vVar3.d0(sVar.f());
        if (this.f44595g) {
            LinkedList linkedList2 = new LinkedList();
            linkedList2.push(vVar3);
            linkedList = linkedList2;
        } else {
            linkedList = null;
        }
        int size = this.f44592d.size();
        int i12 = 0;
        int i13 = 0;
        int i14 = 0;
        while (i14 < size) {
            i iVar = (i) this.f44592d.get(i14);
            if (linkedList == null) {
                vVar2 = vVar3;
                vVar = vVar2;
            } else {
                i12 = iVar.b();
                int i15 = i12;
                while (i15 > i13) {
                    vVar3 = new v(i10 >>> 1, this.f44600l);
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
            if (sVar.j() && (element = iVar.d().getElement()) != null && this.f44593e.containsKey(element)) {
                vVar2.I(element, this.f44593e.get(element));
                vVar2.E(n0.ERROR_MESSAGE, null);
                sVar.a();
                sVar.b();
            }
            if (sVar.i()) {
                int f10 = iVar.f();
                if (!iVar.i()) {
                    i11 = i14 + 1;
                    while (i11 < size) {
                        i iVar2 = (i) this.f44592d.get(i11);
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
                    for (int i18 = i14 + 1; i18 < size && ((i) this.f44592d.get(i18)).b() > b10; i18++) {
                        i17 = i18;
                    }
                    int i19 = size - 1;
                    while (true) {
                        if (i19 <= i17) {
                            break;
                        } else if (((i) this.f44592d.get(i19)).f() == f10) {
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
        N.C(nt.e.MEDIUM, false, Arrays.asList("GMT", "UT", "Z"));
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
        N.w(new ot.f(b0.TIMEZONE_OFFSET, new a(), new b(hashMap)));
        return N.F().V(net.time4j.tz.p.f40826v);
    }

    private static void M(d dVar) {
        d X = dVar.X();
        mt.c cVar = nt.a.f42032g;
        nt.v vVar = nt.v.ABBREVIATED;
        X.b0(cVar, vVar).z(net.time4j.f0.G).L().n(", ").L().j(net.time4j.f0.F, 1, 2).l(' ').b0(cVar, vVar).z(net.time4j.f0.D).L().l(' ').g(net.time4j.f0.A, 4).l(' ').g(net.time4j.g0.F, 2).l(':').g(net.time4j.g0.H, 2).X().l(':').g(net.time4j.g0.J, 2).L().l(' ');
    }

    public static d N(Class cls, Locale locale) {
        if (cls != null) {
            mt.x G = mt.x.G(cls);
            if (G != null) {
                return new d(G, locale, (a) null);
            }
            throw new IllegalArgumentException("Not formattable: " + cls);
        }
        throw new NullPointerException("Missing chronological type.");
    }

    private static void O(mt.q qVar, mt.p pVar, Object obj) {
        qVar.E(pVar, pVar.getType().cast(obj));
    }

    private static String P(int i10, CharSequence charSequence) {
        int length = charSequence.length();
        if (length - i10 <= 10) {
            return charSequence.subSequence(i10, length).toString();
        }
        return charSequence.subSequence(i10, i10 + 10).toString() + "...";
    }

    private static void Q(mt.q qVar, mt.p pVar, Object obj) {
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
                            if (z10 && i11 == i10 + 2 && d.R(dVar.f44609a)) {
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
        int i13 = C0552c.f44607a[wVar.ordinal()];
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
        if (((net.time4j.g0) r10.o(r6)).h() == 24) goto L41;
     */
    /* JADX WARN: Removed duplicated region for block: B:44:0x012c  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static java.lang.Object i(mt.q r10, java.lang.Object r11, java.lang.CharSequence r12, ot.s r13) {
        /*
            Method dump skipped, instructions count: 465
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: ot.c.i(mt.q, java.lang.Object, java.lang.CharSequence, ot.s):java.lang.Object");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static mt.x j(mt.x xVar, mt.x xVar2, mt.p pVar) {
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

    private mt.o k(Object obj, mt.d dVar) {
        net.time4j.r q02;
        e eVar = this.f44590b;
        if (eVar == null) {
            return this.f44589a.h(obj, dVar);
        }
        try {
            Class r10 = eVar.e().r();
            mt.f0 f0Var = (mt.f0) dVar.b(nt.a.f42046u, this.f44590b.a());
            net.time4j.a0 a0Var = (net.time4j.a0) net.time4j.a0.class.cast(obj);
            net.time4j.tz.k kVar = (net.time4j.tz.k) dVar.c(nt.a.f42029d);
            String str = "";
            if (mt.l.class.isAssignableFrom(r10)) {
                android.support.v4.media.session.b.a(h(this.f44590b.e()));
                str = (String) dVar.c(nt.a.f42045t);
                q02 = a0Var.p0(null, str, kVar, f0Var);
            } else if (mt.m.class.isAssignableFrom(r10)) {
                q02 = a0Var.q0(this.f44590b.e(), kVar, f0Var);
            } else {
                throw new IllegalStateException("Unexpected calendar override: " + r10);
            }
            return new f(q02, str, kVar, null);
        } catch (ClassCastException e10) {
            throw new IllegalArgumentException("Not formattable: " + obj, e10);
        } catch (NoSuchElementException e11) {
            throw new IllegalArgumentException(e11.getMessage(), e11);
        }
    }

    private String m(mt.o oVar) {
        StringBuilder sb2 = new StringBuilder(this.f44592d.size() * 8);
        try {
            K(oVar, sb2, this.f44591c, false);
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
    public static int s(mt.x xVar, mt.x xVar2, mt.x xVar3) {
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

    private static String t(mt.q qVar) {
        Set<mt.p> y10 = qVar.y();
        StringBuilder sb2 = new StringBuilder(y10.size() * 16);
        sb2.append(" [parsed={");
        boolean z10 = true;
        for (mt.p pVar : y10) {
            if (z10) {
                z10 = false;
            } else {
                sb2.append(", ");
            }
            sb2.append(pVar.name());
            sb2.append('=');
            sb2.append(qVar.o(pVar));
        }
        sb2.append("}]");
        return sb2.toString();
    }

    private static String v(mt.q qVar) {
        n0 n0Var = n0.ERROR_MESSAGE;
        if (qVar.q(n0Var)) {
            String str = "Validation failed => " + ((String) qVar.o(n0Var));
            qVar.E(n0Var, null);
            return str;
        }
        return "Insufficient data:";
    }

    private boolean w() {
        boolean z10 = z();
        if (z10) {
            h d10 = ((i) this.f44592d.get(0)).d();
            if (d10 instanceof ot.f) {
                return ((ot.f) ot.f.class.cast(d10)).c();
            }
            if (!(d10 instanceof z)) {
                return false;
            }
        }
        return z10;
    }

    private boolean x() {
        if (this.f44589a.b() == null && this.f44590b == null) {
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
            if (!this.f44601m && f10 < charSequence.length()) {
                throw new ParseException("Unparsed trailing characters: " + P(f10, charSequence), f10);
            }
            return E;
        }
        throw new ParseException(sVar.d(), sVar.c());
    }

    public Object E(CharSequence charSequence, s sVar) {
        if (this.f44602n) {
            mt.x xVar = this.f44589a;
            return F(this, xVar, xVar.x(), charSequence, sVar, this.f44591c, this.f44599k, false, true);
        }
        return b(charSequence, sVar, this.f44591c);
    }

    public String I(Object obj) {
        return m(k(obj, this.f44591c));
    }

    public Set J(Object obj, Appendable appendable, mt.d dVar) {
        return K(k(obj, dVar), appendable, dVar, true);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Set K(mt.o oVar, Appendable appendable, mt.d dVar, boolean z10) {
        LinkedList linkedList;
        Throwable th2;
        int i10;
        int i11;
        Appendable appendable2 = appendable;
        if (appendable2 != null) {
            int size = this.f44592d.size();
            int i12 = 0;
            mt.d dVar2 = dVar;
            boolean z11 = dVar2 == this.f44591c;
            LinkedHashSet linkedHashSet = z10 ? new LinkedHashSet(size) : null;
            if (this.f44596h) {
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
                    i iVar = (i) this.f44592d.get(i13);
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
                    } catch (IllegalArgumentException | mt.r e10) {
                        th2 = e10;
                        i10 = -1;
                    }
                    if (i10 == -1) {
                        int f10 = iVar.f();
                        if (!iVar.i()) {
                            i11 = i13 + 1;
                            while (i11 < size) {
                                i iVar2 = (i) this.f44592d.get(i11);
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
                        i iVar3 = (i) this.f44592d.get(i15);
                        iVar3.r(oVar, appendable2, dVar, linkedHashSet, z11);
                        if (iVar3.i()) {
                            i15 = iVar3.u();
                        }
                        i15++;
                        appendable2 = appendable;
                    } catch (mt.r e11) {
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
    public c R(Map map, ot.b bVar) {
        ot.b k10 = ot.b.k(bVar, this.f44591c);
        return new c(new c(this, map), k10, (net.time4j.history.d) k10.b(rt.a.f49110a, null));
    }

    public c S(mt.c cVar, Enum r42) {
        return new c(this, new a.b().f(this.f44591c.e()).d(cVar, r42).a());
    }

    public c T(net.time4j.tz.l lVar) {
        if (lVar != null) {
            return new c(this, this.f44591c.l(new a.b().f(this.f44591c.e()).i(lVar.z()).a()).m(nt.a.f42030e, lVar.E()));
        }
        throw new NullPointerException("Missing timezone id.");
    }

    public c U(nt.g gVar) {
        return S(nt.a.f42031f, gVar);
    }

    public c V(net.time4j.tz.k kVar) {
        return T(net.time4j.tz.l.N(kVar));
    }

    @Override // ot.e
    public Object a(Object obj, Appendable appendable, mt.d dVar, mt.t tVar) {
        mt.o k10 = k(obj, dVar);
        K(k10, appendable, dVar, false);
        return tVar.apply(k10);
    }

    @Override // ot.d
    public Object b(CharSequence charSequence, s sVar, mt.d dVar) {
        boolean z10;
        p pVar;
        nt.g gVar;
        net.time4j.tz.k kVar;
        net.time4j.a0 a0Var;
        net.time4j.tz.g gVar2;
        nt.g gVar3 = this.f44599k;
        ot.b bVar = this.f44591c;
        if (dVar != bVar) {
            p pVar2 = new p(dVar, bVar);
            z10 = false;
            pVar = pVar2;
            gVar = (nt.g) pVar2.b(nt.a.f42031f, nt.g.SMART);
        } else {
            z10 = true;
            pVar = dVar;
            gVar = gVar3;
        }
        boolean z11 = z10;
        e eVar = this.f44590b;
        if (eVar != null) {
            List f10 = eVar.f();
            e eVar2 = this.f44590b;
            net.time4j.r rVar = (net.time4j.r) F(this, eVar2, f10, charSequence, sVar, pVar, gVar, true, z11);
            if (sVar.i()) {
                return null;
            }
            mt.q h10 = sVar.h();
            if (h10.l()) {
                kVar = h10.t();
            } else {
                mt.c cVar = nt.a.f42029d;
                if (pVar.a(cVar)) {
                    kVar = (net.time4j.tz.k) pVar.c(cVar);
                } else {
                    kVar = null;
                }
            }
            if (kVar != null) {
                mt.f0 f0Var = (mt.f0) dVar.b(nt.a.f42046u, eVar2.a());
                mt.b0 b0Var = mt.b0.DAYLIGHT_SAVING;
                if (h10.q(b0Var)) {
                    boolean booleanValue = ((Boolean) h10.o(b0Var)).booleanValue();
                    net.time4j.tz.o oVar = (net.time4j.tz.o) pVar.b(nt.a.f42030e, net.time4j.tz.l.f40764o);
                    if (booleanValue) {
                        gVar2 = net.time4j.tz.g.EARLIER_OFFSET;
                    } else {
                        gVar2 = net.time4j.tz.g.LATER_OFFSET;
                    }
                    a0Var = rVar.a(net.time4j.tz.l.N(kVar).Q(oVar.b(gVar2)), f0Var);
                } else {
                    mt.c cVar2 = nt.a.f42030e;
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
        return G(this, this.f44589a, 0, charSequence, sVar, pVar, gVar, z11);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof c) {
            c cVar = (c) obj;
            if (this.f44589a.equals(cVar.f44589a) && y(this.f44590b, cVar.f44590b) && this.f44591c.equals(cVar.f44591c) && this.f44593e.equals(cVar.f44593e) && this.f44592d.equals(cVar.f44592d)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return (this.f44589a.hashCode() * 7) + (this.f44591c.hashCode() * 31) + (this.f44592d.hashCode() * 37);
    }

    public String l(Object obj) {
        return I(obj);
    }

    public mt.d o() {
        return this.f44591c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ot.b p() {
        return this.f44591c;
    }

    public mt.x q() {
        return this.f44589a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Map r() {
        return this.f44593e;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER);
        sb2.append("net.time4j.format.ChronoFormatter[chronology=");
        sb2.append(this.f44589a.r().getName());
        if (this.f44590b != null) {
            sb2.append(", override=");
            sb2.append(this.f44590b);
        }
        sb2.append(", default-attributes=");
        sb2.append(this.f44591c);
        sb2.append(", default-values=");
        sb2.append(this.f44593e);
        sb2.append(", processors=");
        boolean z10 = true;
        for (i iVar : this.f44592d) {
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
        return this.f44591c.h();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean z() {
        if (this.f44604p == 1 && !this.f44595g) {
            return true;
        }
        return false;
    }

    /* synthetic */ c(c cVar, ot.b bVar, a aVar) {
        this(cVar, bVar);
    }

    private c(mt.x xVar, mt.x xVar2, Locale locale, List list, Map map, nt.a aVar, mt.x xVar3) {
        if (xVar != null) {
            if (!list.isEmpty()) {
                this.f44589a = xVar;
                this.f44590b = e.g(xVar2);
                this.f44603o = xVar3;
                ot.b d10 = ot.b.d(xVar2 == null ? xVar : xVar2, aVar, locale);
                this.f44591c = d10;
                this.f44599k = (nt.g) d10.b(nt.a.f42031f, nt.g.SMART);
                this.f44593e = Collections.unmodifiableMap(map);
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
                    mt.p element = iVar.d().getElement();
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
                this.f44594f = jVar;
                this.f44595g = z11;
                this.f44596h = z12;
                this.f44597i = z13;
                this.f44598j = i10;
                this.f44600l = z10;
                this.f44601m = ((Boolean) this.f44591c.b(nt.a.f42043r, Boolean.FALSE)).booleanValue();
                this.f44602n = x();
                this.f44604p = list.size();
                this.f44592d = n(list);
                this.f44605q = w();
                return;
            }
            throw new IllegalStateException("No format processors defined.");
        }
        throw new NullPointerException("Missing chronology.");
    }

    private c(c cVar, nt.a aVar) {
        this(cVar, cVar.f44591c.l(aVar), (net.time4j.history.d) null);
    }

    private c(c cVar, ot.b bVar) {
        this(cVar, bVar, (net.time4j.history.d) null);
    }

    private c(c cVar, ot.b bVar, net.time4j.history.d dVar) {
        mt.p C;
        if (bVar != null) {
            this.f44589a = cVar.f44589a;
            this.f44590b = cVar.f44590b;
            this.f44603o = cVar.f44603o;
            this.f44591c = bVar;
            this.f44599k = (nt.g) bVar.b(nt.a.f42031f, nt.g.SMART);
            this.f44593e = Collections.unmodifiableMap(new q(cVar.f44593e));
            this.f44594f = cVar.f44594f;
            this.f44595g = cVar.f44595g;
            this.f44596h = cVar.f44596h;
            this.f44597i = cVar.f44597i || dVar != null;
            this.f44598j = cVar.f44598j;
            int size = cVar.f44592d.size();
            ArrayList arrayList = new ArrayList(cVar.f44592d);
            boolean z10 = cVar.f44600l;
            for (int i10 = 0; i10 < size; i10++) {
                i iVar = (i) arrayList.get(i10);
                mt.p element = iVar.d().getElement();
                mt.x xVar = this.f44589a;
                xVar = xVar == net.time4j.a0.T() ? xVar.b() : xVar;
                if (element != null && !xVar.E(element)) {
                    Iterator it = xVar.x().iterator();
                    while (true) {
                        if (!it.hasNext()) {
                            break;
                        }
                        mt.s sVar = (mt.s) it.next();
                        if (sVar.b(cVar.u(), cVar.f44591c).contains(element)) {
                            Iterator it2 = sVar.b(bVar.h(), bVar).iterator();
                            while (true) {
                                if (!it2.hasNext()) {
                                    break;
                                }
                                mt.p pVar = (mt.p) it2.next();
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
            this.f44600l = z10;
            this.f44601m = ((Boolean) this.f44591c.b(nt.a.f42043r, Boolean.FALSE)).booleanValue();
            this.f44602n = x();
            this.f44604p = arrayList.size();
            this.f44592d = n(arrayList);
            this.f44605q = w();
            return;
        }
        throw new NullPointerException("Missing global format attributes.");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static Object h(Object obj) {
        return obj;
    }

    private c(c cVar, Map map) {
        e eVar = cVar.f44590b;
        mt.x e10 = eVar == null ? null : eVar.e();
        for (mt.p pVar : map.keySet()) {
            j(cVar.f44589a, e10, pVar);
        }
        this.f44589a = cVar.f44589a;
        this.f44590b = cVar.f44590b;
        this.f44603o = cVar.f44603o;
        this.f44591c = cVar.f44591c;
        this.f44599k = cVar.f44599k;
        this.f44594f = cVar.f44594f;
        this.f44595g = cVar.f44595g;
        this.f44596h = cVar.f44596h;
        this.f44597i = cVar.f44597i;
        this.f44598j = cVar.f44598j;
        this.f44601m = cVar.f44601m;
        HashMap hashMap = new HashMap(cVar.f44593e);
        boolean z10 = cVar.f44600l;
        for (mt.p pVar2 : map.keySet()) {
            Object obj = map.get(pVar2);
            if (obj == null) {
                hashMap.remove(pVar2);
            } else {
                hashMap.put(pVar2, obj);
                z10 = z10 && v.T(pVar2);
            }
        }
        this.f44593e = Collections.unmodifiableMap(hashMap);
        this.f44600l = z10;
        this.f44602n = x();
        this.f44604p = cVar.f44604p;
        this.f44592d = n(cVar.f44592d);
        this.f44605q = w();
    }
}
