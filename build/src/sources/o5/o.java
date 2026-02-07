package o5;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class o extends g {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a extends y5.c {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ y5.b f41573d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ y5.c f41574e;

        /* renamed from: f  reason: collision with root package name */
        final /* synthetic */ q5.b f41575f;

        a(y5.b bVar, y5.c cVar, q5.b bVar2) {
            this.f41573d = bVar;
            this.f41574e = cVar;
            this.f41575f = bVar2;
        }

        @Override // y5.c
        /* renamed from: d */
        public q5.b a(y5.b bVar) {
            Object g10;
            this.f41573d.h(bVar.f(), bVar.a(), ((q5.b) bVar.g()).f46557a, ((q5.b) bVar.b()).f46557a, bVar.d(), bVar.c(), bVar.e());
            String str = (String) this.f41574e.a(this.f41573d);
            if (bVar.c() == 1.0f) {
                g10 = bVar.b();
            } else {
                g10 = bVar.g();
            }
            q5.b bVar2 = (q5.b) g10;
            this.f41575f.a(str, bVar2.f46558b, bVar2.f46559c, bVar2.f46560d, bVar2.f46561e, bVar2.f46562f, bVar2.f46563g, bVar2.f46564h, bVar2.f46565i, bVar2.f46566j, bVar2.f46567k, bVar2.f46568l, bVar2.f46569m);
            return this.f41575f;
        }
    }

    public o(List list) {
        super(list);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // o5.a
    /* renamed from: q */
    public q5.b i(y5.a aVar, float f10) {
        Object obj;
        float floatValue;
        q5.b bVar;
        y5.c cVar = this.f41530e;
        if (cVar != null) {
            float f11 = aVar.f55033g;
            Float f12 = aVar.f55034h;
            if (f12 == null) {
                floatValue = Float.MAX_VALUE;
            } else {
                floatValue = f12.floatValue();
            }
            Object obj2 = aVar.f55028b;
            q5.b bVar2 = (q5.b) obj2;
            Object obj3 = aVar.f55029c;
            if (obj3 == null) {
                bVar = (q5.b) obj2;
            } else {
                bVar = (q5.b) obj3;
            }
            return (q5.b) cVar.b(f11, floatValue, bVar2, bVar, f10, d(), f());
        } else if (f10 == 1.0f && (obj = aVar.f55029c) != null) {
            return (q5.b) obj;
        } else {
            return (q5.b) aVar.f55028b;
        }
    }

    public void r(y5.c cVar) {
        super.o(new a(new y5.b(), cVar, new q5.b()));
    }
}
