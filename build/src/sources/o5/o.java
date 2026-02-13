package o5;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class o extends g {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a extends z5.c {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ z5.b f39203d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ z5.c f39204e;

        /* renamed from: f  reason: collision with root package name */
        final /* synthetic */ r5.b f39205f;

        a(z5.b bVar, z5.c cVar, r5.b bVar2) {
            this.f39203d = bVar;
            this.f39204e = cVar;
            this.f39205f = bVar2;
        }

        @Override // z5.c
        /* renamed from: d */
        public r5.b a(z5.b bVar) {
            Object g10;
            this.f39203d.h(bVar.f(), bVar.a(), ((r5.b) bVar.g()).f46698a, ((r5.b) bVar.b()).f46698a, bVar.d(), bVar.c(), bVar.e());
            String str = (String) this.f39204e.a(this.f39203d);
            if (bVar.c() == 1.0f) {
                g10 = bVar.b();
            } else {
                g10 = bVar.g();
            }
            r5.b bVar2 = (r5.b) g10;
            this.f39205f.a(str, bVar2.f46699b, bVar2.f46700c, bVar2.f46701d, bVar2.f46702e, bVar2.f46703f, bVar2.f46704g, bVar2.f46705h, bVar2.f46706i, bVar2.f46707j, bVar2.f46708k, bVar2.f46709l, bVar2.f46710m);
            return this.f39205f;
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
        z5.c cVar = this.f39155e;
        if (cVar != null) {
            float f11 = aVar.f56666g;
            Float f12 = aVar.f56667h;
            if (f12 == null) {
                floatValue = Float.MAX_VALUE;
            } else {
                floatValue = f12.floatValue();
            }
            Object obj2 = aVar.f56661b;
            r5.b bVar2 = (r5.b) obj2;
            Object obj3 = aVar.f56662c;
            if (obj3 == null) {
                bVar = (r5.b) obj2;
            } else {
                bVar = (r5.b) obj3;
            }
            return (r5.b) cVar.b(f11, floatValue, bVar2, bVar, f10, d(), f());
        } else if (f10 == 1.0f && (obj = aVar.f56662c) != null) {
            return (r5.b) obj;
        } else {
            return (r5.b) aVar.f56661b;
        }
    }

    public void r(z5.c cVar) {
        super.o(new a(new z5.b(), cVar, new r5.b()));
    }
}
