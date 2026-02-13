package ki;

import java.util.Set;
import java.util.zip.ZipFile;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements l {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ Set f32329a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ u f32330b;

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ o f32331c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(o oVar, Set set, u uVar) {
        this.f32331c = oVar;
        this.f32329a = set;
        this.f32330b = uVar;
    }

    @Override // ki.l
    public final void a(ZipFile zipFile, Set set) {
        this.f32329a.addAll(o.a(this.f32331c, set, this.f32330b, zipFile));
    }
}
