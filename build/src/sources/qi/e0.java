package qi;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e0 implements d {

    /* renamed from: a  reason: collision with root package name */
    private final Set f47690a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f47691b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f47692c;

    /* renamed from: d  reason: collision with root package name */
    private final Set f47693d;

    /* renamed from: e  reason: collision with root package name */
    private final Set f47694e;

    /* renamed from: f  reason: collision with root package name */
    private final Set f47695f;

    /* renamed from: g  reason: collision with root package name */
    private final d f47696g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static class a implements yi.c {

        /* renamed from: a  reason: collision with root package name */
        private final Set f47697a;

        /* renamed from: b  reason: collision with root package name */
        private final yi.c f47698b;

        public a(Set set, yi.c cVar) {
            this.f47697a = set;
            this.f47698b = cVar;
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
        this.f47690a = Collections.unmodifiableSet(hashSet);
        this.f47691b = Collections.unmodifiableSet(hashSet2);
        this.f47692c = Collections.unmodifiableSet(hashSet3);
        this.f47693d = Collections.unmodifiableSet(hashSet4);
        this.f47694e = Collections.unmodifiableSet(hashSet5);
        this.f47695f = cVar.k();
        this.f47696g = dVar;
    }

    @Override // qi.d
    public Object a(Class cls) {
        if (this.f47690a.contains(d0.b(cls))) {
            Object a10 = this.f47696g.a(cls);
            if (!cls.equals(yi.c.class)) {
                return a10;
            }
            return new a(this.f47695f, (yi.c) a10);
        }
        throw new s(String.format("Attempting to request an undeclared dependency %s.", cls));
    }

    @Override // qi.d
    public bj.b c(Class cls) {
        return g(d0.b(cls));
    }

    @Override // qi.d
    public Object d(d0 d0Var) {
        if (this.f47690a.contains(d0Var)) {
            return this.f47696g.d(d0Var);
        }
        throw new s(String.format("Attempting to request an undeclared dependency %s.", d0Var));
    }

    @Override // qi.d
    public bj.b e(d0 d0Var) {
        if (this.f47694e.contains(d0Var)) {
            return this.f47696g.e(d0Var);
        }
        throw new s(String.format("Attempting to request an undeclared dependency Provider<Set<%s>>.", d0Var));
    }

    @Override // qi.d
    public Set f(d0 d0Var) {
        if (this.f47693d.contains(d0Var)) {
            return this.f47696g.f(d0Var);
        }
        throw new s(String.format("Attempting to request an undeclared dependency Set<%s>.", d0Var));
    }

    @Override // qi.d
    public bj.b g(d0 d0Var) {
        if (this.f47691b.contains(d0Var)) {
            return this.f47696g.g(d0Var);
        }
        throw new s(String.format("Attempting to request an undeclared dependency Provider<%s>.", d0Var));
    }
}
