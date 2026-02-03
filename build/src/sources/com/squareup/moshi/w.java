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
    static final List f17620e;

    /* renamed from: a  reason: collision with root package name */
    private final List f17621a;

    /* renamed from: b  reason: collision with root package name */
    private final int f17622b;

    /* renamed from: c  reason: collision with root package name */
    private final ThreadLocal f17623c = new ThreadLocal();

    /* renamed from: d  reason: collision with root package name */
    private final Map f17624d = new LinkedHashMap();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements h.e {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Type f17625a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ h f17626b;

        a(Type type, h hVar) {
            this.f17625a = type;
            this.f17626b = hVar;
        }

        @Override // com.squareup.moshi.h.e
        public h create(Type type, Set set, w wVar) {
            if (set.isEmpty() && vm.c.w(this.f17625a, type)) {
                return this.f17626b;
            }
            return null;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        final List f17627a = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        int f17628b = 0;

        public b a(h.e eVar) {
            if (eVar != null) {
                List list = this.f17627a;
                int i10 = this.f17628b;
                this.f17628b = i10 + 1;
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
        final Type f17629a;

        /* renamed from: b  reason: collision with root package name */
        final String f17630b;

        /* renamed from: c  reason: collision with root package name */
        final Object f17631c;

        /* renamed from: d  reason: collision with root package name */
        h f17632d;

        c(Type type, String str, Object obj) {
            this.f17629a = type;
            this.f17630b = str;
            this.f17631c = obj;
        }

        @Override // com.squareup.moshi.h
        public Object fromJson(m mVar) {
            h hVar = this.f17632d;
            if (hVar != null) {
                return hVar.fromJson(mVar);
            }
            throw new IllegalStateException("JsonAdapter isn't ready");
        }

        @Override // com.squareup.moshi.h
        public void toJson(t tVar, Object obj) {
            h hVar = this.f17632d;
            if (hVar != null) {
                hVar.toJson(tVar, obj);
                return;
            }
            throw new IllegalStateException("JsonAdapter isn't ready");
        }

        public String toString() {
            h hVar = this.f17632d;
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
        final List f17633a = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        final Deque f17634b = new ArrayDeque();

        /* renamed from: c  reason: collision with root package name */
        boolean f17635c;

        d() {
        }

        void a(h hVar) {
            ((c) this.f17634b.getLast()).f17632d = hVar;
        }

        IllegalArgumentException b(IllegalArgumentException illegalArgumentException) {
            if (!this.f17635c) {
                this.f17635c = true;
                if (this.f17634b.size() != 1 || ((c) this.f17634b.getFirst()).f17630b != null) {
                    StringBuilder sb2 = new StringBuilder(illegalArgumentException.getMessage());
                    Iterator descendingIterator = this.f17634b.descendingIterator();
                    while (descendingIterator.hasNext()) {
                        c cVar = (c) descendingIterator.next();
                        sb2.append("\nfor ");
                        sb2.append(cVar.f17629a);
                        if (cVar.f17630b != null) {
                            sb2.append(' ');
                            sb2.append(cVar.f17630b);
                        }
                    }
                    return new IllegalArgumentException(sb2.toString(), illegalArgumentException);
                }
            }
            return illegalArgumentException;
        }

        void c(boolean z10) {
            this.f17634b.removeLast();
            if (this.f17634b.isEmpty()) {
                w.this.f17623c.remove();
                if (z10) {
                    synchronized (w.this.f17624d) {
                        try {
                            int size = this.f17633a.size();
                            for (int i10 = 0; i10 < size; i10++) {
                                c cVar = (c) this.f17633a.get(i10);
                                h hVar = (h) w.this.f17624d.put(cVar.f17631c, cVar.f17632d);
                                if (hVar != null) {
                                    cVar.f17632d = hVar;
                                    w.this.f17624d.put(cVar.f17631c, hVar);
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
            int size = this.f17633a.size();
            for (int i10 = 0; i10 < size; i10++) {
                c cVar = (c) this.f17633a.get(i10);
                if (cVar.f17631c.equals(obj)) {
                    this.f17634b.add(cVar);
                    h hVar = cVar.f17632d;
                    if (hVar != null) {
                        return hVar;
                    }
                    return cVar;
                }
            }
            c cVar2 = new c(type, str, obj);
            this.f17633a.add(cVar2);
            this.f17634b.add(cVar2);
            return null;
        }
    }

    static {
        ArrayList arrayList = new ArrayList(5);
        f17620e = arrayList;
        arrayList.add(y.f17638a);
        arrayList.add(e.f17513b);
        arrayList.add(v.f17617c);
        arrayList.add(com.squareup.moshi.b.f17493c);
        arrayList.add(x.f17637a);
        arrayList.add(com.squareup.moshi.d.f17506d);
    }

    w(b bVar) {
        int size = bVar.f17627a.size();
        List list = f17620e;
        ArrayList arrayList = new ArrayList(size + list.size());
        arrayList.addAll(bVar.f17627a);
        arrayList.addAll(list);
        this.f17621a = Collections.unmodifiableList(arrayList);
        this.f17622b = bVar.f17628b;
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
        return e(cls, vm.c.f51689a);
    }

    public h d(Type type) {
        return e(type, vm.c.f51689a);
    }

    public h e(Type type, Set set) {
        return f(type, set, null);
    }

    public h f(Type type, Set set, String str) {
        if (type != null) {
            if (set != null) {
                Type p10 = vm.c.p(vm.c.a(type));
                Object g10 = g(p10, set);
                synchronized (this.f17624d) {
                    try {
                        h hVar = (h) this.f17624d.get(g10);
                        if (hVar != null) {
                            return hVar;
                        }
                        d dVar = (d) this.f17623c.get();
                        if (dVar == null) {
                            dVar = new d();
                            this.f17623c.set(dVar);
                        }
                        h d10 = dVar.d(p10, str, g10);
                        try {
                            if (d10 != null) {
                                return d10;
                            }
                            try {
                                int size = this.f17621a.size();
                                for (int i10 = 0; i10 < size; i10++) {
                                    h create = ((h.e) this.f17621a.get(i10)).create(p10, set, this);
                                    if (create != null) {
                                        dVar.a(create);
                                        dVar.c(true);
                                        return create;
                                    }
                                }
                                throw new IllegalArgumentException("No JsonAdapter for " + vm.c.u(p10, set));
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
            Type p10 = vm.c.p(vm.c.a(type));
            int indexOf = this.f17621a.indexOf(eVar);
            if (indexOf != -1) {
                int size = this.f17621a.size();
                for (int i10 = indexOf + 1; i10 < size; i10++) {
                    h create = ((h.e) this.f17621a.get(i10)).create(p10, set, this);
                    if (create != null) {
                        return create;
                    }
                }
                throw new IllegalArgumentException("No next JsonAdapter for " + vm.c.u(p10, set));
            }
            throw new IllegalArgumentException("Unable to skip past unknown factory " + eVar);
        }
        throw new NullPointerException("annotations == null");
    }
}
