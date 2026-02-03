package dr;

import dr.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class m {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends m {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ l.b f20865a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ g f20866b;

        a(l.b bVar, g gVar) {
            this.f20865a = bVar;
            this.f20866b = gVar;
        }

        @Override // dr.m
        l a() {
            return this.f20865a.b(this.f20866b, new r());
        }
    }

    m() {
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static m b(l.b bVar, g gVar) {
        return new a(bVar, gVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract l a();
}
