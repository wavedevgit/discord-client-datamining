package o5;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class o extends g {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a extends z5.c {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ z5.b f38634d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ z5.c f38635e;

        /* renamed from: f  reason: collision with root package name */
        final /* synthetic */ r5.b f38636f;

        a(z5.b bVar, z5.c cVar, r5.b bVar2) {
            this.f38634d = bVar;
            this.f38635e = cVar;
            this.f38636f = bVar2;
        }

        @Override // z5.c
        /* renamed from: d */
        public r5.b a(z5.b bVar) {
            Object g10;
            this.f38634d.h(bVar.f(), bVar.a(), ((r5.b) bVar.g()).f46129a, ((r5.b) bVar.b()).f46129a, bVar.d(), bVar.c(), bVar.e());
            String str = (String) this.f38635e.a(this.f38634d);
            if (bVar.c() == 1.0f) {
                g10 = bVar.b();
            } else {
                g10 = bVar.g();
            }
            r5.b bVar2 = (r5.b) g10;
            this.f38636f.a(str, bVar2.f46130b, bVar2.f46131c, bVar2.f46132d, bVar2.f46133e, bVar2.f46134f, bVar2.f46135g, bVar2.f46136h, bVar2.f46137i, bVar2.f46138j, bVar2.f46139k, bVar2.f46140l, bVar2.f46141m);
            return this.f38636f;
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
        z5.c cVar = this.f38586e;
        if (cVar != null) {
            float f11 = aVar.f56097g;
            Float f12 = aVar.f56098h;
            if (f12 == null) {
                floatValue = Float.MAX_VALUE;
            } else {
                floatValue = f12.floatValue();
            }
            Object obj2 = aVar.f56092b;
            r5.b bVar2 = (r5.b) obj2;
            Object obj3 = aVar.f56093c;
            if (obj3 == null) {
                bVar = (r5.b) obj2;
            } else {
                bVar = (r5.b) obj3;
            }
            return (r5.b) cVar.b(f11, floatValue, bVar2, bVar, f10, d(), f());
        } else if (f10 == 1.0f && (obj = aVar.f56093c) != null) {
            return (r5.b) obj;
        } else {
            return (r5.b) aVar.f56092b;
        }
    }

    public void r(z5.c cVar) {
        super.o(new a(new z5.b(), cVar, new r5.b()));
    }
}
