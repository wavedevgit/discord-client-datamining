package ir;

import ir.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class m {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends m {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ l.b f29364a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ g f29365b;

        a(l.b bVar, g gVar) {
            this.f29364a = bVar;
            this.f29365b = gVar;
        }

        @Override // ir.m
        l a() {
            return this.f29364a.b(this.f29365b, new r());
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
