package n5;

import java.util.ArrayList;
import java.util.List;
import o5.a;
import t5.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class u implements c, a.b {

    /* renamed from: a  reason: collision with root package name */
    private final String f36971a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f36972b;

    /* renamed from: c  reason: collision with root package name */
    private final List f36973c = new ArrayList();

    /* renamed from: d  reason: collision with root package name */
    private final t.a f36974d;

    /* renamed from: e  reason: collision with root package name */
    private final o5.a f36975e;

    /* renamed from: f  reason: collision with root package name */
    private final o5.a f36976f;

    /* renamed from: g  reason: collision with root package name */
    private final o5.a f36977g;

    public u(u5.b bVar, t5.t tVar) {
        this.f36971a = tVar.c();
        this.f36972b = tVar.g();
        this.f36974d = tVar.f();
        o5.d a10 = tVar.e().a();
        this.f36975e = a10;
        o5.d a11 = tVar.b().a();
        this.f36976f = a11;
        o5.d a12 = tVar.d().a();
        this.f36977g = a12;
        bVar.i(a10);
        bVar.i(a11);
        bVar.i(a12);
        a10.a(this);
        a11.a(this);
        a12.a(this);
    }

    @Override // o5.a.b
    public void a() {
        for (int i10 = 0; i10 < this.f36973c.size(); i10++) {
            ((a.b) this.f36973c.get(i10)).a();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(a.b bVar) {
        this.f36973c.add(bVar);
    }

    public o5.a e() {
        return this.f36976f;
    }

    public o5.a g() {
        return this.f36977g;
    }

    public o5.a i() {
        return this.f36975e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public t.a j() {
        return this.f36974d;
    }

    public boolean k() {
        return this.f36972b;
    }

    @Override // n5.c
    public void b(List list, List list2) {
    }
}
