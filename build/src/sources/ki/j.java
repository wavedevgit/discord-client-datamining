package ki;

import java.util.Set;
import java.util.zip.ZipFile;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements l {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ Set f31761a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ u f31762b;

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ o f31763c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(o oVar, Set set, u uVar) {
        this.f31763c = oVar;
        this.f31761a = set;
        this.f31762b = uVar;
    }

    @Override // ki.l
    public final void a(ZipFile zipFile, Set set) {
        this.f31761a.addAll(o.a(this.f31763c, set, this.f31762b, zipFile));
    }
}
