package zq;

import java.io.File;
import kotlin.jvm.internal.Intrinsics;
import tr.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements a {

    /* renamed from: a  reason: collision with root package name */
    private final File f56077a;

    public d(File destination) {
        Intrinsics.checkParameterIsNotNull(destination, "destination");
        this.f56077a = destination;
    }

    @Override // zq.a
    public boolean isSatisfied(File imageFile) {
        Intrinsics.checkParameterIsNotNull(imageFile, "imageFile");
        return Intrinsics.areEqual(imageFile.getAbsolutePath(), this.f56077a.getAbsolutePath());
    }

    @Override // zq.a
    public File satisfy(File imageFile) {
        Intrinsics.checkParameterIsNotNull(imageFile, "imageFile");
        return j.q(imageFile, this.f56077a, true, 0, 4, null);
    }
}
