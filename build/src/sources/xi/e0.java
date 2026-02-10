package xi;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e0 implements d {

    /* renamed from: a  reason: collision with root package name */
    private final Set f54816a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f54817b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f54818c;

    /* renamed from: d  reason: collision with root package name */
    private final Set f54819d;

    /* renamed from: e  reason: collision with root package name */
    private final Set f54820e;

    /* renamed from: f  reason: collision with root package name */
    private final Set f54821f;

    /* renamed from: g  reason: collision with root package name */
    private final d f54822g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static class a implements fj.c {

        /* renamed from: a  reason: collision with root package name */
        private final Set f54823a;

        /* renamed from: b  reason: collision with root package name */
        private final fj.c f54824b;

        public a(Set set, fj.c cVar) {
            this.f54823a = set;
            this.f54824b = cVar;
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
        this.f54816a = Collections.unmodifiableSet(hashSet);
        this.f54817b = Collections.unmodifiableSet(hashSet2);
        this.f54818c = Collections.unmodifiableSet(hashSet3);
        this.f54819d = Collections.unmodifiableSet(hashSet4);
        this.f54820e = Collections.unmodifiableSet(hashSet5);
        this.f54821f = cVar.k();
        this.f54822g = dVar;
    }

    @Override // xi.d
    public Object a(Class cls) {
        if (this.f54816a.contains(d0.b(cls))) {
            Object a10 = this.f54822g.a(cls);
            if (!cls.equals(fj.c.class)) {
                return a10;
            }
            return new a(this.f54821f, (fj.c) a10);
        }
        throw new s(String.format("Attempting to request an undeclared dependency %s.", cls));
    }

    @Override // xi.d
    public Set b(d0 d0Var) {
        if (this.f54819d.contains(d0Var)) {
            return this.f54822g.b(d0Var);
        }
        throw new s(String.format("Attempting to request an undeclared dependency Set<%s>.", d0Var));
    }

    @Override // xi.d
    public ij.b c(d0 d0Var) {
        if (this.f54817b.contains(d0Var)) {
            return this.f54822g.c(d0Var);
        }
        throw new s(String.format("Attempting to request an undeclared dependency Provider<%s>.", d0Var));
    }

    @Override // xi.d
    public ij.b d(d0 d0Var) {
        if (this.f54820e.contains(d0Var)) {
            return this.f54822g.d(d0Var);
        }
        throw new s(String.format("Attempting to request an undeclared dependency Provider<Set<%s>>.", d0Var));
    }

    @Override // xi.d
    public Object f(d0 d0Var) {
        if (this.f54816a.contains(d0Var)) {
            return this.f54822g.f(d0Var);
        }
        throw new s(String.format("Attempting to request an undeclared dependency %s.", d0Var));
    }

    @Override // xi.d
    public ij.b g(Class cls) {
        return c(d0.b(cls));
    }
}
