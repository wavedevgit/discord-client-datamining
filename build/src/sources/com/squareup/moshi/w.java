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
    static final List f18026e;

    /* renamed from: a  reason: collision with root package name */
    private final List f18027a;

    /* renamed from: b  reason: collision with root package name */
    private final int f18028b;

    /* renamed from: c  reason: collision with root package name */
    private final ThreadLocal f18029c = new ThreadLocal();

    /* renamed from: d  reason: collision with root package name */
    private final Map f18030d = new LinkedHashMap();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements h.e {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Type f18031a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ h f18032b;

        a(Type type, h hVar) {
            this.f18031a = type;
            this.f18032b = hVar;
        }

        @Override // com.squareup.moshi.h.e
        public h create(Type type, Set set, w wVar) {
            if (set.isEmpty() && ym.c.w(this.f18031a, type)) {
                return this.f18032b;
            }
            return null;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        final List f18033a = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        int f18034b = 0;

        public b a(h.e eVar) {
            if (eVar != null) {
                List list = this.f18033a;
                int i10 = this.f18034b;
                this.f18034b = i10 + 1;
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
        final Type f18035a;

        /* renamed from: b  reason: collision with root package name */
        final String f18036b;

        /* renamed from: c  reason: collision with root package name */
        final Object f18037c;

        /* renamed from: d  reason: collision with root package name */
        h f18038d;

        c(Type type, String str, Object obj) {
            this.f18035a = type;
            this.f18036b = str;
            this.f18037c = obj;
        }

        @Override // com.squareup.moshi.h
        public Object fromJson(m mVar) {
            h hVar = this.f18038d;
            if (hVar != null) {
                return hVar.fromJson(mVar);
            }
            throw new IllegalStateException("JsonAdapter isn't ready");
        }

        @Override // com.squareup.moshi.h
        public void toJson(t tVar, Object obj) {
            h hVar = this.f18038d;
            if (hVar != null) {
                hVar.toJson(tVar, obj);
                return;
            }
            throw new IllegalStateException("JsonAdapter isn't ready");
        }

        public String toString() {
            h hVar = this.f18038d;
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
        final List f18039a = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        final Deque f18040b = new ArrayDeque();

        /* renamed from: c  reason: collision with root package name */
        boolean f18041c;

        d() {
        }

        void a(h hVar) {
            ((c) this.f18040b.getLast()).f18038d = hVar;
        }

        IllegalArgumentException b(IllegalArgumentException illegalArgumentException) {
            if (!this.f18041c) {
                this.f18041c = true;
                if (this.f18040b.size() != 1 || ((c) this.f18040b.getFirst()).f18036b != null) {
                    StringBuilder sb2 = new StringBuilder(illegalArgumentException.getMessage());
                    Iterator descendingIterator = this.f18040b.descendingIterator();
                    while (descendingIterator.hasNext()) {
                        c cVar = (c) descendingIterator.next();
                        sb2.append("\nfor ");
                        sb2.append(cVar.f18035a);
                        if (cVar.f18036b != null) {
                            sb2.append(' ');
                            sb2.append(cVar.f18036b);
                        }
                    }
                    return new IllegalArgumentException(sb2.toString(), illegalArgumentException);
                }
            }
            return illegalArgumentException;
        }

        void c(boolean z10) {
            this.f18040b.removeLast();
            if (this.f18040b.isEmpty()) {
                w.this.f18029c.remove();
                if (z10) {
                    synchronized (w.this.f18030d) {
                        try {
                            int size = this.f18039a.size();
                            for (int i10 = 0; i10 < size; i10++) {
                                c cVar = (c) this.f18039a.get(i10);
                                h hVar = (h) w.this.f18030d.put(cVar.f18037c, cVar.f18038d);
                                if (hVar != null) {
                                    cVar.f18038d = hVar;
                                    w.this.f18030d.put(cVar.f18037c, hVar);
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
            int size = this.f18039a.size();
            for (int i10 = 0; i10 < size; i10++) {
                c cVar = (c) this.f18039a.get(i10);
                if (cVar.f18037c.equals(obj)) {
                    this.f18040b.add(cVar);
                    h hVar = cVar.f18038d;
                    if (hVar != null) {
                        return hVar;
                    }
                    return cVar;
                }
            }
            c cVar2 = new c(type, str, obj);
            this.f18039a.add(cVar2);
            this.f18040b.add(cVar2);
            return null;
        }
    }

    static {
        ArrayList arrayList = new ArrayList(5);
        f18026e = arrayList;
        arrayList.add(y.f18044a);
        arrayList.add(e.f17919b);
        arrayList.add(v.f18023c);
        arrayList.add(com.squareup.moshi.b.f17899c);
        arrayList.add(x.f18043a);
        arrayList.add(com.squareup.moshi.d.f17912d);
    }

    w(b bVar) {
        int size = bVar.f18033a.size();
        List list = f18026e;
        ArrayList arrayList = new ArrayList(size + list.size());
        arrayList.addAll(bVar.f18033a);
        arrayList.addAll(list);
        this.f18027a = Collections.unmodifiableList(arrayList);
        this.f18028b = bVar.f18034b;
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
        return e(cls, ym.c.f54851a);
    }

    public h d(Type type) {
        return e(type, ym.c.f54851a);
    }

    public h e(Type type, Set set) {
        return f(type, set, null);
    }

    public h f(Type type, Set set, String str) {
        if (type != null) {
            if (set != null) {
                Type p10 = ym.c.p(ym.c.a(type));
                Object g10 = g(p10, set);
                synchronized (this.f18030d) {
                    try {
                        h hVar = (h) this.f18030d.get(g10);
                        if (hVar != null) {
                            return hVar;
                        }
                        d dVar = (d) this.f18029c.get();
                        if (dVar == null) {
                            dVar = new d();
                            this.f18029c.set(dVar);
                        }
                        h d10 = dVar.d(p10, str, g10);
                        try {
                            if (d10 != null) {
                                return d10;
                            }
                            try {
                                int size = this.f18027a.size();
                                for (int i10 = 0; i10 < size; i10++) {
                                    h create = ((h.e) this.f18027a.get(i10)).create(p10, set, this);
                                    if (create != null) {
                                        dVar.a(create);
                                        dVar.c(true);
                                        return create;
                                    }
                                }
                                throw new IllegalArgumentException("No JsonAdapter for " + ym.c.u(p10, set));
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
            Type p10 = ym.c.p(ym.c.a(type));
            int indexOf = this.f18027a.indexOf(eVar);
            if (indexOf != -1) {
                int size = this.f18027a.size();
                for (int i10 = indexOf + 1; i10 < size; i10++) {
                    h create = ((h.e) this.f18027a.get(i10)).create(p10, set, this);
                    if (create != null) {
                        return create;
                    }
                }
                throw new IllegalArgumentException("No next JsonAdapter for " + ym.c.u(p10, set));
            }
            throw new IllegalArgumentException("Unable to skip past unknown factory " + eVar);
        }
        throw new NullPointerException("annotations == null");
    }
}
