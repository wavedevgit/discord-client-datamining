package fr;

import java.io.File;
import kotlin.jvm.internal.Intrinsics;
import zr.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements a {

    /* renamed from: a  reason: collision with root package name */
    private final File f23423a;

    public d(File destination) {
        Intrinsics.checkParameterIsNotNull(destination, "destination");
        this.f23423a = destination;
    }

    @Override // fr.a
    public boolean isSatisfied(File imageFile) {
        Intrinsics.checkParameterIsNotNull(imageFile, "imageFile");
        return Intrinsics.areEqual(imageFile.getAbsolutePath(), this.f23423a.getAbsolutePath());
    }

    @Override // fr.a
    public File satisfy(File imageFile) {
        Intrinsics.checkParameterIsNotNull(imageFile, "imageFile");
        return j.q(imageFile, this.f23423a, true, 0, 4, null);
    }
}
