package o5;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class o extends g {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a extends y5.c {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ y5.b f42596d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ y5.c f42597e;

        /* renamed from: f  reason: collision with root package name */
        final /* synthetic */ q5.b f42598f;

        a(y5.b bVar, y5.c cVar, q5.b bVar2) {
            this.f42596d = bVar;
            this.f42597e = cVar;
            this.f42598f = bVar2;
        }

        @Override // y5.c
        /* renamed from: d */
        public q5.b a(y5.b bVar) {
            Object g10;
            this.f42596d.h(bVar.f(), bVar.a(), ((q5.b) bVar.g()).f47247a, ((q5.b) bVar.b()).f47247a, bVar.d(), bVar.c(), bVar.e());
            String str = (String) this.f42597e.a(this.f42596d);
            if (bVar.c() == 1.0f) {
                g10 = bVar.b();
            } else {
                g10 = bVar.g();
            }
            q5.b bVar2 = (q5.b) g10;
            this.f42598f.a(str, bVar2.f47248b, bVar2.f47249c, bVar2.f47250d, bVar2.f47251e, bVar2.f47252f, bVar2.f47253g, bVar2.f47254h, bVar2.f47255i, bVar2.f47256j, bVar2.f47257k, bVar2.f47258l, bVar2.f47259m);
            return this.f42598f;
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
        y5.c cVar = this.f42553e;
        if (cVar != null) {
            float f11 = aVar.f53990g;
            Float f12 = aVar.f53991h;
            if (f12 == null) {
                floatValue = Float.MAX_VALUE;
            } else {
                floatValue = f12.floatValue();
            }
            Object obj2 = aVar.f53985b;
            q5.b bVar2 = (q5.b) obj2;
            Object obj3 = aVar.f53986c;
            if (obj3 == null) {
                bVar = (q5.b) obj2;
            } else {
                bVar = (q5.b) obj3;
            }
            return (q5.b) cVar.b(f11, floatValue, bVar2, bVar, f10, d(), f());
        } else if (f10 == 1.0f && (obj = aVar.f53986c) != null) {
            return (q5.b) obj;
        } else {
            return (q5.b) aVar.f53985b;
        }
    }

    public void r(y5.c cVar) {
        super.o(new a(new y5.b(), cVar, new q5.b()));
    }
}
