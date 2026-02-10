package vi;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e0 implements d {

    /* renamed from: a  reason: collision with root package name */
    private final Set f52420a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f52421b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f52422c;

    /* renamed from: d  reason: collision with root package name */
    private final Set f52423d;

    /* renamed from: e  reason: collision with root package name */
    private final Set f52424e;

    /* renamed from: f  reason: collision with root package name */
    private final Set f52425f;

    /* renamed from: g  reason: collision with root package name */
    private final d f52426g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static class a implements dj.c {

        /* renamed from: a  reason: collision with root package name */
        private final Set f52427a;

        /* renamed from: b  reason: collision with root package name */
        private final dj.c f52428b;

        public a(Set set, dj.c cVar) {
            this.f52427a = set;
            this.f52428b = cVar;
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
            hashSet.add(d0.b(dj.c.class));
        }
        this.f52420a = Collections.unmodifiableSet(hashSet);
        this.f52421b = Collections.unmodifiableSet(hashSet2);
        this.f52422c = Collections.unmodifiableSet(hashSet3);
        this.f52423d = Collections.unmodifiableSet(hashSet4);
        this.f52424e = Collections.unmodifiableSet(hashSet5);
        this.f52425f = cVar.k();
        this.f52426g = dVar;
    }

    @Override // vi.d
    public Object a(Class cls) {
        if (this.f52420a.contains(d0.b(cls))) {
            Object a10 = this.f52426g.a(cls);
            if (!cls.equals(dj.c.class)) {
                return a10;
            }
            return new a(this.f52425f, (dj.c) a10);
        }
        throw new s(String.format("Attempting to request an undeclared dependency %s.", cls));
    }

    @Override // vi.d
    public gj.b b(d0 d0Var) {
        if (this.f52421b.contains(d0Var)) {
            return this.f52426g.b(d0Var);
        }
        throw new s(String.format("Attempting to request an undeclared dependency Provider<%s>.", d0Var));
    }

    @Override // vi.d
    public gj.b d(d0 d0Var) {
        if (this.f52424e.contains(d0Var)) {
            return this.f52426g.d(d0Var);
        }
        throw new s(String.format("Attempting to request an undeclared dependency Provider<Set<%s>>.", d0Var));
    }

    @Override // vi.d
    public gj.b e(Class cls) {
        return b(d0.b(cls));
    }

    @Override // vi.d
    public Object f(d0 d0Var) {
        if (this.f52420a.contains(d0Var)) {
            return this.f52426g.f(d0Var);
        }
        throw new s(String.format("Attempting to request an undeclared dependency %s.", d0Var));
    }

    @Override // vi.d
    public Set g(d0 d0Var) {
        if (this.f52423d.contains(d0Var)) {
            return this.f52426g.g(d0Var);
        }
        throw new s(String.format("Attempting to request an undeclared dependency Set<%s>.", d0Var));
    }
}
