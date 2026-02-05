package o5;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class o extends g {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a extends y5.c {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ y5.b f42302d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ y5.c f42303e;

        /* renamed from: f  reason: collision with root package name */
        final /* synthetic */ q5.b f42304f;

        a(y5.b bVar, y5.c cVar, q5.b bVar2) {
            this.f42302d = bVar;
            this.f42303e = cVar;
            this.f42304f = bVar2;
        }

        @Override // y5.c
        /* renamed from: d */
        public q5.b a(y5.b bVar) {
            Object g10;
            this.f42302d.h(bVar.f(), bVar.a(), ((q5.b) bVar.g()).f47461a, ((q5.b) bVar.b()).f47461a, bVar.d(), bVar.c(), bVar.e());
            String str = (String) this.f42303e.a(this.f42302d);
            if (bVar.c() == 1.0f) {
                g10 = bVar.b();
            } else {
                g10 = bVar.g();
            }
            q5.b bVar2 = (q5.b) g10;
            this.f42304f.a(str, bVar2.f47462b, bVar2.f47463c, bVar2.f47464d, bVar2.f47465e, bVar2.f47466f, bVar2.f47467g, bVar2.f47468h, bVar2.f47469i, bVar2.f47470j, bVar2.f47471k, bVar2.f47472l, bVar2.f47473m);
            return this.f42304f;
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
        y5.c cVar = this.f42259e;
        if (cVar != null) {
            float f11 = aVar.f54441g;
            Float f12 = aVar.f54442h;
            if (f12 == null) {
                floatValue = Float.MAX_VALUE;
            } else {
                floatValue = f12.floatValue();
            }
            Object obj2 = aVar.f54436b;
            q5.b bVar2 = (q5.b) obj2;
            Object obj3 = aVar.f54437c;
            if (obj3 == null) {
                bVar = (q5.b) obj2;
            } else {
                bVar = (q5.b) obj3;
            }
            return (q5.b) cVar.b(f11, floatValue, bVar2, bVar, f10, d(), f());
        } else if (f10 == 1.0f && (obj = aVar.f54437c) != null) {
            return (q5.b) obj;
        } else {
            return (q5.b) aVar.f54436b;
        }
    }

    public void r(y5.c cVar) {
        super.o(new a(new y5.b(), cVar, new q5.b()));
    }
}
