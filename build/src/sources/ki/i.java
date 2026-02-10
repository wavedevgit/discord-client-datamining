package ki;

import java.util.Set;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.zip.ZipFile;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements l {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ u f31756a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ Set f31757b;

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ AtomicBoolean f31758c;

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ o f31759d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(o oVar, u uVar, Set set, AtomicBoolean atomicBoolean) {
        this.f31759d = oVar;
        this.f31756a = uVar;
        this.f31757b = set;
        this.f31758c = atomicBoolean;
    }

    @Override // ki.l
    public final void a(ZipFile zipFile, Set set) {
        this.f31759d.f(this.f31756a, set, new h(this));
    }
}
