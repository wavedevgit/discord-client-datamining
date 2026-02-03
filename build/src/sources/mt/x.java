package mt;

import java.lang.ref.ReferenceQueue;
import java.lang.ref.WeakReference;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.CopyOnWriteArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class x implements u {

    /* renamed from: q  reason: collision with root package name */
    private static final List f39437q = new CopyOnWriteArrayList();

    /* renamed from: r  reason: collision with root package name */
    private static final ReferenceQueue f39438r = new ReferenceQueue();

    /* renamed from: d  reason: collision with root package name */
    private final Class f39439d;

    /* renamed from: e  reason: collision with root package name */
    private final u f39440e;

    /* renamed from: i  reason: collision with root package name */
    private final Map f39441i;

    /* renamed from: o  reason: collision with root package name */
    private final List f39442o;

    /* renamed from: p  reason: collision with root package name */
    private final Map f39443p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        final Class f39444a;

        /* renamed from: b  reason: collision with root package name */
        final boolean f39445b;

        /* renamed from: c  reason: collision with root package name */
        final u f39446c;

        /* renamed from: d  reason: collision with root package name */
        final Map f39447d;

        /* renamed from: e  reason: collision with root package name */
        final List f39448e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public a(Class cls, u uVar) {
            if (uVar != null) {
                this.f39444a = cls;
                this.f39445b = cls.getName().startsWith("net.time4j.");
                this.f39446c = uVar;
                this.f39447d = new HashMap();
                this.f39448e = new ArrayList();
                return;
            }
            throw new NullPointerException("Missing chronological merger.");
        }

        /* JADX WARN: Removed duplicated region for block: B:9:0x001b  */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        private void c(mt.p r5) {
            /*
                r4 = this;
                boolean r0 = r4.f39445b
                if (r0 == 0) goto L5
                goto L49
            L5:
                if (r5 == 0) goto L4a
                java.lang.String r0 = r5.name()
                java.util.Map r1 = r4.f39447d
                java.util.Set r1 = r1.keySet()
                java.util.Iterator r1 = r1.iterator()
            L15:
                boolean r2 = r1.hasNext()
                if (r2 == 0) goto L49
                java.lang.Object r2 = r1.next()
                mt.p r2 = (mt.p) r2
                boolean r3 = r2.equals(r5)
                if (r3 != 0) goto L32
                java.lang.String r2 = r2.name()
                boolean r2 = r2.equals(r0)
                if (r2 != 0) goto L32
                goto L15
            L32:
                java.lang.IllegalArgumentException r5 = new java.lang.IllegalArgumentException
                java.lang.StringBuilder r1 = new java.lang.StringBuilder
                r1.<init>()
                java.lang.String r2 = "Element duplicate found: "
                r1.append(r2)
                r1.append(r0)
                java.lang.String r0 = r1.toString()
                r5.<init>(r0)
                throw r5
            L49:
                return
            L4a:
                java.lang.NullPointerException r5 = new java.lang.NullPointerException
                java.lang.String r0 = "Static initialization problem: Check if given element statically refer to any chronology causing premature class loading."
                r5.<init>(r0)
                throw r5
            */
            throw new UnsupportedOperationException("Method not decompiled: mt.x.a.c(mt.p):void");
        }

        public a a(p pVar, z zVar) {
            c(pVar);
            this.f39447d.put(pVar, zVar);
            return this;
        }

        public a b(s sVar) {
            if (sVar != null) {
                if (!this.f39448e.contains(sVar)) {
                    this.f39448e.add(sVar);
                }
                return this;
            }
            throw new NullPointerException("Missing chronological extension.");
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b extends WeakReference {

        /* renamed from: a  reason: collision with root package name */
        private final String f39449a;

        b(x xVar, ReferenceQueue referenceQueue) {
            super(xVar, referenceQueue);
            this.f39449a = xVar.f39439d.getName();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public x(Class cls, u uVar, Map map, List list) {
        if (cls != null) {
            if (uVar != null) {
                this.f39439d = cls;
                this.f39440e = uVar;
                Map unmodifiableMap = Collections.unmodifiableMap(map);
                this.f39441i = unmodifiableMap;
                this.f39442o = Collections.unmodifiableList(list);
                HashMap hashMap = new HashMap();
                for (p pVar : unmodifiableMap.keySet()) {
                    if (pVar.getType() == Integer.class) {
                        Object obj = this.f39441i.get(pVar);
                        if (obj instanceof c0) {
                            hashMap.put(pVar, (c0) obj);
                        }
                    }
                }
                this.f39443p = Collections.unmodifiableMap(hashMap);
                return;
            }
            throw new NullPointerException("Missing chronological merger.");
        }
        throw new NullPointerException("Missing chronological type.");
    }

    public static x G(Class cls) {
        x xVar;
        try {
            Class.forName(cls.getName(), true, cls.getClassLoader());
            Iterator it = f39437q.iterator();
            boolean z10 = false;
            while (true) {
                if (it.hasNext()) {
                    xVar = (x) ((b) it.next()).get();
                    if (xVar == null) {
                        z10 = true;
                    } else if (xVar.r() == cls) {
                        break;
                    }
                } else {
                    xVar = null;
                    break;
                }
            }
            if (z10) {
                H();
            }
            return (x) o(xVar);
        } catch (ClassNotFoundException e10) {
            throw new IllegalStateException(e10);
        }
    }

    private static void H() {
        while (true) {
            b bVar = (b) f39438r.poll();
            if (bVar != null) {
                Iterator it = f39437q.iterator();
                while (true) {
                    if (it.hasNext()) {
                        b bVar2 = (b) it.next();
                        if (bVar2.f39449a.equals(bVar.f39449a)) {
                            f39437q.remove(bVar2);
                            break;
                        }
                    }
                }
            } else {
                return;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void I(x xVar) {
        f39437q.add(new b(xVar, f39438r));
    }

    private z w(p pVar, boolean z10) {
        String str = null;
        if (!(pVar instanceof e) || !q.class.isAssignableFrom(r())) {
            return null;
        }
        e eVar = (e) e.class.cast(pVar);
        if (z10) {
            str = eVar.B(this);
        }
        if (str == null) {
            return (z) o(eVar.c((x) o(this)));
        }
        throw new e0(str);
    }

    public Set B() {
        return this.f39441i.keySet();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public z D(p pVar) {
        if (pVar != null) {
            z zVar = (z) this.f39441i.get(pVar);
            if (zVar == null && (zVar = w(pVar, true)) == null) {
                throw new e0(this, pVar);
            }
            return (z) o(zVar);
        }
        throw new NullPointerException("Missing chronological element.");
    }

    public boolean E(p pVar) {
        if (pVar != null && this.f39441i.containsKey(pVar)) {
            return true;
        }
        return false;
    }

    public boolean F(p pVar) {
        if (pVar == null) {
            return false;
        }
        if (!E(pVar) && w(pVar, false) == null) {
            return false;
        }
        return true;
    }

    @Override // mt.u
    public f0 a() {
        return this.f39440e.a();
    }

    @Override // mt.u
    public x b() {
        return this.f39440e.b();
    }

    @Override // mt.u
    public int c() {
        return this.f39440e.c();
    }

    @Override // mt.u
    public o h(Object obj, d dVar) {
        return this.f39440e.h(obj, dVar);
    }

    @Override // mt.u
    public String l(y yVar, Locale locale) {
        return this.f39440e.l(yVar, locale);
    }

    @Override // mt.u
    public Object m(q qVar, d dVar, boolean z10, boolean z11) {
        return this.f39440e.m(qVar, dVar, z10, z11);
    }

    public k q() {
        throw new r("Calendar system is not available.");
    }

    public Class r() {
        return this.f39439d;
    }

    public List x() {
        return this.f39442o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c0 z(p pVar) {
        return (c0) this.f39443p.get(pVar);
    }

    private static Object o(Object obj) {
        return obj;
    }
}
