package di;

import java.util.Set;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.zip.ZipFile;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements l {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ u f21751a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ Set f21752b;

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ AtomicBoolean f21753c;

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ o f21754d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(o oVar, u uVar, Set set, AtomicBoolean atomicBoolean) {
        this.f21754d = oVar;
        this.f21751a = uVar;
        this.f21752b = set;
        this.f21753c = atomicBoolean;
    }

    @Override // di.l
    public final void a(ZipFile zipFile, Set set) {
        this.f21754d.f(this.f21751a, set, new h(this));
    }
}
