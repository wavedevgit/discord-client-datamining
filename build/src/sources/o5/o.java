package o5;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class o extends g {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a extends y5.c {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ y5.b f42452d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ y5.c f42453e;

        /* renamed from: f  reason: collision with root package name */
        final /* synthetic */ q5.b f42454f;

        a(y5.b bVar, y5.c cVar, q5.b bVar2) {
            this.f42452d = bVar;
            this.f42453e = cVar;
            this.f42454f = bVar2;
        }

        @Override // y5.c
        /* renamed from: d */
        public q5.b a(y5.b bVar) {
            Object g10;
            this.f42452d.h(bVar.f(), bVar.a(), ((q5.b) bVar.g()).f46976a, ((q5.b) bVar.b()).f46976a, bVar.d(), bVar.c(), bVar.e());
            String str = (String) this.f42453e.a(this.f42452d);
            if (bVar.c() == 1.0f) {
                g10 = bVar.b();
            } else {
                g10 = bVar.g();
            }
            q5.b bVar2 = (q5.b) g10;
            this.f42454f.a(str, bVar2.f46977b, bVar2.f46978c, bVar2.f46979d, bVar2.f46980e, bVar2.f46981f, bVar2.f46982g, bVar2.f46983h, bVar2.f46984i, bVar2.f46985j, bVar2.f46986k, bVar2.f46987l, bVar2.f46988m);
            return this.f42454f;
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
        y5.c cVar = this.f42409e;
        if (cVar != null) {
            float f11 = aVar.f53999g;
            Float f12 = aVar.f54000h;
            if (f12 == null) {
                floatValue = Float.MAX_VALUE;
            } else {
                floatValue = f12.floatValue();
            }
            Object obj2 = aVar.f53994b;
            q5.b bVar2 = (q5.b) obj2;
            Object obj3 = aVar.f53995c;
            if (obj3 == null) {
                bVar = (q5.b) obj2;
            } else {
                bVar = (q5.b) obj3;
            }
            return (q5.b) cVar.b(f11, floatValue, bVar2, bVar, f10, d(), f());
        } else if (f10 == 1.0f && (obj = aVar.f53995c) != null) {
            return (q5.b) obj;
        } else {
            return (q5.b) aVar.f53994b;
        }
    }

    public void r(y5.c cVar) {
        super.o(new a(new y5.b(), cVar, new q5.b()));
    }
}
