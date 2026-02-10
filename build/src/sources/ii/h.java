package ii;

import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class h implements m {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ i f26867a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(i iVar) {
        this.f26867a = iVar;
    }

    @Override // ii.m
    public final void a(n nVar, File file, boolean z10) {
        this.f26867a.f26869b.add(file);
        if (!z10) {
            this.f26867a.f26870c.set(false);
        }
    }
}
