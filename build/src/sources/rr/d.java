package rr;

import java.io.File;
import kotlin.jvm.internal.Intrinsics;
import ls.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements a {

    /* renamed from: a  reason: collision with root package name */
    private final File f48311a;

    public d(File destination) {
        Intrinsics.checkParameterIsNotNull(destination, "destination");
        this.f48311a = destination;
    }

    @Override // rr.a
    public boolean isSatisfied(File imageFile) {
        Intrinsics.checkParameterIsNotNull(imageFile, "imageFile");
        return Intrinsics.areEqual(imageFile.getAbsolutePath(), this.f48311a.getAbsolutePath());
    }

    @Override // rr.a
    public File satisfy(File imageFile) {
        Intrinsics.checkParameterIsNotNull(imageFile, "imageFile");
        return j.q(imageFile, this.f48311a, true, 0, 4, null);
    }
}
