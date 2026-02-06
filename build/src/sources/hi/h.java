package hi;

import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class h implements m {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ i f26004a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(i iVar) {
        this.f26004a = iVar;
    }

    @Override // hi.m
    public final void a(n nVar, File file, boolean z10) {
        this.f26004a.f26006b.add(file);
        if (!z10) {
            this.f26004a.f26007c.set(false);
        }
    }
}
