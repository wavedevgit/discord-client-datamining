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
    static final List f18146e;

    /* renamed from: a  reason: collision with root package name */
    private final List f18147a;

    /* renamed from: b  reason: collision with root package name */
    private final int f18148b;

    /* renamed from: c  reason: collision with root package name */
    private final ThreadLocal f18149c = new ThreadLocal();

    /* renamed from: d  reason: collision with root package name */
    private final Map f18150d = new LinkedHashMap();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements h.e {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Type f18151a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ h f18152b;

        a(Type type, h hVar) {
            this.f18151a = type;
            this.f18152b = hVar;
        }

        @Override // com.squareup.moshi.h.e
        public h create(Type type, Set set, w wVar) {
            if (set.isEmpty() && bn.c.w(this.f18151a, type)) {
                return this.f18152b;
            }
            return null;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        final List f18153a = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        int f18154b = 0;

        public b a(h.e eVar) {
            if (eVar != null) {
                List list = this.f18153a;
                int i10 = this.f18154b;
                this.f18154b = i10 + 1;
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
        final Type f18155a;

        /* renamed from: b  reason: collision with root package name */
        final String f18156b;

        /* renamed from: c  reason: collision with root package name */
        final Object f18157c;

        /* renamed from: d  reason: collision with root package name */
        h f18158d;

        c(Type type, String str, Object obj) {
            this.f18155a = type;
            this.f18156b = str;
            this.f18157c = obj;
        }

        @Override // com.squareup.moshi.h
        public Object fromJson(m mVar) {
            h hVar = this.f18158d;
            if (hVar != null) {
                return hVar.fromJson(mVar);
            }
            throw new IllegalStateException("JsonAdapter isn't ready");
        }

        @Override // com.squareup.moshi.h
        public void toJson(t tVar, Object obj) {
            h hVar = this.f18158d;
            if (hVar != null) {
                hVar.toJson(tVar, obj);
                return;
            }
            throw new IllegalStateException("JsonAdapter isn't ready");
        }

        public String toString() {
            h hVar = this.f18158d;
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
        final List f18159a = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        final Deque f18160b = new ArrayDeque();

        /* renamed from: c  reason: collision with root package name */
        boolean f18161c;

        d() {
        }

        void a(h hVar) {
            ((c) this.f18160b.getLast()).f18158d = hVar;
        }

        IllegalArgumentException b(IllegalArgumentException illegalArgumentException) {
            if (!this.f18161c) {
                this.f18161c = true;
                if (this.f18160b.size() != 1 || ((c) this.f18160b.getFirst()).f18156b != null) {
                    StringBuilder sb2 = new StringBuilder(illegalArgumentException.getMessage());
                    Iterator descendingIterator = this.f18160b.descendingIterator();
                    while (descendingIterator.hasNext()) {
                        c cVar = (c) descendingIterator.next();
                        sb2.append("\nfor ");
                        sb2.append(cVar.f18155a);
                        if (cVar.f18156b != null) {
                            sb2.append(' ');
                            sb2.append(cVar.f18156b);
                        }
                    }
                    return new IllegalArgumentException(sb2.toString(), illegalArgumentException);
                }
            }
            return illegalArgumentException;
        }

        void c(boolean z10) {
            this.f18160b.removeLast();
            if (this.f18160b.isEmpty()) {
                w.this.f18149c.remove();
                if (z10) {
                    synchronized (w.this.f18150d) {
                        try {
                            int size = this.f18159a.size();
                            for (int i10 = 0; i10 < size; i10++) {
                                c cVar = (c) this.f18159a.get(i10);
                                h hVar = (h) w.this.f18150d.put(cVar.f18157c, cVar.f18158d);
                                if (hVar != null) {
                                    cVar.f18158d = hVar;
                                    w.this.f18150d.put(cVar.f18157c, hVar);
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
            int size = this.f18159a.size();
            for (int i10 = 0; i10 < size; i10++) {
                c cVar = (c) this.f18159a.get(i10);
                if (cVar.f18157c.equals(obj)) {
                    this.f18160b.add(cVar);
                    h hVar = cVar.f18158d;
                    if (hVar != null) {
                        return hVar;
                    }
                    return cVar;
                }
            }
            c cVar2 = new c(type, str, obj);
            this.f18159a.add(cVar2);
            this.f18160b.add(cVar2);
            return null;
        }
    }

    static {
        ArrayList arrayList = new ArrayList(5);
        f18146e = arrayList;
        arrayList.add(y.f18164a);
        arrayList.add(e.f18039b);
        arrayList.add(v.f18143c);
        arrayList.add(com.squareup.moshi.b.f18019c);
        arrayList.add(x.f18163a);
        arrayList.add(com.squareup.moshi.d.f18032d);
    }

    w(b bVar) {
        int size = bVar.f18153a.size();
        List list = f18146e;
        ArrayList arrayList = new ArrayList(size + list.size());
        arrayList.addAll(bVar.f18153a);
        arrayList.addAll(list);
        this.f18147a = Collections.unmodifiableList(arrayList);
        this.f18148b = bVar.f18154b;
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
        return e(cls, bn.c.f7150a);
    }

    public h d(Type type) {
        return e(type, bn.c.f7150a);
    }

    public h e(Type type, Set set) {
        return f(type, set, null);
    }

    public h f(Type type, Set set, String str) {
        if (type != null) {
            if (set != null) {
                Type p10 = bn.c.p(bn.c.a(type));
                Object g10 = g(p10, set);
                synchronized (this.f18150d) {
                    try {
                        h hVar = (h) this.f18150d.get(g10);
                        if (hVar != null) {
                            return hVar;
                        }
                        d dVar = (d) this.f18149c.get();
                        if (dVar == null) {
                            dVar = new d();
                            this.f18149c.set(dVar);
                        }
                        h d10 = dVar.d(p10, str, g10);
                        try {
                            if (d10 != null) {
                                return d10;
                            }
                            try {
                                int size = this.f18147a.size();
                                for (int i10 = 0; i10 < size; i10++) {
                                    h create = ((h.e) this.f18147a.get(i10)).create(p10, set, this);
                                    if (create != null) {
                                        dVar.a(create);
                                        dVar.c(true);
                                        return create;
                                    }
                                }
                                throw new IllegalArgumentException("No JsonAdapter for " + bn.c.u(p10, set));
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
            Type p10 = bn.c.p(bn.c.a(type));
            int indexOf = this.f18147a.indexOf(eVar);
            if (indexOf != -1) {
                int size = this.f18147a.size();
                for (int i10 = indexOf + 1; i10 < size; i10++) {
                    h create = ((h.e) this.f18147a.get(i10)).create(p10, set, this);
                    if (create != null) {
                        return create;
                    }
                }
                throw new IllegalArgumentException("No next JsonAdapter for " + bn.c.u(p10, set));
            }
            throw new IllegalArgumentException("Unable to skip past unknown factory " + eVar);
        }
        throw new NullPointerException("annotations == null");
    }
}
