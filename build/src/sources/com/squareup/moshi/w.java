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
    static final List f18638e;

    /* renamed from: a  reason: collision with root package name */
    private final List f18639a;

    /* renamed from: b  reason: collision with root package name */
    private final int f18640b;

    /* renamed from: c  reason: collision with root package name */
    private final ThreadLocal f18641c = new ThreadLocal();

    /* renamed from: d  reason: collision with root package name */
    private final Map f18642d = new LinkedHashMap();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements h.e {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Type f18643a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ h f18644b;

        a(Type type, h hVar) {
            this.f18643a = type;
            this.f18644b = hVar;
        }

        @Override // com.squareup.moshi.h.e
        public h create(Type type, Set set, w wVar) {
            if (set.isEmpty() && tm.c.w(this.f18643a, type)) {
                return this.f18644b;
            }
            return null;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        final List f18645a = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        int f18646b = 0;

        public b a(h.e eVar) {
            if (eVar != null) {
                List list = this.f18645a;
                int i10 = this.f18646b;
                this.f18646b = i10 + 1;
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
        final Type f18647a;

        /* renamed from: b  reason: collision with root package name */
        final String f18648b;

        /* renamed from: c  reason: collision with root package name */
        final Object f18649c;

        /* renamed from: d  reason: collision with root package name */
        h f18650d;

        c(Type type, String str, Object obj) {
            this.f18647a = type;
            this.f18648b = str;
            this.f18649c = obj;
        }

        @Override // com.squareup.moshi.h
        public Object fromJson(m mVar) {
            h hVar = this.f18650d;
            if (hVar != null) {
                return hVar.fromJson(mVar);
            }
            throw new IllegalStateException("JsonAdapter isn't ready");
        }

        @Override // com.squareup.moshi.h
        public void toJson(t tVar, Object obj) {
            h hVar = this.f18650d;
            if (hVar != null) {
                hVar.toJson(tVar, obj);
                return;
            }
            throw new IllegalStateException("JsonAdapter isn't ready");
        }

        public String toString() {
            h hVar = this.f18650d;
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
        final List f18651a = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        final Deque f18652b = new ArrayDeque();

        /* renamed from: c  reason: collision with root package name */
        boolean f18653c;

        d() {
        }

        void a(h hVar) {
            ((c) this.f18652b.getLast()).f18650d = hVar;
        }

        IllegalArgumentException b(IllegalArgumentException illegalArgumentException) {
            if (!this.f18653c) {
                this.f18653c = true;
                if (this.f18652b.size() != 1 || ((c) this.f18652b.getFirst()).f18648b != null) {
                    StringBuilder sb2 = new StringBuilder(illegalArgumentException.getMessage());
                    Iterator descendingIterator = this.f18652b.descendingIterator();
                    while (descendingIterator.hasNext()) {
                        c cVar = (c) descendingIterator.next();
                        sb2.append("\nfor ");
                        sb2.append(cVar.f18647a);
                        if (cVar.f18648b != null) {
                            sb2.append(' ');
                            sb2.append(cVar.f18648b);
                        }
                    }
                    return new IllegalArgumentException(sb2.toString(), illegalArgumentException);
                }
            }
            return illegalArgumentException;
        }

        void c(boolean z10) {
            this.f18652b.removeLast();
            if (this.f18652b.isEmpty()) {
                w.this.f18641c.remove();
                if (z10) {
                    synchronized (w.this.f18642d) {
                        try {
                            int size = this.f18651a.size();
                            for (int i10 = 0; i10 < size; i10++) {
                                c cVar = (c) this.f18651a.get(i10);
                                h hVar = (h) w.this.f18642d.put(cVar.f18649c, cVar.f18650d);
                                if (hVar != null) {
                                    cVar.f18650d = hVar;
                                    w.this.f18642d.put(cVar.f18649c, hVar);
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
            int size = this.f18651a.size();
            for (int i10 = 0; i10 < size; i10++) {
                c cVar = (c) this.f18651a.get(i10);
                if (cVar.f18649c.equals(obj)) {
                    this.f18652b.add(cVar);
                    h hVar = cVar.f18650d;
                    if (hVar != null) {
                        return hVar;
                    }
                    return cVar;
                }
            }
            c cVar2 = new c(type, str, obj);
            this.f18651a.add(cVar2);
            this.f18652b.add(cVar2);
            return null;
        }
    }

    static {
        ArrayList arrayList = new ArrayList(5);
        f18638e = arrayList;
        arrayList.add(y.f18656a);
        arrayList.add(e.f18531b);
        arrayList.add(v.f18635c);
        arrayList.add(com.squareup.moshi.b.f18511c);
        arrayList.add(x.f18655a);
        arrayList.add(com.squareup.moshi.d.f18524d);
    }

    w(b bVar) {
        int size = bVar.f18645a.size();
        List list = f18638e;
        ArrayList arrayList = new ArrayList(size + list.size());
        arrayList.addAll(bVar.f18645a);
        arrayList.addAll(list);
        this.f18639a = Collections.unmodifiableList(arrayList);
        this.f18640b = bVar.f18646b;
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
        return e(cls, tm.c.f49933a);
    }

    public h d(Type type) {
        return e(type, tm.c.f49933a);
    }

    public h e(Type type, Set set) {
        return f(type, set, null);
    }

    public h f(Type type, Set set, String str) {
        if (type != null) {
            if (set != null) {
                Type p10 = tm.c.p(tm.c.a(type));
                Object g10 = g(p10, set);
                synchronized (this.f18642d) {
                    try {
                        h hVar = (h) this.f18642d.get(g10);
                        if (hVar != null) {
                            return hVar;
                        }
                        d dVar = (d) this.f18641c.get();
                        if (dVar == null) {
                            dVar = new d();
                            this.f18641c.set(dVar);
                        }
                        h d10 = dVar.d(p10, str, g10);
                        try {
                            if (d10 != null) {
                                return d10;
                            }
                            try {
                                int size = this.f18639a.size();
                                for (int i10 = 0; i10 < size; i10++) {
                                    h create = ((h.e) this.f18639a.get(i10)).create(p10, set, this);
                                    if (create != null) {
                                        dVar.a(create);
                                        dVar.c(true);
                                        return create;
                                    }
                                }
                                throw new IllegalArgumentException("No JsonAdapter for " + tm.c.u(p10, set));
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
            Type p10 = tm.c.p(tm.c.a(type));
            int indexOf = this.f18639a.indexOf(eVar);
            if (indexOf != -1) {
                int size = this.f18639a.size();
                for (int i10 = indexOf + 1; i10 < size; i10++) {
                    h create = ((h.e) this.f18639a.get(i10)).create(p10, set, this);
                    if (create != null) {
                        return create;
                    }
                }
                throw new IllegalArgumentException("No next JsonAdapter for " + tm.c.u(p10, set));
            }
            throw new IllegalArgumentException("Unable to skip past unknown factory " + eVar);
        }
        throw new NullPointerException("annotations == null");
    }
}
