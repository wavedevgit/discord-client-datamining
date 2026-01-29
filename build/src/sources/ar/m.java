package ar;

import ar.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class m {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends m {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ l.b f6735a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ g f6736b;

        a(l.b bVar, g gVar) {
            this.f6735a = bVar;
            this.f6736b = gVar;
        }

        @Override // ar.m
        l a() {
            return this.f6735a.a(this.f6736b, new r());
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
