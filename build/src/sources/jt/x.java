package jt;

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
    private static final List f32791q = new CopyOnWriteArrayList();

    /* renamed from: r  reason: collision with root package name */
    private static final ReferenceQueue f32792r = new ReferenceQueue();

    /* renamed from: d  reason: collision with root package name */
    private final Class f32793d;

    /* renamed from: e  reason: collision with root package name */
    private final u f32794e;

    /* renamed from: i  reason: collision with root package name */
    private final Map f32795i;

    /* renamed from: o  reason: collision with root package name */
    private final List f32796o;

    /* renamed from: p  reason: collision with root package name */
    private final Map f32797p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        final Class f32798a;

        /* renamed from: b  reason: collision with root package name */
        final boolean f32799b;

        /* renamed from: c  reason: collision with root package name */
        final u f32800c;

        /* renamed from: d  reason: collision with root package name */
        final Map f32801d;

        /* renamed from: e  reason: collision with root package name */
        final List f32802e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public a(Class cls, u uVar) {
            if (uVar != null) {
                this.f32798a = cls;
                this.f32799b = cls.getName().startsWith("net.time4j.");
                this.f32800c = uVar;
                this.f32801d = new HashMap();
                this.f32802e = new ArrayList();
                return;
            }
            throw new NullPointerException("Missing chronological merger.");
        }

        /* JADX WARN: Removed duplicated region for block: B:9:0x001b  */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        private void c(jt.p r5) {
            /*
                r4 = this;
                boolean r0 = r4.f32799b
                if (r0 == 0) goto L5
                goto L49
            L5:
                if (r5 == 0) goto L4a
                java.lang.String r0 = r5.name()
                java.util.Map r1 = r4.f32801d
                java.util.Set r1 = r1.keySet()
                java.util.Iterator r1 = r1.iterator()
            L15:
                boolean r2 = r1.hasNext()
                if (r2 == 0) goto L49
                java.lang.Object r2 = r1.next()
                jt.p r2 = (jt.p) r2
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
            throw new UnsupportedOperationException("Method not decompiled: jt.x.a.c(jt.p):void");
        }

        public a a(p pVar, z zVar) {
            c(pVar);
            this.f32801d.put(pVar, zVar);
            return this;
        }

        public a b(s sVar) {
            if (sVar != null) {
                if (!this.f32802e.contains(sVar)) {
                    this.f32802e.add(sVar);
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
        private final String f32803a;

        b(x xVar, ReferenceQueue referenceQueue) {
            super(xVar, referenceQueue);
            this.f32803a = xVar.f32793d.getName();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public x(Class cls, u uVar, Map map, List list) {
        if (cls != null) {
            if (uVar != null) {
                this.f32793d = cls;
                this.f32794e = uVar;
                Map unmodifiableMap = Collections.unmodifiableMap(map);
                this.f32795i = unmodifiableMap;
                this.f32796o = Collections.unmodifiableList(list);
                HashMap hashMap = new HashMap();
                for (p pVar : unmodifiableMap.keySet()) {
                    if (pVar.getType() == Integer.class) {
                        Object obj = this.f32795i.get(pVar);
                        if (obj instanceof c0) {
                            hashMap.put(pVar, (c0) obj);
                        }
                    }
                }
                this.f32797p = Collections.unmodifiableMap(hashMap);
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
            Iterator it = f32791q.iterator();
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
            return (x) m(xVar);
        } catch (ClassNotFoundException e10) {
            throw new IllegalStateException(e10);
        }
    }

    private static void H() {
        while (true) {
            b bVar = (b) f32792r.poll();
            if (bVar != null) {
                Iterator it = f32791q.iterator();
                while (true) {
                    if (it.hasNext()) {
                        b bVar2 = (b) it.next();
                        if (bVar2.f32803a.equals(bVar.f32803a)) {
                            f32791q.remove(bVar2);
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
        f32791q.add(new b(xVar, f32792r));
    }

    private z v(p pVar, boolean z10) {
        String str = null;
        if (!(pVar instanceof e) || !q.class.isAssignableFrom(p())) {
            return null;
        }
        e eVar = (e) e.class.cast(pVar);
        if (z10) {
            str = eVar.B(this);
        }
        if (str == null) {
            return (z) m(eVar.c((x) m(this)));
        }
        throw new e0(str);
    }

    public Set B() {
        return this.f32795i.keySet();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public z D(p pVar) {
        if (pVar != null) {
            z zVar = (z) this.f32795i.get(pVar);
            if (zVar == null && (zVar = v(pVar, true)) == null) {
                throw new e0(this, pVar);
            }
            return (z) m(zVar);
        }
        throw new NullPointerException("Missing chronological element.");
    }

    public boolean E(p pVar) {
        if (pVar != null && this.f32795i.containsKey(pVar)) {
            return true;
        }
        return false;
    }

    public boolean F(p pVar) {
        if (pVar == null) {
            return false;
        }
        if (!E(pVar) && v(pVar, false) == null) {
            return false;
        }
        return true;
    }

    @Override // jt.u
    public f0 a() {
        return this.f32794e.a();
    }

    @Override // jt.u
    public x b() {
        return this.f32794e.b();
    }

    @Override // jt.u
    public o c(Object obj, d dVar) {
        return this.f32794e.c(obj, dVar);
    }

    @Override // jt.u
    public int h() {
        return this.f32794e.h();
    }

    @Override // jt.u
    public Object j(q qVar, d dVar, boolean z10, boolean z11) {
        return this.f32794e.j(qVar, dVar, z10, z11);
    }

    @Override // jt.u
    public String k(y yVar, Locale locale) {
        return this.f32794e.k(yVar, locale);
    }

    public k n() {
        throw new r("Calendar system is not available.");
    }

    public Class p() {
        return this.f32793d;
    }

    public List w() {
        return this.f32796o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c0 x(p pVar) {
        return (c0) this.f32797p.get(pVar);
    }

    private static Object m(Object obj) {
        return obj;
    }
}
