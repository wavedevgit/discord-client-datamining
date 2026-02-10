package bu;

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
    private static final List f7837q = new CopyOnWriteArrayList();

    /* renamed from: r  reason: collision with root package name */
    private static final ReferenceQueue f7838r = new ReferenceQueue();

    /* renamed from: d  reason: collision with root package name */
    private final Class f7839d;

    /* renamed from: e  reason: collision with root package name */
    private final u f7840e;

    /* renamed from: i  reason: collision with root package name */
    private final Map f7841i;

    /* renamed from: o  reason: collision with root package name */
    private final List f7842o;

    /* renamed from: p  reason: collision with root package name */
    private final Map f7843p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        final Class f7844a;

        /* renamed from: b  reason: collision with root package name */
        final boolean f7845b;

        /* renamed from: c  reason: collision with root package name */
        final u f7846c;

        /* renamed from: d  reason: collision with root package name */
        final Map f7847d;

        /* renamed from: e  reason: collision with root package name */
        final List f7848e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public a(Class cls, u uVar) {
            if (uVar != null) {
                this.f7844a = cls;
                this.f7845b = cls.getName().startsWith("net.time4j.");
                this.f7846c = uVar;
                this.f7847d = new HashMap();
                this.f7848e = new ArrayList();
                return;
            }
            throw new NullPointerException("Missing chronological merger.");
        }

        /* JADX WARN: Removed duplicated region for block: B:9:0x001b  */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        private void c(bu.p r5) {
            /*
                r4 = this;
                boolean r0 = r4.f7845b
                if (r0 == 0) goto L5
                goto L49
            L5:
                if (r5 == 0) goto L4a
                java.lang.String r0 = r5.name()
                java.util.Map r1 = r4.f7847d
                java.util.Set r1 = r1.keySet()
                java.util.Iterator r1 = r1.iterator()
            L15:
                boolean r2 = r1.hasNext()
                if (r2 == 0) goto L49
                java.lang.Object r2 = r1.next()
                bu.p r2 = (bu.p) r2
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
            throw new UnsupportedOperationException("Method not decompiled: bu.x.a.c(bu.p):void");
        }

        public a a(p pVar, z zVar) {
            c(pVar);
            this.f7847d.put(pVar, zVar);
            return this;
        }

        public a b(s sVar) {
            if (sVar != null) {
                if (!this.f7848e.contains(sVar)) {
                    this.f7848e.add(sVar);
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
        private final String f7849a;

        b(x xVar, ReferenceQueue referenceQueue) {
            super(xVar, referenceQueue);
            this.f7849a = xVar.f7839d.getName();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public x(Class cls, u uVar, Map map, List list) {
        if (cls != null) {
            if (uVar != null) {
                this.f7839d = cls;
                this.f7840e = uVar;
                Map unmodifiableMap = Collections.unmodifiableMap(map);
                this.f7841i = unmodifiableMap;
                this.f7842o = Collections.unmodifiableList(list);
                HashMap hashMap = new HashMap();
                for (p pVar : unmodifiableMap.keySet()) {
                    if (pVar.getType() == Integer.class) {
                        Object obj = this.f7841i.get(pVar);
                        if (obj instanceof c0) {
                            hashMap.put(pVar, (c0) obj);
                        }
                    }
                }
                this.f7843p = Collections.unmodifiableMap(hashMap);
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
            Iterator it = f7837q.iterator();
            boolean z10 = false;
            while (true) {
                if (it.hasNext()) {
                    xVar = (x) ((b) it.next()).get();
                    if (xVar == null) {
                        z10 = true;
                    } else if (xVar.q() == cls) {
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
            b bVar = (b) f7838r.poll();
            if (bVar != null) {
                Iterator it = f7837q.iterator();
                while (true) {
                    if (it.hasNext()) {
                        b bVar2 = (b) it.next();
                        if (bVar2.f7849a.equals(bVar.f7849a)) {
                            f7837q.remove(bVar2);
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
        f7837q.add(new b(xVar, f7838r));
    }

    private z u(p pVar, boolean z10) {
        String str = null;
        if (!(pVar instanceof e) || !q.class.isAssignableFrom(q())) {
            return null;
        }
        e eVar = (e) e.class.cast(pVar);
        if (z10) {
            str = eVar.z(this);
        }
        if (str == null) {
            return (z) o(eVar.c((x) o(this)));
        }
        throw new e0(str);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public z D(p pVar) {
        if (pVar != null) {
            z zVar = (z) this.f7841i.get(pVar);
            if (zVar == null && (zVar = u(pVar, true)) == null) {
                throw new e0(this, pVar);
            }
            return (z) o(zVar);
        }
        throw new NullPointerException("Missing chronological element.");
    }

    public boolean E(p pVar) {
        if (pVar != null && this.f7841i.containsKey(pVar)) {
            return true;
        }
        return false;
    }

    public boolean F(p pVar) {
        if (pVar == null) {
            return false;
        }
        if (!E(pVar) && u(pVar, false) == null) {
            return false;
        }
        return true;
    }

    @Override // bu.u
    public f0 a() {
        return this.f7840e.a();
    }

    @Override // bu.u
    public x b() {
        return this.f7840e.b();
    }

    @Override // bu.u
    public int c() {
        return this.f7840e.c();
    }

    @Override // bu.u
    public Object h(q qVar, d dVar, boolean z10, boolean z11) {
        return this.f7840e.h(qVar, dVar, z10, z11);
    }

    @Override // bu.u
    public String j(y yVar, Locale locale) {
        return this.f7840e.j(yVar, locale);
    }

    @Override // bu.u
    public o m(Object obj, d dVar) {
        return this.f7840e.m(obj, dVar);
    }

    public k p() {
        throw new r("Calendar system is not available.");
    }

    public Class q() {
        return this.f7839d;
    }

    public List x() {
        return this.f7842o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c0 y(p pVar) {
        return (c0) this.f7843p.get(pVar);
    }

    public Set z() {
        return this.f7841i.keySet();
    }

    private static Object o(Object obj) {
        return obj;
    }
}
