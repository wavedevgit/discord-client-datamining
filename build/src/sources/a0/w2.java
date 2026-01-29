package a0;

import a0.i2;
import a0.w2;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class w2 {

    /* renamed from: a  reason: collision with root package name */
    private final String f305a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f306b = new LinkedHashMap();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        boolean a(b bVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final i2 f307a;

        /* renamed from: b  reason: collision with root package name */
        private final x2 f308b;

        /* renamed from: c  reason: collision with root package name */
        private final m2 f309c;

        /* renamed from: d  reason: collision with root package name */
        private final List f310d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f311e = false;

        /* renamed from: f  reason: collision with root package name */
        private boolean f312f = false;

        b(i2 i2Var, x2 x2Var, m2 m2Var, List list) {
            this.f307a = i2Var;
            this.f308b = x2Var;
            this.f309c = m2Var;
            this.f310d = list;
        }

        boolean a() {
            return this.f312f;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public boolean b() {
            return this.f311e;
        }

        public List c() {
            return this.f310d;
        }

        public i2 d() {
            return this.f307a;
        }

        public m2 e() {
            return this.f309c;
        }

        public x2 f() {
            return this.f308b;
        }

        void g(boolean z10) {
            this.f312f = z10;
        }

        void h(boolean z10) {
            this.f311e = z10;
        }

        public String toString() {
            return "UseCaseAttachInfo{mSessionConfig=" + this.f307a + ", mUseCaseConfig=" + this.f308b + ", mStreamSpec=" + this.f309c + ", mCaptureTypes=" + this.f310d + ", mAttached=" + this.f311e + ", mActive=" + this.f312f + '}';
        }
    }

    public w2(String str) {
        this.f305a = str;
    }

    public static /* synthetic */ boolean a(b bVar) {
        if (bVar.a() && bVar.b()) {
            return true;
        }
        return false;
    }

    private b k(String str, i2 i2Var, x2 x2Var, m2 m2Var, List list) {
        b bVar = (b) this.f306b.get(str);
        if (bVar == null) {
            b bVar2 = new b(i2Var, x2Var, m2Var, list);
            this.f306b.put(str, bVar2);
            return bVar2;
        }
        return bVar;
    }

    private Collection l(a aVar) {
        ArrayList arrayList = new ArrayList();
        for (Map.Entry entry : this.f306b.entrySet()) {
            if (aVar == null || aVar.a((b) entry.getValue())) {
                arrayList.add(((b) entry.getValue()).d());
            }
        }
        return arrayList;
    }

    private Collection m(a aVar) {
        ArrayList arrayList = new ArrayList();
        for (Map.Entry entry : this.f306b.entrySet()) {
            if (aVar == null || aVar.a((b) entry.getValue())) {
                arrayList.add(((b) entry.getValue()).f());
            }
        }
        return arrayList;
    }

    private Collection n(a aVar) {
        ArrayList arrayList = new ArrayList();
        for (Map.Entry entry : this.f306b.entrySet()) {
            if (aVar == null || aVar.a((b) entry.getValue())) {
                arrayList.add((b) entry.getValue());
            }
        }
        return arrayList;
    }

    public i2.h e() {
        i2.h hVar = new i2.h();
        ArrayList arrayList = new ArrayList();
        for (Map.Entry entry : this.f306b.entrySet()) {
            b bVar = (b) entry.getValue();
            if (bVar.a() && bVar.b()) {
                hVar.b(bVar.d());
                arrayList.add((String) entry.getKey());
            }
        }
        x.y0.a("UseCaseAttachState", "Active and attached use case: " + arrayList + " for camera: " + this.f305a);
        return hVar;
    }

    public Collection f() {
        return Collections.unmodifiableCollection(l(new a() { // from class: a0.s2
            @Override // a0.w2.a
            public final boolean a(w2.b bVar) {
                return w2.a(bVar);
            }
        }));
    }

    public i2.h g() {
        i2.h hVar = new i2.h();
        ArrayList arrayList = new ArrayList();
        for (Map.Entry entry : this.f306b.entrySet()) {
            b bVar = (b) entry.getValue();
            if (bVar.b()) {
                hVar.b(bVar.d());
                arrayList.add((String) entry.getKey());
            }
        }
        x.y0.a("UseCaseAttachState", "All use case: " + arrayList + " for camera: " + this.f305a);
        return hVar;
    }

    public Collection h() {
        return Collections.unmodifiableCollection(l(new a() { // from class: a0.u2
            @Override // a0.w2.a
            public final boolean a(w2.b bVar) {
                boolean b10;
                b10 = bVar.b();
                return b10;
            }
        }));
    }

    public Collection i() {
        return Collections.unmodifiableCollection(m(new a() { // from class: a0.v2
            @Override // a0.w2.a
            public final boolean a(w2.b bVar) {
                boolean b10;
                b10 = bVar.b();
                return b10;
            }
        }));
    }

    public Collection j() {
        return Collections.unmodifiableCollection(n(new a() { // from class: a0.t2
            @Override // a0.w2.a
            public final boolean a(w2.b bVar) {
                boolean b10;
                b10 = bVar.b();
                return b10;
            }
        }));
    }

    public boolean o(String str) {
        if (!this.f306b.containsKey(str)) {
            return false;
        }
        return ((b) this.f306b.get(str)).b();
    }

    public void p(String str) {
        this.f306b.remove(str);
    }

    public void q(String str, i2 i2Var, x2 x2Var, m2 m2Var, List list) {
        k(str, i2Var, x2Var, m2Var, list).g(true);
    }

    public void r(String str, i2 i2Var, x2 x2Var, m2 m2Var, List list) {
        k(str, i2Var, x2Var, m2Var, list).h(true);
        u(str, i2Var, x2Var, m2Var, list);
    }

    public void s(String str) {
        if (this.f306b.containsKey(str)) {
            b bVar = (b) this.f306b.get(str);
            bVar.h(false);
            if (!bVar.a()) {
                this.f306b.remove(str);
            }
        }
    }

    public void t(String str) {
        if (this.f306b.containsKey(str)) {
            b bVar = (b) this.f306b.get(str);
            bVar.g(false);
            if (!bVar.b()) {
                this.f306b.remove(str);
            }
        }
    }

    public void u(String str, i2 i2Var, x2 x2Var, m2 m2Var, List list) {
        if (!this.f306b.containsKey(str)) {
            return;
        }
        b bVar = new b(i2Var, x2Var, m2Var, list);
        b bVar2 = (b) this.f306b.get(str);
        bVar.h(bVar2.b());
        bVar.g(bVar2.a());
        this.f306b.put(str, bVar);
    }
}
