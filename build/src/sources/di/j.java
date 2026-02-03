package di;

import java.util.Set;
import java.util.zip.ZipFile;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements l {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ Set f21755a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ u f21756b;

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ o f21757c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(o oVar, Set set, u uVar) {
        this.f21757c = oVar;
        this.f21755a = set;
        this.f21756b = uVar;
    }

    @Override // di.l
    public final void a(ZipFile zipFile, Set set) {
        this.f21755a.addAll(o.a(this.f21757c, set, this.f21756b, zipFile));
    }
}
