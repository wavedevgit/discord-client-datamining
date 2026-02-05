package ti;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e0 implements d {

    /* renamed from: a  reason: collision with root package name */
    private final Set f50704a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f50705b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f50706c;

    /* renamed from: d  reason: collision with root package name */
    private final Set f50707d;

    /* renamed from: e  reason: collision with root package name */
    private final Set f50708e;

    /* renamed from: f  reason: collision with root package name */
    private final Set f50709f;

    /* renamed from: g  reason: collision with root package name */
    private final d f50710g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static class a implements bj.c {

        /* renamed from: a  reason: collision with root package name */
        private final Set f50711a;

        /* renamed from: b  reason: collision with root package name */
        private final bj.c f50712b;

        public a(Set set, bj.c cVar) {
            this.f50711a = set;
            this.f50712b = cVar;
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
            hashSet.add(d0.b(bj.c.class));
        }
        this.f50704a = Collections.unmodifiableSet(hashSet);
        this.f50705b = Collections.unmodifiableSet(hashSet2);
        this.f50706c = Collections.unmodifiableSet(hashSet3);
        this.f50707d = Collections.unmodifiableSet(hashSet4);
        this.f50708e = Collections.unmodifiableSet(hashSet5);
        this.f50709f = cVar.k();
        this.f50710g = dVar;
    }

    @Override // ti.d
    public Object a(Class cls) {
        if (this.f50704a.contains(d0.b(cls))) {
            Object a10 = this.f50710g.a(cls);
            if (!cls.equals(bj.c.class)) {
                return a10;
            }
            return new a(this.f50709f, (bj.c) a10);
        }
        throw new s(String.format("Attempting to request an undeclared dependency %s.", cls));
    }

    @Override // ti.d
    public ej.b c(d0 d0Var) {
        if (this.f50705b.contains(d0Var)) {
            return this.f50710g.c(d0Var);
        }
        throw new s(String.format("Attempting to request an undeclared dependency Provider<%s>.", d0Var));
    }

    @Override // ti.d
    public Set d(d0 d0Var) {
        if (this.f50707d.contains(d0Var)) {
            return this.f50710g.d(d0Var);
        }
        throw new s(String.format("Attempting to request an undeclared dependency Set<%s>.", d0Var));
    }

    @Override // ti.d
    public ej.b e(Class cls) {
        return c(d0.b(cls));
    }

    @Override // ti.d
    public ej.b f(d0 d0Var) {
        if (this.f50708e.contains(d0Var)) {
            return this.f50710g.f(d0Var);
        }
        throw new s(String.format("Attempting to request an undeclared dependency Provider<Set<%s>>.", d0Var));
    }

    @Override // ti.d
    public Object g(d0 d0Var) {
        if (this.f50704a.contains(d0Var)) {
            return this.f50710g.g(d0Var);
        }
        throw new s(String.format("Attempting to request an undeclared dependency %s.", d0Var));
    }
}
