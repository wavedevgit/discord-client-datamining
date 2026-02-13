package n5;

import java.util.ArrayList;
import java.util.List;
import o5.a;
import t5.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class u implements c, a.b {

    /* renamed from: a  reason: collision with root package name */
    private final String f37540a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f37541b;

    /* renamed from: c  reason: collision with root package name */
    private final List f37542c = new ArrayList();

    /* renamed from: d  reason: collision with root package name */
    private final t.a f37543d;

    /* renamed from: e  reason: collision with root package name */
    private final o5.a f37544e;

    /* renamed from: f  reason: collision with root package name */
    private final o5.a f37545f;

    /* renamed from: g  reason: collision with root package name */
    private final o5.a f37546g;

    public u(u5.b bVar, t5.t tVar) {
        this.f37540a = tVar.c();
        this.f37541b = tVar.g();
        this.f37543d = tVar.f();
        o5.d a10 = tVar.e().a();
        this.f37544e = a10;
        o5.d a11 = tVar.b().a();
        this.f37545f = a11;
        o5.d a12 = tVar.d().a();
        this.f37546g = a12;
        bVar.i(a10);
        bVar.i(a11);
        bVar.i(a12);
        a10.a(this);
        a11.a(this);
        a12.a(this);
    }

    @Override // o5.a.b
    public void a() {
        for (int i10 = 0; i10 < this.f37542c.size(); i10++) {
            ((a.b) this.f37542c.get(i10)).a();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(a.b bVar) {
        this.f37542c.add(bVar);
    }

    public o5.a e() {
        return this.f37545f;
    }

    public o5.a g() {
        return this.f37546g;
    }

    public o5.a i() {
        return this.f37544e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public t.a j() {
        return this.f37543d;
    }

    public boolean k() {
        return this.f37541b;
    }

    @Override // n5.c
    public void b(List list, List list2) {
    }
}
