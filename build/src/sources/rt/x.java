package rt;

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
    private static final List f49535q = new CopyOnWriteArrayList();

    /* renamed from: r  reason: collision with root package name */
    private static final ReferenceQueue f49536r = new ReferenceQueue();

    /* renamed from: d  reason: collision with root package name */
    private final Class f49537d;

    /* renamed from: e  reason: collision with root package name */
    private final u f49538e;

    /* renamed from: i  reason: collision with root package name */
    private final Map f49539i;

    /* renamed from: o  reason: collision with root package name */
    private final List f49540o;

    /* renamed from: p  reason: collision with root package name */
    private final Map f49541p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        final Class f49542a;

        /* renamed from: b  reason: collision with root package name */
        final boolean f49543b;

        /* renamed from: c  reason: collision with root package name */
        final u f49544c;

        /* renamed from: d  reason: collision with root package name */
        final Map f49545d;

        /* renamed from: e  reason: collision with root package name */
        final List f49546e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public a(Class cls, u uVar) {
            if (uVar != null) {
                this.f49542a = cls;
                this.f49543b = cls.getName().startsWith("net.time4j.");
                this.f49544c = uVar;
                this.f49545d = new HashMap();
                this.f49546e = new ArrayList();
                return;
            }
            throw new NullPointerException("Missing chronological merger.");
        }

        /* JADX WARN: Removed duplicated region for block: B:9:0x001b  */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        private void c(rt.p r5) {
            /*
                r4 = this;
                boolean r0 = r4.f49543b
                if (r0 == 0) goto L5
                goto L49
            L5:
                if (r5 == 0) goto L4a
                java.lang.String r0 = r5.name()
                java.util.Map r1 = r4.f49545d
                java.util.Set r1 = r1.keySet()
                java.util.Iterator r1 = r1.iterator()
            L15:
                boolean r2 = r1.hasNext()
                if (r2 == 0) goto L49
                java.lang.Object r2 = r1.next()
                rt.p r2 = (rt.p) r2
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
            throw new UnsupportedOperationException("Method not decompiled: rt.x.a.c(rt.p):void");
        }

        public a a(p pVar, z zVar) {
            c(pVar);
            this.f49545d.put(pVar, zVar);
            return this;
        }

        public a b(s sVar) {
            if (sVar != null) {
                if (!this.f49546e.contains(sVar)) {
                    this.f49546e.add(sVar);
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
        private final String f49547a;

        b(x xVar, ReferenceQueue referenceQueue) {
            super(xVar, referenceQueue);
            this.f49547a = xVar.f49537d.getName();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public x(Class cls, u uVar, Map map, List list) {
        if (cls != null) {
            if (uVar != null) {
                this.f49537d = cls;
                this.f49538e = uVar;
                Map unmodifiableMap = Collections.unmodifiableMap(map);
                this.f49539i = unmodifiableMap;
                this.f49540o = Collections.unmodifiableList(list);
                HashMap hashMap = new HashMap();
                for (p pVar : unmodifiableMap.keySet()) {
                    if (pVar.getType() == Integer.class) {
                        Object obj = this.f49539i.get(pVar);
                        if (obj instanceof c0) {
                            hashMap.put(pVar, (c0) obj);
                        }
                    }
                }
                this.f49541p = Collections.unmodifiableMap(hashMap);
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
            Iterator it = f49535q.iterator();
            boolean z10 = false;
            while (true) {
                if (it.hasNext()) {
                    xVar = (x) ((b) it.next()).get();
                    if (xVar == null) {
                        z10 = true;
                    } else if (xVar.p() == cls) {
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
            return (x) n(xVar);
        } catch (ClassNotFoundException e10) {
            throw new IllegalStateException(e10);
        }
    }

    private static void H() {
        while (true) {
            b bVar = (b) f49536r.poll();
            if (bVar != null) {
                Iterator it = f49535q.iterator();
                while (true) {
                    if (it.hasNext()) {
                        b bVar2 = (b) it.next();
                        if (bVar2.f49547a.equals(bVar.f49547a)) {
                            f49535q.remove(bVar2);
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
        f49535q.add(new b(xVar, f49536r));
    }

    private z s(p pVar, boolean z10) {
        String str = null;
        if (!(pVar instanceof e) || !q.class.isAssignableFrom(p())) {
            return null;
        }
        e eVar = (e) e.class.cast(pVar);
        if (z10) {
            str = eVar.z(this);
        }
        if (str == null) {
            return (z) n(eVar.c((x) n(this)));
        }
        throw new e0(str);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public z C(p pVar) {
        if (pVar != null) {
            z zVar = (z) this.f49539i.get(pVar);
            if (zVar == null && (zVar = s(pVar, true)) == null) {
                throw new e0(this, pVar);
            }
            return (z) n(zVar);
        }
        throw new NullPointerException("Missing chronological element.");
    }

    public boolean E(p pVar) {
        if (pVar != null && this.f49539i.containsKey(pVar)) {
            return true;
        }
        return false;
    }

    public boolean F(p pVar) {
        if (pVar == null) {
            return false;
        }
        if (!E(pVar) && s(pVar, false) == null) {
            return false;
        }
        return true;
    }

    @Override // rt.u
    public f0 a() {
        return this.f49538e.a();
    }

    @Override // rt.u
    public String b(y yVar, Locale locale) {
        return this.f49538e.b(yVar, locale);
    }

    @Override // rt.u
    public x c() {
        return this.f49538e.c();
    }

    @Override // rt.u
    public int g() {
        return this.f49538e.g();
    }

    @Override // rt.u
    public o k(Object obj, d dVar) {
        return this.f49538e.k(obj, dVar);
    }

    @Override // rt.u
    public Object l(q qVar, d dVar, boolean z10, boolean z11) {
        return this.f49538e.l(qVar, dVar, z10, z11);
    }

    public k o() {
        throw new r("Calendar system is not available.");
    }

    public Class p() {
        return this.f49537d;
    }

    public List u() {
        return this.f49540o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c0 y(p pVar) {
        return (c0) this.f49541p.get(pVar);
    }

    public Set z() {
        return this.f49539i.keySet();
    }

    private static Object n(Object obj) {
        return obj;
    }
}
