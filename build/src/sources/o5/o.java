package o5;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class o extends g {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a extends z5.c {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ z5.b f40308d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ z5.c f40309e;

        /* renamed from: f  reason: collision with root package name */
        final /* synthetic */ r5.b f40310f;

        a(z5.b bVar, z5.c cVar, r5.b bVar2) {
            this.f40308d = bVar;
            this.f40309e = cVar;
            this.f40310f = bVar2;
        }

        @Override // z5.c
        /* renamed from: d */
        public r5.b a(z5.b bVar) {
            Object g10;
            this.f40308d.h(bVar.f(), bVar.a(), ((r5.b) bVar.g()).f47675a, ((r5.b) bVar.b()).f47675a, bVar.d(), bVar.c(), bVar.e());
            String str = (String) this.f40309e.a(this.f40308d);
            if (bVar.c() == 1.0f) {
                g10 = bVar.b();
            } else {
                g10 = bVar.g();
            }
            r5.b bVar2 = (r5.b) g10;
            this.f40310f.a(str, bVar2.f47676b, bVar2.f47677c, bVar2.f47678d, bVar2.f47679e, bVar2.f47680f, bVar2.f47681g, bVar2.f47682h, bVar2.f47683i, bVar2.f47684j, bVar2.f47685k, bVar2.f47686l, bVar2.f47687m);
            return this.f40310f;
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
        z5.c cVar = this.f40260e;
        if (cVar != null) {
            float f11 = aVar.f56058g;
            Float f12 = aVar.f56059h;
            if (f12 == null) {
                floatValue = Float.MAX_VALUE;
            } else {
                floatValue = f12.floatValue();
            }
            Object obj2 = aVar.f56053b;
            r5.b bVar2 = (r5.b) obj2;
            Object obj3 = aVar.f56054c;
            if (obj3 == null) {
                bVar = (r5.b) obj2;
            } else {
                bVar = (r5.b) obj3;
            }
            return (r5.b) cVar.b(f11, floatValue, bVar2, bVar, f10, d(), f());
        } else if (f10 == 1.0f && (obj = aVar.f56054c) != null) {
            return (r5.b) obj;
        } else {
            return (r5.b) aVar.f56053b;
        }
    }

    public void r(z5.c cVar) {
        super.o(new a(new z5.b(), cVar, new r5.b()));
    }
}
