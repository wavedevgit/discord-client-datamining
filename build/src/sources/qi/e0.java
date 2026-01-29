package qi;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e0 implements d {

    /* renamed from: a  reason: collision with root package name */
    private final Set f47419a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f47420b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f47421c;

    /* renamed from: d  reason: collision with root package name */
    private final Set f47422d;

    /* renamed from: e  reason: collision with root package name */
    private final Set f47423e;

    /* renamed from: f  reason: collision with root package name */
    private final Set f47424f;

    /* renamed from: g  reason: collision with root package name */
    private final d f47425g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static class a implements yi.c {

        /* renamed from: a  reason: collision with root package name */
        private final Set f47426a;

        /* renamed from: b  reason: collision with root package name */
        private final yi.c f47427b;

        public a(Set set, yi.c cVar) {
            this.f47426a = set;
            this.f47427b = cVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public e0(c cVar, d dVar) {
        HashSet hashSet = new HashSet();
        HashSet hashSet2 = new HashSet();
        HashSet hashSet3 = new HashSet();
        HashSet hashSet4 = new HashSet();
        HashSet hashSet5 = new HashSet();
        for (q qVar : cVar.g()) {
            if (qVar.d()) {
                if (qVar.f()) {
                    hashSet4.add(qVar.b());
                } else {
                    hashSet.add(qVar.b());
                }
            } else if (qVar.c()) {
                hashSet3.add(qVar.b());
            } else if (qVar.f()) {
                hashSet5.add(qVar.b());
            } else {
                hashSet2.add(qVar.b());
            }
        }
        if (!cVar.k().isEmpty()) {
            hashSet.add(d0.b(yi.c.class));
        }
        this.f47419a = Collections.unmodifiableSet(hashSet);
        this.f47420b = Collections.unmodifiableSet(hashSet2);
        this.f47421c = Collections.unmodifiableSet(hashSet3);
        this.f47422d = Collections.unmodifiableSet(hashSet4);
        this.f47423e = Collections.unmodifiableSet(hashSet5);
        this.f47424f = cVar.k();
        this.f47425g = dVar;
    }

    @Override // qi.d
    public Object a(Class cls) {
        if (this.f47419a.contains(d0.b(cls))) {
            Object a10 = this.f47425g.a(cls);
            if (!cls.equals(yi.c.class)) {
                return a10;
            }
            return new a(this.f47424f, (yi.c) a10);
        }
        throw new s(String.format("Attempting to request an undeclared dependency %s.", cls));
    }

    @Override // qi.d
    public bj.b c(Class cls) {
        return g(d0.b(cls));
    }

    @Override // qi.d
    public Object d(d0 d0Var) {
        if (this.f47419a.contains(d0Var)) {
            return this.f47425g.d(d0Var);
        }
        throw new s(String.format("Attempting to request an undeclared dependency %s.", d0Var));
    }

    @Override // qi.d
    public bj.b e(d0 d0Var) {
        if (this.f47423e.contains(d0Var)) {
            return this.f47425g.e(d0Var);
        }
        throw new s(String.format("Attempting to request an undeclared dependency Provider<Set<%s>>.", d0Var));
    }

    @Override // qi.d
    public Set f(d0 d0Var) {
        if (this.f47422d.contains(d0Var)) {
            return this.f47425g.f(d0Var);
        }
        throw new s(String.format("Attempting to request an undeclared dependency Set<%s>.", d0Var));
    }

    @Override // qi.d
    public bj.b g(d0 d0Var) {
        if (this.f47420b.contains(d0Var)) {
            return this.f47425g.g(d0Var);
        }
        throw new s(String.format("Attempting to request an undeclared dependency Provider<%s>.", d0Var));
    }
}
