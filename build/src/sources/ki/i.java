package ki;

import java.util.Set;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.zip.ZipFile;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements l {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ u f31757a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ Set f31758b;

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ AtomicBoolean f31759c;

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ o f31760d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(o oVar, u uVar, Set set, AtomicBoolean atomicBoolean) {
        this.f31760d = oVar;
        this.f31757a = uVar;
        this.f31758b = set;
        this.f31759c = atomicBoolean;
    }

    @Override // ki.l
    public final void a(ZipFile zipFile, Set set) {
        this.f31760d.f(this.f31757a, set, new h(this));
    }
}
