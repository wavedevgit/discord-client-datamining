package n5;

import java.util.ArrayList;
import java.util.List;
import o5.a;
import s5.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class u implements c, a.b {

    /* renamed from: a  reason: collision with root package name */
    private final String f39807a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f39808b;

    /* renamed from: c  reason: collision with root package name */
    private final List f39809c = new ArrayList();

    /* renamed from: d  reason: collision with root package name */
    private final t.a f39810d;

    /* renamed from: e  reason: collision with root package name */
    private final o5.a f39811e;

    /* renamed from: f  reason: collision with root package name */
    private final o5.a f39812f;

    /* renamed from: g  reason: collision with root package name */
    private final o5.a f39813g;

    public u(t5.b bVar, s5.t tVar) {
        this.f39807a = tVar.c();
        this.f39808b = tVar.g();
        this.f39810d = tVar.f();
        o5.a a10 = tVar.e().a();
        this.f39811e = a10;
        o5.a a11 = tVar.b().a();
        this.f39812f = a11;
        o5.a a12 = tVar.d().a();
        this.f39813g = a12;
        bVar.i(a10);
        bVar.i(a11);
        bVar.i(a12);
        a10.a(this);
        a11.a(this);
        a12.a(this);
    }

    @Override // o5.a.b
    public void a() {
        for (int i10 = 0; i10 < this.f39809c.size(); i10++) {
            ((a.b) this.f39809c.get(i10)).a();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c(a.b bVar) {
        this.f39809c.add(bVar);
    }

    public o5.a d() {
        return this.f39812f;
    }

    public o5.a f() {
        return this.f39813g;
    }

    public o5.a i() {
        return this.f39811e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public t.a j() {
        return this.f39810d;
    }

    public boolean k() {
        return this.f39808b;
    }

    @Override // n5.c
    public void b(List list, List list2) {
    }
}
