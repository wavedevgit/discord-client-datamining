package cr;

import java.io.File;
import kotlin.jvm.internal.Intrinsics;
import wr.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements a {

    /* renamed from: a  reason: collision with root package name */
    private final File f19812a;

    public d(File destination) {
        Intrinsics.checkParameterIsNotNull(destination, "destination");
        this.f19812a = destination;
    }

    @Override // cr.a
    public boolean isSatisfied(File imageFile) {
        Intrinsics.checkParameterIsNotNull(imageFile, "imageFile");
        return Intrinsics.areEqual(imageFile.getAbsolutePath(), this.f19812a.getAbsolutePath());
    }

    @Override // cr.a
    public File satisfy(File imageFile) {
        Intrinsics.checkParameterIsNotNull(imageFile, "imageFile");
        return j.q(imageFile, this.f19812a, true, 0, 4, null);
    }
}
