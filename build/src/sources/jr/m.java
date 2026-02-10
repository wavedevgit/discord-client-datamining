package jr;

import jr.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class m {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends m {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ l.b f30443a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ g f30444b;

        a(l.b bVar, g gVar) {
            this.f30443a = bVar;
            this.f30444b = gVar;
        }

        @Override // jr.m
        l a() {
            return this.f30443a.b(this.f30444b, new r());
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
