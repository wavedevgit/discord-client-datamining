package o5;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class o extends g {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a extends z5.c {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ z5.b f38635d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ z5.c f38636e;

        /* renamed from: f  reason: collision with root package name */
        final /* synthetic */ r5.b f38637f;

        a(z5.b bVar, z5.c cVar, r5.b bVar2) {
            this.f38635d = bVar;
            this.f38636e = cVar;
            this.f38637f = bVar2;
        }

        @Override // z5.c
        /* renamed from: d */
        public r5.b a(z5.b bVar) {
            Object g10;
            this.f38635d.h(bVar.f(), bVar.a(), ((r5.b) bVar.g()).f46130a, ((r5.b) bVar.b()).f46130a, bVar.d(), bVar.c(), bVar.e());
            String str = (String) this.f38636e.a(this.f38635d);
            if (bVar.c() == 1.0f) {
                g10 = bVar.b();
            } else {
                g10 = bVar.g();
            }
            r5.b bVar2 = (r5.b) g10;
            this.f38637f.a(str, bVar2.f46131b, bVar2.f46132c, bVar2.f46133d, bVar2.f46134e, bVar2.f46135f, bVar2.f46136g, bVar2.f46137h, bVar2.f46138i, bVar2.f46139j, bVar2.f46140k, bVar2.f46141l, bVar2.f46142m);
            return this.f38637f;
        }
    }

    public o(List list) {
        super(list);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // o5.a
    /* renamed from: q */
    public r5.b i(z5.a aVar, float f10) {
        Object obj;
        float floatValue;
        r5.b bVar;
        z5.c cVar = this.f38587e;
        if (cVar != null) {
            float f11 = aVar.f56098g;
            Float f12 = aVar.f56099h;
            if (f12 == null) {
                floatValue = Float.MAX_VALUE;
            } else {
                floatValue = f12.floatValue();
            }
            Object obj2 = aVar.f56093b;
            r5.b bVar2 = (r5.b) obj2;
            Object obj3 = aVar.f56094c;
            if (obj3 == null) {
                bVar = (r5.b) obj2;
            } else {
                bVar = (r5.b) obj3;
            }
            return (r5.b) cVar.b(f11, floatValue, bVar2, bVar, f10, d(), f());
        } else if (f10 == 1.0f && (obj = aVar.f56094c) != null) {
            return (r5.b) obj;
        } else {
            return (r5.b) aVar.f56093b;
        }
    }

    public void r(z5.c cVar) {
        super.o(new a(new z5.b(), cVar, new r5.b()));
    }
}
