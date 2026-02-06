package ui;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e0 implements d {

    /* renamed from: a  reason: collision with root package name */
    private final Set f51512a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f51513b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f51514c;

    /* renamed from: d  reason: collision with root package name */
    private final Set f51515d;

    /* renamed from: e  reason: collision with root package name */
    private final Set f51516e;

    /* renamed from: f  reason: collision with root package name */
    private final Set f51517f;

    /* renamed from: g  reason: collision with root package name */
    private final d f51518g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static class a implements cj.c {

        /* renamed from: a  reason: collision with root package name */
        private final Set f51519a;

        /* renamed from: b  reason: collision with root package name */
        private final cj.c f51520b;

        public a(Set set, cj.c cVar) {
            this.f51519a = set;
            this.f51520b = cVar;
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
            hashSet.add(d0.b(cj.c.class));
        }
        this.f51512a = Collections.unmodifiableSet(hashSet);
        this.f51513b = Collections.unmodifiableSet(hashSet2);
        this.f51514c = Collections.unmodifiableSet(hashSet3);
        this.f51515d = Collections.unmodifiableSet(hashSet4);
        this.f51516e = Collections.unmodifiableSet(hashSet5);
        this.f51517f = cVar.k();
        this.f51518g = dVar;
    }

    @Override // ui.d
    public Object a(Class cls) {
        if (this.f51512a.contains(d0.b(cls))) {
            Object a10 = this.f51518g.a(cls);
            if (!cls.equals(cj.c.class)) {
                return a10;
            }
            return new a(this.f51517f, (cj.c) a10);
        }
        throw new s(String.format("Attempting to request an undeclared dependency %s.", cls));
    }

    @Override // ui.d
    public fj.b c(d0 d0Var) {
        if (this.f51516e.contains(d0Var)) {
            return this.f51518g.c(d0Var);
        }
        throw new s(String.format("Attempting to request an undeclared dependency Provider<Set<%s>>.", d0Var));
    }

    @Override // ui.d
    public Set d(d0 d0Var) {
        if (this.f51515d.contains(d0Var)) {
            return this.f51518g.d(d0Var);
        }
        throw new s(String.format("Attempting to request an undeclared dependency Set<%s>.", d0Var));
    }

    @Override // ui.d
    public Object e(d0 d0Var) {
        if (this.f51512a.contains(d0Var)) {
            return this.f51518g.e(d0Var);
        }
        throw new s(String.format("Attempting to request an undeclared dependency %s.", d0Var));
    }

    @Override // ui.d
    public fj.b f(d0 d0Var) {
        if (this.f51513b.contains(d0Var)) {
            return this.f51518g.f(d0Var);
        }
        throw new s(String.format("Attempting to request an undeclared dependency Provider<%s>.", d0Var));
    }

    @Override // ui.d
    public fj.b g(Class cls) {
        return f(d0.b(cls));
    }
}
