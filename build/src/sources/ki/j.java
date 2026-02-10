package ki;

import java.util.Set;
import java.util.zip.ZipFile;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements l {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ Set f31760a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ u f31761b;

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ o f31762c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(o oVar, Set set, u uVar) {
        this.f31762c = oVar;
        this.f31760a = set;
        this.f31761b = uVar;
    }

    @Override // ki.l
    public final void a(ZipFile zipFile, Set set) {
        this.f31760a.addAll(o.a(this.f31762c, set, this.f31761b, zipFile));
    }
}
