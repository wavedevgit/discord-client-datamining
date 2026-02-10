package ir;

import cs.j;
import java.io.File;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements a {

    /* renamed from: a  reason: collision with root package name */
    private final File f29636a;

    public d(File destination) {
        Intrinsics.checkParameterIsNotNull(destination, "destination");
        this.f29636a = destination;
    }

    @Override // ir.a
    public boolean isSatisfied(File imageFile) {
        Intrinsics.checkParameterIsNotNull(imageFile, "imageFile");
        return Intrinsics.areEqual(imageFile.getAbsolutePath(), this.f29636a.getAbsolutePath());
    }

    @Override // ir.a
    public File satisfy(File imageFile) {
        Intrinsics.checkParameterIsNotNull(imageFile, "imageFile");
        return j.q(imageFile, this.f29636a, true, 0, 4, null);
    }
}
