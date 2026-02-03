package di;

import java.util.Set;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.zip.ZipFile;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements l {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ u f20610a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ Set f20611b;

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ AtomicBoolean f20612c;

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ o f20613d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(o oVar, u uVar, Set set, AtomicBoolean atomicBoolean) {
        this.f20613d = oVar;
        this.f20610a = uVar;
        this.f20611b = set;
        this.f20612c = atomicBoolean;
    }

    @Override // di.l
    public final void a(ZipFile zipFile, Set set) {
        this.f20613d.f(this.f20610a, set, new h(this));
    }
}
