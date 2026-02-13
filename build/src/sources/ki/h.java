package ki;

import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class h implements m {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ i f32324a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(i iVar) {
        this.f32324a = iVar;
    }

    @Override // ki.m
    public final void a(n nVar, File file, boolean z10) {
        this.f32324a.f32326b.add(file);
        if (!z10) {
            this.f32324a.f32327c.set(false);
        }
    }
}
