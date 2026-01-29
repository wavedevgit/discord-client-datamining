package com.squareup.moshi;

import com.squareup.moshi.h;
import java.lang.reflect.Type;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Deque;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w {

    /* renamed from: e  reason: collision with root package name */
    static final List f19005e;

    /* renamed from: a  reason: collision with root package name */
    private final List f19006a;

    /* renamed from: b  reason: collision with root package name */
    private final int f19007b;

    /* renamed from: c  reason: collision with root package name */
    private final ThreadLocal f19008c = new ThreadLocal();

    /* renamed from: d  reason: collision with root package name */
    private final Map f19009d = new LinkedHashMap();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements h.e {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Type f19010a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ h f19011b;

        a(Type type, h hVar) {
            this.f19010a = type;
            this.f19011b = hVar;
        }

        @Override // com.squareup.moshi.h.e
        public h create(Type type, Set set, w wVar) {
            if (set.isEmpty() && sm.c.w(this.f19010a, type)) {
                return this.f19011b;
            }
            return null;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        final List f19012a = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        int f19013b = 0;

        public b a(h.e eVar) {
            if (eVar != null) {
                List list = this.f19012a;
                int i10 = this.f19013b;
                this.f19013b = i10 + 1;
                list.add(i10, eVar);
                return this;
            }
            throw new IllegalArgumentException("factory == null");
        }

        public b b(Object obj) {
            if (obj != null) {
                return a(com.squareup.moshi.a.c(obj));
            }
            throw new IllegalArgumentException("adapter == null");
        }

        public b c(Type type, h hVar) {
            return a(w.h(type, hVar));
        }

        public w d() {
            return new w(this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends h {

        /* renamed from: a  reason: collision with root package name */
        final Type f19014a;

        /* renamed from: b  reason: collision with root package name */
        final String f19015b;

        /* renamed from: c  reason: collision with root package name */
        final Object f19016c;

        /* renamed from: d  reason: collision with root package name */
        h f19017d;

        c(Type type, String str, Object obj) {
            this.f19014a = type;
            this.f19015b = str;
            this.f19016c = obj;
        }

        @Override // com.squareup.moshi.h
        public Object fromJson(m mVar) {
            h hVar = this.f19017d;
            if (hVar != null) {
                return hVar.fromJson(mVar);
            }
            throw new IllegalStateException("JsonAdapter isn't ready");
        }

        @Override // com.squareup.moshi.h
        public void toJson(t tVar, Object obj) {
            h hVar = this.f19017d;
            if (hVar != null) {
                hVar.toJson(tVar, obj);
                return;
            }
            throw new IllegalStateException("JsonAdapter isn't ready");
        }

        public String toString() {
            h hVar = this.f19017d;
            if (hVar != null) {
                return hVar.toString();
            }
            return super.toString();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public final class d {

        /* renamed from: a  reason: collision with root package name */
        final List f19018a = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        final Deque f19019b = new ArrayDeque();

        /* renamed from: c  reason: collision with root package name */
        boolean f19020c;

        d() {
        }

        void a(h hVar) {
            ((c) this.f19019b.getLast()).f19017d = hVar;
        }

        IllegalArgumentException b(IllegalArgumentException illegalArgumentException) {
            if (!this.f19020c) {
                this.f19020c = true;
                if (this.f19019b.size() != 1 || ((c) this.f19019b.getFirst()).f19015b != null) {
                    StringBuilder sb2 = new StringBuilder(illegalArgumentException.getMessage());
                    Iterator descendingIterator = this.f19019b.descendingIterator();
                    while (descendingIterator.hasNext()) {
                        c cVar = (c) descendingIterator.next();
                        sb2.append("\nfor ");
                        sb2.append(cVar.f19014a);
                        if (cVar.f19015b != null) {
                            sb2.append(' ');
                            sb2.append(cVar.f19015b);
                        }
                    }
                    return new IllegalArgumentException(sb2.toString(), illegalArgumentException);
                }
            }
            return illegalArgumentException;
        }

        void c(boolean z10) {
            this.f19019b.removeLast();
            if (this.f19019b.isEmpty()) {
                w.this.f19008c.remove();
                if (z10) {
                    synchronized (w.this.f19009d) {
                        try {
                            int size = this.f19018a.size();
                            for (int i10 = 0; i10 < size; i10++) {
                                c cVar = (c) this.f19018a.get(i10);
                                h hVar = (h) w.this.f19009d.put(cVar.f19016c, cVar.f19017d);
                                if (hVar != null) {
                                    cVar.f19017d = hVar;
                                    w.this.f19009d.put(cVar.f19016c, hVar);
                                }
                            }
                        } catch (Throwable th2) {
                            throw th2;
                        }
                    }
                }
            }
        }

        h d(Type type, String str, Object obj) {
            int size = this.f19018a.size();
            for (int i10 = 0; i10 < size; i10++) {
                c cVar = (c) this.f19018a.get(i10);
                if (cVar.f19016c.equals(obj)) {
                    this.f19019b.add(cVar);
                    h hVar = cVar.f19017d;
                    if (hVar != null) {
                        return hVar;
                    }
                    return cVar;
                }
            }
            c cVar2 = new c(type, str, obj);
            this.f19018a.add(cVar2);
            this.f19019b.add(cVar2);
            return null;
        }
    }

    static {
        ArrayList arrayList = new ArrayList(5);
        f19005e = arrayList;
        arrayList.add(y.f19023a);
        arrayList.add(e.f18898b);
        arrayList.add(v.f19002c);
        arrayList.add(com.squareup.moshi.b.f18878c);
        arrayList.add(x.f19022a);
        arrayList.add(com.squareup.moshi.d.f18891d);
    }

    w(b bVar) {
        int size = bVar.f19012a.size();
        List list = f19005e;
        ArrayList arrayList = new ArrayList(size + list.size());
        arrayList.addAll(bVar.f19012a);
        arrayList.addAll(list);
        this.f19006a = Collections.unmodifiableList(arrayList);
        this.f19007b = bVar.f19013b;
    }

    private Object g(Type type, Set set) {
        if (set.isEmpty()) {
            return type;
        }
        return Arrays.asList(type, set);
    }

    static h.e h(Type type, h hVar) {
        if (type != null) {
            if (hVar != null) {
                return new a(type, hVar);
            }
            throw new IllegalArgumentException("jsonAdapter == null");
        }
        throw new IllegalArgumentException("type == null");
    }

    public h c(Class cls) {
        return e(cls, sm.c.f49079a);
    }

    public h d(Type type) {
        return e(type, sm.c.f49079a);
    }

    public h e(Type type, Set set) {
        return f(type, set, null);
    }

    public h f(Type type, Set set, String str) {
        if (type != null) {
            if (set != null) {
                Type p10 = sm.c.p(sm.c.a(type));
                Object g10 = g(p10, set);
                synchronized (this.f19009d) {
                    try {
                        h hVar = (h) this.f19009d.get(g10);
                        if (hVar != null) {
                            return hVar;
                        }
                        d dVar = (d) this.f19008c.get();
                        if (dVar == null) {
                            dVar = new d();
                            this.f19008c.set(dVar);
                        }
                        h d10 = dVar.d(p10, str, g10);
                        try {
                            if (d10 != null) {
                                return d10;
                            }
                            try {
                                int size = this.f19006a.size();
                                for (int i10 = 0; i10 < size; i10++) {
                                    h create = ((h.e) this.f19006a.get(i10)).create(p10, set, this);
                                    if (create != null) {
                                        dVar.a(create);
                                        dVar.c(true);
                                        return create;
                                    }
                                }
                                throw new IllegalArgumentException("No JsonAdapter for " + sm.c.u(p10, set));
                            } catch (IllegalArgumentException e10) {
                                throw dVar.b(e10);
                            }
                        } finally {
                            dVar.c(false);
                        }
                    } finally {
                    }
                }
            }
            throw new NullPointerException("annotations == null");
        }
        throw new NullPointerException("type == null");
    }

    public h i(h.e eVar, Type type, Set set) {
        if (set != null) {
            Type p10 = sm.c.p(sm.c.a(type));
            int indexOf = this.f19006a.indexOf(eVar);
            if (indexOf != -1) {
                int size = this.f19006a.size();
                for (int i10 = indexOf + 1; i10 < size; i10++) {
                    h create = ((h.e) this.f19006a.get(i10)).create(p10, set, this);
                    if (create != null) {
                        return create;
                    }
                }
                throw new IllegalArgumentException("No next JsonAdapter for " + sm.c.u(p10, set));
            }
            throw new IllegalArgumentException("Unable to skip past unknown factory " + eVar);
        }
        throw new NullPointerException("annotations == null");
    }
}
