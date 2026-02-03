package kt;

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
    private static final List f36710q = new CopyOnWriteArrayList();

    /* renamed from: r  reason: collision with root package name */
    private static final ReferenceQueue f36711r = new ReferenceQueue();

    /* renamed from: d  reason: collision with root package name */
    private final Class f36712d;

    /* renamed from: e  reason: collision with root package name */
    private final u f36713e;

    /* renamed from: i  reason: collision with root package name */
    private final Map f36714i;

    /* renamed from: o  reason: collision with root package name */
    private final List f36715o;

    /* renamed from: p  reason: collision with root package name */
    private final Map f36716p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        final Class f36717a;

        /* renamed from: b  reason: collision with root package name */
        final boolean f36718b;

        /* renamed from: c  reason: collision with root package name */
        final u f36719c;

        /* renamed from: d  reason: collision with root package name */
        final Map f36720d;

        /* renamed from: e  reason: collision with root package name */
        final List f36721e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public a(Class cls, u uVar) {
            if (uVar != null) {
                this.f36717a = cls;
                this.f36718b = cls.getName().startsWith("net.time4j.");
                this.f36719c = uVar;
                this.f36720d = new HashMap();
                this.f36721e = new ArrayList();
                return;
            }
            throw new NullPointerException("Missing chronological merger.");
        }

        /* JADX WARN: Removed duplicated region for block: B:9:0x001b  */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        private void c(kt.p r5) {
            /*
                r4 = this;
                boolean r0 = r4.f36718b
                if (r0 == 0) goto L5
                goto L49
            L5:
                if (r5 == 0) goto L4a
                java.lang.String r0 = r5.name()
                java.util.Map r1 = r4.f36720d
                java.util.Set r1 = r1.keySet()
                java.util.Iterator r1 = r1.iterator()
            L15:
                boolean r2 = r1.hasNext()
                if (r2 == 0) goto L49
                java.lang.Object r2 = r1.next()
                kt.p r2 = (kt.p) r2
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
            throw new UnsupportedOperationException("Method not decompiled: kt.x.a.c(kt.p):void");
        }

        public a a(p pVar, z zVar) {
            c(pVar);
            this.f36720d.put(pVar, zVar);
            return this;
        }

        public a b(s sVar) {
            if (sVar != null) {
                if (!this.f36721e.contains(sVar)) {
                    this.f36721e.add(sVar);
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
        private final String f36722a;

        b(x xVar, ReferenceQueue referenceQueue) {
            super(xVar, referenceQueue);
            this.f36722a = xVar.f36712d.getName();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public x(Class cls, u uVar, Map map, List list) {
        if (cls != null) {
            if (uVar != null) {
                this.f36712d = cls;
                this.f36713e = uVar;
                Map unmodifiableMap = Collections.unmodifiableMap(map);
                this.f36714i = unmodifiableMap;
                this.f36715o = Collections.unmodifiableList(list);
                HashMap hashMap = new HashMap();
                for (p pVar : unmodifiableMap.keySet()) {
                    if (pVar.getType() == Integer.class) {
                        Object obj = this.f36714i.get(pVar);
                        if (obj instanceof c0) {
                            hashMap.put(pVar, (c0) obj);
                        }
                    }
                }
                this.f36716p = Collections.unmodifiableMap(hashMap);
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
            Iterator it = f36710q.iterator();
            boolean z10 = false;
            while (true) {
                if (it.hasNext()) {
                    xVar = (x) ((b) it.next()).get();
                    if (xVar == null) {
                        z10 = true;
                    } else if (xVar.o() == cls) {
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
            return (x) l(xVar);
        } catch (ClassNotFoundException e10) {
            throw new IllegalStateException(e10);
        }
    }

    private static void H() {
        while (true) {
            b bVar = (b) f36711r.poll();
            if (bVar != null) {
                Iterator it = f36710q.iterator();
                while (true) {
                    if (it.hasNext()) {
                        b bVar2 = (b) it.next();
                        if (bVar2.f36722a.equals(bVar.f36722a)) {
                            f36710q.remove(bVar2);
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
        f36710q.add(new b(xVar, f36711r));
    }

    private z t(p pVar, boolean z10) {
        String str = null;
        if (!(pVar instanceof e) || !q.class.isAssignableFrom(o())) {
            return null;
        }
        e eVar = (e) e.class.cast(pVar);
        if (z10) {
            str = eVar.B(this);
        }
        if (str == null) {
            return (z) l(eVar.c((x) l(this)));
        }
        throw new e0(str);
    }

    public Set B() {
        return this.f36714i.keySet();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public z D(p pVar) {
        if (pVar != null) {
            z zVar = (z) this.f36714i.get(pVar);
            if (zVar == null && (zVar = t(pVar, true)) == null) {
                throw new e0(this, pVar);
            }
            return (z) l(zVar);
        }
        throw new NullPointerException("Missing chronological element.");
    }

    public boolean E(p pVar) {
        if (pVar != null && this.f36714i.containsKey(pVar)) {
            return true;
        }
        return false;
    }

    public boolean F(p pVar) {
        if (pVar == null) {
            return false;
        }
        if (!E(pVar) && t(pVar, false) == null) {
            return false;
        }
        return true;
    }

    @Override // kt.u
    public f0 a() {
        return this.f36713e.a();
    }

    @Override // kt.u
    public x b() {
        return this.f36713e.b();
    }

    @Override // kt.u
    public int c() {
        return this.f36713e.c();
    }

    @Override // kt.u
    public String g(y yVar, Locale locale) {
        return this.f36713e.g(yVar, locale);
    }

    @Override // kt.u
    public Object h(q qVar, d dVar, boolean z10, boolean z11) {
        return this.f36713e.h(qVar, dVar, z10, z11);
    }

    @Override // kt.u
    public o i(Object obj, d dVar) {
        return this.f36713e.i(obj, dVar);
    }

    public k n() {
        throw new r("Calendar system is not available.");
    }

    public Class o() {
        return this.f36712d;
    }

    public List v() {
        return this.f36715o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c0 x(p pVar) {
        return (c0) this.f36716p.get(pVar);
    }

    private static Object l(Object obj) {
        return obj;
    }
}
