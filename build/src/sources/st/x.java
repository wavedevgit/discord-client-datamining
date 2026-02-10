package st;

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
    private static final List f50408q = new CopyOnWriteArrayList();

    /* renamed from: r  reason: collision with root package name */
    private static final ReferenceQueue f50409r = new ReferenceQueue();

    /* renamed from: d  reason: collision with root package name */
    private final Class f50410d;

    /* renamed from: e  reason: collision with root package name */
    private final u f50411e;

    /* renamed from: i  reason: collision with root package name */
    private final Map f50412i;

    /* renamed from: o  reason: collision with root package name */
    private final List f50413o;

    /* renamed from: p  reason: collision with root package name */
    private final Map f50414p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        final Class f50415a;

        /* renamed from: b  reason: collision with root package name */
        final boolean f50416b;

        /* renamed from: c  reason: collision with root package name */
        final u f50417c;

        /* renamed from: d  reason: collision with root package name */
        final Map f50418d;

        /* renamed from: e  reason: collision with root package name */
        final List f50419e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public a(Class cls, u uVar) {
            if (uVar != null) {
                this.f50415a = cls;
                this.f50416b = cls.getName().startsWith("net.time4j.");
                this.f50417c = uVar;
                this.f50418d = new HashMap();
                this.f50419e = new ArrayList();
                return;
            }
            throw new NullPointerException("Missing chronological merger.");
        }

        /* JADX WARN: Removed duplicated region for block: B:9:0x001b  */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        private void c(st.p r5) {
            /*
                r4 = this;
                boolean r0 = r4.f50416b
                if (r0 == 0) goto L5
                goto L49
            L5:
                if (r5 == 0) goto L4a
                java.lang.String r0 = r5.name()
                java.util.Map r1 = r4.f50418d
                java.util.Set r1 = r1.keySet()
                java.util.Iterator r1 = r1.iterator()
            L15:
                boolean r2 = r1.hasNext()
                if (r2 == 0) goto L49
                java.lang.Object r2 = r1.next()
                st.p r2 = (st.p) r2
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
            throw new UnsupportedOperationException("Method not decompiled: st.x.a.c(st.p):void");
        }

        public a a(p pVar, z zVar) {
            c(pVar);
            this.f50418d.put(pVar, zVar);
            return this;
        }

        public a b(s sVar) {
            if (sVar != null) {
                if (!this.f50419e.contains(sVar)) {
                    this.f50419e.add(sVar);
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
        private final String f50420a;

        b(x xVar, ReferenceQueue referenceQueue) {
            super(xVar, referenceQueue);
            this.f50420a = xVar.f50410d.getName();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public x(Class cls, u uVar, Map map, List list) {
        if (cls != null) {
            if (uVar != null) {
                this.f50410d = cls;
                this.f50411e = uVar;
                Map unmodifiableMap = Collections.unmodifiableMap(map);
                this.f50412i = unmodifiableMap;
                this.f50413o = Collections.unmodifiableList(list);
                HashMap hashMap = new HashMap();
                for (p pVar : unmodifiableMap.keySet()) {
                    if (pVar.getType() == Integer.class) {
                        Object obj = this.f50412i.get(pVar);
                        if (obj instanceof c0) {
                            hashMap.put(pVar, (c0) obj);
                        }
                    }
                }
                this.f50414p = Collections.unmodifiableMap(hashMap);
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
            Iterator it = f50408q.iterator();
            boolean z10 = false;
            while (true) {
                if (it.hasNext()) {
                    xVar = (x) ((b) it.next()).get();
                    if (xVar == null) {
                        z10 = true;
                    } else if (xVar.n() == cls) {
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
            return (x) k(xVar);
        } catch (ClassNotFoundException e10) {
            throw new IllegalStateException(e10);
        }
    }

    private static void H() {
        while (true) {
            b bVar = (b) f50409r.poll();
            if (bVar != null) {
                Iterator it = f50408q.iterator();
                while (true) {
                    if (it.hasNext()) {
                        b bVar2 = (b) it.next();
                        if (bVar2.f50420a.equals(bVar.f50420a)) {
                            f50408q.remove(bVar2);
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
        f50408q.add(new b(xVar, f50409r));
    }

    private z p(p pVar, boolean z10) {
        String str = null;
        if (!(pVar instanceof e) || !q.class.isAssignableFrom(n())) {
            return null;
        }
        e eVar = (e) e.class.cast(pVar);
        if (z10) {
            str = eVar.z(this);
        }
        if (str == null) {
            return (z) k(eVar.c((x) k(this)));
        }
        throw new e0(str);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public z C(p pVar) {
        if (pVar != null) {
            z zVar = (z) this.f50412i.get(pVar);
            if (zVar == null && (zVar = p(pVar, true)) == null) {
                throw new e0(this, pVar);
            }
            return (z) k(zVar);
        }
        throw new NullPointerException("Missing chronological element.");
    }

    public boolean E(p pVar) {
        if (pVar != null && this.f50412i.containsKey(pVar)) {
            return true;
        }
        return false;
    }

    public boolean F(p pVar) {
        if (pVar == null) {
            return false;
        }
        if (!E(pVar) && p(pVar, false) == null) {
            return false;
        }
        return true;
    }

    @Override // st.u
    public f0 a() {
        return this.f50411e.a();
    }

    @Override // st.u
    public x b() {
        return this.f50411e.b();
    }

    @Override // st.u
    public int c() {
        return this.f50411e.c();
    }

    @Override // st.u
    public String g(y yVar, Locale locale) {
        return this.f50411e.g(yVar, locale);
    }

    @Override // st.u
    public o h(Object obj, d dVar) {
        return this.f50411e.h(obj, dVar);
    }

    @Override // st.u
    public Object i(q qVar, d dVar, boolean z10, boolean z11) {
        return this.f50411e.i(qVar, dVar, z10, z11);
    }

    public k m() {
        throw new r("Calendar system is not available.");
    }

    public Class n() {
        return this.f50410d;
    }

    public List s() {
        return this.f50413o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c0 y(p pVar) {
        return (c0) this.f50414p.get(pVar);
    }

    public Set z() {
        return this.f50412i.keySet();
    }

    private static Object k(Object obj) {
        return obj;
    }
}
