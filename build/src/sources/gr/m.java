package gr;

import gr.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class m {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends m {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ l.b f25189a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ g f25190b;

        a(l.b bVar, g gVar) {
            this.f25189a = bVar;
            this.f25190b = gVar;
        }

        @Override // gr.m
        l a() {
            return this.f25189a.b(this.f25190b, new r());
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
