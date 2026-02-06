package o5;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class o extends g {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a extends y5.c {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ y5.b f41525d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ y5.c f41526e;

        /* renamed from: f  reason: collision with root package name */
        final /* synthetic */ q5.b f41527f;

        a(y5.b bVar, y5.c cVar, q5.b bVar2) {
            this.f41525d = bVar;
            this.f41526e = cVar;
            this.f41527f = bVar2;
        }

        @Override // y5.c
        /* renamed from: d */
        public q5.b a(y5.b bVar) {
            Object g10;
            this.f41525d.h(bVar.f(), bVar.a(), ((q5.b) bVar.g()).f46509a, ((q5.b) bVar.b()).f46509a, bVar.d(), bVar.c(), bVar.e());
            String str = (String) this.f41526e.a(this.f41525d);
            if (bVar.c() == 1.0f) {
                g10 = bVar.b();
            } else {
                g10 = bVar.g();
            }
            q5.b bVar2 = (q5.b) g10;
            this.f41527f.a(str, bVar2.f46510b, bVar2.f46511c, bVar2.f46512d, bVar2.f46513e, bVar2.f46514f, bVar2.f46515g, bVar2.f46516h, bVar2.f46517i, bVar2.f46518j, bVar2.f46519k, bVar2.f46520l, bVar2.f46521m);
            return this.f41527f;
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
        y5.c cVar = this.f41482e;
        if (cVar != null) {
            float f11 = aVar.f54985g;
            Float f12 = aVar.f54986h;
            if (f12 == null) {
                floatValue = Float.MAX_VALUE;
            } else {
                floatValue = f12.floatValue();
            }
            Object obj2 = aVar.f54980b;
            q5.b bVar2 = (q5.b) obj2;
            Object obj3 = aVar.f54981c;
            if (obj3 == null) {
                bVar = (q5.b) obj2;
            } else {
                bVar = (q5.b) obj3;
            }
            return (q5.b) cVar.b(f11, floatValue, bVar2, bVar, f10, d(), f());
        } else if (f10 == 1.0f && (obj = aVar.f54981c) != null) {
            return (q5.b) obj;
        } else {
            return (q5.b) aVar.f54980b;
        }
    }

    public void r(y5.c cVar) {
        super.o(new a(new y5.b(), cVar, new q5.b()));
    }
}
