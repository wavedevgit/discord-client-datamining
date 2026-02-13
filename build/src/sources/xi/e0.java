package xi;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e0 implements d {

    /* renamed from: a  reason: collision with root package name */
    private final Set f55385a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f55386b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f55387c;

    /* renamed from: d  reason: collision with root package name */
    private final Set f55388d;

    /* renamed from: e  reason: collision with root package name */
    private final Set f55389e;

    /* renamed from: f  reason: collision with root package name */
    private final Set f55390f;

    /* renamed from: g  reason: collision with root package name */
    private final d f55391g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static class a implements fj.c {

        /* renamed from: a  reason: collision with root package name */
        private final Set f55392a;

        /* renamed from: b  reason: collision with root package name */
        private final fj.c f55393b;

        public a(Set set, fj.c cVar) {
            this.f55392a = set;
            this.f55393b = cVar;
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
            hashSet.add(d0.b(fj.c.class));
        }
        this.f55385a = Collections.unmodifiableSet(hashSet);
        this.f55386b = Collections.unmodifiableSet(hashSet2);
        this.f55387c = Collections.unmodifiableSet(hashSet3);
        this.f55388d = Collections.unmodifiableSet(hashSet4);
        this.f55389e = Collections.unmodifiableSet(hashSet5);
        this.f55390f = cVar.k();
        this.f55391g = dVar;
    }

    @Override // xi.d
    public Object a(Class cls) {
        if (this.f55385a.contains(d0.b(cls))) {
            Object a10 = this.f55391g.a(cls);
            if (!cls.equals(fj.c.class)) {
                return a10;
            }
            return new a(this.f55390f, (fj.c) a10);
        }
        throw new s(String.format("Attempting to request an undeclared dependency %s.", cls));
    }

    @Override // xi.d
    public Set b(d0 d0Var) {
        if (this.f55388d.contains(d0Var)) {
            return this.f55391g.b(d0Var);
        }
        throw new s(String.format("Attempting to request an undeclared dependency Set<%s>.", d0Var));
    }

    @Override // xi.d
    public ij.b c(d0 d0Var) {
        if (this.f55386b.contains(d0Var)) {
            return this.f55391g.c(d0Var);
        }
        throw new s(String.format("Attempting to request an undeclared dependency Provider<%s>.", d0Var));
    }

    @Override // xi.d
    public ij.b d(d0 d0Var) {
        if (this.f55389e.contains(d0Var)) {
            return this.f55391g.d(d0Var);
        }
        throw new s(String.format("Attempting to request an undeclared dependency Provider<Set<%s>>.", d0Var));
    }

    @Override // xi.d
    public Object f(d0 d0Var) {
        if (this.f55385a.contains(d0Var)) {
            return this.f55391g.f(d0Var);
        }
        throw new s(String.format("Attempting to request an undeclared dependency %s.", d0Var));
    }

    @Override // xi.d
    public ij.b g(Class cls) {
        return c(d0.b(cls));
    }
}
