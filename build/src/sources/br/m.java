package br;

import br.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class m {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends m {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ l.b f7549a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ g f7550b;

        a(l.b bVar, g gVar) {
            this.f7549a = bVar;
            this.f7550b = gVar;
        }

        @Override // br.m
        l a() {
            return this.f7549a.a(this.f7550b, new r());
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
