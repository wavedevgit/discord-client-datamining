package hi;

import java.util.Set;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.zip.ZipFile;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements l {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ u f26005a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ Set f26006b;

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ AtomicBoolean f26007c;

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ o f26008d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(o oVar, u uVar, Set set, AtomicBoolean atomicBoolean) {
        this.f26008d = oVar;
        this.f26005a = uVar;
        this.f26006b = set;
        this.f26007c = atomicBoolean;
    }

    @Override // hi.l
    public final void a(ZipFile zipFile, Set set) {
        this.f26008d.f(this.f26005a, set, new h(this));
    }
}
