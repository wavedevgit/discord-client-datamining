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
    static final List f18006e;

    /* renamed from: a  reason: collision with root package name */
    private final List f18007a;

    /* renamed from: b  reason: collision with root package name */
    private final int f18008b;

    /* renamed from: c  reason: collision with root package name */
    private final ThreadLocal f18009c = new ThreadLocal();

    /* renamed from: d  reason: collision with root package name */
    private final Map f18010d = new LinkedHashMap();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements h.e {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Type f18011a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ h f18012b;

        a(Type type, h hVar) {
            this.f18011a = type;
            this.f18012b = hVar;
        }

        @Override // com.squareup.moshi.h.e
        public h create(Type type, Set set, w wVar) {
            if (set.isEmpty() && an.c.w(this.f18011a, type)) {
                return this.f18012b;
            }
            return null;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        final List f18013a = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        int f18014b = 0;

        public b a(h.e eVar) {
            if (eVar != null) {
                List list = this.f18013a;
                int i10 = this.f18014b;
                this.f18014b = i10 + 1;
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
        final Type f18015a;

        /* renamed from: b  reason: collision with root package name */
        final String f18016b;

        /* renamed from: c  reason: collision with root package name */
        final Object f18017c;

        /* renamed from: d  reason: collision with root package name */
        h f18018d;

        c(Type type, String str, Object obj) {
            this.f18015a = type;
            this.f18016b = str;
            this.f18017c = obj;
        }

        @Override // com.squareup.moshi.h
        public Object fromJson(m mVar) {
            h hVar = this.f18018d;
            if (hVar != null) {
                return hVar.fromJson(mVar);
            }
            throw new IllegalStateException("JsonAdapter isn't ready");
        }

        @Override // com.squareup.moshi.h
        public void toJson(t tVar, Object obj) {
            h hVar = this.f18018d;
            if (hVar != null) {
                hVar.toJson(tVar, obj);
                return;
            }
            throw new IllegalStateException("JsonAdapter isn't ready");
        }

        public String toString() {
            h hVar = this.f18018d;
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
        final List f18019a = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        final Deque f18020b = new ArrayDeque();

        /* renamed from: c  reason: collision with root package name */
        boolean f18021c;

        d() {
        }

        void a(h hVar) {
            ((c) this.f18020b.getLast()).f18018d = hVar;
        }

        IllegalArgumentException b(IllegalArgumentException illegalArgumentException) {
            if (!this.f18021c) {
                this.f18021c = true;
                if (this.f18020b.size() != 1 || ((c) this.f18020b.getFirst()).f18016b != null) {
                    StringBuilder sb2 = new StringBuilder(illegalArgumentException.getMessage());
                    Iterator descendingIterator = this.f18020b.descendingIterator();
                    while (descendingIterator.hasNext()) {
                        c cVar = (c) descendingIterator.next();
                        sb2.append("\nfor ");
                        sb2.append(cVar.f18015a);
                        if (cVar.f18016b != null) {
                            sb2.append(' ');
                            sb2.append(cVar.f18016b);
                        }
                    }
                    return new IllegalArgumentException(sb2.toString(), illegalArgumentException);
                }
            }
            return illegalArgumentException;
        }

        void c(boolean z10) {
            this.f18020b.removeLast();
            if (this.f18020b.isEmpty()) {
                w.this.f18009c.remove();
                if (z10) {
                    synchronized (w.this.f18010d) {
                        try {
                            int size = this.f18019a.size();
                            for (int i10 = 0; i10 < size; i10++) {
                                c cVar = (c) this.f18019a.get(i10);
                                h hVar = (h) w.this.f18010d.put(cVar.f18017c, cVar.f18018d);
                                if (hVar != null) {
                                    cVar.f18018d = hVar;
                                    w.this.f18010d.put(cVar.f18017c, hVar);
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
            int size = this.f18019a.size();
            for (int i10 = 0; i10 < size; i10++) {
                c cVar = (c) this.f18019a.get(i10);
                if (cVar.f18017c.equals(obj)) {
                    this.f18020b.add(cVar);
                    h hVar = cVar.f18018d;
                    if (hVar != null) {
                        return hVar;
                    }
                    return cVar;
                }
            }
            c cVar2 = new c(type, str, obj);
            this.f18019a.add(cVar2);
            this.f18020b.add(cVar2);
            return null;
        }
    }

    static {
        ArrayList arrayList = new ArrayList(5);
        f18006e = arrayList;
        arrayList.add(y.f18024a);
        arrayList.add(e.f17899b);
        arrayList.add(v.f18003c);
        arrayList.add(com.squareup.moshi.b.f17879c);
        arrayList.add(x.f18023a);
        arrayList.add(com.squareup.moshi.d.f17892d);
    }

    w(b bVar) {
        int size = bVar.f18013a.size();
        List list = f18006e;
        ArrayList arrayList = new ArrayList(size + list.size());
        arrayList.addAll(bVar.f18013a);
        arrayList.addAll(list);
        this.f18007a = Collections.unmodifiableList(arrayList);
        this.f18008b = bVar.f18014b;
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
        return e(cls, an.c.f1162a);
    }

    public h d(Type type) {
        return e(type, an.c.f1162a);
    }

    public h e(Type type, Set set) {
        return f(type, set, null);
    }

    public h f(Type type, Set set, String str) {
        if (type != null) {
            if (set != null) {
                Type p10 = an.c.p(an.c.a(type));
                Object g10 = g(p10, set);
                synchronized (this.f18010d) {
                    try {
                        h hVar = (h) this.f18010d.get(g10);
                        if (hVar != null) {
                            return hVar;
                        }
                        d dVar = (d) this.f18009c.get();
                        if (dVar == null) {
                            dVar = new d();
                            this.f18009c.set(dVar);
                        }
                        h d10 = dVar.d(p10, str, g10);
                        try {
                            if (d10 != null) {
                                return d10;
                            }
                            try {
                                int size = this.f18007a.size();
                                for (int i10 = 0; i10 < size; i10++) {
                                    h create = ((h.e) this.f18007a.get(i10)).create(p10, set, this);
                                    if (create != null) {
                                        dVar.a(create);
                                        dVar.c(true);
                                        return create;
                                    }
                                }
                                throw new IllegalArgumentException("No JsonAdapter for " + an.c.u(p10, set));
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
            Type p10 = an.c.p(an.c.a(type));
            int indexOf = this.f18007a.indexOf(eVar);
            if (indexOf != -1) {
                int size = this.f18007a.size();
                for (int i10 = indexOf + 1; i10 < size; i10++) {
                    h create = ((h.e) this.f18007a.get(i10)).create(p10, set, this);
                    if (create != null) {
                        return create;
                    }
                }
                throw new IllegalArgumentException("No next JsonAdapter for " + an.c.u(p10, set));
            }
            throw new IllegalArgumentException("Unable to skip past unknown factory " + eVar);
        }
        throw new NullPointerException("annotations == null");
    }
}
