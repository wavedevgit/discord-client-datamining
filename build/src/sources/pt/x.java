package pt;

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
    private static final List f46634q = new CopyOnWriteArrayList();

    /* renamed from: r  reason: collision with root package name */
    private static final ReferenceQueue f46635r = new ReferenceQueue();

    /* renamed from: d  reason: collision with root package name */
    private final Class f46636d;

    /* renamed from: e  reason: collision with root package name */
    private final u f46637e;

    /* renamed from: i  reason: collision with root package name */
    private final Map f46638i;

    /* renamed from: o  reason: collision with root package name */
    private final List f46639o;

    /* renamed from: p  reason: collision with root package name */
    private final Map f46640p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        final Class f46641a;

        /* renamed from: b  reason: collision with root package name */
        final boolean f46642b;

        /* renamed from: c  reason: collision with root package name */
        final u f46643c;

        /* renamed from: d  reason: collision with root package name */
        final Map f46644d;

        /* renamed from: e  reason: collision with root package name */
        final List f46645e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public a(Class cls, u uVar) {
            if (uVar != null) {
                this.f46641a = cls;
                this.f46642b = cls.getName().startsWith("net.time4j.");
                this.f46643c = uVar;
                this.f46644d = new HashMap();
                this.f46645e = new ArrayList();
                return;
            }
            throw new NullPointerException("Missing chronological merger.");
        }

        /* JADX WARN: Removed duplicated region for block: B:9:0x001b  */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        private void c(pt.p r5) {
            /*
                r4 = this;
                boolean r0 = r4.f46642b
                if (r0 == 0) goto L5
                goto L49
            L5:
                if (r5 == 0) goto L4a
                java.lang.String r0 = r5.name()
                java.util.Map r1 = r4.f46644d
                java.util.Set r1 = r1.keySet()
                java.util.Iterator r1 = r1.iterator()
            L15:
                boolean r2 = r1.hasNext()
                if (r2 == 0) goto L49
                java.lang.Object r2 = r1.next()
                pt.p r2 = (pt.p) r2
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
            throw new UnsupportedOperationException("Method not decompiled: pt.x.a.c(pt.p):void");
        }

        public a a(p pVar, z zVar) {
            c(pVar);
            this.f46644d.put(pVar, zVar);
            return this;
        }

        public a b(s sVar) {
            if (sVar != null) {
                if (!this.f46645e.contains(sVar)) {
                    this.f46645e.add(sVar);
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
        private final String f46646a;

        b(x xVar, ReferenceQueue referenceQueue) {
            super(xVar, referenceQueue);
            this.f46646a = xVar.f46636d.getName();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public x(Class cls, u uVar, Map map, List list) {
        if (cls != null) {
            if (uVar != null) {
                this.f46636d = cls;
                this.f46637e = uVar;
                Map unmodifiableMap = Collections.unmodifiableMap(map);
                this.f46638i = unmodifiableMap;
                this.f46639o = Collections.unmodifiableList(list);
                HashMap hashMap = new HashMap();
                for (p pVar : unmodifiableMap.keySet()) {
                    if (pVar.getType() == Integer.class) {
                        Object obj = this.f46638i.get(pVar);
                        if (obj instanceof c0) {
                            hashMap.put(pVar, (c0) obj);
                        }
                    }
                }
                this.f46640p = Collections.unmodifiableMap(hashMap);
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
            Iterator it = f46634q.iterator();
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
            b bVar = (b) f46635r.poll();
            if (bVar != null) {
                Iterator it = f46634q.iterator();
                while (true) {
                    if (it.hasNext()) {
                        b bVar2 = (b) it.next();
                        if (bVar2.f46646a.equals(bVar.f46646a)) {
                            f46634q.remove(bVar2);
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
        f46634q.add(new b(xVar, f46635r));
    }

    private z w(p pVar, boolean z10) {
        String str = null;
        if (!(pVar instanceof e) || !q.class.isAssignableFrom(r())) {
            return null;
        }
        e eVar = (e) e.class.cast(pVar);
        if (z10) {
            str = eVar.C(this);
        }
        if (str == null) {
            return (z) o(eVar.c((x) o(this)));
        }
        throw new e0(str);
    }

    public Set C() {
        return this.f46638i.keySet();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public z D(p pVar) {
        if (pVar != null) {
            z zVar = (z) this.f46638i.get(pVar);
            if (zVar == null && (zVar = w(pVar, true)) == null) {
                throw new e0(this, pVar);
            }
            return (z) o(zVar);
        }
        throw new NullPointerException("Missing chronological element.");
    }

    public boolean E(p pVar) {
        if (pVar != null && this.f46638i.containsKey(pVar)) {
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

    @Override // pt.u
    public f0 a() {
        return this.f46637e.a();
    }

    @Override // pt.u
    public x b() {
        return this.f46637e.b();
    }

    @Override // pt.u
    public String c(y yVar, Locale locale) {
        return this.f46637e.c(yVar, locale);
    }

    @Override // pt.u
    public o h(Object obj, d dVar) {
        return this.f46637e.h(obj, dVar);
    }

    @Override // pt.u
    public int j() {
        return this.f46637e.j();
    }

    @Override // pt.u
    public Object k(q qVar, d dVar, boolean z10, boolean z11) {
        return this.f46637e.k(qVar, dVar, z10, z11);
    }

    public k p() {
        throw new r("Calendar system is not available.");
    }

    public Class r() {
        return this.f46636d;
    }

    public List x() {
        return this.f46639o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c0 y(p pVar) {
        return (c0) this.f46640p.get(pVar);
    }

    private static Object o(Object obj) {
        return obj;
    }
}
